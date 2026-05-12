import HeuleNavbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const standardRows = [
  { bore: "Ø2.0–5.0", maxDeburr: "0.10", workingLength: "15.3", series: "COFA C2" },
  { bore: "Ø2.0–4.1", maxDeburr: "0.15", workingLength: "20.6", series: "COFA C3" },
  { bore: "Ø4.0–6.0", maxDeburr: "0.25", workingLength: "26.0", series: "COFA 4M" },
  { bore: "Ø5.0–8.0", maxDeburr: "0.35", workingLength: "32.6", series: "COFA 5M" },
  { bore: "Ø6.0–8.4", maxDeburr: "0.70", workingLength: "46.0", series: "COFA C6" },
  { bore: "Ø8.0–12.4", maxDeburr: "0.90", workingLength: "61.0", series: "COFA C8" },
  { bore: "Ø12.0–26.0", maxDeburr: "1.45", workingLength: "70.0", series: "COFA C12" },
];

const cassetteRows = [
  { bore: "> Ø13.0", capacity: "0.70", series: "C6 Gas." },
  { bore: "> Ø14.0", capacity: "0.80", series: "C8 Gas." },
  { bore: "> Ø30.0", capacity: "1.20", series: "C12 Gas." },
];

const progDimRows = [
  { tool: "COFA C2", a: "1.7", b: "3.5", c: "4.5", d: "4.3", e: "" },
  { tool: "COFA C3", a: "2.5", b: "3.5", c: "4.5", d: "5.5", e: "" },
  { tool: "COFA 4M", a: "2.0", b: "5.5", c: "5.6", d: "5.3", e: "1.9" },
  { tool: "COFA 5M", a: "3.0", b: "7.0", c: "8.5", d: "8.4", e: "2.2" },
  { tool: "COFA C6 Large", a: "1.1", b: "6.5", c: "6.8", d: "4.8", e: "-0.8" },
  { tool: "COFA C8 Medium", a: "1.9", b: "8.0", c: "8.3", d: "8.1", e: "0" },
  { tool: "COFA C8 Large", a: "1.0", b: "6.8", c: "8.3", d: "8.1", e: "-0.4" },
  { tool: "COFA C12 Medium", a: "3.6", b: "11.0", c: "11.0", d: "8.8", e: "0" },
  { tool: "COFA C12 Large", a: "3.4", b: "13.0", c: "12.5", d: "8.8", e: "-1.0" },
];

