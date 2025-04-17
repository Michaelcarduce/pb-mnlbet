// import Image from "next/image";
// import Button from "@/components/ui/Button";
// import { SportsCardProps } from "@/types/sportsCardItem";

// const CTACardGrid = ({ mainImage, sportsCardItems, cta }: SportsCardProps) => {
//   return (
//     <div className="p-8 md:p-12 flex flex-col justify-between gap-2 md:gap-4 md:flex-row overflow-x-hidden">
//       <div className="w-full self-center flex items-center justify-center rounded-md md:w-[300px] md:h-[300px]">
//         <Image
//           src={mainImage.src}
//           alt={mainImage.alt}
//           width={mainImage.width}
//           height={mainImage.height}
//         />
//       </div>
//       <div className="">
//         <div className="grid grid-cols-4 gap-4">
//           {sportsCardItems.map((item, index) => (
//             <div
//               key={index}
//               className="flex items-center justify-center rounded-md md:w-[200px] md:h-[200px]">
//               <Image
//                 src={item.src}
//                 alt={item.alt}
//                 width={item.width}
//                 height={item.height}
//               />
//             </div>
//           ))}
//         </div>
//         <div className="w-full flex items-center justify-center mt-2 md:mt-0">
//           <Button
//             label="JOIN US"
//             href="/"
//             gradientStart="#1f2460"
//             gradientEnd="#005fbe"
//             shadowInset={true}
//             width="150px"
//             newTab={true}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CTACardGrid;

import Image from "next/image";
import Button from "@/components/ui/Button";
import { CTACardProps } from "@/types/ctaCardItem";
import { cn } from "@/lib/utils";

const CTACardGrid = ({
  mainImage,
  cTACardItems,
  cta,
  containerClassName = "",
  mainImageContainerClassName = "",
  gridContainerClassName = "",
  gridItemClassName = "",
  ctaContainerClassName = "",
}: CTACardProps) => {
  return (
    <div className={cn(containerClassName)}>
      <div className={cn(mainImageContainerClassName)}>
        <Image
          src={mainImage.src}
          alt={mainImage.alt}
          width={mainImage.width}
          height={mainImage.height}
          className={mainImage.className}
        />
      </div>
      <div>
        <div className={cn(gridContainerClassName)}>
          {cTACardItems.map((item, index) => (
            <div key={index} className={cn(gridItemClassName, item.className)}>
              <Image
                src={item.src}
                alt={item.alt}
                width={item.width}
                height={item.height}
                className={item.className}
              />
            </div>
          ))}
        </div>
        <div className={cn(ctaContainerClassName)}>
          <Button
            label={cta.text}
            href={cta.href}
            gradientStart="#1f2460"
            gradientEnd="#005fbe"
            shadowInset={true}
            width="150px"
            newTab={true}
          />
        </div>
      </div>
    </div>
  );
};

export default CTACardGrid;
