// "use client";

// import { IntroSection } from "@/components/sections/IntroSection";
// import { NewsCardGridSection } from "./_component/NewsCardGridSection";

// export default function News() {
//   return (
//     <main>
//       <IntroSection
//         title="Discover the latest Panalobet News"
//         description={[]}
//         className="bg-[radial-gradient(circle_at_center,_#1E1E1E_0%,_#171717_50%)]"
//         titleClassName="text-center"
//         descriptionClassName="mx-auto max-w-5xl"
//         paragraphClassName="text-center text-gray-300"
//       />
//       <NewsCardGridSection />
//     </main>
//   );
// }
import { IntroSection } from "@/components/sections/IntroSection";
import { client } from "@/lib/sanity-client";
import type { Post } from "./_component/blog-list";
import BlogList from "./_component/blog-list";
import Pagination from "./_component/pagination";
import { Paragraph } from "@/components/typography/Paragraph";
// import Link from "next/link";

export const revalidate = 5;
const POSTS_PER_PAGE = 6;

export default async function Page({
  searchParams,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  searchParams?: Promise<any>;
}) {
  const params = await searchParams;
  const currentPage = parseInt(params?.page || "1", 10);
  const start = (currentPage - 1) * POSTS_PER_PAGE;
  const posts = await client.fetch<Post[]>(
    `*[_type == "post-mnlbet"] | order(publishedAt desc) [${start}...${start + POSTS_PER_PAGE}] {
      _id,
      title,
      slug,
      author->{
        name, 
        image {
          asset->{
            url
          }
        }
      },
      publishedAt,
      description,
      mainImage {
        alt,
        asset->{
          url
        }
      }
    }`
  );

  const totalPosts = await client.fetch<number>(
    'count(*[_type == "post-mnlbet"])'
  );
  // console.log(posts, "check");
  return (
    <section className="">
      <header>
        <IntroSection
          title="Discover the latest Panalobet News"
          description={[]}
          className="bg-[radial-gradient(circle_at_center,_#1E1E1E_0%,_#171717_50%)]"
          titleClassName="text-center"
          descriptionClassName="mx-auto max-w-5xl"
          paragraphClassName="text-center text-gray-300"
        />
      </header>
      <main className="">
        {posts.length === 0 ? (
          <Paragraph className="text-center py-10">
            No blog post available
          </Paragraph>
        ) : (
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 px-8 md:px-12 pb-8 md:pb-12">
            {posts.map((post: Post, index: number) => {
              return (
                <div className={``} key={index}>
                  <BlogList post={post} key={index} />
                </div>
              );
            })}
          </div>
        )}
      </main>
      {posts.length > 6 && (
        <Pagination totalPosts={totalPosts} postsPerPage={POSTS_PER_PAGE} />
      )}
    </section>
  );
}
