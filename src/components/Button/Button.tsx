import React from 'react';

import { buttonVariants } from './variants';
import { ButtonProps } from './types';
import { cn } from '../../utils';

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props: ButtonProps, ref) => {
    const {
      className,
      variant,
      size,
      disabled,
      fullWidth,
      startAdornment,
      endAdornment,
      children,
      ...rest
    } = props;

    return (
      <button
        className={cn(
          buttonVariants({ variant, size }),
          { 'w-full': !!fullWidth },
          className,
        )}
        disabled={disabled}
        {...rest}
        ref={ref}
      >
        {startAdornment}
        <span>{children}</span>
        {endAdornment}
      </button>
    );
  },
);

export { Button };
