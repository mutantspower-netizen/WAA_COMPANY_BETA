import HeuleNavbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import bsfImage from "./img/BSF_no_bg.png";

export default function BSFCounterboring() {
  return (
    <div className="min-h-screen bg-[#f5f5f5] font-sarabun flex flex-col">
      <HeuleNavbar />

      <main className="flex-1 pt-[100px] px-6">
        <section className="max-w-[1000px] mx-auto text-center">
          <h1 className="text-[#B30B0F] text-3xl md:text-5xl font-bold mb-6">
            BSF COUNTERBORING
          </h1>
          <p className="text-[#1e1e1e] text-base md:text-lg leading-relaxed max-w-[720px] mx-auto">
            Backspotfacing up to 2.3 x the bore diameter for precise forward and backward counterboring in a single setup.
          </p>

          <div className="mt-10 flex justify-center">
            <img
              src={bsfImage}
              alt="BSF Counterboring Tool"
              className="w-full max-w-[520px] object-contain"
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
