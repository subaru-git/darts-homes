import { RouterContext } from 'next/dist/shared/lib/router-context';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  nextRouter: {
    Provider: RouterContext.Provider,
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
  localeOptions: ['en', 'ja'],
};
