import { cn } from "@/lib/utils";
import { Heading2 } from "@/components/typography/Heading2";
import { Paragraph } from "@/components/typography/Paragraph";
import React from "react";
import Image from "next/image";

interface FeatureSectionProps {
  title: string;
  description: string | React.ReactNode | Array<string | React.ReactNode>;
  className?: string;
  titleClassName?: string;
  dividerClassName?: string;
  descriptionClassName?: string;
  paragraphClassName?: string;
  img?: string;
}

export const FeatureSection = ({
  title,
  description,
  className = "",
  titleClassName = "",
  dividerClassName = "",
  descriptionClassName = "",
  paragraphClassName = "",
  img = "",
}: FeatureSectionProps) => {
  const paragraphs = Array.isArray(description) ? description : [description];

  return (
    <section className={cn("p-8 md:p-12 ", className)}>
      <Heading2 className={cn("mb-4 md:mb-6", titleClassName)}>
        {title}
      </Heading2>
      <div
        className={cn(
          "flex items-center justify-center gap-2",
          dividerClassName
        )}>
        <div
          className={cn(
            "w-full md:w-[50%] text-justify md:text-left space-y-2 md:space-y-4",
            descriptionClassName
          )}>
          {paragraphs.map((paragraph, index) => (
            <Paragraph key={index} className={cn("", paragraphClassName)}>
              {paragraph}
            </Paragraph>
          ))}
        </div>
        <div className="w-full md:w-[50%] flex items-center justify-center ">
          <Image
            src={img}
            width={400}
            height={400}
            alt="Panalobet"
            style={{
              objectFit: "contain",
            }}
          />
        </div>
      </div>
    </section>
  );
};
