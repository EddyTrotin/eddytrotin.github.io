# Portfolio Structure Documentation

## Overview
The portfolio has been refactored into a clean, modular structure with separate components, centralized translations for multilingual support (English & French), and easy content management.

## File Structure

```
portfolio/
├── src/
│   ├── config/
│   │   ├── translations.ts              # All translations (EN & FR) - EDIT THIS TO UPDATE CONTENT
│   │   └── portfolio.config.ts          # Legacy config (now deprecated, use translations.ts)
│   ├── contexts/
│   │   └── LanguageContext.tsx          # Language state management
│   └── components/
│       ├── Portfolio.tsx                 # Main component (orchestrates everything)
│       └── portfolio/
│           ├── BackgroundEffects.tsx    # Animated background particles
│           ├── Navigation.tsx           # Top navigation bar with language toggle
│           ├── LanguageToggle.tsx       # Language switcher (EN/FR)
│           ├── Hero.tsx                 # Hero/landing section
│           ├── About.tsx                # About section with bio and stats
│           ├── Projects.tsx             # Projects showcase
│           ├── Contact.tsx              # Contact section
│           └── Footer.tsx               # Footer
```

## 🌍 Multilingual Support

The portfolio now supports **English (EN)** and **French (FR)** with a smooth toggle in the navigation bar!

### Language Features:
- ✅ Auto-saves user's language preference to localStorage
- ✅ Elegant EN/FR toggle button in navigation
- ✅ All content translated (projects, buttons, labels, etc.)
- ✅ Easy to add more languages

## How to Update Content

### To update your personal information, projects, or any content:

**Edit the file:** `src/config/translations.ts`

This file contains all the data for your portfolio in both languages:

### Update Both Languages

The translations file has an `en` and `fr` object. Update both for consistency:

```typescript
export const translations = {
  en: {
    personal: {
      name: 'DevPortfolio',
      title: 'Full Stack Developer',
      subtitle: 'Full Stack Developer specializing in...',
      availability: 'Available for new projects',
      tagline: {
        prefix: 'Crafting Digital',
        highlight: 'Experiences'
      },
      stats: {
        projectsCompleted: '50+',
        projectsLabel: 'Projects Completed',
        // ... more stats
      },
      bio: {
        heading: 'Full Stack Developer & Creative Technologist',
        intro: 'I transform ideas...',
        passion: 'My passion lies...'
      }
    },
    projects: {
      title: 'Featured Projects',
      viewProject: 'View Project',
      items: [
        {
          title: 'Project Name',
          description: 'Description',
          tech: ['React', 'Node.js'],
          gradient: 'from-violet-600 via-purple-600 to-fuchsia-600',
          icon: Sparkles,
          kpis: ['40% Cost Reduction'],
          link: '#'
        }
      ]
    }
    // ... more sections
  },
  fr: {
    // Same structure but in French
    personal: {
      name: 'DevPortfolio',
      title: 'Développeur Full Stack',
      // ... French translations
    }
  }
}
```

### Contact Information
```typescript
contact: {
  email: 'your@email.com',
  github: 'https://github.com/...',
  linkedin: 'https://linkedin.com/...'
}
```

### Tech Stack
```typescript
techStack: [
  {
    icon: IconName,
    label: 'Category',
    items: 'Technologies list'
  }
]
```

## Component Structure

### Main Portfolio Component (`Portfolio.tsx`)
- Wraps everything with `LanguageProvider` for i18n support
- Manages scroll behavior and active section tracking
- Orchestrates all child components

### Language System
- **LanguageContext** - Provides current language and translation function to all components
- **LanguageToggle** - EN/FR switcher button with smooth animations
- **translations.ts** - Centralized translation file

### Individual Components
Each component uses the `useLanguage()` hook to access translations:

1. **BackgroundEffects** - Handles animated particles and background
2. **Navigation** - Sticky header with section links + language toggle
3. **LanguageToggle** - Language switcher component
4. **Hero** - Landing section with CTA buttons
5. **About** - Bio, stats, and tech stack
6. **Projects** - Project showcase cards
7. **Contact** - Contact information and links
8. **Footer** - Simple copyright footer

## Benefits of This Structure

✅ **Multilingual**: Full EN/FR support with easy language switching  
✅ **Easy to Update**: Change content in one file (`translations.ts`)  
✅ **Maintainable**: Each component has a single responsibility  
✅ **Type-Safe**: Full TypeScript support with proper interfaces  
✅ **Reusable**: Components can be easily reused or extended  
✅ **Clean Code**: Separation of concerns (data vs presentation)  
✅ **Scalable**: Easy to add new sections or features  
✅ **User-Friendly**: Language preference persisted in localStorage  

## Adding New Content

### To add a new project:
1. Open `src/config/translations.ts`
2. Add a new object to the `projects.items` array in BOTH `en` and `fr`
3. Import any needed icons from `lucide-react`

### To add a new language:
1. Open `src/config/translations.ts`
2. Add a new language object (e.g., `es`, `de`) with all translations
3. Update the `Language` type: `export type Language = 'en' | 'fr' | 'es';`
4. Add a new button in `LanguageToggle.tsx`

### To add a new section:
1. Create a new component in `src/components/portfolio/`
2. Add the section data to `translations.ts` (in all languages)
3. Use `useLanguage()` hook in your component
4. Import and use the component in `Portfolio.tsx`
5. Add the section ID to the navigation sections array

## Icons
All icons come from [Lucide React](https://lucide.dev/). To use a different icon:
1. Import it from `lucide-react` in `portfolio.config.ts`
2. Use it in your configuration

Example:
```typescript
import { Rocket } from 'lucide-react';

// Then use it
icon: Rocket
```

## Tips
- Keep descriptions concise and impactful
- Use consistent gradient naming (Tailwind classes)
- Update KPIs with real metrics when possible
- Test your changes by viewing the portfolio in the browser

