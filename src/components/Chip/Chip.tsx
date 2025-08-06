import { cn } from '../../utils';
import { ChipProps } from './types';

function Chip(props: ChipProps) {
  const { label, startAdornment, endAdornment, className, ...rest } = props;

  return (
    <div
      className={cn(
        'flex justify-between items-center gap-2 p-2 bg-gray-100 text-xs rounded-lg',
        className,
      )}
      {...rest}
    >
      {startAdornment}
      {label}
      {endAdornment}
    </div>
  );
}

export { Chip };
