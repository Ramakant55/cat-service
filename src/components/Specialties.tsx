import Image from "next/image";

const specialties = [
  {
    name: "Truffle Risotto",
    chef: "Chef Michael",
    price: "$45",
    image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=800&auto=format&fit=crop",
  },
  {
    name: "Wagyu Beef Tenderloin",
    chef: "Chef Sarah",
    price: "$85",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&auto=format&fit=crop",
  },
  {
    name: "Lobster Thermidor",
    chef: "Chef Antonio",
    price: "$75",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&auto=format&fit=crop",
  },
  {
    name: "Artisan Dessert Platter",
    chef: "Chef Emma",
    price: "$35",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&auto=format&fit=crop",
  },
];

export default function Specialties() {
  return (
    <section id="specialties" className="mx-auto max-w-7xl px-4 py-12 md:py-20">
      <div className="mb-6 md:mb-8 text-center">
        <h2 className="font-display text-2xl md:text-5xl mb-2 md:mb-4 bg-gradient-to-r from-stone-900 to-stone-600 bg-clip-text text-transparent">
          Chef's Signature Dishes
        </h2>
        <p className="text-stone-600 text-xs md:text-lg">Handcrafted by our award-winning culinary team</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {specialties.map((dish, i) => (
          <div key={i} className="group relative rounded-3xl overflow-hidden bg-white border-2 border-stone-200 hover:shadow-2xl transition-all duration-300">
            <div className="relative h-64 overflow-hidden">
              <Image
                src={dish.image}
                alt={dish.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute top-4 right-4 px-4 py-2 bg-gradient-to-r from-gold to-yellow-600 text-white font-bold rounded-full shadow-lg">
                {dish.price}
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-display text-xl text-stone-900">{dish.name}</h3>
              <p className="text-stone-600 text-xs mt-1">by {dish.chef}</p>
              <button className="mt-4 w-full px-6 py-3 rounded-full border-2 border-gold text-gold font-medium hover:bg-gold hover:text-white transition-all">
                Add to Menu
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
