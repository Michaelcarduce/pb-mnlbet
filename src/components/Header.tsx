"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import useIsMobile from "@/hooks/useIsMobile";
import { AnimatedHamburger } from "@/components/ui/AnimatedHamburger";

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const isMobile = useIsMobile();

  const getNavLinkClasses = (href: string) => {
    const isActive = pathname === href;
    return `
      md:text-lg flex items-center gap-2 transition-transform transform duration-300 
      hover:scale-105 active:scale-105 [text-shadow:_0_1px_3px_rgba(0,0,0,0.8)] 
      ${isActive ? "text-[#FFD700]" : "text-[#ffffff] hover:text-[#FFD700]"}
    `;
  };

  useEffect(() => {
    const handleScroll = () => {
      setTimeout(() => {
        setIsSticky(window.scrollY > 520);
      }, 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={` transition-all duration-300 ease-in-out ${
        isSticky && "sticky top-0 z-100 shadow-lg"
      }`}>
      <motion.div
        className={`bg-[linear-gradient(90deg,#252b73_40%,#31399a_100%)] border-b-[1.5px] border-b-amber-800 transition-shadow duration-300 ${
          isSticky ? "shadow-lg" : ""
        }`}>
        <div className="w-full text-white">
          <div
            className={`flex relative items-center p-2 md:p-5 ${
              isMobile ? "justify-center" : "justify-between"
            }`}>
            <Image
              src="/logo.webp"
              alt="PANALOBET"
              width={240}
              height={80}
              sizes="(max-width: 640px) 180px, 240px"
              className="max-w-[180px] sm:max-w-[240px] w-full h-auto"
            />
            <div className="hidden md:flex gap-4">
              <Button
                label="LOG IN"
                href="#login"
                gradientStart="#1f2460"
                gradientEnd="#005fbe"
                shadowInset={true}
                width="150px"
                newTab={true}
              />
              <Button
                label="JOIN US"
                href="#joinus"
                gradientStart="#991111"
                gradientEnd="#f60015"
                shadowInset={true}
                width="150px"
                newTab={true}
              />
            </div>
            <button
              className="absolute bottom-5 right-5 md:hidden text-white "
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}>
              <AnimatedHamburger
                isOpen={mobileMenuOpen}
                size={18}
                className=""
              />
            </button>
          </div>
        </div>
      </motion.div>

      <div className="w-full">
        <nav
          className={`bg-[linear-gradient(135deg,#900627_0%,#BE051F_50%,#900627_100%)] md:flex justify-center py-2 ${
            mobileMenuOpen ? "flex-col" : "hidden"
          }`}>
          <div
            className={`flex flex-wrap justify-center items-center gap-4 ${
              isMobile ? "flex-col" : "flex-row"
            }`}>
            <Link href="/" className={getNavLinkClasses("/")}>
              Panalobet
            </Link>
            <Link
              href="/sabong-live"
              className={getNavLinkClasses("/sabong-live")}>
              Sabong Live
            </Link>
            <Link
              href="/sports-betting"
              className={getNavLinkClasses("/sports-betting")}>
              Sports Betting
            </Link>
            <Link href="/casino" className={getNavLinkClasses("/casino")}>
              Casino
            </Link>
            <Link href="/slot" className={getNavLinkClasses("/slot")}>
              Slots
            </Link>
            <Link href="/promotion" className={getNavLinkClasses("/promotion")}>
              Promotion
            </Link>
            <Link href="/about-us" className={getNavLinkClasses("/about-us")}>
              About Us
            </Link>
            <Link
              href="/contact-us"
              className={getNavLinkClasses("/contact-us")}>
              Contact Us
            </Link>
            <Link href="/affiliate" className={getNavLinkClasses("/affiliate")}>
              Affiliate
            </Link>
          </div>
          <div className="flex justify-center items-center mt-4 gap-4 mx-auto md:hidden">
            <Button
              label="LOG IN"
              href="#login"
              gradientStart="#1f2460"
              gradientEnd="#005fbe"
              shadowInset={true}
              width="150px"
              newTab={true}
            />
            <Button
              label="JOIN US"
              href="#joinus"
              gradientStart="#991111"
              gradientEnd="#f60015"
              shadowInset={true}
              width="150px"
              newTab={true}
            />
          </div>
        </nav>
      </div>
    </header>
  );
}
