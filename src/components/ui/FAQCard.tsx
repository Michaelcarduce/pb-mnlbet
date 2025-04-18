// components/FAQCard.tsx
import { useState } from "react";
import { Heading5 } from "@/components/typography/Heading5";

type FAQItem = {
  question: string;
  answer: string;
};

type FAQCardProps = {
  items: FAQItem[];
  defaultOpenIndex?: number | null;
  className?: string;
};

export default function FAQCard({
  items,
  defaultOpenIndex = 0,
  className = "",
}: FAQCardProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={`overflow-hidden ${className}`}>
      {items.map((item, index) => (
        <div key={index} className="transition-all duration-200">
          <button
            onClick={() => toggleItem(index)}
            className="w-full text-left p-4 hover:bg-[#222222] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 flex justify-between items-center"
            aria-expanded={openIndex === index}
            aria-controls={`faq-content-${index}`}>
            <Heading5> {item.question}</Heading5>
            <svg
              className={`w-5 h-5 text-gray-300 transform transition-transform ${
                openIndex === index ? "rotate-180" : ""
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          <div
            id={`faq-content-${index}`}
            className={`transition-all duration-300 overflow-hidden ${
              openIndex === index ? "opacity-100" : "max-h-0 opacity-0"
            }`}>
            <div
              className="prose prose-sm max-w-none p-4 md:p-8"
              dangerouslySetInnerHTML={{ __html: item.answer }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
