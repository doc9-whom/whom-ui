import type { Meta, StoryObj } from '@storybook/react-vite';
import { Divider } from '../components';

const meta = {
  title: 'Components/Divider',
  component: Divider,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    children: 'or',
    separatorProps: {
      variant: 'horizontal',
      lineStyle: 'solid',
    },
    style: { width: 480 },
    className: undefined,
  },
  argTypes: {
    children: { control: 'text' },
    className: { control: 'text' },
    separatorProps: {
      variant: {
        control: { type: 'select' },
        options: ['horizontal', 'vertical', 'circle', 'square'],
      },
      lineStyle: {
        control: { type: 'select' },
        options: ['solid', 'dashed', 'dotted'],
      },
    },
  },
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof Divider>;

export const Horizontal: Story = {};

export const HorizontalDashed: Story = {
  args: {
    separatorProps: { variant: 'horizontal', lineStyle: 'dashed' },
  },
};

export const HorizontalDotted: Story = {
  args: {
    separatorProps: { variant: 'horizontal', lineStyle: 'dotted' },
  },
};

export const WithLongText: Story = {
  args: {
    children: 'continue to next step',
  },
};

export const Vertical: Story = {
  args: {
    children: 'OR',
    separatorProps: { variant: 'vertical', lineStyle: 'solid' },
    className: 'flex-col h-40',
    style: { width: 240 },
  },
};

export const Circles: Story = {
  args: {
    children: 'OR',
    separatorProps: { variant: 'circle', lineStyle: 'solid' },
  },
};

export const Squares: Story = {
  args: {
    children: 'OR',
    separatorProps: { variant: 'square', lineStyle: 'solid' },
  },
};

export const FullFeatured: Story = {
  args: {
    children: 'Proceed',
    separatorProps: { variant: 'horizontal', lineStyle: 'dashed' },
    style: { width: 640 },
  },
};
