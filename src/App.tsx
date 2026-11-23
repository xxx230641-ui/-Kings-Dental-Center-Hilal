import { useEffect, useState } from 'react';
import { motion, MotionConfig } from 'motion/react';
import { Language } from './data/clinicConfig';
import { TRANSLATIONS } from './data/translations';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { WhyUsSection } from './components/WhyUsSection';
import { ReviewsSection } from './components/ReviewsSection';
import { AppointmentSection } from './components/AppointmentSection';
import { HoursAndLocationSection } from './components/HoursAndLocationSection';
import { Footer } from './components/Footer';
import { BackToTopButton } from './components/BackToTopButton';

export default function App() {
  const [lang, setLang] = useState<Language>('ar');
  const [preselectedServiceId, setPreselectedServiceId] = useState<string>('');

  const t = TRANSLATIONS[lang];

  useEffect(() => {
    const html = document.documentElement;
    html.lang = lang;
    html.dir = lang === 'ar' ? 'rtl' : 'ltr';

    document.title =
      lang === 'ar'
        ? 'مركز كينغز للأسنان الهلال | Kings Dental Center Hilal Doha'
        : 'Kings Dental Center Hilal | Luxury Dental Care in Doha, Qatar';

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        lang === 'ar'
          ? 'مركز كينغز للأسنان الهلال على الطريق الدائري الرابع، الدوحة، قطر. عناية شاملة بصحة وجمال الأسنان، ساعات عمل ممتدة 24 ساعة من السبت للخميس وتقييم 4.8 من 1,477 مراجعة.'
          : 'Kings Dental Center Hilal on D-Ring Road, Doha, Qatar. Comprehensive dental care open 24 hours Sat–Thu with a 4.8/5 rating from 1,477 reviews.',
      );
    }
  }, [lang]);

  function handleToggleLang() {
    setLang((prev) => (prev === 'ar' ? 'en' : 'ar'));
  }

  function handleSelectServiceForBooking(serviceId: string) {
    setPreselectedServiceId(serviceId);
    const el = document.getElementById('appointment');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <MotionConfig reducedMotion="user">
      <div
        dir={lang === 'ar' ? 'rtl' : 'ltr'}
        className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#241811]"
      >
        <Navbar lang={lang} onToggleLang={handleToggleLang} t={t.nav} />

        <motion.main
          key={lang}
          initial={{ opacity: 0.85 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.18, ease: 'easeOut' }}
          className="flex-1"
        >
          <HeroSection lang={lang} t={t.hero} />
          <AboutSection lang={lang} t={t.about} />
          <ServicesSection
            lang={lang}
            t={t.services}
            onSelectServiceForBooking={handleSelectServiceForBooking}
          />
          <WhyUsSection t={t.whyUs} />
          <ReviewsSection t={t.reviews} />
          <AppointmentSection
            lang={lang}
            t={t.appointment}
            preselectedServiceId={preselectedServiceId}
          />
          <HoursAndLocationSection
            lang={lang}
            hoursT={t.hours}
            locationT={t.location}
          />
        </motion.main>

        <Footer lang={lang} navT={t.nav} footerT={t.footer} />
        <BackToTopButton label={t.footer.backToTop} />
      </div>
    </MotionConfig>
  );
}
