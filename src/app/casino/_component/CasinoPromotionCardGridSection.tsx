import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import PromotionCardGrid from "@/components/ui/PromotionCardGrid";
import { casinoCardGridPromotionItems } from "@/data/casinoCardGridPromotionData";
import Button from "@/components/ui/Button";
import React from "react";

export const CasinoPromotionCardGridSection = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={cn("px-8 md:px-12 pt-8 md:pt-12")}>
      <PromotionCardGrid
        items={casinoCardGridPromotionItems}
        isLoading={loading}
        className="gap-2 md:gap-4"
        cardClassName="hover:shadow-lg bg-[radial-gradient(circle_at_center,_#1E1E1E_0%,_#171717_50%)]"
        titleClassName="text-white"
        limit={2} //remove this line if desired to show all the list
      />
      <div className="flex justify-center py-4 md:py-6">
        <Button
          label="Explore All"
          href="/casino"
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
