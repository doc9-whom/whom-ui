import React from 'react';

import { cn } from '../../utils';
import type { LinkProps } from './types';

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  (props: LinkProps, ref) => {
    const { startAdornment, endAdornment, className, children, ...rest } =
      props;

    return (
      <a
        ref={ref}
        className={cn(
          'flex items-center justify-center gap-2 hover:underline cursor-pointer text-brand-600',
          className,
        )}
        {...rest}
      >
        {startAdornment}
        {children}
        {endAdornment}
      </a>
    );
  },
);

export { Link };
