import Image from "next/image";

const images = [
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&auto=format&fit=crop",
];

export default function Gallery() {
  return (
    <section id="gallery" className="mx-auto max-w-7xl px-4">
      <div className="mb-8 md:mb-12 text-center">
        <h2 className="font-display text-4xl md:text-5xl mb-4 bg-gradient-to-r from-stone-900 to-stone-600 bg-clip-text text-transparent">Gallery</h2>
        <p className="text-stone-600 text-lg">A glimpse into our culinary artistry</p>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((src, i) => (
          <div key={i} className="group relative h-64 md:h-72 overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <Image src={src} alt={`Gallery ${i+1}`} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
