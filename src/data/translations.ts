import { Language } from './clinicConfig';

export interface TranslationContent {
  nav: {
    home: string;
    about: string;
    services: string;
    whyUs: string;
    reviews: string;
    location: string;
    bookNow: string;
    openMenu: string;
    closeMenu: string;
    switchLangLabel: string;
  };
  hero: {
    eyebrow: string;
    headline: string;
    subtext: string;
    primaryCta: string;
    secondaryCta: string;
    ratingText: string;
    reviewsText: string;
    openStatus24: string;
    openStatusOpen: string;
    openStatusClosed: string;
    scrollHint: string;
    crestTitle: string;
    crestSubtitle: string;
  };
  about: {
    kicker: string;
    headline: string;
    paragraph1: string;
    paragraph2: string;
    pillars: {
      title: string;
      description: string;
    }[];
    metaLabel: string;
    crLabel: string;
  };
  services: {
    kicker: string;
    headline: string;
    subtext: string;
    filters: {
      all: string;
      cosmetic: string;
      restorative: string;
      family: string;
    };
    learnMore: string;
    closeModal: string;
    requestThisService: string;
    highlightsTitle: string;
    verifiedNote: string;
  };
  whyUs: {
    kicker: string;
    headline: string;
    subtext: string;
    items: {
      title: string;
      description: string;
    }[];
  };
  reviews: {
    kicker: string;
    headline: string;
    subtext: string;
    outOf: string;
    reviewsLabel: string;
    sourceNote: string;
    ctaLabel: string;
    transparencyNote: string;
    metrics: {
      label: string;
      value: string;
    }[];
  };
  appointment: {
    kicker: string;
    headline: string;
    subtext: string;
    callNow: string;
    whatsappBook: string;
    formTitle: string;
    formNotice: string;
    fields: {
      nameLabel: string;
      namePlaceholder: string;
      phoneLabel: string;
      phonePlaceholder: string;
      serviceLabel: string;
      servicePlaceholder: string;
      preferredDayLabel: string;
      preferredDayOptions: string[];
      notesLabel: string;
      notesPlaceholder: string;
    };
    submitBtn: string;
    successTitle: string;
    successBody: string;
    sendViaWhatsapp: string;
    newRequestBtn: string;
    errors: {
      nameRequired: string;
      phoneInvalid: string;
      serviceRequired: string;
    };
  };
  hours: {
    kicker: string;
    headline: string;
    subtext: string;
    todayBadge: string;
    emergencyNote: string;
  };
  location: {
    kicker: string;
    headline: string;
    addressLabel: string;
    cityCountryLabel: string;
    phoneLabel: string;
    crLabel: string;
    getDirections: string;
    mapFallbackNote: string;
  };
  footer: {
    description: string;
    quickLinksTitle: string;
    contactTitle: string;
    hoursTitle: string;
    officialGroupLink: string;
    socialTitle: string;
    copyright: string;
    backToTop: string;
  };
}

