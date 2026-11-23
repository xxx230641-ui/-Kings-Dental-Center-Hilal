import { motion } from 'motion/react';
import { Clock, ExternalLink, MapPin, Phone } from 'lucide-react';
import { CLINIC_CONFIG, Language } from '../data/clinicConfig';
import { TranslationContent } from '../data/translations';
import { getClinicOpenStatus } from '../utils/clinicHelpers';

interface HoursAndLocationSectionProps {
  lang: Language;
  hoursT: TranslationContent['hours'];
  locationT: TranslationContent['location'];
}

export function HoursAndLocationSection({
  lang,
  hoursT,
  locationT,
}: HoursAndLocationSectionProps) {
  const status = getClinicOpenStatus();

  return (
    <section id="location" className="py-20 lg:py-28 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Opening Hours Column */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 bg-white border border-[#E6DDD0] rounded-2xl p-6 sm:p-8 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-[#8E6720] mb-3">
                <Clock className="w-4 h-4" aria-hidden="true" />
                <span>{hoursT.kicker}</span>
              </div>

              <h2 className="font-display font-semibold text-2xl sm:text-3xl text-[#241811]">
                {hoursT.headline}
              </h2>

              <p className="mt-2.5 text-sm leading-relaxed text-[#5A4335]">
                {hoursT.subtext}
              </p>

              <dl className="mt-7 divide-y divide-[#E6DDD0]">
                {CLINIC_CONFIG.openingHours.map((entry) => {
                  const isToday = entry.dayKey === status.dayKey;
                  return (
                    <div
                      key={entry.dayKey}
                      className={`py-3.5 flex items-center justify-between gap-4 text-sm ${
                        isToday ? 'font-semibold text-[#241811]' : 'text-[#5A4335]'
                      }`}
                    >
                      <dt className="flex items-center gap-2">
                        <span>{entry.label[lang]}</span>
                        {isToday && (
                          <span className="text-xs font-medium text-[#8E6720]">
                            · {hoursT.todayBadge}
                          </span>
                        )}
                      </dt>
                      <dd
                        className={`tabular-nums ${
                          entry.is24Hours
                            ? 'text-[#8E6720] font-medium'
                            : 'text-[#241811]'
                        }`}
                      >
                        {entry.hours[lang]}
                      </dd>
                    </div>
                  );
                })}
              </dl>
            </div>

            <p className="mt-6 pt-5 border-t border-[#E6DDD0] text-xs sm:text-sm text-[#5A4335]">
              {hoursT.emergencyNote}
            </p>
          </motion.div>

          {/* Interactive Google Map & Branch Details Column */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 bg-white border border-[#E6DDD0] rounded-2xl overflow-hidden flex flex-col"
          >
            <div className="p-6 sm:p-8 border-b border-[#E6DDD0]">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-[#8E6720] mb-2">
                    <MapPin className="w-4 h-4" aria-hidden="true" />
                    <span>{locationT.kicker}</span>
                  </div>
                  <h2 className="font-display font-semibold text-2xl sm:text-3xl text-[#241811]">
                    {locationT.headline}
                  </h2>
                </div>

                <motion.a
                  href={CLINIC_CONFIG.location.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.16 }}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-[#FAF7F2] bg-[#241811] hover:bg-[#3B281E] rounded-xl transition-colors whitespace-nowrap shrink-0 min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B88B36]"
                >
                  <span>{locationT.getDirections}</span>
                  <ExternalLink className="w-4 h-4 text-[#E7D29A]" aria-hidden="true" />
                </motion.a>
              </div>

              <dl className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-5 pt-5 border-t border-[#E6DDD0] text-sm">
                <div>
                  <dt className="text-xs text-[#5A4335]">
                    {locationT.addressLabel}
                  </dt>
                  <dd className="font-medium text-[#241811] mt-1">
                    {CLINIC_CONFIG.location.address[lang]}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs text-[#5A4335]">
                    {locationT.phoneLabel}
                  </dt>
                  <dd className="mt-1">
                    <a
                      href={CLINIC_CONFIG.contact.phoneHref}
                      dir="ltr"
                      className="inline-flex items-center gap-1.5 font-medium text-[#241811] hover:text-[#8E6720] transition-colors tabular-nums"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#8E6720]" aria-hidden="true" />
                      <span>{CLINIC_CONFIG.contact.phoneDisplay}</span>
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs text-[#5A4335]">
                    {locationT.crLabel}
                  </dt>
                  <dd className="font-medium text-[#241811] mt-1 tabular-nums">
                    {CLINIC_CONFIG.brand.crNumber} · {CLINIC_CONFIG.location.city[lang]},{' '}
                    {CLINIC_CONFIG.location.country[lang]}
                  </dd>
                </div>
              </dl>
            </div>

            {/* Embedded Interactive Google Map */}
            <div className="relative flex-1 min-h-[300px] sm:min-h-[340px] bg-[#F2ECE1]">
              <iframe
                title={locationT.mapFallbackNote}
                src={CLINIC_CONFIG.location.googleMapsEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full min-h-[300px] sm:min-h-[340px] border-0"
                allowFullScreen
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