const cuttingRows = [
  { code: "P1", material: "Low-carbon steel short-chipping", rm: "<530", hb: "<125", sym: "–", cool1: "H", vc1: "20×60", f1: "0.05–0.15", cool2: "A", vc2: "20×60", f2: "0.1–0.3", grade: "BP" },
  { code: "P2", material: "Steel C >0.3%", rm: ">530", hb: "<125", sym: "", cool1: "H", vc1: "20×80", f1: "0.05–0.15", cool2: "A", vc2: "20–90", f2: "0.1–0.3", grade: "B" },
  { code: "P3", material: "Alloy/tool steel", rm: "600–850", hb: "<3.20", sym: "<25", cool1: "H", vc1: "20–40", f1: "0.05–0.15", cool2: "A", vc2: "20–40", f2: "0.1–0.3", grade: "T" },
  { code: "P4", material: "Alloy/high-tool steel", rm: "850–1000", hb: "<1.40", sym: "<35–48", cool1: "S", vc1: "20–40", f1: "0.05–0.15", cool2: "A", vc2: "20–40", f2: "0.1–0.3", grade: "T" },
  { code: "P6", material: "High-strength steels (PH) stamping", rm: "800–1300", hb: "390–450", sym: "35–48", cool1: "Z", vc1: "15–30", f1: "0.05–0.15", cool2: "A", vc2: "15–30", f2: "0.1–0.3", grade: "T" },
  { code: "M1", material: "High-strength austenitic", rm: "<800", hb: "190–850", sym: "<25", cool1: "Z", vc1: "15–30", f1: "0.05–0.15", cool2: "A", vc2: "15–30", f2: "0.1–0.3", grade: "T" },
  { code: "M2", material: "Duplex stainless", rm: "125–555", hb: "120–350", sym: "<30", cool1: "Z", vc1: "15–20", f1: "0.05–0.15", cool2: "A", vc2: "15–20", f2: "0.1–0.3", grade: "T" },
  { code: "M3", material: "Cast iron", rm: "<400", hb: "160–300", sym: "≤40", cool1: "H", vc1: "15–40", f1: "0.05–0.15", cool2: "A", vc2: "20–50", f2: "0.1–0.3", grade: "T" },
  { code: "M5", material: "High-strength cast iron", rm: ">800", hb: "160–350", sym: "≤42", cool1: "H", vc1: "30–80", f1: "0.05–0.15", cool2: "D", vc2: "30–80", f2: "0.1–0.3", grade: "T" },
  { code: "N1", material: "Wrought aluminium", rm: "—", hb: "—", sym: "—", cool1: "W", vc1: "30–70", f1: "0.05–0.15", cool2: "D", vc2: "30–70", f2: "0.1–0.3", grade: "D" },
  { code: "N2", material: "Aluminium alloys", rm: "—", hb: "—", sym: "—", cool1: "W", vc1: "30–70", f1: "0.05–0.15", cool2: "D", vc2: "30–70", f2: "0.1–0.3", grade: "D" },
  { code: "N3", material: "Aluminium (high Si)", rm: "—", hb: "—", sym: "—", cool1: "W", vc1: "30–70", f1: "0.05–0.15", cool2: "D", vc2: "30–70", f2: "0.1–0.3", grade: "D" },
  { code: "N4", material: "Aluminium die-cast alloys", rm: "—", hb: "—", sym: "—", cool1: "W", vc1: "50–70", f1: "0.05–0.15", cool2: "D", vc2: "50–70", f2: "0.1–0.3", grade: "D" },
  { code: "S1", material: "Non-based metal-resistant", rm: "500–1300", hb: "100–360", sym: "38–48", cool1: "Z", vc1: "15–30", f1: "0.05–0.15", cool2: "A", vc2: "15–30", f2: "0.1–0.3", grade: "T" },
  { code: "S2", material: "Cobalt-based alloys", rm: "1000–1400", hb: "250–450", sym: "25–48", cool1: "Z", vc1: "15–25", f1: "0.05–0.15", cool2: "A", vc2: "15–25", f2: "0.1–0.3", grade: "T" },
  { code: "S3", material: "Nickel-based alloys", rm: "800–1700", hb: "400–650", sym: "33–48", cool1: "Z", vc1: "15–25", f1: "0.05–0.15", cool2: "A", vc2: "15–25", f2: "0.1–0.3", grade: "T" },
  { code: "S4", material: "Titanium alloys", rm: "800–1200", hb: "320–390", sym: "33–48", cool1: "Z", vc1: "10–25", f1: "0.05–0.15", cool2: "A", vc2: "10–25", f2: "0.1–0.3", grade: "T" },
];

const processSteps = [
  {
    label: "Rapid traverse to pos. A or 1.0 mm clearance\nSpindle rotation clockwise\nExternal coolant on",
  },
  { label: "Working feed" },
  { label: "Working feed" },
  { label: "Rapid traverse: (blade fold out position)" },
  { label: "Rapid traverse out of the work piece" },
  { label: "Rapid traverse out of the work piece (outer edge > 2.0 mm)" },
];

