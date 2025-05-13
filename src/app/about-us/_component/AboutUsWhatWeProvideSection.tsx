import { cn } from "@/lib/utils";
import { Heading2 } from "@/components/typography/Heading2";
import { Paragraph } from "@/components/typography/Paragraph";
import { Heading3 } from "@/components/typography/Heading3";
import CTACardGrid from "@/components/ui/CTACardGrid";
import { sportsCardBasketballData } from "@/data/sportsCardBasketballData";
import { casinoCardData } from "@/data/casinoCardData";

import React from "react";

export const AboutUsWhatWeProvideSection = () => {
  return (
    <section className={cn("py-8 md:py-12")}>
      <Heading2 className={cn("mb-4 md:mb-6 text-center")}>
        What We Provide
      </Heading2>
      <div className="bg-[radial-gradient(circle_at_center,_#1E1E1E_0%,_#232323_100%)] border-y-[1.5px] border-amber-800 rounded-[20px] shadow-lg mb-6 md:mb-12 p-8 md:p-12">
        <Heading3 className={cn("mb-4 lg:mb-6 text-left")}>
          Betting on Sports
        </Heading3>
        <Paragraph className={cn("mb-4 md:mb-6 text-left")}>
          For fans of sports, Panalobet offers a whole sports betting platform
          with a wide range of betting options. Enjoy fair chances on live and
          pre-match events in numerous sports, including: Basketball, Football,
          Tennis, Punching, Horse Running and many more!
        </Paragraph>

        <CTACardGrid
          {...sportsCardBasketballData}
          containerClassName="px-8 md:px-12 py-2 md:py-4 flex flex-col justify-between gap-2 md:gap-4 md:flex-row overflow-x-hidden"
          mainImageContainerClassName="w-full self-center flex items-center justify-center rounded-md md:w-[300px] md:h-[300px] hover:scale-105 transition-transform"
          gridContainerClassName="grid grid-cols-4 gap-4"
          gridItemClassName="flex items-center justify-center rounded-md md:w-[200px] md:h-[200px] hover:scale-105 transition-transform"
          ctaContainerClassName="w-full flex items-center justify-center mt-2 md:mt-0"
        />
        <Paragraph className={cn("mb-4 md:mb-6 text-left")}>
          Our online platform offers in-depth betting markets, live streaming,
          and real-time updates to improve your sports gambling experience
          whether your interests are in local games or international leagues.
        </Paragraph>
      </div>
      <div className="bg-[radial-gradient(circle_at_center,_#1E1E1E_0%,_#232323_100%)] border-y-[1.5px] border-[#303897] rounded-[20px] shadow-lg mb-6 md:mb-12 p-8 md:p-12">
        <Heading3 className={cn("mb-4 lg:mb-6 text-left")}>
          Live Sabong, sometimes known as Cockfighting
        </Heading3>
        <Paragraph className={cn("mb-4 md:mb-6 text-left")}>
          You will be delighted with live Sabong betting at Panalobet!
          Originally among the most common traditional sports in the
          Philippines, Sabong has recently gone digital and allows players to
          gamble on live cockfighting tournaments anywhere. Live HD broadcasting
          of Sabong Events, Odds for Real-Time Betting, Fast and Safe Returns,
          Complete Match Analysis to guide your betting decisions.
        </Paragraph>

        <CTACardGrid
          {...sportsCardBasketballData}
          containerClassName="px-8 md:px-12 py-2 md:py-4 flex flex-col justify-between gap-2 md:gap-4 md:flex-row overflow-x-hidden"
          mainImageContainerClassName="w-full self-center flex items-center justify-center rounded-md md:w-[300px] md:h-[300px] hover:scale-105 transition-transform"
          gridContainerClassName="grid grid-cols-4 gap-4"
          gridItemClassName="flex items-center justify-center rounded-md md:w-[200px] md:h-[200px] hover:scale-105 transition-transform"
          ctaContainerClassName="w-full flex items-center justify-center mt-2 md:mt-0"
        />
      </div>
      <div className="bg-[radial-gradient(circle_at_center,_#1E1E1E_0%,_#232323_100%)] border-y-[1.5px] border-yellow-500 rounded-[20px] shadow-lg mb-6 md:mb-12 p-8 md:p-12">
        <Heading3 className={cn("mb-4 lg:mb-6 text-left")}>
          Games at a Casino
        </Heading3>
        <Paragraph className={cn("mb-4 md:mb-6 text-left")}>
          With a large range of top-notch casino games, Panalobet puts the
          thrill of a real casino right onto your screen. Play well-known
          masterpieces like: Slots, Blackjack, Roulette, Bingarat, Playing Poker
        </Paragraph>

        <CTACardGrid
          {...casinoCardData}
          containerClassName="px-8 md:px-12 py-2 md:py-4 flex flex-col justify-between gap-2 md:gap-4 md:flex-row overflow-x-hidden"
          mainImageContainerClassName="w-full self-center flex items-center justify-center rounded-md md:w-[300px] md:h-[300px] hover:scale-105 transition-transform"
          gridContainerClassName="grid grid-cols-4 gap-4"
          gridItemClassName="flex items-center justify-center rounded-md md:w-[200px] md:h-[200px] hover:scale-105 transition-transform"
          ctaContainerClassName="w-full flex items-center justify-center mt-2 md:mt-0"
        />
        <Paragraph className={cn("mb-4 md:mb-6 text-left")}>
          We work with elite gaming companies to guarantee that you can access
          the greatest and most interesting casino games with amazing graphics
          and fair play systems.
        </Paragraph>
      </div>
      <div className="bg-[radial-gradient(circle_at_center,_#1E1E1E_0%,_#232323_100%)] border-y-[1.5px] border-amber-800 rounded-[20px] shadow-lg mb-6 md:mb-12 p-8 md:p-12">
        <Heading3 className={cn("mb-4 lg:mb-6 text-left")}>
          eSports Betting
        </Heading3>
        <Paragraph className={cn("mb-4 md:mb-6 text-left")}>
          Come experience the exciting universe of e-sports betting with
          Panalobet! Given the explosive growth of competitive gaming, our
          website provides betting choices on big e-Sport events for games
          including: Dota Two, CS:GO, League of Legends, Valorant, Call of Duty
        </Paragraph>

        <CTACardGrid
          {...sportsCardBasketballData}
          containerClassName="px-8 md:px-12 py-2 md:py-4 flex flex-col justify-between gap-2 md:gap-4 md:flex-row overflow-x-hidden"
          mainImageContainerClassName="w-full self-center flex items-center justify-center rounded-md md:w-[300px] md:h-[300px] hover:scale-105 transition-transform"
          gridContainerClassName="grid grid-cols-4 gap-4"
          gridItemClassName="flex items-center justify-center rounded-md md:w-[200px] md:h-[200px] hover:scale-105 transition-transform"
          ctaContainerClassName="w-full flex items-center justify-center mt-2 md:mt-0"
        />
        <Paragraph className={cn("mb-4 md:mb-6 text-left")}>
          Live updates, in-depth data, and several betting choices will help you
          to elevate your e-sports betting experience.
        </Paragraph>
      </div>
      <div className="bg-[radial-gradient(circle_at_center,_#1E1E1E_0%,_#232323_100%)] border-y-[1.5px] border-[#303897] rounded-[20px] shadow-lg mb-6 md:mb-12 p-8 md:p-12">
        <Heading3 className={cn("mb-4 lg:mb-6 text-left")}>
          Bonuses and Promotions
        </Heading3>
        <Paragraph className={cn("mb-4 md:mb-6 text-left")}>
          Exciting promos and huge bonuses from Panalobet reward its players in:
          Welcome Bonuses for Fresh Athletes, Cashback Programs, Points of
          Loyalty, Bonus Deposits, Exclusive Prize Awards
        </Paragraph>

        <CTACardGrid
          {...sportsCardBasketballData}
          containerClassName="px-8 md:px-12 py-2 md:py-4 flex flex-col justify-between gap-2 md:gap-4 md:flex-row overflow-x-hidden"
          mainImageContainerClassName="w-full self-center flex items-center justify-center rounded-md md:w-[300px] md:h-[300px] hover:scale-105 transition-transform"
          gridContainerClassName="grid grid-cols-4 gap-4"
          gridItemClassName="flex items-center justify-center rounded-md md:w-[200px] md:h-[200px] hover:scale-105 transition-transform"
          ctaContainerClassName="w-full flex items-center justify-center mt-2 md:mt-0"
        />
        <Paragraph className={cn("mb-4 md:mb-6 text-left")}>
          Our specials are meant to increase your betting experience and provide
          additional chances for huge wins!
        </Paragraph>
      </div>
    </section>
  );
};
