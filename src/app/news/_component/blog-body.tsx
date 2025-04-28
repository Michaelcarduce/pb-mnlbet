// import Image from "next/image";
// import { PortableText, PortableTextComponents } from "@portabletext/react";
// import { urlFor } from "@/lib/sanity-client";
// import { getFormattedDate } from "@/lib/utils";
// import { cn } from "@/lib/utils";
// import ClientButton from "@/components/ui/ClientButton";
// import { Paragraph } from "@/components/typography/Paragraph";
// import { Heading1 } from "@/components/typography/Heading1";
// import { Heading2 } from "@/components/typography/Heading2";
// import { Heading3 } from "@/components/typography/Heading3";
// import { Heading4 } from "@/components/typography/Heading4";
// import { Heading5 } from "@/components/typography/Heading5";
// import BlogBanner from "../_component/blog-banner";

// const customComponents: PortableTextComponents = {
//   block: {
//     h2: ({ children, value }) => <h2 id={value._key}>{children}</h2>,
//   },
//   types: {
//     image: ({ value }) => {
//       if (!value?.asset) {
//         return <p>Image not found</p>; // Fallback if no image asset is available
//       }

//       const imageUrl = urlFor(value?.asset)?.width(705).url();

//       return (
//         <div className="blog-image relative mb-4 w-full h-[200px] md:w-[705px] md:h-[405px]">
//           <Image
//             src={imageUrl}
//             alt={value?.alt || "Image"}
//             title={value?.title || "Image"}
//             quality={75}
//             layout="fill"
//             priority
//             className="absolute object-cover object-center rounded-xl"
//           />
//         </div>
//       );
//     },

//     button: ({ value }) => (
//       <div className="w-full flex items-center">
//         <button
//           className="mx-auto bg-[linear-gradient(135deg,#991111_0%,#f60015_50%,#991111_100%)] py-4 px-8 text-white rounded-xl font-bold mb-3
//                 transition-transform transform hover:scale-105 hover:bg-[linear-gradient(135deg,#f60015_0%,#991111_50%,#f60015_100%)] duration-300
//                 ">
//           <a href={value?.url} target="_blank" rel="noopener noreferrer">
//             {value?.text}
//           </a>
//         </button>
//       </div>
//     ),
//   },
// };

// // eslint-disable-next-line @typescript-eslint/no-explicit-any
// export default function BlogBody({ data }: { data: any }) {
//   if (!data) return;

//   return (
//     <main className="grid grid-cols-1 lg:grid-cols-[16%_65%_17.5%] lg:gap-2">
//       {/* Banner */}
//       <figure className="lg:hidden order-1 col-span-1 mb-2 flex justify-center">
//         <BlogBanner post={data} key={data._id} />
//       </figure>

//       {/* table of contents */}
//       <div className="lg:order-1 order-2 col-span-1 lg:col-span-1 mb-2">
//         <div className="sticky top-42 p-2 md:p-4 bg-[radial-gradient(circle_at_center,_#171717_0%,_#1F1F1F_100%)] rounded-[7px] shadow-md">
//           <Heading5 className={cn("mb-4 md:mb-6 text-center lg:text-left")}>
//             Table of Contents
//           </Heading5>
//           <ul className="space-y-2 text-center lg:text-left">
//             {/* <NewsTOC></NewsTOC> */}
//           </ul>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="lg:order-2 order-3 col-span-1 lg:col-span-1">
//         {/* Banner */}
//         <figure className="hidden mb-2 md:mb-4 lg:flex justify-center">
//           <BlogBanner post={data} key={data._id} />
//         </figure>

