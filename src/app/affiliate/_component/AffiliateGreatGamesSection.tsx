import { cn } from "@/lib/utils";
import { Heading3 } from "@/components/typography/Heading3";
import { Paragraph } from "@/components/typography/Paragraph";
import { CallToAction } from "@/components/ui/CallToAction";
import CTACardGrid from "@/components/ui/CTACardGrid";
import { sportsCardSportsData } from "@/data/sportsCardSportsData";
import { slotsCardData } from "@/data/slotsCardData";
import { fishingCardData } from "@/data/fishingCardData";
import { casinoCardData } from "@/data/casinoCardData";
import { cardCardData } from "@/data/cardCardData";
import { lotteryCardData } from "@/data/lotteryCardData";
import React from "react";

export const AffiliateGreatGamesSection = () => {
  return (
    <section className={cn("")}>
      <CallToAction
        title="Discover the Great Games and Products from ph365"
        description={[
          "Online casinos have evolved significantly recently to provide players an always widening range of pleasure. From novices to seasoned pros, ph365 stands out for being Slots, fishing games, live casino games, sports betting, card games, and lottery games among the well chosen games on our site offering a wide selection of gaming options that meet all kinds of gamers. Regardless matter the kind of experience you are looking for, ph365 has everything to attract your interest and provide hours of entertainment.",
        ]}
        className="bg-[radial-gradient(circle_at_center,_#1E1E1E_0%,_#171717_50%)] p-8 md:p-12 "
        titleClassName="text-center md:text-left"
        dividerClassName="flex-col-reverse md:flex-row"
        descriptionClassName=""
        paragraphClassName="text-center md:text-left text-gray-300"
        img="/img/affiliate/discover.webp"
        btnLink="/"
        btnText="PLAY NOW"
        buttonClassName="flex justify-center md:justify-start py-4 md:py-6"
      />

      <div className="p-8 md:p-12">
        <Heading3 className="mb-4 lg:mb-6 text-center md:text-left">
          Slots Games: An Excite Universe of Diversification
        </Heading3>
        <Paragraph className="mb-2 lg:mb-4 text-center md:text-left">
          Since the core of each online casino is its slot games, ph365 is not
          an exception. Our choice of slot games is large and every one of them
          is supposed to offer a unique and fascinating experience. Our
          games&apos; outstanding graphics, captivating themes, and clever added
          features will enthrall players and encourage their return. Working
          with leading game developers like Microgaming, Playtech, and NetEnt
          ph365 ensures that our slots are of the greatest quality and contain
          anything from old stories to future adventures.
        </Paragraph>
        <Paragraph className="mb-4 lg:mb-8 text-center md:text-left">
          Given our paylines are relatively versatile, our slots give players
          several chances to win. Paylines from a few to several hundred provide
          players different chances to find winning combos. Many of our slot
          games also have special symbols including wilds, scatters, and
          multipliers as well as bonus rounds aimed to raise your gains. Whether
          your taste is for ancient fruit machines or sophisticated video slots
          with inventive mechanisms, ph365&apos;s range is geared to suit every
          player&apos;s desire.
        </Paragraph>
        <div className="p-2 md:p-4 bg-[radial-gradient(circle_at_center,_#171717_0%,_#1F1F1F_100%)] rounded-[7px] shadow-md">
          <CTACardGrid
            {...slotsCardData}
            containerClassName="px-8 md:px-12 py-2 md:py-4 flex flex-col justify-between gap-2 md:gap-4 md:flex-row overflow-x-hidden"
            mainImageContainerClassName="w-full self-center flex items-center justify-center rounded-md md:w-[300px] md:h-[300px] hover:scale-105 transition-transform"
            gridContainerClassName="grid grid-cols-4 gap-4"
            gridItemClassName="flex items-center justify-center rounded-md md:w-[200px] md:h-[200px] hover:scale-105 transition-transform"
            ctaContainerClassName="w-full flex items-center justify-center mt-2 md:mt-0"
          />
        </div>
      </div>

      <div className="p-8 md:p-12">
        <Heading3 className="mb-4 lg:mb-6 text-center md:text-left">
          Fishing Games: Thrill from The Catch
        </Heading3>
        <Paragraph className="mb-2 lg:mb-4 text-center md:text-left">
          Providing a nice diversion from traditional casino games, fishing
          games have been especially popular in the domain of online casinos.
          There are several fishing games available from ph365 that offer a
          fresh level of thrills and big payoff possibilities. These games
          combine strategy, skill, and luck as users use virtual fishing rods to
          catch several types of fish. Every fish captured could have different
          uses; rarer and larger species can pay more.
        </Paragraph>
        <Paragraph className="mb-4 lg:mb-8 text-center md:text-left">
          Even more thrill comes from the variety of special qualities fishing
          games offer. Many fishing games feature multiplies, extra rounds, and
          power-ups aimed to enhance gameplay and increase winning chances.
          Regardless of your degree of understanding, fishing games at ph365
          provide a fun and satisfying experience that is both peaceful and
          exciting at once.
        </Paragraph>
        <div className="p-2 md:p-4 bg-[radial-gradient(circle_at_center,_#171717_0%,_#1F1F1F_100%)] rounded-[7px] shadow-md">
          <CTACardGrid
            {...fishingCardData}
            containerClassName="px-8 md:px-12 py-2 md:py-4 flex flex-col justify-between gap-2 md:gap-4 md:flex-row overflow-x-hidden"
            mainImageContainerClassName="w-full self-center flex items-center justify-center rounded-md md:w-[300px] md:h-[300px] hover:scale-105 transition-transform"
            gridContainerClassName="grid grid-cols-4 gap-4"
            gridItemClassName="flex items-center justify-center rounded-md md:w-[200px] md:h-[200px] hover:scale-105 transition-transform"
            ctaContainerClassName="w-full flex items-center justify-center mt-2 md:mt-0"
          />
        </div>
      </div>

      <div className="p-8 md:p-12">
        <Heading3 className="mb-4 lg:mb-6 text-center md:text-left">
          Live Casino: Peak Real-World Knowledge
        </Heading3>
        <Paragraph className="mb-2 lg:mb-4 text-center md:text-left">
          Those seeking the most realistic and interesting gambling experience
          will find a perfect fit in our live casino section. With ph365&apos;s
          live casino, you might get real-time games aired from top-notch
          studios mixed with professional dealers walking you through every
          round. The live casino offers all the classic table games from
          blackjack, roulette, baccarat, and poker, allowing you quick
          interactions with the dealer and other players.
        </Paragraph>
        <Paragraph className="mb-4 lg:mb-8 text-center md:text-left">
          Though their laws are the same as those of their land-based
          counterparts, the real-time feature of live casino games provides a
          unique and interesting experience. The live casino part of ph365
          places the casino right in your living room, whether your taste is for
          the fast-paced action of live blackjack or the excitement of a
          roulette wheel spinning.
        </Paragraph>
        <div className="p-2 md:p-4 bg-[radial-gradient(circle_at_center,_#171717_0%,_#1F1F1F_100%)] rounded-[7px] shadow-md">
          <CTACardGrid
            {...casinoCardData}
            containerClassName="px-8 md:px-12 py-2 md:py-4 flex flex-col justify-between gap-2 md:gap-4 md:flex-row overflow-x-hidden"
            mainImageContainerClassName="w-full self-center flex items-center justify-center rounded-md md:w-[300px] md:h-[300px] hover:scale-105 transition-transform"
            gridContainerClassName="grid grid-cols-4 gap-4"
            gridItemClassName="flex items-center justify-center rounded-md md:w-[200px] md:h-[200px] hover:scale-105 transition-transform"
            ctaContainerClassName="w-full flex items-center justify-center mt-2 md:mt-0"
          />
        </div>
      </div>

      <div className="p-8 md:p-12">
        <Heading3 className="mb-4 lg:mb-6 text-center md:text-left">
          Card Games: Where strategy meets skill level
        </Heading3>
        <Paragraph className="mb-2 lg:mb-4 text-center md:text-left">
          Card games are the perfect fit for anyone who enjoy using knowledge
          and strategy to edge their opponent. ph365 offers a wide range of card
          games including poker and player-versus-player (PVP) games, which
          allow you test your abilities against others. These games provide a
          degree of excitement and complexity lacking from other games by
          demanding a mix of strategic thinking, psychology, and calculated
          risk-taking.
        </Paragraph>
        <Paragraph className="mb-4 lg:mb-8 text-center md:text-left">
          Whether you&apos;re playing a basic game of poker or fighting other
          players in a PVP match, ph365&apos;s card games are made to offer
          great excitement. Every game has unique rules and adjustments; hence,
          before starting any game, you should familiarize yourself with the
          specific elements.
        </Paragraph>
        <div className="p-2 md:p-4 bg-[radial-gradient(circle_at_center,_#171717_0%,_#1F1F1F_100%)] rounded-[7px] shadow-md">
          <CTACardGrid
            {...cardCardData}
            containerClassName="px-8 md:px-12 py-2 md:py-4 flex flex-col justify-between gap-2 md:gap-4 md:flex-row overflow-x-hidden"
            mainImageContainerClassName="w-full self-center flex items-center justify-center rounded-md md:w-[300px] md:h-[300px] hover:scale-105 transition-transform"
            gridContainerClassName="grid grid-cols-4 gap-4"
            gridItemClassName="flex items-center justify-center rounded-md md:w-[200px] md:h-[200px] hover:scale-105 transition-transform"
            ctaContainerClassName="w-full flex items-center justify-center mt-2 md:mt-0"
          />
        </div>
      </div>

      <div className="p-8 md:p-12">
        <Heading3 className="mb-4 lg:mb-6 text-center md:text-left">
          Sports Betting: Support Your Choice of Teams
        </Heading3>
        <Paragraph className="mb-2 lg:mb-4 text-center md:text-left">
          ph365 offers other than just casino games. Our extensive sports
          betting platform lets sports fans gamble on events all around. Whether
          your chosen sports are football, basketball, tennis, or another game,
          ph365 covers you. With so many betting options for major events,
          leagues, and contests, sports betting has never been more
          straightforward or more fascinating.
        </Paragraph>
        <Paragraph className="mb-4 lg:mb-8 text-center md:text-left">
          Making a sports bet is simple: choose your sport, then decide on an
          event and finally choose the outcome you believe would occur. Still,
          one must understand the odds and how they work if one wants to make
          intelligent bets. By providing comprehensive information to help you
          to make better decisions, ph365 enhances your complete betting
          experience.
        </Paragraph>
        <div className="p-2 md:p-4 bg-[radial-gradient(circle_at_center,_#171717_0%,_#1F1F1F_100%)] rounded-[7px] shadow-md">
          <CTACardGrid
            {...sportsCardSportsData}
            containerClassName="px-8 md:px-12 py-2 md:py-4 flex flex-col justify-between gap-2 md:gap-4 md:flex-row overflow-x-hidden"
            mainImageContainerClassName="w-full self-center flex items-center justify-center rounded-md md:w-[300px] md:h-[300px] hover:scale-105 transition-transform"
            gridContainerClassName="grid grid-cols-4 gap-4"
            gridItemClassName="flex items-center justify-center rounded-md md:w-[200px] md:h-[200px] hover:scale-105 transition-transform"
            ctaContainerClassName="w-full flex items-center justify-center mt-2 md:mt-0"
          />
        </div>
      </div>

      <div className="p-8 md:p-12">
        <Heading3 className="mb-4 lg:mb-6 text-center md:text-left">
          Lottery: Your Big Win Probability
        </Heading3>
        <Paragraph className="mb-2 lg:mb-4 text-center md:text-left">
          If you are looking for a life-changing win, our lottery games offer a
          wonderful opportunity to hit a big jackpot. From all around the world,
          ph365 offers lotteries with different reward schemes and policies.
          Lottery games have as their basic idea selecting the right combination
          of numbers and matching them with the numbers acquired during the
          lottery drawing.
        </Paragraph>
        <Paragraph className="mb-4 lg:mb-8 text-center md:text-left">
          Lottery games are a terrific and easy way to participate in a
          worldwide gaming experience since one has the chance to win big
          amounts of money. Every lottery result are displayed straight on our
          website; any winners are immediately deposited to your account,
          therefore ensuring a perfect and hassle-free transaction.
        </Paragraph>
        <div className="p-2 md:p-4 bg-[radial-gradient(circle_at_center,_#171717_0%,_#1F1F1F_100%)] rounded-[7px] shadow-md">
          <CTACardGrid
            {...lotteryCardData}
            containerClassName="px-8 md:px-12 py-2 md:py-4 flex flex-col justify-between gap-2 md:gap-4 md:flex-row overflow-x-hidden"
            mainImageContainerClassName="w-full self-center flex items-center justify-center rounded-md md:w-[300px] md:h-[300px] hover:scale-105 transition-transform"
            gridContainerClassName="grid grid-cols-4 gap-4"
            gridItemClassName="flex items-center justify-center rounded-md md:w-[200px] md:h-[200px] hover:scale-105 transition-transform"
            ctaContainerClassName="w-full flex items-center justify-center mt-2 md:mt-0"
          />
        </div>
      </div>

      <div className="px-8 md:px-12 pb-8 md:pb-12">
        <Paragraph className="text-center md:text-left">
          Great online gambling should, in our opinion at ph365, combine
          security, innovation, and customer pleasure. ph365, among the best
          online casinos in the Philippines, has always aimed to provide users a
          safe, entertaining, and profitable gaming environment. Over years, our
          team has worked nonstop to enhance every component of our platform so
          that every feature meets a different need for our users. From our
          industry-leading customer service to our large game library, ph365 is
          committed to provide a world-class experience. We investigate in this
          section the unique and outstanding features that set ph365 apart from
          the rivals, thereby ensuring our players of a perfect, safe, and
          exciting journey with us.
        </Paragraph>
      </div>
    </section>
  );
};
