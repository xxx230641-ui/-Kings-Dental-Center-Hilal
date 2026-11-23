export type Language = 'ar' | 'en';

export type DayKey =
  | 'saturday'
  | 'sunday'
  | 'monday'
  | 'tuesday'
  | 'wednesday'
  | 'thursday'
  | 'friday';

export type ServiceCategory = 'all' | 'cosmetic' | 'restorative' | 'family';

export interface OpeningHourEntry {
  dayKey: DayKey;
  dayIndex: number; // 0 = Sunday ... 6 = Saturday (JS Date.getDay)
  label: Record<Language, string>;
  hours: Record<Language, string>;
  is24Hours: boolean;
  openHour?: number; // 24h format in Asia/Qatar
  closeHour?: number;
}

export interface ServiceItem {
  id: string;
  number: string;
  category: Exclude<ServiceCategory, 'all'>;
  image: string;
  title: Record<Language, string>;
  categoryLabel: Record<Language, string>;
  shortDescription: Record<Language, string>;
  detailedOverview: Record<Language, string>;
  careHighlights: Record<Language, string[]>;
}

export const CLINIC_CONFIG = {
  brand: {
    arName: 'مركز كينغز للأسنان الهلال',
    enName: 'Kings Dental Center Hilal',
    shortArName: 'كينغز للأسنان · الهلال',
    shortEnName: 'Kings Dental · Hilal',
    crNumber: '79505/4',
    category: {
      ar: 'عيادة أسنان',
      en: 'Dental Clinic',
    },
  },
  location: {
    country: { ar: 'قطر', en: 'Qatar' },
    city: { ar: 'الدوحة', en: 'Doha' },
    address: {
      ar: 'الطريق الدائري الرابع، الدوحة، قطر.',
      en: 'D-Ring Road, Doha, Qatar.',
    },
    areaNote: {
      ar: 'منطقة الهلال · الطريق الدائري الرابع',
      en: 'Al Hilal · D-Ring Road',
    },
    googleMapsUrl:
      'https://maps.google.com/?cid=4815319642845608374&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA',
    googleMapsEmbedUrl:
      'https://www.google.com/maps?cid=4815319642845608374&output=embed',
  },
  contact: {
    phoneDisplay: '+974 3000 9713',
    phoneHref: 'tel:+97430009713',
    whatsappUrl: 'https://wa.me/97430009713',
    officialGroupUrl: 'https://kingsdentalcenter.com/',
  },
  reviews: {
    rating: 4.8,
    maxRating: 5,
    count: 1477,
    sourceLabel: {
      ar: 'وفق البيانات المقدمة وتقييمات Google Maps',
      en: 'Based on clinic profile & Google Maps data',
    },
  },
  social: [
    {
      id: 'instagram',
      label: 'Instagram',
      url: 'https://www.instagram.com/kingsdentalcenter/',
    },
    {
      id: 'facebook',
      label: 'Facebook',
      url: 'https://www.facebook.com/kingsdentalqatar/',
    },
  ],
  openingHours: [
    {
      dayKey: 'saturday',
      dayIndex: 6,
      label: { ar: 'السبت', en: 'Saturday' },
      hours: { ar: '24 ساعة', en: '24 Hours' },
      is24Hours: true,
    },
    {
      dayKey: 'sunday',
      dayIndex: 0,
      label: { ar: 'الأحد', en: 'Sunday' },
      hours: { ar: '24 ساعة', en: '24 Hours' },
      is24Hours: true,
    },
    {
      dayKey: 'monday',
      dayIndex: 1,
      label: { ar: 'الاثنين', en: 'Monday' },
      hours: { ar: '24 ساعة', en: '24 Hours' },
      is24Hours: true,
    },
    {
      dayKey: 'tuesday',
      dayIndex: 2,
      label: { ar: 'الثلاثاء', en: 'Tuesday' },
      hours: { ar: '24 ساعة', en: '24 Hours' },
      is24Hours: true,
    },
    {
      dayKey: 'wednesday',
      dayIndex: 3,
      label: { ar: 'الأربعاء', en: 'Wednesday' },
      hours: { ar: '24 ساعة', en: '24 Hours' },
      is24Hours: true,
    },
    {
      dayKey: 'thursday',
      dayIndex: 4,
      label: { ar: 'الخميس', en: 'Thursday' },
      hours: { ar: '24 ساعة', en: '24 Hours' },
      is24Hours: true,
    },
    {
      dayKey: 'friday',
      dayIndex: 5,
      label: { ar: 'الجمعة', en: 'Friday' },
      hours: { ar: '2:00 مساءً – 10:00 مساءً', en: '2:00 PM – 10:00 PM' },
      is24Hours: false,
      openHour: 14,
      closeHour: 22,
    },
  ] as OpeningHourEntry[],
};

