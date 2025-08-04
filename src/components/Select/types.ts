export interface SelectOptionProps {
  label: string;
  value: string;
}

export interface SelectProps {
  name?: string;
  value?: string;
  options: SelectOptionProps[];
  fullWidth?: boolean;
  placeholder?: string;
  label?: string;
  helperText?: string;
  error?: boolean;
  multiple?: boolean;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
  onChange?: (value: string) => void;
  disabled?: boolean;
}
