"use client";

const steps = [
  {
    number: "01",
    title: "Consultation",
    desc: "Share your vision and we'll create a custom proposal tailored to your event.",
  },
  {
    number: "02",
    title: "Menu Design",
    desc: "Our chefs craft a bespoke menu featuring seasonal and premium ingredients.",
  },
  {
    number: "03",
    title: "Tasting Session",
    desc: "Experience our dishes firsthand and make any adjustments you desire.",
  },
  {
    number: "04",
    title: "Event Execution",
    desc: "Sit back and enjoy as we deliver a flawless dining experience.",
  },
];

export default function Process() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 md:py-20 bg-gradient-to-br from-stone-50 to-cream rounded-3xl">
      <div className="mb-6 md:mb-8 text-center">
        <h2 className="font-display text-2xl md:text-5xl mb-2 md:mb-4 bg-gradient-to-r from-stone-900 to-stone-600 bg-clip-text text-transparent">
          How It Works
        </h2>
        <p className="text-stone-600 text-xs md:text-lg">Four simple steps to an unforgettable event</p>
      </div>
      <div className="grid md:grid-cols-4 gap-8">
        {steps.map((step, i) => (
          <div key={i} className="relative group">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-gold to-yellow-600 text-white font-display text-2xl shadow-xl group-hover:scale-110 transition-transform">
                {step.number}
              </div>
              <h3 className="mt-6 font-display text-xl text-stone-900">{step.title}</h3>
              <p className="mt-3 text-stone-600 leading-relaxed">{step.desc}</p>
            </div>
            {i < steps.length - 1 && (
              <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-gold/50 to-transparent"></div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
