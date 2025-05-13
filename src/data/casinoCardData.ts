import { CTACardProps } from "@/types/ctaCardItem";

export const casinoCardData: CTACardProps = {
  mainImage: {
    src: "/img/cta/casino-main.webp",
    alt: "Casino",
    width: 250,
    height: 250,
  },
  cTACardItems: [
    {
      src: "/img/cta/casino-sub-1.webp",
      alt: "Casino",
      width: 180,
      height: 180,
    },
    {
      src: "/img/cta/casino-sub-2.webp",
      alt: "Casino",
      width: 180,
      height: 180,
    },
    {
      src: "/img/cta/casino-sub-3.webp",
      alt: "Casino",
      width: 180,
      height: 180,
    },
    {
      src: "/img/cta/casino-sub-4.webp",
      alt: "Casino",
      width: 180,
      height: 180,
    },
  ],
  cta: {
    text: "Dive in!",
    href: "/",
  },
};
