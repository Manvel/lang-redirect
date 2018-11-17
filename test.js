const {getLocaleToPageMap, getLocale} = require("./index");
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

describe("Testing getRedirect() function:", () => {
  locales.forEach(({page, user, result}) =>
  {
    it(`getRedirect(["${user.join(',"')}"], ["${page.join(',"')}"]): Should output: ${result}`, () => {
      assert.equal(getLocale(user, page), result);
    });
  });
});

describe("Testing getLocaleToPageMap() function:", () => {
  htmls.forEach(({html, result}) =>
  {
    it(`${html} should return ${result}`, () => {
      assert.deepStrictEqual(getLocaleToPageMap(new JSDOM(html).window.document), result);
    });
  });
});
