import NaritaNavbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const standardRows = [
  { d1: "1",   l1: "50",  l2: "3",  d2: "4",  tap: "15" },
  { d1: "1",   l1: "50",  l2: "3",  d2: "6",  tap: "15" },
  { d1: "1.5", l1: "50",  l2: "4",  d2: "4",  tap: "15" },
  { d1: "1.5", l1: "50",  l2: "4",  d2: "6",  tap: "15" },
  { d1: "2",   l1: "50",  l2: "6",  d2: "4",  tap: "15" },
  { d1: "2",   l1: "50",  l2: "6",  d2: "6",  tap: "15" },
  { d1: "2.5", l1: "50",  l2: "8",  d2: "4",  tap: "15" },
  { d1: "2.5", l1: "50",  l2: "8",  d2: "6",  tap: "15" },
  { d1: "3",   l1: "50",  l2: "8",  d2: "4",  tap: "15" },
  { d1: "3",   l1: "50",  l2: "8",  d2: "6",  tap: "15" },
  { d1: "4",   l1: "50",  l2: "12", d2: "4",  tap: "-" },
  { d1: "4",   l1: "50",  l2: "12", d2: "6",  tap: "15" },
  { d1: "5",   l1: "50",  l2: "13", d2: "6",  tap: "15" },
  { d1: "6",   l1: "50",  l2: "15", d2: "6",  tap: "-" },
  { d1: "7",   l1: "60",  l2: "20", d2: "8",  tap: "15" },
  { d1: "8",   l1: "60",  l2: "20", d2: "8",  tap: "-" },
  { d1: "9",   l1: "75",  l2: "30", d2: "10", tap: "15" },
  { d1: "10",  l1: "75",  l2: "30", d2: "10", tap: "-" },
  { d1: "11",  l1: "75",  l2: "30", d2: "12", tap: "15" },
  { d1: "12",  l1: "75",  l2: "30", d2: "12", tap: "-" },
  { d1: "14",  l1: "100", l2: "32", d2: "14", tap: "-" },
  { d1: "16",  l1: "100", l2: "45", d2: "16", tap: "-" },
  { d1: "20",  l1: "100", l2: "45", d2: "20", tap: "-" },
];

const longRows = [
  { d1: "20", l1: "150", l2: "60", d2: "20", tap: "-" },
  { d1: "20", l1: "200", l2: "80", d2: "20", tap: "-" },
  { d1: "25", l1: "150", l2: "70", d2: "25", tap: "-" },
  { d1: "25", l1: "200", l2: "80", d2: "25", tap: "-" },
];

