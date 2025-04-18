"use client";

import dynamic from "next/dynamic";
import { EmblaOptionsType } from "embla-carousel";
import { carouselItems } from "@/data/carouselData";
import { IntroSection } from "@/components/sections/IntroSection";
import { PartnerSection } from "@/components/sections/PartnerSection";
import { AffiliateGreatGamesSection } from "./_component/AffiliateGreatGamesSection";
import { AffiliateCommitmentSection } from "./_component/AffiliateCommitmentSection";
import { FeatureSection } from "@/components/sections/FeatureSection";
import { AffiliateMostEffectiveSection } from "./_component/AffiliateMostEffectiveSection";
import { AffiliateJoiningPH365Section } from "./_component/AffiliateJoiningPH365Section";
import { AffiliatePH365AppSection } from "./_component/AffiliatePH365AppSection";
import { CallToAction } from "@/components/ui/CallToAction";
import { AffiliatePaybackSection } from "./_component/AffiliatePaybackSection";
import { AffiliateDepositSystematicGuide } from "./_component/AffiliateDepositSystematicGuide";
import { AffiliateWinningsSection } from "./_component/AffiliateWinningsSection";
import { AffiliatePromotionSection } from "./_component/AffiliatePromotionSection";
import { AffiliateNewsSection } from "./_component/AffiliateNewsSection";
import { AffiliateFAQSection } from "./_component/AffiliateFAQSection";
import { AffiliateRegisterSection } from "./_component/AffiliateRegisterSection";

const EmblaCarousel = dynamic(() => import("@/components/ui/EmblaCarousel"), {
  ssr: false,
});

