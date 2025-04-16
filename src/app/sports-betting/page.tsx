"use client";

import { SportsPromotionCardGridSection } from "./_component/SportsPromotionCardGridSection";
import { IntroSection } from "@/components/sections/IntroSection";
import { SportsMeronAgainstWalaSection } from "./_component/SportsMeronAgainstWalaSection";

// import { SabongRegistrationStepsSection } from "./_component/SabongRegistrationStepsSection";
// import { SabongGCashFundDepositSection } from "./_component/SabongGCashFundDepositSection";
// import { SabongMainCharacteristicsSection } from "./_component/SabongMainCharacteristicsSection";
// import { SabongBreedOfGamefowlSection } from "./_component/SabongBreedOfGamefowlSection";
// import { SabongGCashWithdrawWinsSection } from "./_component/SabongGCashWithdrawWinsSection";
// import { SabongBettingStrategySection } from "./_component/SabongBettingStrategySection";
// import { SabongConclusionSection } from "./_component/SabongConclusionSection";

export default function SportsBetting() {
  return (
    <main>
      <SportsPromotionCardGridSection />
      <IntroSection
        title="Online Sports Betting with Panalobet: Your All-Inclusive Success Manual"
        description={[
          "With more and more sports fans and punters joining the bandwagon, online sports betting is among the most interesting and fast-expanding businesses in the Philippines. Among this expanding market, one platform that really shines is Panalobet. Renowned for its extensive range of sports markets, fair odds, and easy-to-use interface, Panalobet is quickly rising to be among the best places for novice and seasoned sports bettors.",
          <>
            This thorough guide will help you negotiate your way to success with{" "}
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-400 border-b-0 hover:tracking-wide hover:border-b-2 hover:border-yellow-500 transition duration-200 ">
              Panalobet
            </a>
            , whether your experience with online sports betting is new or if
            you have been betting for some time but want to improve your skills.
            This tutorial is meant to provide you with everything you need to
            maximize your betting experience, from knowing how to choose the
            correct platform to mastering various kinds of odds and betting
            lines.
          </>,
        ]}
        className="bg-[radial-gradient(circle_at_center,_#1E1E1E_0%,_#171717_50%)]"
        titleClassName="text-center"
        descriptionClassName="mx-auto max-w-5xl"
        paragraphClassName="text-center text-gray-300"
      />
      <SportsMeronAgainstWalaSection />

      {/* <SabongRegistrationStepsSection />
      <SabongGCashFundDepositSection />
      <SabongMainCharacteristicsSection />
      <SabongBreedOfGamefowlSection />
      <SabongGCashWithdrawWinsSection />
      <SabongBettingStrategySection />
      <SabongConclusionSection /> */}
    </main>
  );
}
