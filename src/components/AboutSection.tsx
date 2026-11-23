import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { CLINIC_CONFIG, CLINIC_IMAGES, Language } from '../data/clinicConfig';
import { TranslationContent } from '../data/translations';
import { SafeImage } from './SafeImage';

interface AboutSectionProps {
  lang: Language;
  t: TranslationContent['about'];
}

export function AboutSection({ lang, t }: AboutSectionProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ['-4%', '6%']);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 lg:py-28 bg-white border-y border-[#E6DDD0]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          {/* Portrait Architectural Media Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative min-h-[380px] lg:min-h-[540px] rounded-2xl overflow-hidden border border-[#E6DDD0] bg-[#F2ECE1]"
          >
            <motion.div style={{ y: imageY }} className="h-[110%] w-full -mt-[5%]">
              <SafeImage
                src={CLINIC_IMAGES.about}
                alt={
                  lang === 'ar'
                    ? 'غرفة علاج واستشارة حديثة في مركز كينغز للأسنان الهلال'
                    : 'Serene consultation and treatment suite at Kings Dental Center Hilal'
                }
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>

          {/* Editorial Narrative & Pillars Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-between py-2"
          >
            <div>
              <p className="text-xs sm:text-sm font-medium text-[#8E6720] mb-3">
                {t.kicker}
              </p>

              <h2 className="font-display font-semibold text-3xl sm:text-4xl lg:text-[42px] leading-[1.2] text-[#241811] text-balance">
                {t.headline}
              </h2>

              <div className="mt-6 space-y-4 text-base sm:text-lg leading-relaxed text-[#5A4335] max-w-2xl">
                <p>{t.paragraph1}</p>
                <p>{t.paragraph2}</p>
              </div>
            </div>

            {/* 3 Care Pillars separated by hairline rules */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-[#E6DDD0]">
              {t.pillars.map((pillar, index) => (
                <div key={pillar.title} className="space-y-2">
                  <span className="text-xs font-semibold text-[#8E6720] tabular-nums block">
                    0{index + 1}
                  </span>
                  <h3 className="text-base font-semibold text-[#241811]">
                    {pillar.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#5A4335]">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Verified Registration Metadata */}
            <div className="mt-8 pt-6 border-t border-[#E6DDD0] flex flex-wrap items-center gap-x-4 gap-y-1 text-xs sm:text-sm text-[#5A4335]">
              <span>{t.metaLabel}</span>
              <span aria-hidden="true" className="text-[#B88B36]">
                ·
              </span>
              <span className="tabular-nums font-medium text-[#241811]">
                {t.crLabel}
              </span>
              <span aria-hidden="true" className="text-[#B88B36]">
                ·
              </span>
              <span>
                {lang === 'ar'
                  ? CLINIC_CONFIG.location.address.ar
                  : CLINIC_CONFIG.location.address.en}
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
