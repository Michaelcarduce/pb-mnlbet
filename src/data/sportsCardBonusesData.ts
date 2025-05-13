import { CTACardProps } from "@/types/ctaCardItem";

export const sportsCardBonusesData: CTACardProps = {
  mainImage: {
    src: "/img/cta/bonuses-main.webp",
    alt: "Bonuses",
    width: 250,
    height: 250,
  },
  cTACardItems: [
    {
      src: "/img/cta/bonuses-sub-1.webp",
      alt: "Bonuses",
      width: 180,
      height: 180,
    },
    {
      src: "/img/cta/bonuses-sub-2.webp",
      alt: "Bonuses",
      width: 180,
      height: 180,
    },
    {
      src: "/img/cta/bonuses-sub-3.webp",
      alt: "Sabong",
      width: 180,
      height: 180,
    },
    {
      src: "/img/cta/bonuses-sub-4.webp",
      alt: "Bonuses",
      width: 180,
      height: 180,
    },
  ],
  cta: {
    text: "Dive in!",
    href: "/",
  },
};
