import { cn } from "@/lib/utils";
import { Heading2 } from "@/components/typography/Heading2";
import { Paragraph } from "@/components/typography/Paragraph";
import Button from "@/components/ui/Button";
import React from "react";
import Image from "next/image";

interface CallToActionProps {
  title: string;
  description: string | React.ReactNode | Array<string | React.ReactNode>;
  className?: string;
  titleClassName?: string;
  dividerClassName?: string;
  descriptionClassName?: string;
  paragraphClassName?: string;
  img?: string;
  btnLink?: string;
  btnText?: string;
  buttonClassName?: string;
}

export const CallToAction = ({
  title,
  description,
  className = "",
  titleClassName = "",
  dividerClassName = "",
  descriptionClassName = "",
  paragraphClassName = "",
  img = "",
  btnLink = "",
  btnText = "",
  buttonClassName = "",
}: CallToActionProps) => {
  const paragraphs = Array.isArray(description) ? description : [description];

  return (
    <section className={cn("", className)}>
      <div
        className={cn(
          "flex items-center justify-center gap-2",
          dividerClassName
        )}>
        <div
          className={cn(
            "w-full md:w-[50%] space-y-2 md:space-y-4",
            descriptionClassName
          )}>
          <Heading2 className={cn("mb-4 md:mb-6", titleClassName)}>
            {title}
          </Heading2>
          {paragraphs.map((paragraph, index) => (
            <Paragraph key={index} className={cn("", paragraphClassName)}>
              {paragraph}
            </Paragraph>
          ))}
          <div className={cn("", buttonClassName)}>
            <Button
              label={btnText}
              href={btnLink}
              gradientStart="#ff4e50"
              gradientEnd="#f60015"
              shadowInset={true}
              width="150px"
              newTab={true}
            />
          </div>
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
