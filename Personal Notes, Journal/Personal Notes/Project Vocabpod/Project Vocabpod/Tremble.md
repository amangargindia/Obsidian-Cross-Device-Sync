<svg width="700" height="700" viewBox="0 0 700 700" xmlns="http://www.w3.org/2000/svg">

<style>

.bgPulse {
  animation: bgAnim 4s ease-in-out infinite;
}

.trainShake {
  animation: trembleTrain 0.18s infinite;
  transform-origin: 350px 350px;
}

.bubble1 {
  animation: bubblePop1 2s infinite;
}

.bubble2 {
  animation: bubblePop2 2s infinite;
}

.bubble3 {
  animation: bubblePop3 2s infinite;
}

.textGlow {
  animation: glowText 2s ease-in-out infinite;
}

@keyframes bgAnim {
  0% { opacity: 0.94; }
  50% { opacity: 1; }
  100% { opacity: 0.94; }
}

@keyframes trembleTrain {
  0% { transform: translateX(-4px) rotate(-1deg); }
  25% { transform: translateX(4px) rotate(1deg); }
  50% { transform: translateX(-5px) rotate(-1deg); }
  75% { transform: translateX(5px) rotate(1deg); }
  100% { transform: translateX(-4px) rotate(-1deg); }
}

@keyframes bubblePop1 {
  0% {
    opacity: 0;
    transform: translateY(0px) scale(0.3);
  }

  20% {
    opacity: 1;
    transform: translateY(-20px) scale(1);
  }

  70% {
    opacity: 1;
    transform: translateY(-80px) scale(1.3);
  }

  100% {
    opacity: 0;
    transform: translateY(-120px) scale(0.2);
  }
}

@keyframes bubblePop2 {
  0% {
    opacity: 0;
    transform: translateY(0px) scale(0.2);
  }

  25% {
    opacity: 1;
    transform: translateY(-30px) scale(1.2);
  }

  75% {
    opacity: 1;
    transform: translateY(-100px) scale(1.4);
  }

  100% {
    opacity: 0;
    transform: translateY(-140px) scale(0.1);
  }
}

@keyframes bubblePop3 {
  0% {
    opacity: 0;
    transform: translateY(0px) scale(0.2);
  }

  30% {
    opacity: 1;
    transform: translateY(-25px) scale(1);
  }

  80% {
    opacity: 1;
    transform: translateY(-90px) scale(1.2);
  }

  100% {
    opacity: 0;
    transform: translateY(-130px) scale(0.1);
  }
}

@keyframes glowText {
  0% {
    fill: #F5F5F7;
  }

  50% {
    fill: #E04B35;
  }

  100% {
    fill: #F5F5F7;
  }
}

</style>

<!-- Background -->
<rect class="bgPulse" width="700" height="700" fill="#0A0A0A"/>

<!-- Tracks -->
<line x1="60" y1="520" x2="640" y2="520"
      stroke="#8E8E93"
      stroke-width="10"/>

<line x1="60" y1="570" x2="640" y2="570"
      stroke="#8E8E93"
      stroke-width="10"/>

<!-- Sleepers -->
<g stroke="#3A1D1A" stroke-width="8">

<line x1="80" y1="505" x2="80" y2="585"/>
<line x1="140" y1="505" x2="140" y2="585"/>
<line x1="200" y1="505" x2="200" y2="585"/>
<line x1="260" y1="505" x2="260" y2="585"/>
<line x1="320" y1="505" x2="320" y2="585"/>
<line x1="380" y1="505" x2="380" y2="585"/>
<line x1="440" y1="505" x2="440" y2="585"/>
<line x1="500" y1="505" x2="500" y2="585"/>
<line x1="560" y1="505" x2="560" y2="585"/>
<line x1="620" y1="505" x2="620" y2="585"/>

</g>

<!-- Train -->
<g class="trainShake">

  <!-- Engine -->
  <rect x="180"
        y="260"
        width="320"
        height="150"
        rx="24"
        fill="#E04B35"/>

  <!-- Cabin -->
  <rect x="390"
        y="180"
        width="120"
        height="110"
        rx="14"
        fill="#F5F5F7"/>

  <!-- Window -->
  <rect x="420"
        y="210"
        width="50"
        height="40"
        rx="6"
        fill="#87CEEB"/>

  <!-- Front -->
  <rect x="145"
        y="300"
        width="40"
        height="75"
        rx="10"
        fill="#F5F5F7"/>

  <!-- Chimney -->
  <rect x="230"
        y="170"
        width="40"
        height="100"
        rx="8"
        fill="#1C1C1E"/>

  <!-- Wheels -->
  <circle cx="240" cy="440" r="38" fill="#1C1C1E"/>
  <circle cx="360" cy="440" r="38" fill="#1C1C1E"/>
  <circle cx="470" cy="440" r="38" fill="#1C1C1E"/>

  <!-- Fear face -->
  <circle cx="260" cy="315" r="12" fill="#fff"/>
  <circle cx="315" cy="315" r="12" fill="#fff"/>

  <circle cx="263" cy="315" r="5" fill="#000"/>
  <circle cx="318" cy="315" r="5" fill="#000"/>

  <ellipse cx="290"
           cy="360"
           rx="24"
           ry="14"
           fill="#000"/>

