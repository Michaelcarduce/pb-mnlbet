import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stay Updated With Latest News About Online Games at Panalobet",
  description:
    "Explore the Panalobet updated blog news for expert tips, casino news, sports betting, bonus guides and more. Stay smart and win big in the gaming world!",
};

export default function NewsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
