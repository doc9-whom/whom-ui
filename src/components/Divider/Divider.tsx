import React from 'react';

import type { DividerProps } from './types';
import { Separator } from '../Separator';
import { cn } from '../../utils';

const Divider = React.forwardRef<HTMLDivElement, DividerProps>((props, ref) => {
  const { className, children, separatorProps = {}, ...rest } = props;

  return (
    <div
      ref={ref}
      className={cn('flex items-center gap-2 text-nowrap', className)}
      {...rest}
    >
      <Separator {...separatorProps} />
      {children}
      <Separator {...separatorProps} />
    </div>
  );
});

export { Divider };
