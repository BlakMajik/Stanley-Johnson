# Stanley Johnson &mdash; Official Brand Website

A responsive professional brand website for **Stanley Johnson**, gospel recording artist and author of *Dadfirmations: Affirmations From a Father to a Son*.

---

## 🌟 Brand & Architectural Overview

The website establishes **Stanley Johnson** as the primary brand, connecting four core pillars:
1. **Music & Worship**: Gospel artistry, official single releases (*Trading Chains*), and worship anthems (*Hiding Place*, *Beyond Me*).
2. **Fatherhood & Authorship**: Dedicated showcase for *Dadfirmations* (published by The AJS Group LLC).
3. **Faith & Encouragement**: Grounded spiritual reflections and inspiration.
4. **Ministry & Education**: Worship clinics, church consultation, and leadership workshops.

---

## 🛠️ Technology Stack

- **Framework**: React 18 + Vite (TypeScript)
- **Styling**: Vanilla CSS custom properties with an editorial palette:
  - Deep Ink / Navy: `#0B191E`
  - Near-Black: `#071116`
  - Warm Gold: `#E3B774`
  - Soft White: `#F5F6F3`
  - Slate Blue / Muted Text: `#8E9DA6`
- **Typography**: *Playfair Display* (Editorial Serif Headlines) + *Plus Jakarta Sans* (Modern Clean Body)
- **Icons**: Lucide React
- **Deployment Target**: Vercel (includes `vercel.json` for SPA rewrites and header control)

---

## 🚀 Getting Started Locally

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
```

### 4. Preview Production Build Locally
```bash
npm run preview
```

---

## 📝 How to Edit Content

All visitor-facing copy, catalog items, links, and biography text are separated into a single configuration file:
👉 **[`src/data/content.ts`](file:///C:/Users/Maspi/.gemini/antigravity-ide/scratch/stanley-johnson/src/data/content.ts)**

- **Music Catalog**: Add or edit tracks in `siteContent.musicCatalog` (cover image, title, DistroKid HyperFollow URL, YouTube ID).
- **Dadfirmations Book Details**: Update Amazon retailer links, synopsis, or audience pillars in `siteContent.book`.
- **Biography**: Update paragraphs or credentials in `siteContent.biography`.
- **Inquiry Categories**: Modify event or consultation types in `siteContent.inquiryCategories`.

---

## 🚢 Deploying to Vercel

1. Push this repository to GitHub.
2. Log into [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import the repository.
4. Framework Preset will automatically detect **Vite**.
5. Build Command: `npm run build` | Output Directory: `dist`.
6. Click **Deploy**.

---

## 📋 Pre-Launch Fact Verification

See [`CONTENT_REVIEW.md`](file:///C:/Users/Maspi/.gemini/antigravity-ide/scratch/stanley-johnson/CONTENT_REVIEW.md) for the internal checklist of items to verify with Stanley Johnson prior to public launch.
