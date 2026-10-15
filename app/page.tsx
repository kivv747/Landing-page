"use client";

import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { Github, MoveDownRight } from "lucide-react";
import { RepoGrid } from "@/components/repo-grid";
import { ThemeToggleButton } from "@/components/theme-toggle-button";

const profileImage = "https://github.com/xmnnasrul.png";

export default function HomePage() {
  const reduceMotion = useReducedMotion();
  const reveal: Variants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: reduceMotion ? 0 : 0.55, ease: "easeOut" },
    },
  };
  const delayedReveal: Variants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0 : 0.55,
        ease: "easeOut",
        delay: 0.12,
      },
    },
  };

  return (
    <div className="mx-auto min-h-screen max-w-[1440px] px-5 sm:px-8 lg:px-12">
      <motion.header
        initial="hidden"
        animate="visible"
        variants={reveal}
        className="flex min-h-[76px] items-center justify-between border-b border-[#c7c7bc] dark:border-white/15"
      >
        <a
          href="#top"
          className="font-mono text-sm font-medium text-[#1c201a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b83b24] dark:text-[#f3f0e6] dark:focus-visible:ring-[#ff7659]"
        >
          xmnnasrul<span className="text-[#b83b24] dark:text-[#ff7659]">/</span>
        </a>
        <nav aria-label="Navigasi utama" className="flex items-center gap-3 sm:gap-7">
          <a
            href="#repositories"
            className="min-h-11 content-center text-sm text-[#555b50] transition-colors hover:text-[#b83b24] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b83b24] dark:text-[#b3b5a9] dark:hover:text-[#ff7659] dark:focus-visible:ring-[#ff7659]"
          >
            Repositories
          </a>
          <a
            href="https://github.com/xmnnasrul"
            target="_blank"
            rel="noreferrer"
            aria-label="Buka profil GitHub xmnnasrul"
            className="inline-flex size-11 items-center justify-center text-[#555b50] transition-colors hover:text-[#b83b24] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b83b24] dark:text-[#b3b5a9] dark:hover:text-[#ff7659] dark:focus-visible:ring-[#ff7659]"
          >
            <Github aria-hidden="true" size={19} />
          </a>
          <ThemeToggleButton />
        </nav>
      </motion.header>

      <main id="top">
        <section className="grid grid-cols-1 gap-12 pb-20 pt-14 sm:pb-24 sm:pt-20 lg:grid-cols-12 lg:gap-8 lg:pb-28 lg:pt-24">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={reveal}
            className="lg:col-span-8 lg:pr-8"
          >
            <p className="mb-7 flex items-center gap-3 font-mono text-xs text-[#555b50] dark:text-[#b3b5a9] sm:text-sm">
              <span className="size-2 bg-[#b83b24] dark:bg-[#ff7659]" aria-hidden="true" />
              GitHub portfolio / public repositories
            </p>
            <h1 className="break-words text-6xl font-semibold leading-[0.92] tracking-normal text-[#1c201a] sm:text-7xl lg:text-[8rem] dark:text-[#f3f0e6]">
              xmnnasrul<span aria-hidden="true" className="caret-blink text-[#b83b24] dark:text-[#ff7659]">_</span>
            </h1>
            <div className="mt-8 flex max-w-2xl items-start gap-4 sm:mt-10">
              <MoveDownRight
                aria-hidden="true"
                size={20}
                className="mt-1 shrink-0 text-[#b83b24] dark:text-[#ff7659]"
              />
              <p className="max-w-xl text-lg leading-7 text-[#555b50] sm:text-xl sm:leading-8 dark:text-[#b3b5a9]">
                Indeks langsung repositori publik, diperbarui dari GitHub.
              </p>
            </div>
          </motion.div>

          <motion.aside
            initial="hidden"
            animate="visible"
            variants={delayedReveal}
            className="relative flex items-end gap-5 lg:col-span-4 lg:justify-end lg:pb-2"
          >
            <div className="relative size-28 shrink-0 sm:size-36 lg:size-40">
              <div
                aria-hidden="true"
                className="absolute -bottom-2 -right-2 size-full border border-[#b83b24]/70 dark:border-[#ff7659]/70"
              />
              <Image
                src={profileImage}
                alt="Foto profil GitHub xmnnasrul"
                width={320}
                height={320}
                priority
                unoptimized
                className="relative size-full border border-[#c7c7bc] object-cover dark:border-white/20"
              />
            </div>
            <div className="pb-1 font-mono text-xs leading-6 text-[#555b50] dark:text-[#b3b5a9]">
              <p>Profile</p>
              <a
                href="https://github.com/xmnnasrul"
                target="_blank"
                rel="noreferrer"
                className="break-all text-[#1c201a] underline decoration-[#b83b24]/60 underline-offset-4 transition-colors hover:text-[#b83b24] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b83b24] dark:text-[#f3f0e6] dark:decoration-[#ff7659]/60 dark:hover:text-[#ff7659] dark:focus-visible:ring-[#ff7659]"
              >
                github.com/xmnnasrul
              </a>
            </div>
          </motion.aside>
        </section>

        <section id="repositories" aria-labelledby="repositories-title" className="pb-20 sm:pb-28">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={reveal}
            className="mb-7 flex flex-col justify-between gap-4 border-t border-[#c7c7bc] pt-6 sm:mb-9 sm:flex-row sm:items-end dark:border-white/15"
          >
            <div>
              <p className="mb-3 font-mono text-xs text-[#555b50] dark:text-[#b3b5a9]">
                Live from GitHub
              </p>
              <h2
                id="repositories-title"
                className="text-3xl font-semibold leading-tight text-[#1c201a] sm:text-4xl dark:text-[#f3f0e6]"
              >
                Recent repositories
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-[#555b50] dark:text-[#b3b5a9]">
              Diurutkan otomatis berdasarkan pembaruan terbaru.
            </p>
          </motion.div>

          <RepoGrid />
        </section>
      </main>

      <footer className="flex flex-col gap-5 border-t border-[#c7c7bc] py-6 text-sm sm:flex-row sm:items-center sm:justify-between dark:border-white/15">
        <p className="font-mono text-xs text-[#555b50] dark:text-[#b3b5a9]">
          Personal GitHub index
        </p>
        <div className="flex flex-wrap items-center gap-6">
          <p className="inline-flex items-center gap-2 text-[#1c201a] dark:text-[#f3f0e6]">
            <span
              aria-hidden="true"
              className="size-2 rounded-full bg-emerald-700 dark:bg-emerald-400"
            />
            System Online
          </p>
          <a
            href="https://github.com/xmnnasrul"
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center gap-2 text-[#555b50] transition-colors hover:text-[#b83b24] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b83b24] dark:text-[#b3b5a9] dark:hover:text-[#ff7659] dark:focus-visible:ring-[#ff7659]"
          >
            <Github aria-hidden="true" size={16} />
            github.com/xmnnasrul
          </a>
        </div>
      </footer>
    </div>
  );
}