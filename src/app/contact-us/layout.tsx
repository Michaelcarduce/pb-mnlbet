import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Panalobet - Contact Us",
  description: "This is a panalobet website built using next.js",
};

export default function ContactUsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
