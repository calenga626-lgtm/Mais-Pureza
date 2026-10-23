import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ScrollVideoShowcase } from './components/ScrollVideoShowcase';
import { PackagesSection } from './components/PackagesSection';
import { ServicesCatalog } from './components/ServicesCatalog';
import { CustomQuoteBuilder, CartItem } from './components/CustomQuoteBuilder';
import { BeforeAfterSection } from './components/BeforeAfterSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { FlyerModal } from './components/FlyerModal';
import { ProposalModal } from './components/ProposalModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { IndividualService } from './data/servicesData';

export default function App() {
  // Cart state for the custom quote builder
  const [cartItems, setCartItems] = useState<CartItem[]>([
    // Start with a friendly realistic sample item
    {
      id: 'sofa-3',
      name: 'Sofá de 3 Lugares',
      priceText: '20.000 Kz',
      unitPrice: 20000,
      quantity: 1,
      category: 'Sofás'
    }
  ]);

  // Flyer viewer modal
  const [flyerModal, setFlyerModal] = useState<{
    isOpen: boolean;
    imageUrl: string | null;
    title: string | null;
  }>({
    isOpen: false,
    imageUrl: null,
    title: null
  });

  // Commercial Proposal Modal
  const [isProposalOpen, setIsProposalOpen] = useState(false);

  const handleOpenFlyer = (imageUrl: string, title: string) => {
    setFlyerModal({
      isOpen: true,
      imageUrl,
      title
    });
  };

  const handleCloseFlyer = () => {
    setFlyerModal((prev) => ({ ...prev, isOpen: false }));
  };

  const handleAddToCart = (service: IndividualService, categoryTitle: string) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === service.id);
      if (existing) {
        return prev.map((item) =>
          item.id === service.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [
        ...prev,
        {
          id: service.id,
          name: service.name,
          priceText: service.price,
          unitPrice: service.numericMinPrice,
          quantity: 1,
          category: categoryTitle
        }
      ];
    });

    // Smooth scroll to quote builder so customer sees their item was added!
    const el = document.getElementById('orcamento');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  // Map of item IDs to quantities for quick lookup in catalog
  const cartItemIds = cartItems.reduce<Record<string, number>>((acc, item) => {
    acc[item.id] = item.quantity;
    return acc;
  }, {});

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col selection:bg-sky-500 selection:text-white">
      {/* Top Bar Navigation */}
      <Navbar
        onOpenProposal={() => setIsProposalOpen(true)}
        onOpenCart={() => scrollToSection('orcamento')}
        cartCount={totalCartCount}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOpenOffer={() => scrollToSection('ofertas')}
          onExploreServices={() => scrollToSection('servicos')}
        />

        {/* Promotional Packages (Extracted from client's WhatsApp Flyers) */}
        <PackagesSection onViewFlyer={handleOpenFlyer} />

        {/* Scroll-Driven Video Showcase (Interactive Scroll Motion) */}
        <ScrollVideoShowcase />

        {/* Individual Services Catalog (Tabela Oficial) */}
        <ServicesCatalog
          onViewFlyer={handleOpenFlyer}
          onAddToCart={handleAddToCart}
          cartItemIds={cartItemIds}
        />

        {/* Before and After Interactive Slider */}
        <BeforeAfterSection />

        {/* Interactive Custom Quote Builder with live Kwanzas calculation */}
        <CustomQuoteBuilder
          items={cartItems}
          onUpdateQuantity={handleUpdateQuantity}
          onRemoveItem={handleRemoveItem}
          onClearCart={handleClearCart}
        />

        {/* Customer Testimonials from Luanda */}
        <TestimonialsSection />

        {/* Frequently Asked Questions */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer onOpenProposal={() => setIsProposalOpen(true)} />

      {/* Floating WhatsApp Quick Action Button */}
      <FloatingWhatsApp />

      {/* Modal to view original high-resolution flyers */}
      <FlyerModal
        isOpen={flyerModal.isOpen}
        onClose={handleCloseFlyer}
        imageUrl={flyerModal.imageUrl}
        title={flyerModal.title}
      />

      {/* Commercial Proposal Presentation Modal for Kátia Catumbela */}
      <ProposalModal
        isOpen={isProposalOpen}
        onClose={() => setIsProposalOpen(false)}
      />
    </div>
  );
}