</g>

<!-- Big visible bubbles -->

<circle class="bubble1"
        cx="250"
        cy="170"
        r="22"
        fill="#F5F5F7"
        opacity="0.95"/>

<circle class="bubble2"
        cx="315"
        cy="120"
        r="28"
        fill="#F5F5F7"
        opacity="0.95"/>

<circle class="bubble3"
        cx="380"
        cy="90"
        r="18"
        fill="#F5F5F7"
        opacity="0.95"/>

<!-- TRAIN BUBBLE -->
<text class="textGlow"
      x="110"
      y="635"
      font-size="48"
      font-family="Verdana"
      font-weight="bold">
TRAIN BUBBLE
</text>

<!-- TREMBLE -->
<text class="textGlow"
      x="175"
      y="685"
      font-size="70"
      font-family="Verdana"
      font-weight="bold"
      letter-spacing="4">
TREMBLE
</text>

</svg>

[WORD] Tremble

[PHONETIC] TREM-buhl

[DEFINITION] Darr, nervousness, ya cold ki wajah se kaanpna.

[NARRATIVE] Imagine ek train itni darr gayi ki woh tracks par kaanpne lagi. Uske engine se weird bubbles nikal rahe the:

“blub blub blub…”

Poora engine shake ho raha tha aur log bol rahe the:

“Train bubble ho ke TREMBLE kar rahi hai!”

Yahan “Train bubble” sunne mein “Tremble” jaisa lagta hai, aur shaking train directly meaning show karti hai.

[STORY] Naeema aur Darpan raat ko railway station par khade the. Suddenly ek old train station par enter hui. Par kuch ajeeb tha. Train normally move nahi kar rahi thi. Poora engine literally **Tremble** kar raha tha.

Darpan bola, “Bhai ye train itni kyun kaanp rahi hai?”

Us waqt engine se bubbles aur steam nikalne lage. Naeema thodi darr gayi. Platform ke lights bhi blink karne lage. Train ka horn baja aur poori body aur zyada **Tremble** karne lagi.

Ek uncle haste hue bole, “Lagta hai train ko bhi darr lag raha hai!”

Train rukne ke baad bhi uske wheels slowly **Tremble** kar rahe the. Darpan ne video bana li aur bola, “Ye toh life ka sabse weird station moment tha.”

[USAGE]

[Darr ki wajah se body shake ho rahi ho | “Her hands began to tremble with fear.”]

[Cold weather mein kaanpna | “He started to tremble in the cold wind.”]

[Nervous speech ya stage fear ho | “His voice trembled during the speech.”]

[Shock ya anxiety show karna ho | “She trembled after hearing the news.”]

[Kisi object ka shake karna describe karna ho | “The old bridge trembled loudly.”]

[LEVEL] 2

[SVG]

