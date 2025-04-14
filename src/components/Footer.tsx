import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[linear-gradient(90deg,#252b73_40%,#31399a_100%)]">
      <div className="p-4 md:p-8">
        <div className="flex items-center justify-center lg:justify-between ">
          <div className="">
            <Image
              className="mx-auto lg:mx-0"
              src="/logo.webp"
              alt="PANALOBET"
              width={210}
              height={70}
            />
            <p className="text-white mt-4">
              © Copyright 2025 <span className="text-[#f2d604]">Panalobet</span>
              . All Rights Reserved.
            </p>
          </div>
          <div>
            <nav className="hidden lg:flex justify-end  text-sm py-2 px-4">
              <Link
                href="/"
                className="flex items-center  transition-transform transform duration-300 hover:scale-105 hover:underline">
                Terms and Conditions
              </Link>
              <Link
                href="/"
                className="flex items-center  transition-transform transform duration-300 hover:scale-105 hover:underline">
                <span className="px-3">|</span> Security
              </Link>
              <Link
                href="/"
                className="flex items-center  transition-transform transform duration-300 hover:scale-105 hover:underline">
                <span className="px-3">|</span> Privacy Policy
              </Link>
            </nav>
          </div>
        </div>
      </div>
      <div className="h-[1px] w-full bg-white/20 "></div>
      <div className="bg-[#252B73] p-4 md:p-5 flex flex-col  lg:flex-row lg:justify-between">
        <p className="text-white">
          <b>Address:</b> Lorem ipsum dolor sit amet, consectetur adipiscing
          elit.
        </p>
        <p className="text-[#f2d604]">
          <b className="text-white">Email:</b> support@panalobet.com
        </p>
        <p className="text-[#f2d604]">
          <b className="text-white">Phone Number:</b> +639000000000
        </p>
      </div>
    </footer>
  );
}
