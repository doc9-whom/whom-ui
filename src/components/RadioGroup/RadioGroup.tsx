import React from 'react';
import * as RadioGroup from '@radix-ui/react-radio-group';

import { RadioGroupProps } from './types';
import { cn } from '../../utils';

const RadioGroupComponent = React.forwardRef<HTMLDivElement, RadioGroupProps>(
  (props, ref) => {
    const { items, error, labelProps = {}, ...rest } = props;
    const { className: labelClassName, ...restLabel } = labelProps;

    return (
      <RadioGroup.Root ref={ref} className="flex flex-col gap-3" {...rest}>
        {items.map(
          (
            { className: itemClassName, label, helperText, ...restItem },
            index,
          ) => (
            <div key={index} className="flex items-start gap-3">
              <RadioGroup.Item
                className={cn(
                  'mt-1 w-3.5 aspect-square rounded-full border flex items-center justify-center',
                  'border-gray-200 bg-white shadow-[0_1px_2px_0_#1212170D]',
                  'data-[state=checked]:border-[3.5px] data-[state=checked]:border-brand-500',
                  'hover:border-gray-300',
                  'focus-visible:outline-none focus:shadow-[0_0_0_2px_#0A4AD61A]',
                  'disabled:border-gray-300 disabled:bg-gray-100 disabled:data-[state=checked]:border-white disabled:data-[state=checked]:bg-gray-300 disabled:data-[state=checked]:shadow-[0_0_0_2px_#D1D5DB]',
                  itemClassName,
                )}
                style={{
                  boxShadow: '',
                }}
                {...restItem}
              />
              <div className="flex flex-col">
                <label
                  className={cn(
                    { hidden: !label },
                    'leading-5 tracking-normal font-medium',
                    'text-sm text-gray-800 cursor-pointer',
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
          ),
        )}
      </RadioGroup.Root>
    );
  },
);

export { RadioGroupComponent as RadioGroup };
