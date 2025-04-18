import { CTACardProps } from "@/types/ctaCardItem";

export const sportsCardData: CTACardProps = {
  mainImage: {
    src: "/img/parent-sports.webp",
    alt: "Sports",
    width: 250,
    height: 250,
  },
  cTACardItems: [
    {
      src: "/img/sports-basketball.webp",
      alt: "Sports Basketball",
      width: 180,
      height: 180,
    },
    {
      src: "/img/sports-esport.webp",
      alt: "Sports Esports",
      width: 180,
      height: 180,
    },
    {
      src: "/img/sports-IM-esport.webp",
      alt: "Sports IM Esports",
      width: 180,
      height: 180,
    },
    {
      src: "/img/sports-soccer.webp",
      alt: "Sports Soccer",
      width: 180,
      height: 180,
    },
  ],
  cta: {
    text: "Dive in!",
    href: "/",
  },
};
