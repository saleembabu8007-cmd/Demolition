/**
 * Single source of truth for business contact details and configurations.
 * Pure English - clean, professional industrial service configuration.
 */

export const SITE_CONFIG = {
  name: 'LTS Demolition & Industrial Scrap Services',
  shortName: 'LTS Demolition',
  tagline: 'Controlled Industrial Demolition & Heavy Scrap Removal',
  phoneDisplay: '+91 96457 77401',
  phoneTel: '+919645777401',
  whatsappNumber: '919645777401',
  operatingHours: 'Mon–Sat: 8:00 AM – 7:00 PM',
  serviceArea: 'Industrial & Commercial Sites Across Kerala',
  siteUrl: 'https://ltsdemolition.in',
} as const;

export function getWhatsAppUrl(customText?: string): string {
  const message = customText 
    ? customText 
    : 'Hello LTS, I would like to request a site visit for demolition or industrial scrap removal.';
  return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

