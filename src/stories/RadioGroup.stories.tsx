import type { Meta, StoryObj } from '@storybook/react-vite';

import { RadioGroup } from '../components';

const meta = {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    value: 'option1',
    onValueChange: () => {},
    items: [
      { value: 'option1', label: 'Opção 1', helperText: 'Helper Text' },
      { value: 'option2', label: 'Opção 2', helperText: 'Helper Text' },
      { value: 'option3', label: 'Opção 3', helperText: 'Helper Text' },
    ],
    disabled: false,
  },
  argTypes: {
    value: {
      control: 'radio',
      options: ['option1', 'option2', 'option3'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {};

export const Option2Selected: Story = {
  args: {
    value: 'option2',
  },
};

export const Option3Selected: Story = {
  args: {
    value: 'option3',
  },
};
