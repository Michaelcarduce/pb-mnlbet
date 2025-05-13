import { CTACardProps } from "@/types/ctaCardItem";

export const sportsCardFootballData: CTACardProps = {
  mainImage: {
    src: "/img/cta/football-main.webp",
    alt: "Sports Football",
    width: 250,
    height: 250,
  },
  cTACardItems: [
    {
      src: "/img/cta/football-sub-1.webp",
      alt: "Sports Football",
      width: 180,
      height: 180,
    },
    {
      src: "/img/cta/football-sub-2.webp",
      alt: "Sports Football",
      width: 180,
      height: 180,
    },
    {
      src: "/img/cta/football-sub-3.webp",
      alt: "Sports Football",
      width: 180,
      height: 180,
    },
    {
      src: "/img/cta/football-sub-4.webp",
      alt: "Sports Football",
      width: 180,
      height: 180,
    },
  ],
  cta: {
    text: "Dive in!",
    href: "/",
  },
};
