import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Lang = "ar" | "en";

const STORAGE_KEY = "ehed-lang";
const DEFAULT_LANG: Lang = "en";

type I18nValue = {
  lang: Lang;
  dir: "rtl" | "ltr";
  setLang: (lang: Lang) => void;
  toggleLang: () => void;
  /** Pick the string matching the active language. */
  L: <T>(ar: T, en: T) => T;
};

const I18nContext = createContext<I18nValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(DEFAULT_LANG);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored === "ar" || stored === "en") setLangState(stored);
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    const el = document.documentElement;
    el.lang = lang;
    el.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
  }, []);

  const value = useMemo<I18nValue>(
    () => ({
      lang,
      dir: lang === "ar" ? "rtl" : "ltr",
      setLang,
      toggleLang: () => setLang(lang === "ar" ? "en" : "ar"),
      L: (ar, en) => (lang === "ar" ? ar : en),
    }),
    [lang, setLang],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n(): I18nValue {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    return {
      lang: DEFAULT_LANG,
      dir: "rtl",
      setLang: () => {},
      toggleLang: () => {},
      L: (ar) => ar,
    };
  }
  return ctx;
}
