---
aliases:
  - Slow loading of JS
tags:
---
[[Defer - script]]



**Placing the `<script>` tag at the very bottom of the `<body>` ensures that your HTML elements load first, preventing the webpage from appearing frozen or blank while the browser reads your JavaScript code.**

Here is exactly why your instructor did this, and why it matters for your quiz game.

### How a Browser Reads Your Page

Browsers read your HTML file like a book—**from top to bottom, line by line.** Whenever the browser runs into a `<script>` tag, it stops everything it is doing, pauses the layout of the page, downloads the JavaScript file, and runs it. Only _after_ the JavaScript finishes running does the browser resume reading the rest of the HTML.

### The Problem with the `<head>` (Without Extra Settings)

If you place your script inside the `<head>` tag at the top of the file, the browser hits it **before** it has even looked at your `<body>`.

#### 1. It Can Break Your JavaScript (The "Null" Error)

In your quiz game, your JavaScript is going to look for HTML elements to interact with—things like `document.querySelector('.container')` or adding a click listener to your "Start Quiz" button.

> If the script runs while the browser is still inside the `<head>`, those buttons don't exist yet! The browser hasn't read down to the `<body>`. Your JavaScript will crash with a `Cannot read properties of null` error because it's looking for elements that haven't been built.

#### 2. It Makes the Site Feel Slow

If your JavaScript file is large or takes a moment to download, the user is left staring at a completely blank screen while the script processes.

### The Benefit of Placing It at the Bottom of the `<body>`

By placing it as the very last thing before the closing `</body>` tag:

1. The browser parses all your HTML and CSS first. The quiz card, titles, and buttons render instantly on the screen for the user.
    
2. Once the interface is fully visible, the browser hits the script tag at the bottom.
    
3. When the JavaScript runs and looks for the quiz buttons, it finds them instantly because the full HTML structure is already sitting completely loaded in the browser's memory.