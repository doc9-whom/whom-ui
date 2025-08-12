import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { Separator } from '../components';

const meta = {
  title: 'Components/Separator',
  component: Separator,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    variant: 'horizontal',
    lineStyle: 'solid',
    onClick: fn(),
    style: { width: 320 },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical', 'circle', 'square'],
    },
    lineStyle: {
      control: { type: 'select' },
      options: ['solid', 'dashed', 'dotted'],
    },
    className: { table: { disable: true } },
  },
} satisfies Meta<typeof Separator>;

export default meta;
type Story = StoryObj<typeof Separator>;

export const Horizontal: Story = {};

export const HorizontalDashed: Story = {
  args: { lineStyle: 'dashed' },
};

export const HorizontalDotted: Story = {
  args: { lineStyle: 'dotted' },
};

export const Vertical: Story = {
  args: {
    variant: 'vertical',
    style: { height: 120 },
  },
};

export const Circle: Story = {
  args: {
    variant: 'circle',
    style: { width: 8, height: 8 },
  },
};

export const Square: Story = {
  args: {
    variant: 'square',
    style: { width: 8, height: 8 },
  },
};

export const HorizontalWide: Story = {
  args: {
    variant: 'horizontal',
    lineStyle: 'solid',
    style: { width: 640 },
  },
};

export const VerticalTall: Story = {
  args: {
    variant: 'vertical',
    lineStyle: 'solid',
    style: { height: 240 },
  },
};
