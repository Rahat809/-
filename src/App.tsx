import React, { useState, useEffect } from 'react';
import { CartProvider } from './context/CartContext';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { CartDrawer } from './components/cart/CartDrawer';
import { FloatingWhatsApp } from './components/common/FloatingWhatsApp';

import { HomePage } from './pages/HomePage';
import { ProductsPage } from './pages/ProductsPage';
import { ProductDetailsPage } from './pages/ProductDetailsPage';
import { CartPage } from './pages/CartPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { PolicyPage } from './pages/PolicyPage';
import { PageView } from './types';

export const AppContent: React.FC = () => {
  const [currentView, setCurrentView] = useState<PageView>({ type: 'home' });

  // Scroll to top on navigation change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentView]);

  const handleNavigate = (view: PageView) => {
    setCurrentView(view);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFF9ED] text-[#252A25] font-sans antialiased selection:bg-[#F28C28] selection:text-white">
      {/* Global Header */}
      <Header 
        currentView={currentView}
        navigate={handleNavigate}
      />

      {/* Main Content Area based on current view */}
      <main className="flex-1">
        {currentView.type === 'home' && (
          <HomePage 
            navigate={handleNavigate}
          />
        )}

        {currentView.type === 'products' && (
          <ProductsPage 
            initialCategorySlug={currentView.categorySlug}
            navigate={handleNavigate}
          />
        )}

        {currentView.type === 'product_detail' && (
          <ProductDetailsPage 
            slug={currentView.slug}
            navigate={handleNavigate}
          />
        )}

        {currentView.type === 'cart' && (
          <CartPage 
            navigate={handleNavigate}
          />
        )}

        {currentView.type === 'checkout' && (
          <CheckoutPage 
            navigate={handleNavigate}
          />
        )}

        {currentView.type === 'about' && (
          <AboutPage 
            navigate={handleNavigate}
          />
        )}

        {currentView.type === 'contact' && (
          <ContactPage 
            navigate={handleNavigate}
          />
        )}

        {currentView.type === 'policy' && (
          <PolicyPage 
            initialTab={
              currentView.policyType === 'delivery' ? 'delivery' :
              currentView.policyType === 'refund' ? 'returns' :
              currentView.policyType === 'privacy' ? 'privacy' : 'terms'
            }
            navigate={handleNavigate}
          />
        )}
      </main>

      {/* Global Footer */}
      <Footer navigate={handleNavigate} />

      {/* Slide-over Cart Drawer */}
      <CartDrawer navigate={handleNavigate} />

      {/* Floating 24/7 WhatsApp Assistance Button */}
      <FloatingWhatsApp />
    </div>
  );
};

export default function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}
