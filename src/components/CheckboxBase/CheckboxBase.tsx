import { useCallback } from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { CheckIcon, MinusIcon } from 'lucide-react';

import { checkboxBaseVariants } from './variants';
import { CheckboxBaseComponentProps } from './types';
import { cn } from '../../utils';

function CheckboxBase(props: CheckboxBaseComponentProps) {
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
      className={cn(checkboxBaseVariants({}), className, root)}
      checked={checked}
      onCheckedChange={handleChange}
      disabled={disabled}
      {...rest}
    >
      <CheckboxPrimitive.Indicator
        className={cn('flex items-center justify-center text-white', indicator)}
      >
        {checked === 'indeterminate' ? (
          <MinusIcon className={cn('h-2.5 w-2.5', icon)} strokeWidth={4} />
        ) : (
          <CheckIcon className={cn('h-2.5 w-2.5', icon)} strokeWidth={4} />
        )}
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}

export { CheckboxBase };
