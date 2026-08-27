'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import en from '../locales/en.json';
import hi from '../locales/hi.json';
import te from '../locales/te.json';

export type LanguageCode = 'en' | 'hi' | 'te';

export interface LanguageOption {
  code: LanguageCode;
  label: string;
  nativeName: string;
}

export const SUPPORTED_LANGUAGES: LanguageOption[] = [
  { code: 'en', label: 'English', nativeName: 'English' },
  { code: 'hi', label: 'Hindi', nativeName: 'हिन्दी' },
  { code: 'te', label: 'Telugu', nativeName: 'తెలుగు' },
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const TRANSLATIONS: Record<LanguageCode, any> = {
  en,
  hi,
  te,
};

interface LanguageContextType {
  language: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
  t: (key: string, params?: Record<string, string | number>) => string;
  languages: LanguageOption[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguageState] = useState<LanguageCode>('en');

  useEffect(() => {
    // Retrieve language from localStorage if available
    try {
      const savedLang = localStorage.getItem('vedic_language') as LanguageCode;
      if (savedLang && (savedLang === 'en' || savedLang === 'hi' || savedLang === 'te')) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setLanguageState(savedLang);
        document.documentElement.lang = savedLang;
      }
    } catch {
      // Ignore SSR / localStorage issues
    }
  }, []);

  const setLanguage = (newLang: LanguageCode) => {
    setLanguageState(newLang);
    try {
      localStorage.setItem('vedic_language', newLang);
      document.documentElement.lang = newLang;
    } catch {
      // Ignore
    }
  };

  /**
   * Translates a dot-notation key (e.g. 'nav.venues', 'hero.phrases.0')
   * with optional parameter interpolation (e.g. { location: 'Bangalore' })
   */
  const t = (key: string, params?: Record<string, string | number>): string => {
    const keys = key.split('.');
    
    // 1. Try currently active language
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let value: any = TRANSLATIONS[language];
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        value = undefined;
        break;
      }
    }

    // 2. Fallback to English if missing
    if (value === undefined) {
      value = TRANSLATIONS['en'];
      for (const k of keys) {
        if (value && typeof value === 'object' && k in value) {
          value = value[k];
        } else {
          value = undefined;
          break;
        }
      }
    }

    if (value === undefined) {
      return key; // return key if not found
    }

    if (typeof value !== 'string') {
      return JSON.stringify(value);
    }

    // 3. Perform parameter interpolation
    if (params) {
      return Object.entries(params).reduce((str, [paramKey, paramVal]) => {
        return str.replace(new RegExp(`\\{${paramKey}\\}`, 'g'), String(paramVal));
      }, value);
    }

    return value;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, languages: SUPPORTED_LANGUAGES }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
