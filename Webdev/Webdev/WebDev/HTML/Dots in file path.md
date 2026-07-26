
#Q #AOSR/rn6mp
Use of dots in file path
? #AOSR/rn6mp/m/2mct
A single dot points to the current directory, and two dots point to the parent directory. You will typically see a single dot used to ensure that the path is recognized as a relative path. Remember that you learned in a previous lesson about relative versus absolute paths before.

```sh
my-app/
├─ public/
│  ├─ favicon.ico
│  ├─ index.html
├─ src/
│  ├─ index.css
│  ├─ index.js
```

If your `public/index.html` file needed to load the `favicon.ico` file, you would use a relative path with a single dot to access the current directory: `./favicon.ico`. If your `public/index.html` file needed to load the `index.css` file, you would use a relative path with double dots to navigate to the parent `my-app` directory first, then to the `src` directory, and finally to your file: `../src/index.css`.