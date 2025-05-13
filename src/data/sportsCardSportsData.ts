import { CTACardProps } from "@/types/ctaCardItem";

export const sportsCardSportsData: CTACardProps = {
  mainImage: {
    src: "/img/cta/sports-main.webp",
    alt: "Sports",
    width: 250,
    height: 250,
  },
  cTACardItems: [
    {
      src: "/img/cta/sports-sub-1.webp",
      alt: "Sports",
      width: 180,
      height: 180,
    },
    {
      src: "/img/cta/sports-sub-2.webp",
      alt: "Sports",
      width: 180,
      height: 180,
    },
    {
      src: "/img/cta/sports-sub-3.webp",
      alt: "Sports",
      width: 180,
      height: 180,
    },
    {
      src: "/img/cta/sports-sub-4.webp",
      alt: "Sports",
      width: 180,
      height: 180,
    },
  ],
  cta: {
    text: "Dive in!",
    href: "/",
  },
};
