import { cn } from "@/lib/utils";
import { Heading2 } from "@/components/typography/Heading2";
import { Paragraph } from "@/components/typography/Paragraph";
import { Heading3 } from "@/components/typography/Heading3";
import { FeatureSection } from "@/components/sections/FeatureSection";

import React from "react";

export const AffiliatePH365AppSection = () => {
  return (
    <section
      className={cn(
        "p-8 md:p-12 bg-[radial-gradient(circle_at_center,_#171717_0%,_#1F1F1F_100%)] rounded-[7px] shadow-md"
      )}>
      <Heading2 className={cn("mb-4 md:mb-6 text-center")}>
        Utilizing the ph365 App for Mobile Gaming: Convenient at Your Access
      </Heading2>
      <Paragraph className={cn("mb-4 md:mb-6 text-center")}>
        In the hectic modern world, convenience is absolutely essential, hence
        ph365 developed a totally perfect mobile app. The ph365 app lets players
        enjoy their preferred online casino games anywhere, anyhow, therefore
        ensuring that the thrill of gaming is always just a touch away. Whether
        your daily drive, downtime at home, or hang-out with friends, the ph365
        mobile app is the perfect friend for on-the-go gambling.
      </Paragraph>
      <FeatureSection
        title="Features of the ph365 Mobile App:"
        description={[
          "Play slots, table games, or live dealer interactions; the ph365 app offers the complete range of games available on our desktop system.",
          "Easy navigation of the app enables you to find and enjoy your chosen games fast.",
          "Like on the desktop platform, fast, safe deposits and withdrawals let the app ensure that every transaction is protected.",
          "Should you ever have questions or need assistance, you may use the app to get in touch with our customer support team, available around-the-clock to handle any issues.",
          "The ph365 mobile app enables you to enjoy a fully immersive and continuous gaming experience on the fly. Downloadable on both Android and iOS smartphones, the program simplifies playing your chosen casino games from anywhere across the world.",
        ]}
        className="bg-[radial-gradient(circle_at_center,_#1E1E1E_0%,_#232323_100%)] border-y-[1.5px] border-yellow-500 rounded-[20px] shadow-lg mb-6 md:mb-12 p-8 md:p-12"
        titleClassName="text-center md:text-left text-2xl md:text-3xl font-semibold tracking-tight bg-gradient-to-b from-[#c6c6af] via-[#c6c6af] via-[#c6c6af] to-[#c6c6af] bg-clip-text text-transparent"
        dividerClassName="flex-col-reverse md:flex-row"
        descriptionClassName=""
        paragraphClassName="text-left text-gray-300"
        img="/img/sectionImg1.webp"
      />

      <Heading3 className={cn("mb-4 lg:mb-6 text-left")}>
        Paying at ph365 Casino: Practical, Quick, Safe
      </Heading3>
      <Paragraph className={cn("mb-4 md:mb-6 text-left")}>
        At ph365, we are aware that safe and hassle-free transactions are
        absolutely essential for a decent online gaming experience. To ensure
        our players may quickly handle their money, we offer many payment
        choices suited for local and foreign players. ph365 supports your tastes
        in conventional banking, digital wallets, or cryptocurrencies.
      </Paragraph>
    </section>
  );
};
