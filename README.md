# Dropwise — Landing Page

Smart garden watering web app landing page, hosted on GitHub Pages at **bqckfi1sh.github.io/dropwise**.

---

## Replacing Placeholder Graphics

Every image slot on the page currently shows a dashed-border placeholder with a label telling you what to put there. Here's how to replace them:

### Step 1 — Create an `assets/` folder

```
assets/
  hero-illustration.png     # Hero section main graphic
  feature-save-water.png    # Save Water feature
  feature-save-money.png    # Save Money feature
  feature-save-environment.png  # Save Environment feature
  feature-save-climate.png  # Save Climate feature
  step-1-enter.png          # Step 1 screenshot
  step-2-schedule.png       # Step 2 screenshot
  step-3-track.png          # Step 3 screenshot
  app-dashboard.png         # Main app screenshot
```

### Step 2 — Find and replace in `index.html`

| Placeholder Label | Replace With |
|---|---|
| `Hero Illustration — 800×480px` | Your hero image (plant + water + device) |
| `Feature Graphic — 400×300px` (×4) | Icons or small illustrations per feature |
| `Step 1/2/3 Screenshot — 500×350px` (×3) | Screenshots of each app step |
| `App Screenshot — 1000×600px` | Full dashboard screenshot of the app |

### Step 3 — Remove the placeholder `<div>`

Replace each placeholder block:

```html
<!-- BEFORE (placeholder) -->
<div class="placeholder hero-placeholder" data-label="Hero Illustration — 800×480px" data-size="800×480" data-format="PNG or SVG">
  <svg>...</svg>
</div>

<!-- AFTER (real image) -->
<img src="assets/hero-illustration.png" alt="Dropwise dashboard showing watering schedule" class="hero-placeholder">
```

### Recommended Image Specs

| Graphic | Dimensions | Format |
|---|---|---|
| Hero illustration | 800×480px | PNG or SVG |
| Feature graphics | 400×300px | SVG (icons preferred) |
| Step screenshots | 500×350px | PNG |
| App screenshot | 1000×600px | PNG |

---

## Deploying

```bash
git add -A
git commit -m "Initial landing page"
git push -u origin main
```

Then go to **GitHub repo → Settings → Pages → Source: main branch, / (root)** → Save.

Site goes live at: **https://bqckfi1sh.github.io/dropwise**
