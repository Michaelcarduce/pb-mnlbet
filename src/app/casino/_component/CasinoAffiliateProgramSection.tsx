import { cn } from "@/lib/utils";
import { Paragraph } from "@/components/typography/Paragraph";
import { CallToAction } from "@/components/ui/CallToAction";
import CTACardGrid from "@/components/ui/CTACardGrid";
import { casinoCardData } from "@/data/casinoCardData";
import React from "react";

export const CasinoAffiliateProgramSection = () => {
  return (
    <section className={cn("")}>
      <CallToAction
        title="Affiliate Programs: Earn While You Play"
        description={[
          "Panalobet Casino's affiliate program, which lets players earn a commission by advertising the site and recommending new players, presents another interesting prospect. Players can post their personal referral links on social media, websites, blogs, and other outlets using affiliate marketing to draw in fresh casino business.",
        ]}
        className="bg-[radial-gradient(circle_at_center,_#1E1E1E_0%,_#171717_50%)] p-8 md:p-12 "
        titleClassName="text-center md:text-left"
        dividerClassName="flex-col-reverse md:flex-row"
        descriptionClassName=""
        paragraphClassName="text-center md:text-left text-gray-300"
        img="/img/casino/affiliate.webp"
        btnLink="/"
        btnText="PLAY NOW"
        buttonClassName="flex justify-center md:justify-start py-4 md:py-6"
      />
      <div className="px-8 md:px-12">
        <Paragraph className="text-center md:text-left">
          The affiliate gets a share of the money made from the bets made by
          referred players when a signed-up player makes a deposit into their
          account. This produces a mutually advantageous relationship whereby
          new sign-ups and engaged users help Panalobet Casino as well as the
          affiliate.
        </Paragraph>
        <div className="pb-2 md:pb-4"></div>
        <Paragraph className="text-center md:text-left">
          The affiliate program provides a special approach for content
          creators, influencers, and players to make passive revenue while
          playing the games at Panalobet Casino. For those with a strong
          internet profile or a passion for casino gambling especially, the
          possibility to make money via referrals generates a consistent income
          stream.
        </Paragraph>
      </div>
      <CTACardGrid
        {...casinoCardData}
        containerClassName="px-8 md:px-12 py-2 md:py-4 flex flex-col justify-between gap-2 md:gap-4 md:flex-row overflow-x-hidden"
        mainImageContainerClassName="w-full self-center flex items-center justify-center rounded-md md:w-[300px] md:h-[300px] hover:scale-105 transition-transform"
        gridContainerClassName="grid grid-cols-4 gap-4"
        gridItemClassName="flex items-center justify-center rounded-md md:w-[200px] md:h-[200px] hover:scale-105 transition-transform"
        ctaContainerClassName="w-full flex items-center justify-center mt-2 md:mt-0"
      />
    </section>
  );
};
