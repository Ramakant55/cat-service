"use client";
import Link from "next/link";
import { FiPhone, FiMenu, FiChevronDown } from "react-icons/fi";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? "backdrop-blur-xl bg-white/80 shadow-lg border-b border-white/20" 
        : "backdrop-blur-md bg-cream/60 border-b border-stone-200"
    }`}>
      <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
        <Link href="#" className="font-display text-2xl tracking-wide group">
          <span className="text-stone-900 group-hover:text-gold transition-colors">Catering</span>{" "}
          <span className="text-gold group-hover:scale-110 inline-block transition-transform">Luxe</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#about" className="hover:text-gold transition-colors relative group">
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-gold to-yellow-600 group-hover:w-full transition-all"></span>
          </a>
          <a href="#services" className="hover:text-gold transition-colors relative group">
            Services
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-gold to-yellow-600 group-hover:w-full transition-all"></span>
          </a>
          <div className="relative group" onMouseEnter={() => setMenuOpen(true)} onMouseLeave={() => setMenuOpen(false)}>
            <button className="hover:text-gold transition-colors relative flex items-center gap-1">
              Menu
              <FiChevronDown className={`transition-transform ${menuOpen ? 'rotate-180' : ''}`} />
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-gold to-yellow-600 group-hover:w-full transition-all"></span>
            </button>
            {menuOpen && (
              <div className="absolute top-full left-0 mt-2 w-56 bg-white/95 backdrop-blur-xl border-2 border-stone-200 rounded-2xl shadow-2xl py-2 z-50">
                <a href="#wedding-menu" className="block px-6 py-3 hover:bg-gold/10 hover:text-gold transition-colors">
                  💍 Wedding Catering
                </a>
                <a href="#birthday-menu" className="block px-6 py-3 hover:bg-gold/10 hover:text-gold transition-colors">
                  🎂 Birthday Catering
                </a>
                <a href="#corporate-menu" className="block px-6 py-3 hover:bg-gold/10 hover:text-gold transition-colors">
                  🏢 Corporate Catering
                </a>
                <a href="#traditional-menu" className="block px-6 py-3 hover:bg-gold/10 hover:text-gold transition-colors">
                  🍴 Traditional Catering
                </a>
              </div>
            )}
          </div>
          <a href="#specialties" className="hover:text-gold transition-colors relative group">
            Specialties
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-gold to-yellow-600 group-hover:w-full transition-all"></span>
          </a>
          <a href="#gallery" className="hover:text-gold transition-colors relative group">
            Gallery
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-gold to-yellow-600 group-hover:w-full transition-all"></span>
          </a>
          <a href="#pricing" className="hover:text-gold transition-colors relative group">
            Pricing
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-gold to-yellow-600 group-hover:w-full transition-all"></span>
          </a>
          <a href="#testimonials" className="hover:text-gold transition-colors relative group">
            Testimonials
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-gold to-yellow-600 group-hover:w-full transition-all"></span>
          </a>
          <a href="#booking" className="px-6 py-3 rounded-full bg-gradient-to-r from-gold to-yellow-600 text-white hover:shadow-xl hover:scale-105 transition-all">
            Book Now
          </a>
          <a href="tel:+1234567890" className="flex items-center gap-2 text-stone-700 hover:text-gold transition-colors">
            <FiPhone className="animate-pulse" /> +1 234 567 890
          </a>
        </nav>
        <button className="md:hidden p-3 rounded-full border-2 border-stone-300 hover:border-gold hover:bg-gold/10 transition-all" onClick={()=>setOpen(v=>!v)}>
          <FiMenu className="text-lg" />
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-stone-200 px-4 pb-4 pt-4 backdrop-blur-xl bg-white/90">
          <div className="flex flex-col gap-4 text-sm">
            <a href="#about" className="hover:text-gold transition-colors py-2">About</a>
            <a href="#services" className="hover:text-gold transition-colors py-2">Services</a>
            <a href="#menu" className="hover:text-gold transition-colors py-2">Menu</a>
            <a href="#specialties" className="hover:text-gold transition-colors py-2">Specialties</a>
            <a href="#gallery" className="hover:text-gold transition-colors py-2">Gallery</a>
            <a href="#pricing" className="hover:text-gold transition-colors py-2">Pricing</a>
            <a href="#testimonials" className="hover:text-gold transition-colors py-2">Testimonials</a>
            <a href="#booking" className="px-4 py-3 rounded-full bg-gradient-to-r from-gold to-yellow-600 text-white text-center hover:shadow-lg transition-all">
              Book Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
