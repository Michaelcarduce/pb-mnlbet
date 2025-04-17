export type SportsCardItem = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
};

export type SportsCardProps = {
  mainImage: SportsCardItem;
  sportsCardItems: SportsCardItem[];
  cta: {
    text: string;
    href: string;
  };
  containerClassName?: string;
  mainImageContainerClassName?: string;
  gridContainerClassName?: string;
  gridItemClassName?: string;
  ctaContainerClassName?: string;
};
