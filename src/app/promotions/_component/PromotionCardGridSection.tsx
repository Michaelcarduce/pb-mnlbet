import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import PromotionCardGrid from "@/components/ui/PromotionCardGrid";
import { casinoCardGridPromotionItems } from "@/data/casinoCardGridPromotionData";
import { Heading2 } from "@/components/typography/Heading2";
import React from "react";

export const PromotionCardGridSection = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={cn("p-8 md:p-12")}>
      <Heading2 className={cn("mb-4 md:mb-6 text-center")}>
        Start Your Journey with a Fantastic Bonus
      </Heading2>
      <PromotionCardGrid
        items={casinoCardGridPromotionItems}
        isLoading={loading}
        className="gap-2 md:gap-4"
        cardClassName="hover:shadow-lg bg-[radial-gradient(circle_at_center,_#1E1E1E_0%,_#171717_50%)]"
        titleClassName="text-white"
        // limit={2} //remove this line if desired to show all the list
      />
    </section>
  );
};
