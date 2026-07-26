---
aliases:
  - How to make border round
---
![[Pasted image 20260607133918.png]]

The **`border-radius`** property in CSS is used to round the corners of an element's outer border edge.

By default, HTML elements (like `<div>`, `<button>`, or images) are perfect rectangles with sharp $90^\circ$ corners. Applying `border-radius` allows you to soften those corners, turn squares into perfect circles, or create smooth, pill-shaped buttons.

### How it Works

The value you pass to `border-radius` defines the **radius of the circle** used to shape the corner.

- **`0px`**: Sharp, standard rectangular corner.
    
- **Small values (`4px` to `8px`)**: Subtle, modern rounding (commonly used on cards and UI input boxes).
    
- **Medium values (`12px` to `20px`)**: Highly noticeable curvature (like the `1rem` / `16px` radius on your quiz container in the previous screenshot).
    

### Common Use Cases & Tricks

#### 1. Making a Perfect Circle

To turn a square element into a perfect circle, set the `border-radius` to **`50%`**.

- _Note:_ This only works if the element has an equal `width` and `height`. If it’s a rectangle, `50%` will turn it into an oval.
    

#### 2. Creating a Pill-Shaped Button

If you want a button with completely rounded sides that doesn't distort into an oval, set the `border-radius` to a massive pixel value (like `9999px`). The browser will automatically cap the rounding at the maximum possible curvature for that element's height.

### Controlling Specific Corners

If you don't want all four corners to be rounded equally, you can specify individual corners using either multiple values or shorthand.

#### The 4-Value Shorthand

When you provide four values, they apply in **clockwise order**, starting from the top-left:

CSS

```
/* border-radius: top-left top-right bottom-right bottom-left; */
border-radius: 10px 20px 30px 40px;
```

#### Specific CSS Properties

You can also target a single corner explicitly using its dedicated property name:

- `border-top-left-radius`
    
- `border-top-right-radius`
    
- `border-bottom-right-radius`
    
- `border-bottom-left-radius`