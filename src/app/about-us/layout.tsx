import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Panalobet - About Us",
  description: "This is a panalobet website built using next.js",
};

export default function AboutUsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
