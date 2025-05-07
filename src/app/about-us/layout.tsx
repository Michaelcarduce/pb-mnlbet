import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Panalobet for Premier Online Casino and Sports Betting",
  description:
    "Learn about Panalobet—your trusted platform for online casino, sports betting, live sabong & more. Enjoy secure gameplay, top odds, and thrilling experiences.",
};

export default function AboutUsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
