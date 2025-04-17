// this works but has an error when importing multiple times in a single page
// "use client";

// import Image from "next/image";
// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { cn } from "@/lib/utils";
// import { stepGuideItem } from "@/types/stepGuideItem";
// import { Heading4 } from "../typography/Heading4";
// import { Heading5 } from "../typography/Heading5";
// import { Paragraph } from "@/components/typography/Paragraph";

// interface StepGuideProps {
//   steps: stepGuideItem[];
//   containerClassName?: string;
//   stepClassName?: string;
//   activeStepClassName?: string;
//   imageContainerClassName?: string;
//   contentContainerClassName?: string;
//   stepIndicatorClassName?: string;
//   activeStepIndicatorClassName?: string;
//   titleClassName?: string;
//   descriptionClassName?: string;
//   subTitleClassName?: string;
//   subListClassName?: string;
//   subListItemClassName?: string;
// }

// export const StepGuide = ({
//   steps,
//   containerClassName = "",
//   stepClassName = "",
//   activeStepClassName = "",
//   imageContainerClassName = "",
//   contentContainerClassName = "",
//   stepIndicatorClassName = "",
//   activeStepIndicatorClassName = "",
//   titleClassName = "",
//   descriptionClassName = "",
//   subTitleClassName = "",
//   subListClassName = "",
//   subListItemClassName = "",
// }: StepGuideProps) => {
//   const [activeStep, setActiveStep] = useState(1);

//   useEffect(() => {
//     const handleScroll = () => {
//       const stepElements = document.querySelectorAll(".step-guide");
//       let currentStep = 1;

//       stepElements.forEach((step, index) => {
//         const rect = step.getBoundingClientRect();
//         if (rect.top < window.innerHeight * 0.5) {
//           currentStep = index + 1;
//         }
//       });
//       setActiveStep(currentStep);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <section className={cn("", containerClassName)}>
//       <div className="relative flex flex-col w-full items-center">
//         <div className="absolute left-1/2 transform -translate-x-1/2 h-full" />
//         {steps.map((step) => (
//           <motion.div
//             key={step.id}
//             className={cn(
//               "relative flex flex-col md:items-center md:justify-between md:flex-row step-guide",
//               activeStep === step.id ? "font-normal" : "text-gray-500",
//               stepClassName,
//               activeStep === step.id && activeStepClassName
//             )}
//             initial={{ opacity: 0.3 }}
//             animate={{ opacity: activeStep === step.id ? 1 : 0.3 }}
//             transition={{ duration: 0.3 }}>
//             <div
//               className={cn("flex w-full md:w-[50%]", imageContainerClassName)}>
//               <div className="w-full flex items-center justify-center rounded-md overflow-hidden md:w-[450px] md:h-[450px]">
//                 <Image
//                   src={step.img}
//                   width={450}
//                   height={450}
//                   alt={step.title}
//                 />
//               </div>
//             </div>
//             <div
//               className={cn(
//                 "self-center w-full md:w-[50%]",
//                 contentContainerClassName
//               )}>
//               <div
//                 className={cn(
//                   "rounded-full border-2 border-gray-300 font-bold transition-all bg-white shadow-lg hidden md:flex md:items-center md:justify-center md:mb-4 md:w-12 md:h-12",
//                   stepIndicatorClassName,
//                   activeStep === step.id && activeStepIndicatorClassName
//                 )}>
//                 <span
//                   className={
//                     activeStep === step.id ? "text-[#960525]" : "text-gray-500"
//                   }>
//                   0{step.id}
//                 </span>
//               </div>
//               <Heading4 className={cn(titleClassName)}>{step.title}</Heading4>
//               <Paragraph className={cn("", descriptionClassName)}>
//                 {step.description}
//               </Paragraph>
//               <div className="mt-2 md:mt-4">
//                 {step.subTitle && (
//                   <Heading5 className={cn("", subTitleClassName)}>
//                     {" "}
//                     {step.subTitle}
//                   </Heading5>
//                 )}
//                 {step.subList && (
//                   <Paragraph className={cn("", descriptionClassName)}>
//                     <ul
//                       className={cn(
//                         "list-disc pl-8 md:pl-10",
//                         subListClassName
//                       )}>
//                       {step.subList.map((item) => (
//                         <li
//                           key={item.id}
//                           className={cn("", subListItemClassName)}>
//                           {item.description}
//                         </li>
//                       ))}
//                     </ul>
//                   </Paragraph>
//                 )}
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

"use client";

