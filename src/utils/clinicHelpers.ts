import { CLINIC_CONFIG, DayKey, Language } from '../data/clinicConfig';

export interface AppointmentFormInput {
  name: string;
  phone: string;
  serviceId: string;
  preferredTime: string;
  notes?: string;
}

export interface AppointmentValidationResult {
  isValid: boolean;
  errors: {
    name?: 'nameRequired';
    phone?: 'phoneInvalid';
    serviceId?: 'serviceRequired';
  };
}

export interface ClinicStatusResult {
  dayKey: DayKey;
  isOpen: boolean;
  is24HoursToday: boolean;
}

/**
 * Computes current Doha (Asia/Qatar, UTC+3) open status from clinic opening hours config.
 */
export function getClinicOpenStatus(referenceDate: Date = new Date()): ClinicStatusResult {
  const utcMs = referenceDate.getTime() + referenceDate.getTimezoneOffset() * 60_000;
  const qatarTime = new Date(utcMs + 3 * 60 * 60_000);
  const dayIndex = qatarTime.getDay();
  const hour = qatarTime.getHours();

  const entry =
    CLINIC_CONFIG.openingHours.find((item) => item.dayIndex === dayIndex) ??
    CLINIC_CONFIG.openingHours[0];

  if (entry.is24Hours) {
    return {
      dayKey: entry.dayKey,
      isOpen: true,
      is24HoursToday: true,
    };
  }

  const openHour = entry.openHour ?? 14;
  const closeHour = entry.closeHour ?? 22;
  const isOpen = hour >= openHour && hour < closeHour;

  return {
    dayKey: entry.dayKey,
    isOpen,
    is24HoursToday: false,
  };
}

/**
 * Validates appointment request inputs strictly without silent fallbacks.
 */
export function validateAppointmentRequest(
  input: AppointmentFormInput,
): AppointmentValidationResult {
  const errors: AppointmentValidationResult['errors'] = {};

  if (!input.name || input.name.trim().length < 2) {
    errors.name = 'nameRequired';
  }

  const digitsOnly = (input.phone || '').replace(/[^\d]/g, '');
  if (digitsOnly.length < 8 || digitsOnly.length > 15) {
    errors.phone = 'phoneInvalid';
  }

  if (!input.serviceId || input.serviceId.trim().length === 0) {
    errors.serviceId = 'serviceRequired';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

/**
 * Builds a prefilled WhatsApp inquiry link for the clinic reception.
 */
export function buildWhatsAppAppointmentUrl(
  baseUrl: string,
  data: {
    name: string;
    phone: string;
    serviceTitle: string;
    preferredTime: string;
    notes?: string;
  },
  lang: Language,
): string {
  const lines =
    lang === 'ar'
      ? [
          'السلام عليكم، أرغب بطلب موعد في مركز كينغز للأسنان الهلال:',
          `الاسم: ${data.name.trim()}`,
          `الهاتف: ${data.phone.trim()}`,
          `الخدمة: ${data.serviceTitle}`,
          `الفترة المفضلة: ${data.preferredTime}`,
          ...(data.notes?.trim() ? [`ملاحظات: ${data.notes.trim()}`] : []),
        ]
      : [
          'Hello Kings Dental Center Hilal, I would like to request an appointment:',
          `Name: ${data.name.trim()}`,
          `Phone: ${data.phone.trim()}`,
          `Service: ${data.serviceTitle}`,
          `Preferred Window: ${data.preferredTime}`,
          ...(data.notes?.trim() ? [`Notes: ${data.notes.trim()}`] : []),
        ];

  const separator = baseUrl.includes('?') ? '&' : '?';
  return `${baseUrl}${separator}text=${encodeURIComponent(lines.join('\n'))}`;
}

export function formatReviewCount(count: number): string {
  return new Intl.NumberFormat('en-US').format(count);
}
