import React from 'react';
import clsx from 'clsx';

import { buttonVariants } from './variants';
import { ButtonProps } from './types';

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
        className={clsx(
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
