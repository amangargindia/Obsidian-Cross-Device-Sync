<!DOCTYPE html>

<html lang="en">

<head>

    <meta charset="UTF-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>VocabPod Logo - Final Refinement</title>

    <!-- Importing Inter to match our brand system -->

    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">

    <script src="https://cdn.tailwindcss.com"></script>

    <script>

        tailwind.config = {

            theme: {

                extend: {

                    colors: {

                        darkbg: '#0A0A0C',

                        terracotta: '#E04B35',

                        applewhite: '#F5F5F7'

                    },

                    fontFamily: {

                        sans: ['Inter', 'sans-serif'],

                    }

                }

            }

        }

    </script>

    <script>

        function copyCode(btn, elementId) {

            const textarea = document.getElementById(elementId);

            textarea.select();

            textarea.setSelectionRange(0, 99999);

            document.execCommand('copy');

            const originalText = btn.innerText;

            btn.innerText = 'Copied!';

            btn.classList.add('bg-terracotta', 'text-white');

            btn.classList.remove('bg-gray-200', 'text-gray-700');

            setTimeout(() => {

                btn.innerText = originalText;

                btn.classList.remove('bg-terracotta', 'text-white');

                btn.classList.add('bg-gray-200', 'text-gray-700');

            }, 2000);

        }

    </script>

</head>

