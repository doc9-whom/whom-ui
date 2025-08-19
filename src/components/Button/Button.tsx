import { ElementType } from 'react';

import { buttonVariants } from './variants';
import { ButtonProps } from './types';
import { cn } from '../../utils';
import { Loader2Icon } from 'lucide-react';

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
    loading,
    disabled,
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
      disabled={loading ?? disabled}
      {...rest}
    >
      {startAdornment}
      {loading ? (
        <Loader2Icon size={16} color="white" className="animate-spin" />
      ) : (
        children
      )}
      {endAdornment}
    </Component>
  );
}

export { Button };
