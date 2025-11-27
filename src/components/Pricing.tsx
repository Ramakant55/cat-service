const plans = [
  {
    name: "Classic",
    price: "$599",
    features: ["Up to 50 guests", "3-course menu", "Professional staff"],
    highlight: false,
    gradient: "from-stone-100 to-stone-200",
    badge: "Popular"
  },
  {
    name: "Premium",
    price: "$1299",
    features: ["Up to 150 guests", "5-course menu", "Beverage station"],
    highlight: true,
    gradient: "from-gold/20 to-yellow-100",
    badge: "Best Value"
  },
  {
    name: "Luxe",
    price: "$2499",
    features: ["Up to 300 guests", "Bespoke menu", "Executive chef on-site"],
    highlight: false,
    gradient: "from-pastelGreen/30 to-emerald-100",
    badge: "Premium"
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="mx-auto max-w-7xl px-4">
      <div className="mb-6 md:mb-8 text-center">
        <h2 className="font-display text-2xl md:text-5xl mb-2 md:mb-4 bg-gradient-to-r from-stone-900 to-stone-600 bg-clip-text text-transparent">Pricing</h2>
        <p className="text-stone-600 text-xs md:text-lg">Transparent packages tailored to your event</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((p) => (
          <div key={p.name} className={`relative rounded-3xl border-2 p-8 bg-gradient-to-br ${p.gradient} ${p.highlight ? "border-gold shadow-2xl scale-105" : "border-stone-200 hover:shadow-xl"} transition-all duration-300 hover:-translate-y-1`}>
            {p.highlight && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-gold to-yellow-600 text-white text-xs font-medium rounded-full shadow-lg">
                {p.badge}
              </div>
            )}
            <div className="text-center">
              <h3 className="font-display text-2xl text-stone-900">{p.name}</h3>
              <div className="mt-4 text-5xl font-display bg-gradient-to-r from-gold to-yellow-700 bg-clip-text text-transparent">{p.price}</div>
            </div>
            <ul className="mt-8 space-y-3 text-stone-700">
              {p.features.map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <span className="text-gold text-xl">✓</span> {f}
                </li>
              ))}
            </ul>
            <a href="#booking" className={`mt-8 block text-center px-6 py-3 rounded-full font-medium transition-all ${p.highlight ? "bg-gradient-to-r from-gold to-yellow-600 text-white hover:shadow-lg" : "border-2 border-stone-300 hover:border-gold hover:bg-stone-50"}`}>
              Choose {p.name}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
