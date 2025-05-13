import { cn } from "@/lib/utils";
import { HeadingSubHeading } from "@/components/ui/HeadingSubHeading";
import { FeatureSection } from "@/components/sections/FeatureSection";

import React from "react";

export const AboutUsResponsibleGamingSection = () => {
  return (
    <section className={cn("p-8 md:p-12")}>
      <FeatureSection
        title="Modified to Responsible Gaming"
        description={[
          "At Panalobet, we encourage moral gambling and motivate players to make reasonable bets. We know that even although gaming can be a pleasurable and satisfying sort of entertainment, one has to be under control over their betting behaviour to ensure a positive encounter. Our many tools and services provide for our gamers a good balance, which represents our commitment to responsible gaming.",
        ]}
        className="bg-[radial-gradient(circle_at_center,_#1E1E1E_0%,_#171717_50%)] p-0 md:p-0"
        titleClassName="text-center"
        dividerClassName="flex-col-reverse md:flex-row"
        descriptionClassName=""
        paragraphClassName="text-left text-gray-300"
        img="/img/aboutus/modified.webp"
      />
      <div className="pb-8 md:pb-12"></div>
      <HeadingSubHeading
        title="Choosing Self-Exclusion"
        description={[
          "We offer self-exclusion options for people who prefer to cut off gaming. This feature allows users to stop impulse betting by suspending their accounts either permanently or temporarily. Whether your necessary break is a few days or a longer one, our self-exclusion solutions provide the necessary control to guarantee suitable gaming habits.",
        ]}
        className="bg-[radial-gradient(circle_at_center,_#1E1E1E_0%,_#232323_100%)] border-y-[1.5px] border-amber-800 rounded-[20px] shadow-lg mb-6 md:mb-12"
        titleClassName="text-left"
        descriptionClassName="mx-auto"
        paragraphClassName="text-left text-gray-300"
      />
      <HeadingSubHeading
        title="Deposits: Limit"
        description={[
          "To help consumers correctly handle their money, we provide deposit limits allowing daily, weekly, or monthly controls on their deposits. Limiting the overall amount of money players may put to an account over a certain period helps them to avoid overpaying and maintain better control over their gaming budget.",
        ]}
        className="bg-[radial-gradient(circle_at_center,_#1E1E1E_0%,_#232323_100%)] border-y-[1.5px] border-[#303897] rounded-[20px] shadow-lg mb-6 md:mb-12"
        titleClassName="text-left"
        descriptionClassName="mx-auto"
        paragraphClassName="text-left text-gray-300"
      />
      <HeadingSubHeading
        title="Tracking Games: History"
        description={[
          "Responsible gaming depends on transparency, so we provide access to gaming past data. Examining their past wagers, profits, and losses helps players to analyse their gaming pattern. This encourages sensible gaming habits and helps individuals to make smart decisions about how they gamble.",
        ]}
        className="bg-[radial-gradient(circle_at_center,_#1E1E1E_0%,_#232323_100%)] border-y-[1.5px] border-yellow-500 rounded-[20px] shadow-lg mb-6 md:mb-12"
        titleClassName="text-left"
        descriptionClassName="mx-auto"
        paragraphClassName="text-left text-gray-300"
      />
      <HeadingSubHeading
        title="Support Tools for Ethical Gaming"
        description={[
          "For players seeking more direct access to many responsible gambling options, Panalobet offers We provide direct access to gaming addiction assistance, self-help groups, and helplines for specialised organisations for those who need professional treatment. Furthermore, easily available to offer instruction and help in effectively applying responsible gaming solutions is our customer support team.",
        ]}
        className="bg-[radial-gradient(circle_at_center,_#1E1E1E_0%,_#232323_100%)] border-y-[1.5px] border-amber-800 rounded-[20px] shadow-lg mb-6 md:mb-12"
        titleClassName="text-left"
        descriptionClassName="mx-auto"
        paragraphClassName="text-left text-gray-300"
      />
      <HeadingSubHeading
        title="Our Dedication to a Gaming Environment Safe for Everyone"
        description={[
          "Making sure gaming remains a safe and enjoyable pastime for every player is our main aim at Panalobet. We definitely restrict underage gaming and take significant effort to verify the age of our players. We also sponsor awareness campaigns alerting players on the risks of gambling addiction and the requirement of wise gaming.",
          "By implementing responsible gaming rules, Panalobet seeks to provide a safe and balanced gaming environment so players may enjoy their experience while maintaining control over their gaming activities. Our goal is to ensure that gaming remains a relaxing and reasonable hobby by means of enjoyment that gives our user's financial stability and well-being top priority.",
        ]}
        className="bg-[radial-gradient(circle_at_center,_#1E1E1E_0%,_#232323_100%)] border-y-[1.5px] border-[#303897] rounded-[20px] shadow-lg mb-6 md:mb-12"
        titleClassName="text-left"
        descriptionClassName="mx-auto"
        paragraphClassName="text-left text-gray-300"
      />
    </section>
  );
};
