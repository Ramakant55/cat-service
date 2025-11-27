import Image from "next/image";

const menuCategories = [
  {
    id: "wedding-menu",
    icon: "💍",
    title: "Wedding Catering",
    desc: "Create magical moments with our elegant wedding menus. From intimate ceremonies to grand receptions.",
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&auto=format&fit=crop",
    features: ["Custom Menu Design", "Cake & Desserts", "Full Bar Service", "Elegant Presentation"]
  },
  {
    id: "birthday-menu",
    icon: "🎂",
    title: "Birthday Catering",
    desc: "Make birthdays unforgettable with delicious food and stunning presentation for all ages.",
    image: "https://images.unsplash.com/photo-1558636508-e0db3814bd1d?w=800&auto=format&fit=crop",
    features: ["Kids & Adult Menus", "Birthday Cakes", "Themed Decorations", "Party Packages"]
  },
  {
    id: "corporate-menu",
    icon: "🏢",
    title: "Corporate Catering",
    desc: "Professional catering for business meetings, conferences, and corporate events.",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&auto=format&fit=crop",
    features: ["Breakfast & Lunch", "Coffee Breaks", "Dietary Options", "On-time Delivery"]
  },
  {
    id: "traditional-menu",
    icon: "🍛",
    title: "Traditional Catering",
    desc: "Authentic traditional cuisine prepared with time-honored recipes and premium ingredients.",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&auto=format&fit=crop",
    features: ["Regional Specialties", "Authentic Recipes", "Traditional Setup", "Cultural Expertise"]
  },
];

export default function MenuCategories() {
  return (
    <section id="menu-categories" className="mx-auto max-w-7xl px-4 py-8 md:py-12">
      <div className="mb-6 md:mb-8 text-center">
        <h2 className="font-display text-2xl md:text-5xl mb-2 md:mb-4 bg-gradient-to-r from-stone-900 to-stone-600 bg-clip-text text-transparent">
          Menu Categories
        </h2>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 justify-center mx-auto max-w-8xl">
        {menuCategories.map((category, i) => (
          <div 
            key={category.id} 
            id={category.id}
            className="group relative rounded-3xl overflow-hidden bg-white border-2 border-stone-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
          >
            <div className="relative h-64 overflow-hidden">
              <Image
                src={category.image}
                alt={category.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute bottom-4 left-6 right-6">
                <div className="text-5xl mb-2">{category.icon}</div>
                <h3 className="font-display text-2xl text-white">{category.title}</h3>
              </div>
            </div>
            
            <div className="p-6 md:p-8">
              <p className="text-stone-600 leading-relaxed mb-6">{category.desc}</p>
              
              <div className="grid grid-cols-2 gap-3">
                {category.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-stone-700">
                    <span className="text-gold">✓</span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              
              <a 
                href="/booking" 
                className="mt-6 block w-full text-center px-6 py-3 rounded-full border-2 border-gold text-gold font-medium hover:bg-gold hover:text-white transition-all"
              >
                Request Menu
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
