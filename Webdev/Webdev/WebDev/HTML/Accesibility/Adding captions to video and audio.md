```
<video
  width="400"
  height="300"
  controls
  src="https://cdn.freecodecamp.org/curriculum/labs/what-is-the-map-method-and-how-does-it-work.mp4"
>
  <track
    src="captions.vtt"
    kind="captions"
    srclang="en"
    label="English"
  />
</video>

<audio controls src="sample.mp3">
  <track
    src="captions.vtt"
    kind="captions"
    srclang="en"
    label="English"
  />
</audio>
```

#Q
How to add captions 
?
Nest the void element `<track/>` within the audio or video element.

#Q #AOSR/31kki
What are the kinds of captions there can be
? #AOSR/31kki/m/z544
There can be captions, subtitles, chapters, and metadata.

#Q
What is difference between caption and subtitle
?
Captions include spoken words and non-verbal sounds, while subtitles are for viewers who don't understand the language.
