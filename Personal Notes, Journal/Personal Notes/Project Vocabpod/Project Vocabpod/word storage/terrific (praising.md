<svg width="800" height="450" viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg">

<style>

.bgPulse {
  animation: bgGlow 4s ease-in-out infinite;
}

.model {
  animation: walk 2s ease-in-out infinite;
}

.sparkle {
  animation: sparkleAnim 1.5s infinite;
}

.clapLeft {
  animation: clapL 0.6s infinite;
  transform-origin: 140px 250px;
}

.clapRight {
  animation: clapR 0.6s infinite;
  transform-origin: 660px 250px;
}

.terrificText {
  animation: terrificPop 1.8s infinite;
}

.fitText {
  animation: fitGlow 2s infinite;
}

@keyframes bgGlow {
  0% { opacity: 0.95; }
  50% { opacity: 1; }
  100% { opacity: 0.95; }
}

@keyframes walk {
  0% { transform: translateX(-20px); }
  50% { transform: translateX(20px); }
  100% { transform: translateX(-20px); }
}

@keyframes sparkleAnim {
  0% { opacity: 0; transform: scale(0.5); }
  50% { opacity: 1; transform: scale(1.2); }
  100% { opacity: 0; transform: scale(0.5); }
}

@keyframes clapL {
  0% { transform: rotate(8deg); }
  50% { transform: rotate(-8deg); }
  100% { transform: rotate(8deg); }
}

@keyframes clapR {
  0% { transform: rotate(-8deg); }
  50% { transform: rotate(8deg); }
  100% { transform: rotate(-8deg); }
}

@keyframes terrificPop {
  0% {
    transform: scale(0.8);
    opacity: 0;
  }
  40% {
    transform: scale(1.15);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 0.9;
  }
}

@keyframes fitGlow {
  0% { fill: #F5F5F7; }
  50% { fill: #E04B35; }
  100% { fill: #F5F5F7; }
}

</style>

<!-- Background -->
<rect class="bgPulse" width="800" height="450" fill="#0A0A0A"/>

<!-- Stage -->
<rect x="100" y="300" width="600" height="18" rx="10" fill="#3A1D1A"/>

<!-- Spotlights -->
<polygon points="250,0 180,300 320,300" fill="#E04B35" opacity="0.08"/>
<polygon points="550,0 480,300 620,300" fill="#E04B35" opacity="0.08"/>

<!-- Audience Left -->
<g class="clapLeft">
  <circle cx="120" cy="220" r="25" fill="#F5D7C4"/>
  <rect x="105" y="245" width="30" height="60" rx="8" fill="#1C1C1E"/>

  <line x1="105" y1="255" x2="80" y2="230"
        stroke="#F5D7C4"
        stroke-width="7"
        stroke-linecap="round"/>

  <line x1="135" y1="255" x2="160" y2="230"
        stroke="#F5D7C4"
        stroke-width="7"
        stroke-linecap="round"/>
</g>

<!-- Audience Right -->
<g class="clapRight">
  <circle cx="680" cy="220" r="25" fill="#F5D7C4"/>
  <rect x="665" y="245" width="30" height="60" rx="8" fill="#1C1C1E"/>

  <line x1="665" y1="255" x2="640" y2="230"
        stroke="#F5D7C4"
        stroke-width="7"
        stroke-linecap="round"/>

  <line x1="695" y1="255" x2="720" y2="230"
        stroke="#F5D7C4"
        stroke-width="7"
        stroke-linecap="round"/>
</g>

<!-- Model -->
<g class="model">

  <!-- Head -->
  <circle cx="400" cy="140" r="28" fill="#FFD2B5"/>

  <!-- Stylish glasses -->
  <rect x="382" y="132" width="12" height="8" rx="2" fill="#0A0A0A"/>
  <rect x="406" y="132" width="12" height="8" rx="2" fill="#0A0A0A"/>
  <line x1="394" y1="136" x2="406" y2="136"
        stroke="#0A0A0A"
        stroke-width="2"/>

  <!-- Body -->
  <rect x="378" y="170" width="44" height="90" rx="10" fill="#E04B35"/>

  <!-- Legs -->
  <line x1="390" y1="260" x2="380" y2="320"
        stroke="#FFD2B5"
        stroke-width="9"
        stroke-linecap="round"/>

  <line x1="410" y1="260" x2="420" y2="320"
        stroke="#FFD2B5"
        stroke-width="9"
        stroke-linecap="round"/>

  <!-- Arms -->
  <line x1="378" y1="190" x2="350" y2="230"
        stroke="#FFD2B5"
        stroke-width="8"
        stroke-linecap="round"/>

  <line x1="422" y1="190" x2="450" y2="230"
        stroke="#FFD2B5"
        stroke-width="8"
        stroke-linecap="round"/>

</g>

<!-- Sparkles -->
<text class="sparkle" x="320" y="120"
      font-size="28"
      fill="#F5F5F7">✦</text>

<text class="sparkle" x="500" y="160"
      font-size="24"
      fill="#F5F5F7"
      style="animation-delay:0.5s">✦</text>

<text class="sparkle" x="290" y="220"
      font-size="20"
      fill="#F5F5F7"
      style="animation-delay:1s">✦</text>

<!-- TERA FIT -->
<text class="fitText"
      x="230"
      y="380"
      font-size="40"
      font-family="Verdana"
      font-weight="bold">
TERA FIT!
</text>

<!-- TERRIFIC -->
<text class="terrificText"
      x="230"
      y="430"
      font-size="58"
      font-family="Verdana"
      font-weight="bold"
      fill="#F5F5F7"
      letter-spacing="4">
TERRIFIC
</text>

</svg>

[WORD] Terrific

[PHONETIC] tuh-RIF-ik

[DEFINITION] Bahut amazing, excellent, ya itna accha ki log impress ho jaayein.

[NARRATIVE] Imagine ek fashion show chal raha hai. Ek super stylish aur insanely fit model runway par entry karta hai. Audience usko dekh ke clap karne lagti hai aur chillati hai:

“BROOO! TERA FIT body toh TERRIFIC hai!”

Uske aas paas sparkles aa rahe hain, log impressed hain, aur pura scene admiration se bhara hua hai.  
Yahan “TERA FIT” directly “TERRIFIC” jaisa sunta hai, aur fit, stylish, impressive appearance naturally praise aur excellence ka feeling deta hai.

[STORY] Deepmaala aur Dex mall ke fashion event mein gaye the. Suddenly stage lights on hui aur ek model runway par aaya. Uska confidence aur style itna crazy tha ki sab log usko dekhte reh gaye. Dex bola, “Bhai ye toh completely **Terrific** lag raha hai!”

Thodi der baad audience clap karne lagi. Kritika ne phone nikaal kar video banana start kar diya. Model jab pose karta toh sparkles aur lights uske around shine karti. Deepmaala hasi aur boli, “Iska outfit bhi **Terrific** hai aur iska confidence bhi.”

Event ke end mein host ne announce kiya ki ye city ka top fitness model hai. Sab log uske saath selfie lena chahte the. Ek uncle loudly bole, “Ye banda toh pura **Terrific** nikla!”

Baad mein Dex ne mirror mein khud ko dekha aur mazaak mein bola, “Ek din main bhi itna **Terrific** banunga.”

[USAGE]

[Office ya school mein kisi ka kaam bahut impressive lage | “Your presentation was terrific.”]

[Kisi movie ya performance ko praise karna ho | “The acting in that movie was terrific.”]

[Kisi dost ka new outfit ya style bahut accha lage | “You look terrific in this jacket.”]

[Khana unexpectedly bahut tasty ho | “The food at the wedding was terrific.”]

[Kisi ka confidence ya performance bahut powerful lage | “She gave a terrific speech.”]

[LEVEL] 2

[SVG]

```svg
<svg width="800" height="450" viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg">

<style>

.bgPulse {
  animation: bgGlow 4s ease-in-out infinite;
}

.model {
  animation: walk 2s ease-in-out infinite;
}

.sparkle {
  animation: sparkleAnim 1.5s infinite;
}

.clapLeft {
  animation: clapL 0.6s infinite;
  transform-origin: 140px 250px;
}

.clapRight {
  animation: clapR 0.6s infinite;
  transform-origin: 660px 250px;
}

.terrificText {
  animation: terrificPop 1.8s infinite;
}

.fitText {
  animation: fitGlow 2s infinite;
}

@keyframes bgGlow {
  0% { opacity: 0.95; }
  50% { opacity: 1; }
  100% { opacity: 0.95; }
}

@keyframes walk {
  0% { transform: translateX(-20px); }
  50% { transform: translateX(20px); }
  100% { transform: translateX(-20px); }
}

@keyframes sparkleAnim {
  0% { opacity: 0; transform: scale(0.5); }
  50% { opacity: 1; transform: scale(1.2); }
  100% { opacity: 0; transform: scale(0.5); }
}

@keyframes clapL {
  0% { transform: rotate(8deg); }
  50% { transform: rotate(-8deg); }
  100% { transform: rotate(8deg); }
}

@keyframes clapR {
  0% { transform: rotate(-8deg); }
  50% { transform: rotate(8deg); }
  100% { transform: rotate(-8deg); }
}

@keyframes terrificPop {
  0% {
    transform: scale(0.8);
    opacity: 0;
  }
  40% {
    transform: scale(1.15);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 0.9;
  }
}

@keyframes fitGlow {
  0% { fill: #F5F5F7; }
  50% { fill: #E04B35; }
  100% { fill: #F5F5F7; }
}

</style>

<!-- Background -->
<rect class="bgPulse" width="800" height="450" fill="#0A0A0A"/>

<!-- Stage -->
<rect x="100" y="300" width="600" height="18" rx="10" fill="#3A1D1A"/>

<!-- Spotlights -->
<polygon points="250,0 180,300 320,300" fill="#E04B35" opacity="0.08"/>
<polygon points="550,0 480,300 620,300" fill="#E04B35" opacity="0.08"/>

<!-- Audience Left -->
<g class="clapLeft">
  <circle cx="120" cy="220" r="25" fill="#F5D7C4"/>
  <rect x="105" y="245" width="30" height="60" rx="8" fill="#1C1C1E"/>

  <line x1="105" y1="255" x2="80" y2="230"
        stroke="#F5D7C4"
        stroke-width="7"
        stroke-linecap="round"/>

  <line x1="135" y1="255" x2="160" y2="230"
        stroke="#F5D7C4"
        stroke-width="7"
        stroke-linecap="round"/>
</g>

<!-- Audience Right -->
<g class="clapRight">
  <circle cx="680" cy="220" r="25" fill="#F5D7C4"/>
  <rect x="665" y="245" width="30" height="60" rx="8" fill="#1C1C1E"/>

  <line x1="665" y1="255" x2="640" y2="230"
        stroke="#F5D7C4"
        stroke-width="7"
        stroke-linecap="round"/>

  <line x1="695" y1="255" x2="720" y2="230"
        stroke="#F5D7C4"
        stroke-width="7"
        stroke-linecap="round"/>
</g>

<!-- Model -->
<g class="model">

  <!-- Head -->
  <circle cx="400" cy="140" r="28" fill="#FFD2B5"/>

  <!-- Stylish glasses -->
  <rect x="382" y="132" width="12" height="8" rx="2" fill="#0A0A0A"/>
  <rect x="406" y="132" width="12" height="8" rx="2" fill="#0A0A0A"/>
  <line x1="394" y1="136" x2="406" y2="136"
        stroke="#0A0A0A"
        stroke-width="2"/>

  <!-- Body -->
  <rect x="378" y="170" width="44" height="90" rx="10" fill="#E04B35"/>

  <!-- Legs -->
  <line x1="390" y1="260" x2="380" y2="320"
        stroke="#FFD2B5"
        stroke-width="9"
        stroke-linecap="round"/>

  <line x1="410" y1="260" x2="420" y2="320"
        stroke="#FFD2B5"
        stroke-width="9"
        stroke-linecap="round"/>

  <!-- Arms -->
  <line x1="378" y1="190" x2="350" y2="230"
        stroke="#FFD2B5"
        stroke-width="8"
        stroke-linecap="round"/>

  <line x1="422" y1="190" x2="450" y2="230"
        stroke="#FFD2B5"
        stroke-width="8"
        stroke-linecap="round"/>

</g>

<!-- Sparkles -->
<text class="sparkle" x="320" y="120"
      font-size="28"
      fill="#F5F5F7">✦</text>

<text class="sparkle" x="500" y="160"
      font-size="24"
      fill="#F5F5F7"
      style="animation-delay:0.5s">✦</text>

<text class="sparkle" x="290" y="220"
      font-size="20"
      fill="#F5F5F7"
      style="animation-delay:1s">✦</text>

<!-- TERA FIT -->
<text class="fitText"
      x="230"
      y="380"
      font-size="40"
      font-family="Verdana"
      font-weight="bold">
TERA FIT!
</text>

<!-- TERRIFIC -->
<text class="terrificText"
      x="230"
      y="430"
      font-size="58"
      font-family="Verdana"
      font-weight="bold"
      fill="#F5F5F7"
      letter-spacing="4">
TERRIFIC
</text>

</svg>
```

[QUIZ_Q] If someone says “Your performance was terrific”, what do they mean?

[QUIZ_A1] Your performance was boring.

[QUIZ_A2] Your performance was excellent and impressive. [CORRECT]

[QUIZ_A3] Your performance was confusing.

[QUIZ_A4] Your performance was average.

[QUIZ_EXP] Correct answer hai option 2 because “Terrific” ka meaning hota hai extremely good, amazing, ya impressive. Baaki options negative ya neutral meanings dete hain, jo “Terrific” ke opposite hain.