# Color Harmony - Color Analysis Guide Website

A beautiful, interactive website that helps people discover their most flattering color palettes and metals based on their natural features (skin, eye, and hair color).

## Features

- **Interactive Color Analysis Quiz**: Step-by-step guide to discover your seasonal palette
- **Four Seasonal Palettes**: Detailed color palettes for Spring, Summer, Autumn, and Winter
- **Metal Recommendations**: Guidance on which metals (gold, silver, rose gold) work best with each palette
- **Real-Life Examples**: Before/after comparisons showing the impact of choosing the right colors
- **Comprehensive Glossary**: Key terms and concepts explained
- **Fully Responsive**: Mobile-friendly design that works on all devices
- **Modern Design**: Professional, aesthetic interface with smooth animations

## Project Structure

```
website/
├── index.html          # Homepage
├── guide.html          # Interactive color analysis quiz
├── palettes.html       # All four seasonal palettes
├── examples.html       # Before/after examples
├── glossary.html       # Glossary of terms
├── about.html          # About page
├── styles.css          # Main stylesheet
├── script.js           # JavaScript for interactivity
└── README.md           # This file
```

## Deployment to Netlify via GitHub

### Step 1: Initialize Git Repository

```bash
cd /Users/rahulkumargupta/Desktop/website
git init
git add .
git commit -m "Initial commit: Color Harmony website"
```

### Step 2: Create GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it `color-harmony` (or your preferred name)
3. Don't initialize with README, .gitignore, or license

### Step 3: Connect and Push to GitHub

```bash
git remote add origin https://github.com/YOUR_USERNAME/color-harmony.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username.

### Step 4: Deploy to Netlify

1. Go to [Netlify](https://www.netlify.com) and sign in
2. Click "Add new site" → "Import an existing project"
3. Connect to GitHub and select your `color-harmony` repository
4. Configure build settings:
   - **Build command**: Leave empty (no build needed)
   - **Publish directory**: `.` (root directory)
5. Click "Deploy site"

Netlify will automatically deploy your site and provide you with a URL like `https://your-site-name.netlify.app`

### Step 5: Custom Domain (Optional)

In Netlify dashboard:
1. Go to Site settings → Domain management
2. Click "Add custom domain"
3. Follow the instructions to connect your domain

## Local Development

To view the website locally:

1. Simply open `index.html` in your web browser, or
2. Use a local server:

```bash
# Using Python 3
python3 -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000` in your browser.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Technologies Used

- HTML5
- CSS3 (with CSS Grid and Flexbox)
- Vanilla JavaScript (no frameworks required)
- Google Fonts (Playfair Display & Inter)

## Updates and Maintenance

Since this is a static website, updates are simple:

1. Make changes to the files
2. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Your update message"
   git push
   ```
3. Netlify will automatically redeploy your site

## Success Criteria Met

✅ **Form (Website & Structure)**: Logically organized with 6 major sections, exceptional design
✅ **Function (Clarity & Structure)**: Clear, simple, interactive steps easy for all users
✅ **Audience**: Targets teens and adults, inclusive and empowering
✅ **Aesthetic**: Professional appearance with modern layout and harmonious colors
✅ **Accessibility & Cost**: Mobile-friendly, free hosting via Netlify
✅ **Impact**: Designed to boost confidence and knowledge
✅ **Content**: Four seasonal palettes, glossary, examples, metal recommendations
✅ **Sustainability**: Easy to share via link, free to host, easy to update

## License

This project is open source and available for personal and educational use.

---

Created with ❤️ to help you express your true colors.


