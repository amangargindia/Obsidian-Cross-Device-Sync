![[Pasted image 20260611152646.png]]


```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Survey Form</title>
  </head>

  <body>
    <h1 id="title">VocabPod Survey Form</h1>
    <p id="description">Thank you for trying VocabPod! Could you please rate us, so we know how to improve?</p>
    <form id="survey-form">
      <label for="name" type="text" id="name-label">Name:</label>
      <input type="text" id="name" required placeholder="Aman Garg">

      <label for="email" id="email-label">Email:</label>
      <input 
      required
      type="email"
      id="email"
      placeholder="shukaman5@gmail.com">

      <label for="number" id="number-label">Number:</label>
      <input type="number" min="1" max="9" id="number"
      placeholder="6267454456">
<br>

<label for="rating"> How did you like it? </label>
      <select 
      name="rating" id="dropdown">
      <option value="good">Good</option>
      <option value="bad">Bad</option>
      </select>

<fieldset>
  <caption>How would you rate us</caption>
<br>
<input 
type="radio"
name="ratings"
id="ratings"
value="amazing">
<label for="ratings">Amazing</label>


<input
type="radio"
name="ratings"
id="ratings-bad"
value="worst">
<label
for="ratings">Worst</label>

</fieldset>

<fieldset>
<caption>What did you like about us?</caption>

<input
type="checkbox"
id="flashcards"
name="likes"
value="flashcards">
<label
for="flashcards"
>
Flashcards
</label>

<input
type="checkbox"
id="audio"
name="likes"
value="audio">
<label
for="audio"
>
Audio
</label>
</fieldset>

<label for="additional-comments">Any additional comments?</label>
<textarea
placeholder="Tell us more..."
id="additional-comments"
rows="4"
cols="50"></textarea>

<button
id="submit"
value="submit"
type="submit">Submit</button>
    </form>
  </body>
</html>
```