import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tips for Beginners & Pros For Sport Betting with Panalobet",
  description:
    "Master online sports betting with Panalobet! Get expert tips and the best strategies to boost your success - perfect for both beginners and pros.",
};

export default function SportsBettingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
