import { cn } from "@/lib/utils";
import { CallToAction } from "@/components/ui/CallToAction";
import { Paragraph } from "@/components/typography/Paragraph";
import { Heading5 } from "@/components/typography/Heading5";
import React from "react";

export const AffiliateRegisterSection = () => {
  return (
    <section className={cn("p-8 md:p-12")}>
      <CallToAction
        title="Register an Account and Play Right Now at ph365!"
        description={[
          "Ready to start the fun? Register now at ph365 to access an amazing universe of casino games, kind bonuses, and fantastic promotions! We provide something for everyone regardless of your experience level with internet casinos.",
        ]}
        className="bg-[radial-gradient(circle_at_center,_#1E1E1E_0%,_#171717_50%)] p-8 md:p-12 "
        titleClassName="text-center md:text-left"
        dividerClassName="flex-col-reverse md:flex-row"
        descriptionClassName=""
        paragraphClassName="text-center md:text-left text-gray-300"
        img="/img/affiliate/register.webp"
        btnLink="/"
        btnText="PLAY NOW"
        buttonClassName="flex justify-center md:justify-start py-4 md:py-6"
      />
      <div className="px-8 md:px-12 pt-8 md:pt-12">
        <Paragraph className="text-center md:text-left">
          Joining ph365 will allow you access to:
        </Paragraph>
        <div className="pb-4 md:pb-6 px-4 md:px-8 pt-2">
          <Paragraph className="text-center md:text-left">
            • From tables to slots, poker, and live dealer choices, a great
            range of casino games is available.
          </Paragraph>
          <Paragraph className="text-center md:text-left">
            • Start your adventure with a large welcome bonus and keep receiving
            prizes all through your gaming experience. Exclusive incentives and
            promotions.
          </Paragraph>
          <Paragraph className="text-center md:text-left">
            • Customer service available 24/7. Our staff is always ready to help
            with any questions or problems you could run across.
          </Paragraph>
          <Paragraph className="text-center md:text-left">
            • A safe and dependable platform. Our first concern is your safety,
            hence we always guarantee protection of your data and transactions.
          </Paragraph>
        </div>
        <Heading5
          className={cn(
            "mb-4 md:mb-6 text-center bg-gradient-to-b from-[#c6c6af] via-[#e5e5d5] via-[#d8b156] to-[#a3a285] bg-clip-text text-transparent"
          )}>
          Don&apos;t wait any more; register now, pick your welcome bonus, and
          begin your thrilling gaming adventure at ph365 right now
        </Heading5>
      </div>
    </section>
  );
};