export const CLINIC_IMAGES = {
  hero: '/src/assets/images/hero_luxury_clinic_1795448034395.jpg',
  about: '/src/assets/images/about_patient_care_1795448034642.jpg',
  cosmeticSmile: '/src/assets/images/service_cosmetic_smile_1795448034516.jpg',
  digitalPrecision: '/src/assets/images/service_digital_precision_1795448034621.jpg',
  gentleCare: '/src/assets/images/service_gentle_care_1795448034443.jpg',
};

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'cosmetic-dentistry',
    number: '01',
    category: 'cosmetic',
    image: CLINIC_IMAGES.cosmeticSmile,
    title: {
      ar: 'طب الأسنان التجميلي',
      en: 'Cosmetic Dentistry',
    },
    categoryLabel: {
      ar: 'جماليات الابتسامة',
      en: 'Aesthetic Care',
    },
    shortDescription: {
      ar: 'تحسين تناسق الأسنان ولونها الطبيعي عبر القشور التجميلية وتبييض الأسنان المدروس.',
      en: 'Natural-looking smile enhancement through tailored veneers, whitening, and aesthetic contouring.',
    },
    detailedOverview: {
      ar: 'نركز في طب الأسنان التجميلي على تحقيق توازن طبيعي ينسجم مع ملامح الوجه، بدءاً من جلسات التقييم التشخيصي ومناقشة التوقعات بوضوح وصولاً إلى خيارات التبييض الآمن والقشور التجميلية.',
      en: 'Our cosmetic dentistry approach focuses on natural facial harmony, beginning with a clear diagnostic consultation to align on shade, proportion, and conservative options such as whitening and veneers.',
    },
    careHighlights: {
      ar: [
        'استشارة تجميلية وتحديد درجات اللون الطبيعية',
        'تبييض الأسنان بأساليب مدروسة ومريحة',
        'قشور تجميلية وتعديل تناظر الابتسامة',
      ],
      en: [
        'Individualized shade and smile-proportion consultation',
        'Comfort-focused clinical teeth whitening',
        'Custom veneers and conservative aesthetic bonding',
      ],
    },
  },
  {
    id: 'dental-implants',
    number: '02',
    category: 'restorative',
    image: CLINIC_IMAGES.digitalPrecision,
    title: {
      ar: 'زراعة الأسنان',
      en: 'Dental Implants',
    },
    categoryLabel: {
      ar: 'التعويض الوظيفي',
      en: 'Implantology',
    },
    shortDescription: {
      ar: 'تعويض الأسنان المفقودة بحلول ثابتة تستعيد وظيفة المضغ والمظهر المتناسق.',
      en: 'Stable tooth replacement designed to restore comfortable chewing function and natural alignment.',
    },
    detailedOverview: {
      ar: 'تهدف علاجات زراعة الأسنان إلى استبدال الأسنان المفقودة بشكل دائم ومدروس، مع تقييم سريري دقيق لصحة اللثة وعظام الفك قبل وضع خطة العلاج المناسبة لكل حالة.',
      en: 'Implantology provides a long-term foundation for missing teeth, guided by thorough clinical assessment of gum health and bone support before recommending a tailored treatment plan.',
    },
    careHighlights: {
      ar: [
        'تقييم سريري شامل قبل بدء خطة الزراعة',
        'تعويض سن واحد أو عدة أسنان بثبات عالٍ',
        'تركيبات نهائية متناسقة مع الأسنان المحيطة',
      ],
      en: [
        'Comprehensive clinical assessment prior to placement',
        'Single or multi-tooth fixed restoration options',
        'Prosthetic crowns matched to surrounding teeth',
      ],
    },
  },
  {
    id: 'orthodontics',
    number: '03',
    category: 'cosmetic',
    image: CLINIC_IMAGES.hero,
    title: {
      ar: 'تقويم الأسنان',
      en: 'Orthodontics',
    },
    categoryLabel: {
      ar: 'انتظام الأسنان',
      en: 'Alignment',
    },
    shortDescription: {
      ar: 'تصحيح اصطفاف الأسنان وإطباق الفكين بخطط متابعة منتظمة ومناسبة لمختلف الأعمار.',
      en: 'Correcting tooth alignment and bite balance through structured follow-up plans for teens and adults.',
    },
    detailedOverview: {
      ar: 'يشمل تقويم الأسنان خيارات متعددة لمعالجة الازدحام السني أو الفراغات وعدم تطابق الإطباق، مع متابعة دورية منتظمة لضمان تقدم النتائج براحة وأمان.',
      en: 'Orthodontic care addresses crowding, spacing, and bite alignment with scheduled periodic check-ins designed to keep treatment comfortable and predictable.',
    },
    careHighlights: {
      ar: [
        'فحص الإطباق وتحديد الخيار التقويمي الأنسب',
        'خيارات التقويم التقليدي والشفاف حسب الحالة',
        'متابعة دورية منظمة طوال فترة العلاج',
      ],
      en: [
        'Detailed bite evaluation and appliance planning',
        'Conventional braces and clear aligner options',
        'Structured routine adjustments and progress reviews',
      ],
    },
  },
  {
    id: 'root-canal-treatment',
    number: '04',
    category: 'restorative',
    image: CLINIC_IMAGES.digitalPrecision,
    title: {
      ar: 'علاج جذور الأسنان',
      en: 'Root Canal Treatment',
    },
    categoryLabel: {
      ar: 'علاج العصب',
      en: 'Endodontics',
    },
    shortDescription: {
      ar: 'تخفيف آلام الأسنان والحفاظ على السن الطبيعي عبر تنظيف وحشو القنوات الجذرية بدقة.',
      en: 'Relieving acute dental discomfort and preserving your natural tooth through careful endodontic care.',
    },
    detailedOverview: {
      ar: 'يعالج هذا القسم التهابات لب السن والتسوس العميق بهدف تخفيف الألم وتطهير القنوات الجذرية وإغلاقها لحماية السن الطبيعي من الخلع.',
      en: 'Endodontic treatment clears infected pulp tissue, calms dental pain, and seals the root canal system to preserve the natural tooth structure whenever possible.',
    },
    careHighlights: {
      ar: [
        'تخفيف الألم السني والعناية بالحالات العاجلة',
        'تنظيف وإغلاق القنوات الجذرية بعناية',
        'توجيه المريض لخطوة الترميم الواقي للسن',
      ],
      en: [
        'Prompt pain relief and urgent endodontic evaluation',
        'Thorough canal cleaning and protective sealing',
        'Coordinated follow-up for final tooth restoration',
      ],
    },
  },
  {
    id: 'restorative-dentistry',
    number: '05',
    category: 'restorative',
    image: CLINIC_IMAGES.about,
    title: {
      ar: 'ترميم الأسنان',
      en: 'Restorative Dentistry',
    },
    categoryLabel: {
      ar: 'استعادة البنية',
      en: 'Restoration',
    },
    shortDescription: {
      ar: 'إصلاح الأسنان المتضررة أو المكسورة بالحشوات التجميلية والتيجان والجسور المتينة.',
      en: 'Repairing worn, decayed, or fractured teeth with durable fillings, crowns, and dental bridges.',
    },
    detailedOverview: {
      ar: 'يهدف طب الأسنان الترميمي إلى إعادة القوة والشكل الطبيعي للأسنان المصابة بالتسوس أو التآكل باستخدام حشوات وتيجان وجسور متوافقة مع لون الأسنان.',
      en: 'Restorative dentistry rebuilds structural strength and natural appearance for damaged teeth using shade-matched fillings, crowns, and bridges.',
    },
    careHighlights: {
      ar: [
        'حشوات بلون السن الطبيعي لإصلاح التسوس',
        'تيجان وجسور خزفية متينة ومريحة',
        'استعادة القدرة على المضغ بشكل متوازن',
      ],
      en: [
        'Tooth-colored composite fillings for decay repair',
        'Durable ceramic crowns and fixed dental bridges',
        'Balanced restoration of daily chewing comfort',
      ],
    },
  },
  {
    id: 'periodontology',
    number: '06',
    category: 'restorative',
    image: CLINIC_IMAGES.cosmeticSmile,
    title: {
      ar: 'علاج اللثة',
      en: 'Periodontology',
    },
    categoryLabel: {
      ar: 'صحة الأنسجة الداعمة',
      en: 'Gum Health',
    },
    shortDescription: {
      ar: 'تشخيص وعلاج التهابات اللثة وتنظيف الجير العميق لحماية ثبات الأسنان وصحتها.',
      en: 'Preventing and treating gum inflammation and deep plaque buildup to protect tooth stability.',
    },
    detailedOverview: {
      ar: 'صحة اللثة هي الأساس لاستقرار الأسنان على المدى الطويل. يقدم الفرع فحوصات وعلاجات للثة تشمل إزالة التكلسات العميقة ومعالجة الالتهابات والنزيف.',
      en: 'Healthy gums anchor every smile. We provide thorough periodontal evaluations, scaling, and targeted care to manage gum bleeding and inflammation.',
    },
    careHighlights: {
      ar: [
        'تقييم صحة اللثة والأنسجة المحيطة بالأسنان',
        'تنظيف عميق لإزالة الجير والبكتيريا',
        'إرشادات عملية للعناية اليومية ومنع الانتكاس',
      ],
      en: [
        'Detailed assessment of gum pockets and tissue health',
        'Deep scaling to clear subgingival deposits',
        'Clear home-care guidance for lasting stability',
      ],
    },
  },
  {
    id: 'pediatric-dentistry',
    number: '07',
    category: 'family',
    image: CLINIC_IMAGES.gentleCare,
    title: {
      ar: 'طب أسنان الأطفال',
      en: 'Pediatric Dentistry',
    },
    categoryLabel: {
      ar: 'عناية لطيفة للصغار',
      en: 'Children Care',
    },
    shortDescription: {
      ar: 'رعاية ودودة ومطمئنة لأسنان الأطفال واليافعين تبني ثقتهم في زيارة طبيب الأسنان.',
      en: 'Gentle, reassuring dental care for infants, children, and teens that builds lifelong confidence.',
    },
    detailedOverview: {
      ar: 'نحرص على جعل زيارة الطفل لطبيب الأسنان تجربة هادئة وإيجابية، مع التركيز على متابعة نمو الأسنان، الوقاية من التسوس، وعلاج الأسنان اللبنية بلطف.',
      en: 'We focus on creating calm, positive dental visits for young patients—monitoring tooth eruption, protecting primary teeth, and encouraging healthy habits.',
    },
    careHighlights: {
      ar: [
        'بيئة هادئة تراعي راحة الطفل وطمأنينته',
        'متابعة نمو الأسنان اللبنية والدائمة',
        'تطبيقات وقائية لحماية أسنان الأطفال',
      ],
      en: [
        'Calm, patient communication tailored to children',
        'Growth monitoring for primary and permanent teeth',
        'Preventive protective care against early decay',
      ],
    },
  },
  {
    id: 'preventive-dentistry',
    number: '08',
    category: 'family',
    image: CLINIC_IMAGES.gentleCare,
    title: {
      ar: 'طب الأسنان الوقائي',
      en: 'Preventive Dentistry',
    },
    categoryLabel: {
      ar: 'الفحص والوقاية',
      en: 'Prevention',
    },
    shortDescription: {
      ar: 'فحوصات دورية وتنظيف احترافي وتلميع للأسنان للحفاظ على صحة الفم وتجنب المشكلات مبكراً.',
      en: 'Routine check-ups, professional cleanings, and early screening to keep oral health consistently strong.',
    },
    detailedOverview: {
      ar: 'الوقاية الدورية توفر الوقت والجهد وتحفظ صحة الأسنان الطبيعية. نقدم جلسات فحص منتظمة وتنظيف احترافي وتوعية مخصصة لكل مراجع.',
      en: 'Consistent preventive care protects natural teeth before issues develop. Our routine visits combine thorough examinations, gentle scaling, and personalized guidance.',
    },
    careHighlights: {
      ar: [
        'فحص دوري شامل للأسنان واللثة',
        'تنظيف وتلميع الأسنان وإزالة التصبغات السطحية',
        'الكشف المبكر عن التسوس قبل تفاقمه',
      ],
      en: [
        'Comprehensive routine oral and gum examinations',
        'Professional scaling and gentle surface polishing',
        'Early detection to minimize invasive treatments',
      ],
    },
  },
];
