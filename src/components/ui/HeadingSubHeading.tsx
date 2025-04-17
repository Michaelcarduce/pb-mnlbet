import { cn } from "@/lib/utils";
import { Heading3 } from "@/components/typography/Heading3";
import { Paragraph } from "@/components/typography/Paragraph";
import React from "react";

interface HeadingSubHeadingProps {
  title: string;
  description: string | React.ReactNode | Array<string | React.ReactNode>;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  paragraphClassName?: string;
}

export const HeadingSubHeading = ({
  title,
  description,
  className = "",
  titleClassName = "",
  descriptionClassName = "",
  paragraphClassName = "",
}: HeadingSubHeadingProps) => {
  const paragraphs = Array.isArray(description) ? description : [description];

  return (
    <section className={cn("p-8 md:p-12 ", className)}>
      <Heading3 className={cn("mb-4 md:mb-6", titleClassName)}>
        {title}
      </Heading3>

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
