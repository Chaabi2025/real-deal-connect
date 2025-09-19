const PricingPlans = () => {
  const plans = [
    {
      title: "Monthly",
      price: "₹4,999",
      badge: null,
      features: [
        "Unlimited property searches",
        "50 verified landlord phone numbers"
      ]
    },
    {
      title: "Quarterly", 
      price: "₹10,500",
      badge: "Save 30%",
      features: [
        "Unlimited property searches",
        "150 verified landlord phone numbers"
      ]
    }
  ];

  return (
    <section className="mt-6">
      <div className="grid md:grid-cols-2 gap-4">
        {plans.map((plan) => (
          <div key={plan.title} className="bg-card rounded-xl p-6 shadow-card">
            <div className="mb-4">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-xl font-bold text-foreground">
                  {plan.title} — {plan.price}
                </h3>
                {plan.badge && (
                  <span className="bg-accent text-accent-foreground text-xs px-2 py-1 rounded-md font-semibold">
                    {plan.badge}
                  </span>
                )}
              </div>
            </div>
            <ul className="space-y-2">
              {plan.features.map((feature, index) => (
                <li key={index} className="text-sm text-muted-foreground flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingPlans;