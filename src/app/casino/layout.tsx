import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Panalobet - Casino",
  description: "This is a panalobet website built using next.js",
};

export default function CasinoLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
