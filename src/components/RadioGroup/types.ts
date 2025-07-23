import { Root, Item } from '@radix-ui/react-radio-group';

export interface RadioItemProps
  extends React.ComponentPropsWithoutRef<typeof Item> {
  label?: string;
  helperText?: string;
}

export interface RadioGroupProps
  extends React.ComponentPropsWithoutRef<typeof Root> {
  items: RadioItemProps[];
  labelProps?: React.ComponentPropsWithoutRef<'label'>;
  error?: boolean;
}
