import Navbar from "@/components/Navbar";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20 pb-16">
        <Gallery />
      </main>
      <Footer />
    </>
  );
}
