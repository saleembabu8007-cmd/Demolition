/**
 * Single source of truth for business contact details and configurations.
 * Azi Engineering Works — Industrial Demolition & Heavy Scrap Services
 */

export const SITE_CONFIG = {
  name: 'Azi Engineering Works',
  shortName: 'Azi Engineering Works',
  brandName: 'Azi',
  tagline: 'Controlled Demolition, Plant Dismantling & Industrial Scrap Removal',
  phoneDisplay: '+91 96457 77401',
  phoneTel: '+919645777401',
  whatsappNumber: '919645777401',
  operatingHours: 'Mon–Sat: 8:00 AM – 7:00 PM',
  serviceArea: 'Industrial & Commercial Sites Across Kerala',
  siteUrl: 'https://aziengineering.com',
  colors: {
    brandYellow: '#FFB800',
    brandYellowHover: '#E5A600',
    brandYellowActive: '#CC9400',
    navyDeep: '#0B1C2A',
    navyPrimary: '#112A3E',
    navyLight: '#1C3A52',
  },
} as const;

export function getWhatsAppUrl(customText?: string): string {
  const message = customText 
    ? customText 
    : 'Hello Azi Engineering Works, I would like to request an inspection for industrial demolition or scrap machinery removal.';
  return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
