import React from 'react';
import { CheckCircle2, AlertCircle } from 'lucide-react';

interface StatusMessageProps {
  type?: 'success' | 'error';
  title: string;
  message?: string;
  action?: React.ReactNode;
  theme?: 'light' | 'dark';
  className?: string;
}

export const StatusMessage: React.FC<StatusMessageProps> = ({
  type = 'success',
  title,
  message,
  action,
  theme = 'light',
  className = '',
}) => {
  const isSuccess = type === 'success';
  const isLight = theme === 'light';

  const titleClass = isLight 
    ? 'text-[#112A3E]' 
    : 'text-white';

  const messageClass = isLight 
    ? 'text-slate-600' 
    : 'text-slate-200';

  const iconColor = isSuccess 
    ? (isLight ? 'text-emerald-600' : 'text-emerald-400')
    : (isLight ? 'text-rose-600' : 'text-rose-400');

  return (
    <div
      role="status"
      aria-live="polite"
      className={`space-y-4 py-2 ${className}`.trim()}
    >
      <div className={`flex items-center gap-3 ${iconColor}`}>
        {isSuccess ? (
          <CheckCircle2 className="w-6 h-6 shrink-0" aria-hidden="true" />
        ) : (
          <AlertCircle className="w-6 h-6 shrink-0" aria-hidden="true" />
        )}
        <span className={`font-bold text-base sm:text-lg tracking-tight ${titleClass}`}>{title}</span>
      </div>

      {message && (
        <p className={`text-sm sm:text-base ${messageClass} leading-relaxed font-normal`}>
          {message}
        </p>
      )}

      {action && <div className="pt-2">{action}</div>}
    </div>
  );
};
