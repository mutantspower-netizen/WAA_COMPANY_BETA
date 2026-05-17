import { useLanguage } from "@/lib/language";

export default function Footer() {
  const { text } = useLanguage();

  return (
    <footer className="w-full bg-[#808080]">
      <div className="max-w-[1440px] mx-auto px-6 min-h-[60px] py-3 flex items-center justify-between gap-4 flex-wrap">
        <span className="font-sarabun text-white text-base font-semibold shrink-0">
          W.A.A CO.LTD
        </span>
        <span className="font-sarabun text-white text-[13px] font-semibold text-center hidden sm:block">
          {text.footer.consult}
        </span>
        <div className="flex items-center gap-2 min-w-0">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/9219bbe3f67c844dac72d2d05576a8f63a89c5af?width=64"
            alt="Email"
            className="w-8 h-8 rounded-full shrink-0"
          />
          <span className="font-sarabun text-white text-sm sm:text-base font-semibold break-all">
            Waatool@ksc.th.com
          </span>
        </div>
      </div>
    </footer>
  );
}
