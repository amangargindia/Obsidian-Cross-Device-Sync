---
aliases:
  - How to add shadows
---
#Q #AOSR/4pa4v
What is RGBA
? #AOSR/4pa4v/m/44vr
In CSS, the `rgba()` function stands for **Red, Green, Blue, Alpha**.
The color itself is determined entirely by the first three numbers `(0, 0, 0)`, which represent pure **black**.
The numbers **`0.1`** and **`0.7`** control the **Alpha channel**, which dictates the **opacity (transparency)** of that black color. It operates on a scale from `0` to `1`.

### The Difference in Appearance

- **`0.1` (10% Opacity):** This creates a very faint, light, and subtle gray appearance because the white background heavily shows through the transparent black.
    
- **`0.7` (70% Opacity):** This creates a much darker, heavier, and more distinct shadow. It lets very little of the background bleed through, making the shadow look solid and prominent (as seen on your quiz card right now).
    

### Breakdown of the Values

|**Value**|**Meaning**|**Visual Effect**|**Common Use Case**|
|---|---|---|---|
|`rgba(0, 0, 0, 0)`|0% Opacity|Completely invisible (Transparent)|Hiding elements or starting transitions|
|**`rgba(0, 0, 0, 0.1)`**|**10% Opacity**|**Very soft, subtle tint / faint mist**|**Clean, modern, realistic UI shadows**|
|**`rgba(0, 0, 0, 0.7)`**|**70% Opacity**|**Dark, heavy, prominent tint**|**Overlay backdrops (modal dimming)**|
|`rgba(0, 0, 0, 1)`|100% Opacity|Solid Black|Standard text, solid fills|

