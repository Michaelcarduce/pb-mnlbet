import { CTACardProps } from "@/types/ctaCardItem";

export const slotsCardData: CTACardProps = {
  mainImage: {
    src: "/img/parent-slots.webp",
    alt: "Slots",
    width: 250,
    height: 250,
  },
  cTACardItems: [
    {
      src: "/img/slot-crazy hunter.webp",
      alt: "Slots Crazy Hunter",
      width: 180,
      height: 180,
    },
    {
      src: "/img/slot-777.webp",
      alt: "Slots 777",
      width: 180,
      height: 180,
    },
    {
      src: "/img/slot-candy baby.webp",
      alt: "Slots Candy Baby",
      width: 180,
      height: 180,
    },
    {
      src: "/img/slot-charge buffalo.webp",
      alt: "Slots Charg Buffalo",
      width: 180,
      height: 180,
    },
  ],
  cta: {
    text: "Dive in!",
    href: "/",
  },
};
