import type { Preview } from '@storybook/react';
import React from 'react';
import { HeroUIProvider } from '@heroui/react';
import '../src/styles/globals.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => (
      <HeroUIProvider>
        <div className="light text-foreground bg-background p-4">
          <Story />
        </div>
      </HeroUIProvider>
    ),
  ],
};

export default preview;