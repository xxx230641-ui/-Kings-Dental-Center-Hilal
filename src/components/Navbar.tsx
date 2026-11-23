import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Globe, Menu, X } from 'lucide-react';
import { CLINIC_CONFIG, Language } from '../data/clinicConfig';
import { TranslationContent } from '../data/translations';
import { ClinicLogo } from './ClinicLogo';

interface NavbarProps {
  lang: Language;
  onToggleLang: () => void;
  t: TranslationContent['nav'];
}

export function Navbar({ lang, onToggleLang, t }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 24);
    }
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: t.home },
    { href: '#about', label: t.about },
    { href: '#services', label: t.services },
    { href: '#why-us', label: t.whyUs },
    { href: '#reviews', label: t.reviews },
    { href: '#location', label: t.location },
  ];

  const brandName =
    lang === 'ar' ? CLINIC_CONFIG.brand.arName : CLINIC_CONFIG.brand.enName;

  function handleMobileNavClick() {
    setMobileOpen(false);
  }

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FAF7F2]/92 backdrop-blur-md border-b border-[#E6DDD0] shadow-sm'
          : 'bg-[#FAF7F2]/75 backdrop-blur-sm border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-16 lg:h-[74px] flex items-center justify-between gap-2 sm:gap-4 lg:gap-8">
        {/* Zone 1: Brand Wordmark (Single line, zero attached badges) */}
        <a
          href="#home"
          className="inline-flex items-center gap-2 sm:gap-3 text-[#241811] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B88B36] rounded-lg min-w-0 shrink"
        >
          <ClinicLogo variant="dark" size="sm" />
          <span className="font-display font-semibold text-sm sm:text-base lg:text-lg tracking-tight truncate">
            {brandName}
          </span>
        </a>

        {/* Zone 2: Clean Single-Line Nav Links */}
        <nav
          aria-label={lang === 'ar' ? 'التنقل الرئيسي' : 'Primary Navigation'}
          className="hidden lg:flex items-center gap-6 text-sm font-medium text-[#5A4335]"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative py-1 hover:text-[#241811] transition-colors whitespace-nowrap shrink-0 after:content-[''] after:absolute after:bottom-0 after:inset-x-0 after:h-[1.5px] after:bg-[#B88B36] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B88B36] rounded"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Language Switcher & Primary CTA */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <button
            type="button"
            onClick={onToggleLang}
            aria-label={
              lang === 'ar' ? 'Switch language to English' : 'تغيير اللغة إلى العربية'
            }
            className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-2 text-xs sm:text-sm font-medium text-[#241811] border border-[#E6DDD0] bg-white/80 hover:bg-[#F2ECE1] rounded-lg transition-colors whitespace-nowrap shrink-0 min-h-[40px] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B88B36]"
          >
            <Globe className="w-3.5 h-3.5 text-[#8E6720]" aria-hidden="true" />
            <span>{t.switchLangLabel}</span>
          </button>

          <a
            href="#appointment"
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-[#FAF7F2] bg-[#241811] hover:bg-[#3B281E] rounded-lg transition-colors whitespace-nowrap shrink-0 min-h-[40px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B88B36]"
          >
            {t.bookNow}
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? t.closeMenu : t.openMenu}
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-[#E6DDD0] bg-white/80 text-[#241811] hover:bg-[#F2ECE1] transition-colors shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B88B36]"
          >
            {mobileOpen ? (
              <X className="w-5 h-5" aria-hidden="true" />
            ) : (
              <Menu className="w-5 h-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Smooth Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden bg-[#FAF7F2]/98 backdrop-blur-lg border-b border-[#E6DDD0] px-4 py-5 shadow-lg"
          >
            <nav
              aria-label={lang === 'ar' ? 'قائمة الجوال' : 'Mobile Navigation'}
              className="flex flex-col gap-1"
            >
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleMobileNavClick}
                  className="px-3 py-3 text-base font-medium text-[#241811] hover:bg-[#F2ECE1] rounded-lg transition-colors min-h-[44px] flex items-center"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#appointment"
                onClick={handleMobileNavClick}
                className="mt-3 w-full inline-flex items-center justify-center px-5 py-3 text-sm font-semibold text-[#FAF7F2] bg-[#241811] hover:bg-[#3B281E] rounded-lg transition-colors min-h-[44px]"
              >
                {t.bookNow}
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
