import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Online Live Sabong Registration and GCash Guide on Panlobet",
  description:
    "Learn how to register for online live sabong and use GCash on Panalobet. Enjoy safe betting, real-time matches, and a seamless gaming experience at any time!",
};

export default function SabongliveLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
