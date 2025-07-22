import { type VariantProps } from 'class-variance-authority';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';

import { checkboxBaseVariants } from './variants';

export type CheckboxStatus = boolean | 'indeterminate';

export interface CheckboxBaseProps
  extends Omit<CheckboxPrimitive.CheckboxProps, 'checked' | 'onCheckedChange'>,
    VariantProps<typeof checkboxBaseVariants> {
  checked?: CheckboxStatus;
  onCheckedChange: (checked: CheckboxStatus) => void;
  className?: string;
  classNames?: { root?: string; indicator?: string; icon?: string };
}
