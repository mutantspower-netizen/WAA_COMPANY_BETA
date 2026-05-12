import HeuleNavbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import snapImage from "./img/snap_no_bg.png";
import defaImage from "./img/DEFA_vno_bg.png";
import ghkImage from "./img/gh-k_no_bg.png";

function SpecButton({ to }: { to: string }) {
  return (
    <Link
      to={to}
      className="inline-flex items-center gap-2 bg-[#B30B0F] text-white font-sarabun text-sm font-semibold px-4 py-1.5 rounded-full hover:bg-[#950a0d] transition-colors max-w-[145px]"
    >
      Specification
      <span className="flex items-center justify-center bg-white rounded-full w-5 h-5 flex-shrink-0">
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 5h6M5.5 2.5L8 5l-2.5 2.5" stroke="#B30B0F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </Link>
  );
}

export default function HeuleChamfering() {
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
            CHAMFERING
          </h1>

          {/* Description */}
          <p className="font-sarabun text-[13px] text-[#1e1e1e] leading-relaxed text-center max-w-[740px] mx-auto mb-14">
            Heule chamfering tools are designed to create precise angled edges (chamfers) on holes and components,
            improving fit, safety, and overall part quality. What sets Heule apart is their ability to produce consistent front
            and back chamfers in a single pass—without stopping the machine or repositioning the workpiece. This not only
            removes secondary burrs but also ensures smooth edges, protects surface integrity, and significantly reduces
            machining time while maintaining high precision.
          </p>

          {/* ── SNAP section — image left, content right ── */}
          <div className="flex flex-col sm:flex-row items-center gap-8 mb-20">
            <div className="flex-1 flex items-center justify-center">
              <img
                src={snapImage}
                alt="SNAP Chamfering Tools"
                className="w-full max-w-[380px] object-contain"
              />
            </div>
            <div className="flex-1 flex flex-col gap-3">
              <h2 className="font-sarabun text-[#B30B0F] text-4xl md:text-5xl font-bold">SNAP</h2>
              <p className="font-sarabun text-[14px] text-[#1e1e1e] leading-snug max-w-[320px]">
                Forwards and backwards chamfering in one single pass
              </p>
              <SpecButton to="/heule/snap-chamfering" />
            </div>
          </div>

          {/* ── DEFA section — content left (right-aligned), image right ── */}
          <div className="flex flex-col sm:flex-row items-center gap-8 mb-20">
            <div className="flex-1 flex flex-col gap-3 items-end text-right">
              <h2 className="font-sarabun text-[#B30B0F] text-4xl md:text-5xl font-bold">DEFA</h2>
              <p className="font-sarabun text-[14px] text-[#1e1e1e] leading-snug max-w-[320px]">
                Forwards and backwards chamfering of interrupted bores – even with large burrs – in one single pass
              </p>
              <SpecButton to="/heule/snap-chamfering" />
            </div>
            <div className="flex-1 flex items-center justify-center">
              <img
                src={defaImage}
                alt="DEFA Chamfering Tools"
                className="w-full max-w-[380px] object-contain"
              />
            </div>
          </div>

          {/* ── GH-K section — image left, content right ── */}
          <div className="flex flex-col sm:flex-row items-center gap-8">
            <div className="flex-1 flex items-center justify-center">
              <img
                src={ghkImage}
                alt="GH-K Chamfering Tools"
                className="w-full max-w-[380px] object-contain"
              />
            </div>
            <div className="flex-1 flex flex-col gap-3">
              <h2 className="font-sarabun text-[#B30B0F] text-4xl md:text-5xl font-bold">GH - K</h2>
              <p className="font-sarabun text-[14px] text-[#1e1e1e] leading-snug max-w-[320px]">
                Countersinking of metal from Ø3 mm to Ø45 mm
              </p>
              <SpecButton to="" />
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}
