import Navbar from "@/components/Navbar";
import BookingForm from "@/components/BookingForm";
import Footer from "@/components/Footer";

export default function BookingPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20 pb-16">
        <BookingForm />
      </main>
      <Footer />
    </>
  );
}
