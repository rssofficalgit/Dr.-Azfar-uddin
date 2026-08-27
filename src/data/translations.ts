export type Language = 'en' | 'bn';

export const translations = {
  en: {
    // Header & Navigation
    nav: {
      home: "Home",
      about: "About Doctor",
      services: "Services",
      chambers: "Chambers",
      publications: "Publications",
      blog: "Blog & Social",
      contact: "Contact Us",
      bookAppointment: "Book Appointment",
      selectLanguage: "Language"
    },
    // Hero Section
    hero: {
      badge: "Bangladesh's Leading Urologist",
      title: "World class Urology & Andrology Clinic In Bangladesh",
      subtitle: "AZFAR Urology, Andrology & Fertility Center.",
      description: "Experience world-class urological care equipped with advanced technology, unparalleled compassion, and expertise you can trust for your most sensitive health needs.",
      features: [
        "Ex North American Consultant Urologist and Andrologist",
        "Top 10 urologist performing Highest number of micro surgical urology & Infertility services in the world",
        "Trained in urological microsurgery and andrology and male infertility in India and USA",
        "Managing director of AZFAR Urology, Andrology & Fertility Center."
      ],
      bookButton: "Book Appointment",
      learnMoreButton: "Learn More",
      yearsExcellence: "Years of Excellence"
    },
    // Stats Section
    stats: {
      experience: "Years of Experience",
      patients: "Patients Served",
      microsurgeries: "Microsurgeries Performed",
      journals: "Journal Publications",
      conferences: "Conferences Attended"
    },
    // About Section
    about: {
      badge: "Meet Our Specialist",
      name: "Prof. Dr. Azfar Uddin Shaikh",
      degrees: "MBBS, MS (Urology), MD (USA), FACS (USA)",
      yearsExp: "Years Experience",
      heading: "Dedicated to Excellence in Urological & Andrological Care",
      p1: "Prof. Dr. Azfar Uddin Shaikh is a internationally acclaimed Urological Microsurgeon and Andrologist with over 26 years of dedicated service in advanced microsurgery, endourology, and male infertility treatments.",
      p2: "Having trained and worked extensively in North America, Singapore, and India, he brings world-class expertise and cutting-edge medical technologies to Bangladesh.",
      readBio: "Read Full Profile",
      callNow: "Direct Call"
    },
    // Services Section
    services: {
      tag: "Specialized Treatments",
      title: "Comprehensive Urological Services",
      subtitle: "Offering state-of-the-art diagnostic and surgical care for complex urological, andrological, and fertility conditions.",
      items: {
        andrologyTitle: "Andrology",
        andrologyDesc: "Specialized management for erectile dysfunction, hormone balance, and sexual wellness.",
        andrologyDetails: "Deals with men's sexual and reproductive problems.\n\n• Erection problems or not being able to maintain it\n• Low testosterone hormone\n• Quick or premature ejaculation\n\nTreatment: Blood test checks hormones, blood flow and nerves are examined, then medicine, hormone therapy, or a small procedure is given.",
        
        microsurgeryTitle: "Urological Microsurgery",
        microsurgeryDesc: "Vasovasostomy and Vasoepididymostomy microsurgery for vasectomy reversal and blockage repair.",
        microsurgeryDetails: "Surgery done under a microscope on very tiny body parts.\n\nWhen needed:\n• Reversing vasectomy\n• Fixing varicocele\n• Collecting sperm\n\nHow: Surgeon uses small tools and a microscope to join fine tubes or blood vessels.",
        
        kidneyStoneTitle: "Endourology and Kidney Stone",
        kidneyStoneDesc: "Minimally invasive laser procedures for precise, painless removal of kidney & ureter stones.",
        kidneyStoneDetails: "Treats kidney or urinary stones without any big cut.\n\nHow: A camera tube goes through the natural passage and breaks the stone with laser. Big stones are removed through a tiny hole in the back (PCNL).\n\nWho needs it: Patients with kidney or urinary tract stones.",
        
        generalUrologyTitle: "General Urology",
        generalUrologyDesc: "Comprehensive diagnosis and treatment for common urological conditions.",
        generalUrologyDetails: "Handles common urinary problems.\n\n• Urinary infection\n• Enlarged prostate\n• Leaking urine\n\nThis is usually the first check up before going to a specific specialist.",
        
        maleInfertilityTitle: "Male Infertility",
        maleInfertilityDesc: "Advanced MicroTESE, MESA, and sperm retrieval procedures for complex infertility.",
        maleInfertilityDetails: "Looks at why a couple can't have a baby because of the man.\n\n• Low sperm count\n• Weak sperm movement\n• Hormone problems\n• Blocked tubes\n\nTreatment: Lifestyle change, medicine, surgery, or collecting sperm for IVF/ICSI.",
        
        neuroUrologyTitle: "Neuro-urology",
        neuroUrologyDesc: "Advanced diagnosis and management of neurological conditions affecting the urinary tract.",
        neuroUrologyDetails: "Deals with bladder problems caused by nerve damage.\n\nWho gets it: Patients with spinal cord injury, stroke, diabetes, or multiple sclerosis.\n\nTreatment: A test checks the bladder and nerves, then treated with medicine, catheter, or nerve stimulation.",
        
        uroOncologyTitle: "Uro Oncology",
        uroOncologyDesc: "Expert surgical management of kidney, bladder, prostate, and testicular cancers.",
        uroOncologyDetails: "Treats cancers of the urinary and male reproductive organs.\n\nCancers covered: Kidney, bladder, prostate, testis, penis cancer.\n\nTreatment: Diagnosis with biopsy and scans, then surgery, chemotherapy, and regular follow up.",
        
        reconstructiveTitle: "Reconstructive Urology",
        reconstructiveDesc: "Advanced reconstructive surgeries to restore normal function to the urinary tract.",
        reconstructiveDetails: "Repairs damaged or faulty parts of the urinary tract.\n\nWho needs it: Narrowed tube, birth defect, injury, or complication from earlier surgery.\n\nHow: Tissue from another part of the body rebuilds the damaged part to restore normal function.",
        
        pediatricTitle: "Pediatric Urology",
        pediatricDesc: "Reconstructive pediatric surgical correction for congenital defects and urinary tract conditions.",
        pediatricDetails: "Treats urinary and genital problems in children.\n\n• Undescended testicle\n• Birth defects\n• Bedwetting\n• Reverse flow of urine to kidney\n\nSpecial child-friendly and gentle methods are used.",
        
        femaleUrologyTitle: "Female Urology",
        femaleUrologyDesc: "Specialized care for female pelvic medicine, incontinence, and urinary tract disorders.",
        femaleUrologyDetails: "Treats women's urinary problems.\n\n• Leaking urine\n• Organs slipping down\n• Repeated infections\n• Bladder issues after childbirth\n\nTreatment: Pelvic exercises to small surgery if needed.",
        
        laparoscopyRoboticTitle: "Laparoscopy & Robotic",
        laparoscopyRoboticDesc: "Minimally invasive laparoscopic and robotic-assisted surgeries for precision and quick recovery.",
        laparoscopyRoboticDetails: "Complex operations are done through small holes using a camera and tools without a big cut. Robotic surgery uses a robot for even more precise movement.\n\nUsed for: Removing kidney, prostate, or tumors.\n\nBenefit: Less pain, less scar, faster recovery."
      }
    },
    // Banner Section
    banner: {
      title: "Need Expert Medical Consultation?",
      subtitle: "Book your chamber appointment today or speak directly with our consultation desk for guidance.",
      button: "Consult Now"
    },
    // Chambers Section
    chambers: {
      tag: "Our Locations",
      title: "Visit Our Chambers",
      officeTitle: "AZFAR UROLOGY, ANDROLOGY, MICROSURGERY & FERTILITY CENTER (OFFICE)",
      officeSubtitle: "The only complete male infertility treatment center in Bangladesh",
      hospitalTitle: "AZFAR UROLOGY, ANDROLOGY, MICROSURGERY & FERTILITY CENTER",
      visitingHours: "Visiting Hours",
      closed: "(Friday Closed)",
      callForAppointment: "Call for Appointment",
      getDirections: "Get Directions"
    },
    // Testimonials Section
    testimonials: {
      tag: "Patient Stories",
      title: "What Our Patients Say",
      subtitle: "Real experiences from patients who regained their health, confidence, and quality of life."
    },
    // Publications Section
    publications: {
      tag: "Scientific Research",
      title: "Journals & Research Papers",
      subtitle: "Published scientific contributions in international medical journals advancing the field of urology."
    },
    // Latest Blogs & Videos
    blogs: {
      tag: "Health Education",
      title: "Latest Health Articles",
      subtitle: "Expert insights, surgical breakdowns, and guidance on urology and male health.",
      readMore: "Read Full Article",
      viewAll: "View All Articles"
    },
    videos: {
      tag: "Video Gallery",
      title: "Featured Medical Videos",
      subtitle: "Watch expert consultations, surgical awareness talks, and patient education videos.",
      watchYoutube: "Watch on YouTube",
      viewAllVideos: "View All Videos"
    },
    // FAQ Section
    faq: {
      tag: "Clear Answers",
      title: "Frequently Asked Questions",
      subtitle: "Find answers to common questions about urological procedures, appointments, and treatment care."
    },
    // Footer Section
    footer: {
      bio: "Prof. Dr. Azfar Uddin Shaikh is a leading Urologist, Andrologist, and Microsurgeon in Bangladesh. With over 26 years of international expertise, he is dedicated to delivering world-class urological and male fertility care.",
      quickLinks: "Quick Links",
      treatments: "Key Services",
      contactInfo: "Contact Information",
      addressLabel: "Head Office Address",
      phoneLabel: "Appointment Phones",
      emailLabel: "Email Desk",
      rights: "All Rights Reserved."
    },
    // About Page
    aboutPage: {
      heroSub: "Urologist, Andrologist & Male Fertility Specialist",
      topBadge: "Performs highest number of urological microsurgeries in the world",
      introTitle: "Professional Journey",
      eduTitle: "Educational Qualifications",
      eduSub: "Academic Background",
      expTitle: "Working Experience",
      expSub: "Professional Journey",
      bdExp: "In Bangladesh",
      intExp: "International",
      memberTitle: "Memberships & Honors",
      memberSub: "Professional Affiliations",
      educationGroups: {
        degreesTitle: "Medical Degrees & Board Certification",
        fellowshipsTitle: "International Fellowships",
        trainingTitle: "Specialized Training",
        earlyEduTitle: "Early Academic Excellence",
        degrees: [
          { title: "MBBS", desc: "MBBS from Dhaka Medical College (DMC)." },
          { title: "MS (Urology)", desc: "MS (Urology) from Bangabandhu Sheikh Mujib Medical University (BSMMU - former IPGMR)." },
          { title: "MD (USA)", desc: "Medical Residency completed at New York Medical College, USA." },
          { title: "FACS (USA)", desc: "Fellow of the American College of Surgeons (FACS), USA." }
        ],
        fellowships: [
          { title: "Fellowship (Singapore)", desc: "Laparoscopic Urology, Endourology & Renal Transplantation at TTSH (SUA Fellowship), Singapore." },
          { title: "Fellowship (USA)", desc: "Advanced Urology & Andrology Fellowship at Lincoln Medical Center, New York, USA." },
          { title: "Fellowship (India)", desc: "Robotic Urological Surgery Fellowship at AIIMS, New Delhi, India." }
        ],
        training: [
          { title: "Microsurgery Training", desc: "Specialized Urological Microsurgery & Male Infertility Training in New Delhi, India & USA." }
        ],
        earlyEducation: [
          { title: "SSC & HSC Excellence", desc: "Secured top combined merit list positions in SSC & HSC examinations. Awarded 'Chancellor Prize' by the Honorable President of Bangladesh." }
        ]
      },
      bdExpList: [
        "Currently serving as Head of Department (Urology), Anwer Khan Modern Medical College, Dhaka.",
        "Professor (Visiting), Urology, Shahabuddin Medical College, Gulshan, Dhaka.",
        "Senior Consultant, Urology, Imperial-Apollo Hospital, Chattogram (Former).",
        "Consultant, Urology, BRB Hospital, Dhaka (Former).",
        "Urology Specialist, Apollo Hospital, Dhaka (Currently Evercare Hospital).",
        "Assistant Professor, Urology, Ministry of Health, Dhaka.",
        "Urology Specialist / Assistant Registrar, Dhaka Medical College Hospital.",
        "Resident, Urology, BSMMU.",
        "Assistant Registrar, Surgery, Rajshahi Medical College Hospital.",
        "Medical Officer, Surgery, BIRDEM Hospital, Dhaka."
      ],
      intExpList: [
        "Consultant, Urology, Miramichi Regional Hospital, New Brunswick, Canada.",
        "Visiting Faculty & Consultant, Microsurgical Urology & Andrology, USA & India.",
        "Fellow & Clinical Researcher, TTSH Hospital, Singapore.",
        "Residency & Fellowship Training, New York Medical College & Lincoln Medical Center, USA."
      ],
      membershipsList: [
        "Full Member, American Urological Association (AUA).",
        "Fellow, American College of Surgeons (FACS).",
        "Member, Endourological Society & International Society for Sexual Medicine (ISSM).",
        "Attended more than 100 international conferences and presented scientific papers globally.",
        "Faculty & Chairperson at ANDROCON (Andrological Conference of Urological Society of India)."
      ]
    },
    // Contact Page
    contactPage: {
      heroTitle: "Get in Touch",
      heroSub: "We are here to assist you with appointments, emergency consultations, and treatment inquiries.",
      callUs: "Call Us",
      emailUs: "Email Us",
      visitUs: "Visit Us"
    }
  },
  bn: {
    // Header & Navigation
    nav: {
      home: "হোম",
      about: "ডাক্তার সম্পর্কে",
      services: "সেবাসমূহ",
      chambers: "চেম্বারসমূহ",
      publications: "পাবলিকেশন",
      blog: "ব্লগ ও ভিডিও",
      contact: "যোগাযোগ",
      bookAppointment: "অ্যাপয়েন্টমেন্ট নিন",
      selectLanguage: "ভাষা"
    },
    // Hero Section
    hero: {
      badge: "বাংলাদেশের শীর্ষস্থানীয় ইউরোলজিস্ট",
      title: "ওয়ার্ল্ড ক্লাস ইউরোলজি ও এন্ড্রোলজি ক্লিনিক ইন বাংলাদেশ",
      subtitle: "আজফার ইউরোলজি, এন্ড্রোলজি ও ফার্টিলিটি সেন্টার।",
      description: "উন্নত প্রযুক্তি, সর্বোচ্চ আন্তরিকতা এবং দীর্ঘ অভিজ্ঞতার সমন্বয়ে বিশ্বমানের ইউরোলজিক্যাল ও এন্ড্রোলজিক্যাল চিকিৎসা সেবা গ্রহণ করুন।",
      features: [
        "প্রাক্তন নর্থ আমেরিকান কনসালটেন্ট ইউরোলজিস্ট ও এন্ড্রোলজিস্ট",
        "বিশ্বজুড়ে সর্বোচ্চ সংখ্যক মাইক্রোসার্জিক্যাল ইউরোলজি ও ইনফার্টিলিটি সেবা প্রদানকারী শীর্ষ ১০ সার্জনদের একজন",
        "ভারত ও যুক্তরাষ্ট্রে ইউরোলজিক্যাল মাইক্রোসার্জারি, এন্ড্রোলজি এবং মেল ইনফার্টিলিটিতে বিশেষভাবে প্রশিক্ষিত",
        "ব্যবস্থাপনা পরিচালক: আজফার ইউরোলজি, এন্ড্রোলজি ও ফার্টিলিটি সেন্টার।"
      ],
      bookButton: "অ্যাপয়েন্টমেন্ট নিন",
      learnMoreButton: "বিস্তারিত জানুন",
      yearsExcellence: "বছরের অভিজ্ঞতা"
    },
    // Stats Section
    stats: {
      experience: "বছরের অভিজ্ঞতা",
      patients: "চিকিৎসা গ্রহণকারী রোগী",
      microsurgeries: "ইউরোলজিক্যাল মাইক্রোসার্জারি সম্পন্ন",
      journals: "জার্নাল প্রকাশনা",
      conferences: "কনফারেন্সে অংশগ্রহণ"
    },
    // About Section
    about: {
      badge: "আমাদের বিশেষজ্ঞ চিকিৎসকের পরিচিতি",
      name: "প্রফেসর ডা. আজফার উদ্দীন শেখ",
      degrees: "এমবিবিএস, এমএস (ইউরোলজি), এমডি (ইউএসএ), এফএসিএস (ইউএসএ)",
      yearsExp: "বছরের অভিজ্ঞতা",
      heading: "ইউরোলজি ও এন্ড্রোলজি চিকিৎসায় আন্তর্জাতিক মান ও সমর্পণ",
      p1: "প্রফেসর ডা. আজফার উদ্দীন শেখ আন্তর্জাতিকভাবে স্বীকৃত একজন ইউরোলজিক্যাল মাইক্রোসার্জন ও এন্ড্রোলজিস্ট, যিনি ২৬ বছরেরও বেশি সময় ধরে আধুনিক মাইক্রোসার্জারি, এন্ডো-ইউরোলজি এবং পুরুষ বন্ধ্যাত্ব চিকিৎসায় সেবা দিয়ে আসছেন।",
      p2: "উত্তর আমেরিকা, সিঙ্গাপুর এবং ভারতে উন্নত প্রশিক্ষণ ও কাজের অভিজ্ঞতায় সমৃদ্ধ হয়ে তিনি বাংলাদেশে বিশ্বমানের আধুনিক চিকিৎসা সেবা ও প্রযুক্তি নিয়ে এসেছেন।",
      readBio: "সম্পূর্ণ প্রোফাইল দেখুন",
      callNow: "সরাসরি কল করুন"
    },
    // Services Section
    services: {
      tag: "বিশেষায়িত সেবাসমূহ",
      title: "আমাদের প্রধান ইউরোলজিক্যাল ও এন্ড্রোলজিক্যাল চিকিৎসাসমূহ",
      subtitle: "জটিল ইউরোলজিক্যাল, এন্ড্রোলজিক্যাল এবং প্রজননজনিত সমস্যার জন্য আন্তর্জাতিক মানের আধুনিক ডায়াগনস্টিক ও সার্জিক্যাল সেবা।",
      items: {
        andrologyTitle: "এন্ড্রোলজি",
        andrologyDesc: "যৌন দুর্বলতা, হরমোন ভারসাম্যহীনতা এবং পুরুষ স্বাস্থ্য জটিলতার বৈজ্ঞানিক ও আধুনিক সমাধান।",
        andrologyDetails: "পুরুষদের যৌন ও প্রজনন সমস্যা নিয়ে কাজ করে।\n\n• লিঙ্গ শক্ত না হওয়া বা উত্থান ধরে রাখতে না পারা\n• টেস্টোস্টেরন হরমোন কমে যাওয়া\n• দ্রুত বীর্যপাত হয়ে যাওয়া\n\nচিকিৎসা: রক্ত পরীক্ষা করে হরমোন দেখা হয়, রক্ত চলাচল ও স্নায়ু পরীক্ষা করা হয়, তারপর ওষুধ, হরমোন থেরাপি বা ছোট প্রসিডিউর দেওয়া হয়।",
        
        microsurgeryTitle: "ইউরোলজিক্যাল মাইক্রোসার্জারি",
        microsurgeryDesc: "ভ্যাসেকটমি রিভার্সাল এবং মূত্র ও শুক্রনালীর ব্লক খোলার জন্য সূক্ষ্ম মাইক্রোসার্জিক্যাল চিকিৎসা।",
        microsurgeryDetails: "খুব ছোট ও সূক্ষ্ম অঙ্গের উপর মাইক্রোস্কোপ দিয়ে সার্জারি করা হয়।\n\nকখন লাগে:\n• ভ্যাসেকটমির পর নালী জোড়া লাগাতে\n• ভ্যারিকোসিল ঠিক করতে\n• স্পার্ম সংগ্রহ করতে\n\nকিভাবে হয়: সার্জন ছোট যন্ত্র ও মাইক্রোস্কোপ দিয়ে সূক্ষ্ম নালী বা রক্তনালী জোড়া লাগান।",
        
        kidneyStoneTitle: "এন্ডো-ইউরোলজি ও কিডনি পাথর",
        kidneyStoneDesc: "বিনা কাটায় লেজারের সাহায্যে কিডনি ও মূত্রনালীর পাথর সূক্ষ্ম ও ব্যথামুক্তভাবে অপসারণ।",
        kidneyStoneDetails: "কিডনি বা মূত্রনালীর পাথর চিকিৎসা করা হয়, কাটাছেঁড়া ছাড়াই।\n\nকিভাবে হয়: প্রস্রাবের রাস্তা দিয়ে ক্যামেরাযুক্ত নল ঢুকিয়ে লেজার দিয়ে পাথর ভাঙা হয়। বড় পাথরে পিঠে ছোট ছিদ্র করে বের করা হয় (PCNL)।\n\nকাদের লাগে: কিডনি বা মূত্রনালীতে পাথর আছে এমন রোগীদের।",
        
        generalUrologyTitle: "জেনারেল ইউরোলজি",
        generalUrologyDesc: "সাধারণ ইউরোলজিক্যাল সমস্যার পূর্ণাঙ্গ রোগ নির্ণয় ও চিকিৎসা।",
        generalUrologyDetails: "সাধারণ প্রস্রাবজনিত সমস্যা দেখা হয়।\n\n• প্রস্রাবে ইনফেকশন\n• প্রোস্টেট বড় হয়ে যাওয়া\n• প্রস্রাব ধরে রাখতে না পারা\n\nএটাই প্রথম ধাপ, প্রয়োজনে পরে বিশেষজ্ঞ শাখায় পাঠানো হয়।",
        
        maleInfertilityTitle: "পুরুষ বন্ধ্যাত্ব",
        maleInfertilityDesc: "জটিল বন্ধ্যাত্ব ও জিরো স্পার্ম চিকিৎসায় আধুনিক MicroTESE, MESA এবং স্পার্ম রিকভারি পদ্ধতি।",
        maleInfertilityDetails: "পুরুষের কারণে সন্তান না হওয়ার সমস্যা দেখা হয়।\n\n• স্পার্ম কম থাকা\n• স্পার্ম ভালোভাবে না চলা\n• হরমোন সমস্যা\n• নালীতে বাধা\n\nচিকিৎসা: জীবনযাত্রায় পরিবর্তন, ওষুধ, দরকার হলে সার্জারি, বা IVF/ICSI এর জন্য স্পার্ম সংগ্রহ।",
        
        neuroUrologyTitle: "নিউরো-ইউরোলজি",
        neuroUrologyDesc: "মূত্রনালীকে প্রভাবিত করে এমন স্নায়বিক সমস্যাগুলোর উন্নত রোগ নির্ণয় ও চিকিৎসা।",
        neuroUrologyDetails: "স্নায়ুর সমস্যার কারণে প্রস্রাবের সমস্যা দেখা হয়।\n\nকাদের হয়: স্পাইনাল কর্ড ইনজুরি, স্ট্রোক, ডায়াবেটিস বা মাল্টিপল স্ক্লেরোসিসে আক্রান্ত রোগীদের।\n\nচিকিৎসা: পরীক্ষা করে ব্লাডার ও স্নায়ু ঠিক আছে কিনা দেখা হয়, তারপর ওষুধ, ক্যাথেটার বা নার্ভ স্টিমুলেশন দিয়ে চিকিৎসা করা হয়।",
        
        uroOncologyTitle: "ইউরো অনকোলজি",
        uroOncologyDesc: "কিডনি, ব্লাডার, প্রস্টেট এবং টেস্টিকুলার ক্যান্সারের বিশেষজ্ঞ সার্জিক্যাল চিকিৎসা।",
        uroOncologyDetails: "মূত্রনালী ও পুরুষের প্রজনন অঙ্গের ক্যান্সার চিকিৎসা করা হয়।\n\nযেসব ক্যান্সার: কিডনি, ব্লাডার, প্রোস্টেট, টেস্টিস, পেনাইল ক্যান্সার।\n\nচিকিৎসা: বায়োপসি ও স্ক্যান করে রোগ নির্ণয়, তারপর সার্জারি (ওপেন, ল্যাপারোস্কোপিক বা রোবোটিক), কেমোথেরাপি ও নিয়মিত ফলোআপ।",
        
        reconstructiveTitle: "রিকনস্ট্রাক্টিভ ইউরোলজি",
        reconstructiveDesc: "মূত্রনালীর স্বাভাবিক কাজ ফিরিয়ে আনতে অত্যাধুনিক রিকনস্ট্রাক্টিভ সার্জারি।",
        reconstructiveDetails: "মূত্রনালীর ক্ষতিগ্রস্ত বা ত্রুটিপূর্ণ অংশ মেরামত করা হয়।\n\nকাদের লাগে: নালী সরু হয়ে যাওয়া, জন্মগত ত্রুটি, দুর্ঘটনায় আঘাত, বা আগের সার্জারির জটিলতা।\n\nকিভাবে হয়: শরীরের অন্য জায়গার টিস্যু দিয়ে ক্ষতিগ্রস্ত অংশ মেরামত করে স্বাভাবিক কার্যকারিতা ফিরিয়ে আনা হয়।",
        
        pediatricTitle: "পেডিয়াট্রিক ইউরোলজি",
        pediatricDesc: "শিশুদের জন্মগত ত্রুটি এবং মূত্রনালীর সমস্যার সফল রিকনস্ট্রাক্টিভ সার্জারি।",
        pediatricDetails: "শিশুদের প্রস্রাব ও যৌনাঙ্গের সমস্যা চিকিৎসা করা হয়।\n\n• অণ্ডকোষ নিচে না নামা\n• জন্মগত ত্রুটি\n• বিছানায় প্রস্রাব করা\n• প্রস্রাব উল্টো দিকে যাওয়া\n\nশিশুদের জন্য আলাদা ও কোমল পদ্ধতিতে চিকিৎসা করা হয়।",
        
        femaleUrologyTitle: "ফিমেল ইউরোলজি",
        femaleUrologyDesc: "মহিলাদের প্রস্রাবের সমস্যা, পেলভিক মেডিসিন ও ইউরোলজিক্যাল সমস্যার বিশেষ চিকিৎসা।",
        femaleUrologyDetails: "মহিলাদের প্রস্রাবজনিত সমস্যা চিকিৎসা করা হয়।\n\n• প্রস্রাব ধরে রাখতে না পারা\n• অঙ্গ নিচে নেমে আসা\n• বারবার ইনফেকশন\n• সন্তান জন্মের পর ব্লাডার সমস্যা\n\nচিকিৎসা: পেলভিক ব্যায়াম থেকে শুরু করে দরকার হলে ছোট সার্জারি।",
        
        laparoscopyRoboticTitle: "ল্যাপারোস্কোপি ও রোবোটিক",
        laparoscopyRoboticDesc: "নির্ভুল চিকিৎসা ও দ্রুত সুস্থতার জন্য মিনিমালি ইনভেসিভ ল্যাপারোস্কোপিক এবং রোবোটিক সার্জারি।",
        laparoscopyRoboticDetails: "বড় কাটাছেঁড়া ছাড়াই ছোট ছিদ্র করে ক্যামেরা ও যন্ত্র দিয়ে জটিল অপারেশন করা হয়। রোবোটিক সার্জারিতে রোবটের সাহায্যে আরো নিখুঁতভাবে অপারেশন করা যায়।\n\nকোন কাজে লাগে: কিডনি অপসারণ, প্রোস্টেট অপসারণ, টিউমার অপসারণ।\n\nসুবিধা: কম ব্যথা, কম দাগ, দ্রুত সুস্থ হওয়া।"
      }
    },
    // Banner Section
    banner: {
      title: "বিশেষজ্ঞ চিকিৎসকের পরামর্শ প্রয়োজন?",
      subtitle: "আজই আপনার সুবিধাজনক চেম্বারে অ্যাপয়েন্টমেন্ট বুক করুন অথবা যেকোনো তথ্যের জন্য কন্সালটেশন ডেস্কে যোগাযোগ করুন।",
      button: "এখনই পরামর্শ নিন"
    },
    // Chambers Section
    chambers: {
      tag: "আমাদের চেম্বারসমূহ",
      title: "চেম্বারে ভিজিট করুন",
      officeTitle: "আজফার ইউরোলজি, এন্ড্রোলজি, মাইক্রোসার্জারি ও ফার্টিলিটি সেন্টার (অফিস)",
      officeSubtitle: "বাংলাদেশের একমাত্র পূর্ণাঙ্গ পুরুষ বন্ধ্যাত্ব চিকিৎসা কেন্দ্র",
      hospitalTitle: "আজফার ইউরোলজি, এন্ড্রোলজি, মাইক্রোসার্জারি ও ফার্টিলিটি সেন্টার",
      visitingHours: "রোগী দেখার সময়",
      closed: "(শুক্রবার বন্ধ)",
      callForAppointment: "সিরিয়ালের জন্য কল করুন",
      getDirections: "ম্যাপে লোকেশন দেখুন"
    },
    // Testimonials Section
    testimonials: {
      tag: "রোগীদের মতামত",
      title: "রোগীদের অভিজ্ঞতা ও প্রতিক্রিয়া",
      subtitle: "সফল চিকিৎসার পর সুস্থ জীবনে ফিরে আসা সম্মানিত রোগীদের আন্তরিক মতামত।"
    },
    // Publications Section
    publications: {
      tag: "বিজ্ঞানভিত্তিক গবেষণা",
      title: "জার্নাল ও আন্তর্জাতিক রিসার্চ পেপার",
      subtitle: "ইউরোলজি ও পুরুষ বন্ধ্যাত্ব চিকিৎসায় আন্তর্জাতিক মেডিকেল জার্নালে প্রকাশিত গবেষণা গ্রন্থ।"
    },
    // Latest Blogs & Videos
    blogs: {
      tag: "স্বাস্থ্য সচেতনতা",
      title: "সর্বশেষ স্বাস্থ্য বিষয়ক প্রবন্ধসমূহ",
      subtitle: "ইউরোলজি, পুরুষ যৌনস্বাস্থ্য ও এন্ড্রোলজি বিষয়ক গুরুত্বপূর্ণ পরামর্শ ও গাইডলাইন।",
      readMore: "সম্পূর্ণ প্রবন্ধ পড়ুন",
      viewAll: "সকল ব্লগ দেখুন"
    },
    videos: {
      tag: "ভিডিও গ্যালারি",
      title: "গুরুত্বপূর্ণ স্বাস্থ্য পরামর্শ ভিডিও",
      subtitle: "বিভিন্ন সার্জারি, রোগ প্রতিরোধ ও পুরুষ বন্ধ্যাত্ব বিষয়ক দিকনির্দেশনামূলক ভিডিও।",
      watchYoutube: "ইউটিউবে দেখুন",
      viewAllVideos: "সকল ভিডিও দেখুন"
    },
    // FAQ Section
    faq: {
      tag: "সহজ উত্তর",
      title: "সাধারণ জিজ্ঞাসাসমূহ (FAQ)",
      subtitle: "ইউরোলজিক্যাল চিকিৎসা, অ্যাপয়েন্টমেন্ট এবং অস্ত্রোপচার সংক্রান্ত প্রয়োজনীয় তথ্যাবলী।"
    },
    // Footer Section
    footer: {
      bio: "প্রফেসর ডা. আজফার উদ্দীন শেখ বাংলাদেশের একজন স্বনামধন্য ইউরোলজিস্ট, এন্ড্রোলজিস্ট এবং মাইক্রোসার্জন। ২৬ বছরেরও বেশি সময় ধরে আন্তর্জাতিক মানের অভিজ্ঞতায় তিনি হাজারো রোগীকে সুস্থ জীবনে ফিরিয়ে এনেছেন।",
      quickLinks: "দ্রুত নেভিগেশন",
      treatments: "প্রধান সেবাসমূহ",
      contactInfo: "যোগাযোগের ঠিকানা",
      addressLabel: "প্রধান অফিস",
      phoneLabel: "অ্যাপয়েন্টমেন্ট ফোন",
      emailLabel: "ইমেইল ডেস্ক",
      rights: "সর্বস্বত্ব সংরক্ষিত।"
    },
    // About Page
    aboutPage: {
      heroSub: "ইউরোলজিস্ট, এন্ড্রোলজিস্ট ও মেল ফার্টিলিটি স্পেশালিস্ট",
      topBadge: "বিশ্বজুড়ে সর্বাধিক সংখ্যক ইউরোলজিক্যাল মাইক্রোসার্জারি সম্পন্নকারী সার্জন",
      introTitle: "পেশাগত দৃষ্টিভঙ্গি",
      eduTitle: "শিক্ষাগত যোগ্যতা",
      eduSub: "একাডেমিক সাফল্য",
      expTitle: "কাজের অভিজ্ঞতা",
      expSub: "পেশাগত অভিজ্ঞতা",
      bdExp: "বাংলাদেশে অভিজ্ঞতা",
      intExp: "আন্তর্জাতিক অভিজ্ঞতা",
      memberTitle: "সদস্যপদ ও সম্মাননা",
      memberSub: "পেশাগত অন্তর্ভুক্তি",
      educationGroups: {
        degreesTitle: "মেডিকেল ডিগ্রি ও বোর্ড সার্টিফিকেশন",
        fellowshipsTitle: "আন্তর্জাতিক ফেলোশিপসমূহ",
        trainingTitle: "বিশেষায়িত অ্যাডভান্সড ট্রেনিং",
        earlyEduTitle: "প্রাথমিক ও মাধ্যমিক শিক্ষা",
        degrees: [
          { title: "এমবিবিএস (MBBS)", desc: "ঢাকা মেডিকেল কলেজ (DMC) থেকে সফলভাবে এমবিবিএস সম্পন্ন।" },
          { title: "এমএস - ইউরোলজি (MS Urology)", desc: "বঙ্গবন্ধু শেখ মুজিব মেডিকেল বিশ্ববিদ্যালয় (BSMMU - তত্কালীন IPGMR) থেকে ইউরোলজিতে এমএস।" },
          { title: "এমডি - ইউএসএ (MD USA)", desc: "নিউ ইয়র্ক মেডিকেল কলেজ, যুক্তরাষ্ট্র থেকে রেসিডেন্সি সম্পন্ন।" },
          { title: "এফএসিএস - ইউএসএ (FACS USA)", desc: "ফেলো অব দ্য আমেরিকান কলেজ অব সার্জনস (FACS), মার্কিন যুক্তরাষ্ট্র।" }
        ],
        fellowships: [
          { title: "ফেলোশিপ (সিঙ্গাপুর)", desc: "ল্যাপারোস্কোপিক ইউরোলজি, এন্ডোইউরোলজি ও রেনাল ট্রান্সপ্লান্টেশন, টিটিএসএইচ (SUA Fellowship), সিঙ্গাপুর।" },
          { title: "ফেলোশিপ (ইউএসএ)", desc: "ইউরোলজি ও এন্ড্রোলজি ফেলোশিপ, লিঙ্কন মেডিকেল সেন্টার, নিউ ইয়র্ক, যুক্তরাষ্ট্র।" },
          { title: "ফেলোশিপ (ইন্ডিয়া)", desc: "রোবোটিক ইউরোলজিক্যাল সার্জারি ফেলোশিপ, অল ইন্ডিয়া ইনস্টিটিউট অব মেডিকেল সায়েন্সেস (AIIMS), নতুন দিল্লি, ভারত।" }
        ],
        training: [
          { title: "মাইক্রোসার্জারি ট্রেনিং", desc: "নতুন দিল্লি (ভারত) এবং যুক্তরাষ্ট্রে ইউরোলজিক্যাল মাইক্রোসার্জারি ও মেল ইনফার্টিলিটিতে বিশেষ প্রশিক্ষণ।" }
        ],
        earlyEducation: [
          { title: "এসএসসি ও এইচএসসি সাফল্য", desc: "এসএসসি ও এইচএসসি পরীক্ষায় সম্মিলিত মেধা তালিকায় শীর্ষ স্থান অর্জন। গণপ্রজাতন্ত্রী বাংলাদেশের মহামান্য রাষ্ট্রপতি কর্তৃক 'চ্যান্সেলর প্রাইজ' সম্মাননা অর্জন।" }
        ]
      },
      bdExpList: [
        "বর্তমানে বিভাগীয় প্রধান (ইউরোলজি), আনোয়ার খান মডার্ন মেডিকেল কলেজ, ঢাকা হিসেবে কর্মরত।",
        "ভিজিটিং প্রফেসর, ইউরোলজি বিভাগ, শাহাবুদ্দিন মেডিকেল কলেজ, গুলশান, ঢাকা।",
        "সিনিয়র কনসালটেন্ট, ইউরোলজি, ইম্পেরিয়াল-অ্যাপোলো হাসপাতাল, চট্টগ্রাম (সাবেক)।",
        "কনসালটেন্ট, ইউরোলজি, বিআরবি হাসপাতাল, ঢাকা (সাবেক)।",
        "ইউরোলজি স্পেশালিস্ট, অ্যাপোলো হাসপাতাল, ঢাকা (বর্তমানে এভারকেয়ার হাসপাতাল)।",
        "সহকারী অধ্যাপক, ইউরোলজি, স্বাস্থ্য মন্ত্রণালয়, ঢাকা।",
        "ইউরোলজি স্পেশালিস্ট / সহকারী রেজিস্টার, ঢাকা মেডিকেল কলেজ হাসপাতাল।",
        "রেসিডেন্ট, ইউরোলজি, বিএসএমএমইউ (BSMMU)।",
        "সহকারী রেজিস্টার, সার্জারি, রাজশাহী মেডিকেল কলেজ হাসপাতাল।",
        "মেডিকেল অফিসার, সার্জারি, বারডেম হাসপাতাল (BIRDEM), ঢাকা।"
      ],
      intExpList: [
        "কনসালটেন্ট, ইউরোলজি, মিরামিচি আঞ্চলিক হাসপাতাল, নিউ ব্রান্সউইক, কানাডা।",
        "ভিজিটিং ফ্যাকাল্টি ও কনসালটেন্ট, মাইক্রোসার্জিক্যাল ইউরোলজি ও এন্ড্রোলজি, ইউএসএ এবং ভারত।",
        "ফেলো ও ক্লিনিক্যাল রিসার্চার, টিটিএসএইচ হাসপাতাল, সিঙ্গাপুর।",
        "রেসিডেন্সি ও ফেলোশিপ ট্রেনিং, নিউ ইয়র্ক মেডিকেল কলেজ ও লিঙ্কন মেডিকেল সেন্টার, ইউএসএ।"
      ],
      membershipsList: [
        "ফুল মেম্বার, আমেরিকান ইউরোলজিক্যাল অ্যাসোসিয়েশন (AUA)।",
        "ফেলো, আমেরিকান কলেজ অব সার্জনস (FACS)।",
        "সদস্য, এন্ডোইউরোলজিক্যাল সোসাইটি এবং ইন্টারন্যাশনাল সোসাইটি ফর সেক্সুয়াল মেডিসিন (ISSM)।",
        "১০০টিরও বেশি আন্তর্জাতিক কনফারেন্সে অংশগ্রহণ এবং বিভিন্ন বিজ্ঞানভিত্তিক প্রবন্ধ উপস্থাপন।",
        "ANDROCON (ইউরোলজিক্যাল সোসাইটি অব ইন্ডিয়ার এন্ড্রোলজি কনফারেন্স) এ ফ্যাকাল্টি ও চেয়ারম্যান হিসেবে দায়িত্ব পালন।"
      ]
    },
    // Contact Page
    contactPage: {
      heroTitle: "যোগাযোগ করুন",
      heroSub: "অ্যাপয়েন্টমেন্ট, জরুরী পরামর্শ অথবা যেকোনো চিকিৎসার তথ্যের জন্য আমাদের সাথে সরাসরি যোগাযোগ করুন।",
      callUs: "ফোন করুন",
      emailUs: "ইমেইল করুন",
      visitUs: "চেম্বারে আসুন"
    }
  }
};
