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
    variant: 'primary',
    size: 'lg',
    disabled: false,
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
