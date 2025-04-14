import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Heading2 } from "@/components/typography/Heading2";
import { Paragraph } from "@/components/typography/Paragraph";
import CardGrid from "@/components/ui/CardGrid";
import { casinoCardGridItems } from "@/data/casinoCardGridData";
import Button from "@/components/ui/Button";
import React from "react";

export const EnhancedLiveCasinoSection = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={cn("p-8 md:p-12 ")}>
      <Heading2 className={cn("mb-4 md:mb-6 text-center")}>
        Discover Our Enhanced Live Casino Experience
      </Heading2>
      <Paragraph className={cn("mb-4 md:mb-6 text-center")}>
        Our Live Casino component of Panalobet is among its most interesting
        aspects. We have brought this experience to your computer since we know
        some players appreciate the authenticity of participating in a real
        casino setting.
      </Paragraph>
      <CardGrid
        items={casinoCardGridItems}
        isLoading={loading}
        className="gap-4"
        cardClassName="hover:shadow-lg"
        limit={8} //remove this line if desired to show all the list
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
      <Paragraph className={cn("mb-4 md:mb-6 text-center")}>
        Along with some interesting variants to liven things up, our Live Casino
        features a large range of games including the classics Baccarat,
        Blackjack, Roulette, and Poker. Modern studios and land-based casinos
        broadcast Live Dealer Games in real-time, thereby ensuring that you feel
        as though you are right in the middle of the action. Experience is
        immersive, interesting, and fun when seasoned dealers walk you through
        every game.
      </Paragraph>
      <Paragraph className={cn("mb-4 md:mb-6 text-center")}>
        Those who enjoy diversity can also find Lottery games and other unusual
        experiences right at your hands in our live casino. Panalobet is your
        access to real-time casino fun whether your goals are to test your luck
        with a Roulette wheel or become a Blackjack pro.
      </Paragraph>
    </section>
  );
};
