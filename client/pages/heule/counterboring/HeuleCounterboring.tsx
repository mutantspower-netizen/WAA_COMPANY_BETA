import HeuleNavbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import bsfImage from "../../img/BSF_no_bg.png";
import soloImage from "../../img/SOLO_no_bg.png";

function SpecButton({ to }: { to: string }) {
  return (
    
    <Link to={to} 
    className="inline-flex items-center gap-2 bg-[#B30B0F] text-white font-sarabun text-sm font-semibold px-4 py-1.5 rounded-full hover:bg-[#950a0d] transition-colors max-w-[145px]">
      Specification
      <span className="flex items-center justify-center bg-white rounded-full w-5 h-5 flex-shrink-0">
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 5h6M5.5 2.5L8 5l-2.5 2.5" stroke="#B30B0F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </Link>
  );
}

export default function HeuleCounterboring() {
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
            COUNTERBORING
          </h1>

          {/* Description */}
          <p className="font-sarabun text-[13px] text-[#1e1e1e] leading-relaxed text-center max-w-[740px] mx-auto mb-14">
            Heule counterboring tools are designed to machine precise flat-bottomed recesses (counterbores) for bolts and fasteners, ensuring
            accurate seating and proper load distribution. What sets Heule apart is their ability to perform front and back counterboring in a single pass
            —without stopping the machine or repositioning the workpiece. This eliminates secondary operations, maintains excellent concentricity
            and surface finish, and reduces machining time. The result is consistent accuracy, improved productivity, and reliable performance in both
            CNC and manual machining.
          </p>

          {/* ── BSF section ─────────────────────────── */}
          <div className="flex flex-col sm:flex-row items-center gap-8 mb-20">
            {/* Product image — left */}
            <div className="flex-1 flex items-center justify-center">
              <img
                src={bsfImage}
                alt="BSF Counterboring Tools"
                className="w-full max-w-[380px] object-contain"
              />
            </div>

            {/* Content — right */}
            <div className="flex-1 flex flex-col gap-3">
              <h2 className="font-sarabun text-[#B30B0F] text-4xl md:text-5xl font-bold">BSF</h2>
              <p className="font-sarabun text-[14px] text-[#1e1e1e] leading-snug max-w-[320px]">
                Backspotfacing up to 2.3 x the bore diameter
              </p>
              <SpecButton to="/heule/bsf-counterboring" />
            </div>
          </div>

          {/* ── SOLO section ─────────────────────────── */}
          <div className="flex flex-col sm:flex-row items-center gap-8">
            {/* Content — left, right-aligned */}
            <div className="flex-1 flex flex-col gap-3 items-end text-right">
              <div className="flex items-center justify-end gap-4">
                <h2 className="font-sarabun text-[#B30B0F] text-4xl md:text-5xl font-bold">SOLO</h2>
               
              </div>
              <p className="font-sarabun text-[14px] text-[#1e1e1e] leading-snug max-w-[320px]">
                Forwards and backwards counterboring and
                backspotfacing in one single pass.
                Interrupted cutting possible
              </p>
              <SpecButton to="/heule/solo-counterboring" />
            </div>

            {/* Three SOLO tool images — right */}
            <div className="flex-1 flex items-end justify-center gap-4">
             
              <img
                src={soloImage}
                alt="SOLO Tool variant 2"
                className="h-44 md:h-56 w-auto object-contain"
              />
             
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}
