import { cva } from 'class-variance-authority';

export const toastClass = cva(
  'text-white flex gap-2 !font-medium [&_span]:!font-light z-[9999] p-4 relative',
  {
    variants: {
      variant: {
        info: 'bg-info !text-info-foreground [&_span]:!text-gray-600 [&>svg]:!fill-info-background [&>svg]:!stroke-info',
        success:
          'bg-success !text-success-foreground [&>svg]:!fill-success-background [&>svg]:!stroke-success',
        alert:
          'bg-alert !text-alert-foreground [&>svg]:!fill-alert-background [&>svg]:!stroke-alert',
        danger:
          'bg-danger !text-danger-foreground [&>svg]:!fill-danger-background [&>svg]:!stroke-danger',
      },
      size: {
        sm: 'text-sm',
        lg: 'text-md py-5',
      },
      rounded: {
        true: 'rounded-md',
        false: 'rounded-none',
      },
      bordered: {
        true: '',
        false: '',
      },
    },
    compoundVariants: [
      {
        bordered: true,
        variant: 'info',
        className: 'border-l-2 border-gray-400',
      },
      {
        bordered: true,
        variant: 'success',
        className: 'border-l-3 border-green-600',
      },
      {
        bordered: true,
        variant: 'alert',
        className: 'border-l-2 border-amber-400',
      },
      {
        bordered: true,
        variant: 'danger',
        className: 'border-l-2 border-rose-600',
      },
    ],
    defaultVariants: {
      variant: 'info',
      size: 'sm',
      rounded: false,
      bordered: true,
    },
  },
);
