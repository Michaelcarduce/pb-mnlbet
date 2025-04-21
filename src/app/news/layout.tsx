import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Panalobet - News",
  description: "This is a panalobet website built using next.js",
};

export default function NewsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
