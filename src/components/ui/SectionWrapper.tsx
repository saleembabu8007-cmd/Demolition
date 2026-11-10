import React from 'react';

export type SectionBackground = 'white' | 'daylight' | 'dark' | 'deep';

interface SectionWrapperProps {
  id?: string;
  background?: SectionBackground;
  className?: string;
  children: React.ReactNode;
  borderTop?: boolean;
  borderBottom?: boolean;
  scrollMargin?: boolean;
  'aria-labelledby'?: string;
}

export const SectionWrapper: React.FC<SectionWrapperProps> = ({
  id,
  background = 'white',
  className = '',
  children,
  borderTop = false,
  borderBottom = true,
  scrollMargin = true,
  'aria-labelledby': ariaLabelledBy,
}) => {
  const bgClasses = {
    white: 'bg-white text-[#112A3E]',
    daylight: 'bg-slate-50 text-[#112A3E]',
    dark: 'bg-[#112A3E] text-white',
    deep: 'bg-[#0B1C2A] text-white',
  }[background];

  const borderTopClass = borderTop
    ? background === 'dark' || background === 'deep'
      ? 'border-t border-[#1C3A52]'
      : 'border-t border-slate-200'
    : '';

  const borderBottomClass = borderBottom
    ? background === 'dark' || background === 'deep'
      ? 'border-b border-[#1C3A52]'
      : 'border-b border-slate-200'
    : '';

  const scrollMarginClass = scrollMargin ? 'scroll-mt-20' : '';

  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledBy}
      className={`py-18 sm:py-24 lg:py-28 ${bgClasses} ${borderTopClass} ${borderBottomClass} ${scrollMarginClass} ${className}`.trim()}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
};

