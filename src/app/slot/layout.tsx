import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Easy GCash transactions for Panalobet slots.",
  description:
    "Learn how to use GCash for fast, secure transactions on Panalobet slots. Play top scatter slot games with ease and enjoy free spins, bonuses and big wins!",
};

export default function SlotLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
