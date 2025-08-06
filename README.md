# Personal Portfolio - JOSHI.DEV

A modern, responsive personal portfolio website showcasing the work and skills of Joshua Nathan Javier, a Front-End Developer.

## 🚀 Live Demo

Visit the live portfolio at: [joshi.dev](https://personal-portfolio-indol-beta.vercel.app/)

## 📋 Features

- **Modern Design**: Clean, minimalist interface with smooth animations
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Interactive Elements**: Hover effects and smooth transitions
- **Project Showcase**: Featured projects with live previews
- **Technology Stack Display**: Visual representation of skills and technologies
- **Smooth Scrolling**: Enhanced user experience with scroll-to-top functionality

## 🛠️ Technologies Used

### Frontend
- **Next.js 15** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS 4** - Utility-first CSS framework

### UI Components & Styling
- **Radix UI** - Accessible UI primitives
- **Lucide React** - Beautiful icons
- **Class Variance Authority** - Dynamic class composition
- **Tailwind Merge** - Merge Tailwind classes efficiently
- **TW Animate CSS** - Animation utilities

### Development Tools
- **pnpm** - Fast, disk space efficient package manager
- **ESLint** - Code linting
- **PostCSS** - CSS preprocessing
- **Turbopack** - Fast bundler for development

## 🏗️ Project Structure

```
personal-portfolio/
├── app/                    # Next.js App Router
│   ├── assets/            # Images and static assets
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Home page
├── components/            # Reusable React components
│   ├── ui/               # UI component library
│   ├── background.tsx    # Background component
│   ├── footer.tsx        # Footer component
│   ├── logo.tsx          # Logo/skills display
│   ├── navbar.tsx        # Navigation component
│   └── projects.tsx      # Projects showcase
├── lib/                  # Utility functions
├── public/               # Static assets
└── ...config files
```

## 🚦 Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm/yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/joshuanathanjavier/Personal-Portfolio.git
cd Personal-Portfolio
```

2. Install dependencies:
```bash
pnpm install
```

3. Run the development server:
```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📜 Available Scripts

- `pnpm dev` - Start development server with Turbopack
- `pnpm build` - Build the application for production
- `pnpm start` - Start the production server
- `pnpm lint` - Run ESLint for code quality

## 🎨 Customization

### Adding Projects

Edit `components/projects.tsx` to add new projects:

```tsx
// Add your project images to app/assets/
import YourProject from "@/app/assets/your-project.png"

// Add project section in the component
<Link href="https://your-project-url.com" target="_blank">
  <h3>Your Project Name</h3>
</Link>
```

### Updating Skills/Technologies

Modify `components/logo.tsx` to update the technology stack display with your preferred technologies.

### Styling

The project uses Tailwind CSS. Customize colors, fonts, and spacing in:
- `app/globals.css` - Global styles
- Individual component files - Component-specific styles

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px  
- Desktop: > 1024px

## 🔧 Configuration

- **Next.js Config**: `next.config.ts`
- **TypeScript Config**: `tsconfig.json`
- **Tailwind Config**: `tailwind.config.js` (via PostCSS)
- **Components Config**: `components.json`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and adapt it for your own portfolio! If you have suggestions for improvements, please open an issue or submit a pull request.

## 📞 Contact

- **Portfolio**: [joshi.dev](https://personal-portfolio-indol-beta.vercel.app/)
- **GitHub**: [@joshuanathanjavier](https://github.com/joshuanathanjavier)
- **Email**: [joshuanathanjavier@gmail.com](mailto:joshuanathanjavier@gmail.com)

---

Built with ❤️ by Joshua Nathan Javier