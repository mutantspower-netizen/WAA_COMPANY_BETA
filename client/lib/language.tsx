import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type Language = "en" | "th";

const translations = {
  en: {
    nav: {
      heule: "W.A.A X HEULE",
      narita: "W.A.A X NARITA",
      about: "ABOUT US",
      contact: "CONTACT",
      deburring: "DEBURRING",
      chamfering: "CHAMFERING",
      counterboring: "COUNTERBORING",
      drillingCombine: "DRILLING COMBINE",
      product: "PRODUCT",
      ballNose2Flute: "BALL NOSE 2 FLUTE",
      endMill2Flutes: "2 FLUTES END MILL",
      ballNose4Flute: "BALL NOSE 4 FLUTE",
    },
    footer: {
      consult:
        "Consult with W.A.A CO.LTD to find the ideal tool solution and maximize your performance and efficiency",
    },
    home: {
      hero: "Sale Partner and tools consulting domestically in thailand",
      toolsDistribution: "TOOLS DISTRIBUTION",
      reliablePartner:
        "Your reliable partner for industrial tools and equipment",
      consumable: "CONSUMABLE",
      oneStop:
        "One stop solution for all machining consumables and industrial tooling",
      supplier:
        "More than just a tool supplier, we are your one-stop partner for industrial tools and machining consumables, offering a wide range of products, reliable supply, and service you can trust.",
      trustedBrands:
        "Tools and machining consumables from trusted international brands",
      customers: "OUR CUSTOMERS",
      trustedBy: "Manufacturers that trust W.A.A CO., LTD",
      milling: "Milling",
      lath: "LATH",
      grinding: "GRINDING",
    },
    about: {
      titleBlack: "ABOUT",
      titleRed: "US",
      companyProfile: "COMPANY PROFILE",
      our: "OUR",
      company: "COMPANY",
      companyText:
        "Since 1985, Mr. Witthya Sotneam had created W.A.A. Co., Ltd. With company's expertise in machinery and product selection has earned them trust across various industry customers, notably automotive parts manufacturing and mold production.",
      companyText2:
        "W.A.A. Co., Ltd. aim to provide customer the most suitable solutions and products for their manufacturing with the best price, service and delivery.",
      values: [
        {
          title: "OUR",
          titleRed: "COMPANY VALUES",
          desc: "The company has focused on creating products and services through 3 important business concepts for more than 30 years with quality products, reasonable prices, good service.",
        },
        {
          title: "QUALITY",
          titleRed: "PRODUCTS",
          desc: "To increase work efficiency and reduce the impact on production of customers.",
        },
        {
          title: "REASONABLE",
          titleRed: "PRICES",
          desc: "To reduce overall costs and still maintain the quality of customer workpiece.",
        },
        {
          title: "GOOD",
          titleRed: "SERVICE",
          desc: "To respond and consult customer needs accurately and with fast delivery.",
        },
      ],
    },
    contact: {
      titleBlack: "CONTACT",
      titleRed: "US",
      getIn: "GET IN",
      touch: "TOUCH WITH US",
      phone: "PHONE",
      email: "EMAIL",
      address: "ADDRESS",
      business: "BUSINESS",
      hours: "HOURS",
      weekday: "Monday - Friday: 08:00 - 17:00",
      saturday: "Saturday: 08:00 - 12:00",
      sunday: "Sunday & Public Holidays: Closed",
      consultWith: "Consult with",
      name: "Name",
      namePlaceholder: "Your name",
      subject: "Subject",
      subjectPlaceholder: "Your subject",
      message: "Message",
      messagePlaceholder: "Your message",
      send: "SEND MESSAGE",
    },
  },
  th: {
    nav: {
      heule: "W.A.A X HEULE",
      narita: "W.A.A X NARITA",
      about: "เกี่ยวกับเรา",
      contact: "ติดต่อเรา",
      deburring: "ลบคม",
      chamfering: "ลบมุม",
      counterboring: "คว้านบ่า",
      drillingCombine: "ดอกเจาะผสม",
      product: "สินค้า",
      ballNose2Flute: "บอลโนส 2 ฟัน",
      endMill2Flutes: "เอ็นมิล 2 ฟัน",
      ballNose4Flute: "บอลโนส 4 ฟัน",
    },
    footer: {
      consult:
        "ปรึกษา W.A.A CO.LTD เพื่อค้นหาเครื่องมือที่เหมาะสมและเพิ่มประสิทธิภาพการทำงาน",
    },
    home: {
      hero: "ตัวแทนจำหน่ายและให้คำปรึกษาเครื่องมืออุตสาหกรรมในประเทศไทย",
      toolsDistribution: "จัดจำหน่ายเครื่องมือ",
      reliablePartner:
        "พันธมิตรที่เชื่อถือได้สำหรับเครื่องมือและอุปกรณ์อุตสาหกรรม",
      consumable: "วัสดุสิ้นเปลือง",
      oneStop:
        "โซลูชันครบวงจรสำหรับวัสดุสิ้นเปลืองงานเครื่องจักรและเครื่องมืออุตสาหกรรม",
      supplier:
        "เราเป็นมากกว่าผู้จำหน่ายเครื่องมือ แต่เป็นพันธมิตรแบบครบวงจรสำหรับเครื่องมืออุตสาหกรรมและวัสดุสิ้นเปลืองงานเครื่องจักร พร้อมสินค้าหลากหลาย การจัดส่งที่เชื่อถือได้ และบริการที่ไว้วางใจได้",
      trustedBrands:
        "เครื่องมือและวัสดุสิ้นเปลืองงานเครื่องจักรจากแบรนด์สากลที่เชื่อถือได้",
      customers: "ลูกค้าของเรา",
      trustedBy: "ผู้ผลิตที่ไว้วางใจ W.A.A CO., LTD",
      milling: "งานกัด",
      lath: "งานกลึง",
      grinding: "งานเจียร",
    },
    about: {
      titleBlack: "เกี่ยวกับ",
      titleRed: "เรา",
      companyProfile: "ข้อมูลบริษัท",
      our: "บริษัท",
      company: "ของเรา",
      companyText:
        "ตั้งแต่ปี 1985 คุณวิทยา โสตเนียม ได้ก่อตั้ง W.A.A. Co., Ltd. ด้วยความเชี่ยวชาญด้านเครื่องจักรและการคัดเลือกสินค้า ทำให้บริษัทได้รับความไว้วางใจจากลูกค้าในหลายอุตสาหกรรม โดยเฉพาะอุตสาหกรรมชิ้นส่วนยานยนต์และการผลิตแม่พิมพ์",
      companyText2:
        "W.A.A. Co., Ltd. มุ่งมั่นนำเสนอโซลูชันและสินค้าที่เหมาะสมที่สุดสำหรับการผลิตของลูกค้า ด้วยราคา บริการ และการจัดส่งที่ดีที่สุด",
      values: [
        {
          title: "ค่านิยม",
          titleRed: "ของบริษัท",
          desc: "บริษัทให้ความสำคัญกับการสร้างสินค้าและบริการผ่านแนวคิดหลัก 3 ประการ มากกว่า 30 ปี ได้แก่ สินค้าคุณภาพ ราคาสมเหตุสมผล และบริการที่ดี",
        },
        {
          title: "สินค้า",
          titleRed: "คุณภาพ",
          desc: "เพื่อเพิ่มประสิทธิภาพการทำงานและลดผลกระทบต่อการผลิตของลูกค้า",
        },
        {
          title: "ราคา",
          titleRed: "สมเหตุสมผล",
          desc: "เพื่อลดต้นทุนโดยรวม พร้อมรักษาคุณภาพชิ้นงานของลูกค้า",
        },
        {
          title: "บริการ",
          titleRed: "ที่ดี",
          desc: "เพื่อตอบสนองและให้คำปรึกษาความต้องการของลูกค้าอย่างถูกต้อง พร้อมการจัดส่งที่รวดเร็ว",
        },
      ],
    },
    contact: {
      titleBlack: "ติดต่อ",
      titleRed: "เรา",
      getIn: "ติดต่อ",
      touch: "กับเรา",
      phone: "โทรศัพท์",
      email: "อีเมล",
      address: "ที่อยู่",
      business: "เวลา",
      hours: "ทำการ",
      weekday: "จันทร์ - ศุกร์: 08:00 - 17:00",
      saturday: "เสาร์: 08:00 - 12:00",
      sunday: "อาทิตย์และวันหยุดนักขัตฤกษ์: ปิดทำการ",
      consultWith: "ปรึกษากับ",
      name: "ชื่อ",
      namePlaceholder: "ชื่อของคุณ",
      subject: "หัวข้อ",
      subjectPlaceholder: "หัวข้อของคุณ",
      message: "ข้อความ",
      messagePlaceholder: "ข้อความของคุณ",
      send: "ส่งข้อความ",
    },
  },
} as const;

type TranslationKey = keyof typeof translations.en;

type LanguageContextValue = {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  text: (typeof translations.en);
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>(() => {
    if (typeof window === "undefined") {
      return "en";
    }

    return localStorage.getItem("language") === "th" ? "th" : "en";
  });

  const setLang = (nextLang: Language) => {
    setLangState(nextLang);
    localStorage.setItem("language", nextLang);
  };

  const toggleLang = () => {
    setLang(lang === "en" ? "th" : "en");
  };

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const value = useMemo(
    () => ({
      lang,
      setLang,
      toggleLang,
      text: translations[lang],
    }),
    [lang],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }

  return context;
}
