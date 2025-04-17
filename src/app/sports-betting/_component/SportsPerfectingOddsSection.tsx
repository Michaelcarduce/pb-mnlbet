import { cn } from "@/lib/utils";
import { Heading2 } from "@/components/typography/Heading2";
import { Paragraph } from "@/components/typography/Paragraph";
import { HeadingSubHeading } from "@/components/ui/HeadingSubHeading";
import React from "react";

export const SportsPerfectingOddsSection = () => {
  return (
    <section
      className={cn(
        "p-8 md:p-12 bg-[radial-gradient(circle_at_center,_#171717_0%,_#1F1F1F_100%)] rounded-[7px] shadow-md"
      )}>
      <Heading2 className={cn("mb-4 md:mb-6 text-center")}>
        Perfecting the Odds Structure
      </Heading2>
      <Paragraph className={cn("mb-4 md:mb-6 text-center")}>
        Making wise bets depends on knowing odds. To fit the tastes of every
        user, Panalobet presents several odds patterns. Let us examine more
        closely the most often used formats
      </Paragraph>
      <HeadingSubHeading
        title="Binary Odds in Decimal Terms"
        description={[
          "Asia, Canada, and Europe all have decimal odds. For every unit wagered, they show your whole payoff—including your stake. The formula for figuring your possible return is:",
          <>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <strong>Potential Payoff:</strong> Stake times Odds
          </>,
          <>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;For instance, your
            payoff would be ₱100 at 2.50: odds.
          </>,
          <>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;100 x 2.50 comes to
            ₱250, or ₱150 profit.
          </>,
          <>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This system makes
            calculating your returns at a glance easy and understandable.
          </>,
        ]}
        className="bg-[radial-gradient(circle_at_center,_#1E1E1E_0%,_#171717_50%)]"
        titleClassName="text-left"
        descriptionClassName="mx-auto"
        paragraphClassName="text-left text-gray-300"
      />
      <div className="pb-4 md:pb-10"></div>
      <HeadingSubHeading
        title="Odds in Moneyline"
        description={[
          "Commonly employed in the United States, moneyline odds show the amount you should gamble to win a specific amount or the possible profit you may get from making a specific quantity of bets. Positive (+) or negative (-) numbers help to depict them.",
          "A +200 moneyline means that, should the bet be successful, you will win ₱200 for every ₱100 you wager. Usually used underdogs, this is",
          "A negative money line is one in which you must bet ₱150 to win ₱100 should the bet be successful. ",
        ]}
        className="bg-[radial-gradient(circle_at_center,_#1E1E1E_0%,_#171717_50%)]"
        titleClassName="text-left"
        descriptionClassName="mx-auto"
        paragraphClassName="text-left text-gray-300"
      />
    </section>
  );
};
