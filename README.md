# GG Impianti e Costruzioni Srl — Sito Web

Portfolio/showcase site for **GG Impianti e Costruzioni Srl**, a construction and renovation company based in Genova. Built with Vue 3 + TypeScript + Vite, deployed on Firebase Hosting.

---

## Stack

- Vue 3 + TypeScript, Vite
- Vue Router, Pinia
- [itagoglow](https://www.npmjs.com/package/itagoglow) design system
- Firebase Hosting

---

## Setup

```sh
pnpm install
```

---

## Images

Source images (JPG/PNG) go in `public/img/desktop/<CATEGORY>/` and `public/img/mobile/<CATEGORY>/`.  
Categories: `BAG`, `CUC`, `ILL`, `PAV`, `RIS`, `SAL`.

**1. Convert to WebP:**
```sh
pnpm convert-images
```
This runs `scripts/convertImages.js` (converts to WebP) then `scripts/prepareImages.js` (generates `src/stores/auto-generated/db.images.ts`).

> Run this whenever images are added or changed.

---

## Development

```sh
pnpm dev
```

---

## Build & Deploy

**Preview (Firebase preview channel):**
```sh
pnpm preview
```

**Production deploy:**
```sh
pnpm release
```

Deploys to Firebase Hosting site `piax-dev`. Target can be changed in `firebase.json` and the `release` script in `package.json`.


# fix vue prop type warnings
https://github.com/orgs/vuejs/discussions/9964

# IMAGES

Images in public/img are not versioned, they need to be added before deploying