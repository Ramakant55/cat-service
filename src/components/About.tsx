import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-4 py-8 md:py-16">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="relative h-[400px] md:h-[600px] group">
          <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-pastelGreen/20 rounded-3xl blur-xl"></div>
          <Image
            src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1200&auto=format&fit=crop"
            alt="Chef preparing food"
            fill
            className="object-cover rounded-3xl shadow-2xl relative z-10"
          />
        </div>
        <div className="space-y-6">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-gold/20 to-pastelGreen/30 rounded-full text-sm font-medium text-stone-700">
            ✨ Since 2010
          </div>
          <h2 className="font-display text-5xl md:text-6xl bg-gradient-to-r from-stone-900 to-stone-600 bg-clip-text text-transparent">
            Crafting Memories Through Culinary Excellence
          </h2>
          <p className="text-stone-600 text-lg leading-relaxed">
            With over a decade of experience, we've perfected the art of creating unforgettable dining experiences. Our award-winning chefs combine traditional techniques with innovative flavors to deliver exceptional cuisine.
          </p>
          <div className="grid grid-cols-3 gap-6 pt-6">
            <div className="text-center">
              <div className="text-4xl font-display bg-gradient-to-r from-gold to-yellow-700 bg-clip-text text-transparent">500+</div>
              <div className="text-stone-600 text-sm mt-2">Events Catered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-display bg-gradient-to-r from-gold to-yellow-700 bg-clip-text text-transparent">50+</div>
              <div className="text-stone-600 text-sm mt-2">Menu Items</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-display bg-gradient-to-r from-gold to-yellow-700 bg-clip-text text-transparent">15+</div>
              <div className="text-stone-600 text-sm mt-2">Awards Won</div>
            </div>
          </div>
          <div className="flex gap-4 pt-4">
            <a href="#menu" className="px-8 py-4 rounded-full bg-gradient-to-r from-gold to-yellow-600 text-white font-medium hover:shadow-lg hover:scale-105 transition-all">
              View Our Story
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
