import { cn } from "@/lib/utils";
import { Heading2 } from "@/components/typography/Heading2";
import { Paragraph } from "@/components/typography/Paragraph";
import { FeatureSection } from "@/components/sections/FeatureSection";
import { Heading3 } from "@/components/typography/Heading3";

import React from "react";

export const SlotGcashBenefitsSection = () => {
  return (
    <section className={cn("p-8 md:p-12")}>
      <Heading2 className={cn("mb-4 md:mb-6 text-center")}>
        Benefits of GCash for Panalobet Slots
      </Heading2>
      <Paragraph className={cn("mb-4 md:mb-6 text-center")}>
        Transacting on Panalobet with GCash has various benefits:
      </Paragraph>
      <FeatureSection
        title="Deposits and Withdrawals"
        description={[
          "Deposits and Withdrawals are quick and simple, so you can return to enjoying your scatter games free from any interruptions.",
        ]}
        className="bg-[radial-gradient(circle_at_center,_#1E1E1E_0%,_#232323_100%)] border-y-[1.5px] border-amber-800 rounded-[20px] shadow-lg mb-6 md:mb-12"
        titleClassName="text-center text-2xl md:text-3xl font-semibold tracking-tight bg-gradient-to-b from-[#c6c6af] via-[#c6c6af] via-[#c6c6af] to-[#c6c6af] bg-clip-text text-transparent"
        dividerClassName="flex-col-reverse md:flex-row gap-2 md:gap-4"
        descriptionClassName=""
        paragraphClassName="text-left text-gray-300"
        img="/img/sectionImg1.webp"
      />
      <FeatureSection
        title="Security"
        description={[
          " GCash guarantees a safe forum for handling your money, so safeguarding your transactions.",
        ]}
        className="bg-[radial-gradient(circle_at_center,_#1E1E1E_0%,_#232323_100%)] border-y-[1.5px] border-[#303897] rounded-[20px] shadow-lg mb-6 md:mb-12"
        titleClassName="text-center text-2xl md:text-3xl font-semibold tracking-tight bg-gradient-to-b from-[#c6c6af] via-[#c6c6af] via-[#c6c6af] to-[#c6c6af] bg-clip-text text-transparent"
        dividerClassName="flex-col-reverse md:flex-row-reverse gap-2 md:gap-4"
        descriptionClassName=""
        paragraphClassName="text-left text-gray-300"
        img="/img/sectionImg1.webp"
      />
      <FeatureSection
        title="Accessibility"
        description={[
          "GCash, the most often used e-wallet in the Philippines, lets users easily make purchases whether at home or on the go.",
        ]}
        className="bg-[radial-gradient(circle_at_center,_#1E1E1E_0%,_#232323_100%)] border-y-[1.5px] border-yellow-500 rounded-[20px] shadow-lg"
        titleClassName="text-center text-2xl md:text-3xl font-semibold tracking-tight bg-gradient-to-b from-[#c6c6af] via-[#c6c6af] via-[#c6c6af] to-[#c6c6af] bg-clip-text text-transparent"
        dividerClassName="flex-col-reverse md:flex-row gap-2 md:gap-4"
        descriptionClassName=""
        paragraphClassName="text-left text-gray-300"
        img="/img/sectionImg1.webp"
      />
      <Heading3 className={cn("mb-4 lg:mb-6 text-center mt-8 lg:mt-12")}>
        Conclusion
      </Heading3>
      <Paragraph className={cn("mb-4 md:mb-6 text-center")}>
        Playing scatter games on Panalobet is a thrilling experience with plenty
        of strategy, excitement, and possible big prizes. Successful slot
        players must first understand the value of scatter symbols, wild
        symbols, paylines, RTP, and volatility. Using GCash for your purchases
        will help you to have flawless, safe, hassle-free gaming.
      </Paragraph>
      <Paragraph className={cn("mb-4 md:mb-6 text-center")}>
        Panalobet has a selection of thrilling scatter games to keep you
        occupied for hours regardless of your level of experience with online
        slots. Easy GCash transactions let you concentrate on what really
        counts—hitting those scatter symbols and releasing incredible payouts.
      </Paragraph>
    </section>
  );
};
