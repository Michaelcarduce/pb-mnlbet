import { cn } from "@/lib/utils";
import { Heading2 } from "@/components/typography/Heading2";
import { Heading3 } from "@/components/typography/Heading3";
import { FeatureSection } from "@/components/sections/FeatureSection";
import React from "react";

export const SabongMeronAgainstWalaSection = () => {
  return (
    <section
      className={cn(
        "p-8 md:p-12 bg-[radial-gradient(circle_at_center,_#171717_0%,_#1F1F1F_100%)] rounded-[7px] shadow-md"
      )}>
      <Heading2 className={cn("mb-4 md:mb-6 text-center")}>
        Panalobet Sabong Live: Meron Against Wala - Betting Options
      </Heading2>
      <div className="pb-2 md:pb-4"></div>
      <Heading3 className={cn("mb-4 lg:mb-6 text-center")}>
        When betting on battles, Panalobet Sabong Live better have two basic
        options:
      </Heading3>
      <FeatureSection
        title=""
        description={[
          "Meron is the favoured gamefowl since most people find significant appeal in its great track record and good chances of winning. Having fought many past conflicts, the Meron is usually the more aggressive and battle-tested rival. Meron's odds are thus typically lower, hence payouts could not be as good as those of Wala betting. Still, its prior success makes it a safer investment.",
          "Wala: Usually with fewer favourable bout statistics or recorded successes, Wala is the word used to define the challenger or underdog. Although less favoured, wala betting could produce higher payments, which attracts risk-takers. Wala offers a more likely return on investment since it has better chances, especially if the underdogs stage an unexpected victory.",
          "Knowing the strengths, past performances, and odds of every gamefowl before you make bets will greatly increase your chances of winning. Analysing the fighting history, breed, training, and past performance of every gamefowl will provide gamblers with vital knowledge that will help them to make more careful and measured wagers than those depending solely on luck.",
          "Panalobet also provides real-time updates, fight statistics, and live-streamed events to ensure bettors have access to the most accurate and current knowledge prior to making their decisions. Whether your favored wager is the stability of Meron or the high-risk, high-reward opportunities of Wala, Panalobet offers a fair, open, and exciting betting environment for all sabong lovers.",
        ]}
        className="bg-[radial-gradient(circle_at_center,_#1E1E1E_0%,_#171717_50%)]"
        titleClassName="text-center"
        dividerClassName="flex-col-reverse md:flex-row"
        descriptionClassName=""
        paragraphClassName="text-left text-gray-300"
        img="/img/sectionImg1.webp"
      />
      <div className="pb-2 md:pb-4"></div>
      <Heading3 className={cn("mb-4 lg:mb-6 text-center")}>
        Understanding Sabong Live in Panalobet
      </Heading3>
      <FeatureSection
        title=""
        description={[
          "Your bets' strategy mostly hinges on the match odds. Before making their bets, real-time betting odds updates from Panalobet enable players to make intelligent decisions.",
          "Odds determine your prospective success depending on the probability of a specific outcome. Meron is the chosen competitor, hence she usually has less opportunities; hence, payments are less but more consistent. Wala is the underdog, so, should it win, it has more opportunities and gives far more prizes.",
          "Maximising betting results requires an understanding of probability. Higher chances deliver more advantages even if they also reflect more risk. Experienced bettors check gamefowl numbers, combat history, and real-time conditions before putting their wagers. This deliberate approach helps bettors to fairly balance risk and return.",
          "Using Panalobet's extensive match statistics, live updates, and professional analysis, bettors may design winning strategies rather than counting solely on chance. Regular tracking of the odds and awareness of the competing gamefowls helps players to enhance their whole betting experience and make smarter bets.",
        ]}
        className="bg-[radial-gradient(circle_at_center,_#1E1E1E_0%,_#171717_50%)]"
        titleClassName="text-center"
        dividerClassName="flex-col-reverse md:flex-row-reverse"
        descriptionClassName=""
        paragraphClassName="text-left text-gray-300"
        img="/img/sectionImg1.webp"
      />
      <div className="pb-2 md:pb-4"></div>
      <FeatureSection
        title="Examining the Features of Panalobet Sabong Live"
        description={[
          "Aiming to provide a premium sabong betting experience, high-end features of Panalobet appeal to both novice and seasoned bettors. Players may guarantee an engaging and hassle-free experience by way of an easy-to-use interface, enabling perfect navigation.",
        ]}
        className="bg-[radial-gradient(circle_at_center,_#1E1E1E_0%,_#232323_100%)] border-y-[1.5px] border-amber-800 rounded-[20px] shadow-lg"
        titleClassName="text-center text-2xl md:text-3xl font-semibold tracking-tight bg-gradient-to-b from-[#c6c6af] via-[#c6c6af] via-[#c6c6af] to-[#c6c6af] bg-clip-text text-transparent"
        dividerClassName="flex-col-reverse "
        descriptionClassName="md:w-full"
        paragraphClassName="text-left text-gray-300"
        img="/img/sectionImg1.webp"
      />
    </section>
  );
};
