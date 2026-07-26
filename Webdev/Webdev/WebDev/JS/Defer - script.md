---
aliases:
  - Defer attribute to delay JS loading
---
[[Where to place the Script tag]]
alternative [[Async - script]]

### Modern Alternative: The `defer` Attribute
While putting the script at the bottom of the body is a classic, bulletproof way to learn, modern web development has introduced a cleaner way to keep scripts in the `<head>` without breaking anything.

You can add the **`defer`** attribute to your script tag inside the `<head>`:

HTML

```
<head>
  <meta charset="UTF-8">
  <title>Quiz Game</title>
  <script src="script.js" defer></script>
</head>
```

Using `<script src="script.js" defer></script>` in the `<head>` gives you the best of both worlds: your code stays organized at the top, but it behaves exactly as if it were placed safely at the very bottom of the body.