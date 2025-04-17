import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { HeadingSubHeading } from "@/components/ui/HeadingSubHeading";
import CardGrid from "@/components/ui/CardGrid";
import { slotCardGridItems } from "@/data/slotCardGridData";
import Button from "@/components/ui/Button";
import React from "react";

export const SlotSymbolSection = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className={cn(
        "p-8 md:p-12 bg-[radial-gradient(circle_at_center,_#171717_0%,_#1F1F1F_100%)] rounded-[7px] shadow-md"
      )}>
      <HeadingSubHeading
        title="Panalobet Slots: Scatter Symbol Mechanics"
        description={[
          "Your chances of winning in Panalobet Slots depend much on scatter symbols. Free spins, bonus rounds, or even award straight rewards can be unlocked by these icons. Two best games with clearly visible scatter symbols that provide players better opportunities to score large prizes are Super Ace Scatter and Lucky Jili Slots.",
          "For instance, in Super Ace Scatter, a reward is triggered without regard to a particular payline by the scatter symbols. Rather, they are meant to set off unique features as soon as they show up at any spot across the reels. Usually landing three or more scatter symbols on the screen will activate a round of free spins, thereby providing players with a major chance to accumulate awards without having to pay more money.",
          "Though they typically come with multipliers, meaning your earnings can be multiplied by multiple times when the correct combination of scatters appears, scatter symbols also activate a range of bonus features in Lucky Jili Slots. For those trying to optimize their earnings, the game is a must-play since these multiplier boosts provide an additional element of excitement and unpredictable nature.",
          "These scatter games and others are full of strategy and expectation, not only games of chance. Knowing the particular mechanisms behind scatter symbols in every game will provide you an advantage and enable you to choose which games best fit your aims and play style.",
        ]}
        className="bg-[radial-gradient(circle_at_center,_#1E1E1E_0%,_#171717_50%)]"
        titleClassName="text-left"
        descriptionClassName="mx-auto"
        paragraphClassName="text-left text-gray-300"
      />
      <div className="pb-4 md:pb-10"></div>
      <CardGrid
        items={slotCardGridItems}
        isLoading={loading}
        className="gap-4"
        cardClassName="hover:shadow-lg"
        limit={4} //remove this line if desired to show all the list
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
      <div className="pb-4 md:pb-10"></div>
      <HeadingSubHeading
        title="Wild symbols function in slots"
        description={[
          "Although scatter symbols are quite thrilling and greatly raise your chances of obtaining big wins, they are not the secret to success at Panalobet Slots. Another vital element that can increase your chances of winning are wild symbols.",
          "Wild symbols replace other symbols in online slots, therefore completing winning combos across the reels. Wilds are regarded as one of the most useful symbols in slot games as this capacity to replace any symbol—except from scatter symbols boosts your chances of striking a winning combination.",
          "For Lucky Jili Slots, for instance, the wild symbol replaces other symbols to create winning combos like a joker card. This basic but effective tool will enable you to finish several paylines, therefore raising the possible value of your payment.",
          "Certain games also allow the wild symbol to have unique qualities like being able to multiply winnings or cover whole reels for a given spin. Big wins made possible by these unique wilds can transform an ordinary spin into a profitable one. Maximizing your winning potential as a player depends on knowing how wild symbols function within the framework of the slot game you're playing.",
          "Often working together to increase the general thrill of slot games are wilds and scatters. While wilds assist you complete combinations, therefore enhancing the prizes when they line with other symbols, scatters activate bonuses and free spins. These two elements taken together provide Panalobet Slots a lively and satisfying experience.",
        ]}
        className="bg-[radial-gradient(circle_at_center,_#1E1E1E_0%,_#171717_50%)]"
        titleClassName="text-left"
        descriptionClassName="mx-auto"
        paragraphClassName="text-left text-gray-300"
      />
    </section>
  );
};
