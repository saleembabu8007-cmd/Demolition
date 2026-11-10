import React from 'react';
import { AlertCircle } from 'lucide-react';

interface BaseFieldProps {
  label: string;
  name?: string;
  id: string;
  required?: boolean;
  error?: string;
  className?: string;
  helperText?: string;
  theme?: 'light' | 'dark';
}

export type InputFieldProps = BaseFieldProps &
  React.InputHTMLAttributes<HTMLInputElement> & {
    as?: 'input';
  };

export type SelectFieldProps = BaseFieldProps &
  React.SelectHTMLAttributes<HTMLSelectElement> & {
    as: 'select';
    children: React.ReactNode;
  };

export type TextareaFieldProps = BaseFieldProps &
  React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
    as: 'textarea';
    rows?: number;
  };

export type FormFieldProps = InputFieldProps | SelectFieldProps | TextareaFieldProps;

export const FormField: React.FC<FormFieldProps> = (props) => {
  const { 
    label, 
    id, 
    required = false, 
    error, 
    className = '', 
    helperText, 
    theme = 'light',
    as = 'input', 
    ...rest 
  } = props;

  const errorId = `${id}-error`;
  const helperId = `${id}-helper`;

  const isLight = theme === 'light';

  const labelClass = isLight 
    ? 'text-[#112A3E]' 
    : 'text-slate-200';

  const helperClass = isLight 
    ? 'text-slate-500' 
    : 'text-slate-400';

  const errorClass = isLight 
    ? 'text-rose-600' 
    : 'text-rose-400';

  const commonControlClasses = isLight
    ? 'w-full px-3.5 py-2.5 rounded-sm bg-white border border-slate-300 text-[#112A3E] placeholder:text-slate-400 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFB800] focus-visible:border-transparent transition-colors min-h-[44px]'
    : 'w-full px-3.5 py-2.5 rounded-sm bg-[#0B1C2A] border border-[#1C3A52] text-white placeholder:text-slate-500 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFB800] focus-visible:border-transparent transition-colors min-h-[44px]';

  return (
    <div className={`space-y-1.5 ${className}`.trim()}>
      <label htmlFor={id} className={`block text-sm font-semibold ${labelClass}`}>
        {label} {required && <span className="text-[#A37500]" aria-hidden="true">*</span>}
        {required && <span className="sr-only">(required)</span>}
      </label>

      {as === 'select' ? (
        <select
          id={id}
          required={required}
          aria-required={required}
          aria-invalid={!!error}
          aria-describedby={error ? errorId : helperText ? helperId : undefined}
          className={`${commonControlClasses} cursor-pointer`}
          {...(rest as React.SelectHTMLAttributes<HTMLSelectElement>)}
        >
          {(props as SelectFieldProps).children}
        </select>
      ) : as === 'textarea' ? (
        <textarea
          id={id}
          required={required}
          aria-required={required}
          aria-invalid={!!error}
          aria-describedby={error ? errorId : helperText ? helperId : undefined}
          className={`${commonControlClasses} resize-none min-h-[88px]`}
          {...(rest as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      ) : (
        <input
          id={id}
          required={required}
          aria-required={required}
          aria-invalid={!!error}
          aria-describedby={error ? errorId : helperText ? helperId : undefined}
          className={commonControlClasses}
          {...(rest as React.InputHTMLAttributes<HTMLInputElement>)}
        />
      )}

      {helperText && !error && (
        <p id={helperId} className={`text-xs ${helperClass} font-normal`}>
          {helperText}
        </p>
      )}

      {error && (
        <p id={errorId} role="alert" className={`mt-1 text-xs ${errorClass} flex items-center gap-1 font-medium`}>
          <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
          <span>{error}</span>
        </p>
      )}
    </div>
  );
};
