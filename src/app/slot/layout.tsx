import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Panalobet - Slot",
  description: "This is a panalobet website built using next.js",
};

export default function SlotLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
