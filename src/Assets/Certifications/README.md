# Certifications

This folder holds the images (and optional PDF originals) for the **Certifications** section
rendered at the `/certifications` route.

## How to add a new certificate

1. **Export an image from your PDF.** The cards display an image, not the PDF directly.
   - macOS: open the PDF in Preview → `File → Export…` → Format **JPEG/PNG**.
   - Or drop the PDF here as well and link to it (see step 3) so visitors can open the full PDF.
   - Recommended: landscape, ~1000px wide, `.jpg`/`.png`/`.svg`.

2. **Drop the file(s) in this folder**, e.g.
   - `aws-cloud-practitioner.jpg` (the image shown on the card / lightbox)
   - `aws-cloud-practitioner.pdf` (optional original, opened via the "View PDF" link)

3. **Register it** in `src/components/Certifications/Certifications.js`:

   ```js
   import awsImg from "../../Assets/Certifications/aws-cloud-practitioner.jpg";
   import awsPdf from "../../Assets/Certifications/aws-cloud-practitioner.pdf"; // optional

   const CERT_META = [
     {
       img: awsImg,
       pdf: awsPdf,                 // optional — omit if you only have an image
       color: "linear-gradient(135deg, #1a0a00 0%, #3d1f00 100%)",
     },
     // ...
   ];
   ```

4. **Add the title / issuer text** (EN + VI) in `src/translations/index.js` under the
   `certifications.cards` array — one entry per card, in the same order as `CERT_META`.

That's it. Cards have a hover zoom; clicking one opens a full-screen lightbox with
zoom in / zoom out / reset controls (buttons + mouse wheel).
