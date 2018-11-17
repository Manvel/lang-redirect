const {getLocaleToPageMap, getLocale, suggestRedirect} = require("./index");
const assert = require("assert");
const jsdom = require("jsdom");
const {JSDOM} = jsdom;

const locales = [
  {
    page: ["en", "ru", "de"],
    user: ["en-US", "ru", "ru-RU", "hy-AM", "hy", "en"],
    result: "en"
  },
  {
    page: ["ru", "de"],
    user: ["en-US", "ru", "ru-RU", "hy-AM", "hy", "en"],
    result: "ru"
  },
  {
    page: ["ru-RU", "de"],
    user: ["en-US", "ru", "ru-RU", "hy-AM", "hy", "en"],
    result: "ru-RU"
  },
  {
    page: ["ru_RU", "de"],
    user: ["en-US", "ru", "ru-RU", "hy-AM", "hy", "en"],
    result: "ru_RU"
  }
];

describe("Testing getRedirect() function:", () => {
  locales.forEach(({page, user, result}) =>
  {
    it(`getRedirect(["${user.join(',"')}"], ["${page.join(',"')}"]): Should output: ${result}`, () => {
      assert.equal(getLocale(user, page), result);
    });
  });
});

const htmls = [
  {
    html: `
  <html>
  <link rel="alternate" href="https://cmints.io/ru/" hreflang="ru">
  <link rel="alternate" href="https://cmints.io/de/" hreflang="de">
  <link rel="alternate" href="https://cmints.io/es/" hreflang="es">
  </html>
    `,
    result: {"ru": "https://cmints.io/ru/", "de": "https://cmints.io/de/", "es": "https://cmints.io/es/"}
  },
  {
    html: `
  <html>
  <link rel="alternate" href="https://cmints.io/ru/">
  </html>
    `,
    result: {}
  }
];

describe("Testing getLocaleToPageMap() function:", () => {
  htmls.forEach(({html, result}) =>
  {
    it(`${html} should return ${result}`, () => {
      global.document = new JSDOM(html).window.document;
      assert.deepStrictEqual(getLocaleToPageMap(), result);
    });
  });
});

const htmls2 = [
  {
    html: `
  <html lang="en">
  <link rel="alternate" href="https://cmints.io/ru/" hreflang="ru">
  <link rel="alternate" href="https://cmints.io/de/" hreflang="de">
  <link rel="alternate" href="https://cmints.io/es/" hreflang="es">
  </html>
    `,
    languages: ["en-US", "ru", "ru-RU", "hy-AM", "hy", "en"],
    result: ""
  },
  {
    html: `
  <html lang="en">
  <link rel="alternate" href="https://cmints.io/ru/" hreflang="ru">
  <link rel="alternate" href="https://cmints.io/de/" hreflang="de">
  <link rel="alternate" href="https://cmints.io/es/" hreflang="es">
  </html>
    `,
    languages: ["ru", "ru-RU", "hy-AM", "hy", "en"],
    result: "https://cmints.io/ru/"
  }
];

describe("Testing suggestRedirect() function:", () => {
  htmls2.forEach(({html, languages, result}) =>
  {
    it(`${html} and ${languages} should return ${result}`, () => {
      global.document = new JSDOM(html).window.document;
      global.navigator = {};
      global.navigator.languages = languages;
      assert.equal(suggestRedirect(), result);
    });
  });
});
