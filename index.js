"use strict";

function getLocaleToPageMap(doc)
{
  const alternativesSelector = "link[rel='alternate'][href][hreflang]";
  const alternateElements = doc.querySelectorAll(alternativesSelector);
  const localeToPage = {};

  for (const alternateElement of alternateElements)
  {
    const page = alternateElement.getAttribute("href");
    const locale = alternateElement.getAttribute("hreflang");
    localeToPage[locale] = page;
  }
  return localeToPage;
}

function getLocale(preferedLocales, availableLocales)
{
  for (const preferedLocale of preferedLocales)
  {
    const [country, region] = preferedLocale.split("-");
    const locale = availableLocales.find((locale) =>
    {
      return (locale == country || locale == country + "-" + region ||
      locale == country + "_" + region);
    });
    if (locale)
    {
      return locale;
    }
  }
  return null;
}

/*
const preferedLocales = navigator.languages;
const localeToPage = getAvailableLocaleToPageMap();
const availableLocales = Object.keys(localeToPage);
const locale = getRedirect(preferedLocales, availableLocales);
const page = localeToPage[locale];

console.log(locale);
console.log(page);
*/

module.exports = {getLocaleToPageMap, getLocale};
