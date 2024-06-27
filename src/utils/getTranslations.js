import { redirect } from "next/navigation";

const translations = {};
const locales = ["es", "en", "ca"];

export async function getTranslations(locale, page) {
  if (!locales.includes(locale)) {
    return redirect("/");
  }

  if (!translations[locale]) {
    translations[locale] = (await import(`../locales/${locale}.json`)).default;
  }

  return translations[locale][page];
}
