import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const brandLogos = [
  {
    src: "https://api.builder.io/api/v1/image/assets/TEMP/075c4a6c1e045afa56adf73ea96b4957479761cc?width=440",
    alt: "Heule Precision Tools",
  },
  {
    src: "https://api.builder.io/api/v1/image/assets/TEMP/e31df5be806078fbea5dc6413141c9bc55fdef4e?width=502",
    alt: "Bosch",
  },
  {
    src: "https://api.builder.io/api/v1/image/assets/TEMP/69b612f03a303e7a38e3298faf7269c355a26527?width=710",
    alt: "Narita End Mills",
  },
  {
    src: "https://api.builder.io/api/v1/image/assets/TEMP/600f90e438acb6a6d7ebf5eb8f31913b899064f4?width=864",
    alt: "UNI-T",
  },
  {
    src: "https://api.builder.io/api/v1/image/assets/TEMP/f90fd0a37f55d28677664fb452013d823c2553ce?width=398",
    alt: "Tomei",
    rounded: true,
  },
  {
    src: "https://api.builder.io/api/v1/image/assets/TEMP/4b742b5146d8f6505892ad30b0deb73e72e71c54?width=606",
    alt: "Nachi",
  },
];

const customerLogos = [
  {
    src: "https://api.builder.io/api/v1/image/assets/TEMP/3dc55b959d8b6b72ea6ae542efd7f3394a6d5528?width=666",
    alt: "Isuzu",
  },
  {
    src: "https://api.builder.io/api/v1/image/assets/TEMP/3c59df87c03d8e70e0102e6cab4d1a18987269fc?width=450",
    alt: "SCS Fabrication",
  },
  {
    src: "https://api.builder.io/api/v1/image/assets/TEMP/1e1ae0f03428ca8db7068201e98c89306f421769?width=606",
    alt: "Honda",
  },
  {
    src: "https://api.builder.io/api/v1/image/assets/TEMP/e9a14f25736a097e01965c18bd8a37fe825cfed6?width=868",
    alt: "Jomthai Sprockets & Chain",
  },
  {
    src: "https://api.builder.io/api/v1/image/assets/TEMP/0b78cba4e81f1c6c3200bb48c01f70d725be21a7?width=802",
    alt: "Precision Tools Service",
  },
  {
    src: "https://api.builder.io/api/v1/image/assets/TEMP/36bf6c1a3285daaf90d4d43f527511b1c3194319?width=468",
    alt: "AAPICO",
  },
  {
    src: "https://api.builder.io/api/v1/image/assets/TEMP/30caa8728a737260ec5b4bc73545dfc2fc3a0d37?width=610",
    alt: "MMT Mechatronics Machine Tools",
  },
];

const machineTypes = [
  {
    label: "Milling",
    src: "https://api.builder.io/api/v1/image/assets/TEMP/c36e6d2733eab6673d4587ac42c9b07fc8d37b60?width=360",
  },
  {
    label: "LATH",
    src: "https://api.builder.io/api/v1/image/assets/TEMP/06d6aa1c0b7492c8ceb7fdb57bc75f39d6b5677d?width=360",
  },
  {
    label: "GRINDING",
    src: "https://api.builder.io/api/v1/image/assets/TEMP/abeccef00f8ddf8c561f1bc1ed121ddce4e2c638?width=360",
  },
];

