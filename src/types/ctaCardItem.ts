export type CTACardItem = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
};

export type CTACardProps = {
  mainImage: CTACardItem;
  cTACardItems: CTACardItem[];
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
