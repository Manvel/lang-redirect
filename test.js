const {getLocaleToPageMap, getLocale} = require("./index");
const assert = require("assert");

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
]

describe("Testing markdown-it-html-entities using markdown.render():", () => {
  locales.forEach(({page, user, result}) =>
  {
    it(`getRedirect(["${user.join('"')}"], ["${page.join('"')}"]): Should output: ${result}`, () => {
      assert.equal(getLocale(user, page), result);
    });
  });
});