export default function Index() {
  return (
    <div className="min-h-screen bg-[#f5f5f5] font-sarabun">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full mt-[60px] overflow-hidden">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/cba90e2cdde73432518f6b4c00432672213397fa?width=2956"
          alt="CNC Machining"
          className="w-full object-cover"
          style={{ maxHeight: "520px", objectPosition: "center" }}
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute top-1/2 left-[5%] -translate-y-1/2 text-center max-w-[280px]">
          <p className="font-sarabun text-[18px] sm:text-[20px] font-extrabold text-[#cfcdcd] leading-tight">
            Sale Partner and tools consulting domestically in thailand
          </p>
        </div>
      </section>

      {/* Tools Distribution Section */}
      <section className="relative w-full py-12 overflow-hidden">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/3ebb2948c0563123ac774ba2b036a29e39bd7e3d?width=2896"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="relative max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col items-center text-center mb-10">
            <p className="font-noto-serif text-[10px] font-semibold text-[#746969] tracking-widest uppercase mb-2">
              TOOLS DISTRIBUTION
            </p>
            <div className="flex items-center gap-3 justify-center">
              <span className="block h-px w-12 bg-[#F51111]" />
              <h2 className="font-noto-serif text-[18px] sm:text-[20px] font-medium text-black text-center">
                Your reliable partner for industrial tools and equipment
              </h2>
              <span className="block h-px w-10 bg-[#F51111]" />
            </div>
          </div>

          {/* Machine Type Cards */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {machineTypes.map((m) => (
              <div key={m.label} className="flex flex-col items-center">
                <img
                  src={m.src}
                  alt={m.label}
                  className="w-[160px] sm:w-[180px] h-[140px] sm:h-[176px] object-cover"
                />
                <span className="mt-2 font-noto-serif text-[14px] sm:text-[15px] font-semibold text-[#746969]">
                  {m.label}
                </span>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-start mt-12 md:mt-16 px-2">
            <p className="font-noto-serif text-[10px] font-semibold text-[#746969] tracking-widest uppercase mb-1">
              CONSUMABLE
            </p>
            <div className="flex items-center gap-3">
              <span className="hidden sm:block h-px w-12 bg-[#F51111] shrink-0" />
              <h2 className="font-noto-serif text-[16px] sm:text-[20px] font-medium text-black">
                One stop solution for all machining consumables and industrial tooling
              </h2>
              <span className="hidden sm:block h-px w-12 bg-[#F51111] shrink-0" />
            </div>
          </div>
        </div>
      </section>

      {/* CNC Photo Banner */}
      <section className="relative w-full">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/bf9cc9a7b10fb7faced65f51188c11ab27982747?width=2884"
          alt="CNC Machining close-up"
          className="w-full object-cover"
          style={{ maxHeight: "420px", objectPosition: "center" }}
        />
        <div className="absolute bottom-0 left-0 p-6 sm:p-10 max-w-xs sm:max-w-sm">
          <p className="font-noto-serif text-[14px] sm:text-[18px] font-bold text-[#686464] leading-snug bg-white/60 p-3 rounded">
            More than just a tool supplier, we are your one-stop partner for
            industrial tools and machining consumables, offering a wide range of
            products, reliable supply, and service you can trust.
          </p>
        </div>
      </section>

      {/* Trusted Brands Section */}
      <section className="relative w-full py-14 overflow-hidden">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/a57512525854aafeaf84d3f0b37e2442d5204ec3?width=2896"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative max-w-[1200px] mx-auto px-6">
          <div className="flex items-center justify-center gap-3 mb-10">
            <span className="block h-px w-8 bg-[#A32A19]" />
            <p className="font-sarabun text-[16px] sm:text-[20px] font-normal text-black text-center">
              Tools and machining consumables from trusted international brands
            </p>
            <span className="block h-px w-8 bg-[#A32A19]" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center justify-items-center">
            {brandLogos.map((logo) => (
              <div
                key={logo.alt}
                className="flex items-center justify-center h-24 w-full"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className={`max-h-20 max-w-full object-contain ${
                    logo.rounded ? "rounded-full border-4 border-[#F20808]" : ""
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Customers Section */}
      <section className="relative w-full py-14 overflow-hidden">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/8c1bc7773405253a3a1de01d343437574f5710ad?width=2896"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col items-center text-center mb-10">
            <p className="font-noto-serif text-[10px] font-semibold text-[#746969] tracking-widest uppercase mb-2">
              OUR CUSTOMERS
            </p>
            <div className="flex items-center gap-3 justify-center">
              <span className="block h-px w-8 bg-[#F51111]" />
              <h2 className="font-noto-serif text-[18px] sm:text-[20px] font-medium text-black">
                Manufacturers that trust W.A.A CO., LTD
              </h2>
              <span className="block h-px w-8 bg-[#F51111]" />
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 items-center justify-items-center">
            {customerLogos.map((logo) => (
              <div
                key={logo.alt}
                className="flex items-center justify-center h-28 w-full"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-h-24 max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
