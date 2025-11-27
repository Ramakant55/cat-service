import Navbar from "@/components/Navbar";
import Specialties from "@/components/Specialties";
import Footer from "@/components/Footer";

export default function SpecialtiesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20 pb-16">
        <Specialties />
      </main>
      <Footer />
    </>
  );
}
