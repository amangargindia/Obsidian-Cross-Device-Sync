![[CSS Timing of animation.mp4]]

In CSS transitions, **`ease`** is a timing function that controls the **speed** of an animation over its duration.

By default, animations don't have to move at a constant, robotic speed. A timing function dictates whether an element starts slow, speeds up in the middle, or slows down right before it hits the finish line.

`ease` is the default setting browser engines use because it mimics real-world physics and inertia, making transitions look incredibly smooth and natural to the human eye.

### How `ease` Moves (Compared to Other Functions)

To understand `ease`, it helps to look at the track record of how it distributes its speed from start to finish compared to alternative choices:

- **`ease` (The Default):** Starts with a gentle acceleration, speeds up quickly in the middle, and then gradually tapers off to a slow, soft landing at the very end.
    
- **`linear`:** Moves at an absolute constant speed from the exact microsecond it starts until it dead-stops at the finish line. It often looks mechanical or unnatural.
    
- **`ease-in`:** Starts incredibly slow and heavy, steadily gaining momentum and ending at its absolute peak velocity. (Great for elements exiting the screen).
    
- **`ease-out`:** Explodes out of the gate at maximum speed instantly, then gracefully glides to a slow, decelerated stop. (Great for incoming popups or dropdown menus).
    
- **`ease-in-out`:** A perfect symmetric blend. It starts slow, accelerates through the middle, and finishes slow. It's similar to `ease`, but has a more pronounced slow start.
    

### How to Write It in Code

When you build hover effects for buttons (like changing the background color or scaling the size up), you attach the timing function to your transition rule:

CSS

```
button {
  background-color: #007bff;
  /* transition: [property] [duration] [timing-function]; */
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #0056b3;
}
```

Because `ease` is the built-in default browser setting, writing `transition: background-color 0.3s;` achieves the exact same result!

### Behind the Scenes: Cubic Bézier Curves

Under the hood, all these keywords are just shortcuts for a mathematical formula called a **Cubic Bézier curve**.

A Bézier curve maps acceleration using four coordinates on a grid. If you ever want to build a completely custom acceleration speed for an animation, you can bypass the word `ease` and use the formula format directly:

CSS

```
/* This is the mathematical equivalent of writing "ease" */
transition: all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1.0);
