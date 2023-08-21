import type { Metadata } from "next";

import "./globals.css";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "memo test",
  description: "memo test game",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="h-screen grid grid-rows-[50px_1fr_80px] font-mono">
        <header className="p-2 bg-slate-900 text-white font-bold flex justify-center items-center sticky top-0 z-10">
          MEMO TEST
        </header>
        <main className="p-4 bg-slate-50">{children}</main>
        <footer className="border-t-1 text-slate-500 flex items-end justify-end py-2 px-8">
          <span className="text-xs">author: damián truant</span>
        </footer>
      </body>
    </html>
  );
}
