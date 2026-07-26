<svg width="800" height="450" viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg">

<style>

.bgPulse {
  animation: bgAnim 4s ease-in-out infinite;
}

.reddy {
  animation: wobble 2s ease-in-out infinite;
  transform-origin: 400px 220px;
}

.pants {
  animation: pantsDrop 2.2s ease-in-out infinite;
}

.cape {
  animation: capeSwing 1.4s ease-in-out infinite;
  transform-origin: 400px 170px;
}

.laugh {
  animation: laughBounce 1s infinite;
}

.ridiculousText {
  animation: smoothGlow 2.8s ease-in-out infinite;
}

.shoe {
  animation: shoeSpin 2s linear infinite;
  transform-origin: 0px 0px;
}

@keyframes bgAnim {
  0% { opacity: 0.92; }
  50% { opacity: 1; }
  100% { opacity: 0.92; }
}

@keyframes wobble {
  0% { transform: rotate(-4deg); }
  50% { transform: rotate(4deg); }
  100% { transform: rotate(-4deg); }
}

@keyframes pantsDrop {
  0% { transform: translateY(0px); }
  50% { transform: translateY(24px); }
  100% { transform: translateY(0px); }
}

@keyframes capeSwing {
  0% { transform: rotate(-12deg); }
  50% { transform: rotate(12deg); }
  100% { transform: rotate(-12deg); }
}

@keyframes laughBounce {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
  100% { transform: translateY(0px); }
}

@keyframes smoothGlow {
  0% {
    opacity: 0.7;
    transform: scale(1);
    fill: #E04B35;
  }

  50% {
    opacity: 1;
    transform: scale(1.05);
    fill: #ff7b66;
  }

  100% {
    opacity: 0.7;
    transform: scale(1);
    fill: #E04B35;
  }
}

@keyframes shoeSpin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

</style>

<!-- Background -->
<rect class="bgPulse" width="800" height="450" fill="#0A0A0A"/>

<!-- Stage -->
<rect x="100" y="325" width="600" height="18" rx="10" fill="#3A1D1A"/>

<!-- Ceiling Fan -->
<g transform="translate(400 60)">
  <circle cx="0" cy="0" r="16" fill="#8E8E93"/>

  <line x1="0" y1="0" x2="50" y2="0"
        stroke="#8E8E93"
        stroke-width="10"/>

  <line x1="0" y1="0" x2="-50" y2="0"
        stroke="#8E8E93"
        stroke-width="10"/>

  <line x1="0" y1="0" x2="0" y2="50"
        stroke="#8E8E93"
        stroke-width="10"/>

  <animateTransform
    attributeName="transform"
    type="rotate"
    from="0 400 60"
    to="360 400 60"
    dur="1s"
    repeatCount="indefinite"/>
</g>

