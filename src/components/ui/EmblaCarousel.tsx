"use client";

import React, { useEffect, useState } from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { CarouselItem } from "@/data/carouselData";

type PropType = {
  slides: CarouselItem[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({
      playOnInit: true,
      delay: 3000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
      stopOnLastSnap: false,
    }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  const scrollTo = (index: number) => {
    if (emblaApi) {
      emblaApi.scrollTo(index);
    }
  };

  return (
    <div className="relative embla overflow-hidden">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container flex">
          {slides.map((slide) => (
            <div
              className="embla__slide flex-[0_0_100%] min-w-0"
              key={slide.id}>
              <a href={slide.link} className="block relative group">
                <img
                  src={slide.imageUrl}
                  alt={slide.title}
                  className="w-full h-auto object-cover"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center absolute bottom-1 md:bottom-4 left-0 right-0">
        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => scrollTo(index)}
              className={`w-1 h-1 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                index === selectedIndex ? "bg-white w-4 md:w-6" : "bg-gray-300 "
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
