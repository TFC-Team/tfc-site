# Task Force Canada (TFC) Website (Docusaurus)

Starter structure for an ACE-style community website:
- **Docs/Wiki** (install, how-to, features)
- **News** (blog for announcements + patch notes)
- **Showcase** (CAF assets, screenshots, pages)
- **Community** links (Discord + GitHub)

## Quick start (local)
1) Install Node.js (LTS).
2) Install dependencies:
```bash
npm install
```
3) Run dev server:
```bash
npm run start
```
Open: http://localhost:3000

## Deploy (GitHub Pages)
1) Push to GitHub (recommended repo: `TFC-Team/tfc-site`)
2) Settings → Pages → Build and deployment → **GitHub Actions**
3) Ensure `.github/workflows/deploy.yml` exists (it does in this starter)
4) (Optional) Custom domain: update `docusaurus.config.js` and GitHub Pages settings

## Content locations
- Docs: `docs/`
- Blog: `blog/`
- Pages: `src/pages/`
- Styling: `src/css/custom.css`
- Images: `static/img/`
