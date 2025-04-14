import React from "react";
import Link from "next/link";

interface ButtonProps {
  label: string;
  href?: string;
  gradientStart: string;
  gradientEnd: string;
  shadowInset?: boolean;
  width?: string;
  mobileWidth?: string;
  newTab?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  href = "/",
  gradientStart,
  gradientEnd,
  shadowInset = true,
  width = "150px",
  mobileWidth = "120px",
  newTab = false,
}) => {
  const gradientStyle = {
    background: `linear-gradient(135deg, ${gradientStart} 0%, ${gradientEnd} 50%, ${gradientStart} 100%)`,
  };

  const hoverGradientStyle = {
    background: `linear-gradient(135deg, ${gradientEnd} 0%, ${gradientStart} 50%, ${gradientEnd} 100%)`,
  };

  const widthClasses = `w-[${mobileWidth}] md:w-[${width}]`;

  const baseClasses = `${widthClasses} px-3 py-1.5 md:px-4 md:py-2 
    text-sm md:text-base 
    rounded text-center 
    transition-all hover:scale-105 duration-300`;

  return (
    <Link
      href={href}
      target={newTab ? "_blank" : "_self"}
      rel={newTab ? "noopener noreferrer" : undefined}
      className={`relative ${baseClasses}`}
      style={{ ...gradientStyle }}
      onMouseEnter={(e) => {
        if (hoverGradientStyle) {
          (e.currentTarget as HTMLElement).style.background =
            hoverGradientStyle.background;
        }
      }}
      onMouseLeave={(e) => {
        if (gradientStyle) {
          (e.currentTarget as HTMLElement).style.background =
            gradientStyle.background;
        }
      }}>
      <span
        className={`absolute inset-0 rounded shadow-md ${
          shadowInset ? "opacity-70" : "opacity-100"
        }`}></span>

      {shadowInset && (
        <span className="absolute inset-0 rounded shadow-[inset_0_0_8px_rgba(255,255,255,0.3)]"></span>
      )}

      <span className="relative z-10">{label}</span>
    </Link>
  );
};

export default Button;
