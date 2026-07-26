```
<input tabindex="2">
<input tabindex="1">
<input tabindex="3">
```
#Q #AOSR/13sdi
How to control order of navigation using tab key
? #AOSR/13sdi/m/696j
You can put `tabindex="number"` to clickable elements and that will decide the order in which tab button focuses on elements.

#Q
How to make unfocusable elements focusable in tab key navigation
?
By giving it `tabindex="-1"` , you can make non navigable elements navigable.