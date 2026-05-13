import NaritaNavbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const standardRows = [
  { r: "R0.5",  d1: "1",   l1: "50",  l2: "2",  d2: "4",  tap: "15" },
  { r: "R0.5",  d1: "1",   l1: "50",  l2: "2",  d2: "6",  tap: "15" },
  { r: "R0.75", d1: "1.5", l1: "50",  l2: "3",  d2: "4",  tap: "15" },
  { r: "R0.75", d1: "1.5", l1: "50",  l2: "3",  d2: "6",  tap: "15" },
  { r: "R1.0",  d1: "2",   l1: "50",  l2: "4",  d2: "4",  tap: "15" },
  { r: "R1.0",  d1: "2",   l1: "50",  l2: "4",  d2: "6",  tap: "15" },
  { r: "R1.25", d1: "2.5", l1: "50",  l2: "5",  d2: "4",  tap: "15" },
  { r: "R1.25", d1: "2.5", l1: "50",  l2: "5",  d2: "6",  tap: "15" },
  { r: "R1.5",  d1: "3",   l1: "50",  l2: "6",  d2: "4",  tap: "15" },
  { r: "R1.5",  d1: "3",   l1: "50",  l2: "6",  d2: "6",  tap: "15" },
  { r: "R2.0",  d1: "4",   l1: "50",  l2: "8",  d2: "4",  tap: "" },
  { r: "R2.0",  d1: "4",   l1: "50",  l2: "8",  d2: "6",  tap: "" },
  { r: "R2.5",  d1: "5",   l1: "50",  l2: "10", d2: "6",  tap: "15" },
  { r: "R3.0",  d1: "6",   l1: "50",  l2: "12", d2: "6",  tap: "15" },
  { r: "R3.5",  d1: "7",   l1: "60",  l2: "14", d2: "8",  tap: "" },
  { r: "R4.0",  d1: "8",   l1: "60",  l2: "16", d2: "8",  tap: "" },
  { r: "R4.5",  d1: "9",   l1: "75",  l2: "18", d2: "10", tap: "15" },
  { r: "R5.0",  d1: "10",  l1: "75",  l2: "20", d2: "10", tap: "15" },
  { r: "R6.0",  d1: "12",  l1: "75",  l2: "24", d2: "12", tap: "" },
  { r: "R7.0",  d1: "14",  l1: "100", l2: "24", d2: "14", tap: "-" },
  { r: "R8.0",  d1: "16",  l1: "100", l2: "24", d2: "16", tap: "" },
  { r: "R10",   d1: "20",  l1: "100", l2: "30", d2: "20", tap: "" },
  { r: "R12.5", d1: "25",  l1: "100", l2: "35", d2: "25", tap: "" },
];

const lengthenRows = [
  { r: "R1",    d1: "2",   l1: "75",  l2: "4",  d2: "4",  tap: "15" },
  { r: "R1",    d1: "2",   l1: "100", l2: "4",  d2: "6",  tap: "15" },
  { r: "R1.25", d1: "2.5", l1: "75",  l2: "5",  d2: "4",  tap: "15" },
  { r: "R1.25", d1: "2.5", l1: "100", l2: "5",  d2: "6",  tap: "15" },
  { r: "R1.5",  d1: "3",   l1: "75",  l2: "6",  d2: "4",  tap: "15" },
  { r: "R1.5",  d1: "3",   l1: "100", l2: "6",  d2: "6",  tap: "15" },
  { r: "R2",    d1: "4",   l1: "75",  l2: "8",  d2: "4",  tap: "-" },
  { r: "R2",    d1: "4",   l1: "100", l2: "8",  d2: "6",  tap: "15" },
  { r: "R2.5",  d1: "5",   l1: "75",  l2: "10", d2: "6",  tap: "15" },
  { r: "R2.5",  d1: "5",   l1: "100", l2: "10", d2: "6",  tap: "15" },
  { r: "R3",    d1: "6",   l1: "75",  l2: "12", d2: "6",  tap: "-" },
  { r: "R3",    d1: "6",   l1: "100", l2: "12", d2: "6",  tap: "-" },
  { r: "R4",    d1: "8",   l1: "75",  l2: "16", d2: "8",  tap: "-" },
  { r: "R4",    d1: "8",   l1: "100", l2: "16", d2: "8",  tap: "-" },
  { r: "R5",    d1: "10",  l1: "100", l2: "20", d2: "10", tap: "-" },
  { r: "R5",    d1: "10",  l1: "150", l2: "20", d2: "10", tap: "-" },
  { r: "R6",    d1: "12",  l1: "100", l2: "24", d2: "12", tap: "-" },
  { r: "R6",    d1: "12",  l1: "150", l2: "24", d2: "12", tap: "-" },
  { r: "R8",    d1: "16",  l1: "150", l2: "32", d2: "16", tap: "-" },
  { r: "R8",    d1: "16",  l1: "200", l2: "32", d2: "16", tap: "-" },
  { r: "R10",   d1: "20",  l1: "150", l2: "40", d2: "20", tap: "-" },
  { r: "R10",   d1: "20",  l1: "200", l2: "40", d2: "20", tap: "-" },
  { r: "R12.5", d1: "25",  l1: "150", l2: "50", d2: "25", tap: "-" },
];

