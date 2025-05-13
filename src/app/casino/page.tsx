"use client";

import { CasinoPromotionCardGridSection } from "./_component/CasinoPromotionCardGridSection";
import { IntroSection } from "@/components/sections/IntroSection";
import { CasinoRTPSection } from "./_component/CasinoRTPSection";
import { CasinoFreeSpinsSection } from "./_component/CasinoFreeSpinsSection";
import { PartnerSection } from "@/components/sections/PartnerSection";
import { CasinoPlayerExperienceSection } from "./_component/CasinoPlayerExperienceSection";
import { CasinoAffiliateProgramSection } from "./_component/CasinoAffiliateProgramSection";
import { CasinoWhyChooseSection } from "./_component/CasinoWhyChooseSection";
import { CasinoFutureSection } from "./_component/CasinoFutureSection";

export default function Casino() {
  return (
    <main>
      <CasinoPromotionCardGridSection />
      <IntroSection
        title="Top Online Casino Games in the Philippines: An All-Inclusive Player's Guide to Panalobet Casino"
        description={[
          "With more and more people finding the thrill of playing online casino games from the comfort of their homes, the Philippines' online gambling industry has been seeing fast expansion. Filipino players have many online casino sites at their disposal for enjoyment, excitement, or the possibility to win large. One of the most well-known names in this growing sector is Panalobet Casino, a top platform that gives users chances to earn big prizes in addition to the possibility to enjoy a great range of exciting casino games.",
          "The best online casino games at Panalobet Casino will be discussed in this guide, together with important characteristics, including RTP (Return to Player), progressive jackpots, free spins, no-deposit bonuses, and general benefits of using this platform.",
        ]}
        className="bg-[radial-gradient(circle_at_center,_#1E1E1E_0%,_#171717_50%)]"
        titleClassName="text-center"
        descriptionClassName="mx-auto max-w-5xl"
        paragraphClassName="text-center text-gray-300"
      />
      <CasinoRTPSection />
      <CasinoFreeSpinsSection />
      <PartnerSection
        title="No Bonus for Deposit: Play Before You Pay"
        description={[
          "The no-deposit bonus, which allows players to test the platform without making an initial deposit, is among the most appealing offers available from Panalobet Casino. This incentive is meant to provide fresh players with chances to explore the casino and engage in real-money gaming free of initial financial commitment.",
          "For recently registered players, Panalobet Casino, for example, provides a no-deposit bonus of ₱500 or 50 free spins on a few chosen slot games. This allows you to start playing straight away and maybe win actual money without making a deposit. Though some no-deposit bonuses include wagering limitations, they still offer a great approach for players to enter the realm of online casinos risk-free.",
          "New players will find a great approach to becoming acquainted with the games offered at Panalobet Casino to be the no-deposit bonus. This offer is a great approach to investigate the platform and see whether it suits your tastes whether you're new to online gambling or just looking to try out some games.",
        ]}
        className="bg-[radial-gradient(circle_at_center,_#1E1E1E_0%,_#171717_50%)]"
        titleClassName="text-center"
        descriptionClassName=""
        paragraphClassName="blocks text-left text-gray-300 bg-[radial-gradient(circle_at_center,_#31399a_0%,_#252b73_100%)] border-[1.5px] border-amber-800 rounded-[20px] p-4 md:p-6 "
        img="/img/casino/play-pay.webp"
      />
      <CasinoPlayerExperienceSection />
      <CasinoAffiliateProgramSection />
      <CasinoWhyChooseSection />
      <CasinoFutureSection />
    </main>
  );
}