```svg
<svg width="700" height="700" viewBox="0 0 700 700" xmlns="http://www.w3.org/2000/svg">

<style>

.bgPulse {
  animation: bgAnim 4s ease-in-out infinite;
}

.trainShake {
  animation: trembleTrain 0.18s infinite;
  transform-origin: 350px 350px;
}

.bubble1 {
  animation: bubblePop1 2s infinite;
}

.bubble2 {
  animation: bubblePop2 2s infinite;
}

.bubble3 {
  animation: bubblePop3 2s infinite;
}

.textGlow {
  animation: glowText 2s ease-in-out infinite;
}

@keyframes bgAnim {
  0% { opacity: 0.94; }
  50% { opacity: 1; }
  100% { opacity: 0.94; }
}

@keyframes trembleTrain {
  0% { transform: translateX(-4px) rotate(-1deg); }
  25% { transform: translateX(4px) rotate(1deg); }
  50% { transform: translateX(-5px) rotate(-1deg); }
  75% { transform: translateX(5px) rotate(1deg); }
  100% { transform: translateX(-4px) rotate(-1deg); }
}

@keyframes bubblePop1 {
  0% {
    opacity: 0;
    transform: translateY(0px) scale(0.3);
  }

  20% {
    opacity: 1;
    transform: translateY(-20px) scale(1);
  }

  70% {
    opacity: 1;
    transform: translateY(-80px) scale(1.3);
  }

  100% {
    opacity: 0;
    transform: translateY(-120px) scale(0.2);
  }
}

@keyframes bubblePop2 {
  0% {
    opacity: 0;
    transform: translateY(0px) scale(0.2);
  }

  25% {
    opacity: 1;
    transform: translateY(-30px) scale(1.2);
  }

  75% {
    opacity: 1;
    transform: translateY(-100px) scale(1.4);
  }

  100% {
    opacity: 0;
    transform: translateY(-140px) scale(0.1);
  }
}

@keyframes bubblePop3 {
  0% {
    opacity: 0;
    transform: translateY(0px) scale(0.2);
  }

  30% {
    opacity: 1;
    transform: translateY(-25px) scale(1);
  }

  80% {
    opacity: 1;
    transform: translateY(-90px) scale(1.2);
  }

  100% {
    opacity: 0;
    transform: translateY(-130px) scale(0.1);
  }
}

@keyframes glowText {
  0% {
    fill: #F5F5F7;
  }

  50% {
    fill: #E04B35;
  }

  100% {
    fill: #F5F5F7;
  }
}

</style>

<!-- Background -->
<rect class="bgPulse" width="700" height="700" fill="#0A0A0A"/>

<!-- Tracks -->
<line x1="60" y1="520" x2="640" y2="520"
      stroke="#8E8E93"
      stroke-width="10"/>

<line x1="60" y1="570" x2="640" y2="570"
      stroke="#8E8E93"
      stroke-width="10"/>

<!-- Sleepers -->
<g stroke="#3A1D1A" stroke-width="8">

<line x1="80" y1="505" x2="80" y2="585"/>
<line x1="140" y1="505" x2="140" y2="585"/>
<line x1="200" y1="505" x2="200" y2="585"/>
<line x1="260" y1="505" x2="260" y2="585"/>
<line x1="320" y1="505" x2="320" y2="585"/>
<line x1="380" y1="505" x2="380" y2="585"/>
<line x1="440" y1="505" x2="440" y2="585"/>
<line x1="500" y1="505" x2="500" y2="585"/>
<line x1="560" y1="505" x2="560" y2="585"/>
<line x1="620" y1="505" x2="620" y2="585"/>

</g>

<!-- Train -->
<g class="trainShake">

  <!-- Engine -->
  <rect x="180"
        y="260"
        width="320"
        height="150"
        rx="24"
        fill="#E04B35"/>

  <!-- Cabin -->
  <rect x="390"
        y="180"
        width="120"
        height="110"
        rx="14"
        fill="#F5F5F7"/>

  <!-- Window -->
  <rect x="420"
        y="210"
        width="50"
        height="40"
        rx="6"
        fill="#87CEEB"/>

  <!-- Front -->
  <rect x="145"
        y="300"
        width="40"
        height="75"
        rx="10"
        fill="#F5F5F7"/>

  <!-- Chimney -->
  <rect x="230"
        y="170"
        width="40"
        height="100"
        rx="8"
        fill="#1C1C1E"/>

  <!-- Wheels -->
  <circle cx="240" cy="440" r="38" fill="#1C1C1E"/>
  <circle cx="360" cy="440" r="38" fill="#1C1C1E"/>
  <circle cx="470" cy="440" r="38" fill="#1C1C1E"/>

  <!-- Fear face -->
  <circle cx="260" cy="315" r="12" fill="#fff"/>
  <circle cx="315" cy="315" r="12" fill="#fff"/>

  <circle cx="263" cy="315" r="5" fill="#000"/>
  <circle cx="318" cy="315" r="5" fill="#000"/>

  <ellipse cx="290"
           cy="360"
           rx="24"
           ry="14"
           fill="#000"/>

</g>

<!-- Big visible bubbles -->

<circle class="bubble1"
        cx="250"
        cy="170"
        r="22"
        fill="#F5F5F7"
        opacity="0.95"/>

<circle class="bubble2"
        cx="315"
        cy="120"
        r="28"
        fill="#F5F5F7"
        opacity="0.95"/>

<circle class="bubble3"
        cx="380"
        cy="90"
        r="18"
        fill="#F5F5F7"
        opacity="0.95"/>

<!-- TRAIN BUBBLE -->
<text class="textGlow"
      x="110"
      y="635"
      font-size="48"
      font-family="Verdana"
      font-weight="bold">
TRAIN BUBBLE
</text>

<!-- TREMBLE -->
<text class="textGlow"
      x="175"
      y="685"
      font-size="70"
      font-family="Verdana"
      font-weight="bold"
      letter-spacing="4">
TREMBLE
</text>

</svg>
```

[QUIZ_Q] Which situation best shows someone “trembling”?

[QUIZ_A1] A boy calmly sleeping on a sofa.

[QUIZ_A2] A girl shaking with fear during a horror movie. [CORRECT]

[QUIZ_A3] A man happily eating ice cream.

[QUIZ_A4] A student silently reading a book.

[QUIZ_EXP] Option 2 correct hai because “Tremble” ka meaning hota hai fear, nervousness, ya cold ki wajah se shake ya kaanpna. Horror movie dekh ke darr ki wajah se shake karna exactly trembling show karta hai. Baaki options mein shaking ya fear nahi hai.