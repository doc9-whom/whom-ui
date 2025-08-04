import { cva } from 'class-variance-authority';
import { cn } from '../../utils';

const buttonVariants = cva(
  cn(
    'transition-all duration-100 cursor-pointer',
    'active:scale-[0.97] active:brightness-95',
    'rounded-xl text-sm font-medium flex gap-2 items-center justify-between',
  ),
  {
    variants: {
      variant: {
        primary: cn(
          'bg-brand-500 text-white',
          'hover:bg-brand-600',
          'focus:outline-none focus:shadow-[0_0_0_3px_#0a4ad633,0_0_0_1px_var(--color-brand-600),0_1px_2px_0_#0000000d,inset_0_0.75px_0_0_#ffffff33]',
          'disabled:bg-gray-300',
        ),
        primaryGray: cn(
          'bg-gray-900 text-white',
          'hover:bg-gray-800',
          'focus:shadow-[0_0_0_3px_#1018281A]',
          'disabled:bg-gray-300',
        ),
        secondaryOutline: cn(
          'bg-white border-1 border-gray-200 shadow-xs text-gray-900',
          'hover:bg-gray-100',
          'focus:shadow-[0_0_0_3px_#1018281A]',
          'disabled:shadow-[_0_1px_2px_0_#1212170D] disabled:text-text-disabled disabled:bg-white',
        ),
        secondaryGray: cn(
          'bg-gray-100 text-gray-900',
          'hover:bg-gray-200',
          'focus:shadow-[0_0_0_3px_#1018281A] focus:bg-gray-200',
          'disabled:text-gray-400 disabled:bg-white',
        ),
        tertiary: cn(
          'text-gray-900',
          'hover:bg-gray-100',
          'focus:shadow-[0_0_0_3px_#1018281A] focus:bg-white',
          'disabled:text-gray-400 disabled:bg-white',
        ),
        linkGray: cn(
          'text-gray-900 underline-offset-2',
          'hover:text-brand-500 hover:underline',
          'focus:underline',
          'disabled:text-text-disabled disabled:no-underline',
        ),
        linkColor: cn(
          'text-brand-500 underline-offset-2',
          'hover:text-brand-600 hover:underline',
          'focus:underline',
          'disabled:text-[#0052554D] disabled:no-underline',
        ),
      },
      size: {
        lg: 'text-base h-12 px-6 py-3',
        md: 'text-sm h-10 px-4 py-2',
        sm: 'text-xs h-8 px-3 py-1.5',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'lg',
    },
  },
);

export { buttonVariants };
