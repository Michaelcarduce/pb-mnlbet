import { cn } from "@/lib/utils";
import { Heading2 } from "@/components/typography/Heading2";
import { Heading3 } from "@/components/typography/Heading3";
import { Paragraph } from "@/components/typography/Paragraph";
import { AwardPromotion } from "@/components/promotions/AwardPromotion";
import { FeatureSection } from "@/components/sections/FeatureSection";
// import { ImageComponent } from "@/components/ui/ImageComponent";

import React from "react";

export const WinningJourneySection = () => {
  return (
    <section
      className={cn(
        "p-8 md:p-12 bg-[radial-gradient(circle_at_center,_#171717_0%,_#1F1F1F_100%)] rounded-[7px] shadow-md"
      )}>
      <Heading2 className={cn("mb-4 md:mb-6 text-center")}>
        Starting Your Winning Journey with Panalobet Right Now
      </Heading2>
      <Paragraph className={cn("mb-4 md:mb-6 text-center")}>
        Are you ready to mark your name and enjoy the very best of internet
        gaming? Here is Panalobet to help you travel an amazing path full of
        exciting games, unmatched offers, and large win possibilities! Whether
        your experience with online gaming is new or seasoned, there is never a
        better moment to explore this realm. Here at Panalobet, we offer a
        complete gaming experience where enjoyment, excitement, and the
        possibility for large profits take front stage.
      </Paragraph>
      <AwardPromotion
        title="Unbeatable Awards and Promotions Ahead"
        description={[
          "Signing up with Panalobet is entering a world of special benefits and interesting incentives, not only joining an online casino. You can receive a big welcome bonus as soon as you register, which will provide you additional money to investigate our extensive game range. From slots to table games and live dealer events, you will find many possibilities to raise your odds of winning right from the beginning.",
          "Being a GCash-ready casino also helps us to make sure your experience with money management is flawless. By means of GCash, instant deposits and withdrawals enable you to always be in charge of your money, thereby enabling you to concentrate on what truly counts - having fun and playing your best game!",
        ]}
        className="bg-[radial-gradient(circle_at_center,_#1E1E1E_0%,_#232323_100%)] border-y-[1.5px] border-amber-800 rounded-[20px] shadow-lg mb-6 md:mb-12"
        titleClassName="text-center "
        descriptionClassName=""
        paragraphClassName="text-center lg:text-left text-gray-300 "
      />
      <Heading3 className={cn("mb-4 lg:mb-6 text-center")}>
        A Universe of Gaming Possibilities Right At Your Fingertips
      </Heading3>
      <FeatureSection
        title=""
        description={[
          "Panalobet features everything from a few rounds of your preferred slots to Baccarat, trying your luck to head-to-head in a fierce game of live poker. Our large range of games is meant to appeal to every kind of player, hence there is always something interesting and novel to engage in.",

          "Excellent graphics, rich sound effects, and seamless gameplay will help you to be totally in every moment.",
        ]}
        className="bg-[radial-gradient(circle_at_center,_#1E1E1E_0%,_#171717_50%)]"
        titleClassName="text-center"
        dividerClassName="flex-col-reverse md:flex-row"
        descriptionClassName=""
        paragraphClassName="text-left text-gray-300"
        img="/img/homepage/A Universe of Gaming.webp"
      />
      <Heading3 className={cn("mb-4 lg:mb-6 text-center mt-8 lg:mt-12")}>
        Your Winning Trip Begins Here
      </Heading3>
      <Paragraph className={cn("mb-4 md:mb-6 text-center")}>
        Let this chance pass by. Sign up now and begin playing at the top online
        casino in the Philippines, Panalobet. Claim your welcome bonus, join
        thousands of already-discovered winning streaks of gamers, and get ready
        to elevate your gaming experience. Your passport to exciting games, huge
        rewards, and the possibility to win big is Panalobet; now is the moment
        to start your winning trip!
      </Paragraph>
      <Paragraph className={cn("mb-4 md:mb-6 text-center")}>
        Join now to discover the thrills, entertainment value, and limitless
        opportunities that Panalobet presents!
      </Paragraph>
      {/* <div className="flex flex-col gap-2">
        <div className="w-full">
          <div className="w-full">
            <ImageComponent
              src="/img/img1.webp"
              alt="Premium Casino"
              width={600}
              height={400}
              borderRadius="rounded-xl"
              shadow="shadow-xl"
              hoverScale={1.05}
              hoverShadow="shadow-2xl"
              duration={0.4}
              className="border-2 border-gold-500"
            />
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row gap-2">
          <div className="w-full md:w-[50%]">
            <ImageComponent
              src="/img/img2.webp"
              alt="Premium Casino"
              width={600}
              height={400}
              borderRadius="rounded-xl"
              shadow="shadow-xl"
              hoverScale={1.05}
              hoverShadow="shadow-2xl"
              duration={0.4}
              className="border-2 border-gold-500"
            />
          </div>
          <div className="w-full md:w-[50%]">
            <ImageComponent
              src="/img/img3.webp"
              alt="Premium Casino"
              width={600}
              height={400}
              borderRadius="rounded-xl"
              shadow="shadow-xl"
              hoverScale={1.05}
              hoverShadow="shadow-2xl"
              duration={0.4}
              className="border-2 border-gold-500"
            />
          </div>
        </div>
      </div> */}
    </section>
  );
};
