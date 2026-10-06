import React, { useState, useRef } from "react";
import { Image as ImageIcon, Upload, X, Check } from "lucide-react";

interface ImagePlaceholderProps {
  label: string;
  hint?: string;
  aspectRatio?: string;
  className?: string;
  minHeight?: string;
  isSmall?: boolean;
}

export const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({
  label,
  hint,
  aspectRatio = "aspect-4/3",
  className = "",
  minHeight = "min-h-[220px]",
  isSmall = false,
}) => {
  const [previewSrc, setPreviewSrc] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const objectUrl = URL.createObjectURL(file);
      setPreviewSrc(objectUrl);
    }
  };

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (previewSrc) {
      URL.revokeObjectURL(previewSrc);
    }
    setPreviewSrc(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  if (previewSrc) {
    return (
      <div
        className={`relative overflow-hidden rounded-2xl border border-emerald-800/20 shadow-sm group ${aspectRatio} ${className}`}
      >
        <img
          src={previewSrc}
          alt={label}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 right-3 flex items-center gap-2">
          <span className="bg-emerald-950/80 backdrop-blur-xs text-emerald-200 text-xs px-2.5 py-1 rounded-md font-medium">
            লাইভ প্রিভিউ সক্রিয়
          </span>
          <button
            onClick={handleClear}
            title="রিসেট করুন"
            className="p-1.5 bg-black/70 hover:bg-black text-white rounded-md transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      onClick={() => fileInputRef.current?.click()}
      className={`relative cursor-pointer rounded-2xl border-2 border-dashed border-emerald-500/30 bg-[#121a15] hover:bg-[#16221b] hover:border-emerald-500/60 transition-all flex flex-col items-center justify-center p-6 text-center select-none ${aspectRatio} ${minHeight} ${className}`}
    >
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
        aria-label="Upload preview image"
      />

      <div className="w-12 h-12 rounded-xl bg-[#19271f] shadow-xs border border-emerald-500/30 flex items-center justify-center text-emerald-300 mb-3 group-hover:scale-105 transition-transform">
        <ImageIcon className="w-6 h-6" />
      </div>

      <p className="font-semibold text-emerald-100 text-sm md:text-base max-w-md px-2 leading-relaxed">
        {label}
      </p>

      {hint && (
        <p className="text-xs text-emerald-300/70 mt-1 max-w-sm">
          {hint}
        </p>
      )}

      <div className="mt-3.5 inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#1b2b22] border border-emerald-500/40 rounded-lg text-xs font-medium text-emerald-200 hover:text-white hover:border-emerald-400 transition-colors shadow-2xs">
        <Upload className="w-3.5 h-3.5 text-orange-400" />
        <span>ছবি পরীক্ষা করতে ক্লিক করুন</span>
      </div>
    </div>
  );
};
