import { motion } from 'motion/react';
import { ExternalLink, Star } from 'lucide-react';
import { CLINIC_CONFIG } from '../data/clinicConfig';
import { TranslationContent } from '../data/translations';
import { CountUpNumber } from './CountUpNumber';

interface ReviewsSectionProps {
  t: TranslationContent['reviews'];
}

export function ReviewsSection({ t }: ReviewsSectionProps) {
  return (
    <section
      id="reviews"
      className="py-20 lg:py-28 bg-[#241811] text-[#FAF7F2]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Editorial Heading & Transparent Link */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-6"
          >
            <p className="text-xs sm:text-sm font-medium text-[#E7D29A] tracking-wide">
              {t.kicker}
            </p>

            <h2 className="font-display font-semibold text-3xl sm:text-4xl lg:text-[44px] leading-[1.2] text-[#FAF7F2] text-balance">
              {t.headline}
            </h2>

            <p className="text-base sm:text-lg leading-relaxed text-[#FAF7F2]/80 max-w-xl">
              {t.subtext}
            </p>

            <p className="text-sm text-[#E7D29A]/85 leading-relaxed">
              {t.sourceNote}
            </p>

            <div className="pt-2">
              <motion.a
                href={CLINIC_CONFIG.location.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.16 }}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm sm:text-base font-semibold text-[#241811] bg-[#E7D29A] hover:bg-[#F1E1B5] rounded-xl transition-colors whitespace-nowrap shrink-0 min-h-[48px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FAF7F2]"
              >
                <span>{t.ctaLabel}</span>
                <ExternalLink className="w-4 h-4" aria-hidden="true" />
              </motion.a>
            </div>
          </motion.div>

          {/* Verified Numeric Showcase Panel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 bg-[#312118] border border-[#E7D29A]/20 rounded-2xl p-7 sm:p-10"
          >
            <div className="flex flex-wrap items-baseline gap-4 pb-8 border-b border-[#E7D29A]/15">
              <div className="font-display text-5xl sm:text-6xl font-semibold text-[#E7D29A] tabular-nums">
                <CountUpNumber value={CLINIC_CONFIG.reviews.rating} decimals={1} />
              </div>
              <div className="space-y-1.5">
                <div className="flex items-center gap-1 text-[#E7D29A]" aria-hidden="true">
                  {[0, 1, 2, 3, 4].map((idx) => (
                    <Star key={idx} className="w-4 h-4 fill-[#E7D29A]" />
                  ))}
                </div>
                <p className="text-sm text-[#FAF7F2]/85">
                  <span className="font-medium">{t.outOf}</span>
                  <span aria-hidden="true" className="mx-2 text-[#E7D29A]/60">
                    ·
                  </span>
                  <span className="font-semibold text-[#FAF7F2]">
                    <CountUpNumber
                      value={CLINIC_CONFIG.reviews.count}
                      formatComma={true}
                    />
                  </span>{' '}
                  <span>{t.reviewsLabel}</span>
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-7 border-b border-[#E7D29A]/15">
              {t.metrics.map((metric) => (
                <div key={metric.label} className="space-y-1">
                  <p className="text-xs text-[#FAF7F2]/70 tracking-wide">
                    {metric.label}
                  </p>
                  <p className="text-lg font-semibold text-[#FAF7F2] tabular-nums">
                    {metric.value}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-6 text-xs sm:text-sm text-[#FAF7F2]/70 leading-relaxed">
              {t.transparencyNote}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
