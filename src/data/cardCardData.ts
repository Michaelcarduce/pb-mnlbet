import { CTACardProps } from "@/types/ctaCardItem";

export const cardCardData: CTACardProps = {
  mainImage: {
    src: "/img/parent-card games.webp",
    alt: "Card Games",
    width: 250,
    height: 250,
  },
  cTACardItems: [
    {
      src: "/img/card-blackjack lucky ladies.webp",
      alt: "Card Games Blackjack",
      width: 180,
      height: 180,
    },
    {
      src: "/img/card-tongits go.webp",
      alt: "Card Games Tongits Go",
      width: 180,
      height: 180,
    },
    {
      src: "/img/card-video poker.webp",
      alt: "Card Games Video Poker",
      width: 180,
      height: 180,
    },
    {
      src: "/img/card-sic bo.webp",
      alt: "Card Games Sicbo",
      width: 180,
      height: 180,
    },
  ],
  cta: {
    text: "Dive in!",
    href: "/",
  },
};
