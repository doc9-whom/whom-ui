import { useContext } from 'react';

import { ToastContext } from './ToastContext';
import { ToastItem } from './types';

function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error('useToast must be used inside ToastProvider');

  const base = ctx.toast;

  const withVariant =
    (variant: ToastItem['variant']) =>
    (toast: Omit<ToastItem, 'id' | 'variant'>) =>
      base({ ...toast, variant });

  return {
    toast: base,
    info: withVariant('info'),
    success: withVariant('success'),
    alert: withVariant('alert'),
    danger: withVariant('danger'),
  };
}

export { useToast };
