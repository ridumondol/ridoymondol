# Modern Dark & Crimson Red Developer Portfolio

A modern, high-performance personal portfolio website built with **React**, **Next.js 16** (or **Vite** compatible components), and **Tailwind CSS**. Designed with a bold, dark aesthetic (`#0B0B0F`), subtle dark-red radial glow, and crimson red (`#E11D2E`) primary accents.

---

## 🌟 Key Features & Design Highlights

- **Bold Dark Theme**: Deep near-black background (`#0B0B0F`), dark charcoal cards (`#18181B`), and sharp crimson red accents (`#E11D2E`).
- **Typography**: Google Fonts **Outfit** for heavy geometric headings and **Inter** for clean body readability.
- **Glassmorphism Navbar**: Sticky header with backdrop-blur, active section tracker, mobile slide-in menu, and red pill "Download CV" button.
- **Hero Section**: 
  - Prominent 8xl bold name heading
  - Animated role typing effect
  - Arched photo frame with dark-red glow
  - 2 floating glassmorphism stat cards (`10+ Projects Done`, `2+ Years Experience`)
  - Primary red pill "Get in Touch" & secondary red outline pill "Download CV"
  - Social media row (GitHub, LinkedIn, Twitter/X, Facebook)
- **About Section ("WHO AM I?")**:
  - 2-column responsive layout
  - Workspace photo showcase with 2 stat cards (`55k Client Users`, `99+ Happy Clients`)
  - 2-column personal details list with red icons (DOB, Location, Email, Phone, Languages, Freelance status)
- **Projects Section ("MY WORK")**:
  - 3-column responsive grid with image zoom on hover
  - Tech chips, live links, and red "View Details" buttons
  - Separate dedicated case study pages for every project (`/projects/[id]`)
- **Vertical Timelines**:
  - Education and Experience with red node dots and gradient connecting lines
- **Contact Section ("Let's Work Together")**:
  - Contact cards for Email, Phone, and Location with red icons
  - Direct WhatsApp click-to-chat button (`https://wa.me/...`)
  - Contact form with dark inputs, red focus ring, and validation feedback
- **Footer**:
  - Centered brand logo with red dot, quick links, social icons, and copyright

---

## 📁 Project Structure

```text
my-app/
├── app/
│   ├── globals.css              # Dark theme, crimson red glow & animations
│   ├── layout.tsx               # Google Fonts (Outfit & Inter) + SEO Metadata
│   ├── page.tsx                 # Main single-page portfolio layout
│   └── projects/
│       └── [id]/
│           └── page.tsx         # Dedicated project detail & case study page
├── components/
│   ├── Navbar.tsx               # Glassmorphism sticky navbar
│   ├── Hero.tsx                 # Headline, typing animation & floating cards
│   ├── About.tsx                # 2-column story, stats & personal details
│   ├── Projects.tsx             # Responsive grid with image hover zoom
│   ├── Education.tsx            # Vertical education timeline
│   ├── Experience.tsx           # Vertical experience & freelance timeline
│   ├── Contact.tsx              # Clean form with red focus ring & WhatsApp
│   ├── Footer.tsx               # Centered footer with red top border
│   └── Icons.tsx                # GitHub, LinkedIn, Twitter/X, Facebook icons
├── data/
│   └── portfolioData.ts         # Single source of truth for all content
└── public/
    ├── images/
    │   ├── profile.jpg          # Your professional photo placeholder
    │   └── projects/            # Project mockup SVGs
    └── resume.pdf               # Downloadable resume/CV PDF
```

---

## 🚀 How to Run Locally

### 1. Prerequisites
Ensure you have **Node.js 18+** installed on your system.

### 2. Installation
Open your terminal in the project directory and install dependencies:
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🌐 How to Deploy to Vercel or Netlify

### Deploying to Vercel (Recommended)
1. Push your code to your GitHub repository:
   ```bash
   git add .
   git commit -m "Dark and crimson red portfolio redesign"
   git push origin main
   ```
2. Go to [Vercel](https://vercel.com) and log in with your GitHub account.
3. Click **"Add New"** > **"Project"** and select your repository.
4. Click **"Deploy"**. Your website will be live with an SSL certificate in less than a minute.

### Deploying to Netlify
1. Go to [Netlify](https://netlify.com) and log in with GitHub.
2. Click **"Add new site"** > **"Import an existing project"**.
3. Select your repository. Netlify will auto-detect Next.js.
4. Click **"Deploy site"**.

---

## ✏️ Checklist: What to Personalize

All your personal data is centralized in [`data/portfolioData.ts`](file:///c:/Users/Hp/OneDrive/Desktop/Protfolio/my-app/data/portfolioData.ts):

- [ ] **Photo**: Replace [`public/images/profile.jpg`](file:///c:/Users/Hp/OneDrive/Desktop/Protfolio/my-app/public/images/profile.jpg) with your own photo.
- [ ] **CV / Resume**: Replace [`public/resume.pdf`](file:///c:/Users/Hp/OneDrive/Desktop/Protfolio/my-app/public/resume.pdf) with your actual PDF CV.
- [ ] **Personal Details**: Open [`data/portfolioData.ts`](file:///c:/Users/Hp/OneDrive/Desktop/Protfolio/my-app/data/portfolioData.ts) and verify:
  - `name`, `brandName`, `dob`, `email`, `phone`, `whatsapp`, `location`, `languages`
  - `roles` (the titles that cycle in the typing animation)
  - `socialLinks` (your GitHub, LinkedIn, Twitter, and Facebook URLs)
  - `projects` (add or edit live links and GitHub URLs)
