import clsx from 'clsx';
import { CheckboxBase } from '../CheckboxBase';
import { CheckboxProps } from './types';

function Checkbox(props: CheckboxProps) {
  const {
    className,
    classNames,
    checked,
    onCheckedChange,
    disabled,
    label,
    helperText,
    error,
    ...rest
  } = props;

  return (
    <div className="flex gap-2" {...rest}>
      <CheckboxBase
        className={clsx('mt-0.5', className)}
        classNames={classNames}
        checked={checked}
        onCheckedChange={onCheckedChange}
        disabled={disabled}
      />
      <div className="flex flex-col gap-1">
        <label
          className={clsx(
            { hidden: !label },
            'leading-5 tracking-normal font-medium',
          )}
        >
          {label}
        </label>
        <small
          className={clsx(
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
