import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20 pb-16">
        <Pricing />
      </main>
      <Footer />
    </>
  );
}
