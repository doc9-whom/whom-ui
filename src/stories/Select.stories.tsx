import type { Meta, StoryObj } from '@storybook/react-vite';
import { Search, X } from 'lucide-react';

import { Select } from '../components/Select';

const meta = {
  title: 'Components/Select',
  component: Select,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    options: [
      { label: 'Select Item 1', value: '1' },
      { label: 'Select Item 2', value: '2' },
      { label: 'Select Item 3', value: '3' },
    ],
    label: '230 contratos encontrados',
    value: '',
    placeholder: 'Placeholder',
    multiple: true,
    fullWidth: true,
    startAdornment: undefined,
    endAdornment: undefined,
  },
  argTypes: {
    startAdornment: { table: { disable: true } },
    endAdornment: { table: { disable: true } },
    onChange: { action: 'changed', table: { disable: true } },
  },
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof Select>;

export const Default: Story = {};

export const WithStartAdornment: Story = {
  args: {
    startAdornment: <Search className="stroke-gray-400" size={18} />,
  },
};

export const WithEndAdornment: Story = {
  args: {
    endAdornment: <X className="stroke-gray-400" size={18} />,
  },
};

export const WithBothAdornments: Story = {
  args: {
    startAdornment: <Search className="stroke-gray-400" size={18} />,
    endAdornment: <X className="stroke-gray-400" size={18} />,
  },
};

export const WithPreSelectedValues: Story = {
  args: {
    value: '2',
  },
};
