import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { PhoneInput } from '../components/PhoneInput/PhoneInput';
import React from "react";
import { HeroUIProvider } from '@heroui/react';

const meta: Meta<typeof PhoneInput> = {
  title: 'Components/PhoneInput',
  component: PhoneInput,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A business phone number input component with country code selector built on top of HeroUI Input and Select components.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['flat', 'bordered', 'faded', 'underlined'],
      description: 'The visual style variant of the input',
      table: {
        defaultValue: { summary: 'flat' },
      },
    },
    color: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'success', 'warning', 'danger'],
      description: 'The color theme of the input',
      table: {
        defaultValue: { summary: 'default' },
      },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'The size of the input',
      table: {
        defaultValue: { summary: 'md' },
      },
    },
    radius: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'full'],
      description: 'The border radius of the input',
    },
    defaultCountry: {
      control: 'select',
      options: ['US', 'ES', 'MX', 'AR', 'CO', 'PE', 'CL'],
      description: 'Default country code (ISO 3166-1 alpha-2)',
      table: {
        defaultValue: { summary: 'US' },
      },
    },
    isRequired: {
      control: 'boolean',
      description: 'Whether the input is required',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    isDisabled: {
      control: 'boolean',
      description: 'Whether the input is disabled',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    isInvalid: {
      control: 'boolean',
      description: 'Whether the input is invalid',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    fullWidth: {
      control: 'boolean',
      description: 'Whether the input should take full width',
      table: {
        defaultValue: { summary: 'true' },
      },
    },
  },
  args: {
    onValueChange: fn(),
    onCountryChange: fn(),
  },
};

export default meta;

const ThemeDecorator = (Story: React.FC) => (
  <HeroUIProvider>
    <div className="w-96">
      <Story />
    </div>
  </HeroUIProvider>
);

type Story = StoryObj<typeof meta>;

// Basic examples
export const Default: Story = {
  args: {},
  decorators: [ThemeDecorator],
};

export const WithCustomLabel: Story = {
  args: {
    label: "Enter your business phone number",
  },
  decorators: [ThemeDecorator],
};

export const WithDescription: Story = {
  args: {
    description: "We'll use this number to contact you about your business account.",
  },
  decorators: [ThemeDecorator],
};

export const Required: Story = {
  args: {
    isRequired: true,
    label: "Business phone number (required)",
  },
  decorators: [ThemeDecorator],
};

export const WithError: Story = {
  args: {
    isInvalid: true,
    errorMessage: "Please enter a valid phone number",
    value: "123",
  },
  decorators: [ThemeDecorator],
};

// Different countries
export const SpanishNumber: Story = {
  args: {
    defaultCountry: "ES",
    value: "612345678",
    label: "Número de teléfono empresarial",
  },
  decorators: [ThemeDecorator],
};

export const MexicanNumber: Story = {
  args: {
    defaultCountry: "MX",
    value: "5512345678",
    label: "Número de teléfono empresarial",
  },
  decorators: [ThemeDecorator],
};

// Variants
export const Bordered: Story = {
  args: {
    variant: "bordered",
  },
  decorators: [ThemeDecorator],
};

export const Faded: Story = {
  args: {
    variant: "faded",
  },
  decorators: [ThemeDecorator],
};

export const Underlined: Story = {
  args: {
    variant: "underlined",
  },
  decorators: [ThemeDecorator],
};

// Colors
export const Primary: Story = {
  args: {
    color: "primary",
    variant: "bordered",
  },
  decorators: [ThemeDecorator],
};

export const Success: Story = {
  args: {
    color: "success",
    variant: "bordered",
  },
  decorators: [ThemeDecorator],
};

export const Warning: Story = {
  args: {
    color: "warning",
    variant: "bordered",
  },
  decorators: [ThemeDecorator],
};

export const Danger: Story = {
  args: {
    color: "danger",
    variant: "bordered",
  },
  decorators: [ThemeDecorator],
};

// Sizes
export const Small: Story = {
  args: {
    size: "sm",
  },
  decorators: [ThemeDecorator],
};

export const Medium: Story = {
  args: {
    size: "md",
  },
  decorators: [ThemeDecorator],
};

export const Large: Story = {
  args: {
    size: "lg",
  },
  decorators: [ThemeDecorator],
};

// States
export const Disabled: Story = {
  args: {
    isDisabled: true,
    value: "1234567890",
  },
  decorators: [ThemeDecorator],
};

// Radius variants
export const NoRadius: Story = {
  args: {
    radius: "none",
    variant: "bordered",
  },
  decorators: [ThemeDecorator],
};

export const SmallRadius: Story = {
  args: {
    radius: "sm",
    variant: "bordered",
  },
  decorators: [ThemeDecorator],
};

export const FullRadius: Story = {
  args: {
    radius: "full",
    variant: "bordered",
  },
  decorators: [ThemeDecorator],
};

// Full width example
export const FullWidth: Story = {
  args: {
    fullWidth: true,
  },
  decorators: [(Story: React.FC) => (
    <HeroUIProvider>
      <div className="w-full max-w-2xl">
        <Story />
      </div>
    </HeroUIProvider>
  )],
  parameters: {
    layout: 'padded',
  },
}; 