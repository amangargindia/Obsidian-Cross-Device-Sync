**You cannot use Live Server for this project.** Live Server only works for basic, static HTML/CSS files.

Because VocabPod is a full-stack **Next.js React Application** (with backend API routes, database connections, and server-side rendering), it requires its own dedicated Node.js server to compile the code.

Here is exactly how to run and test your code:

1. Close that Live Server tab in your browser.
2. Open your terminal (PowerShell) in VS Code.
3. Make sure you are in the project folder (`cd "C:\Antigravity Dev\Vocabpod"`).
4. Type this command and hit Enter:
    
    powershell
    
    npm run dev
    
5. Wait a few seconds for it to say `Ready in xxx ms`.
6. Open your browser and go to: **`http://localhost:3000`**

That `localhost:3000` link is your actual live development environment. Any time you save a file in VS Code, that page will instantly hot-reload with your newest code!