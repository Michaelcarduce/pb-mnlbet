// components/ClientButton.tsx
"use client";

import Button from "@/components/ui/Button";

export default function ClientButton({
  label,
  href,
  gradientStart,
  gradientEnd,
  shadowInset,
  width,
  newTab,
}: {
  label: string;
  href: string;
  gradientStart: string;
  gradientEnd: string;
  shadowInset?: boolean;
  width?: string;
  newTab?: boolean;
}) {
  return (
    <Button
      label={label}
      href={href}
      gradientStart={gradientStart}
      gradientEnd={gradientEnd}
      shadowInset={shadowInset}
      width={width}
      newTab={newTab}
    />
  );
}
