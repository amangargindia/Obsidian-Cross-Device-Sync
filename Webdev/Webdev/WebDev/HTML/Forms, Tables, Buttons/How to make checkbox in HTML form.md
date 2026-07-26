#Q 
How to make checkbox in HTML form
?
To make checkbox in html form,'
1. Give `<input></input>` element attribute of `type="checkbox"`
2. Give it an id to be recognized by css
3. Give it value to be returned as to the server
4. Give it name to assosiate it with other options
```
<fieldset>
  <legend>Food Options</legend>
  <input type="checkbox" id="pizza" name="food" value="pizza">
  <label for="pizza">Pizza</label>
  <input type="checkbox" id="burger" name="food" value="burger">
  <label for="burger">Burger</label>
</fieldset>
```
5. Give it `label` element with `for=""` attribute set same as `id` element of `input`