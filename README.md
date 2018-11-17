# lang-redirect

[![Build Status](https://travis-ci.org/Manvel/lang-redirect.svg?branch=master)](https://travis-ci.org/Manvel/lang-redirect)

Multi-language website redirection util that helps to determine redirection URL
for the multilanguage websites.

lang-redirect is using `<link rel="alternate" href="..." hreflang="...">` and
`navigator.languages` to suggest a redirection link.

## Usage example

Consider HTML page below:
```html
<html>
  <head>
    ...
    <link rel="alternate" href="https://cmints.io/ru/" hreflang="ru">
    <link rel="alternate" href="https://cmints.io/de/" hreflang="de">
    <link rel="alternate" href="https://cmints.io/es/" hreflang="es">
    ...
  </head>
  ...
</html>
```

```js
const {suggestRedirect} = require("lang-redirect");
suggestRedirect(); // ex. output: https://cmints.io/ru/
```

## Functions

Learn more about [functions here](/FUNCTIONS.md).
