import { expect, test } from '@playwright/test';

interface VisualCase {
  name: string;
  storyId: string;
  width: number;
  height: number;
}

const cases: VisualCase[] = [
  { name: 'money-home-mobile', storyId: 'screens-money--money-home', width: 390, height: 844 },
  { name: 'family-world-mobile', storyId: 'screens-family-story-review--family-world', width: 390, height: 844 },
  { name: 'graduation-mobile', storyId: 'screens-family-story-review--graduation-child', width: 390, height: 844 },
  { name: 'profile-switcher-mobile', storyId: 'screens-onboarding--profile-switcher', width: 390, height: 844 },
  { name: 'parent-overview-desktop', storyId: 'screens-parent--child-overview', width: 1024, height: 900 },
  { name: 'parent-insights-wide', storyId: 'screens-parent--insights', width: 1440, height: 1000 },
  { name: 'island-labels-mobile', storyId: 'visual-world-art-direction--clear-mobile-labels', width: 390, height: 844 },
];

for (const visualCase of cases) {
  test(visualCase.name, async ({ page }) => {
    await page.setViewportSize({ width: visualCase.width, height: visualCase.height });
    await page.goto(
      `/iframe.html?id=${visualCase.storyId}&viewMode=story&globals=motion:off;locale:en`,
      { waitUntil: 'networkidle' },
    );
    await page.evaluate(async () => {
      await document.fonts.ready;
    });
    await page.addStyleTag({
      content: `
        *, *::before, *::after {
          animation: none !important;
          transition: none !important;
          caret-color: transparent !important;
        }
      `,
    });
    await expect(page.locator('#storybook-root')).toBeVisible();
    await expect(page).toHaveScreenshot(`${visualCase.name}.png`, {
      fullPage: true,
    });
  });
}
