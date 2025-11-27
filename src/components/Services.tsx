"use client";

const services = [
  {
    icon: "💍",
    title: "Wedding Catering",
    desc: "Make your special day extraordinary with our bespoke wedding menus and elegant presentation.",
    gradient: "from-pink-400 to-rose-500"
  },
  {
    icon: "🏢",
    title: "Corporate Events",
    desc: "Impress your clients and colleagues with professional catering for meetings and conferences.",
    gradient: "from-blue-400 to-indigo-500"
  },
  {
    icon: "🎉",
    title: "Private Parties",
    desc: "Celebrate in style with customized menus for birthdays, anniversaries, and special occasions.",
    gradient: "from-purple-400 to-violet-500"
  },
  {
    icon: "🍽️",
    title: "Fine Dining Experience",
    desc: "Bring Michelin-star quality dining to your home with our private chef services.",
    gradient: "from-amber-400 to-orange-500"
  },
];

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-4 py-12 md:py-20 bg-gradient-to-b from-cream to-white rounded-3xl">
      <div className="mb-6 md:mb-8 text-center">
        <h2 className="font-display text-2xl md:text-5xl mb-2 md:mb-4 bg-gradient-to-r from-stone-900 to-stone-600 bg-clip-text text-transparent">
          Our Services
        </h2>
        <p className="text-stone-600 text-xs md:text-lg">Exceptional catering for every occasion</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s, i) => (
          <div
            key={i}
            className="group relative rounded-3xl bg-white border-2 border-stone-200 p-8 hover:shadow-2xl hover:-translate-y-3 transition-all duration-300"
          >
            <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${s.gradient} flex items-center justify-center text-4xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all`}>
              {s.icon}
            </div>
            <h3 className="mt-6 font-display text-2xl text-stone-900">{s.title}</h3>
            <p className="mt-3 text-stone-600 leading-relaxed">{s.desc}</p>
            <div className="mt-6 flex items-center gap-2 text-gold font-medium group-hover:gap-4 transition-all">
              Learn More <span>→</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
