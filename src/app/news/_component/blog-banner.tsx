"use client";
import { urlFor } from "@/lib/sanity-client";
import Image from "next/image";

interface SanityImageAsset {
  _ref?: string;
  url?: string;
}

interface SanityImage {
  asset?: SanityImageAsset;
  alt?: string;
}

interface BlogPostData {
  title: string;
  mainImage?: SanityImage;
}

// export type Post = {
//   _id: string;
//   title: string;
//   publishedAt?: string;
//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   mainImage?: {
//     asset?: {
//       url: string;
//     };
//     alt?: string;
//   };
//   author?: {
//     name: string;
//     image?: {
//       asset?: {
//         url: string;
//       };
//     };
//   };
//   slug?: {
//     current: string;
//   };
//   description?: string;
// };

// export default function BlogBanner({ post }: { post: Post }) {
//   const DEFAULT_IMAGE = "/newsImage/DefaultBanner.webp";

//   return (
//     <>
//       <div className={`relative w-full aspect-[5/2]`}>
//         <Image
//           src={
//             post?.mainImage?.asset?.url
//               ? urlFor(post.mainImage).width(827).height(435).url()
//               : DEFAULT_IMAGE
//           }
//           alt={post.title}
//           fill
//           className="object-cover transition-transform duration-300 group-hover:scale-105"
//           sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 500px"
//           placeholder="blur"
//           blurDataURL="/newsImage/DefaultBanner.webp"
//           onError={(e) => {
//             (e.target as HTMLImageElement).src =
//               "/newsImage/DefaultBanner.webp";
//           }}
//         />
//       </div>
//     </>
//   );
// }

export default function BlogBanner({ data }: { data: BlogPostData | null }) {
  if (!data) return;

  const DEFAULT_IMAGE = "/newsImage/DefaultBanner.webp";
  return (
    <div className={`relative w-full aspect-[5/2]`}>
      <Image
        src={
          data?.mainImage?.asset?.url
            ? urlFor(data.mainImage).width(827).height(435).url()
            : DEFAULT_IMAGE
        }
        alt={data.title}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105 rounded-md"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 500px"
        placeholder="blur"
        blurDataURL="/newsImage/DefaultBanner.webp"
        onError={(e) => {
          (e.target as HTMLImageElement).src = "/newsImage/DefaultBanner.webp";
        }}
      />
    </div>
  );
}
