import { cn } from "@/lib/utils";
import { Heading2 } from "@/components/typography/Heading2";
import { Paragraph } from "@/components/typography/Paragraph";
import { Steps } from "@/components/ui/Steps";
import { slotGcashData } from "@/data/slotGcashData";
import React from "react";

export const SlotGcashSection = () => {
  return (
    <section className={cn("p-8 md:p-12")}>
      <Heading2 className={cn("mb-4 md:mb-6 text-center")}>
        Using GCash for Panalobet Slots
      </Heading2>
      <Paragraph className={cn("mb-4 md:mb-6 text-center")}>
        Knowing the key components of scatter games, let&apos;s go over how you
        might quickly employ GCash on Panalobet.
      </Paragraph>
      <div className="">
        <Steps
          cards={slotGcashData}
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