export const TRANSLATIONS: Record<Language, TranslationContent> = {
  ar: {
    nav: {
      home: 'الرئيسية',
      about: 'من نحن',
      services: 'خدماتنا',
      whyUs: 'لماذا تختارنا؟',
      reviews: 'آراء المرضى',
      location: 'الموقع والتواصل',
      bookNow: 'احجز موعدك',
      openMenu: 'فتح قائمة التنقل',
      closeMenu: 'إغلاق قائمة التنقل',
      switchLangLabel: 'English',
    },
    hero: {
      eyebrow: 'فرع الهلال · الطريق الدائري الرابع، الدوحة',
      headline: 'ابتسامتك تستحق عناية استثنائية',
      subtext:
        'في مركز كينغز للأسنان الهلال، نضع راحتك وابتسامتك في مقدمة اهتمامنا، من خلال تجربة رعاية أسنان تجمع بين الاحترافية والاهتمام بك.',
      primaryCta: 'احجز موعدك الآن',
      secondaryCta: 'اكتشف خدماتنا',
      ratingText: '4.8 / 5',
      reviewsText: '1,477 مراجعة',
      openStatus24: 'مفتوح اليوم على مدار 24 ساعة',
      openStatusOpen: 'مفتوح الآن لاستقبال المراجعين',
      openStatusClosed: 'مغلق حالياً · نفتح الجمعة 2:00 مساءً',
      scrollHint: 'مرر لاكتشاف المركز',
      crestTitle: 'عناية متواصلة',
      crestSubtitle: 'السبت – الخميس 24 ساعة',
    },
    about: {
      kicker: 'من نحن · مركز كينغز للأسنان الهلال',
      headline: 'رعاية أسنان تبدأ بالاهتمام بك',
      paragraph1:
        'نؤمن في مركز كينغز للأسنان الهلال بأن تجربة زيارة عيادة الأسنان يجب أن تكون هادئة وواضحة ومريحة منذ لحظة استقبالك. نحرص على الاستماع لاحتياجاتك وشرح خيارات العلاج بشفافية تامة لتشعر بالاطمئنان والثقة في كل خطوة.',
      paragraph2:
        'يخدم فرع الهلال المرضى والعائلات في قلب الدوحة على الطريق الدائري الرابع، مع التزام مستمر بتنظيم المواعيد، احترام وقت المراجع، وتوفير بيئة طبية نظيفة ومهيأة لراحتك على مدار الساعة.',
      pillars: [
        {
          title: 'تواصل واضح قبل العلاج',
          description: 'نشرح خطة الرعاية وخياراتها بلغة مبسطة تضعك في قلب القرار الطبي.',
        },
        {
          title: 'بيئة هادئة ومنظمة',
          description: 'غرف رعاية مريحة وتنسيق دقيق للمواعيد يقلل من أوقات الانتظار.',
        },
        {
          title: 'استمرارية الخدمة بالدوحة',
          description: 'حضور متواصل 24 ساعة من السبت حتى الخميس لمتابعة الحالات المجدولة والطارئة.',
        },
      ],
      metaLabel: 'عيادة أسنان معتمدة · الدوحة، قطر',
      crLabel: 'سجل تجاري رقم: 79505/4',
    },
    services: {
      kicker: 'خدماتنا العلاجية والتجميلية',
      headline: 'تخصصات متكاملة لصحة وجمال ابتسامتك',
      subtext:
        'مجموعة شاملة من خدمات طب الأسنان المتاحة في فرع الهلال، مصممة لتلبية احتياجات الأفراد والعائلات وفق خطط رعاية منظمة.',
      filters: {
        all: 'جميع الخدمات',
        cosmetic: 'التجميل والتقويم',
        restorative: 'الزراعة والترميم',
        family: 'الأطفال والوقاية',
      },
      learnMore: 'اعرف المزيد',
      closeModal: 'إغلاق التفاصيل',
      requestThisService: 'اطلب موعداً لهذه الخدمة',
      highlightsTitle: 'ما يشمله مسار الرعاية',
      verifiedNote: 'تُحدد الخطة النهائية بعد الفحص السريري في العيادة.',
    },
    whyUs: {
      kicker: 'لماذا تختار فرع الهلال؟',
      headline: 'معايير خدمة مصممة لراحتك وثقتك',
      subtext:
        'نهتم بكل تفصيل في رحلتك العلاجية من سهولة التواصل وحجز الموعد حتى المتابعة الهادئة بعد الزيارة.',
      items: [
        {
          title: 'الاهتمام براحة المريض',
          description:
            'أجواء استقبال هادئة وتعامل إنساني لطيف يراعي خصوصيتك ويخفف أي توتر قبل الفحص أو العلاج.',
        },
        {
          title: 'سهولة التواصل وحجز المواعيد',
          description:
            'تواصل مباشر عبر الهاتف أو واتساب أو نموذج طلب المواعيد لتأكيد الزيارة في الوقت الذي يناسبك.',
        },
        {
          title: 'موقع مناسب في الدوحة',
          description:
            'سهولة الوصول إلى الفرع على الطريق الدائري الرابع بمنطقة الهلال، مع وضوح تام عبر خرائط Google.',
        },
        {
          title: 'ساعات عمل ممتدة',
          description:
            'استقبال متواصل على مدار 24 ساعة من السبت إلى الخميس، وفترة مسائية يوم الجمعة من 2:00 إلى 10:00 مساءً.',
        },
        {
          title: 'تجربة رعاية منظمة',
          description:
            'تنسيق واضح لمراحل الكشف والمتابعة بين مختلف تخصصات طب الأسنان تحت سقف واحد.',
        },
      ],
    },
    reviews: {
      kicker: 'ثقة المراجعين في الدوحة',
      headline: 'تقييم المرضى لفرع الهلال',
      subtext:
        'تعكس التقييمات المسجلة تجربة المراجعين مع مستوى العناية والتنظيم وحسن الاستقبال في مركز كينغز للأسنان الهلال.',
      outOf: 'من 5',
      reviewsLabel: 'مراجعة مسجلة وفق البيانات المقدمة',
      sourceNote: 'يمكنك استعراض المراجعات والتفاصيل مباشرة عبر صفحة العيادة الرسمية على خرائط Google.',
      ctaLabel: 'عرض التقييمات على Google Maps',
      transparencyNote:
        'نلتزم بعرض البيانات الموثقة فقط دون نشر اقتباسات غير موثقة.',
      metrics: [
        { label: 'متوسط التقييم العام', value: '4.8 / 5' },
        { label: 'إجمالي المراجعات المقدمة', value: '1,477' },
        { label: 'المدينة والموقع', value: 'الهلال · الدوحة' },
      ],
    },
    appointment: {
      kicker: 'حجز المواعيد والتواصل المباشر',
      headline: 'خطوتك الأولى نحو ابتسامة أكثر إشراقاً',
      subtext:
        'تواصل معنا مباشرة عبر الهاتف أو واتساب، أو أرسل طلب موعد وسيتولى فريق الاستقبال تأكيد التوقيت المناسب معك.',
      callNow: 'اتصل بنا الآن',
      whatsappBook: 'احجز عبر واتساب',
      formTitle: 'نموذج طلب موعد',
      formNotice:
        'ملاحظة مهمة: إرسال هذا النموذج يُسجّل كطلب موعد مبدئي ويخضع للتأكيد المباشر من فريق الاستقبال في العيادة.',
      fields: {
        nameLabel: 'الاسم الكامل',
        namePlaceholder: 'أدخل اسمك الكريم',
        phoneLabel: 'رقم الهاتف / الجوال',
        phonePlaceholder: 'مثال: +974 3000 0000',
        serviceLabel: 'الخدمة المطلوبة',
        servicePlaceholder: 'اختر الخدمة المناسبة',
        preferredDayLabel: 'الفترة المفضلة للتواصل',
        preferredDayOptions: [
          'الفترة الصباحية',
          'فترة الظهيرة',
          'الفترة المسائية',
          'في أقرب وقت ممكن',
        ],
        notesLabel: 'ملاحظات إضافية (اختياري)',
        notesPlaceholder: 'أضف أي استفسار أو توقيت مفضل لزيارتك',
      },
      submitBtn: 'إرسال طلب الموعد',
      successTitle: 'تم استلام طلب الموعد المبدئي',
      successBody:
        'شكراً لتواصلك مع مركز كينغز للأسنان الهلال. هذا الطلب بانتظار التأكيد من فريق الاستقبال، ويمكنك إرسال تفاصيله فوراً عبر واتساب أو الاتصال على +974 3000 9713 لتسريع التأكيد.',
      sendViaWhatsapp: 'إكمال التأكيد عبر واتساب',
      newRequestBtn: 'تقديم طلب آخر',
      errors: {
        nameRequired: 'يرجى كتابة الاسم الكامل (حرفين على الأقل).',
        phoneInvalid: 'يرجى إدخال رقم هاتف صحيح للتواصل.',
        serviceRequired: 'يرجى اختيار الخدمة المطلوبة.',
      },
    },
    hours: {
      kicker: 'جدول الاستقبال والدوام',
      headline: 'ساعات العمل في فرع الهلال',
      subtext: 'نستقبلكم على مدار الأسبوع بخدمة متواصلة 24 ساعة من السبت حتى الخميس.',
      todayBadge: 'اليوم',
      emergencyNote: 'فرع الهلال متاح 24 ساعة طوال أيام السبت إلى الخميس.',
    },
    location: {
      kicker: 'الموقع على الخريطة',
      headline: 'زورونا في قلب الهلال بالدوحة',
      addressLabel: 'العنوان',
      cityCountryLabel: 'المدينة والدولة',
      phoneLabel: 'رقم الهاتف المباشر',
      crLabel: 'رقم السجل التجاري',
      getDirections: 'احصل على الاتجاهات',
      mapFallbackNote: 'خريطة Google التفاعلية لمركز كينغز للأسنان الهلال — الطريق الدائري الرابع',
    },
    footer: {
      description:
        'مركز كينغز للأسنان الهلال في الدوحة، قطر — عناية متخصصة بصحة وجمال الأسنان في بيئة طبية تجمع بين الهدوء والاحترافية.',
      quickLinksTitle: 'روابط سريعة',
      contactTitle: 'معلومات التواصل',
      hoursTitle: 'ساعات العمل',
      officialGroupLink: 'الموقع الرسمي للمجموعة',
      socialTitle: 'الحسابات الرسمية',
      copyright: 'مركز كينغز للأسنان الهلال · سجل تجاري 79505/4 · الدوحة، قطر',
      backToTop: 'العودة للأعلى',
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About Us',
      services: 'Services',
      whyUs: 'Why Us',
      reviews: 'Reviews',
      location: 'Location',
      bookNow: 'Book Now',
      openMenu: 'Open navigation menu',
      closeMenu: 'Close navigation menu',
      switchLangLabel: 'العربية',
    },
    hero: {
      eyebrow: 'Al Hilal Branch · D-Ring Road, Doha',
      headline: 'Your Smile Deserves Exceptional Care',
      subtext:
        'At Kings Dental Center Hilal, your comfort and smile come first—delivering dental care that brings together clinical professionalism and attentive personal support.',
      primaryCta: 'Book Your Appointment',
      secondaryCta: 'Explore Our Services',
      ratingText: '4.8 / 5',
      reviewsText: '1,477 Reviews',
      openStatus24: 'Open 24 Hours Today',
      openStatusOpen: 'Open Now for Patients',
      openStatusClosed: 'Currently Closed · Opens Friday at 2:00 PM',
      scrollHint: 'Scroll to explore',
      crestTitle: 'Extended Care',
      crestSubtitle: 'Sat – Thu 24 Hours',
    },
    about: {
      kicker: 'About Us · Kings Dental Center Hilal',
      headline: 'Dental Care That Begins With Caring for You',
      paragraph1:
        'At Kings Dental Center Hilal, we believe every dental visit should feel calm, clear, and reassuring from the moment you walk in. We take time to listen to your concerns and explain each treatment option transparently so you feel confident at every step.',
      paragraph2:
        'Located on D-Ring Road in Doha, our Al Hilal clinic serves individuals and families with structured scheduling, respect for your time, and a tranquil medical environment ready around the clock.',
      pillars: [
        {
          title: 'Transparent Communication',
          description: 'Clear explanations of treatment options and priorities before any procedure begins.',
        },
        {
          title: 'Calm & Organized Visits',
          description: 'Comfortable treatment suites and coordinated appointment scheduling to minimize wait times.',
        },
        {
          title: 'Doha Round-the-Clock Access',
          description: 'Continuous 24-hour service from Saturday through Thursday for planned and urgent visits.',
        },
      ],
      metaLabel: 'Licensed Dental Clinic · Doha, Qatar',
      crLabel: 'CR No: 79505/4',
    },
    services: {
      kicker: 'Clinical & Aesthetic Specialties',
      headline: 'Comprehensive Care for Your Smile',
      subtext:
        'Confirmed dental specialties available at our Al Hilal branch, thoughtfully organized for individuals and families across Doha.',
      filters: {
        all: 'All Services',
        cosmetic: 'Cosmetic & Ortho',
        restorative: 'Implants & Restorative',
        family: 'Pediatric & Preventive',
      },
      learnMore: 'Learn More',
      closeModal: 'Close Details',
      requestThisService: 'Request Appointment for This Service',
      highlightsTitle: 'What Care Includes',
      verifiedNote: 'Final treatment plans are tailored following an in-clinic clinical evaluation.',
    },
    whyUs: {
      kicker: 'Why Choose Al Hilal Branch',
      headline: 'Standards Built Around Your Comfort',
      subtext:
        'Every detail of your visit is structured for clarity, ease of access, and calm personal attention.',
      items: [
        {
          title: 'Dedicated Patient Comfort',
          description:
            'A serene reception and gentle clinical approach designed to put nervous or first-time visitors at ease.',
        },
        {
          title: 'Effortless Communication & Booking',
          description:
            'Direct booking via phone, WhatsApp, or appointment request form so scheduling fits smoothly into your day.',
        },
        {
          title: 'Convenient Doha Location',
          description:
            'Centrally positioned on D-Ring Road in Al Hilal with straightforward navigation via Google Maps.',
        },
        {
          title: 'Extended Operating Hours',
          description:
            'Open 24 hours Saturday through Thursday, plus Friday evening hours from 2:00 PM to 10:00 PM.',
        },
        {
          title: 'Structured Care Experience',
          description:
            'Coordinated diagnostics, preventive check-ups, and specialized follow-up care in one welcoming center.',
        },
      ],
    },
    reviews: {
      kicker: 'Patient Trust in Doha',
      headline: 'Verified Patient Ratings',
      subtext:
        'Our clinic rating reflects real patient experiences with reception warmth, scheduling clarity, and attentive dental care.',
      outOf: 'out of 5',
      reviewsLabel: 'submitted reviews per clinic records',
      sourceNote: 'View full clinic details and patient reviews directly on our official Google Maps listing.',
      ctaLabel: 'View Reviews on Google Maps',
      transparencyNote:
        'We present verified aggregate figures only, without fabricating individual quotes or testimonials.',
      metrics: [
        { label: 'Average Patient Rating', value: '4.8 / 5' },
        { label: 'Total Reviews Recorded', value: '1,477' },
        { label: 'Branch Location', value: 'Al Hilal · Doha' },
      ],
    },
    appointment: {
      kicker: 'Appointments & Direct Contact',
      headline: 'Your First Step Toward a Brighter Smile',
      subtext:
        'Reach our Al Hilal reception directly by phone or WhatsApp, or submit an appointment request for prompt confirmation.',
      callNow: 'Call Us Now',
      whatsappBook: 'Book via WhatsApp',
      formTitle: 'Appointment Request Form',
      formNotice:
        'Please note: Submitting this form registers an appointment request that requires direct confirmation from our clinic reception team—it is not an automated confirmed slot.',
      fields: {
        nameLabel: 'Full Name',
        namePlaceholder: 'Enter your full name',
        phoneLabel: 'Phone / Mobile Number',
        phonePlaceholder: 'e.g., +974 3000 0000',
        serviceLabel: 'Requested Service',
        servicePlaceholder: 'Select a dental service',
        preferredDayLabel: 'Preferred Contact Window',
        preferredDayOptions: [
          'Morning',
          'Afternoon',
          'Evening',
          'As soon as possible',
        ],
        notesLabel: 'Additional Notes (Optional)',
        notesPlaceholder: 'Share any preferred time or questions',
      },
      submitBtn: 'Submit Appointment Request',
      successTitle: 'Appointment Request Received',
      successBody:
        'Thank you for contacting Kings Dental Center Hilal. Your request is awaiting confirmation by our reception team. For immediate assistance, send your request via WhatsApp or call +974 3000 9713.',
      sendViaWhatsapp: 'Confirm Details via WhatsApp',
      newRequestBtn: 'Submit Another Request',
      errors: {
        nameRequired: 'Please enter your full name (at least 2 characters).',
        phoneInvalid: 'Please enter a valid contact phone number.',
        serviceRequired: 'Please select a dental service.',
      },
    },
    hours: {
      kicker: 'Clinic Schedule',
      headline: 'Opening Hours',
      subtext: 'Open continuously 24 hours from Saturday through Thursday, with Friday afternoon & evening care.',
      todayBadge: 'Today',
      emergencyNote: 'Al Hilal branch operates 24 hours Saturday through Thursday.',
    },
    location: {
      kicker: 'Find Our Clinic',
      headline: 'Visit Us on D-Ring Road, Doha',
      addressLabel: 'Address',
      cityCountryLabel: 'City & Country',
      phoneLabel: 'Direct Phone',
      crLabel: 'Commercial Registration',
      getDirections: 'Get Directions',
      mapFallbackNote: 'Interactive Google Map for Kings Dental Center Hilal — D-Ring Road, Doha',
    },
    footer: {
      description:
        'Kings Dental Center Hilal in Doha, Qatar — attentive, refined dental care combining modern clinical standards with genuine patient comfort.',
      quickLinksTitle: 'Quick Links',
      contactTitle: 'Contact Details',
      hoursTitle: 'Working Hours',
      officialGroupLink: 'Official Group Website',
      socialTitle: 'Official Channels',
      copyright: 'Kings Dental Center Hilal · CR 79505/4 · Doha, Qatar',
      backToTop: 'Back to Top',
    },
  },
};
