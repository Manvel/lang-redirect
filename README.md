Multi-language website redirection util that helps to determine redirection URL
for the multilanguage websites.

# About

Uses `<link rel="alternate" href="..." hreflang="...">` and `navigator.languages` to suggest a redirection link.

## Usage example

Consider HTML page below
```html
<html>
  <head>
    ...
    <link rel="alternate" href="https://cmints.io/ru/" hreflang="ru">
    <link rel="alternate" href="https://cmints.io/de/" hreflang="de">
    <link rel="alternate" href="https://cmints.io/es/" hreflang="es">
    ...
    <script src="/js/lang-redirect.js"></script>
    <script>
      console.log(suggestRedirect());
    </script>
  </head>
  ...
</html>
```

## Functions

Learn more about [functions here](/FUNCTIONS.md).
