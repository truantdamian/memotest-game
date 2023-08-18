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
      <body>{children}</body>
    </html>
  );
}
