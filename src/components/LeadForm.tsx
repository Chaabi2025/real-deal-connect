import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const LeadForm = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    agency: "",
    city: "",
    whatsapp: "",
    consent: false
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleConsentChange = (checked: boolean) => {
    setFormData(prev => ({ ...prev, consent: checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consent) {
      toast({
        title: "Consent required",
        description: "Please consent to receive WhatsApp messages.",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Success!",
      description: "We'll contact you on WhatsApp within minutes.",
    });
    
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
  };

  const handleQuickWhatsApp = () => {
    const phoneNumber = "919999999999"; // Replace with actual business number
    const message = encodeURIComponent(
      `Hi Chaabi — I'm ${formData.fullname || '[Name]'}, broker at ${formData.agency || '[Agency]'}. Looking for verified listings in ${formData.city || '[City]'}. Please send verified listings & owner contacts.`
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <section className="mt-6">
      <form onSubmit={handleSubmit} className="bg-card rounded-xl p-6 shadow-card">
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div>
            <Label htmlFor="fullname" className="text-sm text-muted-foreground mb-2 block">
              Full name *
            </Label>
            <Input
              id="fullname"
              name="fullname"
              value={formData.fullname}
              onChange={handleInputChange}
              placeholder="Rahul Mehra"
              required
              className="mb-3"
            />
          </div>
          
          <div>
            <Label htmlFor="agency" className="text-sm text-muted-foreground mb-2 block">
              Agency
            </Label>
            <Input
              id="agency"
              name="agency"
              value={formData.agency}
              onChange={handleInputChange}
              placeholder="My Realty Co."
              className="mb-3"
            />
          </div>
          
          <div>
            <Label htmlFor="city" className="text-sm text-muted-foreground mb-2 block">
              City
            </Label>
            <Input
              id="city"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              placeholder="Mumbai"
              className="mb-3"
            />
          </div>
          
          <div>
            <Label htmlFor="whatsapp" className="text-sm text-muted-foreground mb-2 block">
              WhatsApp number *
            </Label>
            <Input
              id="whatsapp"
              name="whatsapp"
              type="tel"
              value={formData.whatsapp}
              onChange={handleInputChange}
              placeholder="+91 9XXXXXXXXX"
              required
              className="mb-3"
            />
          </div>
        </div>

        <div className="flex items-center space-x-2 mb-4">
          <Checkbox
            id="consent"
            checked={formData.consent}
            onCheckedChange={handleConsentChange}
            required
          />
          <Label htmlFor="consent" className="text-sm text-muted-foreground">
            I consent to receive WhatsApp messages about listings and offers.
          </Label>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <Button type="submit" className="bg-gradient-hero hover:opacity-90 transition-smooth">
            Subscribe & Get Leads
          </Button>
          <Button 
            type="button"
            variant="outline" 
            onClick={handleQuickWhatsApp}
            className="border-primary text-primary hover:bg-primary/5"
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            Quick WhatsApp Setup
          </Button>
        </div>

        <p className="text-xs text-muted-foreground mt-3">
          We only share your details with property owners for lead fulfilment. No spam — unsubscribe anytime.
        </p>
      </form>
    </section>
  );
};

export default LeadForm;