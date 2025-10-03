# Portfolio Structure Documentation

## Overview
The portfolio has been refactored into a clean, modular structure with separate components and a centralized configuration file for easy content updates.

## File Structure

```
portfolio/
├── src/
│   ├── config/
│   │   └── portfolio.config.ts          # All portfolio data (EDIT THIS FILE TO UPDATE CONTENT)
│   └── components/
│       ├── Portfolio.tsx                 # Main component (orchestrates everything)
│       └── portfolio/
│           ├── BackgroundEffects.tsx    # Animated background particles
│           ├── Navigation.tsx           # Top navigation bar
│           ├── Hero.tsx                 # Hero/landing section
│           ├── About.tsx                # About section with bio and stats
│           ├── Projects.tsx             # Projects showcase
│           ├── Contact.tsx              # Contact section
│           └── Footer.tsx               # Footer
```

## How to Update Content

### To update your personal information, projects, or any content:

**Edit the file:** `src/config/portfolio.config.ts`

This file contains all the data for your portfolio:

### Personal Information
```typescript
personal: {
  name: 'DevPortfolio',              // Your brand name
  title: 'Full Stack Developer',     // Your title
  subtitle: '...',                    // Tagline
  availability: '...',                // Current status
  tagline: { ... },                   // Hero section text
  stats: { ... },                     // Statistics (projects, years, etc.)
  bio: { ... }                        // About section text
}
```

### Projects
```typescript
projects: [
  {
    title: 'Project Name',
    description: 'Project description',
    tech: ['Tech1', 'Tech2'],         // Technology stack
    gradient: 'from-... to-...',      // Tailwind gradient classes
    icon: IconName,                    // Lucide icon
    kpis: ['KPI 1', 'KPI 2'],         // Key metrics
    link: 'https://...'               // Project URL
  }
]
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
- Manages scroll behavior and active section tracking
- Orchestrates all child components
- Passes configuration data to components

### Individual Components
Each component is self-contained and receives its data via props:

1. **BackgroundEffects** - Handles animated particles and background
2. **Navigation** - Sticky header with section links
3. **Hero** - Landing section with CTA buttons
4. **About** - Bio, stats, and tech stack
5. **Projects** - Project showcase cards
6. **Contact** - Contact information and links
7. **Footer** - Simple copyright footer

## Benefits of This Structure

✅ **Easy to Update**: Change content in one file (`portfolio.config.ts`)  
✅ **Maintainable**: Each component has a single responsibility  
✅ **Type-Safe**: Full TypeScript support with proper interfaces  
✅ **Reusable**: Components can be easily reused or extended  
✅ **Clean Code**: Separation of concerns (data vs presentation)  
✅ **Scalable**: Easy to add new sections or features  

## Adding New Content

### To add a new project:
1. Open `src/config/portfolio.config.ts`
2. Add a new object to the `projects` array
3. Import any needed icons from `lucide-react`

### To add a new section:
1. Create a new component in `src/components/portfolio/`
2. Add the section data to `portfolio.config.ts`
3. Import and use the component in `Portfolio.tsx`
4. Add the section ID to `navigation.sections` in the config

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

