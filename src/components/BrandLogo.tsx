import React from 'react';
import { SITE_CONFIG } from '../siteConfig';

export type BrandLogoVariant =
  | 'horizontal'
  | 'reversed-horizontal'
  | 'stacked'
  | 'reversed-stacked'
  | 'symbol'
  | 'badge-navy'
  | 'badge-white';

interface BrandLogoProps {
  variant?: BrandLogoVariant;
  className?: string;
  priority?: boolean;
  usePngFallback?: boolean;
}

const LOGO_CONFIGS: Record<
  BrandLogoVariant,
  {
    svg: string;
    png: string;
    width: number;
    height: number;
    aspectRatio: string;
    defaultAlt: string;
  }
> = {
  horizontal: {
    svg: '/logos/02_Azi_Horizontal_Color.svg',
    png: '/logos/previews/02_Azi_Horizontal_Color.png',
    width: 660,
    height: 230,
    aspectRatio: '660 / 230',
    defaultAlt: `${SITE_CONFIG.name} — Industrial Demolition & Scrap Services`,
  },
  'reversed-horizontal': {
    svg: '/logos/06_Azi_Reversed_Horizontal.svg',
    png: '/logos/previews/06_Azi_Reversed_Horizontal.png',
    width: 660,
    height: 230,
    aspectRatio: '660 / 230',
    defaultAlt: `${SITE_CONFIG.name} — Industrial Demolition & Scrap Services`,
  },
  stacked: {
    svg: '/logos/01_Azi_Primary_Stacked_Color.svg',
    png: '/logos/previews/01_Azi_Primary_Stacked_Color.png',
    width: 600,
    height: 420,
    aspectRatio: '600 / 420',
    defaultAlt: `${SITE_CONFIG.name} — Primary Stacked Mark`,
  },
  'reversed-stacked': {
    svg: '/logos/05_Azi_Reversed_Stacked.svg',
    png: '/logos/previews/05_Azi_Reversed_Stacked.png',
    width: 600,
    height: 420,
    aspectRatio: '600 / 420',
    defaultAlt: `${SITE_CONFIG.name} — Reversed Stacked Mark`,
  },
  symbol: {
    svg: '/logos/04_Azi_Symbol_Only.svg',
    png: '/logos/previews/04_Azi_Symbol_Only.png',
    width: 280,
    height: 256,
    aspectRatio: '280 / 256',
    defaultAlt: `${SITE_CONFIG.name} — Symbol Emblem`,
  },
  'badge-navy': {
    svg: '/logos/10_Azi_Social_Badge_Navy.svg',
    png: '/logos/previews/10_Azi_Social_Badge_Navy.png',
    width: 320,
    height: 320,
    aspectRatio: '1 / 1',
    defaultAlt: `${SITE_CONFIG.name} — Navy Social Badge`,
  },
  'badge-white': {
    svg: '/logos/11_Azi_Social_Badge_White.svg',
    png: '/logos/previews/11_Azi_Social_Badge_White.png',
    width: 320,
    height: 320,
    aspectRatio: '1 / 1',
    defaultAlt: `${SITE_CONFIG.name} — White Social Badge`,
  },
};

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'horizontal',
  className = 'h-9 sm:h-11 w-auto',
  priority = false,
  usePngFallback = false,
}) => {
  const config = LOGO_CONFIGS[variant];
  const src = usePngFallback ? config.png : config.svg;

  return (
    <img
      src={src}
      alt={config.defaultAlt}
      width={config.width}
      height={config.height}
      fetchPriority={priority ? 'high' : 'auto'}
      decoding="async"
      style={{ aspectRatio: config.aspectRatio }}
      className={`object-contain select-none shrink-0 ${className}`}
    />
  );
};

