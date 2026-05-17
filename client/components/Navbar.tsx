import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "@/lib/language";

const NAV_LINKS = [
  { labelKey: "heule", to: "/heule", 
    dropdown: [
      { labelKey: "deburring", to: "/heule/deburring",
         dropdown: [
        { label: "COFA", to: "/heule/cofa-deburring" },
        { label: "DL2", to: "/heule/dl2-deburring" },
      ],
       },
      { labelKey: "chamfering", to: "/heule/chamfering" ,
        dropdown: [
        { label: "SNAP", to: "/heule/snap-chamfering" },
        { label: "DEFA", to: "/heule/defa-chamfering" }, 
        { label: "GH-K", to: "/heule/ghk-chamfering" },
        ],
      },
        
      { labelKey: "counterboring", to: "/heule/counterboring", 
         dropdown: [
        { label: "BSF", to: "/heule/bsf-counterboring" },
        { label: "SOLO", to: "/heule/solo-counterboring" }, 
        ],
      },
      { labelKey: "drillingCombine", to: "/heule/drilling-combine" ,
         dropdown: [
        { label: "VEX", to: "/heule/vex-drilling-combine" },
        { label: "DCC", to: "/heule/dcc-drilling-combine" }, 
        { label: "MODULE LINE", to: "/heule/module-line-drilling-combine" },
        ],
      },
    ]
  },
  
  { labelKey: "narita", to: "/nrita", 
      dropdown: [
      { labelKey: "ballNose2Flute", to: "/nrita/ball-nose" },
      { labelKey: "endMill2Flutes", to: "/nrita/2-flutes" },
      { labelKey: "ballNose4Flute", to: "/nrita/4-flutes" },
    ],
  },
  { labelKey: "about", to: "/about" },
  { labelKey: "contact", to: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const { lang, text, toggleLang } = useLanguage();
  const nav = text.nav;

  return (
    <header className="w-full bg-[#1e1e1e] fixed top-0 left-0 z-50">
      <div className="max-w-[1440px] mx-auto px-6 h-[60px] flex items-center justify-between">
        <div className="flex items-center gap-3 shrink-0">
        <Link to="/" className="flex items-center gap-4">

  <div className="flex flex-col items-start gap-0.5">
    <img
      src="https://api.builder.io/api/v1/image/assets/TEMP/bb958302d07eb46aee9e4025e421a463cb786f01?width=133"
      alt="WAA Logo"
      className="h-7 w-auto"
    />

    <span className="text-white font-inter text-[9px] font-normal leading-none">
      WAA.CO.LTD
    </span>
  </div>
  </Link>
  <Link to="/heule" >
  {location.pathname.startsWith("/heule") && (
    <img
      src="https://cdn.builder.io/api/v1/image/assets%2F2f0b492e34a14ec29346019ef2a7eaa9%2F4ab1ea9089ae4a39adad0a77c00e7844?format=webp&width=800&height=1200"
      alt="Heule Precision Tools"
      className="h-8 w-auto"
      style={{ maxWidth: "500px", minHeight: "40px" }}
    />
  )}
</Link>
<Link to="/nrita" >
  {location.pathname.startsWith("/nrita") && (
    <img
      src="https://api.builder.io/api/v1/image/assets/TEMP/19f8b09e554ec6d01e98fb980fc860612632e4f1?width=300"
      alt="Narita End Mills"
      className="h-35 w-150 translate-y-4 object-contain ml-[-40px]"
    />
  )}

</Link>
</div>

        <nav className="hidden md:flex items-center gap-2">
          {NAV_LINKS.map((link) => (
  <div className="relative group" key={link.labelKey}>
    
    <Link
      to={link.to || "#"}
      className={`px-3 py-2 block font-sarabun text-[18px] font-extrabold text-[#fff3f3] hover:text-white transition-colors whitespace-nowrap ${
        location.pathname === link.to ? "text-white" : ""
      }`}
    >
      {nav[link.labelKey]}
    </Link>

   {link.dropdown && (
  <div className="absolute hidden group-hover:block bg-[#2a2a2a] min-w-[220px] shadow-lg z-50">
    
    {link.dropdown.map((item) => (
      <div className="relative group/sub" key={item.labelKey || item.label}>
        
        {item.to ? (
          <Link
            to={item.to}
            className="block px-4 py-2 text-white hover:bg-[#3a3a3a]"
          >
            {item.labelKey ? nav[item.labelKey] : item.label}
          </Link>
        ) : (
          <div className="block px-4 py-2 text-white hover:bg-[#3a3a3a] cursor-pointer">
            {item.labelKey ? nav[item.labelKey] : item.label}
          </div>
        )}

        {item.dropdown && (
          <div className="absolute top-0 left-full hidden group-hover/sub:block bg-[#2a2a2a] min-w-[200px] shadow-lg">
            
            {item.dropdown.map((subItem) => (
              <Link
                key={subItem.to}
                to={subItem.to}
                className="block px-4 py-2 text-white hover:bg-[#3a3a3a]"
              >
                {subItem.label}
              </Link>
            ))}

          </div>
        )}

      </div>
    ))}

  </div>
)}

  </div>
))}
          <button
            className="px-3 py-2 font-sarabun text-[18px] font-extrabold text-[#fff3f3] hover:text-white transition-colors"
            onClick={toggleLang}
          >
            {lang === "en" ? "TH" : "EN"}
          </button>
        </nav>

        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <>
                <path d="M3 6h18M3 12h18M3 18h18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#1e1e1e] border-t border-white/10 px-6 pb-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="block py-3 font-sarabun text-[18px] font-extrabold text-[#fff3f3] hover:text-white transition-colors border-b border-white/10 last:border-0"
              onClick={() => setMenuOpen(false)}
            >
              
              {nav[link.labelKey]}
              
            </Link>
            
          ))}
          <button
            className="block w-full text-left py-3 font-sarabun text-[18px] font-extrabold text-[#fff3f3] hover:text-white transition-colors"
            onClick={toggleLang}
          >
            {lang === "en" ? "TH" : "EN"}
          </button>
        </div>
      )}
        
    </header>
  );
}
