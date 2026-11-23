import { FormEvent, useEffect, useState } from 'react';
import { motion } from 'motion/react';
import {
  CheckCircle2,
  MessageCircle,
  Phone,
  Send,
} from 'lucide-react';
import {
  CLINIC_CONFIG,
  Language,
  SERVICES_LIST,
} from '../data/clinicConfig';
import { TranslationContent } from '../data/translations';
import {
  AppointmentValidationResult,
  buildWhatsAppAppointmentUrl,
  validateAppointmentRequest,
} from '../utils/clinicHelpers';

interface AppointmentSectionProps {
  lang: Language;
  t: TranslationContent['appointment'];
  preselectedServiceId: string;
}

export function AppointmentSection({
  lang,
  t,
  preselectedServiceId,
}: AppointmentSectionProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [serviceId, setServiceId] = useState(preselectedServiceId || '');
  const [preferredTime, setPreferredTime] = useState(
    t.fields.preferredDayOptions[0],
  );
  const [notes, setNotes] = useState('');
  const [errors, setErrors] = useState<AppointmentValidationResult['errors']>({});
  const [submittedRecord, setSubmittedRecord] = useState<{
    name: string;
    phone: string;
    serviceTitle: string;
    preferredTime: string;
    notes: string;
    whatsappHref: string;
  } | null>(null);

  useEffect(() => {
    if (preselectedServiceId) {
      setServiceId(preselectedServiceId);
      setSubmittedRecord(null);
      setErrors((prev) => ({ ...prev, serviceId: undefined }));
    }
  }, [preselectedServiceId]);

  useEffect(() => {
    setPreferredTime(t.fields.preferredDayOptions[0]);
  }, [lang, t.fields.preferredDayOptions]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const validation = validateAppointmentRequest({
      name,
      phone,
      serviceId,
      preferredTime,
      notes,
    });

    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setErrors({});
    const matchedService = SERVICES_LIST.find((item) => item.id === serviceId);
    const serviceTitle = matchedService ? matchedService.title[lang] : serviceId;

    const whatsappHref = buildWhatsAppAppointmentUrl(
      CLINIC_CONFIG.contact.whatsappUrl,
      {
        name,
        phone,
        serviceTitle,
        preferredTime,
        notes,
      },
      lang,
    );

    setSubmittedRecord({
      name: name.trim(),
      phone: phone.trim(),
      serviceTitle,
      preferredTime,
      notes: notes.trim(),
      whatsappHref,
    });
  }

  function handleReset() {
    setSubmittedRecord(null);
    setName('');
    setPhone('');
    setNotes('');
    setErrors({});
  }

  return (
    <section id="appointment" className="py-20 lg:py-28 bg-white border-b border-[#E6DDD0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Direct Conversion Copy & Instant Call / WhatsApp */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-6"
          >
            <p className="text-xs sm:text-sm font-medium text-[#8E6720]">
              {t.kicker}
            </p>

            <h2 className="font-display font-semibold text-3xl sm:text-4xl lg:text-[42px] leading-[1.2] text-[#241811] text-balance">
              {t.headline}
            </h2>

            <p className="text-base sm:text-lg leading-relaxed text-[#5A4335]">
              {t.subtext}
            </p>

            {/* Primary Phone & WhatsApp Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row lg:flex-col gap-3.5">
              <motion.a
                href={CLINIC_CONFIG.contact.phoneHref}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.16 }}
                className="inline-flex items-center justify-between gap-4 px-6 py-4 bg-[#241811] hover:bg-[#3B281E] text-[#FAF7F2] rounded-xl transition-colors min-h-[54px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B88B36]"
              >
                <span className="inline-flex items-center gap-3 font-semibold text-sm sm:text-base">
                  <Phone className="w-4 h-4 text-[#E7D29A]" aria-hidden="true" />
                  <span>{t.callNow}</span>
                </span>
                <span className="text-sm text-[#E7D29A] tabular-nums" dir="ltr">
                  {CLINIC_CONFIG.contact.phoneDisplay}
                </span>
              </motion.a>

              <motion.a
                href={CLINIC_CONFIG.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.16 }}
                className="inline-flex items-center justify-between gap-4 px-6 py-4 bg-[#F2ECE1] hover:bg-[#E6DDD0] text-[#241811] border border-[#D8CCB9] rounded-xl transition-colors min-h-[54px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B88B36]"
              >
                <span className="inline-flex items-center gap-3 font-semibold text-sm sm:text-base">
                  <MessageCircle className="w-4 h-4 text-[#8E6720]" aria-hidden="true" />
                  <span>{t.whatsappBook}</span>
                </span>
                <span className="text-sm text-[#5A4335] tabular-nums" dir="ltr">
                  WhatsApp
                </span>
              </motion.a>
            </div>
          </motion.div>

          {/* Appointment Request Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 bg-[#FAF7F2] border border-[#E6DDD0] rounded-2xl p-6 sm:p-8 lg:p-10"
          >
            <h3 className="font-display text-2xl font-semibold text-[#241811]">
              {t.formTitle}
            </h3>

            <p className="mt-2 text-xs sm:text-sm text-[#5A4335] leading-relaxed pb-6 border-b border-[#E6DDD0]">
              {t.formNotice}
            </p>

            {submittedRecord ? (
              <div
                className="mt-6 space-y-5 bg-white border border-[#D8CCB9] rounded-xl p-6"
                role="status"
                aria-live="polite"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2
                    className="w-6 h-6 text-[#8E6720] shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <div>
                    <h4 className="font-display text-xl font-semibold text-[#241811]">
                      {t.successTitle}
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-[#5A4335]">
                      {t.successBody}
                    </p>
                  </div>
                </div>

                <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#E6DDD0] text-sm">
                  <div>
                    <dt className="text-xs text-[#5A4335]">
                      {t.fields.nameLabel}
                    </dt>
                    <dd className="font-medium text-[#241811] mt-0.5">
                      {submittedRecord.name}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs text-[#5A4335]">
                      {t.fields.phoneLabel}
                    </dt>
                    <dd className="font-medium text-[#241811] mt-0.5 tabular-nums" dir="ltr">
                      {submittedRecord.phone}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs text-[#5A4335]">
                      {t.fields.serviceLabel}
                    </dt>
                    <dd className="font-medium text-[#241811] mt-0.5">
                      {submittedRecord.serviceTitle}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs text-[#5A4335]">
                      {t.fields.preferredDayLabel}
                    </dt>
                    <dd className="font-medium text-[#241811] mt-0.5">
                      {submittedRecord.preferredTime}
                    </dd>
                  </div>
                </dl>

                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <a
                    href={submittedRecord.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-[#FAF7F2] bg-[#241811] hover:bg-[#3B281E] rounded-xl transition-colors min-h-[44px]"
                  >
                    <MessageCircle className="w-4 h-4 text-[#E7D29A]" aria-hidden="true" />
                    <span>{t.sendViaWhatsapp}</span>
                  </a>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="px-4 py-3 text-sm font-medium text-[#5A4335] hover:text-[#241811] border border-[#E6DDD0] rounded-xl transition-colors min-h-[44px] cursor-pointer"
                  >
                    {t.newRequestBtn}
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="appointment-name"
                      className="block text-sm font-medium text-[#241811] mb-1.5"
                    >
                      {t.fields.nameLabel}
                    </label>
                    <input
                      id="appointment-name"
                      type="text"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        if (errors.name) {
                          setErrors((prev) => ({ ...prev, name: undefined }));
                        }
                      }}
                      placeholder={t.fields.namePlaceholder}
                      aria-invalid={Boolean(errors.name)}
                      className={`w-full px-4 py-3 rounded-xl bg-white border text-sm text-[#241811] placeholder:text-[#5A4335]/50 focus:outline-none focus:ring-2 focus:ring-[#B88B36] ${
                        errors.name ? 'border-red-700' : 'border-[#D8CCB9]'
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1.5 text-xs text-red-700" role="alert">
                        {t.errors.nameRequired}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="appointment-phone"
                      className="block text-sm font-medium text-[#241811] mb-1.5"
                    >
                      {t.fields.phoneLabel}
                    </label>
                    <input
                      id="appointment-phone"
                      type="tel"
                      dir="ltr"
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value);
                        if (errors.phone) {
                          setErrors((prev) => ({ ...prev, phone: undefined }));
                        }
                      }}
                      placeholder={t.fields.phonePlaceholder}
                      aria-invalid={Boolean(errors.phone)}
                      className={`w-full px-4 py-3 rounded-xl bg-white border text-sm text-[#241811] placeholder:text-[#5A4335]/50 tabular-nums focus:outline-none focus:ring-2 focus:ring-[#B88B36] ${
                        errors.phone ? 'border-red-700' : 'border-[#D8CCB9]'
                      }`}
                    />
                    {errors.phone && (
                      <p className="mt-1.5 text-xs text-red-700" role="alert">
                        {t.errors.phoneInvalid}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="appointment-service"
                      className="block text-sm font-medium text-[#241811] mb-1.5"
                    >
                      {t.fields.serviceLabel}
                    </label>
                    <select
                      id="appointment-service"
                      value={serviceId}
                      onChange={(e) => {
                        setServiceId(e.target.value);
                        if (errors.serviceId) {
                          setErrors((prev) => ({ ...prev, serviceId: undefined }));
                        }
                      }}
                      aria-invalid={Boolean(errors.serviceId)}
                      className={`w-full px-4 py-3 rounded-xl bg-white border text-sm text-[#241811] focus:outline-none focus:ring-2 focus:ring-[#B88B36] ${
                        errors.serviceId ? 'border-red-700' : 'border-[#D8CCB9]'
                      }`}
                    >
                      <option value="">{t.fields.servicePlaceholder}</option>
                      {SERVICES_LIST.map((service) => (
                        <option key={service.id} value={service.id}>
                          {service.title[lang]}
                        </option>
                      ))}
                    </select>
                    {errors.serviceId && (
                      <p className="mt-1.5 text-xs text-red-700" role="alert">
                        {t.errors.serviceRequired}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="appointment-window"
                      className="block text-sm font-medium text-[#241811] mb-1.5"
                    >
                      {t.fields.preferredDayLabel}
                    </label>
                    <select
                      id="appointment-window"
                      value={preferredTime}
                      onChange={(e) => setPreferredTime(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#D8CCB9] text-sm text-[#241811] focus:outline-none focus:ring-2 focus:ring-[#B88B36]"
                    >
                      {t.fields.preferredDayOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="appointment-notes"
                    className="block text-sm font-medium text-[#241811] mb-1.5"
                  >
                    {t.fields.notesLabel}
                  </label>
                  <textarea
                    id="appointment-notes"
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder={t.fields.notesPlaceholder}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#D8CCB9] text-sm text-[#241811] placeholder:text-[#5A4335]/50 focus:outline-none focus:ring-2 focus:ring-[#B88B36]"
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.99 }}
                  transition={{ duration: 0.16 }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-sm sm:text-base font-semibold text-[#FAF7F2] bg-[#241811] hover:bg-[#3B281E] rounded-xl transition-colors min-h-[48px] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B88B36]"
                >
                  <Send className="w-4 h-4 text-[#E7D29A]" aria-hidden="true" />
                  <span>{t.submitBtn}</span>
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
