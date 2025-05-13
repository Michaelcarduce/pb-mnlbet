import { cn } from "@/lib/utils";
import { Heading2 } from "@/components/typography/Heading2";
import { HeadingSubHeading } from "@/components/ui/HeadingSubHeading";
import { FeatureSection } from "@/components/sections/FeatureSection";

import React from "react";

export const AffiliatePaybackSection = () => {
  return (
    <section className={cn("p-8 md:p-12")}>
      <Heading2 className={cn("mb-4 md:mb-6 text-center")}>
        Local Payback Systems for Filipino Volunteers
      </Heading2>
      <div className="md:px-34 pb-8 md:pb-12">
        <HeadingSubHeading
          title="1. Online financial banking"
          description={[
            "Online banking is among the most regularly utilized and secure ways of payment accessible to Filipino consumers. Supporting several local banks—including BDO, BPI, Metrobank, and UnionBank—ph365 lets players make direct cash deposits and withdrawals from their own bank accounts. Online banking offers customers a perfect experience since transactions there are quick and reliable.",
          ]}
          className="bg-[radial-gradient(circle_at_center,_#1E1E1E_0%,_#232323_100%)] border-y-[1.5px] border-amber-800 rounded-[20px] shadow-lg mb-2 md:mb-4"
          titleClassName="text-left"
          descriptionClassName="mx-auto"
          paragraphClassName="text-left text-gray-300"
        />
        <HeadingSubHeading
          title="2. Money for GCash"
          description={[
            "We are happy to offer GCash as a payment option on ph365; this relatively popular e-wallet tool is used in the Philippines. From their cell phones, GCash enables users to deposit and withdraw money just with a few clicks. This is a good option for those who enjoy rapid and safe transactions without a bank account.",
          ]}
          className="bg-[radial-gradient(circle_at_center,_#1E1E1E_0%,_#232323_100%)] border-y-[1.5px] border-[#303897] rounded-[20px] shadow-lg mb-2 md:mb-4"
          titleClassName="text-left"
          descriptionClassName="mx-auto"
          paragraphClassName="text-left text-gray-300"
        />

        <HeadingSubHeading
          title="3. PayMaya"
          description={[
            "Additionally accepted at ph365, PayMaya is another popular e-wallet from the Philippines. PayMaya guarantees ongoing gaming pleasure by letting you make speedy withdrawals and deposits. Players first just link their PayMaya account to their ph365 account.",
          ]}
          className="bg-[radial-gradient(circle_at_center,_#1E1E1E_0%,_#232323_100%)] border-y-[1.5px] border-amber-800 rounded-[20px] shadow-lg mb-2 md:mb-4"
          titleClassName="text-left"
          descriptionClassName="mx-auto"
          paragraphClassName="text-left text-gray-300"
        />

        <HeadingSubHeading
          title="4. Take Payment"
          description={[
            "One of the leading Philippine enterprises, Grab provides GrabPay, a mobile wallet. GrabPay allows you straight from your mobile device management over casino payments, deposit and withdrawal handling. GrabPay offers fast return to gaming with instant processing.",
          ]}
          className="bg-[radial-gradient(circle_at_center,_#1E1E1E_0%,_#232323_100%)] border-y-[1.5px] border-[#303897] rounded-[20px] shadow-lg"
          titleClassName="text-left"
          descriptionClassName="mx-auto"
          paragraphClassName="text-left text-gray-300"
        />
      </div>
      <FeatureSection
        title="International Payments Made by Globally Active Players"
        description={[
          "Additionally providing many foreign payment choices, ph365 helps players from all over to join the website and enjoy consistent online casino games. Among the numerous ways one could make foreign payments are:",
          <>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>•</strong>{" "}
            Visa and MasterCard safe and trustworthy credit and debit card
            payments.
          </>,
          <>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>•</strong>{" "}
            Skrill and Neteller are well-known e-tools for fast and safe
            transactions.
          </>,
          <>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>•</strong>{" "}
            PayPal is among the most regularly used online payment methods
            accessible worldwide.
          </>,
          <>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>•</strong>{" "}
            One safe prepaid card option is AstroPay, an anonymous one.
          </>,
          <>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>•</strong>{" "}
            Payable with a secured prepaid card for online payments,
            paysafecard.
          </>,
          "These payment choices ensure that, anywhere you are from, you may quickly deposit and withdraw money on ph365, thereby allowing you to focus on enjoying your gaming experience.",
        ]}
        className="bg-[radial-gradient(circle_at_center,_#1E1E1E_0%,_#232323_100%)] border-y-[1.5px] border-yellow-500 rounded-[20px] shadow-lg mb-6 md:mb-12 p-8 md:p-12"
        titleClassName="text-center md:text-left text-2xl md:text-3xl font-semibold tracking-tight bg-gradient-to-b from-[#c6c6af] via-[#c6c6af] via-[#c6c6af] to-[#c6c6af] bg-clip-text text-transparent"
        dividerClassName="flex-col-reverse md:flex-row"
        descriptionClassName="md:w-[75%]"
        paragraphClassName="text-left text-gray-300"
        img="/img/affiliate/internatioanl.webp"
      />
      <div className="md:px-34">
        <HeadingSubHeading
          title="Bitcoin Payments"
          description={[
            "For players who would want to pay in a more modern and safe manner, ph365 supports numerous cryptocurrencies including Bitcoin, Ethereum, and Litecoin. Among their several advantages include cheaper transaction costs, faster processing times, and better privacy. Adopting digital currencies enables ph365 to satisfy the growing demand for safe and widely used payment methods.",
            "ph365 uses cryptocurrencies in a straightforward manner At the register, select your preferred digital money and follow the basic instructions to complete your transaction.",
          ]}
          className="bg-[radial-gradient(circle_at_center,_#1E1E1E_0%,_#232323_100%)] border-y-[1.5px] border-amber-800 rounded-[20px] shadow-lg mb-2 md:mb-4"
          titleClassName="text-left"
          descriptionClassName="mx-auto"
          paragraphClassName="text-left text-gray-300"
        />
      </div>
    </section>
  );
};
