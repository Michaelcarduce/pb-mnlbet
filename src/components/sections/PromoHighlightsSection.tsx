import { cn } from "@/lib/utils";
import { Heading2 } from "@/components/typography/Heading2";
import { Paragraph } from "@/components/typography/Paragraph";
import { WelcomeBonusPromotion } from "@/components/promotions/WelcomeBonusPromotion";
import { ReloadBonusPromotion } from "@/components/promotions/ReloadBonusPromotion";
import { CashbackPromotion } from "@/components/promotions/CashbackPromotion";
import { MonthlyPromosPromotion } from "@/components/promotions/MonthlyPromosPromotion";
import { EventsPromotion } from "@/components/promotions/EventsPromotion";
import React from "react";

export const PromoHighlightsSection = () => {
  return (
    <section
      className={cn(
        "p-8 md:p-12 bg-[radial-gradient(circle_at_center,_#171717_0%,_#1F1F1F_100%)] rounded-[7px] shadow-md"
      )}>
      <Heading2 className={cn("mb-4 md:mb-6 text-center")}>
        Claim Your Top Promotions and Kindly Welcome Bonuses Right Now!
      </Heading2>
      <Paragraph className={cn("mb-4 md:mb-6 text-center")}>
        At Panalobet, we think that the availability of promotions and
        incentives for players is one of the main factors contributing to the
        excitement of online gaming. Who doesn't love a terrific deal or the
        possibility to optimize their bankroll right from the beginning? This is
        why we have carefully created a selection of interesting offers to
        guarantee that every player, regardless of experience level or freshness
        on the scene, feels appreciated, driven, and supported to enter the
        realm of casino activity.
      </Paragraph>
      <WelcomeBonusPromotion
        title="Welcome Bonuses: Your Secret to a Great Start"
        description={[
          "Once you register with Panalobet, you will be entitled to a large welcome bonus meant to enhance your gaming experience and guarantee that your first impressions of our online casino are as thrilling as they could be. As we provide an amazing free sign-up bonus just for enrolling, new players are in for a treat! This incentive allows you more money to utilize across several games, thereby enabling you to start playing your preferred slots, table games, or even live dealer games free from concern about rapidly running out of balance.",
          "That's only the start, though! Being a new player, your first few deposits should show hefty deposit match incentives. We want to make sure you have enough tools to investigate our vast array of casino games as we know that the first phases of your gaming path are vital. These deposit matches basically double or even treble your deposits, therefore increasing the amount of money in your account to support your journey. More chances to win and a better chance of striking that life-changing jackpot follow from this.",
        ]}
        className="bg-[radial-gradient(circle_at_center,_#1E1E1E_0%,_#232323_100%)] border-y-[1.5px] border-amber-800 rounded-[20px] shadow-lg mb-6 md:mb-12"
        titleClassName="text-center "
        descriptionClassName=""
        paragraphClassName="text-center lg:text-left text-gray-300 "
      />
      <ReloadBonusPromotion
        title="Reload Bonuses and Rebates to Honor Your Loyalty"
        description={[
          "At Panalobet, we appreciate our devoted members and work to make every visit valuable. We have thus created rebates and reload bonuses to keep you interested and driven all through your gaming experience. One great approach to keep improving your balance once your first welcome bonuses have been consumed is reload bonuses. These reload bonuses provide you an extra push to keep playing your preferred games and experimenting with new ones, whether your second or tenth deposit.",
          "Another way we thank gamers for their ongoing involvement is via our refunds. These rebates let you recoup a portion of your losses from past gaming sessions, therefore giving you a second shot to win large even if the first time things did not go as expected. At Panalobet, we want you to feel supported no matter what; our reload bonuses and rebates are ideal tools to guarantee that your gaming experience is good, exciting, and profitable.",
        ]}
        className="bg-[radial-gradient(circle_at_center,_#1E1E1E_0%,_#232323_100%)] border-y-[1.5px] border-[#303897] rounded-[20px] shadow-lg mb-6 md:mb-12"
        titleClassName="text-center "
        descriptionClassName=""
        paragraphClassName="text-center lg:text-left text-gray-300 "
      />
      <CashbackPromotion
        title="Special Cashback Promotions: A Win-Win Opportunity"
        description={[
          "Every player enjoys a little additional cashback, hence we are happy to give you special cashback deals that would provide even more value for your time spent with us. These cashback offers let you try your luck at several games or stretch your gaming sessions by recovering a percentage of your losses. The fact that all players, new or experienced, can participate in Panalobet's cashback campaigns makes them fantastic. You can use these fantastic deals as long as you're playing.",
          "Additionally connected to our rewards campaigns are weekly challenges. These challenges inspire players to engage in particular games or activities in order to qualify for extra prizes and cashback. Apart from having access to a vast range of games, your active participation results in benefits. This maintains the high levels of thrill and provides weekly something to look forward to.",
        ]}
        className="bg-[radial-gradient(circle_at_center,_#1E1E1E_0%,_#232323_100%)] border-y-[1.5px] border-amber-800 rounded-[20px] shadow-lg mb-6 md:mb-12"
        titleClassName="text-center "
        descriptionClassName=""
        paragraphClassName="text-center lg:text-left text-gray-300 "
      />
      <MonthlyPromosPromotion
        title="Monthly Fresh Surprises: Rotating Promos"
        description={[
          "Panalobet provides regularly changing rotating promos to keep things interesting and fresh. Every time you check in, then, there is a fresh chance to claim bonuses, free spins, or other fantastic prizes. At Panalobet, there is always a fresh chance to win big—from a seasonal campaign to a holiday special to a random surprise.",
          "Our monthly promos are meant to satisfy a range of player tastes. You never run out of interesting offers to grab, from big competitions with grand prizes to special bonus events adding extra value. The nice thing is that these promos are usually connected to significant events, hence players that stay around and keep on playing will constantly get bigger and better offers.",
        ]}
        className="bg-[radial-gradient(circle_at_center,_#1E1E1E_0%,_#232323_100%)] border-y-[1.5px] border-[#303897] rounded-[20px] shadow-lg mb-6 md:mb-12"
        titleClassName="text-center "
        descriptionClassName=""
        paragraphClassName="text-center lg:text-left text-gray-300 "
      />
      <EventsPromotion
        title="Particular Events and Competitions"
        description={[
          "Apart from our frequent bonuses and promotions, Panalobet organizes unique events and contests to provide an additional degree of thrill to your gaming encounter. Huge prize pools and other benefits including free spins, special bonuses, and even cash awards abound from these events. Whether your inclination is for table game challenges or slot tournaments, there is always a competition you might participate in to test your skills and win big.",
          "Engaging in these activities pays you fair awards, lets you compete against other players, and raises your chances of winning. The activities organized by Panalobet are meant to boost your time on the enjoyment and reward fullness of the site and increase the feeling of community. Additionally available are leaderboards so you may monitor your development and compare yourself to other players.",
        ]}
        className="bg-[radial-gradient(circle_at_center,_#1E1E1E_0%,_#232323_100%)] border-y-[1.5px] border-amber-800 rounded-[20px] shadow-lg mb-6 md:mb-12"
        titleClassName="text-center "
        descriptionClassName=""
        paragraphClassName="text-center lg:text-left text-gray-300 "
      />
    </section>
  );
};
