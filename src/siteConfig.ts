/**
 * Single source of truth for business contact details and configurations.
 * Pure English - clean, professional industrial service configuration.
 */

export const SITE_CONFIG = {
  name: 'Kerala Demolition & Industrial Scrap Services',
  shortName: 'Kerala Demolition & Scrap',
  tagline: 'Controlled Demolition & Heavy Scrap Removal',
  phoneDisplay: '+91 98765 43210',
  phoneTel: '+919876543210',
  whatsappNumber: '919876543210',
  operatingHours: 'Mon–Sat: 8:00 AM – 7:00 PM',
  serviceArea: 'Industrial & Commercial Sites Across Kerala',
  siteUrl: 'https://keralademolition.in',
} as const;

export function getWhatsAppUrl(customText?: string): string {
  const message = customText 
    ? customText 
    : 'Hello, I would like to request a site inspection for demolition or industrial scrap removal.';
  return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

