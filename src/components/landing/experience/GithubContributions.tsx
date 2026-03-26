"use client";

import React, { useEffect, useState } from "react";
import { FaStar, FaCodeBranch, FaUsers, FaBook } from "react-icons/fa";

type GitHubStats = {
  followers: number;
  publicRepos: number;
  following: number;
};

export function GithubContributions() {
  const githubUser = "sebasBetancourt";
  const [stats, setStats] = useState<GitHubStats | null>(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${githubUser}`)
      .then((res) => res.json())
      .then((data) => {
        setStats({
          followers: data.followers ?? 0,
          publicRepos: data.public_repos ?? 0,
          following: data.following ?? 0,
        });
      })
      .catch(() => {
        // Fallback si la API falla (rate limit, etc.)
        setStats({ followers: 0, publicRepos: 0, following: 0 });
      });
  }, []);

  return (
    <section className="w-full pb-32 pt-20">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-10">
        <h2 className="font-instrument" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", lineHeight: 1.1 }}>
          <span className="text-white">Codigo & </span>
          <span
            className="italic"
            style={{
              background: "linear-gradient(135deg, #FF2D8D, #a855f7)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Colaboraciones
          </span>
        </h2>
      </div>

      {/* Contributions Card */}
      <div className="relative w-full bg-neutral-950 border-y border-white/10 overflow-hidden p-6 md:p-8">
        <div className="flex flex-col lg:flex-row gap-8 items-center">

          {/* Left: GitHub Graph */}
          <div className="flex-1 w-full">
            {/* User Header */}
            <div className="flex items-center gap-3 mb-5">
              <img
                src={`https://github.com/${githubUser}.png`}
                alt={githubUser}
                className="w-8 h-8 rounded-full border border-white/10"
              />
              <div>
                <p className="text-white text-sm font-medium">{githubUser}</p>
              </div>
            </div>

            {/* Contribution Chart */}
            <div className="w-full overflow-hidden rounded-xl bg-white/[0.02] border border-white/[0.05] p-3">
              <img
                src={`https://ghchart.rshah.org/6366f1/${githubUser}`}
                alt={`${githubUser} GitHub contributions`}
                className="w-full h-auto opacity-90"
                style={{ filter: "brightness(1.1)" }}
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            </div>

            <p className="text-neutral-600 text-[10px] font-mono mt-2 tracking-wide">
              contribuciones en el último año
            </p>
          </div>

          {/* Right: Stats (datos reales de GitHub API) */}
          <div className="lg:w-[200px] shrink-0 flex flex-row lg:flex-col gap-4 lg:gap-6 font-instrument">
            <StatCard
              icon={<FaUsers className="w-4 h-4" />}
              label="Followers"
              value={stats?.followers ?? "—"}
              color="#a2a4a8ff"
            />
            <StatCard
              icon={<FaBook className="w-4 h-4" />}
              label="Repos"
              value={stats?.publicRepos ?? "—"}
              color="#a2a4a8ff"
            />
            <StatCard
              icon={<FaCodeBranch className="w-4 h-4" />}
              label="Following"
              value={stats?.following ?? "—"}
              color="#a2a4a8ff"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({ icon, label, value, color }: { icon: React.ReactNode; label: string; value: number | string; color: string }) {
  return (
    <div className="flex flex-col items-center lg:items-start gap-1.5 flex-1 lg:flex-none p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
      <p className="text-neutral-500 text-[10px] uppercase tracking-widest font-medium">{label}</p>
      <div className="flex items-center gap-2">
        <span style={{ color }}>{icon}</span>
        <span className="text-white text-xl md:text-2xl font-semibold tracking-tight" style={{ color }}>{value}</span>
      </div>
    </div>
  );
}
