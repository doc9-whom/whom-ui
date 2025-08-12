import type { ElementType } from 'react';

import type { TypographyProps } from './types';
import { typographyVariants } from './variants';

function Typography<T extends ElementType = 'div'>(props: TypographyProps<T>) {
  const {
    as,
    variant = 'body1',
    className,
    fontWeight,
    children,
    ...rest
  } = props;
  const Component = as ?? 'div';

  return (
    <Component
      className={typographyVariants({ variant, fontWeight, className })}
      {...rest}
    >
      {children}
    </Component>
  );
}

export { Typography };
