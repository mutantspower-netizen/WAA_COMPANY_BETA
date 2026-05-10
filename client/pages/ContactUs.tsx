import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-[#f5f5f5] font-sarabun">
      <Navbar />

      <div className="pt-[60px] relative overflow-hidden">
        {/* Background texture */}
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/8a73b64255b315793ff264d15d55e6023900a2c7?width=2896"
          alt=""
          className="absolute top-0 left-0 w-full h-[900px] object-cover opacity-40 pointer-events-none"
        />

        {/* Contact Title Section */}
        <section className="relative max-w-[1200px] mx-auto px-6 pt-10 pb-16">
          <p className="font-sarabun text-[28px] sm:text-[32px] font-bold mb-0">
            <span className="text-black">CONTACT </span>
            <span className="text-[#F11111]">US</span>
          </p>

          <div className="flex flex-col lg:flex-row gap-10 mt-4">
            {/* Left: Contact info */}
            <div className="flex-1">
              <h1 className="font-sarabun text-[36px] sm:text-[50px] font-bold text-black leading-tight">
                GET IN
              </h1>
              <h2 className="font-sarabun text-[36px] sm:text-[50px] font-bold text-[#F22703] leading-tight">
                TOUCH WITH US
              </h2>
              <div className="mt-6 border-t border-black pt-4 space-y-6">
                {/* Phone */}
                <div>
                  <p className="font-sarabun text-[14px] font-bold text-[#F22703] mb-2">
                    PHONE
                  </p>
                  <p className="font-sarabun text-[14px] font-bold text-black">
                    02-731-0455-8
                  </p>
                </div>

                {/* Email */}
                <div>
                  <p className="font-sarabun text-[14px] font-bold text-[#F22703] mb-2">
                    EMAIL
                  </p>
                  <p className="font-sarabun text-[14px] font-bold text-black">
                    Waatool@ksc.th.com
                  </p>
                </div>

                {/* Address */}
                <div>
                  <p className="font-sarabun text-[14px] font-bold text-[#F22703] mb-2">
                    ADDRESS
                  </p>
                  <p className="font-sarabun text-[13px] sm:text-[14px] font-bold text-black leading-relaxed">
                    2756, 2758 Soi 128/4 Latphrao Rd.
                    <br />
                    Khwaeng Khlong Chan, Khet Bang Kapi
                    <br />
                    Bangkok 10240
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <div className="flex items-center gap-1 mb-2">
                  <span className="font-sarabun text-[28px] sm:text-[32px] font-bold text-black">
                    BUSINESS
                  </span>
                  <span className="font-sarabun text-[28px] sm:text-[32px] font-bold text-[#F22703]">
                    HOURS
                  </span>
                </div>
                <div className="border-t border-black mt-1 pt-3">
                  <p className="font-sarabun text-[13px] sm:text-[14px] font-bold text-black leading-relaxed">
                    Monday - Friday: 08:00 - 17:00
                    <br />
                    Saturday: 08:00 - 12:00
                    <br />
                    Sunday & Public Holidays: Closed
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Map */}
            <div className="lg:w-[380px] flex items-start justify-center lg:justify-end mt-4 lg:mt-16">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3878.830275634726!2d100.58747!3d13.747119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d2181c6e3e3e3%3A0x123456789!2sWAA%20CO.%2C%20LTD!5e0!3m2!1sen!2sth!4v1234567890"
                width="100%"
                height="400"
                style={{ border: '8px solid #F91111', borderRadius: '40px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full max-w-[350px] rounded-[40px]"
              />
            </div>
          </div>
        </section>

        {/* Background 2 */}
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/06216006746402d7c875a7b0a7c434d5de685fec?width=2332"
          alt=""
          className="absolute left-0 w-full object-cover opacity-30 pointer-events-none"
          style={{ top: "900px", height: "600px" }}
        />
      </div>

      {/* Quick Contact Form Section */}
      <section className="relative max-w-[1200px] mx-auto px-6 py-16">
        <h2 className="font-sarabun text-[28px] sm:text-[32px] font-bold text-center mb-12">
          <span className="text-black">SEND US A </span>
          <span className="text-[#F22703]">MESSAGE</span>
        </h2>

        <div className="max-w-[600px] mx-auto bg-white p-8 rounded-[20px] shadow-lg">
          <form className="space-y-6">
            <div>
              <label className="font-sarabun text-[14px] font-bold text-black block mb-2">
                Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg font-sarabun text-[14px] focus:outline-none focus:border-[#F22703]"
              />
            </div>

            <div>
              <label className="font-sarabun text-[14px] font-bold text-black block mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg font-sarabun text-[14px] focus:outline-none focus:border-[#F22703]"
              />
            </div>

            <div>
              <label className="font-sarabun text-[14px] font-bold text-black block mb-2">
                Subject
              </label>
              <input
                type="text"
                placeholder="Your subject"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg font-sarabun text-[14px] focus:outline-none focus:border-[#F22703]"
              />
            </div>

            <div>
              <label className="font-sarabun text-[14px] font-bold text-black block mb-2">
                Message
              </label>
              <textarea
                rows={5}
                placeholder="Your message"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg font-sarabun text-[14px] focus:outline-none focus:border-[#F22703]"
              ></textarea>
            </div>

            <button className="w-full bg-[#F22703] text-white font-sarabun text-[14px] font-bold py-3 rounded-lg hover:bg-[#D91902] transition-colors">
              SEND MESSAGE
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}
