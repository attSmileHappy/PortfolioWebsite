# Yeji Kim · Creative Developer Portfolio

An interactive, production-ready developer portfolio and case study showcase for **Yeji Kim (김예지)**, specializing in .NET WPF enterprise architecture, Windows RPA robotic automation pipelines, and AI/deep learning models.

Designed with an editorial product-launch aesthetic and featuring a real interactive Spline 3D robot hero with a cinematic camera zoom-out reveal.

---

## 🌟 Key Features

- **Interactive Spline 3D Hero Experience**: Embedded native Spline 3D scene (`nexbotrobotcharacterconcept`) featuring an initial cinematic camera pull-back / zoom-out reveal (`scale(1.26)` to `scale(1)`) while preserving full pointer interactivity and respecting `prefers-reduced-motion`.
- **Editorial Design Language**: Inspired by high-end technology launch pages with warm neutral canvas (`#FAF8F5`), crisp typography (`Plus Jakarta Sans` & `Noto Sans KR`), generous whitespace, and high-impact signature accents (`#FFE600`).
- **Comprehensive Project Archive & Case Studies**:
  - **Enterprise Work Experience**: .NET WPF Visa Application System, Next-Gen Enterprise ERP System (30-member project, PL role, DevExpress to Telerik, EF Core, Gov/OCR APIs), and Windows RPA Automation Engine (20+ actions).
  - **Team AI Research**: YOLOv5 Food Image Recognition & Calorie Analysis (*Grand Prize / 대상 수상*), KorBERT Craft Beer Recommendation Chatbot (*Excellence Award / 우수상 수상*), Pygame Survival Game.
  - **Personal Projects**: KoNLPy Word Cloud Generator, RapidAPI & Papago Paper Summarizer, and Flask KakaoTalk Chatbot.
- **Deep-Dive Case Study Modals**: Modal views detailing architecture, client background, team size, technical roles, stored procedures, and GitHub links.
- **Interactive Technology Matrix**: Categorized tab views covering Languages, Frameworks, AI Models, Databases, and DevOps tooling.
- **Curriculum Vitae / Resume Sheet**: Integrated printer-friendly resume modal for recruiters.
- **Direct Connect & Copy**: Instant clipboard email copy, tel links, and direct inquiry messaging.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite 8](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **3D Scene**: [Spline 3D Design](https://spline.design/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Typography**: Google Fonts (*Plus Jakarta Sans*, *Noto Sans KR*, *JetBrains Mono*)

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or 20+
- npm or yarn / pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/attSmileHappy/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start local development server
npm run dev
```

The application will be running at `http://localhost:3000` (or `http://localhost:5173`).

---

## 🏗️ Production Build

To build the static production bundle:

```bash
npm run build
```

To preview the built production output locally:

```bash
npm run preview
```

---

## ☁️ Deployment (Vercel)

This project is configured for one-click deployment on [Vercel](https://vercel.com):

1. Push this repository to your GitHub account.
2. Go to the [Vercel Dashboard](https://vercel.com/dashboard) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Framework Preset: **Vite** (automatically detected).
5. Build Command: `npm run build`
6. Output Directory: `dist`
7. Click **Deploy**.

---

## 📂 Project Structure

```
├── index.html                   # HTML entry point with SEO metadata and Google Fonts
├── metadata.json                # Project identification & applet capabilities
├── package.json                 # Dependency management & build scripts
├── vite.config.ts               # Vite configuration with Tailwind CSS plugin
├── src/
│   ├── main.tsx                 # React entry point
│   ├── App.tsx                  # Root application component & modal state manager
│   ├── index.css                # Global styles, fonts, and animation easings
│   ├── types/
│   │   └── portfolio.ts         # TypeScript interfaces for projects, career, skills
│   ├── data/
│   │   └── portfolioData.ts     # Verified portfolio dataset extracted from PDF
│   ├── components/
│   │   ├── Navbar.tsx           # Floating responsive top navigation bar
│   │   ├── Hero.tsx             # 100vh Spline 3D robot hero with cinematic zoom reveal
│   │   ├── IntroQuote.tsx       # Engineering philosophy and quantified milestones
│   │   ├── FeaturedWorks.tsx    # Editorial large-card project showcases
│   │   ├── ProjectCatalog.tsx   # Filterable archive of all 12 projects
│   │   ├── ProjectModal.tsx     # Full case study detail modal
│   │   ├── ExperienceTimeline.tsx # Career history & education timeline
│   │   ├── SkillsMatrix.tsx     # Interactive technology and tool matrix
│   │   ├── PhilosophyFAQ.tsx    # Technical decision Q&A accordion
│   │   ├── ContactFooter.tsx    # High-impact contact section & yellow accent footer
│   │   ├── ResumeModal.tsx      # Comprehensive resume viewer with print action
│   │   └── ContactModal.tsx     # Direct inquiry message composer & copy tools
│   └── assets/
│       └── images/              # High-fidelity project showcase visual assets
└── README.md
```

---

## 📄 License & Attribution

Designed and developed for **Yeji Kim (김예지)**.  
3D Robot Character Model provided by [Spline](https://spline.design/).
