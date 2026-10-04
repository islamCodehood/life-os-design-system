import type { Preview } from '@storybook/react-vite';
import '../src/styles/index.css';

const preview: Preview = {
  globalTypes: {
    locale: {
      description: 'Language',
      toolbar: {
        icon: 'globe',
        items: [
          { value: 'en', title: 'English' },
          { value: 'ar', title: 'العربية' },
        ],
      },
    },
    experience: {
      description: 'Experience density',
      toolbar: {
        icon: 'mirror',
        items: [
          { value: 'explorer', title: 'Explorer · 6–8' },
          { value: 'builder', title: 'Builder · 9–12' },
          { value: 'navigator', title: 'Navigator · 13–15' },
          { value: 'launch', title: 'Launch · 16–17' },
          { value: 'parent', title: 'Parent' },
        ],
      },
    },
    motion: {
      description: 'Motion preference',
      toolbar: {
        icon: 'play',
        items: [
          { value: 'full', title: 'Full motion' },
          { value: 'reduced', title: 'Reduced motion' },
          { value: 'off', title: 'Motion off' },
        ],
      },
    },
  },
  initialGlobals: {
    locale: 'en',
    experience: 'builder',
    motion: 'full',
  },
  decorators: [
    (Story, context) => {
      const locale = context.globals.locale ?? 'en';
      const dir = locale === 'ar' ? 'rtl' : 'ltr';
      return (
        <div
          lang={locale}
          dir={dir}
          data-experience={context.globals.experience}
          data-motion={context.globals.motion ?? 'full'}
          style={{ minHeight: '100vh' }}
        >
          <Story />
        </div>
      );
    },
  ],
  parameters: {
    viewport: {
      options: {
        mobile390: {
          name: 'Mobile · 390',
          styles: { width: '390px', height: '844px' },
          type: 'mobile',
        },
        tablet768: {
          name: 'Tablet · 768',
          styles: { width: '768px', height: '1024px' },
          type: 'tablet',
        },
        desktop1024: {
          name: 'Desktop · 1024',
          styles: { width: '1024px', height: '900px' },
          type: 'desktop',
        },
        desktop1440: {
          name: 'Desktop · 1440',
          styles: { width: '1440px', height: '1000px' },
          type: 'desktop',
        },
      },
    },
    options: {
      storySort: {
        order: [
          'Foundations',
          'Components',
          'Patterns',
          'States',
          'Visual World',
          'Screens',
          'Contracts',
        ],
      },
    },
    a11y: { test: 'error' },
  },
};

export default preview;