function SpecTable({ rows }: { rows: typeof standardRows }) {
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full text-sm font-sarabun border-collapse">
        <thead>
          <tr className="bg-[#f0f0f0]">
            <th className="border border-gray-300 px-3 py-2 font-semibold text-left whitespace-nowrap">Radius (R)</th>
            <th className="border border-gray-300 px-3 py-2 font-semibold text-center whitespace-nowrap">Dia (d1)</th>
            <th className="border border-gray-300 px-3 py-2 font-semibold text-center whitespace-nowrap">Overall Length (l1)</th>
            <th className="border border-gray-300 px-3 py-2 font-semibold text-center whitespace-nowrap">Flute Length (l2)</th>
            <th className="border border-gray-300 px-3 py-2 font-semibold text-center whitespace-nowrap">S.D. (d2)</th>
            <th className="border border-gray-300 px-3 py-2 font-semibold text-center whitespace-nowrap">Tap</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#fafafa]"}>
              <td className="border border-gray-300 px-3 py-1.5 text-left">{row.r}</td>
              <td className="border border-gray-300 px-3 py-1.5 text-center">{row.d1}</td>
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

function WorkPieceMaterialsTable() {
  return (
    <div className="w-full overflow-x-auto mb-4">
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
            <th className="border border-gray-300 px-2 py-1.5 text-center font-normal leading-tight">
              Carbon steel Alloy Steel&nbsp;{'(< 35 HRC)'}
            </th>
            <th className="border border-gray-300 px-2 py-1.5 text-center font-normal leading-tight">
              Alloy Steel Tool Steel&nbsp;{'(≥ 45 HRC)'}
            </th>
            <th className="border border-gray-300 px-2 py-1.5 text-center font-normal leading-tight">
              PM Ferrite Martensite Steel&nbsp;{'(< 35 HRC)'}
            </th>
            <th className="border border-gray-300 px-2 py-1.5 text-center font-normal leading-tight">
              Hardened Steel&nbsp;{'( 45~55 HRC )'}
            </th>
            <th className="border border-gray-300 px-2 py-1.5 text-center font-normal leading-tight">
              Hardened Steel&nbsp;{'( 55~60 HRC )'}
            </th>
            <th className="border border-gray-300 px-2 py-1.5 text-center font-normal leading-tight">
              Hardened Steel&nbsp;{'( >60 HRC )'}
            </th>
          </tr>
        </thead>
      </table>
    </div>
  );
}

function EndMillDiagram() {
  return (
    <img
      src="https://cdn.builder.io/api/v1/image/assets%2F2f0b492e34a14ec29346019ef2a7eaa9%2F48e643600ae24ca382a281bad2ee5e6d?format=webp&width=800&height=1200"
      alt="Ball Nose End Mill Diagram"
      className="w-full max-w-[480px]"
    />
  );
}

export default function NaritaBallNose() {
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
            BALL NOSE 2 FLUTE END MILLS
          </h1>

          {/* Description */}
          <p className="font-sarabun text-[13px] text-[#1e1e1e] leading-relaxed text-center max-w-[600px] mx-auto mb-8">
            Engineered for precision 3D machining and contouring, Narita ball nose 2 flutes deliver smooth surface
            finish and stable cutting performance. Designed for pre-hardened and hardened steel up to HRC50,
            featuring ultra-fine carbide (0.3~0.5 μm) and TiAlN coating for excellent wear resistance in high-speed
            applications.
          </p>

          {/* Diagram + product image */}
          <div className="flex flex-col sm:flex-row items-center gap-6 mb-10">
            <div className="flex-1 flex items-center justify-center">
              <EndMillDiagram />
            </div>
            <div className="flex-shrink-0 flex items-center justify-center">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/30d7875b1c393e6c980a64a2ba4ea56f5a4452dd?width=274"
                alt="Ball Nose 2 Flute End Mill"
                className="h-52 md:h-64 w-auto object-contain max-w-[200px] scale-x-[-1]"
              />
            </div>
          </div>

          {/* Specification section */}
          <h2 className="font-sarabun text-xl font-normal text-center mb-4">Specification</h2>

          <p className="font-sarabun text-sm text-center mb-3">Work Piece Materials</p>

          <WorkPieceMaterialsTable />
          <SpecTable rows={standardRows} />

          {/* Lengthen section */}
          <h2 className="font-sarabun text-[#B30B0F] text-2xl md:text-3xl font-bold mt-12 mb-4">
            LENGTHEN END MILLS
          </h2>

          <p className="font-sarabun text-sm text-center mb-3">Specification</p>

          <SpecTable rows={lengthenRows} />


        </div>
      </div>

      <Footer />
    </div>
  );
}
