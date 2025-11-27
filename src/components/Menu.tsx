"use client";

const categories = [
  { icon: "🥗", title: "Salads & Starters", desc: "Seasonal greens, artisan dressings", color: "from-green-400 to-emerald-500" },
  { icon: "☕", title: "Beverages & Bar", desc: "Signature mocktails and premium brews", color: "from-amber-400 to-orange-500" },
  { icon: "⭐", title: "Signature Mains", desc: "Chef-curated gourmet entrées", color: "from-yellow-400 to-gold" },
];

export default function Menu() {
  return (
    <section id="menu" className="mx-auto max-w-7xl px-4">
      <div className="mb-6 md:mb-8 text-center">
        <h2 className="font-display text-2xl md:text-5xl mb-2 md:mb-4 bg-gradient-to-r from-stone-900 to-stone-600 bg-clip-text text-transparent">Our Specialties</h2>
        <p className="text-stone-600 text-xs md:text-lg">Delicious dishes for every palate</p>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {categories.map((c, i) => (
          <div key={i} className="group relative rounded-3xl bg-white border border-stone-200 p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${c.color} flex items-center justify-center text-white text-3xl shadow-lg group-hover:scale-110 transition-transform`}>
              {c.icon}
            </div>
            <h3 className="mt-6 font-display text-2xl text-stone-900">{c.title}</h3>
            <p className="mt-2 text-stone-600">{c.desc}</p>
            <div className="mt-4 h-1 w-0 group-hover:w-12 bg-gradient-to-r from-gold to-pastelGreen transition-all duration-300 rounded-full"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
