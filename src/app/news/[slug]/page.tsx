import { newsItems } from "@/data/newsData";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Heading1 } from "@/components/typography/Heading1";
import { Heading2 } from "@/components/typography/Heading2";
import { Heading3 } from "@/components/typography/Heading3";
import { Heading4 } from "@/components/typography/Heading4";
import { Heading5 } from "@/components/typography/Heading5";
import { Meta } from "@/components/typography/Meta";
import ClientButton from "@/components/ui/ClientButton";
import NewsTOC from "@/app/news/_component/NewsTOC";
import { NewsRecentCardGridSection } from "@/app/news/_component/NewsRecentCardGridSection";

interface ListItem {
  id: string;
  description: string;
}

interface ContentItem {
  id: string;
  class: string;
  description?: string | ListItem[];
  imageUrl: string;
}

// interface ShowNewsProps {
//   params: {
//     slug: string;
//   };
//   searchParams?: { [key: string]: string | string[] | undefined };
// }
// async function Page({ params }) {
//   // asynchronous access of `params.id`.
//   const { id } = await params;
//   return <p>ID: {id}</p>;
// }
export default async function ShowNews({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const newsItem = newsItems.find((item) => item.slug === slug);

  if (!newsItem) {
    return <div>News not found</div>;
  }

  const content = newsItem.content as ContentItem[];

  const renderDescription = (
    description: string | ListItem[] | undefined
  ): ReactNode => {
    if (!description) return null;

    if (typeof description === "string") {
      return description;
    }

    if (Array.isArray(description)) {
      return (
        <ul className="list-disc pl-6">
          {description.map((item) => (
            <li key={item.id} className="my-2">
              {item.description}
            </li>
          ))}
        </ul>
      );
    }

    return null;
  };

  return (
    <section className="w-full">
      <div className="p-4 md:p-6 my-2 md:my-4 bg-[radial-gradient(circle_at_center,_#171717_0%,_#1F1F1F_100%)] rounded-[7px] shadow-md">
        <Heading1 className={cn("mb-4 md:mb-6 text-center")}>
          {newsItem.title}
        </Heading1>

        <div className="flex justify-center gap-4 ">
          <Meta className={cn("")}>
            <span>By {newsItem.author}</span>
          </Meta>
          <Meta className={cn("lg:text-xl")}>
            <strong>•</strong>
          </Meta>
          <Meta className={cn("")}>{newsItem.date}</Meta>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[16%_65%_17.5%] lg:gap-2 px-2 lg:px-0">
        {/* Banner */}
        <div className="lg:hidden order-1 col-span-1 mb-2 flex justify-center">
          <Image
            className="mx-auto lg:mx-0 w-full h-auto rounded-lg"
            src={newsItem.imageUrl}
            alt={newsItem.alt}
            width={210}
            height={70}
          />
        </div>

        {/* table of contents */}
        <div className="lg:order-1 order-2 col-span-1 lg:col-span-1 mb-2">
          <div className="sticky top-42 p-2 md:p-4 bg-[radial-gradient(circle_at_center,_#171717_0%,_#1F1F1F_100%)] rounded-[7px] shadow-md">
            <Heading5 className={cn("mb-4 md:mb-6 text-center lg:text-left")}>
              Table of Contents
            </Heading5>
            <ul className="space-y-2 text-center lg:text-left">
              <NewsTOC></NewsTOC>
            </ul>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:order-2 order-3 col-span-1 lg:col-span-1">
          <div className="hidden mb-2 md:mb-4 lg:flex justify-center">
            <Image
              className="mx-auto lg:mx-0 w-full h-auto rounded-lg"
              src={newsItem.imageUrl}
              alt={newsItem.alt}
              width={210}
              height={70}
            />
          </div>

          <article className="mb-2 md:mb-4">
            {content.map((contentItem) => {
              switch (contentItem.class) {
                case "h1":
                  return (
                    <Heading1
                      key={contentItem.id}
                      className={cn("mb-4 md:mb-6 text-left")}>
                      {typeof contentItem.description === "string"
                        ? contentItem.description
                        : null}
                    </Heading1>
                  );
                case "h2":
                  return (
                    <Heading2
                      key={contentItem.id}
                      className={cn("mb-4 md:mb-6 text-left")}>
                      {typeof contentItem.description === "string"
                        ? contentItem.description
                        : null}
                    </Heading2>
                  );
                case "h3":
                  return (
                    <Heading3
                      key={contentItem.id}
                      className={cn("mb-1 md:mb-2 text-left")}>
                      {typeof contentItem.description === "string"
                        ? contentItem.description
                        : null}
                    </Heading3>
                  );
                case "h4":
                  return (
                    <Heading4
                      key={contentItem.id}
                      className={cn("mb-2 md:mb-4 text-left")}>
                      {typeof contentItem.description === "string"
                        ? contentItem.description
                        : null}
                    </Heading4>
                  );
                case "h5":
                  return (
                    <Heading5
                      key={contentItem.id}
                      className={cn("mb-1 md:mb-2 text-left")}>
                      {typeof contentItem.description === "string"
                        ? contentItem.description
                        : null}
                    </Heading5>
                  );
                case "p":
                  return (
                    <p
                      key={contentItem.id}
                      className="leading-relaxed text-sm md:text-base lg:text-lg mb-1 md:mb-2"
                      dangerouslySetInnerHTML={{
                        __html:
                          typeof contentItem.description === "string"
                            ? contentItem.description
                            : "",
                      }}
                    />
                  );
                case "p ul":
                  return (
                    <div
                      key={contentItem.id}
                      className="leading-relaxed text-sm md:text-base lg:text-lg">
                      {Array.isArray(contentItem.description) &&
                        renderDescription(contentItem.description)}
                    </div>
                  );
                case "p ol":
                  return (
                    <div
                      key={contentItem.id}
                      className="leading-relaxed text-sm md:text-base lg:text-lg">
                      {Array.isArray(contentItem.description) &&
                        renderDescription(contentItem.description)}
                    </div>
                  );
                case "subImg":
                  return (
                    <div key={contentItem.id} className="my-2 md:my-4">
                      <Image
                        className="mx-auto lg:mx-0 max-w-[600px] w-full h-auto rounded-lg"
                        src={contentItem.imageUrl}
                        alt={newsItem.alt}
                        width={210}
                        height={70}
                      />
                    </div>
                  );
                case "btn":
                  return (
                    <div
                      key={contentItem.id}
                      className="my-2 md:my-4 flex justify-center">
                      <ClientButton
                        label="Claim Bonus"
                        href={newsItem.buttonLink}
                        gradientStart="#1f2460"
                        gradientEnd="#005fbe"
                        shadowInset={true}
                        width="150px"
                        newTab={true}
                      />
                    </div>
                  );
                default:
                  return null;
              }
            })}
          </article>
        </div>

        {/* Recent */}
        <div className="lg:order-3 order-4 col-span-1 lg:col-span-1 mb-2">
          <div className="sticky top-42 p-2 md:p-4 bg-[radial-gradient(circle_at_center,_#171717_0%,_#1F1F1F_100%)] rounded-[7px] shadow-md">
            <Heading5 className={cn("mb-4 md:mb-6 text-center lg:text-left")}>
              Recent Posts
            </Heading5>
            <div className="space-y-4">
              {/* Recent post items */}
              <NewsRecentCardGridSection />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export async function generateStaticParams(): Promise<Array<{ slug: string }>> {
  return newsItems.map((item) => ({
    slug: item.slug,
  }));
}
