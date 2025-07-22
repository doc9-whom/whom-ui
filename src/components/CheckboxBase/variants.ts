import { cva } from 'class-variance-authority';
import clsx from 'clsx';

const checkboxBaseVariants = cva(
  clsx(
    'focus-visible:outline-none focus-visible:ring-0',
    'bg-white h-6 rounded-md border-gray-200 border-2 aspect-square shadow-[0_1px_2px_0_#0000000D]',
    'data-[state=checked]:bg-brand-500 data-[state=checked]:border-brand-500',
    'data-[state=indeterminate]:bg-brand-500 data-[state=indeterminate]:border-brand-500',
    'hover:border-gray-300',
    'focus:outline-none focus:ring-0 focus:ring-transparent focus:shadow-[0_0_0_2px_#0A4AD61A]',
    'disabled:bg-gray-100 disabled:border-gray-300',
    'disabled:data-[state=checked]:bg-gray-300 disabled:data-[state=checked]:border-gray-300',
    'disabled:data-[state=indeterminate]:bg-gray-300 disabled:data-[state=indeterminate]:border-gray-300',
  ),

  {
    variants: {},
    defaultVariants: {},
  },
);

export { checkboxBaseVariants };
