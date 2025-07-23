import type { Meta, StoryObj } from '@storybook/react-vite';

import { Checkbox } from '../components';

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    checked: false,
    onCheckedChange: () => {},
    disabled: false,
    label: 'Label',
    helperText: 'Helper Text',
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
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {};

export const Checked: Story = {
  args: { checked: true },
};

export const Indeterminate: Story = {
  args: { checked: 'indeterminate' },
};
