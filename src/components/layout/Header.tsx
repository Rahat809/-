import React, { useState, useRef, useEffect } from "react";
import {
  Search,
  ShoppingBag,
  Menu,
  X,
  Phone,
  MessageCircle,
  ArrowRight,
} from "lucide-react";
import { siteConfig } from "../../config/siteConfig";
import { CATEGORIES } from "../../data/categories";
import { PRODUCTS } from "../../data/products";
import { BrandLogo } from "../common/BrandLogo";
import { useCart } from "../../context/CartContext";
import { getWhatsAppClickUrl } from "../../utils/whatsapp";
import { formatBDT } from "../../utils/currency";
import { PageView } from "../../types";

interface HeaderProps {
  currentView: PageView;
  navigate: (view: PageView) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentView, navigate }) => {
  const { itemsCount, setIsCartOpen } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [announcementVisible, setAnnouncementVisible] = useState(true);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  // Search filter
  const filteredProducts = searchQuery.trim()
    ? PRODUCTS.filter(
        (p) =>
          p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.englishName.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.categoryName.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  // Close search dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(e.target as Node)
      ) {
        setIsSearchFocused(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelectProduct = (slug: string) => {
    setIsSearchFocused(false);
    setSearchQuery("");
    setMobileMenuOpen(false);
    navigate({ type: "product_detail", slug });
  };

  const isNavActive = (viewType: string, catSlug?: string) => {
    if (currentView.type === viewType) {
      if (viewType === "products") {
        if (!catSlug && !(currentView as any).categorySlug) return true;
        return (currentView as any).categorySlug === catSlug;
      }
      return true;
    }
    return false;
  };

  const whatsappGeneralUrl = getWhatsAppClickUrl(
    "আসসালামু আলাইকুম, আমি বাঙালী ফুড থেকে প্রাকৃতিক মধু সম্পর্কে জানতে ও অর্ডার করতে চাই।"
  );

  return (
    <header className="sticky top-0 z-40 bg-[#FFF9ED] border-b border-[#164B35]/15 shadow-2xs">
      {/* 1. Announcement Bar */}
      {siteConfig.announcement.enabled && announcementVisible && (
        <div className="bg-[#164B35] text-[#FFF9ED] text-xs py-2 px-4 transition-all">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
            <div className="flex-1 text-center font-medium flex items-center justify-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F28C28] animate-pulse" />
              <span>{siteConfig.announcement.text}</span>
            </div>
            <button
              onClick={() => setAnnouncementVisible(false)}
              className="text-[#E6F0D5] hover:text-white p-0.5 rounded transition-colors"
              aria-label="বার্তা বন্ধ করুন"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* 2. Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          {/* Left: Brand Logo */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate({ type: "home" })}
              className="focus:outline-hidden text-left cursor-pointer"
            >
              <BrandLogo variant="light" />
            </button>
          </div>

          {/* Middle: Live Search Bar (Desktop) */}
          <div
            ref={searchContainerRef}
            className="hidden md:flex flex-1 max-w-md relative mx-4"
          >
            <div className="relative w-full">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setIsSearchFocused(true);
                }}
                onFocus={() => setIsSearchFocused(true)}
                placeholder="মধু খুঁজুন... (যেমন: চাকের মধু, কালোজিরা)"
                className="w-full pl-10 pr-4 py-2.5 text-sm bg-white border border-[#164B35]/25 rounded-full text-[#252A25] placeholder:text-[#252A25]/50 focus:border-[#164B35] focus:ring-2 focus:ring-[#164B35]/15 focus:outline-hidden transition-all shadow-2xs"
              />
              <Search className="w-4 h-4 text-[#164B35]/70 absolute left-3.5 top-1/2 -translate-y-1/2" />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Live Search Results Popup */}
            {isSearchFocused && searchQuery.trim() && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-xl border border-[#164B35]/15 max-h-80 overflow-y-auto p-2 z-50">
                {filteredProducts.length > 0 ? (
                  <div className="space-y-1">
                    <p className="text-[11px] font-semibold text-[#164B35]/70 px-3 py-1 uppercase tracking-wider">
                      পাওয়া গেছে ({filteredProducts.length} টি পণ্য)
                    </p>
                    {filteredProducts.map((p) => (
                      <button
                        key={p.id}
                        onClick={() => handleSelectProduct(p.slug)}
                        className="w-full flex items-center gap-3 p-2 rounded-xl hover:bg-[#E6F0D5]/50 transition-colors text-left cursor-pointer"
                      >
                        <img
                          src={p.images[0]}
                          alt={p.name}
                          className="w-10 h-10 rounded-lg object-cover bg-stone-100 shrink-0 border border-gray-100"
                        />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-semibold text-[#252A25] truncate">
                            {p.name}
                          </p>
                          <p className="text-xs text-[#164B35] font-medium">
                            {formatBDT(p.packageSizes[0].price)} · {p.packageSizes[0].sizeLabel}
                          </p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-[#D4A63C] shrink-0" />
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="p-4 text-center text-xs text-gray-500">
                    "{searchQuery}" নামে কোনো পণ্য পাওয়া যায়নি।
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Right Action Icons: WhatsApp shortcut + Cart */}
          <div className="flex items-center gap-3">
            {/* WhatsApp Contact Shortcut */}
            <a
              href={whatsappGeneralUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-[#164B35] bg-[#E6F0D5] hover:bg-[#d9e6c4] border border-[#164B35]/20 rounded-full transition-all whitespace-nowrap"
              title="হোয়াটসঅ্যাপে যোগাযোগ ও অর্ডার"
            >
              <MessageCircle className="w-4 h-4 text-[#164B35]" />
              <span className="font-mono">{siteConfig.whatsappNumber}</span>
            </a>

            {/* Shopping Cart Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2.5 bg-white border border-[#164B35]/20 hover:border-[#164B35] text-[#164B35] rounded-full shadow-2xs hover:shadow-xs transition-all flex items-center justify-center focus:outline-hidden cursor-pointer"
              aria-label="শপিং ব্যাগ দেখুন"
            >
              <ShoppingBag className="w-5 h-5" />
              {itemsCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#F28C28] text-white text-[11px] font-bold flex items-center justify-center shadow-xs">
                  {itemsCount}
                </span>
              )}
            </button>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 text-[#164B35] hover:bg-white rounded-lg transition-colors md:hidden focus:outline-hidden cursor-pointer"
              aria-label={mobileMenuOpen ? "মেনু বন্ধ করুন" : "মেনু খুলুন"}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* 3. Category Links Navigation Strip (Desktop) */}
        <nav className="font-bengali hidden md:flex items-center justify-start gap-1 py-2.5 border-t border-[#164B35]/10 text-xs sm:text-sm font-medium text-[#252A25] overflow-x-auto no-scrollbar">
          <button
            onClick={() => navigate({ type: "home" })}
            className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
              isNavActive("home")
                ? "bg-[#164B35] text-white font-semibold"
                : "hover:bg-[#E6F0D5]/70 text-[#252A25]"
            }`}
          >
            হোম
          </button>

          <button
            onClick={() => navigate({ type: "products" })}
            className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
              isNavActive("products") && !(currentView as any).categorySlug
                ? "bg-[#164B35] text-white font-semibold"
                : "hover:bg-[#E6F0D5]/70 text-[#252A25]"
            }`}
          >
            সকল পণ্য
          </button>

          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => navigate({ type: "products", categorySlug: cat.slug })}
              className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                isNavActive("products", cat.slug)
                  ? "bg-[#164B35] text-white font-semibold"
                  : "hover:bg-[#E6F0D5]/70 text-[#252A25]"
              }`}
            >
              {cat.name}
            </button>
          ))}

          <button
            onClick={() => navigate({ type: "about" })}
            className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
              isNavActive("about")
                ? "bg-[#164B35] text-white font-semibold"
                : "hover:bg-[#E6F0D5]/70 text-[#252A25]"
            }`}
          >
            আমাদের সম্পর্কে
          </button>

          <button
            onClick={() => navigate({ type: "contact" })}
            className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
              isNavActive("contact")
                ? "bg-[#164B35] text-white font-semibold"
                : "hover:bg-[#E6F0D5]/70 text-[#252A25]"
            }`}
          >
            যোগাযোগ
          </button>
        </nav>
      </div>

      {/* 4. Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#164B35]/15 bg-[#FFF9ED] px-4 pt-3 pb-6 shadow-xl space-y-4">
          {/* Mobile Drawer Brand Header */}
          <div className="flex items-center justify-between pb-2 border-b border-[#164B35]/10">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                navigate({ type: "home" });
              }}
              className="text-left"
            >
              <BrandLogo size="sm" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-1 rounded-lg text-neutral-500 hover:text-neutral-800 hover:bg-[#E6F0D5] transition-colors"
              aria-label="মেনু বন্ধ করুন"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          {/* Mobile Search */}
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="পণ্য খুঁজুন..."
              className="w-full pl-9 pr-4 py-2 text-sm bg-white border border-[#164B35]/25 rounded-xl text-[#252A25] focus:outline-hidden"
            />
            <Search className="w-4 h-4 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" />
          </div>

          {/* Navigation Links */}
          <div className="font-bengali flex flex-col space-y-1 text-sm font-medium text-[#252A25]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                navigate({ type: "home" });
              }}
              className="text-left px-3 py-2 rounded-lg hover:bg-[#E6F0D5] cursor-pointer"
            >
              হোম
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                navigate({ type: "products" });
              }}
              className="text-left px-3 py-2 rounded-lg hover:bg-[#E6F0D5] cursor-pointer"
            >
              সকল পণ্য
            </button>

            <div className="pl-3 py-1 border-l-2 border-[#D4A63C] my-1 space-y-1">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    navigate({ type: "products", categorySlug: cat.slug });
                  }}
                  className="block w-full text-left px-3 py-1.5 text-xs text-[#252A25]/90 hover:text-[#164B35] hover:bg-[#E6F0D5]/50 rounded cursor-pointer"
                >
                  {cat.name}
                </button>
              ))}
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                navigate({ type: "about" });
              }}
              className="text-left px-3 py-2 rounded-lg hover:bg-[#E6F0D5] cursor-pointer"
            >
              আমাদের সম্পর্কে
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                navigate({ type: "contact" });
              }}
              className="text-left px-3 py-2 rounded-lg hover:bg-[#E6F0D5] cursor-pointer"
            >
              যোগাযোগ
            </button>
          </div>

          {/* Quick Actions */}
          <div className="pt-3 border-t border-[#164B35]/15 flex flex-col gap-2">
            <a
              href={whatsappGeneralUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#F28C28] text-white text-sm font-semibold shadow-xs"
            >
              <MessageCircle className="w-4 h-4 fill-white/20" />
              <span>WhatsApp অর্ডার ({siteConfig.whatsappNumber})</span>
            </a>
            <a
              href={`tel:${siteConfig.phoneNumber}`}
              className="w-full flex items-center justify-center gap-2 py-2 px-4 rounded-xl bg-white border border-[#164B35]/30 text-[#164B35] text-sm font-medium"
            >
              <Phone className="w-4 h-4 text-[#164B35]" />
              <span>সরাসরি কল করুন</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
