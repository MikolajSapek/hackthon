<p align="center">
  <img src="docs/banner.png" alt="KL4AD1U5H — project banner" width="720" />
</p>

# KL4AD1U5H

Interactive **3D map** of Copenhagen for exploring **civic participation** scenarios: participatory budgets, hearings, and demo projects on the map. Built as a lightweight single-page app (no bundler) with MapLibre GL, Three.js, and static GeoJSON data.

> **Disclaimer:** Demo projects, costs, and vote figures in the app are **illustrative** for prototyping and hackathons. They are **not** official City of Copenhagen records.

## Features

- **3D buildings** and pastel styling on vector tiles (OpenFreeMap Positron style).
- **District boundaries** (GeoJSON) with highlight and labels.
- **Project markers** with filters (category, budget, status, district, sorting).
- **Voting UI** with local-only persistence (`localStorage`).
- **3D models** on the map (GLB/GLTF/STL; IFC upload when proposing as architect).
- **Outdoor facilities** layer and map controls (pitch, bearing, opacity, building scale).

## Requirements

- [Node.js](https://nodejs.org/) 16 or newer

## Quick start

```bash
npm install
npm start
```

Open [http://localhost:3001](http://localhost:3001). The server exposes a static `public/` folder and a small `/health` JSON endpoint.

### Optional: screenshots (Playwright)

With the server running:

```bash
node screenshot.js
```

Headed mode and GPU flags may be required on macOS (see project notes in `screenshot.js`).

## Project layout

| Path | Purpose |
|------|---------|
| `public/index.html` | Full SPA: HTML, CSS, and JavaScript |
| `public/data/` | District and municipality GeoJSON |
| `public/models/` | Bundled 3D assets (e.g. local Duck sample) |
| `server.js` | Express static file server |
| `docs/banner.png` | Repository banner image |

## Tech stack

- **MapLibre GL JS** — map and layers  
- **Three.js** — GLTF/STL/IFC-style loading for custom layers  
- **Express** — static hosting  
- **Tiles** — [OpenFreeMap](https://openfreemap.org/) (Positron style)

## Data & third-party assets

- **Map tiles / cartography:** Served via OpenFreeMap; underlying data typically includes **OpenStreetMap** contributors ([ODbL](https://www.openstreetmap.org/copyright)).
- **GeoJSON** in `public/data/`: verify the file headers or source documentation for each dataset’s license.
- **3D models** loaded from CDNs include CC0 samples (e.g. Khronos glTF sample models, Polygonal Mind CC0 packs). URLs are listed in `public/index.html` (`MODEL_URLS`).

## License

MIT — see [LICENSE](LICENSE).
