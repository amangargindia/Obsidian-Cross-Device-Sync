#Q
What is WAI ARIA
?
WAI-ARIA stands for Web Accessibility Initiative - Accessible Rich Internet Applications. It's a specification that enhances accessibility for dynamic content and UI (User Interface) components.

#Q #AOSR/1nn0t
What is aria-labelledby
? #AOSR/1nn0t/m/32n7
It lets you connect an element to a specific label:
```
<h2 id="header-id">About freeCodeCamp</h2>
<button id="button-id" aria-labelledby="header-id button-id">Learn More</button>
```
This will make the elements understandable and navigable for users of assistive technology.
#/Q  

#Q
How can aria labelledby be used to make dependencies
?
```
<button aria-label="Search">
  <i class="fa-solid fa-magnifying-glass"></i>
</button>
```
In this case, a screen reader may announce this button as Search, button, even though the button only contains an icon. The aria-label attribute tells screen readers what text to use in place of the icon.

If the button contained the text "Search" instead of an icon, then there would be no need for the aria-label attribute as the text would provide the label for the button.
#/Q 

#Q
Whether to use aria-label or aria-labelledby
?
Since they both provide the same functionality, either can be used, but there may be a few advantages to using aria-labelledby over aria-label:

If someone is using a translation service to translate the content on your page, the text in an aria-label attribute may not always be translated.
Using aria-labelledby can also help prevent a mismatch between the visible label text and the invisible label for screen reader users since updating the visible text will automatically update the invisible label.
aria-labelledby can make it much easier to programmatically create complex invisible labels consisting of multiple sources of text.
One last note, do not use aria-label and aria-labelledby on an element at the same time. In this case, the invisible label for screen readers will always be determined by aria-labelledby and aria-label will be completely ignored.
#/Q 

#Q
What are aria-roles
?
They tell screen readers etc, what is the function of an element.
Semantic elements like button already have aria code, but non semantic ones like div do not.
When you give a class to a div by doing `<div role="alert">`, it tells screen readers that it is an alert.


#Q
What are 6 types of aria rules
?
Document structure roles
Widget roles
Landmark roles
Live region roles
Window roles
And Abstract roles


#Q
What are document structure aria rules
?
most of the document structure roles are not used in modern web development because browsers already support equivalent semantic HTML elements, which should be prioritized whenever possible.
You should specify the roles that don't have an equivalent semantic element. For example: **toolbar, tooltip, feed, math, presentation, none, and note.**
There are other similar roles but these are the most commonly used ones.


#Q
What is aria label
?
It is often used to tell what something is read like
```
<div role="math" aria-label="x squared + y squared = 3">
  x<sup>2</sup> + y<sup>2</sup> = 3
</div>
```
#/Q 

#Q
What are widget aria labels
?
Widget roles define the purpose and functionality of interactive elements, like scrollbars.
Examples of widget roles include **scrollbar, searchbox, separator (when focusable), slider, spinbutton, switch, tab, tabpanel, and treeitem.**
Some of these roles have equivalent semantic elements. You should prioritize the semantic element over the role if there is one. For example, you should favor using the HTML button element over adding a role of button to a div.


```
<link rel="stylesheet" href="styles.css">

<div class="search-container" role="search">
  <label for="searchbox" class="visually-hidden">Search</label>

  <div
    id="searchbox"
    class="searchbox"
    role="searchbox"
    aria-label="Search the site"
    tabindex="0"
    contenteditable="true">
  </div>

  <button type="button" aria-label="Submit search">Search</button>
</div>
```
#/Q 

#Q #AOSR/597kp
What are landmark aria roles
? #AOSR/597kp/m/z309
Landmark roles classify and label the primary sections of a web page. Screen readers use them to provide convenient navigation to important sections of a page. You should use them sparingly to keep the overall layout simple and easy to understand. Examples of landmark roles are **banner, complementary, contentinfo, form, main, navigation, region, and search.** *Each of these roles has a corresponding HTML equivalent, such as header, footer, aside, form, main, nav, section, and search. If you use the proper HTML elements to define the sections of your page then it is not necessary to explicitly add the role attribute to these elements.*


```
<link rel="stylesheet" href="styles.css">


<div role="banner" class="site-banner">
  <h1>Accessible Web Design</h1>
  <nav>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">Articles</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>
</div>
```
#/Q 

#Q
What are live region in aria 
?
Live region roles define elements with content that will change dynamically. This way, screen readers and other assistive technologies can announce changes to users with visual disabilities. These roles include: **alert, log, marquee, status, and timer.**
```
<link rel="stylesheet" href="styles.css">

<div class="status-demo">
  <button id="update-status-btn">Check Status</button>
  <div id="status-msg" role="status" class="status-message">
    No updates yet.
  </div>
</div>

<script src="index.js"></script>
```
#/Q 

#Q
What are window aria roles
?
Window roles define sub-windows, **like pop up modal dialogues. These roles include alertdialog and dialog**. *Please note that it is now considered a best practice to use the HTML dialog element and its associated JavaScript methods instead of manually creating a dialog.*

#Q
What are abstract aria roles
?
These roles help organize the document. They're only meant to be used internally by the browser, not by developers, so you should know that they exist but you shouldn't use them on your websites or web applications.

#Q #AOSR/94av7
What is aria label
? #AOSR/94av7/m/jiq3
aria-label is especially useful for elements that do not have visible text but still need to be described by screen readers. For example, buttons with only icons often need aria-label to convey their purpose.

#Q
How can you describe things like logos etc which do not have text but need a description
?
aria-label is especially useful for elements that do not have visible text but still need to be described by screen readers. For example, buttons with only icons often need aria-label to convey their purpose.
```
<button aria-label="Search">
  <i class="fa-solid fa-magnifying-glass"></i>
</button>
In this case, a screen reader may announce this button as Search, button, even though the button only contains an icon. The aria-label attribute tells screen readers what text to use in place of the icon.

If the button contained the text "Search" instead of an icon, then there would be no need for the aria-label attribute as the text would provide the label for the button.
```
#/Q 




