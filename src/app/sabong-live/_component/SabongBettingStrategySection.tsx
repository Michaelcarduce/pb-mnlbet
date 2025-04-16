import { cn } from "@/lib/utils";
import { Heading2 } from "@/components/typography/Heading2";
import { Paragraph } from "@/components/typography/Paragraph";
import { Steps } from "@/components/ui/Steps";
import { sabongBettingStrategyData } from "@/data/sabongBettingStrategyData";
import React from "react";

export const SabongBettingStrategySection = () => {
  return (
    <section className={cn("p-8 md:p-12")}>
      <Heading2 className={cn("mb-4 md:mb-6 text-center")}>
        Maximizing Your Panalobet Betting Strategy
      </Heading2>
      <Paragraph className={cn("mb-4 md:mb-6 text-center")}>
        Consider these strategic concepts if you want to improve your winning
        chances and betting experience:
      </Paragraph>
      <div className="">
        <Steps
          cards={sabongBettingStrategyData}
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
      <Paragraph className={cn("mb-4 md:mb-6 text-center")}>
        Following these wise tips can help bettors enhance their experience,
        shar their decision-making, and increase their chances of large wins on
        Panalobet Sabong Live.
      </Paragraph>
    </section>
  );
};
