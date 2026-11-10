import React from 'react';

interface SectionHeadingProps {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  theme?: 'light' | 'dark';
  align?: 'left' | 'center';
  maxWidth?: string;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  id,
  eyebrow,
  title,
  description,
  theme = 'light',
  align = 'left',
  maxWidth = 'max-w-2xl',
  className = '',
}) => {
  const isDark = theme === 'dark';
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left';

  const eyebrowClass = isDark
    ? 'text-[#FFB800] uppercase tracking-wider'
    : 'text-[#A37500] uppercase tracking-wider';

  const titleClass = isDark
    ? 'text-white'
    : 'text-[#112A3E]';

  const descClass = isDark
    ? 'text-slate-200'
    : 'text-slate-700';

  return (
    <div className={`space-y-3 mb-10 sm:mb-14 ${maxWidth} ${alignClass} ${className}`.trim()}>
      {eyebrow && (
        <p className={`text-xs sm:text-sm font-bold ${eyebrowClass}`}>
          {eyebrow}
        </p>
      )}

      <h2
        id={id}
        className={`text-3xl sm:text-4xl lg:text-[40px] font-extrabold tracking-tight leading-[1.16] ${titleClass}`}
      >
        {title}
      </h2>

      {description && (
        <p className={`text-base sm:text-lg font-normal leading-relaxed ${descClass}`}>
          {description}
        </p>
      )}
    </div>
  );
};

