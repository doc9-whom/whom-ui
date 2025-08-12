import React from 'react';

import type { SeparatorProps } from './types';
import { separatorVariants } from './variants';

const Separator = React.forwardRef<HTMLHRElement, SeparatorProps>(
  (props: SeparatorProps, ref) => {
    const { variant, className, lineStyle, ...rest } = props;

    return (
      <hr
        ref={ref}
        className={separatorVariants({ variant, lineStyle, className })}
        {...rest}
      />
    );
  },
);

export { Separator };
