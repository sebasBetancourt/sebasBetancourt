export const GITHUB_USER = "sebasBetancourt";

export type ContributionDay = {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
};

export type TopRepo = {
  name: string;
  url: string | null;
  isPrivate: boolean;
  commits: number;
};

export type GithubActivity = {
  login: string;
  avatarUrl: string;
  followers: number;
  following: number;
  publicRepos: number;
  totalContributions: number;
  days: ContributionDay[];
  commits: number | null;
  pullRequests: number | null;
  reviews: number | null;
  reposContributed: number | null;
  topRepos: TopRepo[];
};

const REVALIDATE_SECONDS = 3600;

const LEVELS: Record<string, ContributionDay["level"]> = {
  NONE: 0,
  FIRST_QUARTILE: 1,
  SECOND_QUARTILE: 2,
  THIRD_QUARTILE: 3,
  FOURTH_QUARTILE: 4,
};

const QUERY = `
  query($login: String!) {
    user(login: $login) {
      avatarUrl
      followers { totalCount }
      following { totalCount }
      repositories(ownerAffiliations: OWNER, privacy: PUBLIC) { totalCount }
      contributionsCollection {
        totalCommitContributions
        totalPullRequestContributions
        totalPullRequestReviewContributions
        totalRepositoriesWithContributedCommits
        contributionCalendar {
          totalContributions
          weeks { contributionDays { date contributionCount contributionLevel } }
        }
        commitContributionsByRepository(maxRepositories: 6) {
          repository { nameWithOwner url isPrivate }
          contributions { totalCount }
        }
      }
    }
  }
`;

type GraphQLUser = {
  avatarUrl: string;
  followers: { totalCount: number };
  following: { totalCount: number };
  repositories: { totalCount: number };
  contributionsCollection: {
    totalCommitContributions: number;
    totalPullRequestContributions: number;
    totalPullRequestReviewContributions: number;
    totalRepositoriesWithContributedCommits: number;
    contributionCalendar: {
      totalContributions: number;
      weeks: { contributionDays: { date: string; contributionCount: number; contributionLevel: string }[] }[];
    };
    commitContributionsByRepository: {
      repository: { nameWithOwner: string; url: string; isPrivate: boolean };
      contributions: { totalCount: number };
    }[];
  };
};

async function fetchFromGraphQL(token: string): Promise<GithubActivity> {
  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify({ query: QUERY, variables: { login: GITHUB_USER } }),
    next: { revalidate: REVALIDATE_SECONDS },
  });
  if (!res.ok) throw new Error(`GitHub GraphQL ${res.status}`);

  const json = (await res.json()) as { data?: { user: GraphQLUser | null }; errors?: unknown };
  const user = json.data?.user;
  if (!user) throw new Error("GitHub GraphQL returned no user");

  const c = user.contributionsCollection;
  return {
    login: GITHUB_USER,
    avatarUrl: user.avatarUrl,
    followers: user.followers.totalCount,
    following: user.following.totalCount,
    publicRepos: user.repositories.totalCount,
    totalContributions: c.contributionCalendar.totalContributions,
    days: c.contributionCalendar.weeks.flatMap((w) =>
      w.contributionDays.map((d) => ({
        date: d.date,
        count: d.contributionCount,
        level: LEVELS[d.contributionLevel] ?? 0,
      })),
    ),
    commits: c.totalCommitContributions,
    pullRequests: c.totalPullRequestContributions,
    reviews: c.totalPullRequestReviewContributions,
    reposContributed: c.totalRepositoriesWithContributedCommits,
    topRepos: c.commitContributionsByRepository.map((r) => ({
      name: r.repository.nameWithOwner,
      url: r.repository.isPrivate ? null : r.repository.url,
      isPrivate: r.repository.isPrivate,
      commits: r.contributions.totalCount,
    })),
  };
}

async function fetchFromPublicApis(): Promise<GithubActivity> {
  const [userRes, calendarRes] = await Promise.all([
    fetch(`https://api.github.com/users/${GITHUB_USER}`, { next: { revalidate: REVALIDATE_SECONDS } }),
    fetch(`https://github-contributions-api.jogruber.de/v4/${GITHUB_USER}?y=last`, {
      next: { revalidate: REVALIDATE_SECONDS },
    }),
  ]);
  if (!calendarRes.ok) throw new Error(`Contributions API ${calendarRes.status}`);

  const user = userRes.ok ? await userRes.json() : {};
  const calendar = (await calendarRes.json()) as {
    total: { lastYear: number };
    contributions: ContributionDay[];
  };
  const today = new Date().toISOString().slice(0, 10);

  return {
    login: GITHUB_USER,
    avatarUrl: user.avatar_url ?? `https://github.com/${GITHUB_USER}.png`,
    followers: user.followers ?? 0,
    following: user.following ?? 0,
    publicRepos: user.public_repos ?? 0,
    totalContributions: calendar.total.lastYear,
    days: calendar.contributions.filter((d) => d.date <= today),
    commits: null,
    pullRequests: null,
    reviews: null,
    reposContributed: null,
    topRepos: [],
  };
}

export async function getGithubActivity(): Promise<GithubActivity> {
  const token = process.env.GITHUB_TOKEN;
  if (token) {
    try {
      return await fetchFromGraphQL(token);
    } catch (err) {
      console.error("[github] GraphQL failed, using public APIs:", err);
    }
  }
  return fetchFromPublicApis();
}
