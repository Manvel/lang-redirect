/**
 * Uses <link rel="alternate" href="..." hreflang="..."> tags to generate locale
 * to alternative page mappings
 * @returns {Object} example output:
 * ```
 * {
 * "ru": "https://cmints.io/ru/",
 * "de": "https://cmints.io/de/",
 * "es": "https://cmints.io/es/"
 * }
 * ```
 */
function getLocaleToPageMap()
{
  var alternativesSelector = "link[rel='alternate'][href][hreflang]";
  var alternateElements = document.querySelectorAll(alternativesSelector);
  var localeToPage = {};

  for (var i = 0; i < alternateElements.length; i++)
  {
    var alternateElement = alternateElements[i];
    var page = alternateElement.getAttribute("href");
    var locale = alternateElement.getAttribute("hreflang");
    localeToPage[locale] = page;
  }
  return localeToPage;
}

/**
 * Language negotiator
 * @param {Array} preferedLocales ex.: navigator.languages
 * @param {Array} availableLocales ex.: ["en-EN", "ru", "es_ES"]
 */
function getLocale(preferedLocales, availableLocales)
{
  for (var i = 0; i < preferedLocales.length; i++)
  {
    var preferedLocale = preferedLocales[i];
    var country = preferedLocale.split("-")[0];
    var region = preferedLocale.split("-")[1];
    for (var j = 0; j < availableLocales.length; j++)
    {
      var locale = availableLocales[j];
      if (locale == country || locale == country + "-" + region ||
          locale == country + "_" + region)
      {
        return locale;
      }
    }
  }
  return null;
}

/**
 * Suggests a redirect location
 */
function suggestRedirect()
{
  if ("languages" in navigator)
  {
    var defaultLocale = "";
    if (document.documentElement.lang)
    {
      defaultLocale = document.documentElement.lang;
    }
    var preferedLocales = navigator.languages;
    var localeToPage = getLocaleToPageMap(document);
    var availableLocales = Object.keys(localeToPage);
    if (defaultLocale)
    {
      availableLocales.unshift(defaultLocale);
    }
    var locale = getLocale(preferedLocales, availableLocales);
    return locale == defaultLocale ? "" : localeToPage[locale];
  }
  else
  {
    console.log("Suggest method is not supported");
  }
}

module.exports = {getLocaleToPageMap, getLocale, suggestRedirect};
