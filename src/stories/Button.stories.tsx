import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { ButtonPrueba } from '../components/Button/Button';
import React from "react";
import {HeroUIProvider } from '@heroui/react';

const meta: Meta<typeof ButtonPrueba> = {
  title: 'Components/Button',
  component: ButtonPrueba,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A customizable button component built on top of HeroUI Button with consistent styling and behavior.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['solid', 'bordered', 'light', 'flat', 'faded', 'shadow', 'ghost'],
      description: 'The visual style variant of the button',
      table: {
        defaultValue: { summary: 'solid' },
      },
    },
    color: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'success', 'warning', 'danger'],
      description: 'The color theme of the button',
      table: {
        defaultValue: { summary: 'primary' },
      },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'The size of the button',
      table: {
        defaultValue: { summary: 'md' },
      },
    },
    radius: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'full'],
      description: 'The border radius of the button',
    },
    loading: {
      control: 'boolean',
      description: 'Whether the button is in loading state',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Whether the button should take full width',
    },
  },
  args: {
    onClick: fn(),
    children: 'Button',
  },
};

export default meta;


const ThemeDecorator = (Story: React.FC) => (
  <HeroUIProvider>
    <Story />
  </HeroUIProvider>
);



type Story = StoryObj<typeof meta>;

// Basic variants
export const Default: Story = {
  args: {
    children: 'Default Button xx',
  },
  decorators: [ThemeDecorator],
};

export const Primary: Story = {
  args: {
    color: 'primary',
    children: 'Primary Button',
  },
  decorators: [ThemeDecorator],
};

export const Secondary: Story = {
  args: {
    color: 'secondary',
    children: 'Secondary Button',
  },
};

export const Success: Story = {
  args: {
    color: 'success',
    children: 'Success Button',
  },
};

export const Warning: Story = {
  args: {
    color: 'warning',
    children: 'Warning Button',
  },
};

export const Danger: Story = {
  args: {
    color: 'danger',
    children: 'Danger Button',
  },
};

// Variants
export const Solid: Story = {
  args: {
    variant: 'solid',
    children: 'Solid Button',
  },
};

export const Bordered: Story = {
  args: {
    variant: 'bordered',
    children: 'Bordered Button',
  },
};

export const Light: Story = {
  args: {
    variant: 'light',
    children: 'Light Button',
  },
};

export const Flat: Story = {
  args: {
    variant: 'flat',
    children: 'Flat Button',
  },
};

export const Faded: Story = {
  args: {
    variant: 'faded',
    children: 'Faded Button',
  },
};

export const Shadow: Story = {
  args: {
    variant: 'shadow',
    children: 'Shadow Button',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Ghost Button',
  },
};

// Sizes
export const Small: Story = {
  args: {
    size: 'sm',
    children: 'Small Button',
  },
};

export const Medium: Story = {
  args: {
    size: 'md',
    children: 'Medium Button',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    children: 'Large Button',
  },
};

// States
export const Loading: Story = {
  args: {
    loading: true,
    children: 'Loading Button',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Disabled Button',
  },
};

// With Icons
export const WithStartIcon: Story = {
  args: {
    startIcon: '🚀',
    children: 'Button with Start Icon',
  },
};

export const WithEndIcon: Story = {
  args: {
    endIcon: '→',
    children: 'Button with End Icon',
  },
};

export const WithBothIcons: Story = {
  args: {
    startIcon: '🚀',
    endIcon: '→',
    children: 'Button with Both Icons',
  },
};

// Radius variants
export const NoRadius: Story = {
  args: {
    radius: 'none',
    children: 'No Radius',
  },
};

export const SmallRadius: Story = {
  args: {
    radius: 'sm',
    children: 'Small Radius',
  },
};

export const FullRadius: Story = {
  args: {
    radius: 'full',
    children: 'Full Radius',
  },
};

// Full width
export const FullWidth: Story = {
  args: {
    fullWidth: true,
    children: 'Full Width Button',
  },
  parameters: {
    layout: 'padded',
  },
};