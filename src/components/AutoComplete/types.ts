export interface AutoCompleteOptionProps {
  label: string;
  value: string;
}
export interface AutoCompleteProps {
  id?: string;
  name?: string;
  value?: string;
  options: AutoCompleteOptionProps[];
  fullWidth?: boolean;
  placeholder?: string;
  label?: string;
  description?: string;
  helperText?: string;
  renderItem?: (
    option: AutoCompleteOptionProps,
    index: number,
  ) => React.ReactElement;
  error?: boolean;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
  onChange?: (value: string) => void;
  disabled?: boolean;
  triggerProps?: React.ComponentPropsWithoutRef<'div'>;
}
