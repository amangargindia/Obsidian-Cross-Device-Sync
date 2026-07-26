---
aliases:
  - how to hide an element in css
  - visibility hidden
---
![[Pasted image 20260607135155.png]]

![[Pasted image 20260607135202.png]]

![[Pasted image 20260607135206.png]]

#Q #AOSR/2tv6h
What display:none does
? #AOSR/2tv6h/m/2gpf
In CSS, **`display: none;`** is the ultimate vanishing act.
When you apply `display: none;` to an element, you are telling the browser to **completely remove it from the page layout**. It doesn't just become invisible; it behaves as if it doesn't even exist in the HTML at all.

### The Two Rules of `display: none;`

1. **It takes up absolutely zero space:** Unlike changing an element's opacity (which leaves an empty gap where the element used to be), `display: none;` collapses the element entirely. Other elements on the page will automatically move up or shift over to fill the empty space.
    
2. **It hides all its children:** If you hide a parent element using `display: none;`, every single element nested inside it instantly vanishes as well.
    

### Why is it being used in your Quiz Game?

Looking at your code on line 29, there is a comment that says `/* SCREENS */`. This gives us a massive clue!

In a vanilla JavaScript quiz game, you usually build all the different game states inside a single HTML file:

- **Screen 1:** The Welcome/Start screen ("Quiz Time! Test your knowledge...").
    
- **Screen 2:** The Active Question screen ("Question goes here...").
    
- **Screen 3:** The Results screen ("Quiz Results. You scored...").
    

If you look at the preview on the right side of your screenshot, **all three screens are stacked on top of each other at the same time**, which looks messy and confusing.

By setting `.screen { display: none; }`, the instructor is hiding _all_ the screens by default. Then, using JavaScript, they will selectively remove `display: none;` from just **one** screen at a time (e.g., only showing the Start screen when the page loads, and then switching to show only the Question screen when you click "Start Quiz").

### `display: none;` vs. `visibility: hidden;`

A very common point of confusion when learning CSS is the difference between these two properties.

- **`display: none;`**: The element vanishes **and** its space is completely collapsed. The layout adjusts. (Like a trapdoor opening and the item falling through—the elements below close the gap).
    
- **`visibility: hidden;`**: The element becomes completely invisible, **but it still takes up space** on the screen. It leaves a massive blank "ghost" gap in your layout.