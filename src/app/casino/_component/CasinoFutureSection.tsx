import { cn } from "@/lib/utils";
import { HeadingSubHeading } from "@/components/ui/HeadingSubHeading";
import { Heading3 } from "@/components/typography/Heading3";
import { Paragraph } from "@/components/typography/Paragraph";
import React from "react";

export const CasinoFutureSection = () => {
  return (
    <section
      className={cn(
        "p-8 md:p-12 bg-[radial-gradient(circle_at_center,_#171717_0%,_#1F1F1F_100%)] rounded-[7px] shadow-md"
      )}>
      <HeadingSubHeading
        title="Online Casino Games' Future in the Philippines"
        description={[
          "Panalobet Casino is leading the way in the very bright future that online casino games in the Philippines have ahead. Filipino gamers are in for an interesting journey as the online gaming sector keeps growing worldwide and new technologies change how consumers engage with and play at online casinos. As mobile gaming, live dealer alternatives, and improved game features become more and more popular, Panalobet Casino is positioned to present an even more engaging and dynamic gaming experience in the next few years.",
          "The progress of bonus features is one main trend influencing the direction of online casinos. As online casinos seek to make gaming events more interesting, players may expect more imaginative and fulfilling bonuses. With innovative incentives including no-deposit bonuses, free spins, and high-RTP (Return to Player) games—which give actual chances to win big—Panalobet Casino will keep pushing the envelope. Combining creative reward systems with loyalty programs will help to keep gamers returning for more, therefore guaranteeing that their gaming experience is always providing value.",
          "Rising live dealer games are another important trend; these are predicted to keep changing and becoming more and more popular. Panalobet Casino is probably going to improve its live dealer offers with even more sophisticated technology given the growing need for real-time engagement and a genuine casino experience. Anticipate modern streaming quality, several camera angles, and creative game modifications that provide a real-to- life casino experience right from the comfort of home.",
          "Furthermore, as mobile gaming keeps expanding, players will have more freedom and access to games anywhere, at any moment. Mobile apps will keep changing to provide a flawless experience on many different devices. Filipino gamers can expect even more handy and accessible means to enjoy their preferred games on the go as Panalobet Casino concentrates on maximizing its platform for mobile use.",
          "One of the most reliable and interesting platforms in the Philippines as online gambling gets more popular there Panalobet Casino will keep innovating and providing players with fascinating fresh approaches to feel the excitement of online gaming.",
        ]}
        className="bg-[radial-gradient(circle_at_center,_#1E1E1E_0%,_#171717_50%)]"
        titleClassName="text-left"
        descriptionClassName="mx-auto"
        paragraphClassName="text-left text-gray-300"
      />
      <Heading3 className={cn("mb-4 lg:mb-6 text-center mt-8 lg:mt-12")}>
        Conclusion
      </Heading3>
      <Paragraph className={cn("mb-4 md:mb-6 text-center")}>
        Top pick for Filipino gamers Panalobet Casino presents an unparalleled
        mix of thrill, chances to win large, and a user-friendly interface.
        Progressive jackpots, high RTP slots, free spins, and no-deposit bonuses
        let Panalobet give users everything they need to have a fun and
        profitable online casino experience.
      </Paragraph>
      <Paragraph className={cn("mb-4 md:mb-6 text-center")}>
        Panalobet Casino guarantees that you have access to a large variety of
        games, substantial bonuses, and the possibility to achieve life-changing
        victories regardless of your level of experience with online casinos.
        Why then should you wait? Register now, collect your bonuses, and begin
        discovering the exciting universe of online casino gaming at Panalobet
        Casino!
      </Paragraph>
    </section>
  );
};
