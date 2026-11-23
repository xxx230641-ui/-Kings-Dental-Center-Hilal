import test from 'node:test';
import assert from 'node:assert/strict';
import {
  buildWhatsAppAppointmentUrl,
  formatReviewCount,
  getClinicOpenStatus,
  validateAppointmentRequest,
} from './clinicHelpers';

test('getClinicOpenStatus reports 24h open on Saturday–Thursday in Asia/Qatar', () => {
  // Saturday 2026-11-21 10:00 UTC -> 13:00 Qatar time (Saturday)
  const saturdayQatar = new Date('2026-11-21T10:00:00Z');
  const status = getClinicOpenStatus(saturdayQatar);
  assert.equal(status.dayKey, 'saturday');
  assert.equal(status.isOpen, true);
  assert.equal(status.is24HoursToday, true);
});

test('getClinicOpenStatus checks Friday 14:00-22:00 Qatar hours accurately', () => {
  // Friday 2026-11-20 09:00 UTC -> 12:00 Qatar time (before 2 PM open)
  const fridayMorning = new Date('2026-11-20T09:00:00Z');
  const morningStatus = getClinicOpenStatus(fridayMorning);
  assert.equal(morningStatus.dayKey, 'friday');
  assert.equal(morningStatus.is24HoursToday, false);
  assert.equal(morningStatus.isOpen, false);

  // Friday 2026-11-20 13:00 UTC -> 16:00 Qatar time (4 PM, open)
  const fridayAfternoon = new Date('2026-11-20T13:00:00Z');
  const afternoonStatus = getClinicOpenStatus(fridayAfternoon);
  assert.equal(afternoonStatus.dayKey, 'friday');
  assert.equal(afternoonStatus.isOpen, true);
});

test('validateAppointmentRequest rejects empty or invalid inputs and accepts valid data', () => {
  const invalid = validateAppointmentRequest({
    name: 'A',
    phone: '123',
    serviceId: '',
    preferredTime: 'Morning',
  });
  assert.equal(invalid.isValid, false);
  assert.equal(invalid.errors.name, 'nameRequired');
  assert.equal(invalid.errors.phone, 'phoneInvalid');
  assert.equal(invalid.errors.serviceId, 'serviceRequired');

  const valid = validateAppointmentRequest({
    name: 'Mariam Al-Thani',
    phone: '+974 3000 9713',
    serviceId: 'cosmetic-dentistry',
    preferredTime: 'Morning',
  });
  assert.equal(valid.isValid, true);
  assert.deepEqual(valid.errors, {});
});

test('buildWhatsAppAppointmentUrl encodes Arabic and English messages safely', () => {
  const urlAr = buildWhatsAppAppointmentUrl(
    'https://wa.me/97430009713',
    {
      name: 'أحمد',
      phone: '+97430001111',
      serviceTitle: 'زراعة الأسنان',
      preferredTime: 'الفترة المسائية',
    },
    'ar',
  );
  assert.ok(urlAr.startsWith('https://wa.me/97430009713?text='));
  assert.ok(decodeURIComponent(urlAr).includes('زراعة الأسنان'));
});

test('formatReviewCount formats 1477 with comma separator', () => {
  assert.equal(formatReviewCount(1477), '1,477');
});
