"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { FaCodeBranch, FaUsers, FaBook, FaLock, FaGithub, FaFire, FaTrophy, FaCalendarDay, FaCodePullRequest } from "react-icons/fa6";
import { useLang } from "@/i18n/LanguageProvider";
import type { ContributionDay, GithubActivity } from "@/lib/github";

const GITHUB_USER = "sebasBetancourt";
const LEVEL_COLORS = ["rgba(255,255,255,0.05)", "#3b1f5c", "#6b2fa8", "#b5359f", "#FF2D8D"];

const CELL = 11;
const GAP = 3;
const STEP = CELL + GAP;
const LEFT = 30;
const TOP = 18;

const toUTCDate = (date: string) => new Date(`${date}T00:00:00Z`);

function buildWeeks(days: ContributionDay[]) {
  if (days.length === 0) return [];
  const padded: (ContributionDay | null)[] = [
    ...Array<null>(toUTCDate(days[0].date).getUTCDay()).fill(null),
    ...days,
  ];
  const weeks: (ContributionDay | null)[][] = [];
  for (let i = 0; i < padded.length; i += 7) weeks.push(padded.slice(i, i + 7));
  return weeks;
}

function computeStreaks(days: ContributionDay[]) {
  let longest = 0;
  let run = 0;
  for (const d of days) {
    run = d.count > 0 ? run + 1 : 0;
    longest = Math.max(longest, run);
  }

  let current = 0;
  let i = days.length - 1;
  if (i >= 0 && days[i].count === 0) i--; // today may not have contributions yet
  for (; i >= 0 && days[i].count > 0; i--) current++;

  const best = days.reduce<ContributionDay | null>((max, d) => (!max || d.count > max.count ? d : max), null);
  return { current, longest, best };
}