export default function Affiliate() {
  const carouselOptions: EmblaOptionsType = {
    loop: true,
    align: "center",
    containScroll: "trimSnaps",
    dragFree: false,
    slidesToScroll: 1,
  };

  return (
    <main>
      <EmblaCarousel slides={carouselItems} options={carouselOptions} />
      <div className="pb-8 md:pb-12 "></div>
      <IntroSection
        title="Welcome to ph365: The Ultimate Destination for Online Gaming Excellence"
        description={[
          <>
            Ph365 is eager to welcome Filipino players into the exciting realm
            of internet gaming. Under our motto, &apos;Bet A Little – Win A
            Lot&apos;, we provide a large platform where aficionados of gaming
            may have an unmatched online casino experience.{" "}
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-400 border-b-0 hover:tracking-wide hover:border-b-2 hover:border-yellow-500 transition duration-200 ">
              Ph365
            </a>{" "}
            has something for everyone whether your interests are in card games,
            sports betting, lottery, traditional slots, interesting fishing
            activities, or live casino visits. Our platform guarantees a
            responsible, safe, dependable gaming environment while also offering
            countless entertainment value.
          </>,
          <>
            At ph365, we know that in the online casino sector trust is
            absolutely vital. This is why we have given developing a platform
            that not only provides excitement and enjoyment top priority for
            maintaining the best standards of security, fairness, and openness.
            The trustworthy Philippine Amusement and Gaming Corporation (PAGCOR)
            gives us licenses and controls all of our activities; eCOGRA also
            keeps an eye on them. These affiliations assure that our platform
            follows the best criteria of responsibility and dependability, so
            ensuring that all of our games are fair.
          </>,
          <>
            Using cutting-edge security techniques, ph365 also gives your money
            and personal information great protection. Our dedication to player
            safety helps you to concentrate on the excitement of gaming free
            from data security concerns. You can trust ph365 whether you&apos;re
            playing on your computer or your phone.
          </>,
        ]}
        className=""
        titleClassName="text-center"
        descriptionClassName="mx-auto max-w-5xl"
        paragraphClassName="text-center text-gray-300"
      />
      <PartnerSection
        title="Getting Started with ph365"
        description={[
          "Integrating ph365 is straightforward. All you have to do is register on our website to be instantly connected to a universe full of amazing gaming options. Welcome as a new member, a kind offer aimed to enhance your first gaming experience. This incentive maximizes your chances to investigate all the many games we provide and straight from the start maximize your delight.",
          "Our first goal at ph365 is to establish a moral casino. Every player should have a great experience, and we also want to make sure they understand the risks associated with gambling. Our platform promotes users to play correctly and provides tools to help with any problems concerning gaming behavior. ",
        ]}
        className="bg-[radial-gradient(circle_at_center,_#171717_0%,_#1F1F1F_100%)] rounded-[7px] shadow-md"
        titleClassName="text-center"
        descriptionClassName=""
        paragraphClassName="blocks text-left text-gray-300 bg-[radial-gradient(circle_at_center,_#31399a_0%,_#252b73_100%)] border-[1.5px] border-amber-800 rounded-[20px] p-4 md:p-6 "
        img="/img/customer-support.webp"
      />
      <AffiliateGreatGamesSection />
      <AffiliateCommitmentSection />
      <FeatureSection
        title="Multilingual Platform: Getting Beyond Challenges for Global Players"
        description={[
          "Serving a worldwide player base at ph365, our goal is to enable everyone to enjoy our platform in their native tongue. To achieve this, we have made our website available in English, Filipino, Chinese, Japanese, and Korean among other languages. We also want to expand this list of supported languages moving ahead to serve gamers from even more countries.",
          "Further enhancement of the player experience comes from professional translating services guaranteeing all of our material is accurate and easily understandable. This suggests that our gamers might traverse over the platform with simplicity independent of their language preference. Whether your search is for customer service, term and condition reading, or gaming catalog browsing, our site is designed to be usable to everyone.",
          "Besides the multilingual website, we offer multilingual customer service. Around-the-clock, our dedicated support staff is available to assist athletes in their preferred tongue, therefore ensuring rapid and effective resolution of any questions or concerns. Whether your needs call for help with your account, payment methods, or game rules, our customer service team is available to offer customized and fast assistance.",
        ]}
        className="bg-[radial-gradient(circle_at_center,_#1E1E1E_0%,_#171717_50%)]"
        titleClassName="text-center"
        dividerClassName="flex-col-reverse md:flex-row"
        descriptionClassName=""
        paragraphClassName="text-left text-gray-300"
        img="/img/sectionImg1.webp"
      />
      <FeatureSection
        title="Many ways to pay: simple transactions for outstanding gaming"
        description={[
          "At ph365, we understand that great and enjoyable playing experience depends on swift, safe, dependable transactions. Our players have various choices for payment so they may choose the one most appropriate for their circumstances. Strong encryption and modern technologies let us make sure every interaction is safe and secure. This helps players to have the peace of mind required to appreciate their sports.",
          "Among the several ways players could pay include Bitcoin, e-wallets, and online banking. We make sure the money depositing and withdrawing procedures are as straightforward and quick as they could be. We even added precise instructions to guide fresh participants over the process. Making the money part of gaming as stress-free and ideal as possible will help players to concentrate on how enjoyable the games are.",
          "We also give fast payouts great weight, hence we rank quick and simple withdrawals first in our list of criteria. You will have instant access to your money since your gains will be credited straight to your account upon your winning.",
        ]}
        className="bg-[radial-gradient(circle_at_center,_#1E1E1E_0%,_#171717_50%)]"
        titleClassName="text-center"
        dividerClassName="flex-col-reverse md:flex-row-reverse"
        descriptionClassName=""
        paragraphClassName="text-left text-gray-300"
        img="/img/sectionImg1.webp"
      />
      <AffiliateMostEffectiveSection />
      <AffiliateJoiningPH365Section />
      <AffiliatePH365AppSection />
      <AffiliatePaybackSection />
      <CallToAction
        title="Playing Responsibly at ph365: Responsibility in Gaming"
        description={[
          "First concern at ph365 is promoting moral gaming practices. Always play within your limits even if we advise players to enjoy online gaming as a fun and exciting experience. Among the tools and services we provide to help players maintain control over their gaming practices include setting deposit limits, pauses, and help requests if needed.",
          "We also spend a lot of time on how to identify and handle problematic gaming behaviors so that our users may have a responsible and safe enjoyment of their time at ph365.",
        ]}
        className="bg-[radial-gradient(circle_at_center,_#1E1E1E_0%,_#171717_50%)] p-8 md:p-12 "
        titleClassName="text-center md:text-left"
        dividerClassName="flex-col-reverse md:flex-row"
        descriptionClassName=""
        paragraphClassName="text-center md:text-left text-gray-300"
        img="/img/sportsImage1.webp"
        btnLink="/"
        btnText="PLAY NOW"
        buttonClassName="flex justify-center md:justify-start py-4 md:py-6"
      />
      <AffiliateDepositSystematicGuide />
      <AffiliateWinningsSection />
      <AffiliatePromotionSection />
      <PartnerSection
        title="Customer Service at ph365: Consistently Available to Provide Assistance"
        description={[
          "Great customer service, in our opinion at ph365, is largely responsible for excellent gaming experience. Here around-the-clock ready to assist with any questions or problems you might have, is our dedicated customer support team. Here we are to help with account management, deposits, withdrawals, technical issues, or needs otherwise.",
          "Call, email, or live chat with representatives in customer service. To ensure that your gaming experience is as flawless as it may be, our staff is polite, knowledgeable, and competent in reacting promptly and forcefully.",
        ]}
        className="bg-[radial-gradient(circle_at_center,_#1E1E1E_0%,_#171717_50%)]"
        titleClassName="text-center"
        descriptionClassName=""
        paragraphClassName="blocks text-left text-gray-300 bg-[radial-gradient(circle_at_center,_#31399a_0%,_#252b73_100%)] border-[1.5px] border-amber-800 rounded-[20px] p-4 md:p-6 "
        img="/img/customer-support.webp"
      />
      <AffiliateNewsSection />
      <AffiliateFAQSection />
      <AffiliateRegisterSection />
    </main>
  );
}
