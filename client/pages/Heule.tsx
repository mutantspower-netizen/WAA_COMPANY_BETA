import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const products = [
  {
    id: "deburring",
    label: "COFA & DL2",
    title: "DEBURRING",
    titleAlign: "right" as const,
    imgSrc:
      "https://api.builder.io/api/v1/image/assets/TEMP/76a1352e2bf60bff0801ff3604dce47e3428c16f?width=378",
    imgAlt: "Deburring tool",
    imgSide: "right" as const,
  },
  {
    id: "counterboring",
    label: "BSF & SOLO",
    title: "COUNTER BORING",
    titleAlign: "left" as const,
    imgSrc:
      "https://api.builder.io/api/v1/image/assets/TEMP/c42fb1c6bd8505c653d493a1b96543983be13fa4?width=378",
    imgAlt: "Counterboring tool",
    imgSide: "left" as const,
  },
  {
    id: "chamfering",
    label: "SNAP , DEFA & GH-K",
    title: "CHAMFERING",
    titleAlign: "right" as const,
    imgSrc:
      "https://api.builder.io/api/v1/image/assets/TEMP/2d9a80bd6e54ebb950d6d516a658840ec5a01131?width=378",
    imgAlt: "Chamfering tool",
    imgSide: "right" as const,
  },
  {
    id: "drilling",
    label: "VEX, DCC & Module Line",
    title: "DRILLING COMBINE",
    titleAlign: "left" as const,
    imgSrc:
      "https://api.builder.io/api/v1/image/assets/TEMP/a75ac0d3b55fcbce90714a96d5fef54bf607a8e6?width=380",
    imgAlt: "Drilling combine tool",
    imgSide: "left" as const,
  },
];

export default function Heule() {
  return (
    <div className="min-h-screen bg-[#f5f5f5] font-sarabun flex flex-col">
      <Navbar />

      {/* Background texture layer */}
      <div className="relative mt-[60px] flex-1 overflow-hidden">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/572ddbf54349681239ed9144240e6367b65bf794?width=2896"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-40 pointer-events-none select-none"
        />

        {/* Hero Section */}
        <section className="relative w-full bg-[#1a1a1a]">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/40b04707d14e086d78fd92c4c21d12e24d7bb916?width=2880"
            alt="Heule Precision Tools"
            className="w-full object-cover object-center"
            style={{ maxHeight: "260px" }}
          />
        </section>

        {/* Products Grid */}
        <section className="relative max-w-[1000px] mx-auto px-4 py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 border border-black">
            {products.map((p) => (
              <ProductCell key={p.id} {...p} />
            ))}
          </div>
        </section>

        {/* Consulting Section */}
        <section className="relative max-w-[1000px] mx-auto px-4 pb-16">
          <div className="flex flex-col items-center gap-4">
            {/* Logos row */}
            <div className="flex items-center gap-4 self-start pl-4 sm:pl-10">
              <span className="font-sarabun text-[16px] font-light text-black">
                Consulting
              </span>
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/9162be13940aff2dcaa6000d04225be426118226?width=60"
                alt="WAA Logo"
                className="h-5 w-auto"
              />
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/b00c629ce1a5990df98e157a5db126fa2eabdc3d?width=100"
                alt="Heule Logo"
                className="h-5 w-auto"
              />
            </div>

            {/* Paragraph */}
            <p className="font-sarabun text-[12px] sm:text-[13px] font-normal text-black text-center leading-relaxed max-w-[800px] px-2">
              As a trusted tool trading company, we proud to be the first and
              only sale partners of Heule precision tools domestically in
              thailand, known for their innovation and reliability. Our team is
              dedicated to helping you get the most out of the Heule
              range—whether it's selecting the ideal tool for your application
              or developing a customized solution to meet your exact
              requirements. Consult with us to ensure you achieve the best
              performance and efficiency with Heule.
            </p>

            {/* Contact Us Button */}
            <Link to="/contact">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/93794e1607214e2eac6ba2392f371c4bb8d42976?width=316"
                alt="Contact us"
                className="h-9 w-auto cursor-pointer hover:opacity-90 transition-opacity"
              />
            </Link>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}

interface ProductCellProps {
  label: string;
  title: string;
  titleAlign: "left" | "right";
  imgSrc: string;
  imgAlt: string;
  imgSide: "left" | "right";
  href?: string;
}

function ProductCell({
  label,
  title,
  titleAlign,
  imgSrc,
  imgAlt,
  imgSide,
  href,
}: ProductCellProps) {
  const isImgLeft = imgSide === "left";
  const cellClass = "bg-white border border-black flex items-center justify-between p-4 sm:p-6 min-h-[160px] sm:min-h-[220px] relative overflow-hidden hover:bg-gray-50 transition-colors";

  const inner = isImgLeft ? (
    <>
      <img
        src={imgSrc}
        alt={imgAlt}
        className="h-[120px] sm:h-[185px] w-auto object-contain shrink-0"
      />
      <div
        className={`flex flex-col ${titleAlign === "left" ? "items-start" : "items-end"} gap-1 flex-1 pl-3`}
      >
        <span className="font-sarabun text-[11px] sm:text-[12px] font-semibold text-[#B30B0F]">
          {label}
        </span>
        <span className="font-sarabun text-[22px] sm:text-[32px] font-normal text-black leading-tight">
          {title}
        </span>
      </div>
    </>
  ) : (
    <>
      <div
        className={`flex flex-col ${titleAlign === "right" ? "items-end" : "items-start"} gap-1 flex-1 pr-3`}
      >
        <span className="font-sarabun text-[11px] sm:text-[12px] font-semibold text-[#B30B0F]">
          {label}
        </span>
        <span className="font-sarabun text-[22px] sm:text-[32px] font-normal text-black leading-tight text-right">
          {title}
        </span>
      </div>
      <img
        src={imgSrc}
        alt={imgAlt}
        className="h-[120px] sm:h-[185px] w-auto object-contain shrink-0"
      />
    </>
  );

  if (href) {
    return <Link to={href} className={cellClass}>{inner}</Link>;
  }
  return <div className={cellClass}>{inner}</div>;
}
