import {
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  useCallback,
} from 'react';
import { cn } from '../../utils';
import { AutoCompleteProps } from './types';
import { Input } from '../Input';

function AutoComplete(props: AutoCompleteProps) {
  const {
    id,
    name,
    value,
    options,
    fullWidth,
    helperText,
    error,
    label,
    placeholder,
    onChange,
    startAdornment,
    endAdornment,
    disabled,
    renderItem,
    triggerProps,
    description,
  } = props;

  const { className: triggerClassName, ...restTriggerProps } =
    triggerProps ?? {};
  const autoId = useId();
  const inputId = id ?? autoId;

  const inputRef = useRef<HTMLInputElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const listRef = useRef<HTMLDivElement | null>(null);

  const selected = useMemo(
    () => options.find((o) => o.value === value) ?? null,
    [options, value],
  );

  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState(selected?.label ?? '');
  const [activeIndex, setActiveIndex] = useState<number>(-1);

  const [placement, setPlacement] = useState<'bottom' | 'top'>('bottom');
  const [popoverMaxH, setPopoverMaxH] = useState<number>(240);

  useEffect(() => {
    if (!open) setQuery(selected?.label ?? '');
  }, [selected?.label, open]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return options;
    return options.filter(
      (o) =>
        o.label.toLowerCase().includes(q) ||
        String(o.value).toLowerCase().includes(q),
    );
  }, [options, query]);

  const openList = useCallback(() => setOpen(true), []);
  const closeList = useCallback(() => {
    setOpen(false);
    setActiveIndex(-1);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onDocMouseDown = (e: MouseEvent) => {
      if (!wrapperRef.current) return;
      const target = e.target as Node;
      if (!wrapperRef.current.contains(target)) closeList();
    };
    document.addEventListener('mousedown', onDocMouseDown, true);
    return () =>
      document.removeEventListener('mousedown', onDocMouseDown, true);
  }, [open, closeList]);

  const selectValue = useCallback(
    (val: string) => {
      if (disabled) return;
      if (val !== value) onChange?.(val);
      closeList();
      requestAnimationFrame(() => inputRef.current?.focus());
    },
    [disabled, value, onChange, closeList],
  );

  const updatePlacement = useCallback(() => {
    if (!inputRef.current) return;
    const MARGIN = 8;
    const MAX = 240;
    const rect = inputRef.current.getBoundingClientRect();
    const below = window.innerHeight - rect.bottom;
    const above = rect.top;

    let desired = MAX;
    if (listRef.current) {
      desired = Math.min(MAX, listRef.current.scrollHeight || MAX);
    }

    let place: 'bottom' | 'top' = 'bottom';
    let maxH = Math.min(desired, Math.max(120, below - MARGIN));

    if (maxH < 160 && above > below) {
      place = 'top';
      maxH = Math.min(desired, Math.max(120, above - MARGIN));
    }

    setPlacement(place);
    setPopoverMaxH(Math.max(120, maxH));
  }, []);

  useEffect(() => {
    if (!open) return;
    updatePlacement();
    const rerun = () => updatePlacement();
    window.addEventListener('resize', rerun);
    window.addEventListener('scroll', rerun, true);
    return () => {
      window.removeEventListener('resize', rerun);
      window.removeEventListener('scroll', rerun, true);
    };
  }, [open, filtered.length, updatePlacement]);

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (disabled) return;

    if (e.key === 'ArrowDown') {
      if (!open) {
        openList();
        setActiveIndex(0);
      } else {
        setActiveIndex((prev) => {
          const next = Math.min(
            (prev < 0 ? -1 : prev) + 1,
            filtered.length - 1,
          );
          listRef.current
            ?.querySelector<HTMLElement>(`[data-idx="${next}"]`)
            ?.scrollIntoView({ block: 'nearest' });
          return next;
        });
      }
      e.preventDefault();
    } else if (e.key === 'ArrowUp') {
      if (!open) {
        openList();
        setActiveIndex(filtered.length - 1);
      } else {
        setActiveIndex((prev) => {
          const next = Math.max((prev < 0 ? 1 : prev) - 1, 0);
          listRef.current
            ?.querySelector<HTMLElement>(`[data-idx="${next}"]`)
            ?.scrollIntoView({ block: 'nearest' });
          return next;
        });
      }
      e.preventDefault();
    } else if (e.key === 'Enter') {
      if (open) {
        const idx = activeIndex < 0 ? 0 : activeIndex;
        const opt = filtered[idx];
        if (opt) {
          selectValue(String(opt.value));
          e.preventDefault();
        }
      }
    } else if (e.key === 'Escape') {
      closeList();
      e.preventDefault();
    }
  };

  return (
    <div
      className={cn('flex flex-col', { 'w-full': !!fullWidth })}
      ref={wrapperRef}
    >
      {label && (
        <label
          htmlFor={inputId}
          className={cn('text-gray-900 mb-1 text-sm', {
            'text-rose-600': !!error,
          })}
        >
          {label}
        </label>
      )}

      {name && <input type="hidden" name={name} value={value ?? ''} readOnly />}

      <div className="relative">
        <Input
          id={inputId}
          ref={inputRef}
          name={name}
          value={query}
          disabled={disabled}
          placeholder={placeholder}
          startAdornment={startAdornment}
          endAdornment={endAdornment}
          className={cn(triggerClassName)}
          role="combobox"
          aria-expanded={open}
          aria-controls={`${inputId}-listbox`}
          aria-autocomplete="list"
          onChange={(e) => {
            setQuery(e.target.value);
            if (!open) setOpen(true);
          }}
          onFocus={() => {
            if (!disabled) setOpen(true);
          }}
          onKeyDown={handleKeyDown}
          {...restTriggerProps}
        />

        {open && (
          <div
            id={`${inputId}-listbox`}
            role="listbox"
            ref={listRef}
            className={cn(
              'absolute mt-1 left-0 right-0 max-h-60 overflow-auto rounded-xl border border-gray-100 bg-white shadow-[0_8px_24px_rgba(0,0,0,0.08)] z-50',
              { 'mb-1': placement !== 'bottom' },
            )}
            style={{
              top: placement === 'bottom' ? '100%' : 'auto',
              bottom: placement === 'top' ? '100%' : 'auto',
              maxHeight: popoverMaxH,
            }}
            onMouseDown={(e) => e.preventDefault()}
          >
            {description && (
              <div className="px-3 py-2 text-xs text-gray-500">
                {description}
              </div>
            )}

            {filtered.length === 0 && (
              <div className="px-3 py-4 text-sm text-gray-500">
                Nada encontrado.
              </div>
            )}

            {filtered.map((option, idx) => {
              const isActive = idx === activeIndex;
              const isSelected = option.value === value;

              return (
                <div
                  key={idx}
                  role="option"
                  aria-selected={isSelected}
                  data-idx={idx}
                  className={cn(
                    'px-4 text-sm cursor-pointer flex items-center gap-2 hover:bg-gray-50',
                    { 'bg-gray-50': isActive },
                  )}
                  onMouseEnter={() => setActiveIndex(idx)}
                  onClick={() => {
                    selectValue(String(option.value));
                    setQuery(option.label);
                  }}
                >
                  {renderItem ? (
                    renderItem(option, idx)
                  ) : (
                    <span className="truncate">{option.label}</span>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>

      {helperText && (
        <small
          className={cn('text-gray-500 font-light mt-1', {
            'text-rose-600': !!error,
          })}
        >
          {helperText}
        </small>
      )}
    </div>
  );
}

export { AutoComplete };
