import { CTACardProps } from "@/types/ctaCardItem";

export const sportsCardBoxingData: CTACardProps = {
  mainImage: {
    src: "/img/cta/boxing-main.webp",
    alt: "Sports Boxing",
    width: 250,
    height: 250,
  },
  cTACardItems: [
    {
      src: "/img/cta/boxing-sub-1.webp",
      alt: "Sports Boxing",
      width: 180,
      height: 180,
    },
    {
      src: "/img/cta/boxing-sub-2.webp",
      alt: "Sports Boxing",
      width: 180,
      height: 180,
    },
    {
      src: "/img/cta/boxing-sub-3.webp",
      alt: "Sports Boxing",
      width: 180,
      height: 180,
    },
    {
      src: "/img/cta/boxing-sub-4.webp",
      alt: "Sports Boxing",
      width: 180,
      height: 180,
    },
  ],
  cta: {
    text: "Dive in!",
    href: "/",
  },
};