function SpecTable({ rows }: { rows: typeof standardRows }) {
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full text-sm font-sarabun border-collapse">
        <thead>
          <tr className="bg-[#f0f0f0]">
            <th className="border border-gray-300 px-3 py-2 font-semibold text-left whitespace-nowrap">Dia (d1)</th>
            <th className="border border-gray-300 px-3 py-2 font-semibold text-center whitespace-nowrap">Overall Length (l1)</th>
            <th className="border border-gray-300 px-3 py-2 font-semibold text-center whitespace-nowrap">Flute Length (l2)</th>
            <th className="border border-gray-300 px-3 py-2 font-semibold text-center whitespace-nowrap">S.D. (d2)</th>
            <th className="border border-gray-300 px-3 py-2 font-semibold text-center whitespace-nowrap">Tap</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#fafafa]"}>
              <td className="border border-gray-300 px-3 py-1.5 text-left">{row.d1}</td>
              <td className="border border-gray-300 px-3 py-1.5 text-center">{row.l1}</td>
              <td className="border border-gray-300 px-3 py-1.5 text-center">{row.l2}</td>
              <td className="border border-gray-300 px-3 py-1.5 text-center">{row.d2}</td>
              <td className="border border-gray-300 px-3 py-1.5 text-center">{row.tap}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function WorkpieceMaterialTable() {
  return (
    <div className="w-full overflow-x-auto mb-1">
      <table className="w-full text-xs font-sarabun border-collapse">
        <thead>
          <tr>
            <th colSpan={3} className="border border-gray-300 px-3 py-2 text-center font-normal bg-white">
              steel
            </th>
            <th colSpan={3} className="border border-gray-300 px-3 py-2 text-center font-normal bg-white">
              High standard steal
            </th>
          </tr>
          <tr className="bg-white text-[11px]">
            <th className="border border-gray-300 px-2 py-1.5 text-center font-normal leading-tight w-1/6">
              Carbon steel Alloy Steel&nbsp;{'( <35 HRC )'}
            </th>
            <th className="border border-gray-300 px-2 py-1.5 text-center font-normal leading-tight w-1/6">
              Alloy Steel Tool Steel&nbsp;{'( ≥48 HRC )'}
            </th>
            <th className="border border-gray-300 px-2 py-1.5 text-center font-normal leading-tight w-1/6">
              PH Ferrite Martensite Steel&nbsp;{'<35 HRC'}
            </th>
            <th className="border border-gray-300 px-2 py-1.5 text-center font-normal leading-tight w-1/6">
              Hardened Steel&nbsp;{'( 45~55 HRC )'}
            </th>
            <th className="border border-gray-300 px-2 py-1.5 text-center font-normal leading-tight w-1/6">
              Hardened Steel&nbsp;{'( 55~60 HRC )'}
            </th>
            <th className="border border-gray-300 px-2 py-1.5 text-center font-normal leading-tight w-1/6">
              Hardened Steel&nbsp;{'( >60 HRC )'}
            </th>
          </tr>
        </thead>
      </table>
    </div>
  );
}

function TwoFluteDiagram() {
  return (
    <img
      src="https://cdn.builder.io/api/v1/image/assets%2F2f0b492e34a14ec29346019ef2a7eaa9%2F7139563c55e3461aabcc35fca34bc014?format=webp&width=800&height=1200"
      alt="2 Flute End Mill Diagram"
      className="w-full max-w-[500px]"
    />
  );
}

export default function Narita2Flutes() {
  return (
    <div className="min-h-screen bg-[#f5f5f5] font-sarabun flex flex-col">
      <NaritaNavbar />

      <div className="relative mt-[60px] flex-1 overflow-hidden">
        {/* Background texture */}
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/476fd3a80429a8e2b5491fa2fe30ed086c5f1f5a?width=2896"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-30 pointer-events-none select-none"
        />


        {/* Main content */}
        <div className="relative max-w-[760px] mx-auto px-6 py-10">

          {/* Title */}
          <h1 className="font-sarabun text-[#B30B0F] text-2xl md:text-3xl font-bold text-center mb-5">
            2 FLUTE END MILLS
          </h1>

          {/* Description */}
          <p className="font-sarabun text-[13px] text-[#1e1e1e] leading-relaxed text-center max-w-[600px] mx-auto mb-8">
            Designed for versatile machining and efficient chip evacuation, Narita 2 flutes ensure stable cutting and
            consistent performance. Suitable for pre-hardened and hardened steel up to HRC50, with ultra-fine
            carbide (0.3–0.5 μm) and TiAlN coating for excellent wear resistance in high-speed operations.
          </p>

          {/* Diagram + product image */}
          <div className="flex flex-col sm:flex-row items-center gap-6 mb-10">
            <div className="flex-1 flex items-center justify-center">
              <TwoFluteDiagram />
            </div>
            <div className="flex-shrink-0 flex items-center justify-center">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/c89288ac87c3775f83f96ba0c942510960fee17b?width=271"
                alt="2 Flute End Mill"
                className="h-52 md:h-64 w-auto object-contain max-w-[200px]"
              />
            </div>
          </div>

          {/* Workpiece Material + spec table */}
          <p className="font-sarabun text-sm text-center mb-3">Workpiece Material</p>
          <WorkpieceMaterialTable />
          <SpecTable rows={standardRows} />

          {/* Long-reach section */}
          <div className="mt-10">
            <p className="font-sarabun text-sm text-center mb-3">Workpiece Material</p>
            <SpecTable rows={longRows} />
          </div>


        </div>
      </div>

      <Footer />
    </div>
  );
}
