import { useId } from 'react';
import { cn } from '../../utils';
import * as S from '../ui/select';
import { SelectProps } from './types';

function Select(props: SelectProps) {
  const {
    id,
    name,
    value,
    options,
    fullWidth,
    helperText,
    error,
    description,
    label,
    placeholder,
    onChange,
    startAdornment,
    endAdornment,
    disabled,
    renderItem,
    renderTriggerContent,
    triggerProps,
  } = props;
  const { className: triggerClassName, ...restTriggerProps } =
    triggerProps ?? {};

  const autoId = useId();
  const selectId = id ?? autoId;

  const TriggerContent =
    renderTriggerContent ?? (() => <S.SelectValue placeholder={placeholder} />);

  return (
    <div
      className={cn('flex flex-col', {
        'w-full': !!fullWidth,
      })}
    >
      <label
        htmlFor={selectId}
        className={cn(
          {
            hidden: !label,
            'text-rose-600': !!error,
          },
          'text-gray-900 mb-1 text-sm',
        )}
      >
        {label}
      </label>
      <S.Select
        name={name}
        value={value}
        onValueChange={onChange}
        disabled={disabled}
      >
        <S.SelectTrigger
          id={selectId}
          className={cn(
            'h-11 rounded-xl px-3 gap-x-2 shadow-[0_1px_2px_0_#0000000D] border-1 border-gray-100 bg-white hover:border-gray-300 focus:border-brand-500 focus:shadow-[0_0_0_3px_#0A4AD61A] focus-visible:outline-none text-sm font-light',
            {
              '!bg-gray-50 !border-gray-100 text-gray-400': !!disabled,
              '!border-rose-600 focus:!shadow-[0_0_0_2px_#EC003F1A]': !!error,
              'w-full': !!fullWidth,
            },
            triggerClassName,
          )}
          {...restTriggerProps}
        >
          {startAdornment}
          <TriggerContent />
          {endAdornment}
        </S.SelectTrigger>

        <S.SelectContent>
          <S.SelectGroup>
            {description && <S.SelectLabel>{description}</S.SelectLabel>}
            {options.map((option, idx) => (
              <S.SelectItem
                key={idx}
                value={option.value}
                className={cn({ contents: !!renderItem })}
              >
                {renderItem?.(option, idx) ?? option.label}
              </S.SelectItem>
            ))}
          </S.SelectGroup>
        </S.SelectContent>
      </S.Select>

      {helperText && (
        <small
          className={cn('text-gray-500 font-light mt-1', {
            'text-rose-600': !!error,
          })}
        >
          {helperText}
        </small>
      )}
    </div>
  );
}

export { Select };
