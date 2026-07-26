---
aliases:
  - make inline element a block element
---
![[Pasted image 20260607135551.png]]

![[Pasted image 20260607135555.png]]

#Q #AOSR/550hl
What is display: block;
? #AOSR/550hl/m/4ot0
In CSS, **`display: block;`** is one of the most fundamental display values. When an element is set to `block` (or is a block-level element by default), it behaves like a physical block or brick in a wall: **it takes up the full width available and forces a line break after it.**
By default, many common HTML elements are block-level elements out of the box, including `<div>`, `<p>`, `<h1>` through `<h6>`, `<ul>`, and `<section>`.

### The Rules of a Block Element

When an element has `display: block;`, it strictly follows these structural rules:

1. **It starts on a new line:** It will always drop down below whatever came before it. Even if there is plenty of empty space next to the previous element, a block element refuses to share a line.
    
2. **It takes up 100% of the available width:** By default, it will automatically stretch horizontally to fill the entire width of its parent container, from the far-left edge to the far-right edge.
    
3. **It respects `width` and `height` properties:** Unlike inline elements (like `<span>` or `<a>`), you can explicitly set exact width and height dimensions on a block element, and the browser will respect them.
    
4. **It respects all `margin` and `padding`:** You can add spacing around all four sides (top, bottom, left, right) to push other elements away.
    

### Visual Comparison: Block vs. Inline

To understand `block`, it helps to contrast it with **`inline`** (the behavior of elements like `<span>`, `<strong>`, or `<a>`).

- **`display: block;`**: Stacks vertically. Each element gets its own line and stretches full width.
    
- **`display: inline;`**: Sits horizontally on the same line, wrapping around like words in a sentence. It completely ignores explicit `width` and `height` properties.
    

### When do you manually use `display: block;`?

While many elements are blocks by default, you will often manually apply `display: block;` to inline elements to change their behavior.

#### 1. Making Links Easy to Click

By default, an `<a>` (anchor) tag is inline, meaning its clickable area is tightly restricted to the exact size of the text. If you are building a navigation sidebar or a vertical menu:

CSS

```
a {
  display: block;
  padding: 1rem;
}
```

This forces each link to sit on its own line and stretch across the entire width of the sidebar, making the whole row clickable rather than just the text.

#### 2. Stacking Images Vertically

Images (`<img>`) are `inline-block` by default, meaning they will sit side-by-side on the same line if there is room. If you want a series of images to stack cleanly on top of one another like a photo gallery column, you can give them `display: block;`.