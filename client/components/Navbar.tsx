import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const NAV_LINKS = [
  { label: "W.A.A X HEULE", to: "/heule", 
    dropdown: [
      { label: "DEBURRING", to: "/heule/deburring",
         dropdown: [
        { label: "COFA", to: "/heule/cofa-deburring" },
        { label: "DL2", to: "/heule/dl2-deburring" },
      ],
       },
      { label: "CHAMFERING", to: "/heule/chamfering" ,
        dropdown: [
        { label: "SNAP", to: "/heule/snap-chamfering" },
        { label: "DEFA", to: "/heule/defa-chamfering" }, 
        { label: "GH-K", to: "/heule/ghk-chamfering" },
        ],
      },
        
      { label: "COUNTERBORING", to: "/heule/counterboring", 
         dropdown: [
        { label: "BSF", to: "/heule/bsf-counterboring" },
        { label: "SOLO", to: "/heule/solo-counterboring" }, 
        ],
      },
      { label: "DRILLINGCOMBINE", to: "/heule/drilling-combine" ,
         dropdown: [
        { label: "VEX", to: "/heule/vex-drilling-combine" },
        { label: "DCC", to: "/heule/dcc-drilling-combine" }, 
        { label: "MODULE LINE", to: "/heule/module-line-drilling-combine" },
        ],
      },
    ]
  },
  
  { label: "W.A.A X NARITA", to: "/nrita", 
      dropdown: [
      { label: "BALL NOSE 2 FLUTE", to: "/nrita/ball-nose" },
      { label: "2 FLUTES END MILL", to: "/nrita/2-flutes" },
      { label: "BALL NOSE 4 FLUTE", to: "/nrita/4-flutes" },
    ],
  },
  { label: "ABOUT US", to: "/about" },
  { label: "CONTACT", to: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="w-full bg-[#1e1e1e] fixed top-0 left-0 z-50">
      <div className="max-w-[1440px] mx-auto px-6 h-[60px] flex items-center justify-between">
        <Link to="/" className="flex flex-col items-start gap-0.5 shrink-0">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/bb958302d07eb46aee9e4025e421a463cb786f01?width=133"
            alt="WAA Logo"
            className="h-7 w-auto"
          />
          <span className="text-white font-inter text-[9px] font-normal leading-none">
            WAA.CO.LTD
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-2">
          {NAV_LINKS.map((link) => (
  <div className="relative group" key={link.label}>
    
    <Link
      to={link.to || "#"}
      className={`px-3 py-2 block font-sarabun text-[18px] font-extrabold text-[#fff3f3] hover:text-white transition-colors whitespace-nowrap ${
        location.pathname === link.to ? "text-white" : ""
      }`}
    >
      {link.label}
    </Link>

   {link.dropdown && (
  <div className="absolute hidden group-hover:block bg-[#2a2a2a] min-w-[220px] shadow-lg z-50">
    
    {link.dropdown.map((item) => (
      <div className="relative group/sub" key={item.label}>
        
        {item.to ? (
          <Link
            to={item.to}
            className="block px-4 py-2 text-white hover:bg-[#3a3a3a]"
          >
            {item.label}
          </Link>
        ) : (
          <div className="block px-4 py-2 text-white hover:bg-[#3a3a3a] cursor-pointer">
            {item.label}
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
              
              {link.label}
              
            </Link>
            
          ))}
          <button className="block w-full text-left py-3 font-sarabun text-[18px] font-extrabold text-[#fff3f3] hover:text-white transition-colors">
            EN/TH
          </button>
        </div>
      )}
        
    </header>
  );
}
