import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Panalobet | 24/7 Customer Support for All Games",
  description:
    "Need help? Contact Panalobet's 24/7 support team for quick assistance with game, payment or technical issues. We're here to help anytime, anywhere.",
};

export default function ContactUsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
