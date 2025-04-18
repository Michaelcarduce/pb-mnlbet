import { cn } from "@/lib/utils";
import { Heading2 } from "@/components/typography/Heading2";
import { Paragraph } from "@/components/typography/Paragraph";
import { StepGuide } from "@/components/ui/StepGuide";
import { affiliateDepositGuideData } from "@/data/affiliateDepositGuideData";
import React from "react";

export const AffiliateDepositSystematicGuide = () => {
  return (
    <section className={cn("p-8 md:p-12 ")}>
      <Heading2 className={cn("mb-4 md:mb-6 text-center")}>
        The Systematic Guide to Depositing at ph365
      </Heading2>

      <Paragraph className={cn("mb-4 md:mb-6 text-center")}>
        Quick and easy fund depositing into your ph365 account allows you to
        start immediately playing your choice sports betting or casino games.
        Safe and securely deposit money using the directions provided.
      </Paragraph>

      <StepGuide
        steps={affiliateDepositGuideData}
        stepClassName="py-2 md:py-6 rounded-lg"
        activeStepClassName="bg-[radial-gradient(circle_at_center,_#1E1E1E_0%,_#171717_50%)] shadow-lg"
        containerClassName="mb-4 md:mb-6"
        imageContainerClassName="md:border-r md:border-gray-800 justify-end md:self-start md:pr-15 mb-4 md:mb-0"
        contentContainerClassName="md:pl-15"
        stepIndicatorClassName="border-gray-500 bg-gray-600"
        activeStepIndicatorClassName="font-bold bg-yellow-500 border-yellow-400"
        titleClassName="bg-gradient-to-b from-[#c6c6af] via-[#e5e5d5] to-[#a3a285] bg-clip-text text-transparent"
        descriptionClassName="text-left mt-2 md:mt-4"
        subTitleClassName="bg-gradient-to-b from-[#c6c6af] via-[#e5e5d5] to-[#a3a285] bg-clip-text text-transparent"
        subListClassName=""
        subListItemClassName=""
      />
    </section>
  );
};
