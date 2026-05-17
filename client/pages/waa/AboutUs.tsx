import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/lib/language";

export default function AboutUs() {
  const { text } = useLanguage();
  const about = text.about;
  const values = about.values;

  return (
    <div className="min-h-screen bg-[#f5f5f5] font-sarabun">
      <Navbar />

      <div className="pt-[60px] relative overflow-hidden">
        {/* Background texture */}
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/8a73b64255b315793ff264d15d55e6023900a2c7?width=2896"
          alt=""
          className="absolute top-0 left-0 w-full h-[900px] object-cover opacity-40 pointer-events-none"
        />

        {/* Company Title Section */}
        <section className="relative max-w-[1200px] mx-auto px-6 pt-10 pb-16">
          <p className="font-sarabun text-[28px] sm:text-[32px] font-bold mb-0">
            <span className="text-black">{about.titleBlack} </span>
            <span className="text-[#F11111]">{about.titleRed}</span>
          </p>

          <div className="flex flex-col lg:flex-row gap-10 mt-4">
            {/* Left: Company info */}
            <div className="flex-1">
              <h1 className="font-sarabun text-[36px] sm:text-[50px] font-bold text-black leading-tight">
                WAA.CO.LTD
              </h1>
              <h2 className="font-sarabun text-[36px] sm:text-[50px] font-bold text-[#F22703] leading-tight">
                {about.companyProfile}
              </h2>
              <div className="mt-6 border-t border-black pt-4">
                <p className="font-sarabun text-[13px] sm:text-[14px] font-bold text-black leading-relaxed">
                  2756,2758 Soi 128/4 Latphrao Rd. Khwaeng Khlong Chan, Khet
                  Bang Kapi, Bangkok 10240
                  <br />
                  02-731-0455-8
                </p>
              </div>

              <div className="mt-8">
                <div className="flex items-center justify-end gap-1 mb-2">
                  <span className="font-sarabun text-[28px] sm:text-[32px] font-bold text-black">
                    {about.our}{" "}
                  </span>
                  <span className="font-sarabun text-[28px] sm:text-[32px] font-bold text-[#F22703]">
                    {about.company}
                  </span>
                </div>
                <div className="border-t border-black mt-1 pt-3">
                  <p className="font-sarabun text-[13px] sm:text-[14px] font-bold text-black text-right leading-relaxed">
                    {about.companyText}
                    <br />
                    <br />
                    {about.companyText2}
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Company photo */}
            <div className="lg:w-[380px] flex items-start justify-center lg:justify-end mt-4 lg:mt-16">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/7218d601aa64d1a64b1e614dde32c2311a488147?width=702"
                alt="WAA Company Building"
                className="w-full max-w-[350px] rounded-[40px]  border-[#F91111] object-cover"
                style={{ aspectRatio: "117/118" }}
              />
            </div>
          </div>
        </section>

        {/* Background 2 */}
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/06216006746402d7c875a7b0a7c434d5de685fec?width=2332"
          alt=""
          className="absolute left-0 w-full object-cover opacity-30 pointer-events-none"
          style={{ top: "900px", height: "600px" }}
        />
      </div>

      {/* Our Services / Values Section */}
      <section className="relative max-w-[1200px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Left column: Company Values + Reasonable Prices */}
          <div className="flex flex-col gap-10">
            <ValueCard {...values[0]} />
            <ValueCard {...values[2]} />
          </div>

          {/* Center column: Product image */}
          <div className="flex justify-center">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/36626619bb3fb45dad00e2e080b78c9479577f82?width=1200"
              alt="Industrial Products"
              className="w-full max-w-[380px] rounded-[20px] object-cover"
              style={{ minHeight: "400px", maxHeight: "540px" }}
            />
          </div>

          {/* Right column: Quality Products + Good Service */}
          <div className="flex flex-col gap-10">
            <ValueCard {...values[1]} />
            <ValueCard {...values[3]} />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function ValueCard({
  title,
  titleRed,
  desc,
}: {
  title: string;
  titleRed: string;
  desc: string;
}) {
  return (
    <div className="pl-10">
      <div className="font-sarabun text-[26px] sm:text-[32px] font-bold leading-tight">
        <span className="text-black">{title}</span>
        <br />
        <span className="text-[#F61111]">{titleRed}</span>
      </div>
      <div className="border-t border-black mt-3 pt-3">
        <p className="font-sarabun text-[13px] sm:text-[14px] font-bold text-black leading-relaxed">
          {desc}
        </p>
      </div>
    </div>
  );
}
