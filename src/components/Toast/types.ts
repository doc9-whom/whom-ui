export type ToastVariant = 'info' | 'success' | 'alert' | 'danger';
export type ToastSize = 'sm' | 'lg';

export interface ToastItem {
  id: string;
  title: string;
  description?: string;
  variant?: ToastVariant;
  size?: ToastSize;
  rounded?: boolean;
  bordered?: boolean;
}

export interface ToastContextType {
  toast: (toast: Omit<ToastItem, 'id'>) => void;
}

export interface ToastProviderProps {
  children: React.ReactNode;
  duration?: number;
  autoClose?: number;
}
