import { cn } from "@/lib/utils";
import { Heading2 } from "@/components/typography/Heading2";
import { Paragraph } from "@/components/typography/Paragraph";
import React from "react";
import Image from "next/image";

interface PartnerSectionProps {
  title: string;
  description: string | React.ReactNode | Array<string | React.ReactNode>;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  paragraphClassName?: string;
  img?: string;
}

export const PartnerSection = ({
  title,
  description,
  className = "",
  titleClassName = "",
  descriptionClassName = "",
  paragraphClassName = "",
  img = "",
}: PartnerSectionProps) => {
  const paragraphs = Array.isArray(description) ? description : [description];

  return (
    <section className={cn("p-8 md:p-12 ", className)}>
      <Heading2 className={cn("mb-4 md:mb-6", titleClassName)}>
        {title}
      </Heading2>
      <div className="flex items-center justify-center flex-col-reverse gap-2 md:flex-row">
        <div className="w-full md:w-[40%] flex items-center justify-center ">
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
        <div
          className={cn(
            "w-full md:w-[60%] text-justify md:text-left space-y-2 md:space-y-4",
            descriptionClassName
          )}>
          {paragraphs.map((paragraph, index) => (
            <Paragraph key={index} className={cn("", paragraphClassName)}>
              {paragraph}
            </Paragraph>
          ))}
        </div>
      </div>
    </section>
  );
};
