"use client";

import { SportsPromotionCardGridSection } from "./_component/SportsPromotionCardGridSection";
import { IntroSection } from "@/components/sections/IntroSection";
import { SportsWhyPanalobetSection } from "./_component/SportsWhyPanalobetSection";
import { SportsMarketSection } from "./_component/SportsMarketSection";
import { FeatureSection } from "@/components/sections/FeatureSection";
import { SportsPerfectingOddsSection } from "./_component/SportsPerfectingOddsSection";
import { SportsBetsKindSection } from "./_component/SportsBetsKindSection";
import { SportsBettingSuccessGuidlinesSection } from "./_component/SportsBettingSuccessGuidlinesSection";
import { SportsSummarySection } from "./_component/SportsSummarySection";

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
      <SportsWhyPanalobetSection />
      <SportsMarketSection />
      <FeatureSection
        title="Niche Games & eSports"
        description={[
          "Apart from conventional sports, Panalobet serves enthusiasts of eSports and specialized sports as well. eSports is increasingly of interest to the Philippines, and Panalobet offers a range of betting choices on games including Dota 2, League of Legend, and CS: GO.",
          "Among the most culturally important sports in the Philippines, sabong (cockfighting) is especially dear to Panalobet's services. Count on live cockfighting contests all throughout the nation.",
          "Panalobet offers a wide spectrum of sports, hence there is never a scarcity of betting chances there. This site provides a wide range of betting markets that keep things exciting regardless of your interests in mainstream sports or search for something else.",
        ]}
        className="bg-[radial-gradient(circle_at_center,_#1E1E1E_0%,_#171717_50%)]"
        titleClassName="text-center"
        dividerClassName="flex-col-reverse md:flex-row"
        descriptionClassName=""
        paragraphClassName="text-left text-gray-300"
        img="/img/sectionImg1.webp"
      />
      <SportsPerfectingOddsSection />
      <div className="pb-8 md:pb-12 "></div>
      <SportsBetsKindSection />
      <SportsBettingSuccessGuidlinesSection />
      <SportsSummarySection />
    </main>
  );
}
