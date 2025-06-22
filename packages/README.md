# Roxas City Connect Design System

A shared design system for the Roxas City Connect platform, providing consistent branding, components, and styling across all applications.

## Packages

### `@roxas/theme`
Central theme configuration with colors, typography, spacing, and design tokens.

**Features:**
- Roxas City Connect brand colors (primary blue, civic colors)
- Typography system (Inter, Figtree fonts)
- Spacing and layout scales
- Animation and transition configurations
- Tailwind CSS integration

**Usage:**
```typescript
import { colors, fonts, spacing, theme } from '@roxas/theme';
```

### `@roxas/ui`
Reusable React components built with the design system.

**Components:**
- `Button` - Interactive buttons with variants and animations
- `Card` - Content containers with multiple styles
- `Header` - Navigation header with logo and links
- `Footer` - Site footer with links and branding
- `Layout` - Page wrapper with header and footer
- `Section` - Page sections with consistent spacing

**Usage:**
```typescript
import { Button, Card, Layout, Header, Footer } from '@roxas/ui';
```

## Getting Started

### Installation

The packages are already configured as workspace dependencies in the root `package.json`:

```json
{
  "dependencies": {
    "@roxas/theme": "workspace:*",
    "@roxas/ui": "workspace:*"
  }
}
```

### Basic Usage

```tsx
import { Layout, Header, Footer, Button, Card } from '@roxas/ui';

function MyPage() {
  return (
    <Layout>
      <Header showGetStarted />
      <main>
        <Card variant="elevated">
          <h1>Welcome to Roxas City Connect</h1>
          <Button variant="primary">Get Started</Button>
        </Card>
      </main>
      <Footer />
    </Layout>
  );
}
```

### Theme Integration

The design system integrates with Tailwind CSS through the theme package:

```typescript
// tailwind.config.js
import { tailwindConfig } from '@roxas/theme/tailwind';

export default tailwindConfig;
```

## Design Tokens

### Colors
- **Primary**: Blue palette for main actions and branding
- **Secondary**: Gray palette for text and backgrounds
- **Civic**: Special colors for government, community, transparency, participation
- **Semantic**: Success, warning, error, info colors

### Typography
- **Fonts**: Inter (sans-serif), Figtree (serif), JetBrains Mono (monospace)
- **Weights**: Thin to Black (100-900)
- **Sizes**: xs to 9xl with proper line heights

### Spacing
- **Scale**: 0 to 96 (0.25rem to 24rem)
- **Responsive**: Consistent spacing across breakpoints

### Animations
- **Spring animations** for interactive elements
- **Fade and slide** transitions
- **Hover effects** with elastic underlines

## Component Guidelines

### Self-Contained
All components are self-contained with minimal external dependencies.

### TypeScript Support
Full TypeScript support with proper type definitions and interfaces.

### Accessibility
Components follow accessibility best practices with proper ARIA attributes and keyboard navigation.

### Responsive Design
All components are mobile-first and responsive by default.

## Development

### Building Packages
```bash
npm run build:packages
```

### Development Mode
```bash
npm run dev --workspace=@roxas/theme
npm run dev --workspace=@roxas/ui
```

### Adding New Components
1. Create component in `packages/ui/src/`
2. Add to exports in `packages/ui/src/index.ts`
3. Update documentation

## Apps Integration

The design system is used across all Roxas City Connect applications:

- **Homepage** - Main citizen portal
- **Services** - Service directory and forms
- **Feedback** - Citizen feedback system
- **Tourism** - Visitor information portal
- **Admin** - Government official portal

Each app can import and use the shared components while maintaining its unique functionality and content.
