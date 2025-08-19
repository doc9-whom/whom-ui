import type { VariantProps } from 'class-variance-authority';

import type { buttonVariants } from './variants';
import {
  ComponentPropsWithoutRef,
  ElementType,
  JSX,
  JSXElementConstructor,
} from 'react';

export type ButtonVariantProps = VariantProps<typeof buttonVariants>;

export type ButtonProps<T extends ElementType = 'button'> = {
  as?: keyof JSX.IntrinsicElements | JSXElementConstructor<unknown>;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
  fullWidth?: boolean;
  loading?: boolean;
} & ButtonVariantProps &
  Omit<
    ComponentPropsWithoutRef<T>,
    'as' | 'startAdornment' | 'endAdornment' | 'fullWidth'
  >;
