import "./globals.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "0에서 1까지",
  description: "Portfolio Website Workshop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
