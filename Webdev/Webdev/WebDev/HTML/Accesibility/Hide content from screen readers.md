#Q
How to hide content from screen readers using ARIA
?
By adding `aria-hidden="true"` attribute to element you want to hide

#Q #AOSR/6aq5e
When to use aria-hide
? #AOSR/6aq5e/m/7h37
Only when you do not want screen readers trying to read it.

#Q
Does aria-hidden hide the content from screen or tabs
?
No, neither. for that, use CSS' `display:none` or `visibility:hidden`

#Q
Why do we have aria-hidden when we can hide using CSS aswell
?
CSS Is visual, ARIA is accessibility related. It is for when you do not want something read in screen reader as it will be of no use since it was only some decoration or logo for something useless etc.