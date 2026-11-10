import React from 'react';
import { Loader2 } from 'lucide-react';

export type ButtonVariant = 'primary' | 'secondary' | 'dark' | 'outline' | 'whatsapp';
export type ButtonSize = 'sm' | 'md' | 'lg';

interface BaseButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
  isLoading?: boolean;
  className?: string;
  children: React.ReactNode;
}

export type ButtonProps = BaseButtonProps &
  (
    | (React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined })
    | (React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string })
  );

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'right',
  fullWidth = false,
  isLoading = false,
  className = '',
  children,
  ...props
}) => {
  // Base structural classes
  const baseClasses =
    'inline-flex items-center justify-center font-bold tracking-tight rounded-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 cursor-pointer select-none';

  // Size tokens (WCAG Touch Target Compliance: minimum 44px-48px height)
  const sizeClasses = {
    sm: 'min-h-[40px] px-4 py-2 text-xs sm:text-sm gap-2',
    md: 'min-h-[48px] px-6 py-3.5 text-sm sm:text-base gap-2.5',
    lg: 'min-h-[52px] px-8 py-4 text-base sm:text-lg gap-3',
  }[size];

  // Variant color tokens
  const variantClasses = {
    primary:
      'bg-[#FFB800] hover:bg-[#E5A600] active:bg-[#CC9400] text-[#112A3E] focus-visible:ring-[#FFB800] focus-visible:ring-offset-[#0B1C2A] shadow-xs',
    secondary:
      'bg-white/10 hover:bg-white/15 active:bg-white/20 text-white border border-white/25 focus-visible:ring-white focus-visible:ring-offset-[#0B1C2A]',
    dark:
      'bg-[#112A3E] hover:bg-[#16334D] active:bg-[#0B1C2A] text-white border border-[#1C3A52] focus-visible:ring-[#FFB800] focus-visible:ring-offset-white',
    outline:
      'bg-transparent hover:bg-slate-100 active:bg-slate-200 text-[#112A3E] border border-slate-300 focus-visible:ring-[#FFB800] focus-visible:ring-offset-white',
    whatsapp:
      'bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white focus-visible:ring-emerald-500 focus-visible:ring-offset-[#0B1C2A] shadow-xs',
  }[variant];

  const widthClass = fullWidth ? 'w-full' : '';
  const stateClasses = isLoading ? 'opacity-75 cursor-wait' : '';

  const combinedClasses = `${baseClasses} ${sizeClasses} ${variantClasses} ${widthClass} ${stateClasses} ${className}`.trim();

  const content = (
    <>
      {isLoading ? (
        <Loader2 className="w-4 h-4 animate-spin shrink-0" aria-hidden="true" />
      ) : (
        icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>
      )}
      <span>{children}</span>
      {!isLoading && icon && iconPosition === 'right' && (
        <span className="shrink-0">{icon}</span>
      )}
    </>
  );

  if ('href' in props && props.href) {
    const { href, ...anchorProps } = props as React.AnchorHTMLAttributes<HTMLAnchorElement> & {
      href: string;
    };
    return (
      <a href={href} className={combinedClasses} {...anchorProps}>
        {content}
      </a>
    );
  }

  const buttonProps = props as React.ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button
      disabled={buttonProps.disabled || isLoading}
      aria-busy={isLoading}
      className={combinedClasses}
      {...buttonProps}
    >
      {content}
    </button>
  );
};

