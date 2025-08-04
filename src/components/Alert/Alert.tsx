import { Fragment } from 'react';
import { Info } from 'lucide-react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import { toastClass } from '../Toast/variants';
import { AlertProps, AlertTimestampProps } from './types';
import { cn } from '../../utils';

function AlertTimestamp(props: AlertTimestampProps) {
  const { date, dateFormat = 'dd MMM | HH:mm', className, ...rest } = props;

  if (!date) return <Fragment />;

  return (
    <span className={cn('', className)} {...rest}>
      {format(date, dateFormat, { locale: ptBR })}
    </span>
  );
}

function Alert(props: AlertProps) {
  const {
    title,
    bordered,
    description,
    rounded,
    size,
    variant,
    icon,
    date,
    dateFormat,
  } = props;

  const Icon = icon ?? <Info />;

  return (
    <div className={toastClass({ variant, size, rounded, bordered })}>
      {Icon}
      <div className="w-full flex flex-col gap-1">
        <div className="flex w-full justify-between items-center gap-2">
          <h6>{title}</h6>
          <AlertTimestamp date={date} dateFormat={dateFormat} />
        </div>

        {description && <span>{description}</span>}
      </div>
    </div>
  );
}

export { Alert };
