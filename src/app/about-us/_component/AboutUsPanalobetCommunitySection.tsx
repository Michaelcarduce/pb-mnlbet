import { cn } from "@/lib/utils";
import { CallToAction } from "@/components/ui/CallToAction";
import { Paragraph } from "@/components/typography/Paragraph";
import { Heading5 } from "@/components/typography/Heading5";
import React from "react";

export const AboutUsPanalobetCommunitySection = () => {
  return (
    <section
      className={cn(
        "p-8 md:p-12 bg-[radial-gradient(circle_at_center,_#171717_0%,_#1F1F1F_100%)] rounded-[7px] shadow-md"
      )}>
      <CallToAction
        title="Join the Panalobet Community"
        description={[
          "Are you ready to start an exciting journey consisting of challenging events, great games, and intense betting? Panalobet invites you to become one of our growing gaming aficionados. Our platform offers something for everyone, regardless of your casual play seeking entertainment value or degree of experience betting value.",
        ]}
        className="bg-[radial-gradient(circle_at_center,_#1E1E1E_0%,_#171717_50%)] p-8 md:p-12 "
        titleClassName="text-center md:text-left"
        dividerClassName="flex-col-reverse md:flex-row"
        descriptionClassName=""
        paragraphClassName="text-center md:text-left text-gray-300"
        img="/img/aboutus/join.webp"
        btnLink="/"
        btnText="PLAY NOW"
        buttonClassName="flex justify-center md:justify-start py-4 md:py-6"
      />
      <div className="px-8 md:px-12 pt-8 md:pt-12">
        <Paragraph className="text-center md:text-left">
          Starting from Panalobet is quick and easy. Making your account exposes
          a universe of options including live Sabong, sports betting, casino
          games, e-sports wagering. Our platform is designed to offer the best
          chances, top-national security, and perfect gaming, thus every time
          spent with us should be thrilling and full of probable winnings.
        </Paragraph>
        <div className="pb-4 md:pb-6"></div>
        <Paragraph className="text-center md:text-left">
          Joining the Panalobet will get you access to big bonuses and exclusive
          discounts enhancing your gaming experience. From welcome rewards for
          new players to loyalty benefits for our dedicated users, we constantly
          value and reward our gamers. Our regular promos, incentive programs,
          and special events provide you with more possibilities to optimise
          your bets and win.
        </Paragraph>
        <div className="pb-4 md:pb-6"></div>
        <Paragraph className="text-center md:text-left">
          First of importance are fair behaviour and security. Modern encryption
          technology helps us to safeguard your money and personal information,
          therefore establishing a safe and secure betting environment. Our fair
          play policies and open gaming strategies also ensure that every player
          has an equal chance to win, therefore creating a respectable and
          reliable venue.
        </Paragraph>
        <div className="pb-4 md:pb-6"></div>
        <Paragraph className="text-center md:text-left">
          Panalobet is a community rather than merely a gaming portal. Speak
          with other players, register for exciting events, and experience the
          surge of competitive betting never before imaginable. Whether your
          interests are in wagering on your beloved sports team, trying your
          luck at the casino, or appreciating the adrenaline thrill of live
          Sabong, Panalobet offers an immersive and dynamic gaming environment
          catered to your tastes.
        </Paragraph>
        <div className="pb-4 md:pb-6"></div>
        <Paragraph className="text-center md:text-left">
          You shouldn&apos;t miss the action! Come meet the Panalobet community
          right now to enhance your internet gaming experience. With its
          contemporary technologies, simple design, and wide spectrum of betting
          options, Panalobet is your finest spot for online entertainment.
          Register right now to begin an incredible journey of betting!
        </Paragraph>
        <div className="pb-4 md:pb-6"></div>
        <Heading5
          className={cn(
            "mb-4 md:mb-6 text-center bg-gradient-to-b from-[#c6c6af] via-[#e5e5d5] via-[#d8b156] to-[#a3a285] bg-clip-text text-transparent"
          )}>
          We appreciate you selecting Panalobet, your best online betting
          source!
        </Heading5>
      </div>
    </section>
  );
};
