import type { VariantProps } from 'class-variance-authority';

import type { buttonVariants } from './variants';

export type ButtonVariantProps = VariantProps<typeof buttonVariants>;

export interface ButtonProps
  extends React.ComponentPropsWithoutRef<'button'>,
    ButtonVariantProps {
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
  fullWidth?: boolean;
}
