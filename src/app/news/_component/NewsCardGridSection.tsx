import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import NewsCardGrid from "@/components/ui/NewsCardGrid";
import { newsItems } from "@/data/newsData";
import React from "react";

export const NewsCardGridSection = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={cn("px-8 md:px-12 pb-8 md:pb-12")}>
      <NewsCardGrid
        items={newsItems}
        isLoading={loading}
        className="gap-2 md:gap-4"
        cardClassName="hover:shadow-lg bg-[radial-gradient(circle_at_center,_#1E1E1E_0%,_#171717_50%)]"
        titleClassName="text-white"
        // limit={2} //remove this line if desired to show all the list
      />
    </section>
  );
};
