// // components/ui/NewsTOC.tsx
// "use client";

// import { useEffect, useState } from "react";
// import { cn } from "@/lib/utils";
// import Link from "next/link";

// interface HeadingItem {
//   id: string;
//   text: string;
//   level: "h2" | "h3" | "h4";
// }

// export default function NewsTOC() {
//   const [headings, setHeadings] = useState<HeadingItem[]>([]);

//   useEffect(() => {
//     const contentElement = document
//       .querySelector(".grid")
//       ?.querySelector("article");
//     if (!contentElement) return;

//     const headingElements = Array.from(
//       contentElement.querySelectorAll("h2, h3, h4")
//     ) as HTMLElement[];

//     const headingItems = headingElements.map((heading) => ({
//       id:
//         heading.id ||
//         heading.textContent?.toLowerCase().replace(/\s+/g, "-") ||
//         "",
//       text: heading.textContent || "",
//       level: heading.tagName.toLowerCase() as "h2" | "h3" | "h4",
//     }));

//     setHeadings(headingItems);
//   }, []);

//   if (headings.length === 0) {
//     return <li className="text-gray-400">No headings available</li>;
//   }

//   return (
//     <>
//       {headings.map((heading) => (
//         <li
//           key={heading.id}
//           className={cn("text-sm hover:text-primary transition-colors", {
//             "ml-0": heading.level === "h2",
//             "ml-3": heading.level === "h3",
//             "ml-6": heading.level === "h4",
//           })}>
//           <Link href={`#${heading.id}`} className="block py-1">
//             {heading.text}
//           </Link>
//         </li>
//       ))}
//     </>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface HeadingItem {
  id: string;
  text: string;
  level: "h2" | "h3" | "h4";
}

export default function NewsTOC() {
  const [headings, setHeadings] = useState<HeadingItem[]>([]);

  useEffect(() => {
    const contentElement = document
      .querySelector(".grid")
      ?.querySelector("article");
    if (!contentElement) return;

    const headingElements = Array.from(
      contentElement.querySelectorAll("h2, h3, h4")
    ) as HTMLElement[];

    const headingItems = headingElements.map((heading) => {
      const id =
        heading.id ||
        heading.textContent?.toLowerCase().replace(/\s+/g, "-") ||
        "";
      heading.id = id; // Ensure the element has an ID
      return {
        id,
        text: heading.textContent || "",
        level: heading.tagName.toLowerCase() as "h2" | "h3" | "h4",
      };
    });

    setHeadings(headingItems);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (!target) return;

    const targetOffset = target.getBoundingClientRect().top + window.scrollY;
    const centerOffset =
      targetOffset - window.innerHeight / 2 + target.offsetHeight / 2;

    window.scrollTo({
      top: centerOffset,
      behavior: "smooth",
    });

    // Optionally update the URL hash without jumping
    history.pushState(null, "", `#${id}`);
  };

  if (headings.length === 0) {
    return <li className="text-gray-400">No headings available</li>;
  }

  return (
    <>
      {headings.map((heading) => (
        <li
          key={heading.id}
          className={cn("hover:text-yellow-200 transition-colors", {
            "ml-0 text-lg md:text-lg": heading.level === "h2",
            "ml-3 text-sm md:text-base": heading.level === "h3",
            "ml-6 text-xs md:text-sm": heading.level === "h4",
          })}>
          <a
            href={`#${heading.id}`}
            onClick={(e) => handleClick(e, heading.id)}
            className="block">
            {heading.text}
          </a>
        </li>
      ))}
    </>
  );
}
