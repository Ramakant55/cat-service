export default function CTA() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 md:py-20">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gold via-yellow-600 to-amber-700 p-8 md:p-20 text-center shadow-2xl">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6bTAgMTBjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6bS0xMC0xMGMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHptMCAxMGMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        <div className="relative z-10 space-y-6">
          <h2 className="font-display text-2xl md:text-5xl mb-2 md:mb-4 text-white">
            Ready to Create an Unforgettable Event?
          </h2>
          <p className="text-white/90 text-xs md:text-lg max-w-2xl mx-auto mb-4 md:mb-6">
            Let our culinary experts craft a bespoke menu that will leave your guests talking for years to come.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2 md:pt-4">
            <a href="/booking" className="px-5 sm:px-10 py-2 sm:py-5 text-center rounded-full bg-white text-gold font-bold text-xs sm:text-lg hover:bg-cream hover:scale-105 transition-all shadow-xl">
              Book Consultation
            </a>
            <a href="tel:+1234567890" className="px-5 sm:px-10 py-2 sm:py-5 text-center rounded-full border-2 border-white text-white font-bold text-xs sm:text-lg hover:bg-white/10 transition-all">
              📞 Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
