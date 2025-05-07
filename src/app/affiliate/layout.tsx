import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Join Panalobet as an Affiliate and Earn Bonuses and Rewards",
  description:
    "Become a affiliate partner with Panalobet and earn commissions by promoting premium online casinos, sports betting and live gaming. Easy setup, fast payouts.",
};

export default function AffiliateLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
