import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { GeoTrustSection } from "@/components/GeoTrustSection";
import { WhatWeDoSection } from "@/components/WhatWeDoSection";
import { ServicesSection } from "@/components/ServicesSection";
import { WhyChooseUsSection } from "@/components/WhyChooseUsSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { ResultsSection } from "@/components/ResultsSection";
import { IndustriesSection } from "@/components/IndustriesSection";
import { ServiceAreasSection } from "@/components/ServiceAreasSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { CtaBannerSection } from "@/components/CtaBannerSection";
import { LeadForm } from "@/components/LeadForm";
import { Footer } from "@/components/Footer";

// Integration
import { PromoPopup } from "@/components/PromoPopup";
import { Chatbot } from "@/components/Chatbot";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <HeroSection />
      <GeoTrustSection />
      <WhatWeDoSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <HowItWorksSection />
      <ResultsSection />
      <IndustriesSection />
      <ServiceAreasSection />
      <TestimonialsSection />
      <CtaBannerSection />
      <LeadForm />
      <Footer />
      
      {/* Floating Modals */}
      <PromoPopup />
      <Chatbot />
    </div>
  );
}