//         {/* <div className=" text-white text-justify"></div> */}
//         <article className="mb-2 md:mb-4 blog-content">
//           <PortableText value={data?.body} components={customComponents} />
//           {/* {content.map((contentItem) => {
//         switch (contentItem.class) {
//           case "h1":
//             return (
//               <Heading1
//                 key={contentItem.id}
//                 className={cn("mb-4 md:mb-6 text-left")}>
//                 {typeof contentItem.description === "string"
//                   ? contentItem.description
//                   : null}
//               </Heading1>
//             );
//           case "h2":
//             return (
//               <Heading2
//                 key={contentItem.id}
//                 className={cn("mb-4 md:mb-6 text-left")}>
//                 {typeof contentItem.description === "string"
//                   ? contentItem.description
//                   : null}
//               </Heading2>
//             );
//           case "h3":
//             return (
//               <Heading3
//                 key={contentItem.id}
//                 className={cn("mb-1 md:mb-2 text-left")}>
//                 {typeof contentItem.description === "string"
//                   ? contentItem.description
//                   : null}
//               </Heading3>
//             );
//           case "h4":
//             return (
//               <Heading4
//                 key={contentItem.id}
//                 className={cn("mb-2 md:mb-4 text-left")}>
//                 {typeof contentItem.description === "string"
//                   ? contentItem.description
//                   : null}
//               </Heading4>
//             );
//           case "h5":
//             return (
//               <Heading5
//                 key={contentItem.id}
//                 className={cn("mb-1 md:mb-2 text-left")}>
//                 {typeof contentItem.description === "string"
//                   ? contentItem.description
//                   : null}
//               </Heading5>
//             );
//           case "p":
//             return (
//               <p
//                 key={contentItem.id}
//                 className="leading-relaxed text-sm md:text-base lg:text-lg mb-1 md:mb-2"
//                 dangerouslySetInnerHTML={{
//                   __html:
//                     typeof contentItem.description === "string"
//                       ? contentItem.description
//                       : "",
//                 }}
//               />
//             );
//           case "p ul":
//             return (
//               <div
//                 key={contentItem.id}
//                 className="leading-relaxed text-sm md:text-base lg:text-lg">
//                 {Array.isArray(contentItem.description) &&
//                   renderDescription(contentItem.description)}
//               </div>
//             );
//           case "p ol":
//             return (
//               <div
//                 key={contentItem.id}
//                 className="leading-relaxed text-sm md:text-base lg:text-lg">
//                 {Array.isArray(contentItem.description) &&
//                   renderDescription(contentItem.description)}
//               </div>
//             );
//           case "subImg":
//             return (
//               <div key={contentItem.id} className="my-2 md:my-4">
//                 <Image
//                   className="mx-auto lg:mx-0 max-w-[600px] w-full h-auto rounded-lg"
//                   src={contentItem.imageUrl}
//                   alt={newsItem.alt}
//                   width={210}
//                   height={70}
//                 />
//               </div>
//             );
//           case "btn":
//             return (
//               <div
//                 key={contentItem.id}
//                 className="my-2 md:my-4 flex justify-center">
//                 <ClientButton
//                   label="Claim Bonus"
//                   href={newsItem.buttonLink}
//                   gradientStart="#1f2460"
//                   gradientEnd="#005fbe"
//                   shadowInset={true}
//                   width="150px"
//                   newTab={true}
//                 />
//               </div>
//             );
//           default:
//             return null;
//         }
//       })} */}
//         </article>
//       </div>

//       {/* Recent */}
//       <div className="lg:order-3 order-4 col-span-1 lg:col-span-1 mb-2">
//         <div className="sticky top-42 p-2 md:p-4 bg-[radial-gradient(circle_at_center,_#171717_0%,_#1F1F1F_100%)] rounded-[7px] shadow-md">
//           <Heading5 className={cn("mb-4 md:mb-6 text-center lg:text-left")}>
//             Recent Posts
//           </Heading5>
//           <div className="space-y-4">
//             {/* Recent post items */}
//             {/* <NewsRecentCardGridSection /> */}
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }

import Image from "next/image";
import { PortableText, PortableTextComponents } from "@portabletext/react";
import { urlFor } from "@/lib/sanity-client";
import { cn } from "@/lib/utils";
import ClientButton from "@/components/ui/ClientButton";
import { Paragraph } from "@/components/typography/Paragraph";
import { Heading1 } from "@/components/typography/Heading1";
import { Heading2 } from "@/components/typography/Heading2";
import { Heading3 } from "@/components/typography/Heading3";
import { Heading4 } from "@/components/typography/Heading4";
import { Heading5 } from "@/components/typography/Heading5";

