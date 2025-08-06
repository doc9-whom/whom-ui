export interface ChipProps extends React.ComponentPropsWithoutRef<'div'> {
  label: string;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
  disabled?: boolean;
}