<!-- Reddy -->
<g class="reddy">

  <!-- Head -->
  <circle cx="400" cy="135" r="28" fill="#FFD2B5"/>

  <!-- Silly upside helmet -->
  <path d="M372 118 Q400 78 428 118"
        fill="#E04B35"
        transform="rotate(180 400 118)"/>

  <!-- Confused eyes -->
  <circle cx="392" cy="135" r="3" fill="#000"/>
  <circle cx="408" cy="135" r="3" fill="#000"/>

  <!-- Mouth -->
  <ellipse cx="400" cy="150" rx="8" ry="5" fill="#000"/>

  <!-- Loose oversized shirt -->
  <rect x="350" y="165"
        width="100"
        height="85"
        rx="20"
        fill="#E04B35"/>

  <!-- Giant R logo -->
  <text x="385"
        y="220"
        font-size="34"
        fill="#FFD54F"
        font-family="Verdana"
        font-weight="bold">
    R
  </text>

  <!-- Belly sticking out -->
  <ellipse cx="400"
           cy="248"
           rx="28"
           ry="18"
           fill="#FFD2B5"/>

  <!-- Super loose pants -->
  <g class="pants">

    <rect x="330"
          y="255"
          width="140"
          height="58"
          rx="18"
          fill="#1C1C1E"/>

    <!-- Belt hanging -->
    <rect x="320"
          y="268"
          width="160"
          height="8"
          rx="4"
          fill="#FFD54F"/>

    <!-- Rope -->
    <line x1="480"
          y1="272"
          x2="520"
          y2="310"
          stroke="#FFD54F"
          stroke-width="4"/>

  </g>

  <!-- Legs -->
  <line x1="375" y1="312" x2="365" y2="350"
        stroke="#FFD2B5"
        stroke-width="10"
        stroke-linecap="round"/>

  <line x1="425" y1="312" x2="435" y2="350"
        stroke="#FFD2B5"
        stroke-width="10"
        stroke-linecap="round"/>

  <!-- Different shoes -->
  <ellipse cx="360" cy="355" rx="24" ry="10" fill="#E04B35"/>

  <g class="shoe">
    <rect x="430"
          y="342"
          width="34"
          height="18"
          rx="6"
          fill="#F5F5F7"/>
  </g>

  <!-- Arms -->
  <line x1="350" y1="190" x2="305" y2="230"
        stroke="#FFD2B5"
        stroke-width="8"
        stroke-linecap="round"/>

  <line x1="450" y1="190" x2="495" y2="230"
        stroke="#FFD2B5"
        stroke-width="8"
        stroke-linecap="round"/>

  <!-- Cape stuck in fan -->
  <path class="cape"
        d="M448 175
           Q540 200 500 295
           Q455 260 420 240"
        fill="#E04B35"
        opacity="0.8"/>

</g>

<!-- Laughing crowd -->
<text class="laugh"
      x="85"
      y="230"
      font-size="40"
      fill="#F5F5F7"
      font-family="Verdana"
      font-weight="bold">
HAHA!
</text>

<text class="laugh"
      x="610"
      y="245"
      font-size="36"
      fill="#F5F5F7"
      font-family="Verdana"
      font-weight="bold"
      style="animation-delay:0.4s">
LOL!
</text>

<!-- Mnemonic -->
<text x="175"
      y="385"
      font-size="38"
      fill="#F5F5F7"
      font-family="Verdana"
      font-weight="bold">
REDDY LOOSE
</text>

<!-- Ridiculous -->
<text class="ridiculousText"
      x="105"
      y="438"
      font-size="64"
      font-family="Verdana"
      font-weight="bold"
      letter-spacing="4">
RIDICULOUS
</text>

</svg>

[WORD] Ridiculous

[PHONETIC] ri-DIK-yuh-lus

[DEFINITION] Itna stupid, silly, ya absurd ki dekh ke hasi aa jaaye.

[NARRATIVE] Reddy superhero banna chahta tha. Par uska costume bahut loose tha. Pant neeche gir rahi thi, ek shoe alag tha, helmet ulta tha, aur cape fan mein phas gayi thi. Sab log hasne lage:

“Reddy ka loose costume kitna RIDICULOUS hai!”

Yahan “Reddy loose” sunne mein “Ridiculous” jaisa lagta hai, aur pura scene absurd aur silly hai.

[STORY] Zane aur Dipti colony ke annual function mein gaye the. Suddenly stage par ek banda superhero ban ke aaya. Uska costume itna ajeeb tha ki sab chup ho gaye. Uski pant loose thi, cape ulta tha, aur helmet sideways pehna hua tha.

Dipti hasi rok nahi paayi aur boli, “Ye toh completely **Ridiculous** lag raha hai!”

Phir woh banda dramatic pose dene gaya, par uska shoe nikal ke audience mein chala gaya. Pura hall hasne laga. Zane bola, “Bhai itna **Ridiculous** performance maine life mein nahi dekha.”

