import { useCallback } from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { CheckIcon, MinusIcon } from 'lucide-react';
import clsx from 'clsx';

import { checkboxBaseVariants } from './variants';
import { CheckboxBaseProps } from './types';

function CheckboxBase(props: CheckboxBaseProps) {
  const {
    checked,
    onCheckedChange,
    disabled,
    className,
    classNames = {},
    ...rest
  } = props;
  const { root = '', indicator = '', icon = '' } = classNames;

  const handleChange = useCallback(
    (value: boolean) => {
      if (checked === 'indeterminate') onCheckedChange(true);
      else onCheckedChange(value);
    },
    [checked, onCheckedChange],
  );

  return (
    <CheckboxPrimitive.Root
      className={clsx(checkboxBaseVariants({}), className, root)}
      checked={checked}
      onCheckedChange={handleChange}
      disabled={disabled}
      {...rest}
    >
      <CheckboxPrimitive.Indicator
        className={clsx(
          'flex items-center justify-center text-white',
          indicator,
        )}
      >
        {checked === 'indeterminate' ? (
          <MinusIcon className={clsx('h-3.5 w-3.5', icon)} strokeWidth={3} />
        ) : (
          <CheckIcon className={clsx('h-3.5 w-3.5', icon)} strokeWidth={3} />
        )}
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}

export { CheckboxBase };
