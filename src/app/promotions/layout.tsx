import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Play Panalobet Top Games and Get Huge Bonuses and Promotions",
  description:
    "Experience exciting online gaming with Panalobet such as top slots, live games, unbeatable bonuses and special promotions for non-stop fun and big wins.",
};

export default function PromotionsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
