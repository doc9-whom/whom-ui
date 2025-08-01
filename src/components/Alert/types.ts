export type AlertVariant = 'info' | 'success' | 'alert' | 'danger';
export type AlertSize = 'sm' | 'lg';

export interface AlertProps {
  title: string;
  description?: string;
  variant?: AlertVariant;
  size?: AlertSize;
  rounded?: boolean;
  bordered?: boolean;
  icon?: React.ReactNode;
  date?: Date;
  dateFormat?: string;
}

export interface AlertTimestampProps
  extends Pick<AlertProps, 'date' | 'dateFormat'>,
    React.ComponentPropsWithoutRef<'span'> {}
