#Q 
How to put placeholder in HTML entry form
?
In [[Form type - Text input|Input]] field, you can put in `placeholder=""` attribute in there such that the text will appear in form.
![[{6921C130-689C-4E6C-919D-1F8370C8CFC8}.png]]
```
<form action="">
  <label for="email"> Email Address: </label>
  <input type="email" id="email" placeholder="example@email.com" />
</form>
```