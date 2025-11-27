const testimonials = [
  { name: "Aarav S.", text: "Absolutely world-class service. Every detail was flawless.", rating: 5 },
  { name: "Isha M.", text: "Our wedding dinner was unforgettable. Elegant and delicious.", rating: 5 },
  { name: "Rahul K.", text: "Professional team, premium ingredients, stunning presentation.", rating: 5 },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="mx-auto max-w-7xl px-4">
      <div className="mb-6 md:mb-8 text-center">
        <h2 className="font-display text-2xl md:text-5xl mb-2 md:mb-4 bg-gradient-to-r from-stone-900 to-stone-600 bg-clip-text text-transparent">Testimonials</h2>
        <p className="text-stone-600 text-xs md:text-lg">What our clients say</p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <div key={t.name} className="rounded-3xl bg-gradient-to-br from-white to-stone-50 border-2 border-stone-200 p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="flex gap-1 mb-4">
              {[...Array(t.rating)].map((_, i) => (
                <span key={i} className="text-gold text-xl">⭐</span>
              ))}
            </div>
            <p className="text-stone-700 text-lg leading-relaxed italic">"{t.text}"</p>
            <div className="mt-6 pt-6 border-t border-stone-200">
              <div className="font-display text-lg text-stone-900">{t.name}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
