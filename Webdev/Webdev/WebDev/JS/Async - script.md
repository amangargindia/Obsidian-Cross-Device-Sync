---
aliases:
  - Async attribute to delay JS loading
---
[[Defer - script]]


**`async`** is the other modern attribute you can add to a script tag in the `<head>`: `<script src="script.js" async></script>`.

Like `defer`, `async` tells the browser to download the JavaScript file in the background without stopping the HTML parsing. However, **they execute very differently.**

- **`defer` (The Polite Queue):** Downloads in the background, but strictly waits until the entire HTML document is fully built before running. If you have multiple `defer` scripts, they run in the exact order they appear in your code.
    
    - _Best for:_ Scripts that need to interact with your layout (like your quiz game looking for the `.container` or button clicks).
        
- **`async` (The Rogue Agent):** Downloads in the background, and the absolute millisecond the download is complete, it pauses the HTML parser and runs immediately. It does not wait for the HTML to finish, and it does not wait for other scripts.
    
    - _Best for:_ Completely independent scripts that don't touch your UI and don't rely on anything else. The classic examples are Google Analytics tracking codes or ad network scripts.
        

If you use `async` for a script that tries to modify the webpage, it might run before the HTML exists and crash. For building interfaces, `defer` (or bottom-of-the-body) is the way to go.