import React, { useState } from "react";
import { siteConfig } from "../../config/siteConfig";

export interface BrandLogoProps {
  className?: string;
  variant?: "light" | "dark";
  showTagline?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
  showText?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = "",
  variant = "light",
  showTagline = false,
  size = "md",
  showText = false,
}) => {
  const [imgError, setImgError] = useState(false);

  // Responsive image dimensions based on size
  const sizeClasses = {
    sm: "h-10 sm:h-11",
    md: "h-12 sm:h-14 md:h-16",
    lg: "h-16 sm:h-20",
    xl: "h-24 sm:h-28",
  }[size];

  // If official logo path is configured and hasn't errored
  if (siteConfig.logoPath && !imgError) {
    return (
      <div
        className={`inline-flex items-center gap-3 transition-transform duration-200 select-none ${className}`}
      >
        <div
          className={`relative flex items-center justify-center rounded-2xl transition-all ${
            variant === "dark"
              ? "bg-white p-2 shadow-md border border-[#D4A63C]/40"
              : "bg-transparent p-0.5"
          }`}
        >
          <img
            src={siteConfig.logoPath}
            alt={`${siteConfig.brandName} - ${siteConfig.brandNameEnglish}`}
            onError={() => setImgError(true)}
            className={`${sizeClasses} w-auto max-w-full object-contain filter drop-shadow-2xs`}
            loading="eager"
            decoding="async"
          />
        </div>

        {/* Optional text beside logo (disabled by default as logo has integrated typography) */}
        {showText && (
          <div className="flex flex-col text-left">
            <span
              className={`font-bengali text-lg sm:text-xl font-bold leading-[1.35] tracking-tight ${
                variant === "dark" ? "text-white" : "text-[#164B35]"
              }`}
            >
              {siteConfig.brandName}
            </span>
            <span
              className={`text-[11px] font-semibold tracking-wider uppercase ${
                variant === "dark" ? "text-[#E6F0D5]" : "text-[#D4A63C]"
              }`}
            >
              {siteConfig.brandNameEnglish}
            </span>
            {showTagline && (
              <span
                className={`font-bengali text-[10px] leading-normal mt-0.5 ${
                  variant === "dark" ? "text-[#E6F0D5]/70" : "text-neutral-500"
                }`}
              >
                প্রকৃতির সাথে, আপনার পাশে
              </span>
            )}
          </div>
        )}
      </div>
    );
  }

  // Fallback vector brandmark if image is loading or unavailable
  return (
    <div className={`flex items-center gap-2.5 sm:gap-3 select-none ${className}`}>
      <div className="relative w-10 h-10 sm:w-12 sm:h-12 shrink-0 flex items-center justify-center">
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full drop-shadow-xs"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon
            points="50,4 90,26 90,74 50,96 10,74 10,26"
            fill={variant === "dark" ? "#0F3324" : "#164B35"}
            stroke="#D4A63C"
            strokeWidth="3.5"
            strokeLinejoin="round"
          />
          <polygon
            points="50,14 82,32 82,68 50,86 18,68 18,32"
            fill="none"
            stroke="#E6F0D5"
            strokeWidth="1.2"
            opacity="0.4"
          />
          <path
            d="M50 24 C50 24 34 46 34 58 C34 68 41.5 76 50 76 C58.5 76 66 68 66 58 C66 46 50 24 50 24 Z"
            fill="#F28C28"
          />
          <path
            d="M50 38 C54 30 64 32 64 32 C64 32 62 42 54 44 C50 45 50 38 50 38 Z"
            fill="#E6F0D5"
            opacity="0.9"
          />
          <circle cx="50" cy="58" r="4" fill="#FFF9ED" opacity="0.8" />
        </svg>
      </div>

      <div className="flex flex-col text-left">
        <span
          className={`font-bengali text-xl sm:text-2xl font-bold tracking-tight leading-[1.35] ${
            variant === "dark" ? "text-white" : "text-[#164B35]"
          }`}
        >
          {siteConfig.brandName}
        </span>
        <span
          className={`text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase mt-0.5 ${
            variant === "dark" ? "text-[#E6F0D5]" : "text-[#D4A63C]"
          }`}
        >
          {siteConfig.brandNameEnglish}
        </span>
      </div>
    </div>
  );
};
