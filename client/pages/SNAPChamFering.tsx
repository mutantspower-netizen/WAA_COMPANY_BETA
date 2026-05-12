import HeuleNavbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const rangeRows = [
  { bore: "Ø2.0–2.9", maxDeburr: "0.2 – 0.3", workingLength: "SNAP2" },
  { bore: "Ø3.0–3.9", maxDeburr: "0.3 – 0.5", workingLength: "SNAP3" },
  { bore: "Ø4.0–5.0", maxDeburr: "0.6 – 0.75", workingLength: "SNAP4" },
  { bore: "Ø8.0–12.0", maxDeburr: "1.00", workingLength: "SNAP5" },
  { bore: "Ø12.0–20.0", maxDeburr: "0.5 – 0.75", workingLength: "SNAP8" },
  { bore: "Ø25.0–35.0", maxDeburr: "1.00", workingLength: "SNAP12" },
  { bore: "Ø1.85–2.10", maxDeburr: "1.50", workingLength: "SNAP20" },
];

const cuttingRows = [
  { code: "P6",  material: "Low-carbon steel", rm: "<530", hb: "<125", hrc: "–", vc: "30–90", fz: "0.05–0.5/E", b: "A" },
  { code: "P4",  material: "Low-carbon steel long-chipping", rm: ">530", hb: "<125", hrc: "", vc: "30–90", fz: "0.05–0.5/E", b: "A" },
  { code: "P3",  material: "Steel HC ≥0.3%", rm: "600", hb: "<800", hrc: "<25", vc: "30–60", fz: "0.05–0.5/E", b: "A" },
  { code: "P2",  material: "Alloy/tool steel", rm: "600–1440", hb: "<500", hrc: "39–48", vc: "20–50", fz: "0.05–0.15/E", b: "A" },
  { code: "P5",  material: "High-strength alloy/tool steel", rm: "800–900", hb: "160–500", hrc: "", vc: "20–50", fz: "0.05–0.15/E", b: "A" },
  { code: "P1",  material: "High-strength stainless/PH stamping", rm: "800–1050", hb: "250–450", hrc: "20–48", vc: "20–60", fz: "0.05–0.15/E", b: "A" },
  { code: "M1",  material: "High-strength austenitic", rm: "<800", hb: "190–850", hrc: "<25", vc: "15–30", fz: "0.05–0.15/E", b: "A" },
  { code: "M2",  material: "Duplex stainless", rm: "125–555", hb: "120–350", hrc: "<30", vc: "10–30", fz: "0.05–0.15/E", b: "A" },
  { code: "M4",  material: "Austenitic stainless", rm: "600–850", hb: "170–220", hrc: "", vc: "15–30", fz: "0.05–0.15/E", b: "A" },
  { code: "M5",  material: "Duplex stainless", rm: "400–800", hb: "130–375", hrc: "<30", vc: "15–30", fz: "0.05–0.15/E", b: "A" },
  { code: "K1",  material: "Cast iron", rm: "<400", hb: "100–300", hrc: "<32", vc: "40–90", fz: "0.05–0.5/E", b: "A" },
  { code: "K2",  material: "Ductile cast iron", rm: "400–900", hb: "140–300", hrc: "", vc: "40–90", fz: "0.05–0.5/E", b: "D" },
  { code: "K3",  material: "High-strength cast iron", rm: ">800", hb: "160–350", hrc: "≤43", vc: "40–90", fz: "0.05–0.5/E", b: "D" },
  { code: "N1",  material: "Wrought aluminium", rm: "—", hb: "—", hrc: "", vc: "80–250", fz: "0.05–0.5/E", b: "D" },
  { code: "N2",  material: "Aluminium alloys (low Si)", rm: "—", hb: "—", hrc: "", vc: "80–250", fz: "0.05–0.5/E", b: "D" },
  { code: "N3",  material: "Aluminium (high Si)", rm: "—", hb: "—", hrc: "", vc: "80–250", fz: "0.05–0.5/E", b: "D" },
  { code: "N4",  material: "Aluminium die-cast alloys", rm: "—", hb: "—", hrc: "", vc: "80–250", fz: "0.05–0.5/E", b: "D" },
  { code: "S2",  material: "Cobalt-based alloys", rm: "1000–1400", hb: "250–450", hrc: "25–48", vc: "15–25", fz: "0.05–0.15/E", b: "A" },
  { code: "S3",  material: "Non-based metal-resistant", rm: "500–1300", hb: "100–360", hrc: "38–48", vc: "10–30", fz: "0.05–0.15/E", b: "A" },
  { code: "S4",  material: "Titanium alloys", rm: "800–1200", hb: "320–390", hrc: "33–48", vc: "10–25", fz: "0.05–0.15/E", b: "A" },
];

