# Design Guidelines: Modern Personal Portfolio Website

## Design Approach
**Selected Approach:** Reference-Based, drawing inspiration from modern portfolio sites (Behance, Dribbble) combined with Linear's clean typography and Notion's card aesthetics. Focus on creating a visually striking, personality-driven experience that showcases work professionally while maintaining approachability.

## Layout System
**Spacing Primitives:** Use Tailwind units of 4, 6, 8, 12, 16, 20, and 24 for consistent rhythm (e.g., p-6, mt-12, gap-8)

**Container Strategy:**
- Full-width sections with inner `max-w-6xl` for main content
- Hero section: Full viewport width
- Content sections: Centered with horizontal padding (px-6 md:px-12)
- Projects grid: `max-w-7xl` for wider showcase area

## Typography Hierarchy

**Fonts:** Google Fonts - Outfit (headings, 600-700 weight) and Inter (body, 400-500 weight)

**Scale:**
- Hero headline: text-5xl md:text-7xl, font-bold
- Section titles: text-3xl md:text-4xl, font-semibold
- Project titles: text-xl md:text-2xl, font-semibold
- Body text: text-base md:text-lg, leading-relaxed
- Skill tags: text-sm, font-medium

## Component Library

### Navigation
Sticky header with transparent-to-solid transition on scroll, containing logo/name on left and navigation links on right. Include smooth scroll behavior to sections. Mobile: Hamburger menu with slide-in panel.

### Hero Section (Full Viewport)
Asymmetric layout with large professional photo on one side (40% width) and introduction content on the other (60%). Photo uses rounded-2xl with subtle shadow. Content includes animated greeting text, name as large headline, tagline, and dual CTA buttons (primary: "View Projects", secondary: "Get in Touch"). Add floating skill badges or tech icons around photo for visual interest.

### About Me Section
Two-column layout (md:grid-cols-2) with personal photo/illustration on left and detailed bio on right. Include timeline cards for education/career milestones, displayed as vertical connected cards with dates and descriptions.

### Skills Section
Multi-column grid (grid-cols-2 md:grid-cols-3 lg:grid-cols-4) of skill cards. Each card features icon (from Heroicons), skill name, and optional proficiency indicator (progress bar or rating stars). Group by categories: "Technical Skills", "Design Tools", "Soft Skills".

### Projects/Portfolio Section
Masonry-style grid (grid-cols-1 md:grid-cols-2 lg:grid-cols-3) with project cards. Each card includes:
- Project thumbnail image (aspect-ratio-16/9)
- Project title and brief description
- Tech stack tags (inline pill badges)
- Hover effect revealing "View Project" overlay with blurred background

Include filter tabs above grid for project categories (All, Web, Mobile, Design).

### Contact Section
Split layout (md:grid-cols-2): Left side contains contact form (name, email, message fields with modern input styling), right side displays contact information cards (email, phone, social links) and optional location map embed. Form includes prominent submit button.

### Footer
Comprehensive footer with three columns: Quick Links, Social Media (icons linking to profiles), and brief tagline or copyright. Include newsletter signup if desired.

## Interaction Patterns
- Smooth scroll to sections on navigation click
- Fade-in animations on scroll for section reveals (use Intersection Observer)
- Project cards scale slightly on hover (transform: scale(1.02))
- Button hover: subtle lift effect with shadow
- Form inputs: border highlight on focus
- Minimal, purposeful animations - avoid excessive motion

## Images Section

**Hero Image:** Large professional portrait or creative self-portrait (vertical orientation, 800x1200px minimum). Should be high-quality, well-lit, showing personality. Positioned on left or right side of hero, not background.

**About Me Image:** Casual or candid photo showing personality (600x800px), rounded corners.

**Project Thumbnails:** 6-8 project screenshots or mockups (1600x900px, 16:9 ratio). Should showcase diverse work. High-quality, with clear focal points.

**Background Elements:** Optional abstract shapes or gradient meshes as decorative elements (not photos), used sparingly for visual interest.

All images should be optimized for web, served via CDN, with lazy loading for performance.

## Icons
**Library:** Heroicons (outline style for consistency)
- Navigation icons for mobile menu
- Skill category icons
- Social media icons in footer
- Contact information icons

This design creates a modern, professional portfolio that balances visual impact with clean information architecture, ensuring your work and personality shine through.