Host bhi hasi control nahi kar pa raha tha. Stage ke peeche khade Dravin ne bola, “Iska costume hi sabse **Ridiculous** part hai.”

Event ke baad bhi log uske weird superhero look ki baat kar rahe the.

[USAGE]

[Kisi stupid ya absurd idea ko describe karna ho | “That plan sounds ridiculous.”]

[Kisi weird dressing ya behavior par reaction dena ho | “He looked ridiculous in that costume.”]

[Kisi overacting ya drama ko silly bolna ho | “Stop being ridiculous.”]

[Kisi impossible claim ko reject karna ho | “That price is ridiculous.”]

[Kisi funny absurd situation ko describe karna ho | “The whole scene was ridiculous.”]

[LEVEL] 2

[SVG]

```svg
<svg width="800" height="450" viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg">

<style>

.bgPulse {
  animation: bgAnim 4s ease-in-out infinite;
}

.reddy {
  animation: wobble 2s ease-in-out infinite;
  transform-origin: 400px 220px;
}

.pants {
  animation: pantsDrop 2.2s ease-in-out infinite;
}

.cape {
  animation: capeSwing 1.4s ease-in-out infinite;
  transform-origin: 400px 170px;
}

.laugh {
  animation: laughBounce 1s infinite;
}

.ridiculousText {
  animation: smoothGlow 2.8s ease-in-out infinite;
}

.shoe {
  animation: shoeSpin 2s linear infinite;
  transform-origin: 0px 0px;
}

@keyframes bgAnim {
  0% { opacity: 0.92; }
  50% { opacity: 1; }
  100% { opacity: 0.92; }
}

@keyframes wobble {
  0% { transform: rotate(-4deg); }
  50% { transform: rotate(4deg); }
  100% { transform: rotate(-4deg); }
}

@keyframes pantsDrop {
  0% { transform: translateY(0px); }
  50% { transform: translateY(24px); }
  100% { transform: translateY(0px); }
}

@keyframes capeSwing {
  0% { transform: rotate(-12deg); }
  50% { transform: rotate(12deg); }
  100% { transform: rotate(-12deg); }
}

@keyframes laughBounce {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
  100% { transform: translateY(0px); }
}

@keyframes smoothGlow {
  0% {
    opacity: 0.7;
    transform: scale(1);
    fill: #E04B35;
  }

  50% {
    opacity: 1;
    transform: scale(1.05);
    fill: #ff7b66;
  }

  100% {
    opacity: 0.7;
    transform: scale(1);
    fill: #E04B35;
  }
}

@keyframes shoeSpin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

</style>

<!-- Background -->
<rect class="bgPulse" width="800" height="450" fill="#0A0A0A"/>

<!-- Stage -->
<rect x="100" y="325" width="600" height="18" rx="10" fill="#3A1D1A"/>

<!-- Ceiling Fan -->
<g transform="translate(400 60)">
  <circle cx="0" cy="0" r="16" fill="#8E8E93"/>

  <line x1="0" y1="0" x2="50" y2="0"
        stroke="#8E8E93"
        stroke-width="10"/>

  <line x1="0" y1="0" x2="-50" y2="0"
        stroke="#8E8E93"
        stroke-width="10"/>

  <line x1="0" y1="0" x2="0" y2="50"
        stroke="#8E8E93"
        stroke-width="10"/>

  <animateTransform
    attributeName="transform"
    type="rotate"
    from="0 400 60"
    to="360 400 60"
    dur="1s"
    repeatCount="indefinite"/>
</g>

<!-- Reddy -->
<g class="reddy">

  <!-- Head -->
  <circle cx="400" cy="135" r="28" fill="#FFD2B5"/>

  <!-- Silly upside helmet -->
  <path d="M372 118 Q400 78 428 118"
        fill="#E04B35"
        transform="rotate(180 400 118)"/>

  <!-- Confused eyes -->
  <circle cx="392" cy="135" r="3" fill="#000"/>
  <circle cx="408" cy="135" r="3" fill="#000"/>

  <!-- Mouth -->
  <ellipse cx="400" cy="150" rx="8" ry="5" fill="#000"/>

  <!-- Loose oversized shirt -->
  <rect x="350" y="165"
        width="100"
        height="85"
        rx="20"
        fill="#E04B35"/>

  <!-- Giant R logo -->
  <text x="385"
        y="220"
        font-size="34"
        fill="#FFD54F"
        font-family="Verdana"
        font-weight="bold">
    R
  </text>

  <!-- Belly sticking out -->
  <ellipse cx="400"
           cy="248"
           rx="28"
           ry="18"
           fill="#FFD2B5"/>

  <!-- Super loose pants -->
  <g class="pants">

    <rect x="330"
          y="255"
          width="140"
          height="58"
          rx="18"
          fill="#1C1C1E"/>

    <!-- Belt hanging -->
    <rect x="320"
          y="268"
          width="160"
          height="8"
          rx="4"
          fill="#FFD54F"/>

    <!-- Rope -->
    <line x1="480"
          y1="272"
          x2="520"
          y2="310"
          stroke="#FFD54F"
          stroke-width="4"/>

  </g>

  <!-- Legs -->
  <line x1="375" y1="312" x2="365" y2="350"
        stroke="#FFD2B5"
        stroke-width="10"
        stroke-linecap="round"/>

  <line x1="425" y1="312" x2="435" y2="350"
        stroke="#FFD2B5"
        stroke-width="10"
        stroke-linecap="round"/>

  <!-- Different shoes -->
  <ellipse cx="360" cy="355" rx="24" ry="10" fill="#E04B35"/>

  <g class="shoe">
    <rect x="430"
          y="342"
          width="34"
          height="18"
          rx="6"
          fill="#F5F5F7"/>
  </g>

  <!-- Arms -->
  <line x1="350" y1="190" x2="305" y2="230"
        stroke="#FFD2B5"
        stroke-width="8"
        stroke-linecap="round"/>

  <line x1="450" y1="190" x2="495" y2="230"
        stroke="#FFD2B5"
        stroke-width="8"
        stroke-linecap="round"/>

  <!-- Cape stuck in fan -->
  <path class="cape"
        d="M448 175
           Q540 200 500 295
           Q455 260 420 240"
        fill="#E04B35"
        opacity="0.8"/>

</g>

<!-- Laughing crowd -->
<text class="laugh"
      x="85"
      y="230"
      font-size="40"
      fill="#F5F5F7"
      font-family="Verdana"
      font-weight="bold">
HAHA!
</text>

<text class="laugh"
      x="610"
      y="245"
      font-size="36"
      fill="#F5F5F7"
      font-family="Verdana"
      font-weight="bold"
      style="animation-delay:0.4s">
LOL!
</text>

<!-- Mnemonic -->
<text x="175"
      y="385"
      font-size="38"
      fill="#F5F5F7"
      font-family="Verdana"
      font-weight="bold">
REDDY LOOSE
</text>

<!-- Ridiculous -->
<text class="ridiculousText"
      x="105"
      y="438"
      font-size="64"
      font-family="Verdana"
      font-weight="bold"
      letter-spacing="4">
RIDICULOUS
</text>

</svg>
```

[QUIZ_Q] Which sentence correctly uses the word “Ridiculous”?

[QUIZ_A1] “The magician’s trick was ridiculous and everyone laughed.” [CORRECT]

[QUIZ_A2] “I drank ridiculous water after running.”

[QUIZ_A3] “She ridiculously opened the notebook blue.”

[QUIZ_A4] “The chair was very ridiculousingly soft.”

[QUIZ_EXP] Option 1 correct hai because “Ridiculous” ka use kisi absurd, silly, ya laughable cheez ke liye hota hai. Magic trick itni weird thi ki sab has pade. Baaki sentences grammatically ya meaning-wise incorrect hain.