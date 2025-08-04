import { cn } from '../../utils';
import * as S from '../ui/select';
import { SelectProps } from './types';

function Select(props: SelectProps) {
  const {
    name,
    value,
    options,
    fullWidth,
    helperText,
    error,
    label,
    placeholder,
    onChange,
    // multiple,
    startAdornment,
    endAdornment,
    disabled,
  } = props;

  return (
    <div
      className={cn('flex flex-col gap-1', {
        'w-full': !!fullWidth,
      })}
    >
      <S.Select
        name={name}
        value={value}
        onValueChange={onChange}
        disabled={disabled}
      >
        <S.SelectTrigger
          className={cn(
            'h-11 rounded-xl px-3 gap-x-2 shadow-[0_1px_2px_0_#0000000D] border-1 border-gray-100 bg-white hover:border-gray-300 focus:border-brand-500 focus:shadow-[0_0_0_3px_#0A4AD61A] focus-visible:outline-none',
            {
              '!bg-gray-50 !border-gray-100': !!disabled,
              '!border-rose-600 focus:!shadow-[0_0_0_2px_#EC003F1A]': !!error,
              'w-full': !!fullWidth,
            },
          )}
        >
          {startAdornment}
          <S.SelectValue placeholder={placeholder} />
          {endAdornment}
        </S.SelectTrigger>

        <S.SelectContent>
          <S.SelectGroup>
            {label && <S.SelectLabel>{label}</S.SelectLabel>}
            {options.map((option, idx) => (
              <S.SelectItem key={idx} value={option.value}>
                {option.label}
              </S.SelectItem>
            ))}
          </S.SelectGroup>
        </S.SelectContent>
      </S.Select>

      {helperText && (
        <small
          className={cn('text-gray-500 font-light', {
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
