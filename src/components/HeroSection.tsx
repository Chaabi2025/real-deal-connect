import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "919999999999"; // Replace with actual business number
    const message = encodeURIComponent("Hi Chaabi — I'm a broker looking for verified rental listings. Please send me details about your service.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <section className="bg-card rounded-2xl shadow-hero p-8">
      <div className="flex flex-col lg:flex-row gap-8 items-center">
        <div className="flex-1 min-w-0">
          <div className="mb-6">
            <h1 className="text-2xl lg:text-4xl font-bold mb-3 text-foreground">
              Chaabi: Unlock real estate smarter
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Get instant access to verified rental properties & landlord numbers. 
              No more wasted calls. No more fake listings. Just real deals.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-4">
            <Button size="lg" className="bg-gradient-hero hover:opacity-90 transition-smooth">
              Start closing deals
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              onClick={handleWhatsAppClick}
              className="border-primary text-primary hover:bg-primary/5"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Chat on WhatsApp
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground">
            Verified listings • Direct owner numbers • Used by local brokers
          </p>
        </div>
        
        <div className="lg:min-w-[320px] lg:max-w-[400px] w-full">
          <div className="bg-primary/5 rounded-xl p-4 text-center">
            <img 
              src={heroImage} 
              alt="Broker using phone — Chaabi WhatsApp workflow" 
              className="w-full h-auto rounded-lg shadow-card"
              loading="lazy"
            />
            <p className="text-sm text-muted-foreground mt-3">
              Share req. on WhatsApp — get verified owner numbers
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;