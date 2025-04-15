"use client";

import dynamic from "next/dynamic";
import { EmblaOptionsType } from "embla-carousel";
import { carouselItems } from "@/data/carouselData";
import Stats from "@/components/Stats";
import { IntroSection } from "@/components/sections/IntroSection";
import { FeatureSection } from "@/components/sections/FeatureSection";
import { PartnerSection } from "@/components/sections/PartnerSection";
import { PromoHighlightsSection } from "@/components/sections/PromoHighlightsSection";
import { AdvertisingSection } from "@/components/sections/AdvertisingSection";
import { EnhancedLiveCasinoSection } from "@/components/sections/EnhancedLiveCasinoSection";
import { WhyPanalobetSection } from "@/components/sections/WhyPanalobetSection";
import { WinningJourneySection } from "@/components/sections/WinningJourneySection";
const EmblaCarousel = dynamic(() => import("@/components/ui/EmblaCarousel"), {
  ssr: false,
});

export default function Home() {
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
      <Stats />
      <IntroSection
        title="Welcome to the Philippines' Panalobet - Your Ultimate Online Casino Destination!"
        description={[
          "Are you prepared to feel the excitement and pleasure of Internet gaming? At Panalobet, we cordially encourage you to enter a world full of amazing possibilities, high-stakes action, and large prize possibilities! Panalobet is your one-stop shop for everything casino-related in the Philippines: reliable reputation, safe and flawless gaming experience, and exclusive incentives.",
          <>
            We have something for everyone, regardless of your level of
            experience with gambling or your brand-new discovery of the internet
            casino. The excitement and adrenaline surge of a land-based casino
            does not require you to venture beyond the solace of your house.
            Using{" "}
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-400 border-b-0 hover:tracking-wide hover:border-b-2 hover:border-yellow-500 transition duration-200 ">
              Panalobet
            </a>{" "}
            allows you to test your luck and skill at your speed and carry the
            thrill directly to your fingers.
          </>,
        ]}
        className="bg-[radial-gradient(circle_at_center,_#171717_0%,_#1F1F1F_100%)] rounded-[7px] shadow-md"
        titleClassName="text-center"
        descriptionClassName="mx-auto max-w-5xl"
        paragraphClassName="text-center text-gray-300"
      />
      <FeatureSection
        title="Prepare to Unlock Your Fortune and Begin Playing with Panalobet Right Now!"
        description={[
          "At Panalobet, we have streamlined the process so that every player—experienced or new—may enter the gambling scene with simplicity. Start playing right now and savor a selection of excellent games including the newest, trendiest casino slots as well as vintage favorites. Just a few clicks will open a universe full of amusement, incentives, and exciting challenges!",
          <>
            Discover the great enjoyment of playing at{" "}
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-400 border-b-0 hover:tracking-wide hover:border-b-2 hover:border-yellow-500 transition duration-200 ">
              Panalobet
            </a>{" "}
            among hundreds of other gamers who have already jumped right in.
            Your success depends on right at your hands, hence we are here to
            help you at every stage of your path. allows you to test your luck
            and skill at your speed and carry the thrill directly to your
            fingers.
          </>,
        ]}
        className="bg-[radial-gradient(circle_at_center,_#1E1E1E_0%,_#171717_50%)]"
        titleClassName="text-center"
        dividerClassName="flex-col-reverse md:flex-row"
        descriptionClassName=""
        paragraphClassName="text-left text-gray-300"
        img="/img/sectionImg1.webp"
      />
      <PartnerSection
        title="Best GCash-Ready Online Casino: Panalobet from the Philippines"
        description={[
          "Panalobet is an online casino created especially for Filipino players that know the local scene and aims to bring you a flawless and unique experience. One of the best things about Panalobet is our GCash relationship, which makes securely, swiftly, and hassle-free fund depositing and withdrawal even simpler.",
          <>
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-400 border-b-0 hover:tracking-wide hover:border-b-2 hover:border-yellow-500 transition duration-200 ">
              Panalobet
            </a>{" "}
            has streamlined the process so you may concentrate on what is
            important: enjoying the game. Complicated bank transfers or waiting
            days for your payments to settle are not necessary. Since GCash is
            among the most often used and reliable mobile payment options in the
            Philippines, we have included it into our system to guarantee a
            flawless and quick gaming experience for every user.
          </>,
          "GCash lets you finish transactions in a matter of seconds whether your goal is to fund your account to collect a large welcome bonus or pay out your wins. It's simply another method Panalobet is simplifying, accessible, and safe for your gaming experience.",
        ]}
        className="bg-[radial-gradient(circle_at_center,_#1E1E1E_0%,_#171717_50%)]"
        titleClassName="text-center"
        descriptionClassName=""
        paragraphClassName="blocks text-left text-gray-300 bg-[radial-gradient(circle_at_center,_#31399a_0%,_#252b73_100%)] border-[1.5px] border-amber-800 rounded-[20px] p-4 md:p-6 "
        img="/img/Best GCash-Ready Online Casino.webp"
      />
      <PromoHighlightsSection />
      <AdvertisingSection />
      <EnhancedLiveCasinoSection />
      <FeatureSection
        title="The Practicality of Playing Live Casino from Home"
        description={[
          "The days of having to outfit yourself and leave your house to feel the excitement of a live casino are long gone. No matter where you are, with Panalobet you may join live dealers and players from all around the world straight from your mobile device or computer. You can quickly access our live casino games and start playing straight away whether you're lounging at home or driving to work.",

          "Our easy-to-use interface and flawless connection will help you to not miss any of the action. You are therefore all ready for a world-class live gaming experience by grabbing your smartphone, making a GCash deposit.",
        ]}
        className="bg-[radial-gradient(circle_at_center,_#1E1E1E_0%,_#171717_50%)]"
        titleClassName="text-center"
        dividerClassName="flex-col-reverse md:flex-row"
        descriptionClassName=""
        paragraphClassName="text-left text-gray-300"
        img="/img/sectionImg1.webp"
      />
      <WhyPanalobetSection />
      <FeatureSection
        title="Responsible Gambling at Panalobet"
        description={[
          "Although gambling is a fun pastime, one should approach it responsibly and sensibly. Here at Panalobet, we are dedicated to encouraging sensible gaming. We know that players must be in charge of their gaming behavior and properly handle their money and time.",

          "To enable users to bet responsibly, we thus offer tools and resources such deposit restrictions, tracking of gaming activity, and the ability to self-exclude as needed. These tools enable you to enjoy gaming in a sensible, balanced manner free from compromising your finances or well-being.",
          "To prevent too much gambling, we advise players to set limits and take regular pauses. We provide help options including self-exclusion from our platform for a specified period should you ever feel that gambling is no longer enjoyable or badly impacting your life.",
        ]}
        className="bg-[radial-gradient(circle_at_center,_#1E1E1E_0%,_#171717_50%)]"
        titleClassName="text-center"
        dividerClassName="flex-col-reverse md:flex-row-reverse"
        descriptionClassName=""
        paragraphClassName="text-left text-gray-300"
        img="/img/sectionImg1.webp"
      />
      <WinningJourneySection />
    </main>
  );
}
