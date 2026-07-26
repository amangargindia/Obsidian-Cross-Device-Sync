#Q
How to make a radio element in form in HTML
?
To make a radio input type in HTML,
1. Give the `<input></input>` element an attribute of `type="radio"`
2. Give it an `id=""` so it can be attributed to an input
3. a `name=""` so it can be identified in the backend and can be grouped together
4. A `value=""` to show what it stands for.

```
			<input
          type="radio"
          id="yes-option"
          name="hotel-stay"
          value="yes">
			<label 
          for="yes-option">
          Yes
          </label>
```
#/Q 


#Q
How do you group together two radio elements together so only one can be selected at once
?
You can give both the radio elements `<input></input>` element same `name=""` attribute, hence it will make sure that they are mutually exclusive.

#Q
What is the value attribute in radio input type
?
The value attribute is used to specify the value that will be sent to the server when the form is submitted.

