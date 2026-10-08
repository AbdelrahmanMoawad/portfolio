import { Children, cloneElement, createContext, isValidElement, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { ar, type Language } from '../data/translations';

type Theme = 'dark' | 'light';
const LanguageContext = createContext<{ language: Language; toggle: () => void; theme: Theme; toggleTheme: () => void }>({ language: 'en', toggle: () => undefined, theme: 'dark', toggleTheme: () => undefined });

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    try { return localStorage.getItem('portfolio-language') === 'ar' ? 'ar' : 'en'; } catch { return 'en'; }
  });
  const [theme, setTheme] = useState<Theme>(() => {
    try { return localStorage.getItem('portfolio-theme') === 'light' ? 'light' : 'dark'; } catch { return 'dark'; }
  });
  const toggle = () => setLanguage((current) => {
    const next = current === 'en' ? 'ar' : 'en';
    try { localStorage.setItem('portfolio-language', next); } catch { /* Storage may be disabled. */ }
    return next;
  });
  const toggleTheme = () => setTheme((current) => {
    const next = current === 'dark' ? 'light' : 'dark';
    try { localStorage.setItem('portfolio-theme', next); } catch { /* Storage may be disabled. */ }
    return next;
  });
  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    const themeColor = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]');
    themeColor?.setAttribute('content', theme === 'dark' ? '#101113' : '#f2f0ec');
  }, [language, theme]);
  const value = useMemo(() => ({ language, toggle, theme, toggleTheme }), [language, theme]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() { return useContext(LanguageContext); }

function translateText(text: string) {
  const exact = ar[text.trim()];
  if (exact) return text.replace(text.trim(), exact);
  const keys = Object.keys(ar).filter((key) => key.length > 3).sort((a, b) => b.length - a.length);
  let translated = text;
  for (const key of keys) translated = translated.replaceAll(key, ar[key]);
  return translated;
}

function translateNode(node: ReactNode): ReactNode {
  if (typeof node === 'string') return translateText(node);
  if (Array.isArray(node)) return node.map(translateNode);
  if (!isValidElement<Record<string, unknown>>(node)) return node;
  const props = { ...node.props };
  for (const attr of ['aria-label', 'alt', 'title']) {
    if (typeof props[attr] === 'string') props[attr] = translateText(props[attr] as string);
  }
  if ('children' in props) props.children = Children.map(props.children as ReactNode, translateNode);
  return cloneElement(node, props);
}

export function Localized({ children }: { children: ReactNode }) {
  const { language } = useLanguage();
  return <>{language === 'ar' ? translateNode(children) : children}</>;
}
