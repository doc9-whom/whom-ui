import { type VariantProps } from 'class-variance-authority';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';

import { checkboxBaseVariants } from './variants';

export interface CheckboxIndicatorIconProps
  extends VariantProps<typeof checkboxBaseVariants> {
  checked?: CheckboxStatus;
  className?: string;
}

export type CheckboxStatus = boolean | 'indeterminate';

export type CheckboxVariant = 'square' | 'circle';

export interface CheckboxBaseProps {
  checked?: CheckboxStatus;
  onCheckedChange: (checked: CheckboxStatus) => void;
  className?: string;
  classNames?: { icon?: string; root?: string; indicator?: string };
  disabled?: boolean;
}

export interface CheckboxBaseComponentProps
  extends CheckboxBaseProps,
    Omit<CheckboxPrimitive.CheckboxProps, 'checked' | 'onCheckedChange'>,
    VariantProps<typeof checkboxBaseVariants> {}
