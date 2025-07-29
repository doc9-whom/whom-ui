import type { Meta, StoryObj } from '@storybook/react-vite';
import { Search, X } from 'lucide-react';

import { Input } from '../components';

const meta = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    label: 'Nome',
    helperText: 'Digite seu nome completo',
    placeholder: 'Ex: José da Silva',
    fullWidth: true,
    error: false,
    disabled: false,
    startAdornment: undefined,
    endAdornment: undefined,
  },
  argTypes: {
    label: { control: 'text' },
    helperText: { control: 'text' },
    placeholder: { control: 'text' },
    fullWidth: { control: 'boolean' },
    error: { control: 'boolean' },
    disabled: { control: 'boolean' },
    startAdornment: { table: { disable: true } },
    endAdornment: { table: { disable: true } },
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {};

export const ErrorState: Story = {
  args: {
    error: true,
    helperText: 'Esse campo é obrigatório.',
  },
};

export const WithStartAdornment: Story = {
  args: {
    startAdornment: <Search className="stroke-gray-400" size={18} />,
  },
};

export const WithLabeledStartAdornment: Story = {
  args: {
    startAdornment: (
      <span className="text-gray-400 border-r-1 border-r-gray-300 text-sm pr-2 font-light flex items-center h-4/6">
        https://
      </span>
    ),
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

export const WithoutHelperText: Story = {
  args: {
    helperText: '',
  },
};

export const WithoutLabel: Story = {
  args: {
    label: '',
  },
};

export const Narrow: Story = {
  args: {
    fullWidth: false,
  },
};
