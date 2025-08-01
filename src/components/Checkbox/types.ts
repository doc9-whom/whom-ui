import { CheckboxBaseProps } from '../CheckboxBase/types';

export interface CheckboxProps
  extends CheckboxBaseProps,
    React.ComponentPropsWithoutRef<'div'> {
  label?: string;
  helperText?: string;
  error?: boolean;
  labelProps?: React.ComponentPropsWithoutRef<'label'>;
}
