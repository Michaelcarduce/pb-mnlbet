import { cn } from "@/lib/utils";
import { Heading3 } from "@/components/typography/Heading3";
import { Paragraph } from "@/components/typography/Paragraph";
import React from "react";
import FeaturedPromotionBanner from "@/components/ui/FeaturedPromotionBanner";
import { promotionWelcomeBonusItems } from "@/data/promotionWelcomeBonusData";

interface WelcomeBonusPromotionProps {
  title: string;
  description: string | React.ReactNode | Array<string | React.ReactNode>;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  paragraphClassName?: string;
}

export const WelcomeBonusPromotion = ({
  title,
  description,
  className = "",
  titleClassName = "",
  descriptionClassName = "",
  paragraphClassName = "",
}: WelcomeBonusPromotionProps) => {
  const paragraphs = Array.isArray(description) ? description : [description];

  return (
    <section className={cn("p-8 lg:p-12 ", className)}>
      <Heading3 className={cn("mb-4 lg:mb-6", titleClassName)}>
        {title}
      </Heading3>
      <div className="flex items-center justify-center flex-col lg:flex-row ">
        <div className="flex w-full lg:w-[80%] items-center justify-center ">
          <FeaturedPromotionBanner items={promotionWelcomeBonusItems} />
        </div>
      </div>
      <div
        className={cn(
          "flex items-start justify-center flex-col lg:flex-row gap-2 md:gap-4",
          descriptionClassName
        )}>
        {" "}
        {paragraphs.map((paragraph, index) => (
          <Paragraph
            key={index}
            className={cn("flex w-full lg:w-[50%]", paragraphClassName)}>
            {paragraph}
          </Paragraph>
        ))}
      </div>
    </section>
  );
};
