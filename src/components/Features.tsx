import { CheckCircle, Phone, MessageSquare } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: CheckCircle,
      title: "Fresh, verified listings",
      description: "Listings verified to reduce wasted calls."
    },
    {
      icon: Phone,
      title: "Direct owner numbers", 
      description: "No middlemen — speak directly to landlords."
    },
    {
      icon: MessageSquare,
      title: "WhatsApp workflow",
      description: "Text or voice — results delivered to your chat."
    }
  ];

  return (
    <section className="mt-6">
      <div className="grid md:grid-cols-3 gap-4">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <div key={feature.title} className="bg-card rounded-xl p-5 shadow-card">
              <div className="flex items-center mb-3">
                <Icon className="w-5 h-5 text-primary mr-3" />
                <h3 className="font-semibold text-foreground">{feature.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Features;