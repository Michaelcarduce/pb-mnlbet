import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import PromotionCardGrid from "@/components/ui/PromotionCardGrid";
import { casinoCardGridPromotionItems } from "@/data/casinoCardGridPromotionData";
import Button from "@/components/ui/Button";
import React from "react";
import { Heading2 } from "@/components/typography/Heading2";
import { Paragraph } from "@/components/typography/Paragraph";
import { Heading3 } from "@/components/typography/Heading3";

export const AffiliatePromotionSection = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className={cn(
        "p-8 md:p-12 bg-[radial-gradient(circle_at_center,_#171717_0%,_#1F1F1F_100%)] rounded-[7px] shadow-md"
      )}>
      <Heading2 className={cn("mb-4 md:mb-6 text-center")}>
        ph365 Promotions: Enhanced Gaming Pleasure
      </Heading2>
      <Paragraph className={cn("mb-4 md:mb-6 text-center")}>
        At ph365, we value our players and commit ourselves to provide them the
        best gaming experience accessible. We thus provide a wide range of
        incentives, bonuses, and discounts to enable you to spend more time on
        the site. Whether you are seasoned or rookie, you will find unique
        incentives aimed to increase your chances of winning.
      </Paragraph>

      <div className="p-8 md:p-12 bg-[radial-gradient(circle_at_center,_#1E1E1E_0%,_#232323_100%)] rounded-[20px] shadow-lg mb-6 md:mb-12">
        <Heading3 className="mb-4 lg:mb-6 text-center md:text-left">
          Strong Bonus
        </Heading3>
        <Paragraph className="mb-2 lg:mb-4 text-center md:text-left">
          We would wish to gladly welcome you with a large bonus when you first
          join ph365. Our welcome bonus is aimed to give you a boost straight
          from the start so you may explore our platform and try your hand at
          many games with extra money.
        </Paragraph>
        <PromotionCardGrid
          items={casinoCardGridPromotionItems}
          isLoading={loading}
          className="gap-2 md:gap-4"
          cardClassName="hover:shadow-lg bg-[radial-gradient(circle_at_center,_#1E1E1E_0%,_#171717_50%)]"
          titleClassName="text-white"
          limit={2} //remove this line if desired to show all the list
        />
        <div className="flex justify-center py-4 md:py-6">
          <Button
            label="Explore All"
            href="/casino"
            gradientStart="#1f2460"
            gradientEnd="#005fbe"
            shadowInset={true}
            width="150px"
            newTab={true}
          />
        </div>
      </div>

      <div className="p-8 md:p-12 bg-[radial-gradient(circle_at_center,_#1E1E1E_0%,_#232323_100%)] rounded-[20px] shadow-lg mb-6 md:mb-12">
        <Heading3 className="mb-4 lg:mb-6 text-center md:text-left">
          Cashback Expectations
        </Heading3>
        <Paragraph className="mb-2 lg:mb-4 text-center md:text-left">
          We believe you deserve a second shot even though losing can be
          frustrating. Our cashback allows you to recover some losses, thereby
          enabling you to play longer and with more confidence.
        </Paragraph>
        <PromotionCardGrid
          items={casinoCardGridPromotionItems}
          isLoading={loading}
          className="gap-2 md:gap-4"
          cardClassName="hover:shadow-lg bg-[radial-gradient(circle_at_center,_#1E1E1E_0%,_#171717_50%)]"
          titleClassName="text-white"
          limit={2} //remove this line if desired to show all the list
        />
        <div className="flex justify-center py-4 md:py-6">
          <Button
            label="Explore All"
            href="/casino"
            gradientStart="#1f2460"
            gradientEnd="#005fbe"
            shadowInset={true}
            width="150px"
            newTab={true}
          />
        </div>
      </div>

      <div className="p-8 md:p-12 bg-[radial-gradient(circle_at_center,_#1E1E1E_0%,_#232323_100%)] rounded-[20px] shadow-lg mb-6 md:mb-12">
        <Heading3 className="mb-4 lg:mb-6 text-center md:text-left">
          Daily Check-ins
        </Heading3>
        <Paragraph className="mb-2 lg:mb-4 text-center md:text-left">
          We honor our committed players and will award daily check-in bonuses
          to them. To claim bonuses, free spins, and other fantastic rewards
          every day log-in using your ph365 account.
        </Paragraph>
        <PromotionCardGrid
          items={casinoCardGridPromotionItems}
          isLoading={loading}
          className="gap-2 md:gap-4"
          cardClassName="hover:shadow-lg bg-[radial-gradient(circle_at_center,_#1E1E1E_0%,_#171717_50%)]"
          titleClassName="text-white"
          limit={2} //remove this line if desired to show all the list
        />
        <div className="flex justify-center py-4 md:py-6">
          <Button
            label="Explore All"
            href="/casino"
            gradientStart="#1f2460"
            gradientEnd="#005fbe"
            shadowInset={true}
            width="150px"
            newTab={true}
          />
        </div>
      </div>

      <div className="p-8 md:p-12 bg-[radial-gradient(circle_at_center,_#1E1E1E_0%,_#232323_100%)] rounded-[20px] shadow-lg mb-6 md:mb-12">
        <Heading3 className="mb-4 lg:mb-6 text-center md:text-left">
          Turn the Wheel for Points
        </Heading3>
        <Paragraph className="mb-2 lg:mb-4 text-center md:text-left">
          Apart from daily bonuses, ph365 allows the chance to spin the wheel
          for extra points, which can be redeemed for a variety of amazing
          rewards like free spins, bonuses, and even cash awards.
        </Paragraph>
        <PromotionCardGrid
          items={casinoCardGridPromotionItems}
          isLoading={loading}
          className="gap-2 md:gap-4"
          cardClassName="hover:shadow-lg bg-[radial-gradient(circle_at_center,_#1E1E1E_0%,_#171717_50%)]"
          titleClassName="text-white"
          limit={2} //remove this line if desired to show all the list
        />
        <div className="flex justify-center py-4 md:py-6">
          <Button
            label="Explore All"
            href="/casino"
            gradientStart="#1f2460"
            gradientEnd="#005fbe"
            shadowInset={true}
            width="150px"
            newTab={true}
          />
        </div>
      </div>

      <div className="p-8 md:p-12 bg-[radial-gradient(circle_at_center,_#1E1E1E_0%,_#232323_100%)] rounded-[20px] shadow-lg ">
        <Heading3 className="mb-4 lg:mb-6 text-center md:text-left">
          Celebrations and Special Event Promos
        </Heading3>
        <Paragraph className="mb-2 lg:mb-4 text-center md:text-left">
          All year long we provide special discounts for holidays, festivals,
          birthdays, and other amazing events. Gamers have an opportunity to
          choose exclusive benefits and rewards with these limited-time deals.
        </Paragraph>
        <PromotionCardGrid
          items={casinoCardGridPromotionItems}
          isLoading={loading}
          className="gap-2 md:gap-4"
          cardClassName="hover:shadow-lg bg-[radial-gradient(circle_at_center,_#1E1E1E_0%,_#171717_50%)]"
          titleClassName="text-white"
          limit={2} //remove this line if desired to show all the list
        />
        <div className="flex justify-center py-4 md:py-6">
          <Button
            label="Explore All"
            href="/casino"
            gradientStart="#1f2460"
            gradientEnd="#005fbe"
            shadowInset={true}
            width="150px"
            newTab={true}
          />
        </div>
      </div>
    </section>
  );
};
