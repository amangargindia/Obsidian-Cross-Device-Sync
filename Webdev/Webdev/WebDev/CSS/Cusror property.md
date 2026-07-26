In CSS, **`cursor: pointer;`** changes the appearance of the mouse cursor when a user hovers over an element. It switches the standard arrow pointer ($\uparrow$ or $\nwarrow$) into a **clicking hand icon** (usually a hand with an extended index finger).

It is the universal web design shorthand for telling a user: **"This item is interactive. If you click it, something will happen!"**

### Why is it used?

By default, web browsers automatically give the clicking hand cursor to standard HTML links (`<a>` tags). However, browsers do _not_ automatically give it to other interactive elements like `<button>`, `<input type="submit">`, or custom styled clickable `<div>` cards (like the "Start Quiz" or "Restart Quiz" choices in your game).

Without adding `cursor: pointer;` to your buttons, the mouse cursor stays as a regular arrow. This can confuse users, making them unsure if the button is actually active or just a static decorative box.

### How to use it in your code

You will typically apply this to buttons, links, or clickable interface list items. For your quiz project, you might see a rule like this:

CSS

```
button, .btn, [type="submit"] {
  cursor: pointer;
}
```

Now, whenever a player moves their mouse over any quiz option or control button, the cursor instantly flips to the hand icon, providing immediate visual feedback.

### Other Common Cursor Options

The `cursor` property can take many different values depending on what the element does:

| **Value**           | **Cursor Icon**                          | **Meaning / Common Use Case**                                        |
| ------------------- | ---------------------------------------- | -------------------------------------------------------------------- |
| `default`           | Standard Arrow                           | Normal, non-interactive elements (text blocks, backgrounds).         |
| **`pointer`**       | **Clicking Hand**                        | **Links, buttons, tabs, and clickable cards.**                       |
| `text`              | I-beam (`I`)                             | Appears over text fields or paragraphs to show text can be selected. |
| `not-allowed`       | Circle with a diagonal slash ($\oslash$) | Used on disabled buttons to show an action is blocked.               |
| `grab` / `grabbing` | Open / Closed Hand                       | Used for elements that can be dragged around the screen.             |