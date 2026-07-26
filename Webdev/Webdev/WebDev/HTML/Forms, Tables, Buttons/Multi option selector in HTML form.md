#Q
Is the process to make multi option selection same as for other form field types
?
No, for other form types we use input and label element.
For option selection in dropdown menu format, we use `<select></select>` element with the `<option></option>` element nested within the select element.

```
          <select name="service" id="service">
            <option value="poor">Poor</option>
            <option value="satisfactory">Satisfactory</option>
            <option value="good">Good</option>
            <option value="very-good">Very Good</option>
            <option value="excellent">Excellent</option>
          </select>
```
#/Q 

#Q
How to make an option selected by default
?
Add the `selected` attribute in `<option></option>` element.

#Q
Is the selected element boolean or has a value
?
It is boolean attribute.