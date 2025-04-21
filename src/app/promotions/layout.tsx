import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Panalobet - Promotions",
  description: "This is a panalobet website built using next.js",
};

export default function PromotionsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
