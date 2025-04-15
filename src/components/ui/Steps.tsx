"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { StepCardItem } from "@/types/stepCardItem";
import { Heading4 } from "../typography/Heading4";
import { Paragraph } from "../typography/Paragraph";

interface StepsProps {
  cards: StepCardItem[];
  cardClassName?: string;
  activeCardClassName?: string;
  lineColor?: string;
  activeLineColor?: string;
  stepIndicatorClassName?: string;
  activeStepIndicatorClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

export const Steps = ({
  cards,
  cardClassName = "",
  activeCardClassName = "",
  lineColor = "",
  activeLineColor = "",
  stepIndicatorClassName = "",
  activeStepIndicatorClassName = "",
  titleClassName = "",
  descriptionClassName = "",
}: StepsProps) => {
  const [activeStep, setActiveStep] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const stepElements = document.querySelectorAll(".step");
      let currentStep = 1;

      stepElements.forEach((step, index) => {
        const rect = step.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.5) {
          currentStep = index + 1;
        }
      });

      setActiveStep(currentStep);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="">
      <div className="">
        <div className="relative w-full p-2 md:p-6">
          <div className="relative flex flex-col w-full">
            <div
              className={`absolute left-5 top-0 w-[1px] ${lineColor} h-full -z-5`}
            />
            {cards.map((step) => (
              <motion.div
                key={step.id}
                className={cn(
                  "relative flex items-start gap-4 step py-4 md:py-8",
                  activeStep === step.id ? "font-[400]" : "text-gray-500",
                  cardClassName,
                  activeStep === step.id && activeCardClassName
                )}
                initial={{ opacity: 0.5 }}
                animate={{ opacity: activeStep === step.id ? 1 : 0.5 }}
                transition={{ duration: 0.3 }}>
                <div className="self-center relative">
                  <div
                    className={cn(
                      stepIndicatorClassName,
                      activeStep === step.id && activeStepIndicatorClassName
                    )}>
                    {step.id}
                  </div>
                </div>
                <div className="flex w-full flex-col md:flex-row gap-2 md:gap-4">
                  <div className="self-center md:w-[50%]">
                    <Heading4 className={cn(titleClassName)}>
                      {step.title}
                    </Heading4>
                    {step.description && (
                      <Paragraph className={cn(descriptionClassName)}>
                        {step.description}
                      </Paragraph>
                    )}
                  </div>
                  <div className="md:w-[50%] items-center justify-center rounded-md overflow-hidden">
                    <Image
                      src={step.img}
                      width={450}
                      height={450}
                      alt={step.title}
                    />
                  </div>
                </div>
                {activeStep === step.id && (
                  <div
                    className={`absolute left-5 top-1/2 w-[1px] ${activeLineColor} h-full transition-all transform -translate-y-1/2 -z-4`}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
