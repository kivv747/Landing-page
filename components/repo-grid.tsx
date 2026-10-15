"use client";

import useSWR from "swr";
import { motion, useReducedMotion } from "framer-motion";
import { LoaderCircle, RotateCw } from "lucide-react";
import { RepoCard } from "@/components/repo-card";
import type { GitHubRepository } from "@/types/github";

const repositoriesUrl =
  "https://api.github.com/users/xmnnasrul/repos?sort=updated&per_page=6";

async function fetchRepositories(url: string): Promise<GitHubRepository[]> {
  const response = await fetch(url, {
    headers: {
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
    },
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`GitHub API returned ${response.status}`);
  }

  const repositories: unknown = await response.json();
  if (!Array.isArray(repositories)) {
    throw new Error("GitHub returned an unexpected response");
  }

  return repositories.slice(0, 6) as GitHubRepository[];
}

export function RepoGrid() {
  const reduceMotion = useReducedMotion();
  const { data, error, isLoading, mutate } = useSWR<GitHubRepository[]>(
    repositoriesUrl,
    fetchRepositories,
    { revalidateOnFocus: false, errorRetryCount: 2 },
  );

  if (isLoading) {
    return (
      <div
        role="status"
        aria-live="polite"
        className="flex min-h-52 items-center gap-3 border-y border-[#c7c7bc] py-8 text-sm text-[#555b50] dark:border-white/15 dark:text-[#b3b5a9]"
      >
        <LoaderCircle aria-hidden="true" size={18} className="animate-spin" />
        <span>Mengambil pembaruan terbaru dari GitHub...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div
        role="alert"
        className="flex min-h-52 flex-col items-start justify-center gap-4 border-y border-[#c7c7bc] py-8 dark:border-white/15"
      >
        <p className="max-w-xl text-base leading-7 text-[#555b50] dark:text-[#b3b5a9]">
          Repositori belum dapat dimuat dari GitHub. Coba lagi beberapa saat lagi.
        </p>
        <button
          type="button"
          onClick={() => mutate()}
          className="inline-flex min-h-11 items-center gap-2 border border-[#c7c7bc] px-4 text-sm font-medium text-[#1c201a] transition-colors hover:border-[#b83b24] hover:text-[#b83b24] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b83b24] dark:border-white/20 dark:text-[#f3f0e6] dark:hover:border-[#ff7659] dark:hover:text-[#ff7659] dark:focus-visible:ring-[#ff7659]"
        >
          <RotateCw aria-hidden="true" size={15} />
          Coba lagi
        </button>
      </div>
    );
  }

  if (!data?.length) {
    return (
      <p className="border-y border-[#c7c7bc] py-8 text-sm text-[#555b50] dark:border-white/15 dark:text-[#b3b5a9]">
        Belum ada repositori publik untuk ditampilkan.
      </p>
    );
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: reduceMotion ? 0 : 0.075 } },
      }}
      className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-12 lg:gap-4"
    >
      {data.map((repository, index) => (
        <RepoCard key={repository.id} repository={repository} index={index} />
      ))}
    </motion.div>
  );
}