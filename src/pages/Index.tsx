import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import PricingPlans from "@/components/PricingPlans";
import LeadForm from "@/components/LeadForm";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-6 py-8 max-w-6xl">
        <div className="mb-6">
          <a href="#" className="text-2xl font-bold text-primary hover:opacity-80 transition-opacity">
            Chaabi
          </a>
        </div>
        
        <HeroSection />
        <HowItWorks />
        <Features />
        <PricingPlans />
        <LeadForm />
        <FAQ />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
