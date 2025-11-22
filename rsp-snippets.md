# Responsive CSS/Tailwind Snippets

## Fixed Viewport Heights → Flexible Min-Height

### Pattern
```tsx
// Before (fixed, causes clipping)
className="h-[86vh]"

// After (flexible, preserves visual)
className="min-h-[86vh] h-auto"
```

### Applied to:
- Hero section: `h-[86vh]` → `min-h-[86vh] h-auto`
- Bento section: `h-[124vh]` → `min-h-[100vh] max-h-[140vh] h-auto`
- Projects section: `h-[80vh]` → `min-h-[80vh] h-auto`
- Team section: `h-[80vh]` → `min-h-[80vh] h-auto`
- Project pages hero: `h-[60vh]` → `min-h-[60vh] h-auto`
- Bento inner: `h-[18vh]` → `min-h-[18vh] h-auto`

## Responsive Container Widths

### Pattern
```tsx
// Before (fixed 80%, causes overflow on mobile)
className="w-[80%] mx-auto"

// After (responsive, prevents overflow)
className="w-full sm:w-[90%] md:w-[80%] mx-auto"
```

### Applied to:
- Hero content wrapper
- Bento section
- Projects section
- Team section
- Call section
- Footer section

## Touch Target Accessibility

### Pattern
```tsx
// Before (36px - too small)
className="size-9"

// After (44px - WCAG compliant)
className="size-11"
```

### Applied to:
- Team section social media links (4 instances)

## Responsive Button Sizing

### Pattern
```tsx
// Before (fixed width, causes overflow)
className="min-w-[320px]"

// After (responsive with max constraint)
className="min-w-[280px] sm:min-w-[320px] w-full sm:w-auto max-w-[90vw]"
```

### Applied to:
- Call section CTA button

## Horizontal Scroll Prevention

### CSS (globals.css)
```css
html,
body {
  overflow-x: hidden;
  max-width: 100vw;
}
```

## Viewport Metadata

### TypeScript (app/layout.tsx)
```typescript
export const metadata: Metadata = {
  // ... other metadata
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
}
```

## Notes

- All changes preserve visual design and animation behavior
- `min-h` allows content to expand beyond minimum while maintaining visual proportions
- Responsive widths use Tailwind breakpoints: `sm` (640px), `md` (768px)
- Touch targets increased minimally (36px → 44px) to meet WCAG 2.1 Level AAA
- No `clamp()` needed as Tailwind responsive utilities handle text scaling adequately

