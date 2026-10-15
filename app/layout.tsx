import "@fontsource/space-grotesk/400.css";
import "@fontsource/space-grotesk/500.css";
import "@fontsource/space-grotesk/600.css";
import "@fontsource/ibm-plex-mono/400.css";
import "@/app/globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "xmnnasrul | GitHub portfolio",
  description: "Indeks langsung repositori publik xmnnasrul di GitHub.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className="bg-[#f2f0e8] text-[#1c201a] antialiased dark:bg-[#141510] dark:text-[#f3f0e6]">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}