import { CTACardProps } from "@/types/ctaCardItem";

export const casinoCardData: CTACardProps = {
  mainImage: {
    src: "/img/parent-casino.webp",
    alt: "Sports",
    width: 250,
    height: 250,
  },
  cTACardItems: [
    {
      src: "/img/casino-blackjack.webp",
      alt: "Casino Blackjack",
      width: 180,
      height: 180,
    },
    {
      src: "/img/casino-fortune.webp",
      alt: "Casino Fortune",
      width: 180,
      height: 180,
    },
    {
      src: "/img/casino-sicbo.webp",
      alt: "Casino Sicbo",
      width: 180,
      height: 180,
    },
    {
      src: "/img/casino-vegas.webp",
      alt: "Casino Vegas",
      width: 180,
      height: 180,
    },
  ],
  cta: {
    text: "Dive in!",
    href: "/",
  },
};
