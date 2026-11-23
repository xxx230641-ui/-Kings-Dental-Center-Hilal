import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';
import { CLINIC_IMAGES, Language } from '../data/clinicConfig';
import { TranslationContent } from '../data/translations';
import { getClinicOpenStatus } from '../utils/clinicHelpers';
import { SafeImage } from './SafeImage';
import { SculpturalTooth3D } from './SculpturalTooth3D';

interface HeroSectionProps {
  lang: Language;
  t: TranslationContent['hero'];
}

export function HeroSection({ lang, t }: HeroSectionProps) {
  const containerRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '10%']);

  const status = getClinicOpenStatus();
  const statusLabel = status.is24HoursToday
    ? t.openStatus24
    : status.isOpen
      ? t.openStatusOpen
      : t.openStatusClosed;

  const DirectionArrow = lang === 'ar' ? ArrowLeft : ArrowRight;

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-[#FAF7F2]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Editorial Copy Column */}
          <motion.div
            initial={{ opacity: 0.01, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            {/* Unboxed Metadata Eyebrow */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs sm:text-sm font-medium text-[#8E6720] mb-5">
              <span>{t.eyebrow}</span>
              <span aria-hidden="true" className="text-[#C59B43]">
                ·
              </span>
              <span className="text-[#5A4335]">{statusLabel}</span>
            </div>

            <h1
              style={{ fontSize: 'clamp(2.25rem, 4.1vw, 3.75rem)' }}
              className="font-display font-semibold leading-[1.15] tracking-tight text-[#241811] text-balance"
            >
              {t.headline}
            </h1>

            <p className="mt-6 text-base sm:text-lg leading-relaxed text-[#5A4335] max-w-xl">
              {t.subtext}
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <motion.a
                href="#appointment"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.16 }}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-sm sm:text-base font-semibold text-[#FAF7F2] bg-[#241811] hover:bg-[#3B281E] rounded-xl shadow-sm transition-colors whitespace-nowrap shrink-0 min-h-[48px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B88B36]"
              >
                <span>{t.primaryCta}</span>
                <DirectionArrow className="w-4 h-4 text-[#E7D29A]" aria-hidden="true" />
              </motion.a>

              <motion.a
                href="#services"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.16 }}
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm sm:text-base font-medium text-[#241811] border border-[#D8CCB9] bg-white/70 hover:bg-[#F2ECE1] rounded-xl transition-colors whitespace-nowrap shrink-0 min-h-[48px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B88B36]"
              >
                {t.secondaryCta}
              </motion.a>
            </div>

            {/* Clean Verified Rating Strip (Unboxed Editorial Typography) */}
            <div className="mt-10 pt-7 border-t border-[#E6DDD0] flex flex-wrap items-center gap-x-6 gap-y-3">
              <a
                href="#reviews"
                className="inline-flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B88B36] rounded"
              >
                <div className="flex items-center gap-0.5 text-[#B88B36]" aria-hidden="true">
                  {[0, 1, 2, 3, 4].map((idx) => (
                    <Star key={idx} className="w-4 h-4 fill-[#B88B36]" />
                  ))}
                </div>
                <span className="text-base font-semibold text-[#241811] tabular-nums">
                  {t.ratingText}
                </span>
                <span aria-hidden="true" className="text-[#B88B36]">
                  ·
                </span>
                <span className="text-sm text-[#5A4335] group-hover:text-[#241811] transition-colors tabular-nums">
                  {t.reviewsText}
                </span>
              </a>
            </div>
          </motion.div>

          {/* Architectural Visual Composition Column */}
          <motion.div
            initial={{ opacity: 0.92, scale: 0.99 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative min-h-[340px] sm:min-h-[440px] lg:min-h-[540px]"
          >
            <div className="relative h-full w-full rounded-2xl overflow-hidden border border-[#E6DDD0] bg-[#F2ECE1]">
              <motion.div style={{ y: imageY }} className="h-[112%] w-full -mt-[4%]">
                <SafeImage
                  src={CLINIC_IMAGES.hero}
                  alt={
                    lang === 'ar'
                      ? 'الاستقبال الفاخر في مركز كينغز للأسنان الهلال بالدوحة'
                      : 'Luxury reception lounge at Kings Dental Center Hilal in Doha'
                  }
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <div
                className="absolute inset-0 bg-gradient-to-t from-[#241811]/35 via-transparent to-transparent pointer-events-none"
                aria-hidden="true"
              />
            </div>

            {/* Interactive 3D Sculptural Crest Inset */}
            <div className="mt-4 sm:mt-0 sm:absolute sm:bottom-5 sm:start-5 z-10">
              <SculpturalTooth3D title={t.crestTitle} subtitle={t.crestSubtitle} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
