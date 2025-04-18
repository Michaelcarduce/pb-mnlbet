import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { Heading2 } from "@/components/typography/Heading2";
import { Heading4 } from "@/components/typography/Heading4";
import { Paragraph } from "@/components/typography/Paragraph";
import Button from "@/components/ui/Button";
import FAQCardGrid from "@/components/ui/FAQCardGrid";
import { faqCardGridDataItems } from "@/data/faqCardGridData";
import React from "react";

export const ContactUsFAQSection = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={cn("p-8 md:p-12")}>
      <Heading2 className={cn("mb-4 md:mb-6 text-center")}>
        Section: Frequently Asked Questions (FAQ)
      </Heading2>
      <Paragraph className={cn("mb-4 md:mb-6 text-center")}>
        For fast answers to often asked topics, visit the FAQ part of the
        Panalobet website. We have compiled thorough information on technical
        assistance, account setup, deposit and withdrawal policies, betting
        restrictions. Reviewing our FAQ section will save you time and provide
        simple fixes for usually occurring issues before calling us.
      </Paragraph>
      <div className="pb-4 md:pb-10"></div>
      <Heading4 className={cn("mb-4 md:mb-6 text-left")}>
        Our FAQ page addresses several regularly asked questions including:
      </Heading4>
      <FAQCardGrid
        items={faqCardGridDataItems}
        isLoading={loading}
        className="gap-2 md:gap-4"
        cardClassName="hover:shadow-lg bg-[radial-gradient(circle_at_center,_#1E1E1E_0%,_#171717_50%)]"
        titleClassName="text-white"
        limit={4} //remove this line if desired to show all the list
      />
      <div className="flex justify-center py-4 md:py-6">
        <Button
          label="Read More"
          href="/"
          gradientStart="#1f2460"
          gradientEnd="#005fbe"
          shadowInset={true}
          width="150px"
          newTab={true}
        />
      </div>
    </section>
  );
};
