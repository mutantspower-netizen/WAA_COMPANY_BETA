import NaritaNavbar from "@/components/NaritaNavbar";
import Footer from "@/components/Footer";

const standardRows = [
  { d1: "1",   l1: "50",  l2: "3",  d2: "4 / 6", tap: "15" },
  { d1: "1.5", l1: "50",  l2: "4",  d2: "4 / 6", tap: "15" },
  { d1: "2",   l1: "50",  l2: "6",  d2: "4 / 6", tap: "15" },
  { d1: "2.5", l1: "50",  l2: "8",  d2: "4 / 6", tap: "15" },
  { d1: "3",   l1: "50",  l2: "8",  d2: "4 / 6", tap: "15" },
  { d1: "4",   l1: "50",  l2: "12", d2: "4 / 6", tap: "- / 15" },
  { d1: "5",   l1: "50",  l2: "15", d2: "6",     tap: "15" },
  { d1: "6",   l1: "50",  l2: "15", d2: "6",     tap: "-" },
  { d1: "7",   l1: "60",  l2: "20", d2: "8",     tap: "15" },
  { d1: "8",   l1: "60",  l2: "20", d2: "8",     tap: "-" },
  { d1: "9",   l1: "75",  l2: "30", d2: "10",    tap: "15" },
  { d1: "10",  l1: "75",  l2: "30", d2: "10",    tap: "-" },
  { d1: "11",  l1: "75",  l2: "30", d2: "12",    tap: "15" },
  { d1: "12",  l1: "75",  l2: "30", d2: "12",    tap: "-" },
  { d1: "14",  l1: "100", l2: "32", d2: "14",    tap: "-" },
  { d1: "16",  l1: "100", l2: "45", d2: "16",    tap: "-" },
  { d1: "20",  l1: "100", l2: "45", d2: "20",    tap: "-" },
  { d1: "25",  l1: "100", l2: "45", d2: "25",    tap: "-" },
];

const lengthenRows = [
  { d1: "1",   l1: "50",  l2: "3",  d2: "4 / 6", tap: "15" },
  { d1: "1.5", l1: "50",  l2: "4",  d2: "4 / 6", tap: "15" },
  { d1: "2",   l1: "50",  l2: "6",  d2: "4 / 6", tap: "15" },
  { d1: "2.5", l1: "50",  l2: "8",  d2: "4 / 6", tap: "15" },
  { d1: "3",   l1: "50",  l2: "8",  d2: "4 / 6", tap: "15" },
  { d1: "4",   l1: "50",  l2: "12", d2: "4 / 6", tap: "- / 15" },
  { d1: "5",   l1: "50",  l2: "15", d2: "6",     tap: "15" },
  { d1: "6",   l1: "50",  l2: "15", d2: "6",     tap: "-" },
  { d1: "7",   l1: "60",  l2: "20", d2: "8",     tap: "15" },
  { d1: "8",   l1: "60",  l2: "20", d2: "8",     tap: "-" },
  { d1: "9",   l1: "75",  l2: "30", d2: "10",    tap: "15" },
  { d1: "10",  l1: "75",  l2: "30", d2: "10",    tap: "-" },
  { d1: "11",  l1: "75",  l2: "30", d2: "12",    tap: "15" },
  { d1: "12",  l1: "75",  l2: "30", d2: "12",    tap: "-" },
  { d1: "14",  l1: "100", l2: "32", d2: "14",    tap: "-" },
  { d1: "16",  l1: "100", l2: "45", d2: "16",    tap: "-" },
  { d1: "20",  l1: "100", l2: "45", d2: "20",    tap: "-" },
  { d1: "25",  l1: "100", l2: "45", d2: "25",    tap: "-" },
];

