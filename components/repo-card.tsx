"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Star } from "lucide-react";
import type { GitHubRepository } from "@/types/github";

const languageColors: Record<string, string> = {
  CSS: "#663399",
  Go: "#00add8",
  HTML: "#e34c26",
  Java: "#b07219",
  JavaScript: "#f1e05a",
  Kotlin: "#a97bff",
  PHP: "#4f5d95",
  Python: "#3572a5",
  Rust: "#dea584",
  Swift: "#f05138",
  TypeScript: "#3178c6",
};

const cardLayouts = [
  "sm:col-span-2 lg:col-span-7 min-h-64 lg:min-h-72",
  "sm:col-span-1 lg:col-span-5 min-h-64 lg:min-h-72",
  "sm:col-span-1 lg:col-span-4 min-h-56",
  "sm:col-span-1 lg:col-span-4 min-h-56",
  "sm:col-span-1 lg:col-span-4 min-h-56",
  "sm:col-span-2 lg:col-span-6 min-h-56",
];

type RepoCardProps = {
  repository: GitHubRepository;
  index: number;
};

export function RepoCard({ repository, index }: RepoCardProps) {
  const reduceMotion = useReducedMotion();
  const languageColor = repository.language
    ? languageColors[repository.language] ?? "#8b9184"
    : "#8b9184";
  const updatedDate = new Intl.DateTimeFormat("id-ID", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(repository.updated_at));

  return (
    <motion.article
      variants={{
        hidden: { opacity: 0, y: reduceMotion ? 0 : 16 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: reduceMotion ? 0 : 0.42, ease: "easeOut" },
        },
      }}
      whileHover={reduceMotion ? undefined : { scale: 1.012 }}
      transition={{ type: "spring", stiffness: 240, damping: 27, mass: 0.7 }}
      className={`${cardLayouts[index % cardLayouts.length]} group relative flex flex-col justify-between overflow-hidden border border-[#c7c7bc]/80 bg-white/65 p-5 shadow-[0_8px_28px_rgba(35,35,25,0.035)] backdrop-blur-md transition-[border-color,box-shadow,background-color] duration-300 hover:border-[#b83b24]/70 hover:shadow-[0_0_24px_rgba(184,59,36,0.13)] sm:p-6 dark:border-white/15 dark:bg-white/[0.045] dark:shadow-[0_8px_28px_rgba(0,0,0,0.12)] dark:hover:border-[#ff7659]/70 dark:hover:shadow-[0_0_26px_rgba(255,118,89,0.13)]`}
    >
      <a
        href={repository.html_url}
        target="_blank"
        rel="noreferrer"
        aria-label={`Buka repositori ${repository.name} di GitHub`}
        className="absolute inset-0 z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#b83b24] dark:focus-visible:ring-[#ff7659]"
      >
        <span className="sr-only">Buka {repository.name} di GitHub</span>
      </a>

      <div>
        <div className="mb-8 flex items-start justify-between gap-4">
          <h3 className="break-all font-sans text-xl font-semibold leading-tight text-[#1c201a] transition-colors group-hover:text-[#b83b24] sm:text-2xl dark:text-[#f3f0e6] dark:group-hover:text-[#ff7659]">
            {repository.name}
          </h3>
          <Star
            aria-hidden="true"
            size={17}
            className="mt-1 shrink-0 text-[#74796d] transition-colors group-hover:text-[#b83b24] dark:text-[#a7ab9e] dark:group-hover:text-[#ff7659]"
          />
        </div>
        <p className="max-w-prose text-sm leading-6 text-[#555b50] dark:text-[#b3b5a9]">
          {repository.description || "Repositori ini belum memiliki deskripsi."}
        </p>
      </div>

      <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-[#c7c7bc]/70 pt-4 font-mono text-xs text-[#555b50] dark:border-white/10 dark:text-[#b3b5a9]">
        <span className="inline-flex items-center gap-2">
          <span
            aria-hidden="true"
            className="size-2 rounded-full"
            style={{ backgroundColor: languageColor }}
          />
          {repository.language || "Bahasa tidak dicantumkan"}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <Star aria-hidden="true" size={13} />
          {new Intl.NumberFormat("id-ID").format(repository.stargazers_count)}
        </span>
        <span className="ml-auto">Update {updatedDate}</span>
      </div>
    </motion.article>
  );
}