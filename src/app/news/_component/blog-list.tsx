"use client";
import { motion, Variants } from "@/lib/motion-wrapper";
import { urlFor } from "@/lib/sanity-client";
import { getFormattedDate } from "@/lib/utils";
import { Heading5 } from "@/components/typography/Heading5";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { Paragraph } from "@/components/typography/Paragraph";

export type Post = {
  _id: string;
  title: string;
  publishedAt: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  mainImage?: {
    asset?: {
      url: string;
    };
    alt?: string;
  };
  author?: {
    name: string;
    image?: {
      asset?: {
        url: string;
      };
    };
  };
  slug: {
    current: string;
  };
  description: string;
};

const cardVariants: Variants = {
  initial: { opacity: 0.7, scale: 1 },
  hover: {
    opacity: 1,
    scale: 1.05,
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
    boxShadow: "0 0 15px rgba(255, 215, 0, 0.7)",
    transition: {
      duration: 1.5,
      repeat: Infinity,
      repeatType: "mirror" as const,
      ease: "linear",
    },
  },
};

export default function BlogList({ post }: { post: Post }) {
  const DEFAULT_AVATAR = "/newsImage/AuthorImage.webp";
  const DEFAULT_IMAGE = "/newsImage/DefaultBanner.webp";

  return (
    <>
      <motion.div
        key={post._id}
        initial="initial"
        whileHover="hover"
        variants={cardVariants}
        className="relative w-full max-w-[500px]">
        <motion.div
          className="rounded-xl p-[2px]"
          variants={goldBorderVariants}
          initial={{
            background:
              "linear-gradient(135deg, #f9d423 0%, #ff4e50 50%, #f9d423 100%)",
          }}>
          <div
            className={`flex flex-col w-full rounded-xl shadow-md overflow-hidden hover:shadow-lg bg-[radial-gradient(circle_at_center,_#1E1E1E_0%,_#171717_50%)]`}>
            <div className={`relative w-full aspect-[5/2]`}>
              <Image
                src={
                  post?.mainImage?.asset?.url
                    ? urlFor(post.mainImage).width(827).height(435).url()
                    : DEFAULT_IMAGE
                }
                alt={post.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 500px"
                placeholder="blur"
                blurDataURL="/newsImage/DefaultBanner.webp"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "/newsImage/DefaultBanner.webp";
                }}
              />
            </div>

            <div className="flex flex-col p-2 md:p-4">
              <Heading5 className={`mb-4 text-white`}>{post.title}</Heading5>

              <div className="flex items-center gap-3 mb-4">
                <Image
                  src={
                    post.author?.image?.asset?.url
                      ? urlFor(post.author.image).width(32).height(32).url()
                      : DEFAULT_AVATAR
                  }
                  width={32}
                  height={32}
                  alt={post.author?.name || "Author"}
                  className="rounded-full"
                />

                <div className="text-sm mt-auto text-white">
                  <p>{post.author?.name}</p>
                  <p className="text-xs">
                    {getFormattedDate(post.publishedAt)}
                  </p>
                </div>
              </div>

              <Paragraph className={`mb-4 text-white`}>
                {post.description}
              </Paragraph>

              <div className="flex justify-left">
                <Button
                  label="Read more"
                  href={`/news/${post.slug.current}`}
                  gradientStart="#1f2460"
                  gradientEnd="#005fbe"
                  shadowInset={true}
                  width="150px"
                  newTab={true}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}
