import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Menu from "@/components/Menu";
import MenuCategories from "@/components/MenuCategories";
import Specialties from "@/components/Specialties";
import Process from "@/components/Process";
import Gallery from "@/components/Gallery";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import BookingForm from "@/components/BookingForm";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="space-y-16 md:space-y-32">
        <Hero />
        <About />
        <Services />
        <Menu />
        <MenuCategories />
        <Specialties />
        <Process />
        <Gallery />
        <Pricing />
        <Testimonials />
        <CTA />
        <BookingForm />
      </main>
      <Footer />
    </>
  );
}
