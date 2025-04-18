import { cn } from "@/lib/utils";
import { HeadingSubHeading } from "@/components/ui/HeadingSubHeading";

import React from "react";

export const ContactUsGenericQuestionSection = () => {
  return (
    <section
      className={cn(
        "p-8 md:p-12 bg-[radial-gradient(circle_at_center,_#171717_0%,_#1F1F1F_100%)] rounded-[7px] shadow-md"
      )}>
      <HeadingSubHeading
        title="Generic Questions"
        description={[
          "At Panalobet, our first goal is to provide each of our players with precise and unambiguous knowledge. Whether your questions cover our platform, ongoing promotions, account setup, betting options, or gameplay restrictions, we are ready to assist you at every level.",
          "For simple and fast assistance, you can finish our inquiry form available on our website. Just mention your name, phone number, and type of search; our dedicated support staff will respond within 24 hours. Whether you are new to Panalobet or require an explanation regarding our products, our staff ensures you get accurate and practical responses.",
          "Should you wish for quick assistance, our helpline is available to solve your problems in real-time. Always willing to provide thorough directions to help you negotiate the platform, understand betting odds, or promptly answer any general inquiries, our knowledgeable customer service personnel.",
          "Our first focus is on fast and professional assistance since we believe that an enjoyable betting experience depends on perfect communication. Panalobet is here to make sure, independent of the question, that your experience is perfect.",
        ]}
        className="bg-[radial-gradient(circle_at_center,_#1E1E1E_0%,_#232323_100%)] border-y-[1.5px] border-amber-800 rounded-[20px] shadow-lg mb-6 md:mb-12"
        titleClassName="text-left"
        descriptionClassName="mx-auto"
        paragraphClassName="text-left text-gray-300"
      />
      <HeadingSubHeading
        title="Social Media and Community Involvement"
        description={[
          "Stay in contact with Panalobet via one of our official social media outlets and be the first to find out about our most recent deals, game introductions, and special events. Active on Facebook, Twitter, and Instagram, we guarantee you stay current with the most exciting gaming opportunities. Following us lets you enjoy engaging in community events, temporary offers, and real-time alerts enhancing your betting experience.",
          "Our social media channels provide a direct line of interaction between our athletes and support team, not only updates. Please leave a comment on our blogs or kindly direct message us should you have questions, concerns, or remarks. Our dedicated support staff is always available to provide quick assistance and response to any questions you could have.",
          "Engaging in our community enables you meet other players, share knowledge, and review betting strategies. Whether you wager new or seasoned, our social sites provide a platform for you to connect, exchange ideas, and honour significant wins all around.",
          "Come visit the Panalobet community now to enjoy a more involved, interesting, and rewarding betting experience!",
        ]}
        className="bg-[radial-gradient(circle_at_center,_#1E1E1E_0%,_#232323_100%)] border-y-[1.5px] border-[#303897] rounded-[20px] shadow-lg"
        titleClassName="text-left"
        descriptionClassName="mx-auto"
        paragraphClassName="text-left text-gray-300"
      />
    </section>
  );
};
