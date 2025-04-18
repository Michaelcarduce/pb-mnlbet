export interface FAQCardGridDataItem {
  id: number;
  imageUrl: string;
  title: string;
  link: string;
  alt: string;
}

export const faqCardGridDataItems: FAQCardGridDataItem[] = [
  {
    id: 1,
    imageUrl: "/img/faqImage1.webp",
    title: "How can I register with Panalobet?",
    alt: "How can I register with Panalobet?",
    link: "/",
  },
  {
    id: 2,
    imageUrl: "/img/faqImage2.webp",
    title: "In which ways might one make deposits and withdrawals?",
    alt: "In which ways might one make deposits and withdrawals?",
    link: "/",
  },
  {
    id: 3,
    imageUrl: "/img/faqImage3.webp",
    title: "How could I receive promotions and bonuses?",
    alt: "How could I receive promotions and bonuses?",
    link: "/",
  },
  {
    id: 4,
    imageUrl: "/img/faqImage4.webp",
    title:
      "Should technical issues surface while I'm playing, what should I do?",
    alt: "Should technical issues surface while I'm playing, what should I do?",
    link: "/",
  },
];
