"use client";

import { IntroSection } from "@/components/sections/IntroSection";
import { PromotionCardGridSection } from "./_component/PromotionCardGridSection";

export default function Promotions() {
  return (
    <main>
      <IntroSection
        title="Discover the Ultimate Gaming Thrills with Panalobet: Unbeatable Bonuses, Exclusive Offers, and Limitless Entertainment"
        description={[
          "Are you seeking a first-rate online casino experience with lots of interesting games, special offers, and unmatched bonuses? Welcome to Panalobet, the top online gaming site where users from the Philippines and abroad may savor the excitement of betting, winning, and investigating fresh gaming prospects. At Panalobet, we have a carefully chosen range of games and incentives that will guarantee every moment spent here is interesting, fun, and full of opportunities to win large. Panalobet has something for everyone, whether your interests are in online slots, live casino games, online sabong, or another exciting choice.",
          <>
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-400 border-b-0 hover:tracking-wide hover:border-b-2 hover:border-yellow-500 transition duration-200 ">
              Panalobet
            </a>{" "}
            distinguishes itself in the cutthroat realm of online gaming with
            its dedication to providing its customers with exceptional bonuses,
            exciting promotions, and a wide range of games meant to satisfy all
            tastes and preferences. Discover the amazing bonuses, promotions,
            and features that make Panalobet the best choice for aficionados of
            online gambling by keeping reading.
          </>,
        ]}
        className="bg-[radial-gradient(circle_at_center,_#1E1E1E_0%,_#171717_50%)]"
        titleClassName="text-center"
        descriptionClassName="mx-auto max-w-5xl"
        paragraphClassName="text-center text-gray-300"
      />
      <PromotionCardGridSection />
    </main>
  );
}
