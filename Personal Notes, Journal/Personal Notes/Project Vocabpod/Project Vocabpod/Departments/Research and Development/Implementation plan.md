# VocabPod: A-to-Z Implementation Plan

Provide a brief description of the problem, any background context, and what the change accomplishes. Our goal is to build **VocabPod**, a premium, subscription-based micro-learning platform for vocabulary. The application will serve vocabulary lessons—each containing an audio podcast, accompanying text, dynamic line-art illustrations, and an interactive quiz. It will track user progress via a Spaced-Repetition System (SRS) and restrict access using a subscription paywall.

We will build this using the **Vertical Slices** methodology: prioritizing a fully functional core experience first, and layering on complex systems (Auth, Payments) later.

## User Review Required

IMPORTANT

Please review this updated roadmap carefully. Once you approve, I will immediately begin executing **Phase 1** (Setting up the Next.js project and building the first Vertical Slice).

## Tech Stack Overview

- **Frontend & Backend:** Next.js (React framework)
- **Styling & UI:** Tailwind CSS (targeting specific brand colors like Terracotta Vermilion)
- **Database & Auth:** Supabase (PostgreSQL relational database + Authentication)
- **Audio Hosting:** Cloudflare R2 (10GB Free Storage, Unlimited Free Egress Bandwidth)
- **Payments:** Razorpay
- **Deployment:** Vercel

---

## A to Z Execution Roadmap

### Phase 1: Project Setup & Core Vertical Slice (The Core Loop)

_We start by proving the core experience works before adding any users or payments._

1. **Initialize Project:** Run `npx create-next-app` to set up the local Next.js environment.
2. **Design System:** Configure Tailwind CSS and set up our global color palette (dark mode, premium aesthetic, Terracotta Vermilion spot color).
3. **UI Construction (The Word Page):** Build the main learning interface.
    - A sleek Audio Player component.
    - Dynamic SVG Line-Art rendering component.
    - A text/definition display area.
    - An interactive quiz component.
4. **Database Connection (Supabase):**
    - Create a `words` table.
    - **SVG Strategy:** Store the raw inner path elements of line-art SVGs directly in a `text` or `jsonb` column. This allows Next.js to render them inline natively, enabling crisp resizing on mobile and CSS animations of the "spot color".
    - **Quiz Strategy:** Store `quiz_questions` as a `JSONB` array in PostgreSQL to allow flexible, varied quiz formats (multiple choice, sentence completion) without a massive relational schema.

### Phase 2: Feed & Local Progress Tracking

_Next, we build the navigation and prove the progress logic works._

1. **Dashboard UI:** Build a feed/list view showing all available vocabulary words.
2. **State Architecture:** Wrap our local storage tracking logic in a custom hook (e.g., `useVocabProgress`) or React Context. This abstraction ensures that when we migrate to the cloud in Phase 3, we only modify this single hook's internal code instead of rewriting individual dashboard cards and buttons.
3. **Local State Testing:** Temporarily save progress in the browser's local storage to test the UI flow quickly.

### Phase 3: Authentication & Cloud Progress

_Now that the app feels great, we lock it to individual users and prepare for smart learning._

1. **Auth Integration:** Integrate Supabase Auth (Email/Password login, and optionally Google Sign-in).
2. **Spaced-Repetition System (SRS) Schema:**
    - Create a `user_progress` table (`user_id`, `word_id`, `completed_at`, `quiz_score`).
    - **Future-Proofing:** Add SRS columns right from the beginning: `ease_factor`, `interval_days`, and `next_review_due`. Even if we only use binary (Completed/Uncompleted) logic initially, this prevents complex, breaking migrations on live user profiles later.
3. **Migration:** Update our `useVocabProgress` hook to fetch and save progress directly to the Supabase Postgres database for authenticated users.

### Phase 4: Razorpay & Monetization

_Finally, we add the secure paywall to turn it into a SaaS business._

1. **Pricing Page:** Build a beautiful pricing UI explaining the subscription benefits.
2. **Razorpay Integration (Frontend):** Add the Razorpay checkout script.
3. **Webhook Setup & Security (Backend):**
    - Create a secure Next.js API route to receive Razorpay events.
    - **Validation:** Cryptographically verify the webhook signature using the Razorpay SDK and our secret webhook salt. Never trust raw network requests claiming a user paid.
4. **Database Expansion (Grace Periods):**
    - Create a `subscriptions` table.
    - **Grace Periods:** When calculating the `expires_at` timestamp upon a successful payment, add a 24-to-48-hour grace period beyond the standard billing cycle. This prevents active subscribers from getting temporarily locked out due to banking network processing delays.
5. **Route Protection:** Check the user's subscription status. If inactive, redirect from premium learning pages to the pricing page.

### Phase 5: Polish & Deployment

1. **Micro-animations:** Add subtle hover effects, page transitions, and "success confetti" using Framer Motion to make it feel premium.
2. **SEO & Metadata:** Add proper tags so the site ranks well on Google.
3. **Launch:** Deploy the codebase to Vercel.