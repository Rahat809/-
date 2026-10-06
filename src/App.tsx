/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { ProductHighlight } from "./components/ProductHighlight";
import { AboutUs } from "./components/AboutUs";
import { HoneyBenefits } from "./components/HoneyBenefits";
import { CustomerReviews } from "./components/CustomerReviews";
import { OrderCTA } from "./components/OrderCTA";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0a0d0b] text-gray-100 selection:bg-orange-500/30 selection:text-orange-200 font-['Hind_Siliguri',sans-serif]">
      {/* 1. Header / Navbar */}
      <Navbar />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Why Choose Us */}
        <WhyChooseUs />

        {/* 4. Product Highlight */}
        <ProductHighlight />

        {/* 5. About Us */}
        <AboutUs />

        {/* 6. Honey Benefits */}
        <HoneyBenefits />

        {/* 7. Customer Reviews */}
        <CustomerReviews />

        {/* 8. Order / CTA Section */}
        <OrderCTA />

        {/* 9. Contact Section */}
        <ContactSection />
      </main>

      {/* 10. Footer */}
      <Footer />

      {/* 11. Floating WhatsApp Button */}
      <FloatingWhatsApp />
    </div>
  );
}
