import type {
  ElementType,
  ComponentPropsWithoutRef,
  JSXElementConstructor,
  ReactNode,
  JSX,
} from 'react';

export type TypographyVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'subtitle1'
  | 'subtitle2'
  | 'body1'
  | 'body2'
  | 'button'
  | 'caption'
  | 'overline'
  | 'inherit';

export type TypographyWeight =
  | 'thin'
  | 'extralight'
  | 'light'
  | 'normal'
  | 'medium'
  | 'semibold'
  | 'bold'
  | 'extrabold'
  | 'black';

export type TypographyProps<T extends ElementType = 'div'> = {
  as?: keyof JSX.IntrinsicElements | JSXElementConstructor<object>;
  variant?: TypographyVariant;
  fontWeight?: TypographyWeight;
  children?: ReactNode;
} & Omit<ComponentPropsWithoutRef<T>, 'as' | 'variant' | 'size' | 'fontWeight'>;
