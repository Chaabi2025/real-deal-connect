import { Shield, Clock, TrendingUp } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      question: "How quickly do I get owner contacts?",
      answer: "Usually within minutes via WhatsApp; peak times may take up to a few hours."
    },
    {
      question: "Do you charge commission or brokerage?", 
      answer: "No. Chaabi provides owner contact numbers — commission terms are between broker and owner."
    },
    {
      question: "How fresh are the listings?",
      answer: "Listings are verified regularly; numbers shown with each plan indicate verified contacts provided."
    }
  ];

  const trustFeatures = [
    {
      icon: Shield,
      title: "Verified owners",
      description: "All owner contacts are verified"
    },
    {
      icon: Clock,
      title: "Quick delivery", 
      description: "Get listings within minutes"
    },
    {
      icon: TrendingUp,
      title: "Higher success rate",
      description: "Verified listings mean more closures"
    }
  ];

  return (
    <section className="mt-6">
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-card rounded-xl p-6 shadow-card">
          <h3 className="text-lg font-semibold mb-4 text-foreground">
            Frequently asked questions
          </h3>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index}>
                <h4 className="font-medium text-sm text-foreground mb-1">
                  Q: {faq.question}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-card rounded-xl p-6 shadow-card">
          <h3 className="text-lg font-semibold mb-4 text-foreground">
            Trusted by local brokers
          </h3>
          <div className="space-y-4">
            {trustFeatures.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title} className="flex items-center gap-3">
                  <Icon className="w-5 h-5 text-primary flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-sm text-foreground">
                      {feature.title}
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-4 p-3 bg-primary/5 rounded-lg">
            <p className="text-sm font-medium text-primary text-center">
              Verified listings • Verified owners
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;