import { cn } from "@/lib/utils";
import { HeadingSubHeading } from "@/components/ui/HeadingSubHeading";
import React from "react";

export const AffiliateMostEffectiveSection = () => {
  return (
    <section
      className={cn(
        "p-8 md:p-12 bg-[radial-gradient(circle_at_center,_#171717_0%,_#1F1F1F_100%)] rounded-[7px] shadow-md"
      )}>
      <HeadingSubHeading
        title="The Most Effective Protection for Your Privacy and Data"
        description={[
          "Safety is our first concern at ph365, hence we take great effort to ensure that every personal and financial data of one of our players is kept safe. The finest technology in the company encrypts all the data uploaded on our website. This protects your personal information from those without proper access. Our strong encryption techniques are aimed to protect your information whether you browse our website, make a transfer, or withdraw money.",
          "We not only protect data but also save player information in a certain manner to guard it from hackers and other potential illegal access users. Strict security protocols allow only authorised staff members to view private information; we routinely backup all player data to prevent any loss.",
          "Additionally in place is a thorough privacy policy addressing handling and safeguarding of client data. Your personal data will be kept safe and used just for required purposes like transaction processing and client service. ph365 will constantly safeguard your safety and privacy, thus you can relax and enjoy games without thinking about it.",
          "From the time players choose to use our platform, ph365 wants to provide them safe, enjoyable, and simple travel. If you wish to locate a reliable online casino where you may enjoy gaming, you have come to the proper location. ph365 is created with you in mind regardless of your knowledge level about internet gaming.",
          "Our system is user-friendly hence all it takes to join our game is a few quick actions. This section will guide you through the entire joining ph365 Casino procedure; you know exactly what to do to start. We will also discuss how excellent our mobile app is and how easy and safe paying at our site is.",
        ]}
        className="bg-[radial-gradient(circle_at_center,_#1E1E1E_0%,_#171717_50%)]"
        titleClassName="text-left"
        descriptionClassName="mx-auto"
        paragraphClassName="text-left text-gray-300"
      />
    </section>
  );
};