<body class="bg-gray-100 min-h-screen flex flex-col items-center justify-center p-8 gap-8">

  

    <div class="text-center mb-4 max-w-xl">

        <h2 class="text-2xl font-bold text-gray-800">Dynamic SVG Logo Lockup</h2>

    </div>

  

    <!-- DARK MODE PRESENTATION -->

    <div class="bg-darkbg text-applewhite p-12 rounded-3xl shadow-2xl w-full max-w-2xl flex items-center justify-center">

        <!-- The Actual Logo SVG -->

        <!-- We use 'currentColor' for the white elements so they inherit the text color of their container -->

        <svg viewBox="0 0 350 120" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md">

            <!-- 1. The 'Paper Strands' (Outer edges) -->

            <!-- Using lower opacity to create a fanned, layered paper effect -->

            <path d="M 16 35 L 60 102 L 104 35" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" opacity="0.3" />

            <path d="M 24 35 L 60 92 L 96 35" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" opacity="0.6" />

            <!-- 2. The Core 'V' (The Body & Arms) -->

            <path d="M 34 35 L 60 80 L 86 35" fill="none" stroke="currentColor" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" />

            <!-- 3. The Cognitive Spark (The Stickman Head) -->

            <!-- Fixed explicitly to the Terracotta brand color -->

            <circle cx="60" cy="48" r="10" fill="#E04B35" />

            <!-- 4. The Brand Wordmark -->

            <text x="125" y="74" fill="currentColor" font-family="Inter, sans-serif" font-weight="700" font-size="36" letter-spacing="-1">VocabPod</text>

        </svg>

  

    </div>

  

    <!-- LIGHT MODE PRESENTATION (Proof of scalability) -->

    <div class="bg-white text-gray-900 p-12 rounded-3xl shadow-md border border-gray-200 w-full max-w-2xl flex items-center justify-center">

        <!-- Exact same SVG code as above, but it automatically turns dark gray because the parent div text color changed -->

        <svg viewBox="0 0 350 120" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md">

            <path d="M 16 35 L 60 102 L 104 35" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" opacity="0.2" />

            <path d="M 24 35 L 60 92 L 96 35" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" opacity="0.5" />

            <path d="M 34 35 L 60 80 L 86 35" fill="none" stroke="currentColor" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" />

            <circle cx="60" cy="48" r="10" fill="#E04B35" />

            <text x="125" y="74" fill="currentColor" font-family="Inter, sans-serif" font-weight="700" font-size="36" letter-spacing="-1">VocabPod</text>

        </svg>

    </div>

  

    <!-- ANIMATED PRESENTATION -->

    <div class="bg-darkbg text-applewhite p-12 rounded-3xl shadow-2xl w-full max-w-2xl flex items-center justify-center">

        <svg viewBox="0 0 350 120" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md">

            <!-- Sparks (Initially hidden, burst exactly on impact at 40% of the timeline) -->

            <g stroke="#E04B35" stroke-width="2.5" stroke-linecap="round">

                <path d="M 50 40 L 40 30" stroke-dasharray="20" stroke-dashoffset="20">

                    <animate attributeName="stroke-dashoffset" values="20; 20; 20; -20; -20" keyTimes="0; 0.2; 0.4; 0.6; 1" dur="3s" repeatCount="indefinite" />

                </path>

                <path d="M 60 35 L 60 20" stroke-dasharray="20" stroke-dashoffset="20">

                    <animate attributeName="stroke-dashoffset" values="20; 20; 20; -20; -20" keyTimes="0; 0.2; 0.4; 0.6; 1" dur="3s" repeatCount="indefinite" />

                </path>

                <path d="M 70 40 L 80 30" stroke-dasharray="20" stroke-dashoffset="20">

                    <animate attributeName="stroke-dashoffset" values="20; 20; 20; -20; -20" keyTimes="0; 0.2; 0.4; 0.6; 1" dur="3s" repeatCount="indefinite" />

                </path>

            </g>

  

            <!-- Outer Strands (Rest -> Rest -> Flatten -> Recoil -> Hold) -->

            <path d="M 16 35 L 60 102 L 104 35" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" opacity="0.3">

                <animate attributeName="d" values="M 16 35 L 60 102 L 104 35; M 16 35 L 60 102 L 104 35; M 4 55 L 60 110 L 116 55; M 16 35 L 60 102 L 104 35; M 16 35 L 60 102 L 104 35" keyTimes="0; 0.2; 0.4; 0.6; 1" dur="3s" repeatCount="indefinite" calcMode="spline" keySplines="0.5 0 0.5 1; 0.42 0 1 1; 0 0 0.58 1; 1 0 1 1"/>

            </path>

            <path d="M 24 35 L 60 92 L 96 35" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" opacity="0.6">

                <animate attributeName="d" values="M 24 35 L 60 92 L 96 35; M 24 35 L 60 92 L 96 35; M 10 50 L 60 100 L 110 50; M 24 35 L 60 92 L 96 35; M 24 35 L 60 92 L 96 35" keyTimes="0; 0.2; 0.4; 0.6; 1" dur="3s" repeatCount="indefinite" calcMode="spline" keySplines="0.5 0 0.5 1; 0.42 0 1 1; 0 0 0.58 1; 1 0 1 1"/>

            </path>

            <!-- Core V (Rest -> Rest -> Flatten -> Recoil -> Hold) -->

            <path d="M 34 35 L 60 80 L 86 35" fill="none" stroke="currentColor" stroke-width="6" stroke-linecap="round" stroke-linejoin="round">

                <animate attributeName="d" values="M 34 35 L 60 80 L 86 35; M 34 35 L 60 80 L 86 35; M 16 45 L 60 90 L 104 45; M 34 35 L 60 80 L 86 35; M 34 35 L 60 80 L 86 35" keyTimes="0; 0.2; 0.4; 0.6; 1" dur="3s" repeatCount="indefinite" calcMode="spline" keySplines="0.5 0 0.5 1; 0.42 0 1 1; 0 0 0.58 1; 1 0 1 1"/>

            </path>

            <!-- The Cognitive Spark (Rest -> Toss Up -> Slam -> Recoil -> Hold) -->

            <!-- cy=48 is Rest, cy=20 is Peak, cy=65 is Flattened Impact -->

            <circle cx="60" cy="48" r="10" fill="#E04B35">

                <animate attributeName="cy" values="48; 20; 65; 48; 48" keyTimes="0; 0.2; 0.4; 0.6; 1" dur="3s" repeatCount="indefinite" calcMode="spline" keySplines="0 0 0.58 1; 0.42 0 1 1; 0 0 0.58 1; 1 0 1 1"/>

            </circle>

            <text x="125" y="74" fill="currentColor" font-family="Inter, sans-serif" font-weight="700" font-size="36" letter-spacing="-1">VocabPod</text>

        </svg>

    </div>

  

    <!-- RAW EXACT SVG CODES -->

    <div class="w-full max-w-2xl mt-4 bg-white p-8 rounded-3xl shadow-sm border border-gray-200">

        <h3 class="text-xl font-bold text-gray-800 mb-6">Exact SVG Codes</h3>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">

            <!-- Dark Mode Exact Code -->

            <div class="relative">

                <div class="flex justify-between items-center mb-2">

                    <h4 class="text-sm font-bold text-gray-600 uppercase tracking-wide">Dark Mode Logo</h4>

                    <button onclick="copyCode(this, 'darkSvg')" class="text-xs bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-1 px-3 rounded-full transition-colors cursor-pointer">Copy</button>

                </div>

                <textarea id="darkSvg" class="w-full h-64 p-4 bg-[#0A0A0C] text-[#F5F5F7] font-mono text-xs rounded-xl shadow-inner resize-none focus:outline-none focus:ring-2 focus:ring-terracotta" readonly>