export function GithubContributions() {
  const { lang, t } = useLang();
  const [data, setData] = useState<GithubActivity | null>(null);
  const [failed, setFailed] = useState(false);
  const [hovered, setHovered] = useState<ContributionDay | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const locale = lang === "es" ? "es-CO" : "en-US";
  const num = useMemo(() => new Intl.NumberFormat(locale), [locale]);
  const fullDate = useMemo(
    () => new Intl.DateTimeFormat(locale, { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" }),
    [locale],
  );

  useEffect(() => {
    fetch("/api/github")
      .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
      .then((json: GithubActivity) => setData(json))
      .catch(() => setFailed(true));
  }, []);

  useEffect(() => {
    if (data && scrollRef.current) scrollRef.current.scrollLeft = scrollRef.current.scrollWidth;
  }, [data]);

  const weeks = useMemo(() => buildWeeks(data?.days ?? []), [data]);
  const streaks = useMemo(() => computeStreaks(data?.days ?? []), [data]);

  const monthLabels = useMemo(() => {
    const fmt = new Intl.DateTimeFormat(locale, { month: "short", timeZone: "UTC" });
    const labels: { x: number; label: string }[] = [];
    let prevMonth = -1;
    weeks.forEach((week, col) => {
      const first = week.find(Boolean);
      if (!first) return;
      const month = toUTCDate(first.date).getUTCMonth();
      if (month !== prevMonth && col < weeks.length - 2) {
        labels.push({ x: LEFT + col * STEP, label: fmt.format(toUTCDate(first.date)) });
      }
      prevMonth = month;
    });
    return labels.filter((l, i) => i !== 0 || (labels[1]?.x ?? Infinity) - l.x >= STEP * 3);
  }, [weeks, locale]);

  const weekdayLabels = useMemo(() => {
    const fmt = new Intl.DateTimeFormat(locale, { weekday: "short", timeZone: "UTC" });
    // 2024-01-01 was a Monday
    return [1, 3, 5].map((row) => ({ row, label: fmt.format(toUTCDate(`2024-01-0${row}`)) }));
  }, [locale]);

  const svgWidth = LEFT + weeks.length * STEP;
  const svgHeight = TOP + 7 * STEP;
  const maxRepoCommits = Math.max(1, ...(data?.topRepos.map((r) => r.commits) ?? []));
  const dayText = (d: ContributionDay) => `${num.format(d.count)} ${t.experience.contributionsOn} ${fullDate.format(toUTCDate(d.date))}`;

  const highlights = data
    ? [
        { icon: <FaCodeBranch />, label: t.experience.commits, value: data.commits },
        { icon: <FaCodePullRequest />, label: t.experience.pullRequests, value: data.pullRequests },
        { icon: <FaBook />, label: t.experience.reposContributed, value: data.reposContributed },
        { icon: <FaFire />, label: t.experience.currentStreak, value: streaks.current, suffix: t.experience.days },
        { icon: <FaTrophy />, label: t.experience.longestStreak, value: streaks.longest, suffix: t.experience.days },
        {
          icon: <FaCalendarDay />,
          label: t.experience.bestDay,
          value: streaks.best?.count ?? 0,
          suffix: streaks.best ? fullDate.format(toUTCDate(streaks.best.date)) : undefined,
        },
      ].filter((h): h is typeof h & { value: number } => h.value !== null)
    : [];

  return (
    <section className="w-full pb-32 pt-20">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-10">
        <h2 className="font-instrument" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", lineHeight: 1.1 }}>
          <span className="text-white">{t.experience.codeTitle[0]}</span>
          <span
            className="italic"
            style={{
              background: "linear-gradient(135deg, #FF2D8D, #a855f7)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {t.experience.codeTitle[1]}
          </span>
        </h2>
      </div>

      {/* Contributions Card */}
      <div className="relative w-full bg-neutral-950 border-y border-white/10 overflow-hidden p-6 md:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_280px] gap-8">

          {/* Left: Graph + highlights */}
          <div className="min-w-0">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
              <a
                href={`https://github.com/${GITHUB_USER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
              >
                <img
                  src={data?.avatarUrl ?? `https://github.com/${GITHUB_USER}.png`}
                  alt={GITHUB_USER}
                  className="w-9 h-9 rounded-full border border-white/10"
                />
                <div>
                  <p className="text-white text-sm font-medium group-hover:underline">{GITHUB_USER}</p>
                  <p className="text-neutral-500 text-xs">
                    <span className="text-white font-semibold">
                      {data ? num.format(data.totalContributions) : "—"}
                    </span>{" "}
                    {t.experience.contributions}
                  </p>
                </div>
              </a>
              <a
                href={`https://github.com/${GITHUB_USER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-neutral-400 hover:text-white border border-white/10 hover:border-white/25 rounded-full px-3 py-1.5 transition-colors"
              >
                <FaGithub className="w-3.5 h-3.5" />
                {t.experience.viewProfile}
              </a>
            </div>

            {/* Heatmap */}
            <div className="rounded-xl bg-white/[0.02] border border-white/[0.05] p-3">
              <div ref={scrollRef} className="overflow-x-auto">
                {data ? (
                  <svg
                    viewBox={`0 0 ${svgWidth} ${svgHeight}`}
                    className="w-full min-w-[640px] h-auto"
                    role="img"
                    aria-label={`${num.format(data.totalContributions)} ${t.experience.contributions}`}
                    onMouseLeave={() => setHovered(null)}
                  >
                    {monthLabels.map((m) => (
                      <text key={m.x} x={m.x} y={10} className="fill-neutral-500" fontSize={9}>
                        {m.label}
                      </text>
                    ))}
                    {weekdayLabels.map((w) => (
                      <text key={w.row} x={0} y={TOP + w.row * STEP + CELL - 2} className="fill-neutral-500" fontSize={9}>
                        {w.label}
                      </text>
                    ))}
                    {weeks.map((week, col) =>
                      week.map((day, row) =>
                        day ? (
                          <rect
                            key={day.date}
                            x={LEFT + col * STEP}
                            y={TOP + row * STEP}
                            width={CELL}
                            height={CELL}
                            rx={2.5}
                            fill={LEVEL_COLORS[day.level]}
                            stroke={hovered?.date === day.date ? "#fff" : "none"}
                            strokeWidth={1}
                            onMouseEnter={() => setHovered(day)}
                            onClick={() => setHovered(day)}
                          >
                            <title>{dayText(day)}</title>
                          </rect>
                        ) : null,
                      ),
                    )}
                  </svg>
                ) : (
                  <div className="w-full min-w-[640px] aspect-[53/8] rounded-lg bg-white/[0.03] animate-pulse flex items-center justify-center">
                    {failed && <p className="text-neutral-500 text-xs">{t.experience.unavailable}</p>}
                  </div>
                )}
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-2 mt-2 text-[10px] font-mono text-neutral-500 tracking-wide">
              <p className="min-h-[1em]">{hovered ? dayText(hovered) : t.experience.contributions}</p>
              <div className="flex items-center gap-1">
                <span className="mr-1">{t.experience.less}</span>
                {LEVEL_COLORS.map((color) => (
                  <span key={color} className="w-[10px] h-[10px] rounded-[2px]" style={{ background: color }} />
                ))}
                <span className="ml-1">{t.experience.more}</span>
              </div>
            </div>

            {/* Highlights */}
            {highlights.length > 0 && (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-6">
                {highlights.map((h) => (
                  <div key={h.label} className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                    <p className="flex items-center gap-1.5 text-neutral-500 text-[10px] uppercase tracking-widest font-medium">
                      <span className="text-[#a855f7]">{h.icon}</span>
                      {h.label}
                    </p>
                    <p className="mt-1.5 font-instrument text-white text-2xl leading-none">
                      {num.format(h.value)}
                      {h.suffix && <span className="ml-1.5 text-neutral-500 text-sm font-sans">{h.suffix}</span>}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right: Profile stats + top repos */}
          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-3 lg:grid-cols-1 gap-3 font-instrument">
              <StatCard icon={<FaUsers className="w-4 h-4" />} label={t.experience.followers} value={data?.followers} />
              <StatCard icon={<FaBook className="w-4 h-4" />} label={t.experience.repos} value={data?.publicRepos} />
              <StatCard icon={<FaCodeBranch className="w-4 h-4" />} label={t.experience.following} value={data?.following} />
            </div>

            {data && data.topRepos.length > 0 && (
              <div>
                <p className="text-neutral-500 text-[10px] uppercase tracking-widest font-medium mb-3">
                  {t.experience.topRepos}
                </p>
                <ul className="flex flex-col gap-2.5">
                  {data.topRepos.map((repo) => (
                    <li key={repo.name}>
                      <div className="flex items-center justify-between gap-2 text-xs">
                        {repo.url ? (
                          <a href={repo.url} target="_blank" rel="noopener noreferrer" className="truncate text-neutral-300 hover:text-white hover:underline">
                            {repo.name}
                          </a>
                        ) : (
                          <span className="truncate text-neutral-300 flex items-center gap-1.5" title={t.experience.private}>
                            <FaLock className="w-2.5 h-2.5 shrink-0 text-neutral-500" />
                            {repo.name}
                          </span>
                        )}
                        <span className="shrink-0 font-mono text-neutral-500">{num.format(repo.commits)}</span>
                      </div>
                      <div className="mt-1 h-1 rounded-full bg-white/[0.05] overflow-hidden">
                        <div
                          className="h-full rounded-full"
                          style={{
                            width: `${(repo.commits / maxRepoCommits) * 100}%`,
                            background: "linear-gradient(90deg, #a855f7, #FF2D8D)",
                          }}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({ icon, label, value }: { icon: React.ReactNode; label: string; value: number | undefined }) {
  return (
    <div className="flex flex-col items-center lg:items-start gap-1.5 p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
      <p className="text-neutral-500 text-[10px] uppercase tracking-widest font-medium text-center">{label}</p>
      <div className="flex items-center gap-2 text-[#a2a4a8]">
        {icon}
        <span className="text-xl md:text-2xl font-semibold tracking-tight">{value ?? "—"}</span>
      </div>
    </div>
  );
}
