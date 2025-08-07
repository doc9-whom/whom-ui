import { ElementType } from 'react';

import { buttonVariants } from './variants';
import { ButtonProps } from './types';
import { cn } from '../../utils';

function Button<T extends ElementType = 'button'>(props: ButtonProps<T>) {
  const {
    as,
    className,
    variant,
    size,
    fullWidth,
    startAdornment,
    endAdornment,
    children,
    ...rest
  } = props;
  const Component = as ?? 'button';

  return (
    <Component
      className={cn(
        buttonVariants({ variant, size }),
        { 'w-full': !!fullWidth },
        className,
      )}
      {...rest}
    >
      {startAdornment}
      {children}
      {endAdornment}
    </Component>
  );
}

export { Button };
