The first value is `_self`, which is the default value. This opens the link in the current browsing context. In most cases, this will be the current tab or window.

The second value is `_blank`, which opens the link in a new browsing context. Typically, this will open in a new tab. But some users might configure their browsers to open a new window instead.

The third value is `_parent`, which opens the link in the parent of the current context. For example, if your website has an `iframe`, a `_parent` value in that `iframe` would open in your website's tab/window, not in the embedded frame.

The fourth value is `_top`, which opens the link in the top-most browsing context - think "the parent of the parent". This is similar to `_parent`, but the link will always open in the full browser tab/window, even for nested embedded frames.

[Source](https://www.freecodecamp.org/learn/responsive-web-design-v9/lecture-working-with-links/what-are-the-different-target-attribute-types)
