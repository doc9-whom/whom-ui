import type { SeparatorProps } from '../Separator/types';

export interface DividerProps extends React.ComponentPropsWithoutRef<'div'> {
  separatorProps?: SeparatorProps;
}
