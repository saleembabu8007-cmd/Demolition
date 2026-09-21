import React, { useState } from 'react';
import { ArrowRight, Phone, MessageCircle, CheckCircle2, AlertCircle } from 'lucide-react';
import { SITE_CONFIG, getWhatsAppUrl } from '../siteConfig';

export const FinalCta: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Factory / Building Demolition',
    location: '',
    description: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name';
    }
    const cleanPhone = formData.phone.replace(/\D/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      newErrors.phone = 'Please enter a valid 10-digit mobile number';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitted(true);
  };

  const getWhatsAppMessageUrl = () => {
    const text = `Hello LTS, I would like to request a quotation:\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Service:* ${formData.service}\n*Location:* ${formData.location || 'Kerala'}\n*Details:* ${formData.description || 'N/A'}`;
    return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section 
      id="contact" 
      aria-labelledby="cta-heading"
      className="relative py-20 sm:py-28 lg:py-32 bg-slate-950 text-white overflow-hidden border-t border-slate-900"
    >
      {/* Background with quiet, authentic industrial image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-demolition.jpg"
          alt="LTS industrial teardown and site clearance"
          loading="lazy"
          decoding="async"
          width="2400"
          height="1350"
          className="w-full h-full object-cover object-center opacity-15 filter brightness-[0.7] contrast-[1.1]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/95 to-slate-950" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Contact Details */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold text-amber-400 tracking-widest uppercase font-mono">
              REQUEST A QUOTE
            </span>

            <h2 
              id="cta-heading"
              className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-white leading-[1.16]"
            >
              Have a structure to dismantle or heavy scrap to sell?
            </h2>

            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-xl">
              We inspect your site anywhere in Kerala at zero cost, calculate your scrap metal value on public weighbridge rates, and give you a clear written proposal within 24 hours.
            </p>

            {/* Direct Quick Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <a
                href={`tel:${SITE_CONFIG.phoneTel}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-slate-950 font-semibold text-sm transition-colors shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                aria-label={`Call direct: ${SITE_CONFIG.phoneDisplay}`}
              >
                <Phone className="w-4 h-4 text-slate-950" strokeWidth={2.25} aria-hidden="true" />
                <span>Call: {SITE_CONFIG.phoneDisplay}</span>
              </a>

              <a
                href={getWhatsAppUrl('Hello LTS, I would like to request a free site inspection for demolition or scrap removal.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-medium text-sm transition-colors shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                <MessageCircle className="w-4 h-4 fill-white" aria-hidden="true" />
                <span>WhatsApp Us</span>
              </a>
            </div>

            <div className="pt-4 border-t border-slate-800/80 space-y-2 text-xs text-slate-400 font-mono">
              <p>• Zero inspection charge across all Kerala districts</p>
              <p>• Working hours: {SITE_CONFIG.operatingHours}</p>
              <p>• Transparent computerized weighbridge slips</p>
            </div>
          </div>

          {/* Right Column: Short, Accessible Quote Request Form (Rule 27) */}
          <div className="lg:col-span-6">
            <div className="bg-slate-900 border border-slate-800 rounded-md p-6 sm:p-8 shadow-sm">
              <h3 className="text-xl font-bold text-white tracking-tight mb-2">
                Send Site Details
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                Fill in your details below. We will review your project and get back to you immediately.
              </p>

              {submitted ? (
                <div className="space-y-4 py-4" role="status" aria-live="polite">
                  <div className="flex items-center gap-3 text-emerald-400">
                    <CheckCircle2 className="w-6 h-6 shrink-0" />
                    <span className="font-semibold text-base">Details received successfully!</span>
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Thank you, <span className="font-semibold text-white">{formData.name}</span>. Our site supervisor will review your inquiry for <span className="text-amber-400 font-medium">{formData.service}</span> and contact you at <span className="text-white font-medium">{formData.phone}</span>.
                  </p>
                  <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row gap-3">
                    <a
                      href={getWhatsAppMessageUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm transition-colors"
                    >
                      <MessageCircle className="w-4 h-4 fill-white" />
                      <span>Send to WhatsApp Now</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: '', phone: '', service: 'Factory / Building Demolition', location: '', description: '' });
                      }}
                      className="px-4 py-3 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-300 text-sm font-medium transition-colors"
                    >
                      Submit Another Request
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  <div>
                    <label htmlFor="quote-name" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                      Your Name <span className="text-amber-400">*</span>
                    </label>
                    <input
                      id="quote-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: '' });
                      }}
                      placeholder="e.g. K. Narayanan"
                      className="w-full px-3.5 py-2.5 rounded-md bg-slate-950 border border-slate-700 text-white placeholder:text-slate-500 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:border-transparent transition-colors"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                    />
                    {errors.name && (
                      <p id="name-error" className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="quote-phone" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                      Phone Number <span className="text-amber-400">*</span>
                    </label>
                    <input
                      id="quote-phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => {
                        setFormData({ ...formData, phone: e.target.value });
                        if (errors.phone) setErrors({ ...errors, phone: '' });
                      }}
                      placeholder="10-digit mobile number"
                      className="w-full px-3.5 py-2.5 rounded-md bg-slate-950 border border-slate-700 text-white placeholder:text-slate-500 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:border-transparent transition-colors"
                      aria-invalid={!!errors.phone}
                      aria-describedby={errors.phone ? 'phone-error' : undefined}
                    />
                    {errors.phone && (
                      <p id="phone-error" className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="quote-service" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                        Service Required
                      </label>
                      <select
                        id="quote-service"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-md bg-slate-950 border border-slate-700 text-white text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:border-transparent transition-colors"
                      >
                        <option value="Factory / Building Demolition">Factory / Building Demolition</option>
                        <option value="Heavy Machinery Scrap">Heavy Machinery Scrap</option>
                        <option value="Metal Scrap Removal">Metal Scrap Removal</option>
                        <option value="Site Clearance">Site Clearance</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="quote-location" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                        Site Location in Kerala
                      </label>
                      <input
                        id="quote-location"
                        type="text"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        placeholder="e.g. Ernakulam, Palakkad"
                        className="w-full px-3.5 py-2.5 rounded-md bg-slate-950 border border-slate-700 text-white placeholder:text-slate-500 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:border-transparent transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="quote-description" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                      Short Description / Notes <span className="text-slate-500 text-[11px] normal-case">(Optional)</span>
                    </label>
                    <textarea
                      id="quote-description"
                      rows={3}
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      placeholder="Brief details about the building size, steel structure, or machinery to dismantle..."
                      className="w-full px-3.5 py-2.5 rounded-md bg-slate-950 border border-slate-700 text-white placeholder:text-slate-500 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:border-transparent transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-slate-950 font-bold text-sm transition-colors shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 cursor-pointer"
                  >
                    <span>Request Free Quotation</span>
                    <ArrowRight className="w-4 h-4" strokeWidth={2} />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