// type ContentItem = {
//   _key: string;
//   _type: string;
//   style?: string;
//   children?: Array<{
//     _key: string;
//     _type: string;
//     text: string;
//     marks?: string[];
//   }>;
//   asset?: any;
//   alt?: string;
//   url?: string;
//   text?: string;
// };

// const renderText = (children: any[]) => {
//   return children.map((child) => {
//     let element = child.text;
//     if (child.marks && child.marks.includes("strong")) {
//       element = <strong key={child._key}>{element}</strong>;
//     }
//     if (child.marks && child.marks.includes("em")) {
//       element = <em key={child._key}>{element}</em>;
//     }
//     return element;
//   });
// };

interface SanityAssetReference {
  _ref: string;
  _type: "reference";
}

interface SanityImage {
  _type: "image";
  asset: SanityAssetReference;
  alt?: string;
  caption?: string;
}

// interface SanityButton {
//   _type: "button";
//   text: string;
//   url: string;
// }

// interface SanityLink {
//   _type: "link";
//   href: string;
// }

interface SanityBlock {
  _key: string;
  _type: string;
  style?: string;
  children?: Array<{
    _key: string;
    _type: string;
    text: string;
    marks?: string[];
  }>;
}

// interface PortableTextImageValue {
//   value: SanityImage;
// }

// interface PortableTextButtonValue {
//   value: SanityButton;
// }

// interface PortableTextLinkValue {
//   value: SanityLink;
// }

const customComponents: PortableTextComponents = {
  block: {
    h1: ({ children, value }) => (
      <Heading1 key={value._key} className={cn("mb-4 md:mb-6 text-left")}>
        {children}
      </Heading1>
    ),
    h2: ({ children, value }) => (
      <Heading2
        key={value._key}
        className={cn("mb-4 md:mb-6 text-left")}
        id={value._key}>
        {children}
      </Heading2>
    ),
    h3: ({ children, value }) => (
      <Heading3 key={value._key} className={cn("mb-1 md:mb-2 text-left")}>
        {children}
      </Heading3>
    ),
    h4: ({ children, value }) => (
      <Heading4 key={value._key} className={cn("mb-2 md:mb-4 text-left")}>
        {children}
      </Heading4>
    ),
    h5: ({ children, value }) => (
      <Heading5 key={value._key} className={cn("mb-1 md:mb-2 text-left")}>
        {children}
      </Heading5>
    ),
    normal: ({ children, value }) => (
      <Paragraph
        key={value._key}
        className="leading-relaxed text-sm md:text-base lg:text-lg mb-1 md:mb-2">
        {children}
      </Paragraph>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc pl-5 mb-4 space-y-1">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal pl-5 mb-4 space-y-1">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li>{children}</li>,
    number: ({ children }) => <li>{children}</li>,
  },
  types: {
    image: ({ value }) => {
      if (!value?.asset) return <p>Image not found</p>;

      return (
        <div className="my-2 md:my-4">
          <Image
            className="mx-auto lg:mx-0 max-w-[600px] w-full h-auto rounded-lg"
            src={urlFor(value.asset).width(600).url()}
            alt={value.alt || "Image"}
            width={600}
            height={400}
          />
        </div>
      );
    },
    button: ({ value }) => (
      <div className="my-2 md:my-4 flex justify-center">
        <ClientButton
          label={value.text || "Claim Bonus"}
          href={value.url}
          gradientStart="#1f2460"
          gradientEnd="#005fbe"
          shadowInset={true}
          width="150px"
          newTab={true}
        />
      </div>
    ),
  },
  marks: {
    strong: ({ children }) => <strong>{children}</strong>,
    em: ({ children }) => <em>{children}</em>,
    link: ({ value, children }) => (
      <a
        href={value.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:underline">
        {children}
      </a>
    ),
  },
};

interface BlogBodyProps {
  data: {
    _id: string;
    body: SanityBlock[];
    mainImage?: SanityImage;
  };
}

export default function BlogBody({ data }: BlogBodyProps) {
  if (!data) return null;

  return (
    <article className="mb-2 md:mb-4 blog-content">
      <PortableText value={data.body} components={customComponents} />
    </article>
  );
}
