import { useId } from 'react';

import { CheckboxBase } from '../CheckboxBase';
import { CheckboxProps } from './types';
import { cn } from '../../utils';

function Checkbox(props: CheckboxProps) {
  const {
    id,
    className,
    classNames,
    checked,
    onCheckedChange,
    disabled,
    label,
    helperText,
    error,
    labelProps,
    ...rest
  } = props;
  const { className: labelClassName, ...restLabel } = labelProps ?? {};
  const autoId = useId();
  const checkboxId = id ?? autoId;

  return (
    <div className="flex gap-2" {...rest}>
      <CheckboxBase
        id={checkboxId}
        className={cn('mt-0.5', className)}
        classNames={classNames}
        checked={checked}
        onCheckedChange={onCheckedChange}
        disabled={disabled}
      />
      <div className="flex flex-col gap-1">
        <label
          htmlFor={checkboxId}
          className={cn(
            { hidden: !label },
            'leading-5 tracking-normal font-medium',
            labelClassName,
          )}
          {...restLabel}
        >
          {label}
        </label>
        <small
          className={cn(
            { hidden: !helperText },
            'text-gray-500 font-light text-sm leading-5',
            { 'text-rose-600': !!error },
          )}
        >
          {helperText}
        </small>
      </div>
    </div>
  );
}

export { Checkbox };
