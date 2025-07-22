import type { Meta, StoryObj } from '@storybook/react-vite';

import { CheckboxBase } from '../components';

const meta = {
  title: 'Components/CheckboxBase',
  component: CheckboxBase,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    checked: false,
    onCheckedChange: () => {},
    disabled: false,
  },
  argTypes: {
    checked: {
      control: { type: 'radio' },
      options: [false, true, 'indeterminate'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
} satisfies Meta<typeof CheckboxBase>;

export default meta;
type Story = StoryObj<typeof CheckboxBase>;

export const Default: Story = {};

export const Checked: Story = {
  args: { checked: true },
};

export const Indeterminate: Story = {
  args: { checked: undefined },
};
