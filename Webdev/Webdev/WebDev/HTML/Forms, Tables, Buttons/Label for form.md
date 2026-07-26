#Q #AOSR/617ii
What is label in HTML form
? #AOSR/617ii/m/3lu0
Label is how you link an input field to its value.

#Q
How do you link label to entry form
?
By putting `for` attribute in Label; and `id` attribute in Input. They both should be same.
```
<form action="">
  <label for="email"> Email Address: </label>
  <input type="email" id="email" />
</form>
```