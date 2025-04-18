import { cn } from "@/lib/utils";
import { Heading2 } from "@/components/typography/Heading2";
import { Paragraph } from "@/components/typography/Paragraph";
import { Steps } from "@/components/ui/Steps";
import { affiliateJoiningData } from "@/data/affiliateJoiningData";
import React from "react";

export const AffiliateJoiningPH365Section = () => {
  return (
    <section className={cn("p-8 md:p-12")}>
      <Heading2 className={cn("mb-4 md:mb-6 text-center")}>
        Comprehensive Guide on Joining ph365 Casino Step-by- Step
      </Heading2>
      <Paragraph className={cn("mb-4 md:mb-6 text-center")}>
        By a quick and easy method, joining ph365 Casino enables you start
        playing your chosen games in no time. Here is a comprehensive, detailed
        guide on registering for your account and enjoying the amazing world of
        internet gaming.
      </Paragraph>
      <div className="">
        <Steps
          cards={affiliateJoiningData}
          cardClassName="w-full "
          activeCardClassName="w-full"
          lineColor="bg-gray-500/20"
          activeLineColor="bg-yellow-500"
          stepIndicatorClassName="w-10 h-10 flex items-center justify-center rounded-full border-2 bg-gray-300 border-gray-300 transition-all"
          activeStepIndicatorClassName="font-bold bg-yellow-500 text-[#960525] border-yellow-400"
          titleClassName="text-left mb-2 md:mb-4"
          descriptionClassName=""
        />
      </div>
    </section>
  );
};
