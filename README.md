# IronTrack landing page

The marketing site for [IronTrack](https://track-sr-8532.vercel.app/), the offline-first workout tracker
and nutrition planner. The app itself lives in [SKR18156592/IronTrack](https://github.com/SKR18156592/IronTrack).

A single static page: plain HTML, Tailwind CSS compiled at build time, and a little inline JavaScript for
the demos (the offline toggle, the double-progression calculator and the install-guide platform highlight).

## Structure

```text
irontrack-landing/
├── public/
│   ├── index.html          # The page: markup, copy and the demo scripts
│   ├── logo.svg            # Favicon (same as the app's)
│   └── apple-touch-icon.png
├── src/
│   └── input.css           # Tailwind entry, colour tokens and the custom styles
├── tailwind.config.js      # Maps the colour tokens and fonts to Tailwind names
└── vercel.json             # Build command and output directory for Vercel
```

`npm run build` writes `public/styles.css` (not committed).

## Run it

```bash
npm install
npm run dev       # rebuilds styles.css on every change; open public/index.html, or run `npm run preview` alongside
npm run build     # minified styles.css for production
npm run preview   # serves public/ at http://localhost:3000
```

## Deploy

**Vercel:** import this repo. `vercel.json` sets the build command (`npm run build`) and the output
directory (`public`), so there's nothing to configure.

**Netlify or Cloudflare Pages:** build command `npm run build`, publish directory `public`.

## Editing

- Colours: the variables at the top of `src/input.css`. Tailwind classes such as `bg-surface` and
  `text-accent` read from them.
- The double-progression demo mirrors `suggestNext()` in the app's `src/performance.js`. If that rule
  changes, update the script at the bottom of `public/index.html` to match.
- Keep the copy accurate to what the app does; the FAQ and feature lists describe real behaviour.

## License

MIT, see [LICENSE](LICENSE).
