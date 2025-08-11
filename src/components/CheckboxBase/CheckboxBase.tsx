import { Fragment, useCallback } from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { CheckIcon, MinusIcon } from 'lucide-react';

import { checkboxBaseVariants } from './variants';
import {
  CheckboxBaseComponentProps,
  CheckboxIndicatorIconProps,
} from './types';
import { cn } from '../../utils';

function CheckboxIndicatorIcon(props: CheckboxIndicatorIconProps) {
  const { checked, className, variant } = props;

  if (variant === 'circle') return <Fragment />;

  if (checked === 'indeterminate')
    return (
      <MinusIcon className={cn('h-2.5 w-2.5', className)} strokeWidth={4} />
    );

  return <CheckIcon className={cn('h-2.5 w-2.5', className)} strokeWidth={4} />;
}

function CheckboxBase(props: CheckboxBaseComponentProps) {
  const {
    checked,
    onCheckedChange,
    disabled,
    className,
    classNames = {},
    variant,
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
      className={cn(checkboxBaseVariants({ variant, className }), root)}
      checked={checked}
      onCheckedChange={handleChange}
      disabled={disabled}
      {...rest}
    >
      <CheckboxPrimitive.Indicator
        className={cn('flex items-center justify-center text-white', indicator)}
      >
        <CheckboxIndicatorIcon checked={checked} className={icon} />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}

export { CheckboxBase };
