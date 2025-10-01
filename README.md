
  # Professional Portfolio Webapp 🚀

A modern, responsive, and feature-rich portfolio website built with React, TypeScript, and cutting-edge web technologies. This portfolio showcases professional experience, skills, projects, and provides an interactive contact system with email integration.

![Portfolio Preview](https://img.shields.io/badge/React-18.3.1-blue?logo=react) ![TypeScript](https://img.shields.io/badge/TypeScript-Latest-blue?logo=typescript) ![Vite](https://img.shields.io/badge/Vite-Latest-646CFF?logo=vite) ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-Latest-38B2AC?logo=tailwind-css)

## ✨ Features

### 🎨 Modern UI/UX
- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Dark Mode Support**: Seamless theme switching with next-themes
- **Smooth Animations**: Powered by Motion (Framer Motion) for fluid transitions
- **Particle Background**: Interactive animated background effects
- **Loading States**: Elegant loading spinner for better UX
- **Scroll Progress Indicator**: Visual feedback for page navigation
- **Back to Top Button**: Quick navigation to top of page

### 📱 Component Library
- **Radix UI Components**: 30+ accessible, customizable UI components including:
  - Accordion, Alert Dialog, Avatar, Badge, Button
  - Card, Carousel, Charts, Checkbox, Command
  - Dialog, Dropdown Menu, Form, Hover Card
  - Input, Label, Navigation Menu, Popover
  - Progress, Radio Group, Scroll Area, Select
  - Separator, Sheet, Sidebar, Skeleton
  - Slider, Switch, Tabs, Textarea, Tooltip
  - And many more...

### 🎯 Core Sections
- **Hero Section**: Eye-catching introduction with animated elements
- **About**: Personal introduction and background
- **Experience**: Professional work history and achievements
- **Skills**: Technical skills showcase with visual indicators
- **Projects**: Portfolio projects display with details
- **Contact**: Interactive contact form with email integration

### 📧 Contact Features
- **EmailJS Integration**: Direct email sending from the contact form
- **Form Validation**: React Hook Form for robust form handling
- **Real-time Feedback**: Toast notifications using Sonner
- **Multiple Contact Methods**: 
  - Email with direct Gmail compose link
  - WhatsApp integration
  - Location information
  - Social media links

### 🛠️ Backend Server
- **Express Server**: Node.js backend for email handling
- **Nodemailer**: SMTP email delivery
- **CORS Enabled**: Cross-origin resource sharing configured
- **Contact Form API**: `/send-email` endpoint for form submissions

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd "Professional Portfolio Webapp"
   ```

2. **Install frontend dependencies**
   ```bash
   npm install
   ```

3. **Install backend dependencies**
   ```bash
   cd server
   npm install
   cd ..
   ```

### Running the Application

#### Development Mode

1. **Start the frontend development server**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173`

2. **Start the backend server** (in a separate terminal)
   ```bash
   cd server
   npm start
   ```
   The server will run on `http://localhost:5000`

#### Production Build

```bash
npm run build
npm run preview
```

## 🏗️ Project Structure

```
Professional Portfolio Webapp/
├── src/
│   ├── components/          # React components
│   │   ├── About.tsx
│   │   ├── BackToTop.tsx
│   │   ├── Contact.tsx
│   │   ├── Experience.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── LoadingSpinner.tsx
│   │   ├── ParticleBackground.tsx
│   │   ├── Projects.tsx
│   │   ├── ScrollProgress.tsx
│   │   ├── Skills.tsx
│   │   └── ui/              # Reusable UI components (30+ components)
│   ├── images/              # Image assets
│   ├── styles/              # Global styles
│   ├── App.tsx              # Main application component
│   ├── main.tsx             # Application entry point
│   └── index.css            # Global CSS
├── server/
│   ├── index.js             # Express server
│   └── package.json         # Server dependencies
├── public/                  # Static assets
│   ├── MY_CV.pdf
│   └── seif.jpeg
├── build/                   # Production build output
├── vite.config.ts           # Vite configuration
├── package.json             # Frontend dependencies
└── README.md
```

## 🛠️ Tech Stack

### Frontend
- **Framework**: React 18.3.1
- **Language**: TypeScript
- **Build Tool**: Vite with SWC
- **Styling**: 
  - TailwindCSS
  - CSS Modules
  - Class Variance Authority (CVA)
- **Animation**: Motion (Framer Motion)
- **UI Components**: Radix UI
- **Icons**: Lucide React
- **Form Handling**: React Hook Form
- **Email Integration**: EmailJS
- **Notifications**: Sonner (Toast)
- **Theme**: Next Themes (Dark/Light mode)
- **Charts**: Recharts
- **Utilities**: 
  - clsx (Class name management)
  - tailwind-merge (Tailwind class merging)
  - cmdk (Command menu)

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Email**: Nodemailer
- **Middleware**: CORS

## ⚙️ Configuration

### Email Setup (Backend)
Update `server/index.js` with your email credentials:
```javascript
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-app-password'
  }
});
```

### EmailJS Setup (Frontend)
Configure EmailJS in `src/components/Contact.tsx` with your service credentials.

## 📦 Available Scripts

### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Lint code

### Backend
- `npm start` - Start Express server

## 🎨 Customization

### Colors & Theme
Modify `src/styles/globals.css` or `src/index.css` to customize theme colors.

### Components
All UI components are located in `src/components/ui/` and can be customized individually.

### Content
Update the following files to personalize your portfolio:
- `src/components/About.tsx` - Personal information
- `src/components/Experience.tsx` - Work experience
- `src/components/Skills.tsx` - Technical skills
- `src/components/Projects.tsx` - Portfolio projects
- `src/components/Contact.tsx` - Contact information

## 🌐 Deployment

### Frontend Deployment
The built files in the `build/` directory can be deployed to:
- Vercel
- Netlify
- GitHub Pages
- AWS S3
- Any static hosting service

### Backend Deployment
The Express server can be deployed to:
- Heroku
- Railway
- Render
- DigitalOcean
- AWS EC2

## 📝 Design Reference

Original Figma design: [Professional Portfolio Webapp](https://www.figma.com/design/7oCW4JEreYLRh09muOAaOl/Professional-Portfolio-Webapp)

## 📄 License

This project is private and intended for personal use.

## 👤 Author

**Seif Reda**
- Email: seifvjvf@gmail.com
- WhatsApp: +201280986221
- Location: Alexandria, Egypt

## 🙏 Acknowledgments

- Design inspiration from Figma community
- Radix UI for accessible components
- Shadcn UI for component patterns
- Motion for animation capabilities
- All open-source contributors

---

**Note**: Remember to update email credentials and API keys before deploying to production!
  
