# ToolsWiz
A responsive web tool directory, ready for GitHub Pages. No install, npm command, build step, or backend required.

## Files
- `index.html` — page content, all eight tool links, SEO and sharing metadata.
- `css/styles.css` — responsive layout, dark panels, dot background and orange accents.
- `js/sounds.js` — local synthesized sounds, enabled by default.
- `js/app.js` — card interactions.
- `assets/logo.svg` and `assets/favicon.svg` — supplied SVG artwork, preserved exactly.
- `assets/favicon.png` and `assets/apple-touch-icon.png` — PNG icons rendered from the supplied SVG.
- `assets/og-image.png` — 1200 × 630 social sharing image using the supplied logo.
- `assets/dots.svg` — background pattern.

## Update your existing repository in VS Code
1. Extract this ZIP.
2. Copy the contents of the extracted ToolsWiz folder into your existing ToolsWiz repository folder. Replace the matching files. Keep your repository's `.git` folder.
3. The old root-level `styles.css` and `script.js` are no longer used. You can delete those two old files; the new versions are in `css/` and `js/`.
4. Open your repository folder in VS Code. Confirm `index.html` is directly at its root, with `css/`, `js/`, and `assets/` beside it.
5. Preview by opening index.html, or using Live Server.
6. In the VS Code terminal, run:

```sh
git status
git add .
git commit -m "Update ToolsWiz layout, tool links, branding and metadata"
git push origin main
```

If Git says the remote has newer commits, run `git pull --rebase origin main` and resolve any reported conflicts before pushing again. Never force push just to bypass that error.

## GitHub Pages
If already enabled, pushing to the published branch triggers an update automatically. Otherwise, in GitHub go to Settings → Pages → Deploy from a branch → main → / (root) → Save.

Metadata assumes this exact public URL:
https://ex0skeleton.github.io/ToolsWiz/

If your repository has a different name or capitalization, update the absolute URLs in index.html (canonical, og:url, og:image, og:image:secure_url, twitter:image). Keep local CSS, JS and asset paths relative.

## Editing tools
Each tool is a normal HTML link inside `.tools-grid` in index.html. Change or copy a card there; no JavaScript data array needs updating. Existing PDFMerger and ScaleWiz links are included once each. Image Wiz and Audio Wiz have been added.

## Behavior and design
- Cards open their tools in new tabs; every link also works without JavaScript.
- Sound is enabled by default, with no toggle. Browsers require the first click/tap/key interaction before audio can start. Silent pointer movement before that interaction is expected.
- No circular glow, gradients, blobs, hero slogan, card numbers or header navigation buttons.
- The lower personal introduction and work-in-progress note remain.
- The uploaded reference HTML points to external CSS/font files not included with it. This version follows its compact dark panel layout and orange accents; exact original fonts and CSS could not be copied.
- Uses system fonts, local SVG assets and no external JavaScript dependencies or tracking.
