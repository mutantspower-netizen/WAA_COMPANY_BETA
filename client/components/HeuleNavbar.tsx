import { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/lib/language";

const NAV_LINKS = [
  { labelKey: "deburring", to: "/heule/deburring" },
  { labelKey: "chamfering", to: "/heule/chamfering" },
  { labelKey: "counterboring", to: "/heule/counterboring" },
  { labelKey: "drillingCombine", to: "/heule/drilling-combine" },
  { labelKey: "contact", to: "/contact" },
];

export default function HeuleNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, text, toggleLang } = useLanguage();
  const nav = text.nav;

  return (
    <header className="w-full bg-[#1e1e1e] fixed top-0 left-0 z-50">
      <div className="max-w-[1440px] mx-auto px-6 h-[60px] flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 shrink-0">
          <Link to="/" className="flex flex-col items-start gap-0.5">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/bb958302d07eb46aee9e4025e421a463cb786f01?width=133"
              alt="WAA Logo"
              className="h-7 w-auto"
            />
            <span className="text-white font-inter text-[9px] font-normal leading-none">
              WAA.CO.LTD
            </span>
          </Link>
          <Link to="/heule">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F2f0b492e34a14ec29346019ef2a7eaa9%2F4ab1ea9089ae4a39adad0a77c00e7844?format=webp&width=800&height=1200"
              alt="Heule Precision Tools"
              className="h-8 w-auto"
              style={{ maxWidth: "500px", minHeight: "40px" }}
            />
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-2">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.labelKey}
              to={link.to}
              className="px-3 py-2 font-sarabun text-[17px] font-extrabold text-[#fff3f3] hover:text-white transition-colors whitespace-nowrap"
            >
              {nav[link.labelKey]}
            </Link>
          ))}
          <button
            className="px-3 py-2 font-sarabun text-[17px] font-extrabold text-[#fff3f3] hover:text-white transition-colors"
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
              key={link.labelKey}
              to={link.to}
              className="block py-3 font-sarabun text-[17px] font-extrabold text-[#fff3f3] hover:text-white transition-colors border-b border-white/10 last:border-0"
              onClick={() => setMenuOpen(false)}
            >
              {nav[link.labelKey]}
            </Link>
          ))}
          <button
            className="block w-full text-left py-3 font-sarabun text-[17px] font-extrabold text-[#fff3f3] hover:text-white transition-colors"
            onClick={toggleLang}
          >
            {lang === "en" ? "TH" : "EN"}
          </button>
        </div>
      )}
    </header>
  );
}
