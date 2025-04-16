"use client";

import { IntroSection } from "@/components/sections/IntroSection";
import { SabongPromotionCardGridSection } from "./_component/SabongPromotionCardGridSection";
import { SabongRegistrationStepsSection } from "./_component/SabongRegistrationStepsSection";
import { SabongGCashFundDepositSection } from "./_component/SabongGCashFundDepositSection";
import { SabongMeronAgainstWalaSection } from "./_component/SabongMeronAgainstWalaSection";
import { SabongMainCharacteristicsSection } from "./_component/SabongMainCharacteristicsSection";
import { SabongBreedOfGamefowlSection } from "./_component/SabongBreedOfGamefowlSection";
import { SabongGCashWithdrawWinsSection } from "./_component/SabongGCashWithdrawWinsSection";
import { SabongBettingStrategySection } from "./_component/SabongBettingStrategySection";
import { SabongConclusionSection } from "./_component/SabongConclusionSection";

export default function SabongLive() {
  return (
    <main>
      <SabongPromotionCardGridSection />
      <IntroSection
        title="The Complete Guide to Online Sabong Registration and GCash Payments on Panalobet"
        description={[
          "For years, the Philippines have revered the exciting and vicious cockfighting sport Sabong, as their national pastime. Now that digital technology is so pervasive, Sabong has moved naturally to online venues so that devotees may experience the thrill from anywhere. Panalobet is leading this trend since it offers an exciting, simple, safe, online Sabong interface. Our platform ensures that, with fast transactions and real-time matches, you will have hassle-free betting regardless of experience level.",
          <>
            This tutorial will guide you through the required steps for
            registration on{" "}
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-400 border-b-0 hover:tracking-wide hover:border-b-2 hover:border-yellow-500 transition duration-200 ">
              Panalobet Sabong Live
            </a>
            , using GCash for transactions, looking at important betting
            characteristics, and maximizing your chances of winning.
          </>,
        ]}
        className="bg-[radial-gradient(circle_at_center,_#1E1E1E_0%,_#171717_50%)]"
        titleClassName="text-center"
        descriptionClassName="mx-auto max-w-5xl"
        paragraphClassName="text-center text-gray-300"
      />
      <SabongRegistrationStepsSection />
      <SabongGCashFundDepositSection />
      <SabongMeronAgainstWalaSection />
      <SabongMainCharacteristicsSection />
      <SabongBreedOfGamefowlSection />
      <SabongGCashWithdrawWinsSection />
      <SabongBettingStrategySection />
      <SabongConclusionSection />
    </main>
  );
}
