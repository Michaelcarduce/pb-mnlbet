import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { Heading2 } from "@/components/typography/Heading2";
import { Paragraph } from "@/components/typography/Paragraph";
import Button from "@/components/ui/Button";
import NewsCardGrid from "@/components/ui/NewsCardGrid";
import { newsItems } from "@/data/newsData";
import React from "react";

export const AffiliateNewsSection = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={cn("p-8 md:p-12")}>
      <Heading2 className={cn("mb-4 md:mb-6 text-center")}>
        Keep informed with ph365 News
      </Heading2>
      <Paragraph className={cn("mb-4 md:mb-6 text-center")}>
        ph365 is about knowledge more than about entertainment value. Regular
        updates with the most recent gaming news, professional analysis,
        suggestions, world of online gaming and entertainment insights are
        provided by ph365 News. Whether your degree of play is casual or
        committed, ph365 News is your first choice for maintaining the newest
        trends, unique materials, and intelligent analysis.
      </Paragraph>
      <NewsCardGrid
        items={newsItems}
        isLoading={loading}
        className="gap-2 md:gap-4"
        cardClassName="hover:shadow-lg bg-[radial-gradient(circle_at_center,_#1E1E1E_0%,_#171717_50%)]"
        titleClassName="text-white"
        limit={2} //remove this line if desired to show all the list
      />
      <div className="flex justify-center py-4 md:py-6">
        <Button
          label="Read More"
          href="/"
          gradientStart="#1f2460"
          gradientEnd="#005fbe"
          shadowInset={true}
          width="150px"
          newTab={true}
        />
      </div>
    </section>
  );
};
