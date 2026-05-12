import HeuleNavbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import vexImage from "./img/VEX.png";
import dccImage from "./img/DCC.png";
import moduleLineImage from "./img/Module_Line.png";

function SpecButton() {
  return (
    <button className="inline-flex items-center gap-2 bg-[#B30B0F] text-white font-sarabun text-sm font-semibold px-4 py-1.5 rounded-full hover:bg-[#950a0d] transition-colors max-w-[145px]">
      Specification
      <span className="flex items-center justify-center bg-white rounded-full w-5 h-5 flex-shrink-0">
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 5h6M5.5 2.5L8 5l-2.5 2.5" stroke="#B30B0F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </button>
  );
}

export default function HeuleDrillingCombine() {
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
            DRILLING COMBINE
          </h1>

          {/* Description */}
          <p className="font-sarabun text-[13px] text-[#1e1e1e] leading-relaxed text-center max-w-[740px] mx-auto mb-14">
            Heule drilling combination tools are designed to perform multiple operations—such as drilling, chamfering, and deburring—in a single pass, reducing the need for multiple tool changes. What sets Heule apart is their ability to streamline complex machining processes without stopping the machine or repositioning the workpiece. This improves efficiency, maintains consistent quality across all features, and significantly reduces cycle time. The result is higher productivity, precise hole quality, and reliable performance in both CNC and manual machining applications.
          </p>

          {/* ── VEX section — image left, content right ── */}
          <div className="flex flex-col sm:flex-row items-center gap-8 mb-20">
            <div className="flex-1 flex items-center justify-center">
              <img
                src={vexImage}
                alt="VEX Drilling Tools"
                className="w-full max-w-[380px] object-contain"
              />
            </div>
            <div className="flex-1 flex flex-col gap-3">
              <h2 className="font-sarabun text-[#B30B0F] text-4xl md:text-5xl font-bold">VEX</h2>
              <p className="font-sarabun text-[14px] text-[#1e1e1e] leading-snug max-w-[320px]">
                Drilling combined with chamfering forwards and backwards in one single pass in the diameter range from 5.0 to 17.0 mm
              </p>
              <SpecButton />
            </div>
          </div>

          {/* ── DCC section — content left, image right ── */}
          <div className="flex flex-col sm:flex-row items-center gap-8 mb-20">
            <div className="flex-1 flex flex-col gap-3 items-end text-right">
              <h2 className="font-sarabun text-[#B30B0F] text-4xl md:text-5xl font-bold">DCC</h2>
              <p className="font-sarabun text-[14px] text-[#1e1e1e] leading-snug max-w-[320px]">
                Solid carbide drilling combined with forward and backward chamfering in a single pass in the diameter range from 4.0 to 10.0 mm
              </p>
              <SpecButton />
            </div>
            <div className="flex-1 flex items-center justify-center">
              <img
                src={dccImage}
                alt="DCC Drilling Tools"
                className="w-full max-w-[380px] object-contain"
              />
            </div>
          </div>

          {/* ── MODULE LINE section — image left, content right ── */}
          <div className="flex flex-col sm:flex-row items-center gap-8">
            <div className="flex-1 flex items-center justify-center">
              <img
                src={moduleLineImage}
                alt="Module Line Drilling Tools"
                className="w-full max-w-[380px] object-contain"
              />
            </div>
            <div className="flex-1 flex flex-col gap-3">
              <h2 className="font-sarabun text-[#B30B0F] text-4xl md:text-5xl font-bold">MODULE LINE</h2>
              <p className="font-sarabun text-[14px] text-[#1e1e1e] leading-snug max-w-[320px]">
                Your drill body combined with our chamfering module for simultaneous machining from bore-Ø 18.0 mm
              </p>
              <SpecButton />
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}
