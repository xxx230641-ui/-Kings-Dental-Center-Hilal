import { motion } from 'motion/react';
import {
  CalendarCheck,
  Clock,
  HeartHandshake,
  LayoutList,
  MapPin,
} from 'lucide-react';
import { TranslationContent } from '../data/translations';

interface WhyUsSectionProps {
  t: TranslationContent['whyUs'];
}

export function WhyUsSection({ t }: WhyUsSectionProps) {
  const icons = [
    HeartHandshake,
    CalendarCheck,
    MapPin,
    Clock,
    LayoutList,
  ];

  return (
    <section
      id="why-us"
      className="py-20 lg:py-28 bg-[#F2ECE1] border-y border-[#E6DDD0]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mb-12"
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

        {/* Asymmetric Editorial Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          {t.items.map((item, idx) => {
            const Icon = icons[idx % icons.length];
            const spanClass =
              idx < 2 ? 'md:col-span-3' : 'md:col-span-2';

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.45,
                  delay: idx * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`${spanClass} bg-[#FAF7F2] border border-[#E6DDD0] rounded-2xl p-6 sm:p-8 flex flex-col justify-between`}
              >
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="w-11 h-11 rounded-xl border border-[#D8CCB9] bg-white flex items-center justify-center text-[#8E6720]">
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <span className="text-xs font-semibold text-[#8E6720] tabular-nums">
                    0{idx + 1}
                  </span>
                </div>

                <div>
                  <h3 className="font-display text-xl font-semibold text-[#241811] mb-2.5">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base leading-relaxed text-[#5A4335]">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
