"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Hero() {
  const [text, setText] = useState("");
  const [showBadge, setShowBadge] = useState(false);
  const fullText = "Modern, Elegant, and Luxurious Catering";
  
  useEffect(() => {
    setShowBadge(true);
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 80);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="pt-8 md:pt-16 pb-12">
      <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <div className={`inline-block px-4 py-2 bg-gradient-to-r from-gold/20 to-pastelGreen/30 rounded-full text-sm font-medium text-stone-700 transition-all duration-700 ${
            showBadge ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}>
            ✨ Premium Catering Services
          </div>
          <h1 className="font-display text-5xl md:text-6xl leading-tight bg-gradient-to-r from-stone-900 via-stone-700 to-stone-900 bg-clip-text text-transparent min-h-[120px] md:min-h-[180px]">
            {text}
            <span className="animate-pulse">|</span>
          </h1>
          <p className="text-stone-600 text-lg leading-relaxed animate-fade-in-up" style={{ animationDelay: "2s" }}>
            Full-service catering for weddings, corporate events, and private dining. Premium ingredients, bespoke menus, impeccable service.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: "2.5s" }}>
            <a href="#booking" className="px-8 py-4 rounded-full bg-gradient-to-r from-gold to-yellow-600 text-white font-medium hover:shadow-lg hover:scale-105 transition-all">
              Book a Tasting
            </a>
            <a href="#menu" className="px-8 py-4 rounded-full border-2 border-stone-300 hover:bg-stone-50 hover:border-gold transition-all font-medium">
              Explore Menu
            </a>
          </div>
        </div>
        <div className="relative h-[360px] md:h-[500px] group animate-fade-in-up" style={{ animationDelay: "1s" }}>
          <div className="absolute inset-0 bg-gradient-to-br from-gold/30 to-pastelGreen/30 rounded-3xl blur-2xl group-hover:blur-3xl transition-all"></div>
          <Image
            src="https://images.unsplash.com/photo-1555244162-803834f70033?w=1200&auto=format&fit=crop"
            alt="Gourmet catering"
            fill
            className="object-cover rounded-3xl shadow-2xl relative z-10"
            priority
          />
        </div>
      </div>
    </section>
  );
}
