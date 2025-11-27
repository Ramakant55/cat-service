"use client";
import Link from "next/link";
import { FiPhone, FiMenu, FiChevronDown } from "react-icons/fi";
import { useState, useEffect } from "react";



export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
        <Link href="/" className="font-display text-2xl tracking-wide group">
          <span className="text-stone-900 group-hover:text-gold transition-colors">Catering</span>{" "}
          <span className="text-gold group-hover:scale-110 inline-block transition-transform">Luxe</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="/about" className="hover:text-gold transition-colors relative group">
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-gold to-yellow-600 group-hover:w-full transition-all"></span>
          </Link>
          <Link href="/services" className="hover:text-gold transition-colors relative group">
            Services
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-gold to-yellow-600 group-hover:w-full transition-all"></span>
          </Link>
          <div className="relative group" onMouseEnter={() => setMenuOpen(true)} onMouseLeave={() => setMenuOpen(false)}>
            <button className="hover:text-gold transition-colors relative flex items-center gap-1">
              Menu
              <FiChevronDown className={`transition-transform ${menuOpen ? 'rotate-180' : ''}`} />
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-gold to-yellow-600 group-hover:w-full transition-all"></span>
            </button>
            {menuOpen && (
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-56 bg-white/95 backdrop-blur-xl border-2 border-stone-200 rounded-2xl shadow-2xl py-2 z-50">
                <Link href="/menu/wedding" className="block px-6 py-3 hover:bg-gold/10 hover:text-gold transition-colors text-center">
                  💍 Wedding Catering
                </Link>
                <Link href="/menu/birthday" className="block px-6 py-3 hover:bg-gold/10 hover:text-gold transition-colors text-center">
                  🎂 Birthday Catering
                </Link>
                <Link href="/menu/corporate" className="block px-6 py-3 hover:bg-gold/10 hover:text-gold transition-colors text-center">
                  🏢 Corporate Catering
                </Link>
                <Link href="/menu/traditional" className="block px-6 py-3 hover:bg-gold/10 hover:text-gold transition-colors text-center">
                  🍴 Traditional Catering
                </Link>
              </div>
            )}
          </div>
          <Link href="/specialties" className="hover:text-gold transition-colors relative group">
            Specialties
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-gold to-yellow-600 group-hover:w-full transition-all"></span>
          </Link>
          <Link href="/gallery" className="hover:text-gold transition-colors relative group">
            Gallery
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-gold to-yellow-600 group-hover:w-full transition-all"></span>
          </Link>
          <Link href="/pricing" className="hover:text-gold transition-colors relative group">
            Pricing
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-gold to-yellow-600 group-hover:w-full transition-all"></span>
          </Link>
          <Link href="/testimonials" className="hover:text-gold transition-colors relative group">
            Testimonials
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-gold to-yellow-600 group-hover:w-full transition-all"></span>
          </Link>
          <Link href="/booking" className="px-6 py-3 rounded-full bg-gradient-to-r from-gold to-yellow-600 text-white hover:shadow-xl hover:scale-105 transition-all">
            Book Now
          </Link>
          <a href="tel:+1234567890" className="flex items-center gap-2 text-stone-700 hover:text-gold transition-colors">
            <FiPhone className="animate-pulse" /> +1 234 567 890
          </a>
        </nav>
        {/* Mobile Floating Menu Button */}
        <button 
          className="md:hidden p-2 rounded-full bg-gradient-to-br from-gold via-yellow-500 to-yellow-600 shadow-lg hover:shadow-gold/50 active:scale-95 transition-all duration-300 flex items-center justify-center" 
          onClick={()=>setOpen(v=>!v)}
        >
          <div className="relative w-5 h-5 flex flex-col justify-between">
            <span className={`block h-0.5 w-full bg-white rounded-full transition-all duration-300 ${open ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block h-0.5 w-full bg-white rounded-full transition-all duration-300 ${open ? 'opacity-0' : ''}`}></span>
            <span className={`block h-0.5 w-full bg-white rounded-full transition-all duration-300 ${open ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </div>
        </button>
      </div>
      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-stone-200 shadow-lg" onClick={()=>setOpen(false)}>
          <div className="px-4 py-3 flex flex-col gap-1">
            <Link href="/about" className="hover:text-gold transition-colors py-2 px-4 hover:bg-gold/10 rounded-xl" onClick={(e)=>{e.stopPropagation(); setOpen(false);}}>About</Link>
            <Link href="/services" className="hover:text-gold transition-colors py-2 px-4 hover:bg-gold/10 rounded-xl" onClick={(e)=>{e.stopPropagation(); setOpen(false);}}>Services</Link>
            <div>
              <button 
                className="w-full flex items-center justify-between hover:text-gold transition-colors py-2 px-4 hover:bg-gold/10 rounded-xl text-left"
                onClick={(e) => {
                  e.stopPropagation();
                  setMobileMenuOpen(!mobileMenuOpen);
                }}
              >
                <span>Menu</span>
                <FiChevronDown className={`transition-transform ${mobileMenuOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileMenuOpen && (
                <div className="pl-6 pr-2 py-2 flex flex-col gap-1 border-l-2 border-gold/30 ml-4 mt-1">
                  <Link 
                    href="/menu/wedding"
                    className="hover:text-gold transition-colors py-2 px-4 hover:bg-gold/10 rounded-xl text-center"
                    onClick={(e) => {
                      e.stopPropagation();
                      setOpen(false);
                      setMobileMenuOpen(false);
                    }}
                  >
                    💍 Wedding Catering
                  </Link>
                  <Link 
                    href="/menu/birthday"
                    className="hover:text-gold transition-colors py-2 px-4 hover:bg-gold/10 rounded-xl text-center"
                    onClick={(e) => {
                      e.stopPropagation();
                      setOpen(false);
                      setMobileMenuOpen(false);
                    }}
                  >
                    🎂 Birthday Catering
                  </Link>
                  <Link 
                    href="/menu/corporate"
                    className="hover:text-gold transition-colors py-2 px-4 hover:bg-gold/10 rounded-xl text-center"
                    onClick={(e) => {
                      e.stopPropagation();
                      setOpen(false);
                      setMobileMenuOpen(false);
                    }}
                  >
                    🏢 Corporate Catering
                  </Link>
                  <Link 
                    href="/menu/traditional"
                    className="hover:text-gold transition-colors py-2 px-4 hover:bg-gold/10 rounded-xl text-center"
                    onClick={(e) => {
                      e.stopPropagation();
                      setOpen(false);
                      setMobileMenuOpen(false);
                    }}
                  >
                    🍴 Traditional Catering
                  </Link>
                </div>
              )}
            </div>
            <Link href="/specialties" className="hover:text-gold transition-colors py-2 px-4 hover:bg-gold/10 rounded-xl" onClick={(e)=>{e.stopPropagation(); setOpen(false);}}>Specialties</Link>
            <Link href="/gallery" className="hover:text-gold transition-colors py-2 px-4 hover:bg-gold/10 rounded-xl" onClick={(e)=>{e.stopPropagation(); setOpen(false);}}>Gallery</Link>
            <Link href="/pricing" className="hover:text-gold transition-colors py-2 px-4 hover:bg-gold/10 rounded-xl" onClick={(e)=>{e.stopPropagation(); setOpen(false);}}>Pricing</Link>
            <Link href="/testimonials" className="hover:text-gold transition-colors py-2 px-4 hover:bg-gold/10 rounded-xl" onClick={(e)=>{e.stopPropagation(); setOpen(false);}}>Testimonials</Link>
            <Link href="/booking" className="mt-1 mb-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-gold to-yellow-600 text-white text-center text-sm hover:shadow-lg transition-all" onClick={(e)=>{e.stopPropagation(); setOpen(false);}}>
              Book Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
