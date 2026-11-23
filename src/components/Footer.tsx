import { ExternalLink, MapPin, MessageCircle, Phone } from 'lucide-react';
import { CLINIC_CONFIG, Language } from '../data/clinicConfig';
import { TranslationContent } from '../data/translations';
import { ClinicLogo } from './ClinicLogo';

interface FooterProps {
  lang: Language;
  navT: TranslationContent['nav'];
  footerT: TranslationContent['footer'];
}

export function Footer({ lang, navT, footerT }: FooterProps) {
  const quickLinks = [
    { href: '#home', label: navT.home },
    { href: '#about', label: navT.about },
    { href: '#services', label: navT.services },
    { href: '#why-us', label: navT.whyUs },
    { href: '#reviews', label: navT.reviews },
    { href: '#appointment', label: navT.bookNow },
  ];

  return (
    <footer className="bg-[#241811] text-[#FAF7F2] border-t border-[#E7D29A]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#E7D29A]/15">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3.5">
              <ClinicLogo variant="light" size="md" />
              <div>
                <p className="font-display text-lg font-semibold text-[#FAF7F2]">
                  {CLINIC_CONFIG.brand.arName}
                </p>
                <p className="text-xs text-[#E7D29A] tracking-wide">
                  {CLINIC_CONFIG.brand.enName}
                </p>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-[#FAF7F2]/75 max-w-sm">
              {footerT.description}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-[#E7D29A]">
              <a
                href={CLINIC_CONFIG.contact.officialGroupUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-[#FAF7F2] transition-colors"
              >
                <span>{footerT.officialGroupLink}</span>
                <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-sm font-semibold text-[#E7D29A] tracking-wide">
              {footerT.quickLinksTitle}
            </h3>
            <ul className="space-y-2.5 text-sm text-[#FAF7F2]/80">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-[#E7D29A] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Location */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-sm font-semibold text-[#E7D29A] tracking-wide">
              {footerT.contactTitle}
            </h3>
            <ul className="space-y-3 text-sm text-[#FAF7F2]/80">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#E7D29A] shrink-0 mt-0.5" aria-hidden="true" />
                <span>{CLINIC_CONFIG.location.address[lang]}</span>
              </li>
              <li>
                <a
                  href={CLINIC_CONFIG.contact.phoneHref}
                  className="inline-flex items-center gap-2.5 hover:text-[#E7D29A] transition-colors tabular-nums"
                >
                  <Phone className="w-4 h-4 text-[#E7D29A] shrink-0" aria-hidden="true" />
                  <span dir="ltr">{CLINIC_CONFIG.contact.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={CLINIC_CONFIG.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 hover:text-[#E7D29A] transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-[#E7D29A] shrink-0" aria-hidden="true" />
                  <span>WhatsApp</span>
                </a>
              </li>
              <li>
                <a
                  href={CLINIC_CONFIG.location.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#E7D29A] hover:text-[#FAF7F2] transition-colors"
                >
                  <span>Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>

          {/* Working Hours & Official Socials */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-sm font-semibold text-[#E7D29A] tracking-wide">
              {footerT.hoursTitle}
            </h3>
            <div className="space-y-2 text-sm text-[#FAF7F2]/80">
              <div className="flex items-center justify-between gap-2">
                <span>{lang === 'ar' ? 'السبت – الخميس' : 'Sat – Thu'}</span>
                <span className="text-[#E7D29A] tabular-nums">
                  {lang === 'ar' ? '24 ساعة' : '24 Hours'}
                </span>
              </div>
              <div className="flex items-center justify-between gap-2">
                <span>{lang === 'ar' ? 'الجمعة' : 'Friday'}</span>
                <span className="tabular-nums">
                  {lang === 'ar' ? '2:00 م – 10:00 م' : '2:00 PM – 10:00 PM'}
                </span>
              </div>
            </div>

            <div className="pt-3">
              <p className="text-xs text-[#FAF7F2]/60 mb-2">
                {footerT.socialTitle}
              </p>
              <div className="flex items-center gap-3 text-xs">
                {CLINIC_CONFIG.social.map((account) => (
                  <a
                    key={account.id}
                    href={account.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg border border-[#E7D29A]/25 text-[#FAF7F2]/85 hover:text-[#241811] hover:bg-[#E7D29A] transition-colors"
                  >
                    {account.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="pt-7 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FAF7F2]/65">
          <p className="tabular-nums">{footerT.copyright}</p>
          <p>{CLINIC_CONFIG.brand.category[lang]}</p>
        </div>
      </div>
    </footer>
  );
}
