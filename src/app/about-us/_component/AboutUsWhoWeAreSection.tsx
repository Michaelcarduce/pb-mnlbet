import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { Heading2 } from "@/components/typography/Heading2";
import { Heading5 } from "@/components/typography/Heading5";
import { Paragraph } from "@/components/typography/Paragraph";
import CardGrid from "@/components/ui/CardGrid";
import { slotCardGridItems } from "@/data/slotCardGridData";
import Button from "@/components/ui/Button";
import React from "react";

export const AboutUsWhoWeAreSection = () => {
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
      <Heading2 className={cn("mb-4 md:mb-6 text-center")}>Who We Are</Heading2>
      <Paragraph className={cn("mb-4 md:mb-6 text-center")}>
        Originally aiming to provide a broad and immersive online betting
        experience, Panalobet was launched with so many sports betting, casino
        games, live sabong, and e-sports betting on our platform, so appealing
        to all sorts of players. Our aim is to create an exciting and safe
        first-rate gaming environment where players may enjoy first-rate betting
        experience.
      </Paragraph>
      <Paragraph className={cn("mb-4 md:mb-6 text-center")}>
        Simple UI and modern technology enable us to provide perfect gameplay
        and an exciting experience for every client. Since our system fits
        desktop and mobile devices, players may enjoy their favoured games
        anywhere and at any time. Whether your preferences are in high stakes
        live casino activity, spinning the reels on thrilling slot games, or
        betting on live sports events, Panalobet offers a premium betting
        environment appropriate for your demands.
      </Paragraph>
      <Paragraph className={cn("mb-4 md:mb-6 text-center")}>
        Values we at Panalobet espouse include justice, transparency, and client
        delight. Tight security policies on our platform ensure that every
        gaming session and transaction is safe and under control. We continually
        develop our products to provide our players the newest games, best
        chances, and a rewarding experience. Whether your preference in gaming
        is sports, live casino, or slots, Panalobet is your one-stop shop for
        quality online gaming and betting anywhere. Come see us immediately to
        investigate a universe of infinite entertainment and financial
        opportunities!
      </Paragraph>
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
      <Heading2 className={cn("mb-4 md:mb-6 text-center")}>
        Our Purpose
      </Heading2>
      <Paragraph className={cn("mb-4 md:mb-6 text-center")}>
        At Panalobet, our aim is to give every one of our players a safe,
        exciting, and satisfying gaming environment. Combining security,
        diversity, and convenience will ensure every player a perfect and
        immersive experience on a creative betting platform we give. Embedded
        into our platform, modern technologies provide a flawless, speedy,
        user-friendly interface appropriate for both new and expert bettors.
      </Paragraph>
      <Paragraph className={cn("mb-4 md:mb-6 text-center")}>
        Our activities centre largely on client pleasure. Including the most
        latest gaming technologies, customising our platform for desktop and
        mobile customers, and adding amazing new tools that enhance the complete
        gaming experience helps us to consistently develop our products. Our
        dedication to transparency and fairness ensures that every bet placed on
        our website supports dependability and integrity. Working with top
        gaming firms, we apply cutting-edge algorithms to ensure every game and
        betting odds are fair and competitive.
      </Paragraph>
      <Paragraph className={cn("mb-4 md:mb-6 text-center")}>
        Security worries Panalobet first. We use modern encryption and data
        protection techniques to guard our players&apos; personal and financial
        information. Our fast transaction processing and safe payment methods,
        which let players simply and peace of mind deposit and withdraw money,
        help to further raise user confidence.
      </Paragraph>
      <Paragraph className={cn("mb-4 md:mb-6 text-center")}>
        We are committed to responsible gaming and we ensure that our players
        have tools and services to control their gambling activities. We provide
        self-exclusion options, deposit limitations, and access to support
        organisations for individuals who might need it. Our goal is to provide
        an interesting yet reasonable gaming experience anywhere safe and fun
        live together.
      </Paragraph>
      <Paragraph className={cn("mb-4 md:mb-6 text-center")}>
        Apart from games, we aim to build a community where members find value
        and interaction. Regular promotions, loyalty awards, and customer
        assistance available around-the-clock help us to make sure our players
        acquire the finest possible services. Whether your interests are live
        Sabong, casino games, sports betting, Panalobet is committed to make
        your gaming experience fun, safe, and profitable.
      </Paragraph>
      <Heading5
        className={cn(
          "mb-4 md:mb-6 text-center bg-gradient-to-b from-[#c6c6af] via-[#e5e5d5] via-[#d8b156] to-[#a3a285] bg-clip-text text-transparent"
        )}>
        {" "}
        Come experience the excitement of Panalobet today, where every wager is
        a step towards many possibilities and ingenuity meets enjoyment!
      </Heading5>
    </section>
  );
};
