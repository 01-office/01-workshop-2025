import "./globals.css";

import type { Metadata } from "next";
import localFont from "next/font/local";

import GNB from "@/components/GNB";

const pretendard = localFont({
  src: "../../public/fonts/PretendardVariable.woff2",
  display: "swap",
  variable: "--font-pretendard",
});

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
      <body className={`${pretendard.variable} antialiased`}>
        <div className="min-h-svh grid grid-rows-[auto_1fr] bg-white">
          <GNB />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
