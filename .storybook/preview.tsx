import type { Preview } from '@storybook/react';
import React from 'react';
import { HeroUIProvider } from '@heroui/react';
import '../src/styles/heroui.css';

const preview: Preview = {
  parameters: {
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
        <div className="p-4">
          <Story />
        </div>
      </HeroUIProvider>
    ),
  ],
};

export default preview;