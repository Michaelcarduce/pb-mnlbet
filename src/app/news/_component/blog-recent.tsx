// import Link from "next/link";
// import Image from "next/image";
// import { urlFor } from "@/lib/sanity-client";
// import { getFormattedDate } from "@/lib/utils";

// type Post = {
//   _id: string;
//   title: string;
//   slug: {
//     current: string;
//     _type: string;
//   };
//   mainImage: {
//     alt: string | null;
//     asset: {
//       url: string;
//     };
//   };
//   publishedAt: string;
//   description: string;
// };

// export default function BlogRecent({ otherPost }: { otherPost: Post[] }) {
//   return (
//     <>
//       <nav className="pt-4">
//         <ul className="flex flex-col gap-4">
//           {otherPost.map((item: Post) => (
//             <li key={item._id}>
//               <Link
//                 href={`/news/${item.slug.current}`}
//                 className="flex items-center flex-col">
//                 <Image
//                   alt={item.title}
//                   src={urlFor(item?.mainImage?.asset.url)
//                     .width(280)
//                     .height(175)
//                     .url()}
//                   width={280}
//                   height={170}
//                   loading="eager"
//                   className="h-full w-full object-cover rounded-md"
//                 />
//                 <div className="w-full md:w-full">
//                   <p className="font-bold text-white md:text-md">
//                     {item.title}
//                   </p>
//                   {/* <p className="text-md mt-[6px] leading-tight line-clamp-2">
//                     {item.description}
//                   </p> */}
//                   <div className="text-sm text-white mt-4">
//                     <span>Posted</span>
//                     <span> on </span>
//                     <span>{getFormattedDate(item.publishedAt)} </span>
//                   </div>
//                 </div>
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </nav>
//     </>
//   );
// }

"use client";

import { motion, Variants } from "@/lib/motion-wrapper";
import { urlFor } from "@/lib/sanity-client";
import { getFormattedDate } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Heading5 } from "@/components/typography/Heading5";
import { Meta } from "@/components/typography/Meta";
import { cn } from "@/lib/utils";

type Post = {
  _id: string;
  title: string;
  slug: {
    current: string;
    _type: string;
  };
  mainImage: {
    alt: string | null;
    asset: {
      url: string;
    };
  };
  publishedAt: string;
  description: string;
};

const cardVariants: Variants = {
  initial: { opacity: 0.9, scale: 1 },
  hover: {
    opacity: 1,
    scale: 1.02,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
};

const goldBorderVariants: Variants = {
  hover: {
    background: [
      "linear-gradient(135deg, #f9d423 0%, #ff4e50 50%, #f9d423 100%)",
      "linear-gradient(135deg, #ff4e50 0%, #f9d423 50%, #ff4e50 100%)",
    ],
    boxShadow: "0 0 10px rgba(255, 215, 0, 0.5)",
    transition: {
      duration: 1.5,
      repeat: Infinity,
      repeatType: "mirror" as const,
      ease: "linear",
    },
  },
};

export default function BlogRecent({ otherPost }: { otherPost: Post[] }) {
  const DEFAULT_IMAGE = "/newsImage/DefaultBanner.webp";

  return (
    <ul className="flex flex-wrap justify-center gap-2 md:gap-4">
      {otherPost.map((item: Post) => (
        <motion.li
          key={item._id}
          initial="initial"
          whileHover="hover"
          variants={cardVariants}
          className="relative w-full max-w-[200px]">
          <motion.div
            className="rounded-lg p-[1px]"
            variants={goldBorderVariants}
            initial={{
              background:
                "linear-gradient(135deg, #f9d423 0%, #ff4e50 50%, #f9d423 100%)",
            }}>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href={`/news/${item.slug.current}`}
              className="flex flex-col md:flex-row gap-2 bg-[radial-gradient(circle_at_center,_#1E1E1E_0%,_#171717_50%)] rounded-lg p-2">
              <div className="relative w-full md:w-1/3 aspect-[16/9]">
                <Image
                  alt={item.title}
                  src={
                    item?.mainImage?.asset?.url
                      ? urlFor(item.mainImage.asset.url)
                          .width(280)
                          .height(175)
                          .url()
                      : DEFAULT_IMAGE
                  }
                  fill
                  className="object-cover rounded-md transition-transform duration-300 hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 280px"
                  placeholder="blur"
                  blurDataURL="/newsImage/DefaultBanner.webp"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = DEFAULT_IMAGE;
                  }}
                />
              </div>

              <div className="w-full md:w-2/3 flex flex-col justify-center">
                <Heading5 className={`mb-1 md:mb-2`}>{item.title}</Heading5>
                <Meta className={cn("text-white/80")}>
                  <span>Posted on {getFormattedDate(item.publishedAt)}</span>
                </Meta>
              </div>
            </Link>
          </motion.div>
        </motion.li>
      ))}
    </ul>
  );
}
