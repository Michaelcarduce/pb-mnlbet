import { CTACardProps } from "@/types/ctaCardItem";

export const sportsCardTennisData: CTACardProps = {
  mainImage: {
    src: "/img/cta/tennis-main.webp",
    alt: "Sports Tennis",
    width: 250,
    height: 250,
  },
  cTACardItems: [
    {
      src: "/img/cta/tennis-sub-1.webp",
      alt: "Sports Tennis",
      width: 180,
      height: 180,
    },
    {
      src: "/img/cta/tennis-sub-2.webp",
      alt: "Sports Tennis",
      width: 180,
      height: 180,
    },
    {
      src: "/img/cta/tennis-sub-3.webp",
      alt: "Sports Tennis",
      width: 180,
      height: 180,
    },
    {
      src: "/img/cta/tennis-sub-4.webp",
      alt: "Sports Tennis",
      width: 180,
      height: 180,
    },
  ],
  cta: {
    text: "Dive in!",
    href: "/",
  },
};
