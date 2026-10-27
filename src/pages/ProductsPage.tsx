import React, { useState, useMemo } from "react";
import { Filter, SlidersHorizontal, ArrowUpDown, X, Search, RotateCcw } from "lucide-react";
import { CATEGORIES } from "../data/categories";
import { PRODUCTS } from "../data/products";
import { ProductCard } from "../components/products/ProductCard";
import { PageView } from "../types";
import { formatBDT } from "../utils/currency";

interface ProductsPageProps {
  initialCategorySlug?: string;
  navigate: (view: PageView) => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({
  initialCategorySlug,
  navigate,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(
    initialCategorySlug || "all"
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<"featured" | "price_asc" | "price_desc" | "newest">("featured");
  const [selectedSizeFilter, setSelectedSizeFilter] = useState<string>("all");
  const [maxPrice, setMaxPrice] = useState<number>(1500);

  // Active Category details
  const currentCategoryData = CATEGORIES.find((c) => c.slug === selectedCategory);

  // Filtered and Sorted Products
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Category match
      if (selectedCategory !== "all" && product.categorySlug !== selectedCategory) {
        return false;
      }

      // Search match
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matches =
          product.name.toLowerCase().includes(query) ||
          product.englishName.toLowerCase().includes(query) ||
          product.shortDescription.toLowerCase().includes(query) ||
          product.tags.some((t) => t.toLowerCase().includes(query));
        if (!matches) return false;
      }

      // Package size filter
      if (selectedSizeFilter !== "all") {
        const hasSize = product.packageSizes.some((s) =>
          s.sizeLabel.includes(selectedSizeFilter)
        );
        if (!hasSize) return false;
      }

      // Max price filter (checks base price of smallest package)
      const lowestPrice = Math.min(...product.packageSizes.map((s) => s.price));
      if (lowestPrice > maxPrice) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      const priceA = a.packageSizes[0]?.price || 0;
      const priceB = b.packageSizes[0]?.price || 0;

      if (sortBy === "price_asc") return priceA - priceB;
      if (sortBy === "price_desc") return priceB - priceA;
      if (sortBy === "featured") return (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0);
      return 0; // newest
    });
  }, [selectedCategory, searchQuery, sortBy, selectedSizeFilter, maxPrice]);

  const resetFilters = () => {
    setSelectedCategory("all");
    setSearchQuery("");
    setSortBy("featured");
    setSelectedSizeFilter("all");
    setMaxPrice(1500);
  };

  const hasActiveFilters =
    selectedCategory !== "all" ||
    searchQuery.trim() !== "" ||
    sortBy !== "featured" ||
    selectedSizeFilter !== "all" ||
    maxPrice < 1500;

  return (
    <div className="py-8 sm:py-12 bg-[#FFF9ED] min-h-[70vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Breadcrumb & Category Title */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
            <button
              onClick={() => navigate({ type: "home" })}
              className="hover:text-[#164B35] cursor-pointer"
            >
              হোম
            </button>
            <span>/</span>
            <span className="text-[#164B35] font-semibold">সকল পণ্য</span>
            {currentCategoryData && (
              <>
                <span>/</span>
                <span className="text-[#D4A63C] font-semibold">
                  {currentCategoryData.name}
                </span>
              </>
            )}
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#164B35]">
            {currentCategoryData ? currentCategoryData.name : "আমাদের প্রাকৃতিক মধুর সমাহার"}
          </h1>
          <p className="text-xs sm:text-sm text-gray-600 mt-1 max-w-2xl leading-relaxed">
            {currentCategoryData
              ? currentCategoryData.description
              : "বনের চাক ও ফুলেল উৎস থেকে সংগৃহীত শতভাগ খাঁটি ও অপরিশোধিত প্রাকৃতিক মধু। আপনার পছন্দেরটি বেছে নিন।"}
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-white p-4 sm:p-5 rounded-2xl border border-[#164B35]/15 shadow-2xs mb-8 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
            {/* Search within page */}
            <div className="md:col-span-5 relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="নাম বা ধরন দিয়ে খুঁজুন..."
                className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm bg-[#FFF9ED]/60 border border-gray-200 rounded-xl text-[#252A25] focus:outline-hidden focus:border-[#164B35]"
              />
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Package Size Filter */}
            <div className="md:col-span-3">
              <select
                value={selectedSizeFilter}
                onChange={(e) => setSelectedSizeFilter(e.target.value)}
                className="w-full py-2 px-3 text-xs sm:text-sm bg-white border border-gray-200 rounded-xl text-[#252A25] focus:outline-hidden focus:border-[#164B35] cursor-pointer"
              >
                <option value="all">সকল প্যাকেজ সাইজ</option>
                <option value="২৫০ গ্রাম">২৫০ গ্রাম</option>
                <option value="৫০০ গ্রাম">৫০০ গ্রাম</option>
                <option value="১ কেজি">১ কেজি</option>
              </select>
            </div>

            {/* Sorting Options */}
            <div className="md:col-span-4 flex items-center gap-2">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="w-full py-2 px-3 text-xs sm:text-sm bg-white border border-gray-200 rounded-xl text-[#252A25] focus:outline-hidden focus:border-[#164B35] cursor-pointer"
              >
                <option value="featured">বাছাইকৃত (Featured)</option>
                <option value="price_asc">মূল্য: কম থেকে বেশি</option>
                <option value="price_desc">মূল্য: বেশি থেকে কম</option>
                <option value="newest">নতুন সংযোজিত</option>
              </select>

              {hasActiveFilters && (
                <button
                  onClick={resetFilters}
                  title="ফিল্টার রিসেট করুন"
                  className="p-2 border border-gray-200 text-gray-600 hover:bg-[#FFF9ED] rounded-xl transition-colors cursor-pointer shrink-0"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Category Chips Bar */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pt-2 border-t border-gray-100">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                selectedCategory === "all"
                  ? "bg-[#164B35] text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-[#E6F0D5]"
              }`}
            >
              সবগুলো ({PRODUCTS.length})
            </button>
            {CATEGORIES.map((cat) => {
              const count = PRODUCTS.filter((p) => p.categorySlug === cat.slug).length;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.slug)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                    selectedCategory === cat.slug
                      ? "bg-[#164B35] text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-[#E6F0D5]"
                  }`}
                >
                  {cat.name} ({count})
                </button>
              );
            })}
          </div>
        </div>

        {/* Product Count Header */}
        <div className="flex items-center justify-between text-xs font-medium text-gray-500 mb-6 px-1">
          <span>মোট {filteredProducts.length} টি পণ্য পাওয়া গেছে</span>
          {hasActiveFilters && (
            <button
              onClick={resetFilters}
              className="text-[#F28C28] hover:underline cursor-pointer"
            >
              সকল ফিল্টার মুছুন
            </button>
          )}
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                navigate={navigate}
              />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-3xl p-12 text-center border border-dashed border-[#164B35]/20 max-w-lg mx-auto my-12">
            <p className="text-base font-bold text-[#164B35] mb-2">
              কোনো পণ্য খুঁজে পাওয়া যায়নি
            </p>
            <p className="text-xs text-gray-500 mb-6">
              আপনার ফিল্টার বা সার্চ শব্দের সাথে মিল রেখে কোনো মধু পাওয়া যায়নি। ফিল্টার রিসেট করে আবার চেষ্টা করুন।
            </p>
            <button
              onClick={resetFilters}
              className="px-6 py-2.5 bg-[#164B35] text-white text-xs font-semibold rounded-full hover:bg-[#103828] transition-colors cursor-pointer"
            >
              সব পণ্য দেখুন
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
