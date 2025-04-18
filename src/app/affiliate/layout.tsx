import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Panalobet - Affiliate",
  description: "This is a panalobet website built using next.js",
};

export default function AffiliateLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
