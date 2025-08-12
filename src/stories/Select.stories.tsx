import type { Meta, StoryObj } from '@storybook/react-vite';
import { Search, X } from 'lucide-react';

import { Select } from '../components/Select';
import { Checkbox, Chip } from '../components';

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
    description: '230 contratos encontrados',
    value: '',
    placeholder: 'Placeholder',
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

export const WithCheckboxRender: Story = {
  args: {
    renderItem: (option, index) => (
      <div
        key={index}
        className="min-h-10 flex items-center p-3 pb-4 hover:bg-gray-100 focus:bg-gray-100"
      >
        <Checkbox
          label={option.label}
          onCheckedChange={console.log}
          labelProps={{
            className: 'font-light focus:text-gray-900',
          }}
        />
      </div>
    ),
  },
};

export const WithHelperText: Story = {
  args: {
    helperText: 'Helper Text',
    label: 'Label',
    fullWidth: true,
  },
};

export const WithHelperTextAndError: Story = {
  args: {
    helperText: 'Helper Text',
    label: 'Label',
    fullWidth: true,
    error: true,
  },
};

export const WithDisabled: Story = {
  args: {
    disabled: true,
    helperText: 'Helper Text',
    label: 'Label',
  },
};

export const MultipleSelectWithChip: Story = {
  args: {
    helperText: 'Helper Text',
    label: 'Label',
    fullWidth: true,
    renderItem: (option, index) => (
      <div
        key={index}
        className="min-h-10 flex items-center p-3 pb-4 hover:bg-gray-100 focus:bg-gray-100"
      >
        <Checkbox
          label={option.label}
          onCheckedChange={console.log}
          labelProps={{
            className: 'font-light focus:text-gray-900',
          }}
        />
      </div>
    ),
    triggerContent: (
      <div className="flex p-2 gap-2 h-full w-full">
        {Array.from({ length: 2 }).map((_, idx) => (
          <Chip
            key={idx}
            label={`Label ${idx + 1}`}
            endAdornment={<X size={10} />}
          />
        ))}
      </div>
    ),
  },
};
