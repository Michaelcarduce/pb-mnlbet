import { cn } from "@/lib/utils";
import { HeadingSubHeading } from "@/components/ui/HeadingSubHeading";
import React from "react";

export const ContactUsReliableSupportSection = () => {
  return (
    <section
      className={cn(
        "p-8 md:p-12 bg-[radial-gradient(circle_at_center,_#171717_0%,_#1F1F1F_100%)] rounded-[7px] shadow-md"
      )}>
      <HeadingSubHeading
        title="Our Dedication to Reliable and Reactable Support"
        description={[
          "From what we know about Panalobet, first-rate gambling platforms are mostly dependent on outstanding customer care. We promise to deliver:",
          "Our employees make great effort to respond to enquiries as quickly as practical. From technical support to betting advice, we cover all aspect of your gaming life. We make sure that among multiple channels—chat, email, phone, social media—help is always accessible.",
          "Our support agents are trained to respond professionally, patiently, and efficiently—that is, with friendliness as well as professionalism—any questions.",
        ]}
        className="bg-[radial-gradient(circle_at_center,_#1E1E1E_0%,_#171717_50%)]"
        titleClassName="text-left"
        descriptionClassName="mx-auto"
        paragraphClassName="text-left text-gray-300"
      />
      <div className="pb-4 md:pb-10"></div>
      <HeadingSubHeading
        title="Ethical Gaming Support"
        description={[
          "Panalobet provides many ways to help consumers to maintain a proper balance between their gaming consumption and strongly encourages responsible gambling. Should you ever find yourself wanting limitations on your gaming activity, we have:",
          "Self-exclusion options: Should you wish a gaming break, temporarily suspend your account.",
          "Set a maximum deposit to avoid paying too much.",
          "Tracking your gaming activity will enable you to maintain under control your betting trends.",
          "We provide connections to helplines and businesses focused in gambling support and direction.",
          "Every one of our gamers should gamble sensibly and use the resources at hand to help to ensure that gaming remains an enjoyable and exciting hobby.",
        ]}
        className="bg-[radial-gradient(circle_at_center,_#1E1E1E_0%,_#171717_50%)]"
        titleClassName="text-left"
        descriptionClassName="mx-auto"
        paragraphClassName="text-left text-gray-300"
      />
    </section>
  );
};
