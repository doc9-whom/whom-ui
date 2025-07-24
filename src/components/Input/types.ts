export interface InputProps extends React.ComponentPropsWithoutRef<'input'> {
  fullWidth?: boolean;
  label?: string;
  helperText?: string;
  error?: boolean;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
}
