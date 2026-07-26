```
<audio></audio>

<video></video>
```

#Q #AOSR/7b9sd
What are the attributes of audio
? #AOSR/7b9sd/m/3jla
Audio Attributes:
1. Boolean
- Loop
- Muted
- Controls
1. Non Boolean
- src

#Q #AOSR/k8esh
How to put multiple sources of audio/video
? #AOSR/k8esh/m/d54b
To put multiple formats (shared by audio and video):
```
<audio>
src=""
src=""
</audio>
```


#Q #AOSR/7hg0p
How to put type of audio/video in html
? #AOSR/7hg0p/m/2j63
To put type of video/ audio:
```
<audio src="" type="audio/mp4"></audio>
```

#Q #AOSR/7smeo
How to display thumbnail of the video
? #AOSR/7smeo/m/73cd
- **`poster` Attribute**: If you wanted to display an image while the video is downloading, you can use the `poster` attribute. This attribute is not available for `audio` elements and is unique to the `video` element.