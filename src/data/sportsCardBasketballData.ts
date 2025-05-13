import { CTACardProps } from "@/types/ctaCardItem";

export const sportsCardBasketballData: CTACardProps = {
  mainImage: {
    src: "/img/cta/basketball-main.webp",
    alt: "Sports Basketball",
    width: 250,
    height: 250,
  },
  cTACardItems: [
    {
      src: "/img/cta/basketball-sub-1.webp",
      alt: "Sports Basketball",
      width: 180,
      height: 180,
    },
    {
      src: "/img/cta/basketball-sub-2.webp",
      alt: "Sports Basketball",
      width: 180,
      height: 180,
    },
    {
      src: "/img/cta/basketball-sub-3.webp",
      alt: "Sports Basketball",
      width: 180,
      height: 180,
    },
    {
      src: "/img/cta/basketball-sub-4.webp",
      alt: "Sports Basketball",
      width: 180,
      height: 180,
    },
  ],
  cta: {
    text: "Dive in!",
    href: "/",
  },
};
