In CSS, **selectors** are the patterns you use to target the specific HTML elements you want to style. Think of them as filters or search queries for your webpage's structure.

CSS selectors range from basic, single-element targets to advanced combinations that look at relationships, states, and specific attributes. They can be broken down into five main categories:

## 1. Basic Selectors

These are the core building blocks you will use $90\%$ of the time.

- **Universal Selector (`*`):** Targets every single element on the page. (You've seen this used for basic resets in your projects).
    
    CSS
    
    ```
    * { box-sizing: border-box; }
    ```
    
- **Element / Type Selector:** Targets elements directly by their HTML tag name.
    
    CSS
    
    ```
    body { background-color: #f5efe6; }
    p { color: #333; }
    ```
    
#Q  #AOSR/1fda3
How do you select a class
? #AOSR/1fda3/m/z449
- **Class Selector (`.className`):** Targets any element that has a matching `class` attribute. You can reuse classes on as many elements as you want.
    
    CSS
    
    ```
    .container { max-width: 600px; }
    .screen { display: none; }
    ```
    
#Q #AOSR/57j39
How do you select an ID
? #AOSR/57j39/m/mlv4
- **ID Selector (`#idName`):** Targets a unique element with a matching `id` attribute. An ID should only be used **once** per HTML page.
    
    CSS
    
    ```
    #start-quiz-btn { background-color: blue; }
    ```
    

## 2. Combinator Selectors

Combinators look at the **relationships** and hierarchy between HTML elements (parents, children, siblings).

- **Descendant Selector (space):** Targets an element inside another element, no matter how deep it is nested.
    
    CSS
    
    ```
    /* Targets any <span> inside a .container, even if wrapped in a <p> */
    .container span { color: red; }
    ```
    
- **Child Selector (`>`):** Targets only the **direct** children of a parent element. It won't style grandchildren.
    
    CSS
    
    ```
    /* Only targets a <p> that is a direct child of .container */
    .container > p { font-size: 1.2rem; }
    ```
    
- **Adjacent Sibling Selector (`+`):** Targets an element that is placed **immediately after** another specific element on the same level.
    
    CSS
    
    ```
    /* Targets only the first <p> that comes directly after an <h1> */
    h1 + p { margin-top: 0; }
    ```
    
- **General Sibling Selector (`~`):** Targets all elements that follow a specific element on the same level, even if they aren't right next to it.
    
    CSS
    
    ```
    /* Targets all <p> tags that follow an <h1> inside the same parent */
    h1 ~ p { color: gray; }
    ```
    

## 3. Attribute Selectors

These target elements based on the presence or exact value of their HTML attributes.

- **Presence `[attribute]`:** Targets an element simply because it has that attribute.
    
    CSS
    
    ```
    /* Styles any image that has an alt description */
    img[alt] { border: 2px solid green; }
    ```
    
- **Exact Value `[attribute="value"]`:** Targets an element with a precise attribute value.
    
    CSS
    
    ```
    /* Great for targetting specific input field types */
    input[type="text"] { border-radius: 4px; }
    ```
    

## 4. Pseudo-classes (`:`)

Pseudo-classes target elements based on their **state** or a specific **structural position**, rather than their name or class.

### State Pseudo-classes

- `:hover` – Applies when a mouse cursor hovers over an element.
    
- `:focus` – Applies when an element (like an input field) is clicked into or selected via keyboard.
    
- `:active` – Applies the exact moment an element is being clicked.
    

CSS

```
button:hover { background-color: darkblue; }
input:focus { border-color: orange; }
```

### Structural Pseudo-classes

- `:first-child` / `:last-child` – Targets the very first or very last item inside a parent.
    
- `:nth-child(n)` – Targets elements based on a formula or number (e.g., `:nth-child(2)` gets the second item; `:nth-child(even)` gets all even rows).
    

CSS

```
/* Gives alternate rows in a quiz table a subtle gray tint */
tr:nth-child(even) { background-color: #f0f0f0; }
```

## 5. Pseudo-elements (`::`)

While pseudo-classes style an _existing element state_, pseudo-elements are used to style a **specific part** of an element, or inject cosmetic content that isn't explicitly written in the HTML.

- `::before` / `::after` – Injects visual content right before or after the element's actual content. (Commonly used for icons, decorative underlines, or clearfixes).
    
- `::first-line` / `::first-letter` – Styles just the initial line or starting letter of a paragraph.
    

CSS

```
/* Automatically adds a decorative bullet point string before a list item */
li::before {
  content: "⚡ ";
  color: gold;
}
```

![[Pasted image 20260607140308.png]]

![[Pasted image 20260607140314.png]]

![[Pasted image 20260607140320.png]]

![[Pasted image 20260607140326.png]]

![[Pasted image 20260607140330.png]]

![[Pasted image 20260607140332.png]]![[Pasted image 20260607140333.png]]