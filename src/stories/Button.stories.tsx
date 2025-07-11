import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { Button } from '../components';

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
    variant: 'default',
    size: 'md',
    disabled: false,
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'primary', 'ghost'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {};

export const Primary: Story = {
  args: { variant: 'primary' },
};

export const Ghost: Story = {
  args: { variant: 'ghost' },
};

export const Small: Story = {
  args: { size: 'sm' },
};

export const Large: Story = {
  args: { size: 'lg' },
};
