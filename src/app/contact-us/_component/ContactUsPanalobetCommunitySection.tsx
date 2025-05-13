import { cn } from "@/lib/utils";
import { CallToAction } from "@/components/ui/CallToAction";
import { Paragraph } from "@/components/typography/Paragraph";
import { Heading5 } from "@/components/typography/Heading5";
import React from "react";

export const ContactUsPanalobetCommunitySection = () => {
  return (
    <section className={cn("p-8 md:p-12")}>
      <CallToAction
        title="Come visit the Panalobet Community!"
        description={[
          "Are you ready to have first-rate gaming experience? Join Panalobet right now to become part of an intriguing and active betting community. Whether your purpose for visiting live sabong, sports betting, casino games, eSports wagering, we promise an incredible betting experience with the finest odds, top-national security, and exclusive benefits.",
        ]}
        className="bg-[radial-gradient(circle_at_center,_#1E1E1E_0%,_#171717_50%)] p-8 md:p-12 "
        titleClassName="text-center md:text-left"
        dividerClassName="flex-col-reverse md:flex-row"
        descriptionClassName=""
        paragraphClassName="text-center md:text-left text-gray-300"
        img="/img/contact/visit.webp"
        btnLink="/"
        btnText="PLAY NOW"
        buttonClassName="flex justify-center md:justify-start py-4 md:py-6"
      />
      <div className="px-8 md:px-12 pt-8 md:pt-12">
        <Paragraph className="text-center md:text-left">
          Ask for assistance here: Please never hesitate to get in touch with
          our customer care team anytime needed. Perfecting your Panalobet
          experience thrills us both financially and recreally.
        </Paragraph>
        <div className="pb-4 md:pb-6"></div>
        <Heading5
          className={cn(
            "mb-4 md:mb-6 text-center bg-gradient-to-b from-[#c6c6af] via-[#e5e5d5] via-[#d8b156] to-[#a3a285] bg-clip-text text-transparent"
          )}>
          We appreciate you selecting Panalobet, Your reliable online gaming
          partner!
        </Heading5>
      </div>
    </section>
  );
};
