import React from "react";
import { HeroBanner } from "../components/home/HeroBanner";
import { CategorySection } from "../components/home/CategorySection";
import { FeaturedProducts } from "../components/home/FeaturedProducts";
import { WhyChooseUs } from "../components/home/WhyChooseUs";
import { PromotionalBanner } from "../components/home/PromotionalBanner";
import { BestSellingSection } from "../components/home/BestSellingSection";
import { CustomerReviews } from "../components/home/CustomerReviews";
import { AboutSection } from "../components/home/AboutSection";
import { FAQAccordion } from "../components/home/FAQAccordion";
import { NewsletterSection } from "../components/home/NewsletterSection";
import { PageView } from "../types";

interface HomePageProps {
  navigate: (view: PageView) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ navigate }) => {
  return (
    <div className="space-y-0">
      {/* 1. Hero Banner */}
      <HeroBanner navigate={navigate} />

      {/* 2. Shop by Category */}
      <CategorySection navigate={navigate} />

      {/* 3. Featured Products */}
      <FeaturedProducts navigate={navigate} />

      {/* 4. Why Choose Bangali Food */}
      <WhyChooseUs />

      {/* 5. Promotional Banner */}
      <PromotionalBanner navigate={navigate} />

      {/* 6. Best-Selling Products */}
      <BestSellingSection navigate={navigate} />

      {/* 7. Customer Reviews */}
      <CustomerReviews />

      {/* 8. About Bangali Food */}
      <AboutSection navigate={navigate} />

      {/* 9. FAQ Section */}
      <FAQAccordion />

      {/* 10. Newsletter Section */}
      <NewsletterSection />
    </div>
  );
};
