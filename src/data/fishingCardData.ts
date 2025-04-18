import { CTACardProps } from "@/types/ctaCardItem";

export const fishingCardData: CTACardProps = {
  mainImage: {
    src: "/img/parent-fishing.webp",
    alt: "Fishing",
    width: 250,
    height: 250,
  },
  cTACardItems: [
    {
      src: "/img/fishing-fortune king jackpot.webp",
      alt: "Fishing Fortune King",
      width: 180,
      height: 180,
    },
    {
      src: "/img/fishing-happy fishing.webp",
      alt: "Fishing Happy",
      width: 180,
      height: 180,
    },
    {
      src: "/img/fishing-jackpot fishing.webp",
      alt: "Fishing Jackpot",
      width: 180,
      height: 180,
    },
    {
      src: "/img/fishing-mega fishing.webp",
      alt: "Fishing Mega",
      width: 180,
      height: 180,
    },
  ],
  cta: {
    text: "Dive in!",
    href: "/",
  },
};
