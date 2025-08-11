import { JSX } from 'react';

import { SelectTrigger } from '../ui/select';

export interface SelectOptionProps {
  label: string;
  value: string;
}

export interface SelectProps {
  id?: string;
  name?: string;
  value?: string;
  options: SelectOptionProps[];
  fullWidth?: boolean;
  placeholder?: string;
  label?: string;
  description?: string;
  helperText?: string;
  renderItem?: (option: SelectOptionProps, index: number) => React.ReactElement;
  renderTriggerContent?: () => JSX.Element;
  error?: boolean;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
  onChange?: (value: string) => void;
  disabled?: boolean;
  triggerProps?: React.ComponentPropsWithoutRef<typeof SelectTrigger>;
}
