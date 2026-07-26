````md id="r9xt2m"
[WORD] Rectify

[PHONETIC] REK-tuh-fy

[DEFINITION] Kisi mistake, issue, ya broken cheez ko correct ya fix karna.

[NARRATIVE] Imagine city mein ek legendary fixer hai named Rick. Jab bhi koi machine ya system break hota hai, log bulate hain:

“Rick-tify it!”

Aur Rick sab kuch properly repair aur correct kar deta hai.

Yahan “Rick-tify” sunne mein “Rectify” jaisa lagta hai, aur fixing problems directly meaning show karti hai.

[STORY] Aarav ne galti se company ka important spreadsheet delete kar diya. Office mein panic spread ho gaya because next morning client meeting thi. Sab log tension mein the aur manager repeatedly pooch raha tha ki issue kaise **Rectify** hoga.

Niharika calmly server backups check karne lagi. She finally found an older copy of the file and slowly saara missing data restore kar diya. Team ne relief ki saans li.

Manager bola, “Good job. You managed to **Rectify** the whole mess before the meeting.”

Later Aarav apologized for the mistake. Niharika hasi aur boli, “Mistakes happen. Important thing is knowing how to **Rectify** them.”

Meeting next day smoothly ho gayi.

[USAGE]

[Kisi mistake ko correct karna ho | “The company tried to rectify the error.”]

[Kisi broken system ko fix karna ho | “Engineers worked overnight to rectify the issue.”]

[Kisi misunderstanding ko solve karna ho | “He apologized to rectify the misunderstanding.”]

[Kisi bad situation ko improve karna ho | “New policies were introduced to rectify the problem.”]

[Kisi technical fault ko repair karna ho | “The mechanic rectified the wiring fault.”]

[LEVEL] 3

[SVG]

