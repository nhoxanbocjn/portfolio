# Personal Portfolio — React

Live at **[nhoxanboc.work](https://nhoxanboc.work)**

A personal portfolio site with dark/light theme, EN/VI language toggle, project showcase, PDF resume viewer, and an interactive blog knowledge graph.

> Inspired by and built upon [soumyajit4419/Portfolio](https://github.com/soumyajit4419/Portfolio). Thanks for the great foundation!

---

## Stack

- React 17 + React Router v6
- React-Bootstrap + plain CSS
- Deployed on Vercel (auto-deploy on push to `main`)

---

## Fork & make it yours

### 1. Clone and install

```bash
git clone https://github.com/nhoxanbocjn/portfolio.git
cd portfolio
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000).

### 2. Update your personal info

| What | File |
|---|---|
| All page text (bio, headings, etc.) | `src/translations/index.js` |
| Job title typewriter strings | `src/components/Home/Type.js` |
| Skill icons | `src/components/About/Techstack.js` |
| Tool icons | `src/components/About/Toolstack.js` |
| Project cards | `src/components/Projects/Projects.js` |
| Resume PDF | Replace `src/Assets/CV.PDF` |
| Blog posts & knowledge graph | `src/components/Blog/Blog.js` |
| Avatar image | Replace `src/Assets/home_main_img.png` |

### 3. Theming

Dark mode is the default. All light-mode overrides are `[data-theme="light"]` blocks at the bottom of `src/style.css`. The accent colour is controlled by `--imp-text-color` — change it in the `:root` block and the light-mode override to restyle the whole site.

### 4. Deploy

Push to GitHub and connect the repo to [Vercel](https://vercel.com). Every push to `main` auto-deploys.

> **Note:** Vercel runs with `CI=true`, which treats ESLint warnings as errors. Make sure there are no unused imports before pushing.

---

## Project structure

```
src/
├── components/
│   ├── Home/       # Hero section + intro
│   ├── About/      # Bio card, skill icons, tool icons
│   ├── Projects/   # Project cards
│   ├── Resume/     # PDF viewer
│   └── Blog/       # Knowledge graph + markdown reader
├── context/        # ThemeContext, LangContext
├── translations/   # EN / VI string maps (index.js)
├── Assets/         # Images and CV.PDF
└── style.css       # All styles
```

---

## Credits

Original template by [Soumyajit Behera](https://github.com/soumyajit4419/Portfolio).  
Customised and extended by [nhoxanbocjn](https://github.com/nhoxanbocjn).
