# MegiProperty — Deployment Guide

A **zero-build, zero-dependency** static design preview. No bundler, no package manager, no install step.

## One thing to know first

The artboards pull `Site Header.dc.html` and `Site Footer.dc.html` in at runtime over `fetch`, so they must be **served over HTTP**. Double-clicking an `.html` file renders the page with an empty header and footer — that is a `file://` restriction, not a broken build.

## Vercel (recommended)

```bash
npx vercel --prod
```

`vercel.json` handles the routing:

| Path | Serves |
|---|---|
| `/` | `Home.dc.html` |
| `/pocetna`, `/projekti`, `/vile-senicani`, `/vile-senicani-2`, `/duplex-1`, `/lokacija`, `/novosti`, `/novost`, `/o-nama`, `/kontakt`, `/500` | the matching artboard |
| anything else | `404.dc.html`, with a real 404 status |

The `.dc.html` filenames also resolve directly (`/Kontakt.dc.html`), which is how the in-page navigation links between artboards. The clean URLs are aliases on top of that.

Clean URLs are deliberately **single-segment**. A nested path like `/novosti/objava` would break the relative `./support.js` and `./Site Header.dc.html` lookups, since the runtime resolves components against the current directory.

### Deployment privacy

`.vercelignore` excludes `ponuda.pdf` and `ponuda.md` from the upload. Vercel deployment URLs are publicly reachable by default, and those two files carry pricing, payment terms and team names. If you want the whole preview private, enable **Deployment Protection** in the Vercel project settings (Settings → Deployment Protection → Vercel Authentication) — then only logged-in team members can open the URL.

## Netlify

Drag the folder onto https://app.netlify.com/drop.

Netlify does not read `vercel.json`. Either open `/Home.dc.html` directly, or add a `_redirects` file:

```
/    /Home.dc.html   200
/*   /404.dc.html    404
```

## GitHub Pages / Cloudflare Pages / any static host

Upload the folder contents. Everything works as long as the host serves the files over HTTP and preserves the spaces in filenames like `Vile Senicani.dc.html`.

## Local Preview

```bash
npx serve .
# or
python3 -m http.server 8000
```

Open http://localhost:3000/Home.dc.html.

## Making the Forms Live

There are four forms — the unit enquiry (`Duplex 1`), the contact form (`Kontakt`), the reservation form (`Vile Senicani 2`) and the newsletter signup (`Novosti`). All four are presentational: the submit buttons are `<a href="#">`, and nothing is posted anywhere.

For a quick live demo before the Umbraco build, point them at Formspree:

1. Create a form at https://formspree.io and copy the endpoint.
2. Wrap the fields in a real `<form action="https://formspree.io/f/your-form-id" method="POST">`.
3. Swap each `<a>` submit for `<button type="submit">`.
4. Add `name` attributes to every input — none of them have one yet.

In the production build these become Umbraco form surface controllers instead.

## Editing

- Colours, type and spacing are inline styles on each artboard, with a shared `<style>` block in each file's `<helmet>`.
- Shared header and footer live in `Site Header.dc.html` and `Site Footer.dc.html` — edit once, and all pages that import them follow. **Except `Home.dc.html`**, which carries its own inlined copies; change it in both places.
- Scroll and count-up animations: `anim.js`.
- `support.js` is the canvas runtime. Do not edit it.

---

Built for MegiProperty. Ready to hand to the Umbraco build.
