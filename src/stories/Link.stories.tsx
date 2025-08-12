import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { Link } from '../components';
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';

const meta = {
  title: 'Components/Link',
  component: Link,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    children: 'Open link',
    href: '#',
    onClick: fn(),
    target: '_self',
    rel: undefined,
    startAdornment: undefined,
    endAdornment: undefined,
    className: undefined,
  },
  argTypes: {
    target: {
      control: { type: 'select' },
      options: ['_self', '_blank', '_parent', '_top'],
    },
    rel: { control: 'text' },
    href: { control: 'text' },
    className: { control: 'text' },
    startAdornment: { table: { disable: true } },
    endAdornment: { table: { disable: true } },
  },
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof Link>;

export const Basic: Story = {};

export const WithStartAdornment: Story = {
  args: {
    startAdornment: <ArrowLeft size={16} />,
    children: 'Back',
  },
};

export const WithEndAdornment: Story = {
  args: {
    endAdornment: <ArrowRight size={16} />,
    children: 'Continue',
  },
};

export const WithBothAdornments: Story = {
  args: {
    startAdornment: <ArrowLeft size={16} />,
    endAdornment: <ArrowRight size={16} />,
    children: 'Navigate',
  },
};

export const External: Story = {
  args: {
    href: 'https://example.com',
    target: '_blank',
    rel: 'noopener noreferrer',
    endAdornment: <ExternalLink size={16} />,
    children: 'Open in new tab',
  },
};

export const LongText: Story = {
  args: {
    children:
      'This is a very long link text that should wrap nicely without breaking the layout or the underline.',
    className: 'max-w-xs text-center',
  },
};

export const CustomClass: Story = {
  args: {
    children: 'Muted link',
    className: 'text-gray-600 hover:text-gray-900',
  },
};
