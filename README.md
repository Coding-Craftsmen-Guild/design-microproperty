# MegiProperty — Design Preview

**Static design preview for the MegiProperty microsite rebuild** — Megiproperty DOO, investitor i graditelj stambenih naselja, Beograd.

Twelve page designs plus two shared components, covering the live project *Vile Seničani* (24 duplex homes in Aranđelovac) and the next phase *Vile Seničani 2*.

## What's Included

| Artboard | Page |
|---|---|
| `Home.dc.html` | Početna |
| `O Nama.dc.html` | O nama |
| `Projekti.dc.html` | Projekti (lista) |
| `Vile Senicani.dc.html` | Projekat detalji |
| `Vile Senicani 2.dc.html` | Projekat detalji — druga faza |
| `Duplex 1.dc.html` | Stambena jedinica |
| `Lokacija.dc.html` | Lokacija |
| `Novosti.dc.html` | Novosti (lista) |
| `Novost.dc.html` | Novost detalji |
| `Kontakt.dc.html` | Kontakt |
| `404.dc.html` / `500.dc.html` | Sistemske stranice |
| `Site Header.dc.html` / `Site Footer.dc.html` | Deljene komponente |

`ponuda.md` holds the offer spec — brand palette, typography scale, sitemap and per-page section tables — mapped to what these artboards actually contain.

## Brand

| Token | Hex | Role |
|---|---|---|
| Midnight Navy | `#1B252F` | Primary dark surface and headings |
| Champagne Gold | `#D3B574` | Accent — logo, CTAs, active nav, badges |
| White | `#FFFFFF` | Primary light surface |
| Deep Gold | `#8B6F46` | The AA-safe gold for text on white |
| Sand | `#F4F1EA` | Warm secondary surface |

**Gold is a dark-background colour.** `#D3B574` on white is 1.98:1 and fails AA — use `#8B6F46` when gold text is needed on a light surface.

Type: **Lora** (500/600) for headings, **Montserrat** (400/500/600/700) for UI and body, both from Google Fonts with `display=swap`. Both cover the full Serbian Latin set.

## Quick Start

These artboards import shared components over `fetch`, so they need to be **served over HTTP** — opening them straight off the filesystem renders the header and footer as empty placeholders.

```bash
npx serve .
# or
python3 -m http.server 8000
```

Then open http://localhost:3000/Home.dc.html (or `:8000`).

## Deployment

Zero build step. See [DEPLOY.md](DEPLOY.md).

`vercel.json` maps `/` to the homepage, adds single-segment clean URLs (`/kontakt`, `/lokacija`, `/vile-senicani`, …) and serves `404.dc.html` for anything unmatched.

`.vercelignore` keeps `ponuda.pdf` and `ponuda.md` out of the deployment — Vercel deployment URLs are public, and those documents carry pricing and payment terms.

## Notes for Implementation

- **Home inlines its own header and footer** instead of importing the shared partials the other 11 pages use. Its unit cards and Instagram tiles are hardcoded rather than looped — the `units` / `igTiles` arrays in its script block are dead code.
- **The language switcher is presentational.** Four hardcoded `SR / RU` span triples, no `lang=` attribute anywhere. The offer commits to SR / EN / RU, so English and real switching both still need building.
- **Ten dead `href="#"` links** — Facebook and TikTok in the footer, the PDF spec download on the unit page, form submit buttons.
- Single breakpoint at `max-width: 900px`.
- Scroll animations are driven by `anim.js` (180 ms scan, 95% viewport threshold, 4 s failsafe, 1.2 s cubic count-up).

---

Target stack for the build: ASP .NET · Umbraco CMS · HTML/CSS/JS.
