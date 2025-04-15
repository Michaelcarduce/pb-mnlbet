import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Panalobet - Sabong live",
  description: "This is a panalobet website built using next.js",
};

export default function SabongliveLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
