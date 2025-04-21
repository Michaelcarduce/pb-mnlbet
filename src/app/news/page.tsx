"use client";

import { IntroSection } from "@/components/sections/IntroSection";
import { PromotionCardGridSection } from "./_component/PromotionCardGridSection";

export default function News() {
  return (
    <main>
      <IntroSection
        title="Discover the latest Panalobet News"
        description={[]}
        className="bg-[radial-gradient(circle_at_center,_#1E1E1E_0%,_#171717_50%)]"
        titleClassName="text-center"
        descriptionClassName="mx-auto max-w-5xl"
        paragraphClassName="text-center text-gray-300"
      />
      <PromotionCardGridSection />
    </main>
  );
}
