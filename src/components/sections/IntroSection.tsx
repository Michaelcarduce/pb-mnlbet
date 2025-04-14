import { cn } from "@/lib/utils";
import { Heading1 } from "@/components/typography/Heading1";
import { Paragraph } from "@/components/typography/Paragraph";
import React from "react";

interface IntroSectionProps {
  title: string;
  description: string | React.ReactNode | Array<string | React.ReactNode>;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  paragraphClassName?: string;
}

export const IntroSection = ({
  title,
  description,
  className = "",
  titleClassName = "",
  descriptionClassName = "",
  paragraphClassName = "",
}: IntroSectionProps) => {
  const paragraphs = Array.isArray(description) ? description : [description];

  return (
    <section className={cn("p-8 md:p-12 ", className)}>
      <Heading1 className={cn("mb-4 md:mb-6", titleClassName)}>
        {title}
      </Heading1>

      <div className={cn("space-y-2 md:space-y-4", descriptionClassName)}>
        {paragraphs.map((paragraph, index) => (
          <Paragraph key={index} className={cn("", paragraphClassName)}>
            {paragraph}
          </Paragraph>
        ))}
      </div>
    </section>
  );
};
