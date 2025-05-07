import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Top Online Casino Games in the Philippines at Panalobet",
  description:
    "Explore the best online casino games at Panalobet! Learn about RTP, jackpots, free spins and bonuses in this ultimate guide for Filipino players.",
};

export default function CasinoLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
