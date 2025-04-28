import { getFormattedDate } from "@/lib/utils";
import { cn } from "@/lib/utils";
import { Meta } from "@/components/typography/Meta";
import { Heading1 } from "@/components/typography/Heading1";
import { Paragraph } from "@/components/typography/Paragraph";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function BlogHeader({ data }: { data: any }) {
  if (!data) return;

  return (
    <>
      <Heading1 className={cn("mb-4 md:mb-6 text-center")}>
        {data.title}
      </Heading1>

      <div className="flex justify-center gap-4 ">
        <Meta className={cn("")}>
          <span>By {data.author.name}</span>
        </Meta>
        <Meta className={cn("lg:text-xl")}>
          <strong>•</strong>
        </Meta>
        <Meta className={cn("")}>{getFormattedDate(data.publishedAt)}</Meta>
        <Paragraph className="">
          <span> - </span>
          <span>2 min read</span>
        </Paragraph>
      </div>
    </>
  );
}
