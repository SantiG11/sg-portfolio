/* eslint-disable react-refresh/only-export-components */
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { content, type Lang } from "./content";

type LangContext = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (typeof content)[keyof typeof content];
};

const LanguageContext = createContext<LangContext | undefined>(undefined);

function detectInitialLang(): Lang {
  try {
    const params = new URLSearchParams(window.location.search);
    const q = params.get("lang");
    if (q === "en" || q === "es") return q;
  } catch {
    // ignore URL parsing errors
  }

  const saved = localStorage.getItem("sg_lang");
  if (saved === "en" || saved === "es") return saved as Lang;

  const nav = navigator.language || "en";
  if (nav.toLowerCase().startsWith("es")) return "es";
  return "en";
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => detectInitialLang());

  useEffect(() => {
    document.documentElement.lang = lang;
    localStorage.setItem("sg_lang", lang);
    // update title and meta description if present
    const metaDesc = document.querySelector('meta[name="description"]');
    document.title = content[lang].meta.title;
    if (metaDesc)
      metaDesc.setAttribute("content", content[lang].meta.description);
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      const url = new URL(window.location.href);
      url.searchParams.set("lang", l);
      window.history.replaceState({}, "", url.toString());
    } catch {
      // ignore history/url errors in older browsers
    }
  };

  const value = useMemo(() => ({ lang, setLang, t: content[lang] }), [lang]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
