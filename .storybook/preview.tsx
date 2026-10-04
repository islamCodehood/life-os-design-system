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
          { value: 'explorer', title: 'Explorer' },
          { value: 'builder', title: 'Builder' },
          { value: 'parent', title: 'Parent' },
        ],
      },
    },
  },
  initialGlobals: {
    locale: 'en',
    experience: 'builder',
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
          style={{ minHeight: '100vh', padding: 24 }}
        >
          <Story />
        </div>
      );
    },
  ],
  parameters: {
    options: { storySort: { order: ['Foundations', 'Components', 'Patterns'] } },
    a11y: { test: 'todo' },
  },
};

export default preview;
