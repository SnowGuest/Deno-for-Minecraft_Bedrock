import zh from "./zh.ts";
import en from "./en.ts";

export interface Language {
  id: number;
  sort: string;
  type: string;
  acronym: string;
  description: string;
  SelectLang: string;
  SelectMenu: string;
  openWsServerPort: string;
  selectMenuLang: string;
}

export const languages = {
  en,
  zh,
};
export const languageKeys = Object.keys(languages) as Lang[];
export type Lang = keyof typeof languages;
export function getLanguagesKey(lang: Lang) {
  return languageKeys.map((e) => ({
    [languages[lang]["acronym"]]: e,
    [languages[lang]["description"]]: languages[e]["type"],
  }));
}
export function setLanguageId(id: number): Lang {
  return languageKeys.find((e) => languages[e].id === id) ?? "en";
}
export function getAllfield(
  str: keyof Language,
  lang: Lang,
): (string | number)[] {
  return languageKeys.map((e) => {
    return languages[lang][str];
  });
}
