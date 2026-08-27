import { GraduationCap, Briefcase, Globe, Award, CheckCircle2, MapPin } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

export function AboutPage() {
  const { t, language } = useLanguage();

  return (
    <div className="w-full bg-slate-50/50">
      
      {/* About Page Hero */}
      <section className="relative bg-[#044c3c] overflow-hidden pt-12 lg:pt-20 pb-16 lg:pb-24">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4"></div>

        <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Image Side */}
            <div className="w-full lg:w-2/5 flex justify-center lg:justify-end relative">
              <div className="absolute inset-0 bg-amber-400 rounded-[2rem] rotate-3 scale-105 -z-10"></div>
              <img 
                src="/Image-Azfar.png" 
                alt="Prof. Dr. Azfar Uddin Shaikh" 
                className="w-full max-w-[320px] lg:max-w-md h-auto rounded-[2rem] shadow-2xl object-cover bg-white"
              />
            </div>
            
            {/* Text Side */}
            <div className="w-full lg:w-3/5 text-center lg:text-left">
              <h4 className="text-amber-400 font-extrabold text-xs sm:text-sm uppercase tracking-widest mb-4">
                {t.aboutPage.heroSub}
              </h4>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
                {t.about.name}
              </h1>
              <p className="text-emerald-100/90 text-base lg:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
                {t.about.p1}
              </p>
              
              <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2.5 flex items-center gap-2">
                  <Award className="w-5 h-5 text-amber-400" />
                  <span className="text-white font-medium text-sm">{t.aboutPage.topBadge}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro & Philosophy */}
      <section className="py-8 lg:py-10 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl text-center">
          <QuoteIcon />
          <p className="text-slate-600 text-lg lg:text-xl leading-relaxed italic mb-8">
            {language === 'bn' 
              ? `"একজন ইউরোলজিস্ট হিসেবে আমি চিকিৎসা পেশায় গুরুত্বপূর্ণ ভূমিকা পালন করে আসছি। আমার লক্ষ্য আন্তর্জাতিক মানের চিকিৎসা ও উদ্ভাবনী প্রযুক্তি যুক্ত করে বাংলাদেশে ইউরোলজি, এন্ড্রোলজি এবং মাইক্রোসার্জারি চিকিৎসাকে আরও এগিয়ে নিয়ে যাওয়া।"`
              : `"As a urologist, I have carried forward a legacy of significant roles and responsibilities in the healthcare profession. My mission is to advance urology, andrology and microsurgery in Bangladesh by continuously integrating innovative techniques and international standards of care."`}
          </p>
          <p className="text-slate-500">
            {t.about.p2}
          </p>
        </div>
      </section>

      {/* Education */}
      <section className="py-8 lg:py-10">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <SectionHeader title={t.aboutPage.eduTitle} subtitle={t.aboutPage.eduSub} />
          
          <div className="space-y-10 mt-12">
            {/* Group 1: Degrees */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)]">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
                <div className="bg-[#044c3c] text-white p-2.5 rounded-xl shadow-xs">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#044c3c]">
                  {t.aboutPage.educationGroups.degreesTitle}
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {t.aboutPage.educationGroups.degrees.map((item, index) => (
                  <EducationCard key={index} title={item.title} desc={item.desc} />
                ))}
              </div>
            </div>

            {/* Group 2: Fellowships */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)]">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
                <div className="bg-amber-500 text-white p-2.5 rounded-xl shadow-xs">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#044c3c]">
                  {t.aboutPage.educationGroups.fellowshipsTitle}
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {t.aboutPage.educationGroups.fellowships.map((item, index) => (
                  <EducationCard key={index} title={item.title} desc={item.desc} />
                ))}
              </div>
            </div>

            {/* Group 3 & 4: Training & Early Education */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Group 3: Training */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] flex flex-col">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
                  <div className="bg-emerald-600 text-white p-2.5 rounded-xl shadow-xs">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-extrabold text-[#044c3c]">
                    {t.aboutPage.educationGroups.trainingTitle}
                  </h3>
                </div>
                {t.aboutPage.educationGroups.training.map((item, index) => (
                  <EducationCard key={index} title={item.title} desc={item.desc} />
                ))}
              </div>

              {/* Group 4: Early Education */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] flex flex-col">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
                  <div className="bg-rose-500 text-white p-2.5 rounded-xl shadow-xs">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-extrabold text-[#044c3c]">
                    {t.aboutPage.educationGroups.earlyEduTitle}
                  </h3>
                </div>
                {t.aboutPage.educationGroups.earlyEducation.map((item, index) => (
                  <EducationCard key={index} title={item.title} desc={item.desc} />
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Working Experience */}
      <section className="py-8 lg:py-10 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <SectionHeader title={t.aboutPage.expTitle} subtitle={t.aboutPage.expSub} />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
            
            {/* Bangladesh Experience */}
            <div className="bg-slate-50 rounded-[2rem] p-8 lg:p-10 border border-slate-100">
              <div className="flex items-center gap-3 mb-8">
                <div className="bg-[#044c3c] p-2.5 rounded-xl">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800">{t.aboutPage.bdExp}</h3>
              </div>
              
              <ul className="space-y-4">
                {t.aboutPage.bdExpList.map((item, idx) => (
                  <ExpItem key={idx} text={item} active={idx === 0} />
                ))}
              </ul>
            </div>

            {/* International Experience */}
            <div className="bg-slate-50 rounded-[2rem] p-8 lg:p-10 border border-slate-100">
              <div className="flex items-center gap-3 mb-8">
                <div className="bg-amber-500 p-2.5 rounded-xl">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800">{t.aboutPage.intExp}</h3>
              </div>
              
              <ul className="space-y-4">
                {t.aboutPage.intExpList.map((item, idx) => (
                  <ExpItem key={idx} text={item} />
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Memberships & Honors */}
      <section className="py-8 lg:py-10 mb-10">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <SectionHeader title={t.aboutPage.memberTitle} subtitle={t.aboutPage.memberSub} />
          <div className="mt-12 bg-white rounded-[2rem] p-8 lg:p-10 shadow-sm border border-slate-100 hover:shadow-md transition-shadow max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-[#044c3c] text-white p-2.5 rounded-xl">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800">{t.aboutPage.memberTitle}</h3>
            </div>
            <ul className="space-y-4">
              {t.aboutPage.membershipsList.map((item, idx) => (
                <CheckItem key={idx} text={item} />
              ))}
            </ul>
          </div>
        </div>
      </section>

    </div>
  );
}

/* Helper Components */

function SectionHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="text-center max-w-2xl mx-auto">
      <h4 className="text-amber-500 font-bold text-xs sm:text-sm uppercase tracking-widest mb-3">
        {subtitle}
      </h4>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#044c3c] mb-6">
        {title}
      </h2>
      <div className="flex items-center justify-center gap-2">
        <div className="h-px w-12 bg-slate-200"></div>
        <div className="w-1.5 h-1.5 rounded-full bg-[#044c3c]"></div>
        <div className="h-px w-12 bg-slate-200"></div>
      </div>
    </div>
  );
}

function EducationCard({ title, desc }: { title: string; desc: string; key?: number | string }) {
  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)] hover:-translate-y-1 hover:border-amber-200 hover:shadow-lg transition-all duration-300">
      <div className="flex items-start gap-4">
        <div className="bg-amber-50 p-2.5 rounded-xl text-amber-600 flex-shrink-0 mt-1">
          <GraduationCap className="w-5 h-5" />
        </div>
        <div>
          <h4 className="font-extrabold text-[#044c3c] text-lg mb-2">{title}</h4>
          <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
        </div>
      </div>
    </div>
  );
}

function ExpItem({ text, active = false }: { text: string; active?: boolean; key?: number | string }) {
  return (
    <li className="flex items-start gap-3">
      <div className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${active ? 'bg-amber-500' : 'bg-slate-300'}`}></div>
      <span className={`text-sm leading-relaxed ${active ? 'text-[#044c3c] font-bold' : 'text-slate-600'}`}>{text}</span>
    </li>
  );
}

function CheckItem({ text }: { text: string; key?: number | string }) {
  return (
    <li className="flex items-start gap-3">
      <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
      <span className="text-slate-600 text-sm leading-relaxed pt-0.5">{text}</span>
    </li>
  );
}

function QuoteIcon() {
  return (
    <div className="flex justify-center mb-6">
      <div className="bg-amber-50 w-16 h-16 rounded-full flex items-center justify-center">
        <svg className="w-8 h-8 text-amber-300" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>
    </div>
  );
}
