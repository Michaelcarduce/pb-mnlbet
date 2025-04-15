import { cn } from "@/lib/utils";
import { Heading2 } from "@/components/typography/Heading2";
// import { Paragraph } from "@/components/typography/Paragraph";
// import { WelcomeBonusPromotion } from "@/components/promotions/WelcomeBonusPromotion";
import React from "react";

export const MeronAgainstWala = () => {
  return (
    <section
      className={cn(
        "p-8 md:p-12 bg-[radial-gradient(circle_at_center,_#171717_0%,_#1F1F1F_100%)] rounded-[7px] shadow-md"
      )}>
      <Heading2 className={cn("mb-4 md:mb-6 text-center")}>
        Panalobet Sabong Live: Meron Against Wala - Betting Options
      </Heading2>
      {/* <WelcomeBonusPromotion
        title="Welcome Bonuses: Your Secret to a Great Start"
        description={[
          "Once you register with Panalobet, you will be entitled to a large welcome bonus meant to enhance your gaming experience and guarantee that your first impressions of our online casino are as thrilling as they could be. As we provide an amazing free sign-up bonus just for enrolling, new players are in for a treat! This incentive allows you more money to utilize across several games, thereby enabling you to start playing your preferred slots, table games, or even live dealer games free from concern about rapidly running out of balance.",
          "That's only the start, though! Being a new player, your first few deposits should show hefty deposit match incentives. We want to make sure you have enough tools to investigate our vast array of casino games as we know that the first phases of your gaming path are vital. These deposit matches basically double or even treble your deposits, therefore increasing the amount of money in your account to support your journey. More chances to win and a better chance of striking that life-changing jackpot follow from this.",
        ]}
        className="bg-[radial-gradient(circle_at_center,_#1E1E1E_0%,_#232323_100%)] border-y-[1.5px] border-amber-800 rounded-[20px] shadow-lg mb-6 md:mb-12"
        titleClassName="text-center "
        descriptionClassName=""
        paragraphClassName="text-center lg:text-left text-gray-300 "
      /> */}
    </section>
  );
};
