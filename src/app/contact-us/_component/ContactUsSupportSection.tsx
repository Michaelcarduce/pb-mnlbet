import { cn } from "@/lib/utils";
import { HeadingSubHeading } from "@/components/ui/HeadingSubHeading";
import React from "react";

export const ContactUsSupportSection = () => {
  return (
    <section
      className={cn(
        "p-8 md:p-12 bg-[radial-gradient(circle_at_center,_#171717_0%,_#1F1F1F_100%)] rounded-[7px] shadow-md"
      )}>
      <HeadingSubHeading
        title="See Connect with Us for Questions and Support."
        description={[
          "We know that our consumers rely on a perfect and hassle-free gaming environment. Panalobet provides multiple lines of connection to ensure you get aid in the most sensible way. Our knowledgeable customer service representatives are here to help with account-related issues, general questions on our platform, and deposit and withdrawal transactions.",
          "Our goal is to maximize and simplify communication so you may rapidly return to enjoying your chosen games and betting activities.",
        ]}
        className="bg-[radial-gradient(circle_at_center,_#1E1E1E_0%,_#171717_50%)]"
        titleClassName="text-left"
        descriptionClassName="mx-auto"
        paragraphClassName="text-left text-gray-300"
      />
      <div className="pb-4 md:pb-10"></div>
      <HeadingSubHeading
        title="Customer Service Agents"
        description={[
          "At Panalobet, we look after our clients. Here to help you with any questions or problems you might have 24 hours a day, 7 days a week is our highly gifted support staff.",
          "Regardless of the kind of your research-technical issues, betting, money transactions, or otherwise, our staff is always ready to provide answers.",
        ]}
        className="bg-[radial-gradient(circle_at_center,_#1E1E1E_0%,_#171717_50%)]"
        titleClassName="text-left"
        descriptionClassName="mx-auto"
        paragraphClassName="text-left text-gray-300"
      />
    </section>
  );
};
