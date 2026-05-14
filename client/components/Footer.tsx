export default function Footer() {
  return (
    <footer className="w-full bg-[#808080]">
      <div className="max-w-[1440px] mx-auto px-6 min-h-[60px] py-3 flex items-center justify-between gap-4 flex-wrap">
        <span className="font-sarabun text-white text-base font-semibold shrink-0">
          W.A.A CO.LTD
        </span>
        <span className="font-sarabun text-white text-[13px] font-semibold text-center hidden sm:block">
          Consult with W.A.A CO.LTD to find the ideal tool solution and maximize
          your performance and efficiency
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
