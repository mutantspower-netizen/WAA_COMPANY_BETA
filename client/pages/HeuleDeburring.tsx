import HeuleNavbar from "@/components/HeuleNavbar";
import Footer from "@/components/Footer";

function SpecButton() {
  return (
    <button className="inline-flex items-center gap-2 bg-[#B30B0F] text-white font-sarabun text-sm font-semibold px-4 py-1.5 rounded-full hover:bg-[#950a0d] transition-colors">
      Specification
      <span className="flex items-center justify-center bg-white rounded-full w-5 h-5 flex-shrink-0">
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 5h6M5.5 2.5L8 5l-2.5 2.5" stroke="#B30B0F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </button>
  );
}

export default function HeuleDeburring() {
  return (
    <div className="min-h-screen bg-[#f5f5f5] font-sarabun flex flex-col">
      <HeuleNavbar />

      <div className="relative mt-[60px] flex-1 overflow-hidden">
        {/* Background texture */}
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/572ddbf54349681239ed9144240e6367b65bf794?width=2896"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-40 pointer-events-none select-none"
        />

        <div className="relative max-w-[1100px] mx-auto px-6 py-12">

          {/* Title */}
          <h1 className="font-sarabun text-[#B30B0F] text-3xl md:text-4xl font-bold text-center mb-6">
            DEBURRING
          </h1>

          {/* Description */}
          <p className="font-sarabun text-[13px] text-[#1e1e1e] leading-relaxed text-center max-w-[740px] mx-auto mb-14">
            Heule deburring tools are designed to remove burrs (sharp edges) from drilled holes and machined parts, ensuring a
            smooth and safe finish. What makes Heule unique is their ability to deburr both the front and back of a hole in a single
            pass without stopping the machine or repositioning the workpiece. This results in faster production, consistent edge
            quality, and improved efficiency in both CNC and manual machining processes.
          </p>

          {/* ── COFA section ─────────────────────────── */}
          <div className="flex flex-col sm:flex-row items-center gap-8 mb-20">
            {/* Product image — left */}
            <div className="flex-1 flex items-center justify-center">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/76a1352e2bf60bff0801ff3604dce47e3428c16f?width=756"
                alt="COFA Deburring Tools"
                className="w-full max-w-[380px] object-contain"
              />
            </div>

            {/* Content — right */}
            <div className="flex-1 flex flex-col gap-3">
              <h2 className="font-sarabun text-[#B30B0F] text-4xl md:text-5xl font-bold">COFA</h2>
              <p className="font-sarabun text-[14px] text-[#1e1e1e] leading-snug max-w-[320px]">
                From bore diameter 2.0 mm: forwards and backwards deburring
                of even and uneven bores in one single pass
              </p>
              <SpecButton />
            </div>
          </div>

          {/* ── DL2 section ──────────────────────────── */}
          <div className="flex flex-col sm:flex-row items-center gap-8">
            {/* Content — left, right-aligned */}
            <div className="flex-1 flex flex-col gap-3 items-end text-right">
              <h2 className="font-sarabun text-[#B30B0F] text-4xl md:text-5xl font-bold">DL2</h2>
              <p className="font-sarabun text-[14px] text-[#1e1e1e] leading-snug max-w-[320px]">
                Bore diameter 1.0 mm to 2.1 mm: forwards and backwards deburring of
                even and slightly uneven bores in one single pass
              </p>
              <SpecButton />
            </div>

            {/* Three DL2 tool images — right */}
            <div className="flex-1 flex items-end justify-center gap-4">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/76a1352e2bf60bff0801ff3604dce47e3428c16f?width=378"
                alt="DL2 Tool variant 1"
                className="h-48 md:h-60 w-auto object-contain"
              />
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/76a1352e2bf60bff0801ff3604dce47e3428c16f?width=378"
                alt="DL2 Tool variant 2"
                className="h-44 md:h-56 w-auto object-contain"
              />
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/76a1352e2bf60bff0801ff3604dce47e3428c16f?width=378"
                alt="DL2 Tool variant 3"
                className="h-40 md:h-52 w-auto object-contain"
              />
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}
