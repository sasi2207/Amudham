import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import tamilCommon from "./locales/tamil/common.json";
import englishCommon from "./locales/english/common.json";

const stored = typeof window !== "undefined" ? localStorage.getItem("amudham_lang") : null;

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      ta: { common: tamilCommon },
      en: { common: englishCommon },
    },
    lng: stored || "ta",
    fallbackLng: "ta",
    defaultNS: "common",
    ns: ["common"],
    interpolation: { escapeValue: false },
    detection: {
      order: ["localStorage", "navigator"],
      lookupLocalStorage: "amudham_lang",
      caches: ["localStorage"],
    },
  });

export default i18n;
