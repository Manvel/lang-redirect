## Functions

<dl>
<dt><a href="#getLocaleToPageMap">getLocaleToPageMap()</a> ⇒ <code>Object</code></dt>
<dd><p>Uses <link rel="alternate" href="..." hreflang="..."> tags to generate locale
to alternative page mappings</p>
</dd>
<dt><a href="#getLocale">getLocale(preferedLocales, availableLocales)</a></dt>
<dd><p>Language negotiator</p>
</dd>
<dt><a href="#suggestRedirect">suggestRedirect(defaultLocale)</a></dt>
<dd><p>Suggests a redirect location</p>
</dd>
</dl>

<a name="getLocaleToPageMap"></a>

## getLocaleToPageMap() ⇒ <code>Object</code>
Uses <link rel="alternate" href="..." hreflang="..."> tags to generate locale
to alternative page mappings

**Kind**: global function  
**Returns**: <code>Object</code> - example output:
```
{
"ru": "https://cmints.io/ru/",
"de": "https://cmints.io/de/",
"es": "https://cmints.io/es/"
}
```  
<a name="getLocale"></a>

## getLocale(preferedLocales, availableLocales)
Language negotiator

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| preferedLocales | <code>Array</code> | ex.: navigator.languages |
| availableLocales | <code>Array</code> | ex.: ["en-EN", "ru", "es_ES"] |

<a name="suggestRedirect"></a>

## suggestRedirect(defaultLocale)
Suggests a redirect location

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| defaultLocale | <code>String</code> | default locale of duplicate content |