const processSteps = [
  { label: "Rapid feed to position A or\n1.0 mm distance\nSpindle turning with clockwise\nInternal coolant on" },
  { label: "Working feed to position B" },
  { label: "Rapid feed to position C or\n0.5 mm distance" },
  { label: "Working feed to position D" },
  { label: "Rapid feed out of the workpiece" },
];

export default function Dl2Deburring() {
  return (
    <div className="min-h-screen bg-[#f5f5f5] font-sarabun flex flex-col">
      <HeuleNavbar />

      <main className="mt-[60px] flex-1 overflow-hidden">

        {/* ── Hero Section ─────────────────────────────────────────────── */}
        <section className="relative w-full overflow-hidden min-h-[420px] md:min-h-[500px] flex items-center justify-center">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/b5b3e425511297b48447947438408554026b5791?width=2896"
            alt=""
            className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
          />
          <div className="relative z-10 flex flex-col items-center text-center px-6 py-16 max-w-[860px] mx-auto">
            <h1 className="font-sarabun text-[#A32A19] text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">
             SNAP CHAMFERING
            </h1>
            <p className="font-sarabun text-black text-sm md:text-[15px] leading-relaxed max-w-[680px]">
              The SNAP deburring tool by HEULE Werkzeug AG is designed for precise front and back chamfering of drilled holes in a single continuous operation. 
              What makes SNAP unique is its interchangeable blade system, which allows different chamfer sizes to be achieved for various bore diameters while maintaining consistent and accurate edge quality. 
              The tool operates efficiently without the need for manual repositioning, reducing machining time and improving productivity in CNC applications. Its compact design and cylindrical shank provide stable and reliable performance, making SNAP an ideal solution for high-precision chamfering operations where flexibility, repeatability, and process efficiency are essential.
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

            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm font-sarabun">
                <thead>
                  <tr className="bg-[#A32A19] text-white">
                    <th className="border border-[#B8B8B8] px-4 py-2 text-left font-semibold whitespace-nowrap">Bore Ø Range (mm)</th>
                    <th className="border border-[#B8B8B8] px-4 py-2 text-left font-semibold whitespace-nowrap">Max. Deburring Size (mm)</th>
                    <th className="border border-[#B8B8B8] px-4 py-2 text-left font-semibold whitespace-nowrap">Max. Working Length (mm)</th>
                  </tr>
                </thead>
                <tbody>
                  {rangeRows.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white/70" : "bg-white/40"}>
                      <td className="border border-[#B8B8B8] px-4 py-2">{row.bore}</td>
                      <td className="border border-[#B8B8B8] px-4 py-2">{row.maxDeburr}</td>
                      <td className="border border-[#B8B8B8] px-4 py-2">{row.workingLength}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── OPERATING PRINCIPLE + CONTROLLED DEBURRING ───────────────── */}
        <section className="relative py-12 md:py-16">
          <div className="relative max-w-[1100px] mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              {/* Left: Operating Principle */}
              <div className="flex flex-col justify-center">
                <h2 className="font-sarabun text-[#A32A19] text-xl md:text-2xl font-semibold mb-3">
                  OPERATING PRINCIPLE
                </h2>
                <p className="font-sarabun text-black text-sm md:text-[15px] leading-relaxed">
                  Due to its size, the DL2 blade performs the function of the spring and the blade simultaneously. Due to the
                  rigid alignment of the blade, the operating principle is different from that of other HEULE tool systems. The
                  blade has been designed in such a way that it can be used in confined spaces without compromising on
                  functionality.
                </p>
              </div>

              {/* Center: Product image */}
              <div className="flex items-center justify-center">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F2f0b492e34a14ec29346019ef2a7eaa9%2F8b4dad89ebff434c905ae86f36683acf?format=webp&width=800&height=1200"
                  alt="DL2 Tool"
                  className="w-full max-w-[260px] object-contain"
                />
              </div>

              {/* Right: Controlled Deburring */}
              <div className="flex flex-col justify-center">
                <h2 className="font-sarabun text-[#A32A19] text-xl md:text-2xl font-semibold mb-3">
                  CONTROLLED DEBURRING
                </h2>
                <p className="font-sarabun text-black text-sm md:text-[15px] leading-relaxed">
                  The blade produces the desired debur in working feed. Upon completion of deburring, the blade automatically
                  retracts into the blade housing without external activation. The specially designed sliding section of the blade
                  prevents the bores from being damaged. The spring coated blade automatically returns to its neutral position
                  when it re-fits the bore.
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
          <div className="relative max-w-[900px] mx-auto px-6 text-center">
            <h2 className="font-sarabun text-[#A32A19] text-xl md:text-2xl font-semibold mb-4">
              TOOL DESIGN
            </h2>
            <p className="font-sarabun text-black text-sm md:text-[15px] leading-relaxed max-w-[760px] mx-auto">
              The DL2 tool has a very simple and robust design, comprising only four components in its entire construction.
              The advantages of the design become obvious when changing the blade. Despite the extremely delicate dimensions of
              the cutting edge, the blade is easy to replace without tweezers or a magnifying glass. The tool body and blade
              housing form the heart of this mini tool. The coolant sleeve guides the coolant into the blade window and ensures
              that the cutting edge is flushed at all times. The smaller the tool, the more important cooling is for reliable
              operation and a long blade life.
            </p>
          </div>
        </section>

        {/* ── DL2 PROCESS STEPS ────────────────────────────────────────── */}
        <section className="relative py-12 md:py-16">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/59460b3436a961710e2a5960760b4a43317ac5d9?width=2896"
            alt=""
            className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none opacity-25"
          />
          <div className="relative max-w-[1100px] mx-auto px-6">
            <h2 className="font-sarabun text-[#A32A19] text-xl md:text-2xl font-semibold text-center mb-8">
              DL2 PROCESS STEPS
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 md:gap-8">
              {processSteps.map((step, i) => (
                <div key={i} className="flex flex-col items-center gap-3">
                  <div className="w-full aspect-square max-w-[180px] bg-white/60 border border-[#B8B8B8] rounded flex items-center justify-center">
                    <span className="text-[#A32A19] font-semibold text-2xl">{i + 1}</span>
                  </div>
                  <p className="font-sarabun text-black text-xs md:text-sm leading-snug text-center whitespace-pre-line">
                    {step.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROGRAMMING DIMENSION EXAMPLE ────────────────────────────── */}
        <section className="relative py-12 md:py-16">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/091c1556916c9587f51a28f59014d90ac185e978?width=2896"
            alt=""
            className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none opacity-25"
          />
          <div className="relative max-w-[900px] mx-auto px-6">
            <h2 className="font-sarabun text-[#A32A19] text-xl md:text-2xl font-semibold mb-8">
              PROGRAMMING DIMENSION EXAMPLE
            </h2>
            <div className="flex flex-col md:flex-row gap-10 items-start">
              {/* Tool image */}
              <div className="flex-shrink-0 flex items-center justify-center w-full md:w-auto">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F2f0b492e34a14ec29346019ef2a7eaa9%2Febeb565a9831444db25117ed98f1ba4a?format=webp&width=800&height=1200"
                  alt="DL2 Dimension Diagram"
                  className="w-full max-w-[220px] object-contain"
                />
              </div>
              {/* Data columns */}
              <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm font-sarabun">
                {/* Application Data */}
                <div>
                  <h3 className="font-semibold text-black mb-2 border-b border-[#B8B8B8] pb-1">APPLICATION DATA</h3>
                  <dl className="space-y-1">
                    {[
                      { label: "Material", value: "Steel 45" },
                      { label: "Bore diameter", value: "Ø1.7 mm" },
                      { label: "Deburr diameter", value: "Ø1.7 mm" },
                      { label: "Bore height max.", value: "20 mm" },
                      { label: "Workpiece depth", value: "1.5 mm" },
                      { label: "Machining", value: "Both bore edges" },
                    ].map(({ label, value }) => (
                      <div key={label} className="flex flex-col">
                        <dt className="text-gray-500 text-xs">{label}</dt>
                        <dd className="text-black">{value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
                {/* Tool and Selection */}
                <div>
                  <h3 className="font-semibold text-black mb-2 border-b border-[#B8B8B8] pb-1">TOOL AND SELECTION</h3>
                  <dl className="space-y-1">
                    {[
                      { label: "Tool", value: "DL2/17/1" },
                      { label: "Insert", value: "DL2-M-17/A-0.1M Latura coated" },
                    ].map(({ label, value }) => (
                      <div key={label} className="flex flex-col">
                        <dt className="text-gray-500 text-xs">{label}</dt>
                        <dd className="text-black">{value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
                {/* Cutting Data */}
                <div>
                  <h3 className="font-semibold text-black mb-2 border-b border-[#B8B8B8] pb-1">CUTTING DATA</h3>
                  <dl className="space-y-1">
                    {[
                      { label: "Cutting speed Vc", value: "20–50 m/min" },
                      { label: "Cutting speed Vf", value: "0.009–0.070 mm/rev" },
                    ].map(({ label, value }) => (
                      <div key={label} className="flex flex-col">
                        <dt className="text-gray-500 text-xs">{label}</dt>
                        <dd className="text-black">{value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CUTTING DATA ─────────────────────────────────────────────── */}
        <section className="relative py-12 md:py-16">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/febfea55ce3a087263564fed51943e7e878f46f3?width=2896"
            alt=""
            className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none opacity-25"
          />
          <div className="relative max-w-[1100px] mx-auto px-6">
            <h2 className="font-sarabun text-[#A32A19] text-xl font-semibold mb-4">CUTTING DATA</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-xs font-inter min-w-[600px]">
                <thead>
                  <tr>
                    <th className="border border-[#B8B8B8] px-2 py-2 text-center font-normal bg-white/60"></th>
                    <th className="border border-[#B8B8B8] px-2 py-2 text-center font-normal bg-white/60">Description</th>
                    <th className="border border-[#B8B8B8] px-2 py-2 text-center font-normal bg-white/60">Tensile str. RM (MPa)</th>
                    <th className="border border-[#B8B8B8] px-2 py-2 text-center font-normal bg-white/60">HB</th>
                    <th className="border border-[#B8B8B8] px-2 py-2 text-center font-normal bg-white/60">HRC</th>
                    <th className="border border-[#B8B8B8] px-2 py-2 text-center font-normal bg-white/60">DL2 Vc</th>
                    <th className="border border-[#B8B8B8] px-2 py-2 text-center font-normal bg-white/60">fz</th>
                    <th className="border border-[#B8B8B8] px-2 py-2 text-center font-normal bg-white/60">B*</th>
                  </tr>
                </thead>
                <tbody>
                  {cuttingRows.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white/70" : "bg-white/40"}>
                      <td className="border border-[#B8B8B8] px-2 py-1.5 text-center font-semibold">{row.code}</td>
                      <td className="border border-[#B8B8B8] px-2 py-1.5">{row.material}</td>
                      <td className="border border-[#B8B8B8] px-2 py-1.5 text-center">{row.rm}</td>
                      <td className="border border-[#B8B8B8] px-2 py-1.5 text-center">{row.hb}</td>
                      <td className="border border-[#B8B8B8] px-2 py-1.5 text-center">{row.hrc}</td>
                      <td className="border border-[#B8B8B8] px-2 py-1.5 text-center">{row.vc}</td>
                      <td className="border border-[#B8B8B8] px-2 py-1.5 text-center">{row.fz}</td>
                      <td className="border border-[#B8B8B8] px-2 py-1.5 text-center">{row.b}</td>
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