```svg
<svg width="700" height="700" viewBox="0 0 700 700" xmlns="http://www.w3.org/2000/svg">

<style>

.bgPulse {
  animation: roomBreath 9s ease-in-out infinite;
}

.rick {
  animation: mechanicFloat 5s ease-in-out infinite;
  transform-origin: 350px 340px;
}

.wrenchArm {
  animation: repairMove 2.8s ease-in-out infinite;
  transform-origin: 410px 340px;
}

.brokenGear {
  animation: brokenJitter 2.5s ease-in-out infinite;
  transform-origin: 220px 270px;
}

.fixedGear {
  animation: smoothGear 8s linear infinite;
  transform-origin: 490px 270px;
}

.spark1 {
  animation: sparkPop1 2s ease-in-out infinite;
}

.spark2 {
  animation: sparkPop2 2.8s ease-in-out infinite;
}

.arrowFlow {
  animation: arrowPulse 3s ease-in-out infinite;
}

.badgeGlow {
  animation: badgeFloat 4s ease-in-out infinite;
}

@keyframes roomBreath {
  0% { opacity: 0.95; }
  50% { opacity: 1; }
  100% { opacity: 0.95; }
}

@keyframes mechanicFloat {
  0% {
    transform: translateY(5px);
  }

  50% {
    transform: translateY(-5px);
  }

  100% {
    transform: translateY(5px);
  }
}

@keyframes repairMove {
  0% {
    transform: rotate(-7deg);
  }

  50% {
    transform: rotate(12deg);
  }

  100% {
    transform: rotate(-7deg);
  }
}

@keyframes brokenJitter {
  0% {
    transform: rotate(-3deg) translateX(-1px);
  }

  50% {
    transform: rotate(3deg) translateX(1px);
  }

  100% {
    transform: rotate(-3deg) translateX(-1px);
  }
}

@keyframes smoothGear {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

@keyframes sparkPop1 {
  0% {
    opacity: 0;
    transform: scale(0.3);
  }

  50% {
    opacity: 1;
    transform: scale(1);
  }

  100% {
    opacity: 0;
    transform: scale(0.3);
  }
}

@keyframes sparkPop2 {
  0% {
    opacity: 0;
    transform: translateY(0px);
  }

  50% {
    opacity: 1;
    transform: translateY(-10px);
  }

  100% {
    opacity: 0;
    transform: translateY(-20px);
  }
}

@keyframes arrowPulse {
  0% {
    opacity: 0.25;
  }

  50% {
    opacity: 1;
  }

  100% {
    opacity: 0.25;
  }
}

@keyframes badgeFloat {
  0% {
    opacity: 0.9;
    transform: translateY(0px);
  }

  50% {
    opacity: 1;
    transform: translateY(-2px);
  }

  100% {
    opacity: 0.9;
    transform: translateY(0px);
  }
}

</style>

<!-- Background -->
<rect class="bgPulse" width="700" height="700" fill="#0A0A0A"/>

<!-- Workshop -->
<rect x="60"
      y="70"
      width="580"
      height="500"
      rx="32"
      fill="#161618"/>

<!-- Left broken glow -->
<ellipse cx="220"
         cy="270"
         rx="120"
         ry="120"
         fill="#2A1412"
         opacity="0.55"/>

<!-- Right fixed glow -->
<ellipse cx="490"
         cy="270"
         rx="130"
         ry="130"
         fill="#3A1D1A"
         opacity="0.65"/>

<!-- Broken gear -->
<g class="brokenGear">

<circle cx="220"
        cy="270"
        r="58"
        fill="#707076"/>

<circle cx="220"
        cy="270"
        r="20"
        fill="#161618"/>

<line x1="190" y1="245" x2="248" y2="302"
      stroke="#0A0A0A"
      stroke-width="5"/>

<line x1="248" y1="240" x2="210" y2="312"
      stroke="#0A0A0A"
      stroke-width="5"/>

</g>

<!-- Arrow -->
<g class="arrowFlow">

<line x1="285"
      y1="270"
      x2="420"
      y2="270"
      stroke="#E04B35"
      stroke-width="6"
      stroke-linecap="round"/>

<polygon points="420,270 395,255 395,285"
         fill="#E04B35"/>

</g>

<!-- Fixed gear -->
<g class="fixedGear">

<circle cx="490"
        cy="270"
        r="60"
        fill="#E04B35"/>

<circle cx="490"
        cy="270"
        r="22"
        fill="#161618"/>

</g>

<!-- Rick -->
<g class="rick">

  <!-- Head -->
  <circle cx="350"
          cy="245"
          r="42"
          fill="#FFD2B5"/>

  <!-- Hair -->
  <path d="M315 235
           Q350 192 385 235"
        fill="#1A1A1A"/>

  <!-- Eyes -->
  <circle cx="335" cy="248" r="5" fill="#111"/>
  <circle cx="365" cy="248" r="5" fill="#111"/>

  <!-- Smile -->
  <path d="M336 272
           Q350 286 364 272"
        stroke="#111"
        stroke-width="3"
        fill="none"
        stroke-linecap="round"/>

  <!-- Body -->
  <rect x="300"
        y="295"
        width="100"
        height="145"
        rx="24"
        fill="#E04B35"/>

  <!-- Better readable name tag -->
  <g class="badgeGlow">

    <rect x="314"
          y="320"
          width="72"
          height="42"
          rx="10"
          fill="#F5F5F7"
          stroke="#D9D9DD"
          stroke-width="2"
          opacity="0.98"/>

    <text x="350"
          y="338"
          font-size="13"
          fill="#111"
          font-family="Georgia"
          font-weight="bold"
          text-anchor="middle">
Rick
    </text>

    <text x="350"
          y="352"
          font-size="9"
          fill="#555"
          font-family="Verdana"
          letter-spacing="0.5"
          text-anchor="middle">
the fixer
    </text>

  </g>

  <!-- Left arm -->
  <line x1="300"
        y1="335"
        x2="245"
        y2="305"
        stroke="#FFD2B5"
        stroke-width="11"
        stroke-linecap="round"/>

  <!-- Right arm -->
  <line class="wrenchArm"
        x1="400"
        y1="335"
        x2="470"
        y2="315"
        stroke="#FFD2B5"
        stroke-width="11"
        stroke-linecap="round"/>

  <!-- Legs -->
  <line x1="325"
        y1="440"
        x2="308"
        y2="515"
        stroke="#FFD2B5"
        stroke-width="12"
        stroke-linecap="round"/>

  <line x1="375"
        y1="440"
        x2="392"
        y2="515"
        stroke="#FFD2B5"
        stroke-width="12"
        stroke-linecap="round"/>

</g>

<!-- Wrench -->
<rect x="455"
      y="302"
      width="44"
      height="12"
      rx="6"
      fill="#C8C8CC"
      transform="rotate(18 455 302)"/>

<!-- Sparkles -->
<text class="spark1"
      x="545"
      y="215"
      font-size="28"
      fill="#F5F5F7">
✦
</text>

<text class="spark2"
      x="560"
      y="310"
      font-size="24"
      fill="#F5F5F7">
✦
</text>

</svg>
```

[QUIZ_Q] Which sentence best uses the word “Rectify”?

[QUIZ_A1] “The mechanic worked late to rectify the engine problem.” [CORRECT]

[QUIZ_A2] “She rectified the sandwich happily.”

[QUIZ_A3] “The cloud rectified across the sky.”

[QUIZ_A4] “They rectify football every evening.”

[QUIZ_EXP] Option 1 correct hai because “Rectify” ka meaning hota hai kisi issue, mistake, ya broken cheez ko fix ya correct karna. Engine problem repair karna exactly rectify show karta hai. Baaki options grammatically aur meaning-wise incorrect hain.
````
