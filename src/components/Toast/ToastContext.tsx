import { createContext, useCallback, useState } from 'react';
import * as RadixToast from '@radix-ui/react-toast';
import { nanoid } from 'nanoid';
import { X, Info } from 'lucide-react';

import { toastClass } from './variants';
import { ToastContextType, ToastItem, ToastProviderProps } from './types';

const ToastContext = createContext<ToastContextType | null>(null);

function ToastProvider(props: ToastProviderProps) {
  const { children, duration = 4000 } = props;
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const showToast = useCallback((toast: Omit<ToastItem, 'id'>) => {
    const id = nanoid();
    setToasts((prev) => [...prev, { ...toast, id }]);
  }, []);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ toast: showToast }}>
      {children}
      <RadixToast.Provider swipeDirection="right" duration={duration}>
        {toasts.map(
          ({ id, title, description, variant, size, rounded, bordered }) => (
            <RadixToast.Root
              key={id}
              defaultOpen
              duration={duration}
              className={toastClass({ variant, size, rounded, bordered })}
            >
              <Info />
              <div className="w-full flex flex-col gap-1">
                <RadixToast.Title asChild>
                  <h6>{title}</h6>
                </RadixToast.Title>
                {description && (
                  <RadixToast.Description asChild>
                    <span>{description}</span>
                  </RadixToast.Description>
                )}
              </div>
              <button
                onClick={() => removeToast(id)}
                className="flex cursor-pointer"
              >
                <X size={14} />
              </button>
            </RadixToast.Root>
          ),
        )}
        <RadixToast.Viewport className="fixed bottom-0 right-0 flex flex-col p-[25px] gap-[10px] w-[390px] max-w-[100vw] m-0 list-none z-[2147483647] outline-none" />
      </RadixToast.Provider>
    </ToastContext.Provider>
  );
}

export { ToastContext, ToastProvider };
