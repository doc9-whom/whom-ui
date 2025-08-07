import React, { useId } from 'react';

import { InputProps } from './types';
import { cn } from '../../utils';

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    id,
    className,
    fullWidth,
    label,
    helperText,
    error,
    startAdornment,
    endAdornment,
    disabled,
    ...rest
  } = props;

  const autoId = useId();
  const inputId = id ?? autoId;

  return (
    <div
      className={cn(
        'flex flex-col gap-1',
        {
          'w-full': !!fullWidth,
        },
        className,
      )}
    >
      <label
        htmlFor={inputId}
        className={cn({ hidden: !label }, 'text-gray-900')}
      >
        {label}
      </label>
      <div
        className={cn(
          'flex items-center',
          'bg-white border-1 border-gray-100 px-3 rounded-xl h-11 gap-x-2 shadow-[0_1px_2px_0_#0000000D]',
          'hover:border-gray-300',
          'focus:border-brand-500 focus:shadow-[0_0_0_3px_#0A4AD61A] focus-visible:outline-none',
          {
            '!bg-gray-50 !border-gray-100': !!disabled,
            'w-full': !!fullWidth,
            '!border-rose-600 focus:!shadow-[0_0_0_2px_#EC003F1A]': !!error,
          },
        )}
      >
        {startAdornment}
        <input
          id={inputId}
          ref={ref}
          disabled={disabled}
          className={cn(
            'w-full h-full focus-visible:outline-none placeholder-gray-400 placeholder:font-light',
          )}
          {...rest}
        />
        {endAdornment}
      </div>
      <small
        className={cn(
          { hidden: !helperText, '!text-rose-600': !!error },
          'text-gray-500 font-light',
        )}
      >
        {helperText}
      </small>
    </div>
  );
});

export { Input };