<svg viewBox="0 0 350 120" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">

    <path d="M 16 35 L 60 102 L 104 35" fill="none" stroke="#F5F5F7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" opacity="0.3" />

    <path d="M 24 35 L 60 92 L 96 35" fill="none" stroke="#F5F5F7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" opacity="0.6" />

    <path d="M 34 35 L 60 80 L 86 35" fill="none" stroke="#F5F5F7" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" />

    <circle cx="60" cy="48" r="10" fill="#E04B35" />

    <text x="125" y="74" fill="#F5F5F7" font-family="Inter, sans-serif" font-weight="700" font-size="36" letter-spacing="-1">VocabPod</text>

</svg></textarea>

            </div>

            <!-- Light Mode Exact Code -->

            <div class="relative">

                <div class="flex justify-between items-center mb-2">

                    <h4 class="text-sm font-bold text-gray-600 uppercase tracking-wide">Light Mode Logo</h4>

                    <button onclick="copyCode(this, 'lightSvg')" class="text-xs bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-1 px-3 rounded-full transition-colors cursor-pointer">Copy</button>

                </div>

                <textarea id="lightSvg" class="w-full h-64 p-4 bg-gray-50 text-[#1D1D1F] font-mono text-xs rounded-xl shadow-inner border border-gray-200 resize-none focus:outline-none focus:ring-2 focus:ring-terracotta" readonly>

<svg viewBox="0 0 350 120" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">

    <path d="M 16 35 L 60 102 L 104 35" fill="none" stroke="#1D1D1F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" opacity="0.3" />

    <path d="M 24 35 L 60 92 L 96 35" fill="none" stroke="#1D1D1F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" opacity="0.6" />

    <path d="M 34 35 L 60 80 L 86 35" fill="none" stroke="#1D1D1F" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" />

    <circle cx="60" cy="48" r="10" fill="#E04B35" />

    <text x="125" y="74" fill="#1D1D1F" font-family="Inter, sans-serif" font-weight="700" font-size="36" letter-spacing="-1">VocabPod</text>

</svg></textarea>

            </div>

        </div>

        <!-- Animated Exact Code -->

        <div class="relative mt-6">

            <div class="flex justify-between items-center mb-2">

                <h4 class="text-sm font-bold text-gray-600 uppercase tracking-wide">Animated Logo</h4>

                <button onclick="copyCode(this, 'animSvg')" class="text-xs bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-1 px-3 rounded-full transition-colors cursor-pointer">Copy</button>

            </div>

            <textarea id="animSvg" class="w-full h-80 p-4 bg-[#0A0A0C] text-[#F5F5F7] font-mono text-xs rounded-xl shadow-inner resize-none focus:outline-none focus:ring-2 focus:ring-terracotta" readonly>