function StandardSpecTable({ rows }: { rows: typeof standardRows }) {
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

function LengthenSpecTable({ rows }: { rows: typeof lengthenRows }) {
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full text-sm font-sarabun border-collapse">
        <thead>
          <tr className="bg-[#f0f0f0]">
            <th className="border border-gray-300 px-3 py-2 font-semibold text-left whitespace-nowrap">Dia (d1)</th>
            <th className="border border-gray-300 px-3 py-2 font-semibold text-center whitespace-nowrap">L (l1)</th>
            <th className="border border-gray-300 px-3 py-2 font-semibold text-center whitespace-nowrap">Fl (l2)</th>
            <th className="border border-gray-300 px-3 py-2 font-semibold text-center whitespace-nowrap">Shank (d2)</th>
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
              High standard steel
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

function FourFluteDiagram() {
  return (
    <svg viewBox="0 0 560 220" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-[500px]">
      {/* ── Profile view ─────────────────────────────── */}
      {/* Shank (right portion) */}
      <rect x="280" y="72" width="230" height="46" fill="none" stroke="#333" strokeWidth="1.2" />
      {/* Cutting portion (left, slightly wider) */}
      <rect x="80" y="64" width="200" height="62" fill="none" stroke="#333" strokeWidth="1.2" />
      {/* Flat nose */}
      <line x1="80" y1="64" x2="80" y2="126" stroke="#333" strokeWidth="1.8" />
      {/* Junction taper lines */}
      <line x1="280" y1="64" x2="280" y2="72" stroke="#333" strokeWidth="1.2" />
      <line x1="280" y1="118" x2="280" y2="126" stroke="#333" strokeWidth="1.2" />
      {/* Cutting flute lines (suggest 4-flute helix) */}
      <path d="M130,64 Q155,95 130,126" fill="none" stroke="#333" strokeWidth="0.7" strokeDasharray="4,2" />
      <path d="M180,64 Q205,95 180,126" fill="none" stroke="#333" strokeWidth="0.7" strokeDasharray="4,2" />
      <path d="M230,64 Q255,95 230,126" fill="none" stroke="#333" strokeWidth="0.7" strokeDasharray="4,2" />

      {/* d1 label top-left */}
      <line x1="80" y1="50" x2="80" y2="64" stroke="#333" strokeWidth="0.8" />
      <text x="72" y="46" fontSize="12" fontFamily="serif" fontStyle="italic" fill="#333" textAnchor="middle">d1</text>
      <line x1="60" y1="50" x2="100" y2="50" stroke="#333" strokeWidth="0.8" />

      {/* d2 label top-right */}
      <line x1="510" y1="50" x2="510" y2="72" stroke="#333" strokeWidth="0.8" />
      <text x="520" y="46" fontSize="12" fontFamily="serif" fontStyle="italic" fill="#333" textAnchor="start">d2</text>
      <line x1="498" y1="50" x2="524" y2="50" stroke="#333" strokeWidth="0.8" />
      <line x1="498" y1="118" x2="524" y2="118" stroke="#333" strokeWidth="0.8" />
      <line x1="510" y1="118" x2="510" y2="130" stroke="#333" strokeWidth="0.8" />

      {/* l2 dimension (cutting length) */}
      <line x1="80" y1="140" x2="280" y2="140" stroke="#333" strokeWidth="0.8" />
      <line x1="80" y1="135" x2="80" y2="145" stroke="#333" strokeWidth="0.8" />
      <line x1="280" y1="135" x2="280" y2="145" stroke="#333" strokeWidth="0.8" />
      <text x="180" y="154" fontSize="12" fontFamily="serif" fontStyle="italic" fill="#333" textAnchor="middle">l2</text>

      {/* l1 dimension (overall length) */}
      <line x1="80" y1="162" x2="510" y2="162" stroke="#333" strokeWidth="0.8" />
      <line x1="80" y1="157" x2="80" y2="167" stroke="#333" strokeWidth="0.8" />
      <line x1="510" y1="157" x2="510" y2="167" stroke="#333" strokeWidth="0.8" />
      <text x="295" y="176" fontSize="12" fontFamily="serif" fontStyle="italic" fill="#333" textAnchor="middle">l1</text>

      {/* ── Cross-section (4-flute pattern) ─────────── */}
      <circle cx="280" cy="200" r="14" fill="none" stroke="#333" strokeWidth="1.2" />
      {/* 4-flute cross lines */}
      <line x1="266" y1="200" x2="294" y2="200" stroke="#333" strokeWidth="0.8" />
      <line x1="280" y1="186" x2="280" y2="214" stroke="#333" strokeWidth="0.8" />
      {/* 4 flute arcs */}
      <path d="M273,193 Q277,200 273,207" fill="none" stroke="#333" strokeWidth="1" />
      <path d="M287,193 Q283,200 287,207" fill="none" stroke="#333" strokeWidth="1" />
      <path d="M273,193 Q280,197 287,193" fill="none" stroke="#333" strokeWidth="1" />
      <path d="M273,207 Q280,203 287,207" fill="none" stroke="#333" strokeWidth="1" />
    </svg>
  );
}

export default function Narita4Flutes() {
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

        {/* Decorative left side image */}
        <div className="absolute left-0 top-[260px] w-28 md:w-44 pointer-events-none select-none overflow-hidden opacity-80">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/0823aeb34f173a738e8884f3e139142cb7a02929?width=136"
            alt=""
            className="w-full object-contain -translate-x-1/4"
          />
        </div>

        {/* Decorative right side image */}
        <div className="absolute right-0 top-[60px] w-32 md:w-44 pointer-events-none select-none overflow-hidden opacity-80">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/0823aeb34f173a738e8884f3e139142cb7a02929?width=136"
            alt=""
            className="w-full object-contain translate-x-1/4"
          />
        </div>

        {/* Decorative right lower image */}
        <div className="absolute right-0 top-[900px] w-28 md:w-40 pointer-events-none select-none overflow-hidden opacity-70">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/0823aeb34f173a738e8884f3e139142cb7a02929?width=136"
            alt=""
            className="w-full object-contain translate-x-1/4"
          />
        </div>

        {/* Main content */}
        <div className="relative max-w-[760px] mx-auto px-6 py-10">

          {/* Title */}
          <h1 className="font-sarabun text-[#B30B0F] text-2xl md:text-3xl font-bold text-center mb-5">
            4 FLUTES END MILL
          </h1>

          {/* Description */}
          <p className="font-sarabun text-[13px] text-[#1e1e1e] leading-relaxed text-center max-w-[600px] mx-auto mb-8">
            Engineered for high-speed finishing and machining of hardened steel up to HRC50, Narita 4 flutes end
            mills offer superior rigidity and precision. Featuring ultra-fine carbide (0.3–0.5 μm) and TiAlN coating for
            excellent wear resistance, ensuring smooth surface finish and consistent performance.
          </p>

          {/* Diagram + product image */}
          <div className="flex flex-col sm:flex-row items-center gap-6 mb-10">
            <div className="flex-1 flex items-center justify-center">
              <FourFluteDiagram />
            </div>
            <div className="flex-shrink-0 flex items-center justify-center">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/0823aeb34f173a738e8884f3e139142cb7a02929?width=136"
                alt="4 Flutes End Mill"
                className="h-52 md:h-64 w-auto object-contain max-w-[200px]"
              />
            </div>
          </div>

          {/* Workpiece Material + standard spec table */}
          <p className="font-sarabun text-sm text-center mb-3">Workpiece Material</p>
          <WorkpieceMaterialTable />
          <StandardSpecTable rows={standardRows} />

          {/* Lengthen End Mills section */}
          <div className="mt-10">
            <h2 className="font-sarabun text-[#B30B0F] text-2xl md:text-3xl font-bold mb-2">
              LENGTHEN END MILLS
            </h2>
            <p className="font-sarabun text-sm mb-4">Specification</p>
            <LengthenSpecTable rows={lengthenRows} />
          </div>

          {/* Bottom decorative image */}
          <div className="flex justify-end mt-8 pointer-events-none select-none">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/0823aeb34f173a738e8884f3e139142cb7a02929?width=136"
              alt=""
              className="h-36 w-auto object-contain opacity-70"
            />
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}
