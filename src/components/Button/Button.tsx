import clsx from 'clsx';

import { buttonVariants } from './variants';
import { ButtonProps } from './types';

function Button(props: ButtonProps) {
  const { className, variant, size, disabled, ...rest } = props;

  return (
    <button
      className={clsx(buttonVariants({ variant, size }), className)}
      disabled={disabled}
      {...rest}
    />
  );
}

export { Button };
