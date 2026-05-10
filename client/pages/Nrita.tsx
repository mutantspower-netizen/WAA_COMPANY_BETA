import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function SpecificationButton({ to }: { to?: string }) {
  const inner = (
    <>
      Specification
      <span className="flex items-center justify-center bg-white rounded-full w-5 h-5 flex-shrink-0">
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 5h6M5.5 2.5L8 5l-2.5 2.5" stroke="#B30B0F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </>
  );
  if (to) {
    return (
      <Link to={to} className="inline-flex items-center gap-2 bg-[#B30B0F] text-white font-sarabun text-sm font-semibold px-4 py-1.5 rounded-full hover:bg-[#950a0d] transition-colors">
        {inner}
      </Link>
    );
  }
  return (
    <button className="inline-flex items-center gap-2 bg-[#B30B0F] text-white font-sarabun text-sm font-semibold px-4 py-1.5 rounded-full hover:bg-[#950a0d] transition-colors">
      {inner}
    </button>
  );
}

function EndMillImage({ src, alt, rotate = 90 }: { src: string; alt: string; rotate?: number }) {
  return (
    <div className="flex-1 relative overflow-hidden" style={{ minHeight: '120px', maxHeight: '180px', height: '15vw' }}>
      <img
        src={src}
        alt={alt}
        className="absolute top-1/2 left-1/2"
        style={{
          transform: `translateX(-50%) translateY(-50%) rotate(${rotate}deg)`,
          height: 'min(450px, 42vw)',
          width: 'auto',
          maxWidth: 'none',
        }}
      />
    </div>
  );
}

export default function Nrita() {
  return (
    <div className="min-h-screen bg-[#f5f5f5] font-sarabun flex flex-col">
      <Navbar />

      <div className="relative mt-[60px] flex-1 overflow-hidden">
        {/* Background diagonal texture */}
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/476fd3a80429a8e2b5491fa2fe30ed086c5f1f5a?width=2896"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-30 pointer-events-none select-none"
        />

        {/* Hero section */}
        <section className="relative w-full overflow-hidden bg-[#111]">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/954b83ba7fb774c332ed5340b731c243c0fb8f71?width=2882"
            alt="Narita End Mills"
            className="w-full object-cover object-center"
            style={{ maxHeight: '270px' }}
          />
        </section>

        {/* Brand section */}
        <section className="relative flex flex-col items-center py-10 px-6 text-center">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/19f8b09e554ec6d01e98fb980fc860612632e4f1?width=396"
            alt="Narita End Mills"
            className="h-16 w-auto mb-5"
          />
          <p className="font-sarabun text-[13px] text-[#1e1e1e] leading-relaxed max-w-[720px]">
            Narita end mills are engineered for high-performance machining across a full range, including ball nose 2 flutes,
            long-length ball nose, standard 2 flutes, extended 2 flutes, and 4 flutes options. Designed for pre-hardened and
            hardened steel up to HRC50, they feature ultra-fine carbide (0.3~0.5 μm) and TiAlN coating for excellent wear
            resistance. The result is high precision, smooth surface finish, and reliable performance in high-speed machining
            applications.
          </p>
        </section>

        {/* Products */}
        <section className="relative max-w-[1200px] mx-auto px-4 pb-12 space-y-2">

          {/* BALL NOSE 2 FLUTE — image left, content right */}
          <div className="flex flex-col sm:flex-row items-center gap-4 py-8 border-b border-gray-200">
            <EndMillImage
              src="https://api.builder.io/api/v1/image/assets/TEMP/30d7875b1c393e6c980a64a2ba4ea56f5a4452dd?width=274"
              alt="Ball Nose 2 Flute"
              rotate={100}
            />
            <div className="flex-1 flex flex-col gap-3 px-2">
              <h2 className="font-sarabun text-[#B30B0F] text-3xl font-semibold">BALL NOSE 2 FLUTE</h2>
              <p className="font-sarabun text-black text-[15px] leading-snug max-w-[470px]">
                Solid carbide drilling combined with forward and backward chamfering in a single pass in the diameter range from 4.0 to 10.0 mm
              </p>
              <SpecificationButton to="/nrita/ball-nose" />
            </div>
          </div>

          {/* 2 FLUTES END MILL — title centered, content left, image right */}
          <div className="py-8 border-b border-gray-200">
            <h2 className="font-sarabun text-[#B30B0F] text-3xl font-semibold text-center mb-6">2 FLUTES END MILL</h2>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="flex-1 flex flex-col gap-3 items-end px-2">
                <p className="font-sarabun text-black text-[15px] leading-snug text-right max-w-[470px]">
                  Solid carbide drilling combined with forward and backward chamfering in a single pass in the diameter range from 4.0 to 10.0 mm
                </p>
                <SpecificationButton to="/nrita/2-flutes" />
              </div>
              <EndMillImage
                src="https://api.builder.io/api/v1/image/assets/TEMP/c89288ac87c3775f83f96ba0c942510960fee17b?width=271"
                alt="2 Flutes End Mill"
                rotate={-90}
              />
            </div>
          </div>

          {/* 4 FULTES END MILL — image left, content right */}
          <div className="flex flex-col sm:flex-row items-center gap-4 py-8">
            <EndMillImage
              src="https://api.builder.io/api/v1/image/assets/TEMP/0823aeb34f173a738e8884f3e139142cb7a02929?width=136"
              alt="4 Flutes End Mill"
              rotate={90}
            />
            <div className="flex-1 flex flex-col gap-3 px-2">
              <h2 className="font-sarabun text-[#B30B0F] text-3xl font-semibold">4 FULTES END MILL</h2>
              <p className="font-sarabun text-black text-[15px] leading-snug max-w-[470px]">
                Built for high-speed finishing and harder materials, providing superior rigidity and fine surface quality.
              </p>
              <SpecificationButton to="/nrita/4-flutes" />
            </div>
          </div>

        </section>
      </div>

      <Footer />
    </div>
  );
}