import Image from "next/image";
import { useEffect, useState, useId } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { stepGuideItem } from "@/types/stepGuideItem";
import { Heading4 } from "../typography/Heading4";
import { Heading5 } from "../typography/Heading5";
import { Paragraph } from "@/components/typography/Paragraph";

interface StepGuideProps {
  steps: stepGuideItem[];
  containerClassName?: string;
  stepClassName?: string;
  activeStepClassName?: string;
  imageContainerClassName?: string;
  contentContainerClassName?: string;
  stepIndicatorClassName?: string;
  activeStepIndicatorClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  subTitleClassName?: string;
  subListClassName?: string;
  subListItemClassName?: string;
}

export const StepGuide = ({
  steps,
  containerClassName = "",
  stepClassName = "",
  activeStepClassName = "",
  imageContainerClassName = "",
  contentContainerClassName = "",
  stepIndicatorClassName = "",
  activeStepIndicatorClassName = "",
  titleClassName = "",
  descriptionClassName = "",
  subTitleClassName = "",
  subListClassName = "",
  subListItemClassName = "",
}: StepGuideProps) => {
  const [activeStep, setActiveStep] = useState(1);
  const componentId = useId(); // Generate a unique ID for this component instance

  useEffect(() => {
    const handleScroll = () => {
      // Only select steps within this component instance
      const stepElements = document.querySelectorAll(
        `[data-step-guide-id="${componentId}"]`
      );
      let currentStep = 1;

      stepElements.forEach((step, index) => {
        const rect = step.getBoundingClientRect();
        // Check if the element is in the middle of the viewport
        if (
          rect.top < window.innerHeight * 0.5 &&
          rect.bottom > window.innerHeight * 0.5
        ) {
          currentStep = index + 1;
        }
      });
      setActiveStep(currentStep);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [componentId]);

  return (
    <section className={cn("", containerClassName)}>
      <div className="relative flex flex-col w-full items-center">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full" />
        {steps.map((step) => (
          <motion.div
            key={step.id}
            data-step-guide-id={componentId} // Add the unique identifier
            className={cn(
              "relative flex flex-col md:items-center md:justify-between md:flex-row",
              activeStep === step.id ? "font-normal" : "text-gray-500",
              stepClassName,
              activeStep === step.id && activeStepClassName
            )}
            initial={{ opacity: 0.3 }}
            animate={{ opacity: activeStep === step.id ? 1 : 0.3 }}
            transition={{ duration: 0.3 }}>
            <div
              className={cn("flex w-full md:w-[50%]", imageContainerClassName)}>
              <div className="w-full flex items-center justify-center rounded-md overflow-hidden md:w-[450px] md:h-[450px]">
                <Image
                  src={step.img}
                  width={450}
                  height={450}
                  alt={step.title}
                />
              </div>
            </div>
            <div
              className={cn(
                "self-center w-full md:w-[50%]",
                contentContainerClassName
              )}>
              <div
                className={cn(
                  "rounded-full border-2 border-gray-300 font-bold transition-all bg-white shadow-lg hidden md:flex md:items-center md:justify-center md:mb-4 md:w-12 md:h-12",
                  stepIndicatorClassName,
                  activeStep === step.id && activeStepIndicatorClassName
                )}>
                <span
                  className={
                    activeStep === step.id ? "text-[#960525]" : "text-gray-500"
                  }>
                  0{step.id}
                </span>
              </div>
              <Heading4 className={cn(titleClassName)}>{step.title}</Heading4>
              <Paragraph className={cn("", descriptionClassName)}>
                {step.description}
              </Paragraph>
              <div className="mt-2 md:mt-4">
                {step.subTitle && (
                  <Heading5 className={cn("", subTitleClassName)}>
                    {" "}
                    {step.subTitle}
                  </Heading5>
                )}
                {step.subList && (
                  // <Paragraph className={cn("", descriptionClassName)}>
                  //   <ul
                  //     className={cn(
                  //       "list-disc pl-8 md:pl-10",
                  //       subListClassName
                  //     )}>
                  //     {step.subList.map((item) => (
                  //       <li
                  //         key={item.id}
                  //         className={cn("", subListItemClassName)}>
                  //         {item.description}
                  //       </li>
                  //     ))}
                  //   </ul>
                  // </Paragraph>
                  <ul
                    className={cn("list-disc pl-8 md:pl-10", subListClassName)}>
                    {step.subList.map((item) => (
                      <li
                        key={item.id}
                        className={cn("", subListItemClassName)}>
                        <Paragraph className={cn("", descriptionClassName)}>
                          {item.description}
                        </Paragraph>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
