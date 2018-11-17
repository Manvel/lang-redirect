/**
 * Uses <link rel="alternate" href="..." hreflang="..."> tags to generate locale
 * to alternative page mappings
 * @param {Object} doc window.document
 */
function getLocaleToPageMap(doc)
{
  var alternativesSelector = "link[rel='alternate'][href][hreflang]";
  var alternateElements = doc.querySelectorAll(alternativesSelector);
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
  if (languages in navigator && document)
  {
    var preferedLocales = navigator.languages;
    var localeToPage = getLocaleToPageMap(document);
    var availableLocales = Object.keys(localeToPage);
    var locale = getRedirect(preferedLocales, availableLocales);
    return localeToPage[locale];
  }
  else
  {
    console.log("Suggest method is not supported");
  }
}

module.exports = {getLocaleToPageMap, getLocale, suggestRedirect};
