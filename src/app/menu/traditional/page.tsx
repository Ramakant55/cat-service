import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function TraditionalMenuPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20 pb-16">
        <section className="mx-auto max-w-7xl px-4 py-8 md:py-12">
          <div className="mb-6 md:mb-8 text-center">
            <h2 className="font-display text-2xl md:text-5xl mb-2 md:mb-4 bg-gradient-to-r from-stone-900 to-stone-600 bg-clip-text text-transparent">
              🍛 Traditional Catering
            </h2>
            <p className="text-stone-600 text-xs md:text-lg">Authentic traditional cuisine with premium ingredients</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative rounded-3xl overflow-hidden bg-white border-2 border-stone-200 shadow-xl">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&auto=format&fit=crop"
                  alt="Traditional Catering"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute bottom-4 left-6 right-6">
                  <div className="text-5xl mb-2">🍛</div>
                  <h3 className="font-display text-2xl text-white">Traditional Catering</h3>
                </div>
              </div>
              
              <div className="p-6 md:p-8">
                <p className="text-stone-600 leading-relaxed mb-6">Authentic traditional cuisine prepared with time-honored recipes and premium ingredients.</p>
                
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center gap-2 text-xs text-stone-700">
                    <span className="text-gold">✓</span>
                    <span>Regional Specialties</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-stone-700">
                    <span className="text-gold">✓</span>
                    <span>Authentic Recipes</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-stone-700">
                    <span className="text-gold">✓</span>
                    <span>Traditional Setup</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-stone-700">
                    <span className="text-gold">✓</span>
                    <span>Cultural Expertise</span>
                  </div>
                </div>
                
                <a 
                  href="/booking" 
                  className="mt-6 block w-full text-center px-6 py-3 rounded-full bg-gradient-to-r from-gold to-yellow-600 text-white font-medium hover:shadow-lg hover:scale-105 transition-all"
                >
                  Request Menu
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
