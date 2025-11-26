# Modern Personal Portfolio Website

## Overview

This is a modern personal portfolio website built with React, TypeScript, and Express. The application features a single-page layout showcasing a developer's work, skills, and contact information with a clean, professional design inspired by contemporary portfolio sites like Behance and Dribbble.

The frontend is a React SPA using shadcn/ui components with Tailwind CSS for styling, while the backend is an Express server handling contact form submissions. The application supports PostgreSQL database integration via Drizzle ORM for storing contact messages.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React 18 with TypeScript, using Vite as the build tool and development server.

**UI Component System**: shadcn/ui (Radix UI primitives) with the "new-york" style variant. Components are located in `client/src/components/ui/` and provide a comprehensive set of accessible, customizable UI elements including buttons, cards, forms, dialogs, and navigation components.

**Styling Approach**: Tailwind CSS with custom configuration extending the base theme. CSS variables define a comprehensive design system for colors, spacing, and typography. Custom fonts include Outfit for headings and Inter for body text, loaded from Google Fonts.

**Design System**: 
- Spacing uses Tailwind's 4-based scale (4, 6, 8, 12, 16, 20, 24)
- Container max-width of 6xl-7xl with responsive padding
- Typography scale from text-sm to text-7xl
- Custom color palette using HSL values with CSS variables for theme flexibility

**Routing**: Wouter for lightweight client-side routing. Currently implements a single home route with a 404 fallback.

**State Management**: TanStack Query (React Query) for server state management with custom query client configuration. Query functions handle API requests with authentication and error handling.

**Form Handling**: React Hook Form with Zod schema validation via @hookform/resolvers for type-safe form validation matching backend schemas.

**Page Structure**: Single-page portfolio layout with sections:
- Hero section with animated greeting and professional photo
- About section with timeline cards
- Skills section with categorized skill cards and proficiency indicators
- Projects section with filterable project grid
- Contact section with form and contact information
- Footer with navigation and social links

### Backend Architecture

**Server Framework**: Express.js with TypeScript running on Node.js.

**Development vs Production**:
- Development mode (`server/index-dev.ts`): Vite dev server middleware for HMR and instant updates
- Production mode (`server/index-prod.ts`): Serves pre-built static files from `dist/public`

**API Design**: RESTful API with JSON request/response format. Current endpoints:
- `POST /api/contact` - Submit contact form (validated with Zod schema)
- `GET /api/contact` - Retrieve all contact messages

**Storage Layer**: Abstracted storage interface (`IStorage`) with two implementations:
- `MemStorage` - In-memory storage using Map structures for development/testing
- Database storage (via Drizzle ORM) for production (PostgreSQL via Neon serverless driver)

**Request Handling**:
- Body parsing with `express.json()` including raw body capture for webhook verification
- URL-encoded form data support
- Request logging middleware tracking API calls with duration metrics
- Error handling with appropriate HTTP status codes and JSON error responses

**Validation**: Shared Zod schemas between frontend and backend ensure type safety and consistent validation rules.

### Database Architecture

**ORM**: Drizzle ORM with PostgreSQL dialect, configured for Neon serverless database.

**Schema Design** (`shared/schema.ts`):
- `users` table: Basic user authentication (id, username, password hash)
- `contact_messages` table: Stores contact form submissions (id, name, email, message, timestamp)
- Uses `gen_random_uuid()` for primary keys
- Timestamps use PostgreSQL's `defaultNow()`

**Migration Strategy**: Schema-first approach with migrations stored in `./migrations`. Uses `drizzle-kit push` for schema synchronization.

**Type Safety**: Drizzle-zod integration generates Zod schemas from database tables, ensuring runtime validation matches database schema.

### Build and Development Workflow

**Development**: Vite dev server with HMR, integrated into Express middleware. Source maps and error overlays enabled. Replit-specific plugins for enhanced development experience in Replit environment.

**Production Build**:
1. Frontend: Vite builds React app to `dist/public`
2. Backend: esbuild bundles Express server to `dist/index.js` as ESM module
3. Single `node dist/index.js` command serves entire application

**Path Aliases**: TypeScript path mapping for clean imports:
- `@/*` → `client/src/*` (frontend code)
- `@shared/*` → `shared/*` (shared schemas and types)
- `@assets/*` → `attached_assets/*` (images and static assets)

### Design Guidelines Integration

The application follows a documented design system (`design_guidelines.md`) specifying:
- Modern, clean aesthetic combining Behance/Dribbble inspiration with Linear's typography
- Component specifications for navigation, hero, about, skills, projects, and contact sections
- Responsive breakpoints (mobile-first approach)
- Animation and interaction patterns (scroll-based transitions, hover effects)
- Specific component layouts (asymmetric hero, masonry project grid, two-column layouts)

## External Dependencies

### Core Framework Dependencies
- **React 18** - UI framework
- **Express** - Backend server framework
- **Vite** - Build tool and dev server
- **TypeScript** - Type safety across the stack

### Database and ORM
- **@neondatabase/serverless** - PostgreSQL connection for Neon serverless database
- **Drizzle ORM** - Type-safe database ORM with PostgreSQL support
- **drizzle-zod** - Schema validation integration

### UI Component Libraries
- **@radix-ui/* packages** - Headless accessible UI primitives (30+ component packages)
- **shadcn/ui** - Pre-configured Radix UI components with Tailwind styling
- **Tailwind CSS** - Utility-first CSS framework
- **class-variance-authority** - Type-safe variant styling
- **lucide-react** - Icon library

### Form and Validation
- **react-hook-form** - Form state management
- **@hookform/resolvers** - Validation resolver integration
- **zod** - Schema validation library

### State Management
- **@tanstack/react-query** - Server state management and data fetching

### Routing
- **wouter** - Lightweight client-side routing

### Development Tools
- **@replit/vite-plugin-*** - Replit integration plugins for enhanced development experience
- **esbuild** - Production server bundling

### Fonts
- **Google Fonts** - Outfit (headings) and Inter (body text) font families

### Session and Storage
- **connect-pg-simple** - PostgreSQL session store for Express sessions (if session management is implemented)

### Utility Libraries
- **date-fns** - Date manipulation
- **clsx** / **tailwind-merge** - Conditional className utilities
- **nanoid** - Unique ID generation