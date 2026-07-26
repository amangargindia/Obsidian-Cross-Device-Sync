#Q #AOSR/4p10d
How to link pages of the same website in HTML
? #AOSR/4p10d/m/1l2n
You can link to another page using a relative URL, like `<a href="about.html">About</a>`. For sections within the same page, use a hash followed by the element's ID, e.g., `<a href="#about">About Section</a>`.
```
<a href="about.html">About Page</a>
<a href="#about">About Section</a>
```

#Q #AOSR/5m4ed
How does a page section linked with # get recognized
? #AOSR/5m4ed/m/4tsq
The browser looks for an element with a matching `id` attribute. For example, `<section id="about">` becomes the target when you use `<a href="#about">`. The id must match exactly, including case.

#Q #AOSR/bh5cv
Can you navigate to the sections linked in the nav bar without the sections actually having the id as named in the nav bar
? #AOSR/bh5cv/m/311j
No. A fragment identifier (`#`) only works if an element with that exact `id` exists on the page. Without it, clicking the link will scroll to the top of the page or do nothing.