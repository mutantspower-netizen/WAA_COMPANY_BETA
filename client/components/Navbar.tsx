import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const NAV_LINKS = [
  { label: "W.A.A X HEULE", to: "/heule" },
  { label: "W.A.A X NARITA", to: "/nrita" },
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
            <Link
              key={link.to}
              to={link.to}
              className={`px-3 py-2 font-sarabun text-[18px] font-extrabold text-[#fff3f3] hover:text-white transition-colors whitespace-nowrap ${
                location.pathname === link.to ? "text-white" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
          <button className="px-3 py-2 font-sarabun text-[18px] font-extrabold text-[#fff3f3] hover:text-white transition-colors">
            EN/TH
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
