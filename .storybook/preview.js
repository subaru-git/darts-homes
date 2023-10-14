import { RouterContext } from 'next/dist/shared/lib/router-context.shared-runtime';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import '../src/styles/globals.css';

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
