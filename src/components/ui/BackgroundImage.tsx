import Image from "next/image";
import { ReactNode } from "react";

export function BackgroundImage({
  children,
  imageUrl,
  className = "",
}: {
  children: ReactNode;
  imageUrl: string;
  className?: string;
}) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={imageUrl}
          alt="Background"
          fill
          className="object-cover"
          quality={80}
          priority
          placeholder="blur"
          blurDataURL="/img/placeholder-casino.webp"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}

// to use this
// import { BackgroundImage } from "@/components/ui/BackgroundImage";
// <BackgroundImage
// imageUrl="/img/Background2.webp"
// className="py-4 md:py-8">

// </BackgroundImage>;
