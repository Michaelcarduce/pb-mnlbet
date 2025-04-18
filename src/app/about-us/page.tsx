"use client";

import { AboutUsPromotionCardGridSection } from "./_component/AboutUsPromotionCardGridSection";
import { IntroSection } from "@/components/sections/IntroSection";
import { AboutUsWhoWeAreSection } from "./_component/AboutUsWhoWeAreSection";
import { AboutUsWhatWeProvideSection } from "./_component/AboutUsWhatWeProvideSection";
import { AboutUsWhyWantSection } from "./_component/AboutUsWhyWantSection";
import { AboutUsResponsibleGamingSection } from "./_component/AboutUsResponsibleGamingSection";
import { AboutUsPanalobetCommunitySection } from "./_component/AboutUsPanalobetCommunitySection";

export default function Slot() {
  return (
    <main>
      <AboutUsPromotionCardGridSection />
      <IntroSection
        title="Welcome to Panalobet!"
        description={[
          "At Panalobet, we are dedicated to providing every player a remarkable online gaming and betting experience appropriate for their needs. Whether your tastes are for committed or casual betting, our system provides an excellent mix of entertaining and competitive gaming. Especially underpinning security, fairness, and customer happiness, Panalobet is a respectable name in the online gaming industry.",
          "Offering a broad spectrum of betting options-including sports betting, live casino games, slots, and e-sports betting-which ensures that every player finds their chosen manner of play makes us pretty happy. On our platform, modern technologies abound; they provide immersing gaming experience, real-time updates, and perfect navigation. Panalobet guarantees first-rate experience at every level independent of your preferred sports team or love of live dealer casino games.",
          "Our main values centre responsible gaming and security. We use advanced encryption and privacy standards to guard the personal information and money of our players. Our commitment to honest play and openness guarantees a leisureful and worry-free gaming environment. Come join Panalobet right now to explore an amazing realm full of artistic possibilities!",
        ]}
        className="bg-[radial-gradient(circle_at_center,_#1E1E1E_0%,_#171717_50%)]"
        titleClassName="text-center"
        descriptionClassName="mx-auto max-w-5xl"
        paragraphClassName="text-center text-gray-300"
      />
      <AboutUsWhoWeAreSection />
      <AboutUsWhatWeProvideSection />
      <AboutUsWhyWantSection />
      <AboutUsResponsibleGamingSection />
      <AboutUsPanalobetCommunitySection />
    </main>
  );
}
