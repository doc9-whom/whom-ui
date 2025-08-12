import { cva } from 'class-variance-authority';
import { cn } from '../../utils';

const separatorVariants = cva('select-none', {
  variants: {
    variant: {
      circle: cn('bg-gray-300 border-gray-300 rounded-full h-1 w-1'),
      square: cn('bg-gray-300 border-gray-300 h-1 w-1'),
      horizontal: cn('text-gray-300 w-full h-[1px]'),
      vertical: cn('bg-gray-300 w-[1px] h-full'),
    },
    lineStyle: {
      solid: cn('border-solid'),
      dashed: cn('border-dashed'),
      dotted: cn(
        'border-0 h-[2px] rounded-full',
        'bg-[repeating-linear-gradient(to_right,#D1D5DB_0,#D1D5DB_2px,transparent_1px,transparent_8px)]',
      ),
    },
  },
  defaultVariants: {
    variant: 'horizontal',
    lineStyle: 'solid',
  },
});

export { separatorVariants };
