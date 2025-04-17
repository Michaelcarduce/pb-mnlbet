import { cn } from "@/lib/utils";
import { Heading2 } from "@/components/typography/Heading2";
import { Paragraph } from "@/components/typography/Paragraph";
import { HeadingSubHeading } from "@/components/ui/HeadingSubHeading";
import React from "react";

export const SportsBetsKindSection = () => {
  return (
    <section
      className={cn(
        "p-8 md:p-12 bg-[radial-gradient(circle_at_center,_#171717_0%,_#1F1F1F_100%)] rounded-[7px] shadow-md"
      )}>
      <Heading2 className={cn("mb-4 md:mb-6 text-center")}>
        Know Various Kinds of Bets Available on Panalobet
      </Heading2>
      <Paragraph className={cn("mb-4 md:mb-6 text-center")}>
        Knowing the several kinds of bets you can make is one of the main
        components of good sports betting. Panalobet presents a range of betting
        choices to fit every type of bettors.
      </Paragraph>
      <HeadingSubHeading
        title="Moneyline Wagers"
        description={[
          "The easiest and most often used type of sports betting is moneyline betting. Moneyline bets enable you to just stake on the team or player you think will win. Beginners generally choose this kind of bet since it is clear-cut.",
          "For a basketball game between Team A and Team B, for instance, you stake on the outcome you believe will be decided upon. Whether the team is favored or seen as an underdog determines whether the odds show as either positive or negative.",
        ]}
        className="bg-[radial-gradient(circle_at_center,_#1E1E1E_0%,_#171717_50%)]"
        titleClassName="text-left"
        descriptionClassName="mx-auto"
        paragraphClassName="text-left text-gray-300"
      />
      <div className="pb-4 md:pb-10"></div>
      <HeadingSubHeading
        title="Point Spread Dances"
        description={[
          "Another somewhat common choice, particularly in sports like basketball and football, is point spread betting. The sportsbook determines a margin—or spread—one team is expected to win in a point spread bet. The other team is seen as the underdog; so, the spread guarantees that both sides have a rather equal opportunity of winning.",
          "If Team A is expected to prevail by five points, for instance, the point spread might show this:",
          <>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Team A scored five;
            Team B scored five.
          </>,
          "Should you stake on Team A, their victory must exceed five points if your wager is to be profitable. If you bet on Team B, on the other hand, your bet must either win the game or lose by less than five points.",
        ]}
        className="bg-[radial-gradient(circle_at_center,_#1E1E1E_0%,_#171717_50%)]"
        titleClassName="text-left"
        descriptionClassName="mx-auto"
        paragraphClassName="text-left text-gray-300"
      />
      <div className="pb-4 md:pb-10"></div>
      <HeadingSubHeading
        title="Over/Under (total) Wagers"
        description={[
          "Popular wagering on the overall count of points, goals, or runs scored in a game is over/under betting. The sportsbook will set a line; you can wager whether the game's overall point count will be lower (under) or higher (over) than that line.",
        ]}
        className="bg-[radial-gradient(circle_at_center,_#1E1E1E_0%,_#171717_50%)]"
        titleClassName="text-left"
        descriptionClassName="mx-auto"
        paragraphClassName="text-left text-gray-300"
      />
      <div className="pb-4 md:pb-10"></div>
      <HeadingSubHeading
        title="Proposition (Prop) Bets"
        description={[
          "Unlike the total result of a game, proposition bets—also called \u0022prop bets—are wagers on certain events or occurrences inside a game. You might gamble on individual player performances, for instance, on the number of points a player would score, whether or not a player will strike a designated number of home runs, or who would be the first player to score in a game.",
          "By letting you gamble on little elements instead of the total result, prop bets can inject thrill and diversity into your betting experience.",
        ]}
        className="bg-[radial-gradient(circle_at_center,_#1E1E1E_0%,_#171717_50%)]"
        titleClassName="text-left"
        descriptionClassName="mx-auto"
        paragraphClassName="text-left text-gray-300"
      />
      <div className="pb-4 md:pb-10"></div>
      <HeadingSubHeading
        title="Live Betting"
        description={[
          "Live betting, sometimes referred to as in-play betting, lets you stake money on a game as it is under progress. Since odds alter in real-time depending on the current condition of the game, this type of betting adds a little of thrill and energy. The flawless and responsive interface of Panalobet's live betting system lets you react fast to momentum changes.",
          "Live betting calls for fast decisions and keen senses since the odds alter quickly based on the flow of the game.",
        ]}
        className="bg-[radial-gradient(circle_at_center,_#1E1E1E_0%,_#171717_50%)]"
        titleClassName="text-left"
        descriptionClassName="mx-auto"
        paragraphClassName="text-left text-gray-300"
      />
    </section>
  );
};
