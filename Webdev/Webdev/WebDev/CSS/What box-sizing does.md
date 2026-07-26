#Q #AOSR/2oed3
What is box-sizing
? #AOSR/2oed3/m/5pe6
The CSS `box-sizing: border-box` property forces an element's specified `width` and `height` to include its padding and borders. Instead of expanding outward and breaking your layout, any added padding or border shrinks the inner content area, keeping the element's total dimensions exactly as you set them
[Source](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/box-sizing)

Content-box:
![[Pasted image 20260607130809.png]]

Border-Box:
![[Pasted image 20260607130823.png]]

```

<span>/* How to apply border-box to a single element */
.my-element {
  box-sizing: border-box;
  width: 300px;
  padding: 20px;
  border: 10px solid black;
}

/* Global reset for all elements on the page */
*, *::before, *::after {
  box-sizing: border-box;
}</span>

```

