"use client";

import { useEffect, useMemo, useState } from "react";
import {
  DEFAULT_LOCALE,
  getLocalized,
  isSupportedLocale,
  type SupportedLocale,
} from "@/locales";

const STORAGE_KEY = "vipi.locale";

function readLocaleFromUrl(): SupportedLocale | null {
  if (typeof window === "undefined") return null;
  const params = new URLSearchParams(window.location.search);
  const raw = params.get("lang");
  if (!raw) return null;
  const candidate = raw.toLowerCase();
  if (isSupportedLocale(candidate)) return candidate;
  return null;
}

export function useLocale() {
  const [locale, setLocaleState] = useState<SupportedLocale>(DEFAULT_LOCALE);

  useEffect(() => {
    const fromUrl = readLocaleFromUrl();
    if (fromUrl) {
      setLocaleState(fromUrl);
      localStorage.setItem(STORAGE_KEY, fromUrl);
      return;
    }

    const stored = localStorage.getItem(STORAGE_KEY)?.toLowerCase();
    if (stored && isSupportedLocale(stored)) {
      setLocaleState(stored);
    }
  }, []);

  const setLocale = (next: SupportedLocale) => {
    setLocaleState(next);
    localStorage.setItem(STORAGE_KEY, next);

    const url = new URL(window.location.href);
    url.searchParams.set("lang", next);
    window.history.replaceState({}, "", url);
  };

  const dictionary = useMemo(() => getLocalized(locale), [locale]);

  return {
    locale,
    setLocale,
    dictionary,
  };
}
