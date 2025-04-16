import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Panalobet - Sports Betting",
  description: "This is a panalobet website built using next.js",
};

export default function SportsBettingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
