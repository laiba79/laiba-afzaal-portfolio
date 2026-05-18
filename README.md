# Laiba Afzaal — Portfolio

Personal developer portfolio built with pure HTML, CSS & JavaScript. Dark glassmorphism aesthetic with smooth animations.

## 🚀 Deploy to Netlify (3 steps)

### Option A — Drag & Drop (fastest)
1. Go to [netlify.com](https://netlify.com) → Log in
2. Drag this entire folder onto the Netlify dashboard
3. Done! Your site is live in 30 seconds ✅

### Option B — GitHub (recommended for updates)
1. Push this folder to a new GitHub repo:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git push -u origin main
   ```
2. Go to [netlify.com](https://netlify.com) → "Add new site" → "Import from Git"
3. Connect GitHub → Select your repo → Deploy
4. Every `git push` auto-deploys updates ✅

## 📝 Customization

### Update your GitHub & LinkedIn links
In `index.html`, search for `href="https://github.com"` and `href="https://www.linkedin.com"` and replace with your actual profile URLs.

### Add your GitHub project links
Each project card has `href="#"` — replace with your actual repo links.

### Add a profile picture
Replace the SVG avatar in the hero section with:
```html
<img src="assets/photo.jpg" alt="Laiba Afzaal" style="width:100%;height:100%;object-fit:cover;border-radius:50%;" />
```
Then drop your photo as `assets/photo.jpg`.

### Add resume PDF
Drop your `Laiba_Afzaal_Resume.pdf` into this folder — the "Download CV" button will work automatically.

## 🗂️ Structure
```
portfolio/
├── index.html          # Main page
├── css/
│   └── style.css       # All styles
├── js/
│   └── main.js         # Animations & interactions
├── assets/             # Images, resume PDF
├── netlify.toml        # Netlify config
└── README.md
```

## ✨ Features
- Custom animated cursor
- Typewriter hero effect
- Scroll-triggered reveal animations
- Glassmorphism cards with tilt effect
- Animated counter stats
- Fully responsive (mobile-first)
- ATS-friendly project descriptions
- Contact form with mailto fallback
