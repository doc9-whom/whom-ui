import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { Button } from '../components';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    children: 'Button',
    onClick: fn(),
    variant: 'primary',
    size: 'lg',
    disabled: false,
    fullWidth: false,
    startAdornment: undefined,
    endAdornment: undefined,
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: [
        'primary',
        'primaryGray',
        'secondaryOutline',
        'secondaryGray',
        'tertiary',
        'linkGray',
        'linkColor',
      ],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
    fullWidth: {
      control: { type: 'boolean' },
    },
    startAdornment: {
      table: { disable: true },
    },
    endAdornment: {
      table: { disable: true },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {};

export const PrimaryGray: Story = {
  args: { variant: 'primaryGray' },
};

export const SecondaryOutline: Story = {
  args: { variant: 'secondaryOutline' },
};

export const SecondaryGray: Story = {
  args: { variant: 'secondaryGray' },
};

export const Tertiary: Story = {
  args: { variant: 'tertiary' },
};

export const LinkGray: Story = {
  args: { variant: 'linkGray' },
};

export const LinkColor: Story = {
  args: { variant: 'linkColor' },
};

export const Small: Story = {
  args: { size: 'sm' },
};

export const Medium: Story = {
  args: { size: 'md' },
};

export const Large: Story = {
  args: { size: 'lg' },
};

export const Disabled: Story = {
  args: { disabled: true },
};

export const FullWidth: Story = {
  args: { fullWidth: true },
};

export const WithStartAdornment: Story = {
  args: {
    startAdornment: <ArrowLeft size={16} />,
  },
};

export const WithEndAdornment: Story = {
  args: {
    endAdornment: <ArrowRight size={16} />,
  },
};

export const WithBothAdornments: Story = {
  args: {
    startAdornment: <ArrowLeft size={16} />,
    endAdornment: <ArrowRight size={16} />,
  },
};

export const FullFeatured: Story = {
  args: {
    fullWidth: true,
    startAdornment: <ArrowLeft size={16} />,
    endAdornment: <ArrowRight size={16} />,
    children: 'Enviar',
  },
};
