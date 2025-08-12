export type SeparatorVariant = 'circle' | 'square' | 'vertical' | 'horizontal';
export type SeparatorLineStyle = 'dotted' | 'dashed' | 'solid';

export interface SeparatorProps extends React.ComponentPropsWithoutRef<'hr'> {
  variant?: SeparatorVariant;
  lineStyle?: SeparatorLineStyle;
}
