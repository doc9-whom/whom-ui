import { cva } from 'class-variance-authority';
import { cn } from '../../utils';

export const typographyVariants = cva('', {
  variants: {
    variant: {
      h1: cn('text-6xl leading-tight'),
      h2: cn('text-5xl leading-tight'),
      h3: cn('text-4xl leading-snug'),
      h4: cn('text-3xl leading-snug'),
      h5: cn('text-2xl'),
      h6: cn('text-xl'),
      subtitle1: cn('text-lg'),
      subtitle2: cn('text-base'),
      body1: cn('text-base'),
      body2: cn('text-sm'),
      button: cn('text-sm uppercase tracking-wide'),
      caption: cn('text-xs'),
      overline: cn('text-xs uppercase tracking-wider'),
      inherit: '',
    },
    fontWeight: {
      thin: cn('font-thin'),
      extralight: cn('font-extralight'),
      light: cn('font-light'),
      normal: cn('font-normal'),
      medium: cn('font-medium'),
      semibold: cn('font-semibold'),
      bold: cn('font-bold'),
      extrabold: cn('font-extrabold'),
      black: cn('font-black'),
    },
  },
  defaultVariants: {
    variant: 'body1',
    fontWeight: 'normal',
  },
});
