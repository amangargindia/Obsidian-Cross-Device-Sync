# TXT → TTS Audiobook Guide

## 1. Put TXT file inside

```text
C:\Whisper
```

Example:

```text
C:\Whisper\book.txt
```

---

# 2. Open CMD

Press:

```text
Win + R
```

Type:

```text
cmd
```

Press Enter.

---

# 3. Move into Whisper folder

Run:

```bash
cd C:\Whisper
```

You should now see:

```text
C:\Whisper>
```

---

# 4. Convert TXT → MP3

Run:

```bash
python -m edge_tts --voice en-US-EmmaMultilingualNeural --file book.txt --write-media book.mp3
```

---

# 5. Wait

During generation:

- CMD may appear frozen
    
- no progress bar appears
    
- this is normal
    

Do NOT close CMD.

---

# 6. Finished

When complete, prompt returns:

```text
C:\Whisper>
```

Then you'll have:

```text
book.mp3
```

inside:

```text
C:\Whisper
```

---

# Better Version With Completion Message

Use this instead:

```bash
python -m edge_tts --voice en-US-EmmaMultilingualNeural --file book.txt --write-media book.mp3 && echo DONE
```

Then you'll see:

```text
DONE
```

after completion.

---

# Change Voice

Example:

```bash
python -m edge_tts --voice en-US-JennyNeural --file book.txt --write-media book.mp3
```

---

# List All Voices

```bash
python -m edge_tts --list-voices
```

---

# VERY IMPORTANT

Large books may fail.

Best workflow:

```text
chapter1.txt
chapter2.txt
chapter3.txt
```

Generate separately:

```bash
python -m edge_tts --voice en-US-EmmaMultilingualNeural --file chapter1.txt --write-media chapter1.mp3
```

This is far more reliable than one gigantic TXT.