<svg viewBox="0 0 350 120" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">

    <g stroke="#E04B35" stroke-width="2.5" stroke-linecap="round">

        <path d="M 50 40 L 40 30" stroke-dasharray="20" stroke-dashoffset="20">

            <animate attributeName="stroke-dashoffset" values="20; 20; 20; -20; -20" keyTimes="0; 0.2; 0.4; 0.6; 1" dur="3s" repeatCount="indefinite" />

        </path>

        <path d="M 60 35 L 60 20" stroke-dasharray="20" stroke-dashoffset="20">

            <animate attributeName="stroke-dashoffset" values="20; 20; 20; -20; -20" keyTimes="0; 0.2; 0.4; 0.6; 1" dur="3s" repeatCount="indefinite" />

        </path>

        <path d="M 70 40 L 80 30" stroke-dasharray="20" stroke-dashoffset="20">

            <animate attributeName="stroke-dashoffset" values="20; 20; 20; -20; -20" keyTimes="0; 0.2; 0.4; 0.6; 1" dur="3s" repeatCount="indefinite" />

        </path>

    </g>

    <path d="M 16 35 L 60 102 L 104 35" fill="none" stroke="#F5F5F7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" opacity="0.3">

        <animate attributeName="d" values="M 16 35 L 60 102 L 104 35; M 16 35 L 60 102 L 104 35; M 4 55 L 60 110 L 116 55; M 16 35 L 60 102 L 104 35; M 16 35 L 60 102 L 104 35" keyTimes="0; 0.2; 0.4; 0.6; 1" dur="3s" repeatCount="indefinite" calcMode="spline" keySplines="0.5 0 0.5 1; 0.42 0 1 1; 0 0 0.58 1; 1 0 1 1"/>

    </path>

    <path d="M 24 35 L 60 92 L 96 35" fill="none" stroke="#F5F5F7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" opacity="0.6">

        <animate attributeName="d" values="M 24 35 L 60 92 L 96 35; M 24 35 L 60 92 L 96 35; M 10 50 L 60 100 L 110 50; M 24 35 L 60 92 L 96 35; M 24 35 L 60 92 L 96 35" keyTimes="0; 0.2; 0.4; 0.6; 1" dur="3s" repeatCount="indefinite" calcMode="spline" keySplines="0.5 0 0.5 1; 0.42 0 1 1; 0 0 0.58 1; 1 0 1 1"/>

    </path>

    <path d="M 34 35 L 60 80 L 86 35" fill="none" stroke="#F5F5F7" stroke-width="6" stroke-linecap="round" stroke-linejoin="round">

        <animate attributeName="d" values="M 34 35 L 60 80 L 86 35; M 34 35 L 60 80 L 86 35; M 16 45 L 60 90 L 104 45; M 34 35 L 60 80 L 86 35; M 34 35 L 60 80 L 86 35" keyTimes="0; 0.2; 0.4; 0.6; 1" dur="3s" repeatCount="indefinite" calcMode="spline" keySplines="0.5 0 0.5 1; 0.42 0 1 1; 0 0 0.58 1; 1 0 1 1"/>

    </path>

    <circle cx="60" cy="48" r="10" fill="#E04B35">

        <animate attributeName="cy" values="48; 20; 65; 48; 48" keyTimes="0; 0.2; 0.4; 0.6; 1" dur="3s" repeatCount="indefinite" calcMode="spline" keySplines="0 0 0.58 1; 0.42 0 1 1; 0 0 0.58 1; 1 0 1 1"/>

    </circle>

    <text x="125" y="74" fill="#F5F5F7" font-family="Inter, sans-serif" font-weight="700" font-size="36" letter-spacing="-1">VocabPod</text>

</svg></textarea>

        </div>

    </div>

  

</body>

</html>