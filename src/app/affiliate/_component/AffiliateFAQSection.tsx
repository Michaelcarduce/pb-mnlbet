import { cn } from "@/lib/utils";
import { Heading2 } from "@/components/typography/Heading2";
import { Paragraph } from "@/components/typography/Paragraph";
import FAQCard from "@/components/ui/FAQCard";
import { gameFAQs } from "@/data/faqData";
import React from "react";

export const AffiliateFAQSection = () => {
  return (
    <section className={cn("p-8 md:p-12")}>
      <Heading2 className={cn("mb-4 md:mb-6 text-center")}>
        Frequently Asked Questions About ph365
      </Heading2>
      <Paragraph className={cn("mb-4 md:mb-6 text-center")}>
        We at ph365 aspire to provide every one of our players first-rate gaming
        experience. We have developed a list of the most often asked questions
        (FAQs) from users to make sure your trip is most ideal and that you
        might appreciate our platform. Here we address all the most often asked
        questions covering anything from game choice to customer service and
        payment options in detailed replies. This handbook seeks to allay any
        worries or queries you might have as you visit the wonderful planet
        ph365.
      </Paragraph>
      <div className="pb-4 md:pb-10"></div>
      <FAQCard
        items={gameFAQs}
        defaultOpenIndex={0}
        className="p-8 md:p-12 bg-[radial-gradient(circle_at_center,_#171717_0%,_#1F1F1F_100%)] rounded-[7px] shadow-md"
      />
    </section>
  );
};
