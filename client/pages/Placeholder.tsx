import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface Props {
  title: string;
}

export default function Placeholder({ title }: Props) {
  return (
    <div className="min-h-screen bg-[#f5f5f5] font-sarabun flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-24 text-center">
        <div className="max-w-lg">
          <h1 className="font-sarabun text-[32px] sm:text-[40px] font-bold text-black mb-2">
            {title}
          </h1>
          <div className="w-16 h-1 bg-[#F51111] mx-auto my-4" />
          <p className="font-sarabun text-[16px] text-[#746969] font-semibold leading-relaxed">
            This page is coming soon.&nbsp;
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
