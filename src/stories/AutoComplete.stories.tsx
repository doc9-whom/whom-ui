import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { AutoComplete } from '../components';

import { Search, X } from 'lucide-react';
import { AutoCompleteProps } from '../components/AutoComplete/types';

const OPTIONS: AutoCompleteProps['options'] = [
  { label: 'Apple', value: 'apple' },
  { label: 'Apricot', value: 'apricot' },
  { label: 'Avocado', value: 'avocado' },
  { label: 'Banana', value: 'banana' },
  { label: 'Blackberry', value: 'blackberry' },
  { label: 'Blueberry', value: 'blueberry' },
  { label: 'Cherry', value: 'cherry' },
  { label: 'Grape', value: 'grape' },
  { label: 'Kiwi', value: 'kiwi' },
  { label: 'Lemon', value: 'lemon' },
  { label: 'Mango', value: 'mango' },
  { label: 'Orange', value: 'orange' },
  { label: 'Peach', value: 'peach' },
  { label: 'Pear', value: 'pear' },
  { label: 'Pineapple', value: 'pineapple' },
  { label: 'Strawberry', value: 'strawberry' },
  { label: 'Watermelon', value: 'watermelon' },
];

const meta = {
  title: 'Components/AutoComplete',
  component: AutoComplete,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    label: undefined,
    helperText: undefined,
    description: undefined,
    placeholder: 'Type to search…',
    value: '',
    options: OPTIONS,
    onChange: fn(),
    disabled: false,
    error: false,
    fullWidth: false,
    startAdornment: undefined,
    endAdornment: undefined,
  },
  argTypes: {
    disabled: { control: 'boolean' },
    error: { control: 'boolean' },
    fullWidth: { control: 'boolean' },

    renderItem: { table: { disable: true } },
    triggerProps: { table: { disable: true } },
    startAdornment: { table: { disable: true } },
    endAdornment: { table: { disable: true } },
    options: { table: { disable: true } },
    onChange: { action: 'change' },
  },
} satisfies Meta<typeof AutoComplete>;

export default meta;
type Story = StoryObj<typeof AutoComplete>;

export const Basic: Story = {};

export const WithLabel: Story = {
  args: { label: 'Fruit' },
};

export const WithDescription: Story = {
  args: {
    label: 'Fruit',
    description: 'Common fruits (A–W). Start typing to filter.',
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Fruit',
    helperText: 'Pick one fruit from the list.',
  },
};

export const ErrorState: Story = {
  args: {
    label: 'Fruit',
    helperText: 'This field is required.',
    error: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Fruit',
    disabled: true,
    value: 'apple',
  },
};

export const FullWidth: Story = {
  args: {
    label: 'Fruit',
    fullWidth: true,
  },
};

export const WithStartAdornment: Story = {
  args: {
    label: 'Search fruit',
    startAdornment: <Search className="h-4 w-4 opacity-60" />,
  },
};

export const WithEndAdornment: Story = {
  args: {
    label: 'Search fruit',
    endAdornment: <X className="h-4 w-4 opacity-60" />,
  },
};

export const WithBothAdornments: Story = {
  args: {
    label: 'Search fruit',
    startAdornment: <Search className="h-4 w-4 opacity-60" />,
    endAdornment: <X className="h-4 w-4 opacity-60" />,
  },
};

export const ManyOptions: Story = {
  args: {
    label: 'Cities',
    placeholder: 'Type a city…',
    options: Array.from({ length: 200 }).map((_, i) => ({
      label: `City ${i + 1}`,
      value: `city-${i + 1}`,
    })),
  },
};

export const CustomItemRenderer: Story = {
  args: {
    label: 'Fruit',
    renderItem: (opt) => (
      <div className="flex items-center gap-2 py-2">
        <span className="font-medium">{opt.label}</span>
        <span className="text-xs text-gray-500">({opt.value})</span>
      </div>
    ),
  },
};