export default function CofaDeburring() {
  return (
    <div className="min-h-screen bg-[#f5f5f5] font-sarabun flex flex-col">
      <HeuleNavbar />

      <main className="mt-[60px] flex-1 overflow-hidden">

        {/* ── Hero Section ─────────────────────────────────────────────── */}
        <section className="relative w-full overflow-hidden min-h-[420px] md:min-h-[500px] flex items-center justify-center">
          {/* Background */}
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/b5b3e425511297b48447947438408554026b5791?width=2896"
            alt=""
            className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
          />
          {/* Left tool */}
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/1b038a3787022760f8e21dc8b24ce641443538a2?width=1984"
            alt=""
            className="absolute left-0 bottom-0 w-[35%] max-w-[300px] object-contain select-none pointer-events-none translate-y-4 -translate-x-8 opacity-75"
          />
          {/* Right tool */}
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/d66026a4e4dbe61612ec014b2e2699b9396b6f0f?width=1984"
            alt=""
            className="absolute right-0 top-0 w-[35%] max-w-[300px] object-contain select-none pointer-events-none -translate-y-4 translate-x-8 opacity-75"
          />
          {/* Centered text */}
          <div className="relative z-10 flex flex-col items-center text-center px-6 py-16 max-w-[860px] mx-auto">
            <h1 className="font-sarabun text-[#A32A19] text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">
              CofaDeburring
            </h1>
            <p className="font-sarabun text-black text-sm md:text-[15px] leading-relaxed max-w-[680px]">
              The COFA deburring tool by HEULE Werkzeug AG is designed for efficient front and back deburring of drilled
              holes—including uneven, sloped, or cross-hole geometries—in a single continuous operation. What makes COFA unique
              is its spring-loaded, self-adjusting blade system, which automatically follows the contour of the bore and removes
              burrs on both edges without stopping the spindle or repositioning the workpiece. This results in consistent edge
              quality, reduced cycle time, and the elimination of manual finishing, making it ideal for high-volume CNC machining
              environments where precision and productivity are critical.
            </p>
          </div>
        </section>

        {/* ── THE RANGE / STANDARD ─────────────────────────────────────── */}
        <section className="relative py-12 md:py-16">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/091c1556916c9587f51a28f59014d90ac185e978?width=2896"
            alt=""
            className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none opacity-30"
          />
          <div className="relative max-w-[900px] mx-auto px-6">
            <h2 className="font-sarabun text-[#A32A19] text-3xl md:text-4xl font-semibold text-center mb-1">
              THE RANGE
            </h2>
            <p className="text-center font-sarabun text-sm text-black mb-6">SPECIFICATION</p>

            <p className="font-sarabun text-[#A32A19] text-base font-semibold mb-3">STANDARD</p>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm font-sarabun">
                <thead>
                  <tr className="bg-[#A32A19] text-white">
                    <th className="border border-[#B8B8B8] px-4 py-2 text-left font-semibold whitespace-nowrap">Bore Ø Range (mm)</th>
                    <th className="border border-[#B8B8B8] px-4 py-2 text-left font-semibold whitespace-nowrap">Max. Deburring Size (mm)</th>
                    <th className="border border-[#B8B8B8] px-4 py-2 text-left font-semibold whitespace-nowrap">Working Length (mm)</th>
                    <th className="border border-[#B8B8B8] px-4 py-2 text-left font-semibold whitespace-nowrap">Series</th>
                  </tr>
                </thead>
                <tbody>
                  {standardRows.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white/70" : "bg-white/40"}>
                      <td className="border border-[#B8B8B8] px-4 py-2">{row.bore}</td>
                      <td className="border border-[#B8B8B8] px-4 py-2">{row.maxDeburr}</td>
                      <td className="border border-[#B8B8B8] px-4 py-2">{row.workingLength}</td>
                      <td className="border border-[#B8B8B8] px-4 py-2">{row.series}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── CASSETTE TOOLS PRODUCT IMAGE ────────────────────────────── */}
        <section className="relative py-12 md:py-16">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/091c1556916c9587f51a28f59014d90ac185e978?width=2896"
            alt=""
            className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none opacity-25"
          />
          <div className="relative max-w-[900px] mx-auto px-6 flex items-center justify-center">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F2f0b492e34a14ec29346019ef2a7eaa9%2F92f50dbd1528429b9ca459ecf71196a1?format=webp&width=800&height=1200"
              alt="COFA Cassette Tools Sortiment"
              className="w-full max-w-[500px] object-contain"
            />
          </div>
        </section>

        {/* ── CASSETTE TOOLS ───────────────────────────────────────────── */}
        <section className="relative py-12 md:py-16">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/febfea55ce3a087263564fed51943e7e878f46f3?width=2896"
            alt=""
            className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none opacity-30"
          />
          <div className="relative max-w-[900px] mx-auto px-6">
            <h2 className="font-sarabun text-[#A32A19] text-2xl md:text-3xl font-semibold mb-6">
              CASSETTE TOOLS
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm font-sarabun">
                <thead>
                  <tr className="bg-[#A32A19] text-white">
                    <th className="border border-[#B8B8B8] px-4 py-2 text-left font-semibold whitespace-nowrap">Bore Ø Range (mm)</th>
                    <th className="border border-[#B8B8B8] px-4 py-2 text-left font-semibold whitespace-nowrap">Deburring Capacity Max. (mm)</th>
                    <th className="border border-[#B8B8B8] px-4 py-2 text-left font-semibold whitespace-nowrap">Series</th>
                  </tr>
                </thead>
                <tbody>
                  {cassetteRows.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white/70" : "bg-white/40"}>
                      <td className="border border-[#B8B8B8] px-4 py-2">{row.bore}</td>
                      <td className="border border-[#B8B8B8] px-4 py-2">{row.capacity}</td>
                      <td className="border border-[#B8B8B8] px-4 py-2">{row.series}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── OPERATING PRINCIPLE + IMAGE + MAXIMUM UNEVENNESS ──────────── */}
        <section className="relative py-12 md:py-16">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/091c1556916c9587f51a28f59014d90ac185e978?width=2896"
            alt=""
            className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none opacity-25"
          />
          <div className="relative max-w-[1100px] mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-center">
              {/* Left: Operating Principle */}
              <div className="flex flex-col justify-center">
                <h2 className="font-sarabun text-[#A32A19] text-xl md:text-2xl font-semibold mb-3">
                  OPERATING PRINCIPLE
                </h2>
                <p className="font-sarabun text-black text-sm md:text-[15px] leading-relaxed">
                  The COFA blade is spring-loaded in the tool body. This means that the cutting edge also follows uneven bore
                  edges. The cutting edge removes the burr along with the burr root without creating a secondary burr. The blade
                  pivots into the tool body as it enters the bore. The result is a bore edge deburred with a radius form.
                </p>
              </div>

              {/* Center: Image */}
              <div className="flex items-center justify-center">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F2f0b492e34a14ec29346019ef2a7eaa9%2Febeb565a9831444db25117ed98f1ba4a?format=webp&width=800&height=1200"
                  alt="COFA Tool Design"
                  className="w-full max-w-[280px] object-contain"
                />
              </div>

              {/* Right: Maximum Unevenness */}
              <div className="flex flex-col justify-center">
                <h2 className="font-sarabun text-[#A32A19] text-xl md:text-2xl font-semibold mb-3">
                  MAXIMUM UNEVENNESS
                </h2>
                <p className="font-sarabun text-black text-sm md:text-[15px] leading-relaxed">
                  COFA is designed for machining uneven bore edges. The standard blade can reliably deburr uneven edges up to
                  α ≤18°. This corresponds to a diameter ratio (d:D) of 0.5. The range also includes blades with a clearance
                  angle of up to 30° for greater unevenness. For larger irregularities, tools and blades from the INDIVIDUAL
                  range, e.g. COFA-X, are used.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── TOOL DESIGN ──────────────────────────────────────────────── */}
        <section className="relative py-12 md:py-16">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/091c1556916c9587f51a28f59014d90ac185e978?width=2896"
            alt=""
            className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none opacity-25"
          />
          <div className="relative max-w-[900px] mx-auto px-6">
            <div className="flex flex-col md:flex-row gap-10 items-center">
              <div className="flex-1 flex items-center justify-center">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/d0690171deb4b722b22835fc1c51a5485e314ed3?width=1090"
                  alt="COFA Tool Design"
                  className="w-full max-w-[460px] object-contain"
                />
              </div>
              <div className="flex-1 text-right">
                <h2 className="font-sarabun text-[#A32A19] text-xl md:text-2xl font-semibold mb-3">
                  TOOL DESIGN
                </h2>
                <p className="font-sarabun text-black text-sm md:text-[15px] leading-relaxed">
                  Simple, robust, reliable. The COFA tool family is made up of two types. In the COFA C2/C3 and 4M/5M, the
                  blade is held directly in the tool body by a split pin. With the COFA C6 to C12, a separate blade is retained
                  and guided by a solid blade holder.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── COFA PROCESS STEPS ───────────────────────────────────────── */}
        <section className="relative py-12 md:py-16">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/febfea55ce3a087263564fed51943e7e878f46f3?width=2896"
            alt=""
            className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none opacity-25"
          />
          <div className="relative max-w-[1100px] mx-auto px-6">
            <h2 className="font-sarabun text-[#A32A19] text-xl md:text-2xl font-semibold text-center mb-8">
              COFA PROCESS STEPS
            </h2>

            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/ee152f03f05a8b4ea60659f44eb43494e6d86a8d?width=2050"
              alt="COFA Process Steps Diagram 1"
              className="w-full object-contain mb-2"
            />
            <div className="grid grid-cols-3 gap-2 mb-8">
              {processSteps.slice(0, 3).map((step, i) => (
                <p key={i} className="font-sarabun text-black text-xs md:text-sm leading-snug whitespace-pre-line text-center">
                  {step.label}
                </p>
              ))}
            </div>

            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/5eb1fe0f8d07b427c28570c66533b6bea7feb4b4?width=2050"
              alt="COFA Process Steps Diagram 2"
              className="w-full object-contain mb-2"
            />
            <div className="grid grid-cols-3 gap-2">
              {processSteps.slice(3).map((step, i) => (
                <p key={i} className="font-sarabun text-black text-xs md:text-sm leading-snug text-center">
                  {step.label}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROGRAMMING DIMENSION TABLE ──────────────────────────────── */}
        <section className="relative py-12 md:py-16">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/091c1556916c9587f51a28f59014d90ac185e978?width=2896"
            alt=""
            className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none opacity-25"
          />
          <div className="relative max-w-[900px] mx-auto px-6">
            <h2 className="font-sarabun text-[#A32A19] text-xl md:text-2xl font-semibold mb-6">
              PROGRAMMING DIMENSION TABLE
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm font-inter">
                <thead>
                  <tr>
                    <th className="border border-[#B8B8B8] px-3 py-2 text-left text-black font-normal bg-white/60">Tool</th>
                    {["A", "B", "C", "D", "E"].map((h) => (
                      <th key={h} className="border border-[#B8B8B8] px-3 py-2 text-left text-black font-normal bg-white/60">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {progDimRows.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white/70" : "bg-white/40"}>
                      <td className="border border-[#B8B8B8] px-3 py-2 whitespace-nowrap">{row.tool}</td>
                      <td className="border border-[#B8B8B8] px-3 py-2">{row.a}</td>
                      <td className="border border-[#B8B8B8] px-3 py-2">{row.b}</td>
                      <td className="border border-[#B8B8B8] px-3 py-2">{row.c}</td>
                      <td className="border border-[#B8B8B8] px-3 py-2">{row.d}</td>
                      <td className="border border-[#B8B8B8] px-3 py-2">{row.e}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── CUTTING DATA ─────────────────────────────────────────────── */}
        <section className="relative py-12 md:py-16">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/59460b3436a961710e2a5960760b4a43317ac5d9?width=2896"
            alt=""
            className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none opacity-25"
          />
          <div className="relative max-w-[1100px] mx-auto px-6">
            <h2 className="font-sarabun text-[#A32A19] text-xl font-semibold mb-4">CUTTING DATA</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-xs font-inter min-w-[700px]">
                <thead>
                  <tr>
                    <th className="border border-[#B8B8B8] px-2 py-2 text-center font-normal bg-white/60"></th>
                    <th className="border border-[#B8B8B8] px-2 py-2 text-center font-normal bg-white/60">Material</th>
                    <th className="border border-[#B8B8B8] px-2 py-2 text-center font-normal bg-white/60">Rm N/mm²</th>
                    <th className="border border-[#B8B8B8] px-2 py-2 text-center font-normal bg-white/60">HB</th>
                    <th className="border border-[#B8B8B8] px-2 py-2 text-center font-normal bg-white/60"></th>
                    <th className="border border-[#B8B8B8] px-2 py-2 text-center font-normal bg-white/60">Cool.</th>
                    <th className="border border-[#B8B8B8] px-2 py-2 text-center font-normal bg-white/60">Vc m/min</th>
                    <th className="border border-[#B8B8B8] px-2 py-2 text-center font-normal bg-white/60">f mm</th>
                    <th className="border border-[#B8B8B8] px-2 py-2 text-center font-normal bg-white/60">Cool.</th>
                    <th className="border border-[#B8B8B8] px-2 py-2 text-center font-normal bg-white/60">Vc m/min</th>
                    <th className="border border-[#B8B8B8] px-2 py-2 text-center font-normal bg-white/60">f mm</th>
                    <th className="border border-[#B8B8B8] px-2 py-2 text-center font-normal bg-white/60"></th>
                  </tr>
                </thead>
                <tbody>
                  {cuttingRows.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white/70" : "bg-white/40"}>
                      <td className="border border-[#B8B8B8] px-2 py-1.5 text-center font-semibold">{row.code}</td>
                      <td className="border border-[#B8B8B8] px-2 py-1.5">{row.material}</td>
                      <td className="border border-[#B8B8B8] px-2 py-1.5 text-center">{row.rm}</td>
                      <td className="border border-[#B8B8B8] px-2 py-1.5 text-center">{row.hb}</td>
                      <td className="border border-[#B8B8B8] px-2 py-1.5 text-center">{row.sym}</td>
                      <td className="border border-[#B8B8B8] px-2 py-1.5 text-center">{row.cool1}</td>
                      <td className="border border-[#B8B8B8] px-2 py-1.5 text-center">{row.vc1}</td>
                      <td className="border border-[#B8B8B8] px-2 py-1.5 text-center">{row.f1}</td>
                      <td className="border border-[#B8B8B8] px-2 py-1.5 text-center">{row.cool2}</td>
                      <td className="border border-[#B8B8B8] px-2 py-1.5 text-center">{row.vc2}</td>
                      <td className="border border-[#B8B8B8] px-2 py-1.5 text-center">{row.f2}</td>
                      <td className="border border-[#B8B8B8] px-2 py-1.5 text-center">{row.grade}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
