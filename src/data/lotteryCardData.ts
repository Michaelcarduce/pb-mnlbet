import { CTACardProps } from "@/types/ctaCardItem";

export const lotteryCardData: CTACardProps = {
  mainImage: {
    src: "/img/parent-lottery.webp",
    alt: "Lottery",
    width: 250,
    height: 250,
  },
  cTACardItems: [
    {
      src: "/img/lottery-magic lamp bingo.webp",
      alt: "Lottery Magic Lamp Bingo",
      width: 180,
      height: 180,
    },
    {
      src: "/img/lottery-pearls of bingo.webp",
      alt: "Lottery Pearls of Bingo",
      width: 180,
      height: 180,
    },
    {
      src: "/img/lottery-fortune bingo.webp",
      alt: "Lottery Fortune Bingo",
      width: 180,
      height: 180,
    },
    {
      src: "/img/lottery-jackpot bingo.webp",
      alt: "Lottery Jackpot Bingo",
      width: 180,
      height: 180,
    },
  ],
  cta: {
    text: "Dive in!",
    href: "/",
  },
};
