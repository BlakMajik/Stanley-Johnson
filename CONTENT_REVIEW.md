# Stanley Johnson: Pre-Launch Content Review & Fact Verification

*Document Version: 1.0 (September 15, 2026)*  
*Purpose: Internal checklist of facts, missing assets, credentials, and integration requirements to confirm with Stanley Johnson prior to public launch.*

---

## 1. Factual Verification & Biography Boundaries

| Item | Current Presentation Status | Action Required with Stanley / Team |
|---|---|---|
| **Full Name Styling** | Uses "Stanley Johnson" for general branding, "Stanley E. Johnson, Jr." for formal biography & Schema metadata. | Confirm preferred public naming hierarchy and copyright attribution. |
| **Education & Degrees** | The 2021 Brotha Magazine feature stated he held a BA (Winston-Salem State) and MDiv (Wake Forest), and was *pursuing* an EdD. | **DO NOT** use the title "Dr." or claim a completed doctorate without formal verification of completion date. Currently excluded from public pages. |
| **Past Awards & Badges** | Historical secondary sources mention Gospel Blue MIC awards (2012, 2016). | Left off the site to maintain high factual integrity until verified certificates/years are provided. |
| **Historical Appointments** | Worship education, adjunct teaching, and church consultation are presented strictly as *background experience*. | Confirm which active consulting services or institutional roles Stanley currently offers. |
| **Social Follower Numbers** | Older deck listed 6,880 gross follower count across platforms. | **Omitted completely** from public pages as instructed. Baselines will be established with live analytics post-launch. |

---

## 2. Asset Checklist & Replacements

- [x] **Portrait Photography**: High-resolution authentic studio and outdoor portraits extracted directly from presentation deck (`stanley_hero_portrait.jpg`, `stanley_about_portrait.png`, `stanley_casual_portrait.jpg`).
- [x] **Single Artwork**: Verified *Trading Chains* single cover (`trading_chains_cover.jpg`).
- [ ] **Dadfirmations Cover Graphic**: The presentation deck lacked a dedicated standalone high-resolution book cover file. An intentional, premium editorial hardcover composition has been designed for the site.
  - *Action*: When high-resolution front/back cover art (.png/.jpg) or 3D render is provided, place in `public/images/dadfirmations_cover.jpg` and update `src/data/content.ts`.
- [ ] **Print Edition ISBN & Fulfillment**: Currently, only the verified Kindle Edition on Amazon is linked (`B08VSB2H9S`).
  - *Action*: Confirm if paperback/hardcover editions are available for direct purchase or fulfillment.

---

## 3. Domain & Integration Checklist

1. **`dadfirmations.com` Domain Status**:
   - HTTP/HTTPS checks during research were inconclusive.
   - *Action*: Confirm ownership, hosting status, and DNS records. If deprecating or consolidating, set up a 301 redirect from `dadfirmations.com` to `stanleyjohnsonmusic.com/dadfirmations`.
2. **Contact & Inquiry Dispatch**:
   - The site currently features a fully functional client-side inquiry experience that formats structured drafts for email clients and connects to the verified Facebook page (`facebook.com/StanleyJWorship`).
   - *Action*: Configure an active transactional email provider (e.g., Resend, Formspree, or SendGrid) to route form submissions directly to Stanley's preferred private inbox.
3. **Analytics & Privacy Disclosures**:
   - The site is currently set to `noindex, nofollow` in `index.html` and `vercel.json` for review safety.
   - *Action*: When ready for public launch, update `<meta name="robots" content="index, follow">` and configure privacy-compliant event tracking (GA4 / Plausible) for `music_stream_click`, `book_amazon_click`, and `inquiry_submit`.
