import { expect, test } from '@playwright/test';

const cases = [
  { name: 'explorer-today', id: 'screens-core--explorer-today', width: 390, height: 900, experience: 'explorer' },
  { name: 'journey', id: 'screens-core--journey', width: 430, height: 1100, experience: 'explorer' },
  { name: 'money-home', id: 'screens-product--money-home', width: 430, height: 980, experience: 'builder' },
  { name: 'job-offer', id: 'screens-product--job-details-offer', width: 430, height: 980, experience: 'builder' },
  { name: 'goals-home', id: 'screens-product--goals-home', width: 430, height: 980, experience: 'builder' },
  { name: 'family-world', id: 'screens-product--family-world', width: 430, height: 1050, experience: 'builder' },
  { name: 'graduation-child', id: 'screens-product--graduation-celebration', width: 430, height: 960, experience: 'explorer' },
  { name: 'profile-switcher', id: 'screens-product--profile-switcher', width: 768, height: 850, experience: 'builder' },
  { name: 'parent-home', id: 'screens-core--parent-home', width: 1440, height: 1100, experience: 'parent' },
  { name: 'parent-child', id: 'screens-product--parent-child-overview', width: 1440, height: 1100, experience: 'parent' },
  { name: 'parent-insights', id: 'screens-product--parent-insights', width: 1440, height: 900, experience: 'parent' },
  { name: 'onboarding', id: 'screens-product--onboarding', width: 1024, height: 900, experience: 'parent' },
] as const;

for (const visualCase of cases) {
  test(visualCase.name, async ({ page }) => {
    await page.setViewportSize({ width: visualCase.width, height: visualCase.height });
    const globals = `experience:${visualCase.experience};motion:off;locale:en`;
    await page.goto(`/iframe.html?id=${visualCase.id}&viewMode=story&globals=${encodeURIComponent(globals)}`);
    await page.locator('#storybook-root').waitFor({ state: 'visible' });
    await page.evaluate(() => document.fonts.ready);
    await expect(page.locator('#storybook-root')).toHaveScreenshot(`${visualCase.name}.png`, {
      animations: 'disabled',
    });
  });
}
