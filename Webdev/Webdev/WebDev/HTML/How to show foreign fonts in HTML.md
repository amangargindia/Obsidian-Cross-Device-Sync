#Q  #AOSR/75q6v
How to show foreign fonts in HTML
? #AOSR/75q6v/m/1pke
The `ruby` element represents small text shown above or below the main text. It is typically used to show the pronunciation of East Asian characters. Here is the `ruby` element example from the MDN web docs page:
```
<ruby> 明日 <rp>(</rp><rt>Ashita</rt><rp>)</rp> </ruby>
```
The `rp` element, or ruby fallback parenthesis element, is used as a fallback for browsers lacking support for displaying ruby annotations.
The `rt` element, or ruby text element, is used to indicate text for the ruby annotation. This text is usually used for pronunciation, or translation details in East Asian typography.
While the `ruby` element can be used for other types of annotations, the most common use case is for East Asian typography.