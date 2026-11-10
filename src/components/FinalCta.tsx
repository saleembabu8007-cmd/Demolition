import React, { useState } from 'react';
import { Phone, MessageCircle, ArrowRight } from 'lucide-react';
import { SITE_CONFIG, getWhatsAppUrl } from '../siteConfig';
import { SectionWrapper, SectionHeading, FormField, Button, StatusMessage } from './ui';

export const FinalCta: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Factory & Building Demolition',
    location: '',
    description: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState<string>('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitError, setSubmitError] = useState<string | null>(null);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = 'Please enter your full name.';
    }

    const cleanPhone = formData.phone.replace(/\D/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      newErrors.phone = 'Please enter a valid 10-digit mobile number.';
    }

    if (!formData.location.trim() || formData.location.trim().length < 2) {
      newErrors.location = 'Please specify your site location or district in Kerala.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    if (!validate()) return;

    setIsSubmitting(true);

    try {
      // Real backend network submission to /api/quote
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name.trim(),
          phone: formData.phone.trim(),
          service: formData.service,
          location: formData.location.trim(),
          description: formData.description.trim(),
        }),
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok && data.success) {
        setReferenceId(data.referenceId || `AZI-${Date.now().toString().slice(-6)}`);
        setSubmitted(true);
      } else if (response.status === 400 && data.errors) {
        setErrors(data.errors);
      } else {
        setSubmitError(
          data.message || 'Unable to process your request online. Please reach us directly via phone or WhatsApp.'
        );
      }
    } catch {
      // Graceful network resilience
      setSubmitError(
        'Connection to server timed out. You can send your quote details directly to our WhatsApp desk below.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const getWhatsAppPrefilledUrl = () => {
    const text = `Hello Azi Engineering Works, I would like to request an on-site inspection and quotation:\n\n*Name:* ${formData.name || 'Site Owner'}\n*Phone:* ${formData.phone || 'N/A'}\n*Service:* ${formData.service}\n*Location:* ${formData.location || 'Kerala'}\n*Notes:* ${formData.description || 'N/A'}\n*Ref:* ${referenceId || 'Online Inquiry'}`;
    return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <SectionWrapper id="contact" background="daylight" borderTop={true} aria-labelledby="cta-heading">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-16 items-start">
        
        {/* Left Column: Direct Engagement Context & Verified Channels */}
        <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
          <SectionHeading
            id="cta-heading"
            eyebrow="Direct Engagement"
            title="Request a site inspection."
            description="Share your project details. Our site engineer visits your property anywhere across Kerala at zero charge to evaluate the structure and provide a written quotation with verified scrap credit."
            className="mb-0"
          />

          {/* Direct Communication Channels */}
          <div className="pt-2 flex flex-col sm:flex-row lg:flex-col gap-3">
            <a
              href={`tel:${SITE_CONFIG.phoneTel}`}
              className="min-h-[48px] px-5 py-3 rounded-sm bg-white hover:bg-slate-100 border border-slate-300 text-[#112A3E] font-bold text-sm inline-flex items-center gap-3 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFB800] shadow-xs"
              aria-label={`Call direct: ${SITE_CONFIG.phoneDisplay}`}
            >
              <Phone className="w-4 h-4 text-[#A37500]" strokeWidth={2.5} aria-hidden="true" />
              <span>Call {SITE_CONFIG.phoneDisplay}</span>
            </a>

            <a
              href={getWhatsAppUrl('Hello Azi Engineering Works, I would like to schedule a site inspection for demolition or scrap removal.')}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[48px] px-5 py-3 rounded-sm bg-[#112A3E] hover:bg-[#07131D] active:bg-black text-white font-bold text-sm inline-flex items-center gap-3 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFB800] shadow-xs"
              aria-label="Contact our team on WhatsApp"
            >
              <MessageCircle className="w-4 h-4 text-[#FFB800]" aria-hidden="true" />
              <span>WhatsApp Communication Desk</span>
            </a>
          </div>

          {/* Factual Reassurance Bullet Points */}
          <div className="pt-4 border-t border-slate-200 space-y-2.5 text-xs sm:text-sm text-slate-600 font-medium">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFB800] shrink-0" aria-hidden="true" />
              <span>Zero site evaluation fee across all 14 districts in Kerala</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0" aria-hidden="true" />
              <span>Operating schedule: {SITE_CONFIG.operatingHours}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0" aria-hidden="true" />
              <span>Computerized public weighbridge slips with every dispatch</span>
            </div>
          </div>
        </div>

        {/* Right Column: Appropriately Sized, Crisp Quotation Form */}
        <div className="lg:col-span-7">
          <div className="bg-white border border-slate-200 rounded-sm p-6 sm:p-8 shadow-xs">
            <h3 className="text-xl sm:text-2xl font-bold text-[#112A3E] tracking-tight mb-2">
              Tell us about your site
            </h3>
            <p className="text-sm text-slate-600 mb-6 font-normal">
              Fill in your details below. Our engineer will review the scope and contact you.
            </p>

            {submitted ? (
              <StatusMessage
                type="success"
                theme="light"
                title={`Quotation Request Received (Ref: ${referenceId})`}
                message={`Thank you, ${formData.name}. We have received your inquiry for ${formData.service} in ${formData.location}. Our site engineer will review your project details and contact you at ${formData.phone}.`}
                action={
                  <div className="pt-3 flex flex-col sm:flex-row gap-3">
                    <Button
                      href={getWhatsAppPrefilledUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="whatsapp"
                      size="sm"
                      icon={<MessageCircle className="w-4 h-4 fill-white" aria-hidden="true" />}
                      iconPosition="left"
                    >
                      Open in WhatsApp Now
                    </Button>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: '',
                          phone: '',
                          service: 'Factory & Building Demolition',
                          location: '',
                          description: '',
                        });
                      }}
                      className="min-h-[40px] px-4 py-2 rounded-sm bg-slate-100 hover:bg-slate-200 text-[#112A3E] text-xs sm:text-sm font-semibold transition-colors cursor-pointer border border-slate-300"
                    >
                      Submit Another Request
                    </button>
                  </div>
                }
              />
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                {submitError && (
                  <StatusMessage
                    type="error"
                    theme="light"
                    title="Submission issue"
                    message={submitError}
                    action={
                      <div className="pt-1">
                        <Button
                          href={getWhatsAppPrefilledUrl()}
                          target="_blank"
                          rel="noopener noreferrer"
                          variant="whatsapp"
                          size="sm"
                          icon={<MessageCircle className="w-4 h-4 fill-white" aria-hidden="true" />}
                          iconPosition="left"
                        >
                          Send via WhatsApp Instead
                        </Button>
                      </div>
                    }
                  />
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormField
                    id="quote-name"
                    label="Your name"
                    theme="light"
                    required
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: '' });
                    }}
                    placeholder="e.g. K. Narayanan"
                    error={errors.name}
                  />

                  <FormField
                    id="quote-phone"
                    label="Phone number"
                    type="tel"
                    theme="light"
                    required
                    autoComplete="tel"
                    inputMode="tel"
                    value={formData.phone}
                    onChange={(e) => {
                      setFormData({ ...formData, phone: e.target.value });
                      if (errors.phone) setErrors({ ...errors, phone: '' });
                    }}
                    placeholder="10-digit mobile number"
                    error={errors.phone}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormField
                    id="quote-location"
                    label="Site location in Kerala"
                    theme="light"
                    required
                    value={formData.location}
                    onChange={(e) => {
                      setFormData({ ...formData, location: e.target.value });
                      if (errors.location) setErrors({ ...errors, location: '' });
                    }}
                    placeholder="e.g. Ernakulam, Palakkad"
                    error={errors.location}
                  />

                  <FormField
                    id="quote-service"
                    as="select"
                    label="Service required"
                    theme="light"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  >
                    <option value="Factory & Building Demolition">Factory & Building Demolition</option>
                    <option value="Heavy Machinery Dismantling">Heavy Machinery Dismantling</option>
                    <option value="Industrial Metal Scrap Removal">Industrial Metal Scrap Removal</option>
                    <option value="Site Clearance & Leveling">Site Clearance & Leveling</option>
                  </FormField>
                </div>

                <FormField
                  id="quote-description"
                  as="textarea"
                  rows={3}
                  theme="light"
                  label="Project notes (optional)"
                  helperText="Approximate building dimensions, steel structure type, or plant equipment to dismantle."
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Brief details about the building size or machinery..."
                />

                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  fullWidth
                  isLoading={isSubmitting}
                  disabled={isSubmitting}
                  icon={<ArrowRight className="w-4 h-4" strokeWidth={2.25} aria-hidden="true" />}
                  className="font-bold shadow-xs text-sm"
                >
                  Request a Quote
                </Button>
              </form>
            )}
          </div>
        </div>

      </div>
    </SectionWrapper>
  );
};
