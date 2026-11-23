import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import {
  Language,
  ServiceCategory,
  ServiceItem,
  SERVICES_LIST,
} from '../data/clinicConfig';
import { TranslationContent } from '../data/translations';
import { SafeImage } from './SafeImage';
import { ServiceDetailModal } from './ServiceDetailModal';

interface ServicesSectionProps {
  lang: Language;
  t: TranslationContent['services'];
  onSelectServiceForBooking: (serviceId: string) => void;
}

export function ServicesSection({
  lang,
  t,
  onSelectServiceForBooking,
}: ServicesSectionProps) {
  const [activeFilter, setActiveFilter] = useState<ServiceCategory>('all');
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const filteredServices =
    activeFilter === 'all'
      ? SERVICES_LIST
      : SERVICES_LIST.filter((service) => service.category === activeFilter);

  const filterTabs: { id: ServiceCategory; label: string }[] = [
    { id: 'all', label: t.filters.all },
    { id: 'cosmetic', label: t.filters.cosmetic },
    { id: 'restorative', label: t.filters.restorative },
    { id: 'family', label: t.filters.family },
  ];

  const DirectionArrow = lang === 'ar' ? ArrowLeft : ArrowRight;

  function handleRequestFromModal(serviceId: string) {
    setSelectedService(null);
    onSelectServiceForBooking(serviceId);
  }

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header & Segmented Filter Controls */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            <p className="text-xs sm:text-sm font-medium text-[#8E6720] mb-3">
              {t.kicker}
            </p>
            <h2 className="font-display font-semibold text-3xl sm:text-4xl lg:text-[42px] leading-[1.2] text-[#241811] text-balance">
              {t.headline}
            </h2>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-[#5A4335]">
              {t.subtext}
            </p>
          </motion.div>

          {/* Interactive Filter Controls */}
          <div
            role="group"
            aria-label={lang === 'ar' ? 'تصفية الخدمات' : 'Filter Services'}
            className="inline-flex flex-wrap items-center gap-1.5 p-1.5 bg-[#F2ECE1] border border-[#E6DDD0] rounded-xl self-start lg:self-auto"
          >
            {filterTabs.map((tab) => {
              const isActive = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveFilter(tab.id)}
                  aria-pressed={isActive}
                  className={`px-3.5 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 min-h-[40px] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B88B36] ${
                    isActive
                      ? 'bg-[#241811] text-[#FAF7F2] shadow-sm'
                      : 'text-[#5A4335] hover:text-[#241811]'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredServices.map((service, index) => (
            <motion.article
              key={service.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.45,
                delay: Math.min(index * 0.05, 0.25),
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -6 }}
              className="group bg-white border border-[#E6DDD0] rounded-2xl overflow-hidden flex flex-col transition-shadow duration-300 hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[#F2ECE1]">
                <SafeImage
                  src={service.image}
                  alt={service.title[lang]}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>

              <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs text-[#8E6720] font-medium mb-2">
                    <span className="tabular-nums">{service.number}</span>
                    <span aria-hidden="true">·</span>
                    <span>{service.categoryLabel[lang]}</span>
                  </div>

                  <h3 className="font-display text-xl font-semibold text-[#241811] leading-snug">
                    {service.title[lang]}
                  </h3>

                  <p className="mt-2.5 text-sm leading-relaxed text-[#5A4335]">
                    {service.shortDescription[lang]}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-[#E6DDD0]">
                  <button
                    type="button"
                    onClick={() => setSelectedService(service)}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#241811] hover:text-[#8E6720] transition-colors cursor-pointer min-h-[40px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B88B36] rounded"
                  >
                    <span>{t.learnMore}</span>
                    <DirectionArrow
                      className="w-4 h-4 text-[#B88B36] transition-transform duration-200 group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5"
                      aria-hidden="true"
                    />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <ServiceDetailModal
        service={selectedService}
        lang={lang}
        t={t}
        onClose={() => setSelectedService(null)}
        onRequestService={handleRequestFromModal}
      />
    </section>
  );
}
