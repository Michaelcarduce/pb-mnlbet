"use client";

import { IntroSection } from "@/components/sections/IntroSection";
import { PromotionCardGridSection } from "./_component/PromotionCardGridSection";
import { SabongRegistrationStepsSection } from "./_component/SabongRegistrationStepsSection";
import { SabongGCashFundDeposit } from "./_component/SabongGCashFundDeposit";
import { MeronAgainstWala } from "./_component/MeronAgainstWala";
// import { FeatureSection } from "@/components/sections/FeatureSection";
// import { PartnerSection } from "@/components/sections/PartnerSection";
// import { PromoHighlightsSection } from "@/components/sections/PromoHighlightsSection";
// import { AdvertisingSection } from "@/components/sections/AdvertisingSection";
// import { WhyPanalobetSection } from "@/components/sections/WhyPanalobetSection";
// import { WinningJourneySection } from "@/components/sections/WinningJourneySection";

export default function SabongLive() {
  return (
    <main>
      <PromotionCardGridSection />
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
      <SabongGCashFundDeposit />
      <MeronAgainstWala />
      {/* 
      <PartnerSection
        title="Deposit Methods: Instant Transactions Using GCash"
        description={[
          "Since the introduction of digital payment options, GCash has become the dominant e-wallet tool in the Philippines, especially for online Sabong betting. Among Panalobet users, GCash is the advised deposit option for its perfect, fast, safe transactions.",
          <>
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-400 border-b-0 hover:tracking-wide hover:border-b-2 hover:border-yellow-500 transition duration-200 ">
              Panalobet
            </a>{" "}
            guarantees fast, hassle-free, and protected transactions using
            advanced security mechanisms created using GCash. With just a few
            clicks, players may fund their accounts and start placing bets
            straight away. Furthermore, providing excellent transaction limits,
            real-time processing, and seamless connection with Panalobet are
            GCash for modern bettors.
          </>,
          "Using GCash replaces difficult payment systems, long processing times, and bank visits. Gamblers instead prefer direct wallet-to-platform transfers, smartphone convenience, and 24/7 access to ensure a flawless betting experience. Using GCash helps players focus on what really counts—big wins on Panalobet Sabong Live., you will be able to access great rewards, competitive betting odds, and premium live-streamed sports.",
        ]}
        className="bg-[radial-gradient(circle_at_center,_#1E1E1E_0%,_#171717_50%)]"
        titleClassName="text-center"
        descriptionClassName=""
        paragraphClassName="blocks text-left text-gray-300 bg-[radial-gradient(circle_at_center,_#31399a_0%,_#252b73_100%)] border-[1.5px] border-amber-800 rounded-[20px] p-4 md:p-6 "
        img="/img/Best GCash-Ready Online Casino.webp"
      />
      <FeatureSection
        title="Prepare to Unlock Your Fortune and Begin Playing with Panalobet Right Now!"
        description={[
          "At Panalobet, we have streamlined the process so that every player—experienced or new—may enter the gambling scene with simplicity. Start playing right now and savor a selection of excellent games including the newest, trendiest casino slots as well as vintage favorites. Just a few clicks will open a universe full of amusement, incentives, and exciting challenges!",
          <>
            Discover the great enjoyment of playing at{" "}
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-400 border-b-0 hover:tracking-wide hover:border-b-2 hover:border-yellow-500 transition duration-200 ">
              Panalobet
            </a>{" "}
            among hundreds of other gamers who have already jumped right in.
            Your success depends on right at your hands, hence we are here to
            help you at every stage of your path. allows you to test your luck
            and skill at your speed and carry the thrill directly to your
            fingers.
          </>,
        ]}
        className="bg-[radial-gradient(circle_at_center,_#1E1E1E_0%,_#171717_50%)]"
        titleClassName="text-center"
        dividerClassName="flex-col-reverse md:flex-row"
        descriptionClassName=""
        paragraphClassName="text-left text-gray-300"
        img="/img/sectionImg1.webp"
      />
      <PromoHighlightsSection />
      <AdvertisingSection />
      <FeatureSection
        title="The Practicality of Playing Live Casino from Home"
        description={[
          "The days of having to outfit yourself and leave your house to feel the excitement of a live casino are long gone. No matter where you are, with Panalobet you may join live dealers and players from all around the world straight from your mobile device or computer. You can quickly access our live casino games and start playing straight away whether you're lounging at home or driving to work.",

          "Our easy-to-use interface and flawless connection will help you to not miss any of the action. You are therefore all ready for a world-class live gaming experience by grabbing your smartphone, making a GCash deposit.",
        ]}
        className="bg-[radial-gradient(circle_at_center,_#1E1E1E_0%,_#171717_50%)]"
        titleClassName="text-center"
        dividerClassName="flex-col-reverse md:flex-row"
        descriptionClassName=""
        paragraphClassName="text-left text-gray-300"
        img="/img/sectionImg1.webp"
      />
      <WhyPanalobetSection />
      <FeatureSection
        title="Responsible Gambling at Panalobet"
        description={[
          "Although gambling is a fun pastime, one should approach it responsibly and sensibly. Here at Panalobet, we are dedicated to encouraging sensible gaming. We know that players must be in charge of their gaming behavior and properly handle their money and time.",

          "To enable users to bet responsibly, we thus offer tools and resources such deposit restrictions, tracking of gaming activity, and the ability to self-exclude as needed. These tools enable you to enjoy gaming in a sensible, balanced manner free from compromising your finances or well-being.",
          "To prevent too much gambling, we advise players to set limits and take regular pauses. We provide help options including self-exclusion from our platform for a specified period should you ever feel that gambling is no longer enjoyable or badly impacting your life.",
        ]}
        className="bg-[radial-gradient(circle_at_center,_#1E1E1E_0%,_#171717_50%)]"
        titleClassName="text-center"
        dividerClassName="flex-col-reverse md:flex-row-reverse"
        descriptionClassName=""
        paragraphClassName="text-left text-gray-300"
        img="/img/sectionImg1.webp"
      />
      <WinningJourneySection /> */}
    </main>
  );
}
