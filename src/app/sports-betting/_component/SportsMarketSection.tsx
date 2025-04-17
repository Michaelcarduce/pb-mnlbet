import { cn } from "@/lib/utils";
import { Heading3 } from "@/components/typography/Heading3";
import { Paragraph } from "@/components/typography/Paragraph";
import { CallToAction } from "@/components/ui/CallToAction";
import CTACardGrid from "@/components/ui/CTACardGrid";
import { sportsCardData } from "@/data/sportsCardData";
import React from "react";

export const SportsMarketSection = () => {
  return (
    <section
      className={cn(
        "p-8 md:p-12 bg-[radial-gradient(circle_at_center,_#171717_0%,_#1F1F1F_100%)] rounded-[7px] shadow-md"
      )}>
      <CallToAction
        title="Examining Panalobet's Sports Markets"
        description={[
          "Logging into Panalobet first makes one aware of the great range of sports accessible for betting. Panalobet covers everything whether your interests are more specialized like sabong or eSports or in classic sports like basketball, football, or tennis.",
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
      <div className="px-8 md:px-12 pt-8 md:pt-12">
        <Heading3 className="mb-4 lg:mb-6 text-center md:text-left">
          Popular Sports:
        </Heading3>
        <Paragraph className="text-center md:text-left">
          One of the most often watched sports in the Philippines, basketball is
          a mainstay of Panalobet&apos;s products. Panalobet has you covered
          whether your preferred betting venue is the PBA, the NBA, or
          international leagues.
        </Paragraph>
      </div>
      <CTACardGrid
        {...sportsCardData}
        containerClassName="px-8 md:px-12 py-2 md:py-4 flex flex-col justify-between gap-2 md:gap-4 md:flex-row overflow-x-hidden"
        mainImageContainerClassName="w-full self-center flex items-center justify-center rounded-md md:w-[300px] md:h-[300px] hover:scale-105 transition-transform"
        gridContainerClassName="grid grid-cols-4 gap-4"
        gridItemClassName="flex items-center justify-center rounded-md md:w-[200px] md:h-[200px] hover:scale-105 transition-transform"
        ctaContainerClassName="w-full flex items-center justify-center mt-2 md:mt-0"
      />

      <div className="px-8 md:px-12 pt-8 md:pt-12">
        <Heading3 className="mb-4 lg:mb-6 text-center md:text-left">
          Football:
        </Heading3>
        <Paragraph className="text-center md:text-left">
          Football fans can wager on big leagues such the English Premier
          League, La Liga, Serie A, and others. Additionally included by
          Panalobet are competitions including the FIFA World Cup and the UEFA
          Champions League.
        </Paragraph>
      </div>
      <CTACardGrid
        {...sportsCardData}
        containerClassName="px-8 md:px-12 py-2 md:py-4 flex flex-col justify-between gap-2 md:gap-4 md:flex-row overflow-x-hidden"
        mainImageContainerClassName="w-full self-center flex items-center justify-center rounded-md md:w-[300px] md:h-[300px] hover:scale-105 transition-transform"
        gridContainerClassName="grid grid-cols-4 gap-4"
        gridItemClassName="flex items-center justify-center rounded-md md:w-[200px] md:h-[200px] hover:scale-105 transition-transform"
        ctaContainerClassName="w-full flex items-center justify-center mt-2 md:mt-0"
      />

      <div className="px-8 md:px-12 pt-8 md:pt-12">
        <Heading3 className="mb-4 lg:mb-6 text-center md:text-left">
          Tennis:
        </Heading3>
        <Paragraph className="text-center md:text-left">
          Grand Slam events include Wimbledon, the US Open, and the Australian
          Open will be much awaited for bettors. There are many chances to
          gamble on particular games or whole tournament results.
        </Paragraph>
      </div>
      <CTACardGrid
        {...sportsCardData}
        containerClassName="px-8 md:px-12 py-2 md:py-4 flex flex-col justify-between gap-2 md:gap-4 md:flex-row overflow-x-hidden"
        mainImageContainerClassName="w-full self-center flex items-center justify-center rounded-md md:w-[300px] md:h-[300px] hover:scale-105 transition-transform"
        gridContainerClassName="grid grid-cols-4 gap-4"
        gridItemClassName="flex items-center justify-center rounded-md md:w-[200px] md:h-[200px] hover:scale-105 transition-transform"
        ctaContainerClassName="w-full flex items-center justify-center mt-2 md:mt-0"
      />

      <div className="px-8 md:px-12 pt-8 md:pt-12">
        <Heading3 className="mb-4 lg:mb-6 text-center md:text-left">
          Boxing:
        </Heading3>
        <Paragraph className="text-center md:text-left">
          Boxing and mixed martial arts are among the combat sports that
          Panalobet is also a regular venue for enthusiasts of. You can gamble
          on big events including UFC fights or well-publicized boxing contests.
        </Paragraph>
      </div>
      <CTACardGrid
        {...sportsCardData}
        containerClassName="px-8 md:px-12 py-2 md:py-4 flex flex-col justify-between gap-2 md:gap-4 md:flex-row overflow-x-hidden"
        mainImageContainerClassName="w-full self-center flex items-center justify-center rounded-md md:w-[300px] md:h-[300px] hover:scale-105 transition-transform"
        gridContainerClassName="grid grid-cols-4 gap-4"
        gridItemClassName="flex items-center justify-center rounded-md md:w-[200px] md:h-[200px] hover:scale-105 transition-transform"
        ctaContainerClassName="w-full flex items-center justify-center mt-2 md:mt-0"
      />
    </section>
  );
};
