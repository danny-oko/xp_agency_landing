# Reproduction Commands for Responsive Fixes

## Before Changes (Snapshot)

```bash
git status --porcelain
git rev-parse --abbrev-ref HEAD  # main
git rev-parse HEAD  # ec35ebc22ee32f837e59fd5fbc80d9d296d314ae
```

## Apply Patches

```bash
# Apply all responsive fixes
git apply fix-rsp-0001.diff  # Hero section
git apply fix-rsp-0002.diff  # Bento section
git apply fix-rsp-0003.diff  # Projects section
git apply fix-rsp-0004.diff  # Team section (touch targets)
git apply fix-rsp-0005.diff  # Call section
git apply fix-rsp-0006.diff  # Footer section
git apply fix-rsp-0007.diff  # Global CSS overflow fix
git apply fix-rsp-0008.diff  # Viewport metadata
git apply fix-rsp-0009.diff  # Project pages hero heights

# Or apply all at once
for file in fix-rsp-*.diff; do git apply "$file"; done
```

## Verification Commands

```bash
# Install dependencies
npm ci

# Type check
npx tsc --noEmit

# Lint (if configured)
npm run lint || true

# Build
npm run build

# Start dev server to test
npm run dev
```

## Manual Testing Checklist

### Breakpoint Testing
- [ ] 320px - Check for horizontal scroll, content clipping
- [ ] 375px - Verify responsive widths work
- [ ] 414px - Test touch targets (should be ≥44px)
- [ ] 768px - Verify breakpoint transitions
- [ ] 1024px - Check desktop layout
- [ ] 1280px - Verify no issues
- [ ] 1440px - Check XL desktop

### Functional Testing
- [ ] Hero section expands properly on small screens
- [ ] Bento section doesn't clip content
- [ ] Projects section responsive
- [ ] Team social links are tappable (≥44px)
- [ ] Call CTA button fits on mobile
- [ ] No horizontal scroll at any breakpoint
- [ ] All animations still work
- [ ] Visual design unchanged

### Accessibility Testing
- [ ] Tab navigation works
- [ ] Focus indicators visible
- [ ] Touch targets ≥44x44px
- [ ] Viewport meta tag present

## CI Integration

Add to `.github/workflows/ci-fix.yml`:

```yaml
responsive-test:
  runs-on: ubuntu-latest
  steps:
    - uses: actions/checkout@v4
    - uses: actions/setup-node@v4
      with:
        node-version: '18'
    - run: npm ci
    - run: npx tsc --noEmit
    - run: npm run build
    # Optional: Add Playwright/Puppeteer screenshot tests
```

