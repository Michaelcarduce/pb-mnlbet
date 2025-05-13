"use client";

import { ContactUsPromotionCardGridSection } from "./_component/ContactUsPromotionCardGridSection";
import { IntroSection } from "@/components/sections/IntroSection";
import { CallToAction } from "@/components/ui/CallToAction";
import { ContactUsSupportSection } from "./_component/ContactUsSupportSection";
import { PartnerSection } from "@/components/sections/PartnerSection";
import { ContactUsGenericQuestionSection } from "./_component/ContactUsGenericQuestionSection";
import { ContactUsFAQSection } from "./_component/ContactUsFAQSection";
import { ContactUsReliableSupportSection } from "./_component/ContactUsReliableSupportSection";
import { ContactUsPanalobetCommunitySection } from "./_component/ContactUsPanalobetCommunitySection";

export default function ContactUs() {
  return (
    <main>
      <ContactUsPromotionCardGridSection />
      <IntroSection
        title="Contact Us"
        description={[""]}
        className="bg-[radial-gradient(circle_at_center,_#1E1E1E_0%,_#171717_50%)]"
        titleClassName="text-center"
        descriptionClassName="mx-auto max-w-5xl"
        paragraphClassName="text-center text-gray-300"
      />
      <CallToAction
        title="Get In-Touch with Us"
        description={[
          "Our first concern at Panalobet is to provide high-rate customer service to ensure a perfect and entertaining gaming experience. Whether your needs call for assistance, questions, or concerns, our dedicated support staff is on call around-the-clock ready with rapid and effective responses. Since they ensure that every participant receives the greatest help available whenever they need it, clear communication and accessibility are quite crucial to us.",
        ]}
        className="bg-[radial-gradient(circle_at_center,_#1E1E1E_0%,_#171717_50%)] p-8 md:p-12 "
        titleClassName="text-center md:text-left"
        dividerClassName="flex-col-reverse md:flex-row"
        descriptionClassName=""
        paragraphClassName="text-center md:text-left text-gray-300"
        img="/img/contact/get-in-touch.webp"
        btnLink="/"
        btnText="PLAY NOW"
        buttonClassName="flex justify-center md:justify-start py-4 md:py-6"
      />
      <ContactUsSupportSection />
      <PartnerSection
        title="How can we reach each other?"
        description={[
          "Live Chat: The fastest way to get assistance is straight on our website. One of our helpful support representatives will help you right by only clicking on the chat link.",
          "Non-urgent questions can be emailed to us; our staff will promptly generally within a few hours.",
          "Helpline: Would you like to chat straight with a support agent? Here is our helpdesk for fast assistance.",
          "We want to immediately address any questions so you may continue to enjoy free from unnecessary disruptions game experience.",
        ]}
        className="bg-[radial-gradient(circle_at_center,_#1E1E1E_0%,_#171717_50%)]"
        titleClassName="text-center"
        descriptionClassName=""
        paragraphClassName="blocks text-left text-gray-300 bg-[radial-gradient(circle_at_center,_#31399a_0%,_#252b73_100%)] border-[1.5px] border-amber-800 rounded-[20px] p-4 md:p-6 "
        img="/img/contact/reach.webp"
      />
      <ContactUsGenericQuestionSection />
      <ContactUsFAQSection />
      <ContactUsReliableSupportSection />
      <ContactUsPanalobetCommunitySection />
    </main>
  );
}
