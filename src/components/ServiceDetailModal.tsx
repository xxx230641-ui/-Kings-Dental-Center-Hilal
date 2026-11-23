import { useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Check, X } from 'lucide-react';
import { Language, ServiceItem } from '../data/clinicConfig';
import { TranslationContent } from '../data/translations';
import { SafeImage } from './SafeImage';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  lang: Language;
  t: TranslationContent['services'];
  onClose: () => void;
  onRequestService: (serviceId: string) => void;
}

export function ServiceDetailModal({
  service,
  lang,
  t,
  onClose,
  onRequestService,
}: ServiceDetailModalProps) {
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onClose();
      }
    }
    if (service) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [service, onClose]);

  return (
    <AnimatePresence>
      {service && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="service-modal-title"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#241811]/65 backdrop-blur-sm"
            aria-hidden="true"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 14 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 14 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-2xl bg-[#FAF7F2] border border-[#E6DDD0] rounded-2xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col"
          >
            <div className="relative h-52 sm:h-64 shrink-0 bg-[#F2ECE1]">
              <SafeImage
                src={service.image}
                alt={service.title[lang]}
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-[#241811]/70 via-[#241811]/20 to-transparent"
                aria-hidden="true"
              />

              <button
                type="button"
                onClick={onClose}
                aria-label={t.closeModal}
                className="absolute top-4 end-4 w-10 h-10 rounded-full bg-[#241811]/80 hover:bg-[#241811] text-[#FAF7F2] inline-flex items-center justify-center transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E7D29A]"
              >
                <X className="w-5 h-5" aria-hidden="true" />
              </button>

              <div className="absolute bottom-4 inset-x-6 text-[#FAF7F2]">
                <p className="text-xs font-medium text-[#E7D29A]">
                  {service.number} · {service.categoryLabel[lang]}
                </p>
                <h3
                  id="service-modal-title"
                  className="font-display text-2xl sm:text-3xl font-semibold mt-1"
                >
                  {service.title[lang]}
                </h3>
              </div>
            </div>

            <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
              <p className="text-base leading-relaxed text-[#5A4335]">
                {service.detailedOverview[lang]}
              </p>

              <div className="pt-4 border-t border-[#E6DDD0]">
                <h4 className="text-sm font-semibold text-[#241811] mb-3">
                  {t.highlightsTitle}
                </h4>
                <ul className="space-y-2.5">
                  {service.careHighlights[lang].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm text-[#5A4335]"
                    >
                      <Check
                        className="w-4 h-4 text-[#8E6720] shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-xs text-[#5A4335] pt-2">{t.verifiedNote}</p>

              <div className="pt-2 flex flex-wrap items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-2.5 text-sm font-medium text-[#5A4335] hover:text-[#241811] border border-[#E6DDD0] rounded-xl transition-colors min-h-[44px] cursor-pointer"
                >
                  {t.closeModal}
                </button>
                <button
                  type="button"
                  onClick={() => onRequestService(service.id)}
                  className="px-6 py-2.5 text-sm font-semibold text-[#FAF7F2] bg-[#241811] hover:bg-[#3B281E] rounded-xl transition-colors min-h-[44px] cursor-pointer"
                >
                  {t.requestThisService}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
