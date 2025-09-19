const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      title: "Send requirement",
      description: "Share your need on WhatsApp — text or voice."
    },
    {
      number: "2", 
      title: "AI + verification",
      description: "Our AI + team fetches verified properties in seconds."
    },
    {
      number: "3",
      title: "Get owner contacts", 
      description: "Receive landlord numbers and start closing deals."
    }
  ];

  return (
    <section className="mt-8">
      <div className="grid md:grid-cols-3 gap-4">
        {steps.map((step) => (
          <div key={step.number} className="bg-card rounded-xl p-6 shadow-card">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold mr-3">
                {step.number}
              </div>
              <h3 className="font-semibold text-foreground">{step.title}</h3>
            </div>
            <p className="text-sm text-muted-foreground">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;