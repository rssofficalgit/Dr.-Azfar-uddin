import { GraduationCap, Briefcase, Globe, Award, CheckCircle2, MapPin } from 'lucide-react';

export function AboutPage() {
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
                Urologist & Microsurgeon
              </h4>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
                Prof. Dr. Azfar <br className="hidden lg:block"/> Uddin Shaikh
              </h1>
              <p className="text-emerald-100/90 text-base lg:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Welcome to the official website of a distinguished medical professional. With a career spanning several decades, Prof. Dr. Azfar Uddin Shaikh is recognized as a leading Urological Microsurgeon globally.
              </p>
              
              <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2.5 flex items-center gap-2">
                  <Award className="w-5 h-5 text-amber-400" />
                  <span className="text-white font-medium text-sm">Global Top Varicocelectomy Performer</span>
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
            "As a urologist, I have carried forward a legacy of significant roles and responsibilities in the healthcare profession. My mission is to advance urology in Bangladesh by continuously integrating innovative techniques and international standards of care."
          </p>
          <p className="text-slate-500">
            For his innovative contributions in the field of urology, he has received multiple awards and honors. He has also been working for many years with urologists from the United States to advance urology in Bangladesh.
          </p>
        </div>
      </section>

      {/* Education */}
      <section className="py-8 lg:py-10">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <SectionHeader title="Educational Qualifications" subtitle="Academic Background" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <EducationCard 
              title="MBBS & MS (Urology)" 
              desc="MBBS from Dhaka Medical College regularly. MS (Urology) from BSMMU (the then IPGMR)." 
            />
            <EducationCard 
              title="MD (USA)" 
              desc="Residency completed at New York Medical College, USA." 
            />
            <EducationCard 
              title="Fellowship (Singapore)" 
              desc="Laparoscopic Urology, Endourology & Renal Transplantation, TTSH (SUA Fellowship)." 
            />
            <EducationCard 
              title="Fellowship (USA & India)" 
              desc="Urology & Andrology at Lincoln Medical Center, NY. Robotic Surgery at AIIMS, New Delhi." 
            />
            <EducationCard 
              title="Microsurgery Training" 
              desc="Specialized training completed in New Delhi, India." 
            />
            <EducationCard 
              title="Early Education" 
              desc="SSC & HSC: Got position in combined merit list. Awarded 'Chancellor Prize' from Honorable President of Bangladesh." 
            />
          </div>
        </div>
      </section>

      {/* Working Experience */}
      <section className="py-8 lg:py-10 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <SectionHeader title="Working Experience" subtitle="Professional Journey" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
            
            {/* Bangladesh Experience */}
            <div className="bg-slate-50 rounded-[2rem] p-8 lg:p-10 border border-slate-100">
              <div className="flex items-center gap-3 mb-8">
                <div className="bg-[#044c3c] p-2.5 rounded-xl">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800">In Bangladesh</h3>
              </div>
              
              <ul className="space-y-4">
                <ExpItem text="Currently serving as Head of Department (Urology), Anwer Khan Modern Medical College, Dhaka." active />
                <ExpItem text="Professor (Visiting), Urology, Shahabuddin Medical College, Gulshan, Dhaka." />
                <ExpItem text="Senior Consultant, Urology, Imperial-Apollo Hospital, Chattogram (Former)." />
                <ExpItem text="Consultant, Urology, BRB Hospital, Dhaka (Former)." />
                <ExpItem text="Urology Specialist, Apollo Hospital, Dhaka (Currently Evercare Hospital)." />
                <ExpItem text="Assistant Professor, Urology, Ministry of Health, Dhaka." />
                <ExpItem text="Urology Specialist / Assistant Registrar, Dhaka Medical College Hospital." />
                <ExpItem text="Resident, Urology, BSMMU." />
                <ExpItem text="Assistant Registrar, Surgery, Rajshahi Medical College Hospital." />
                <ExpItem text="Medical Officer, Surgery, BIRDEM Hospital, Dhaka." />
              </ul>
            </div>

            {/* International Experience */}
            <div className="bg-slate-50 rounded-[2rem] p-8 lg:p-10 border border-slate-100">
              <div className="flex items-center gap-3 mb-8">
                <div className="bg-amber-500 p-2.5 rounded-xl">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800">International</h3>
              </div>
              
              <ul className="space-y-4">
                <ExpItem text="Consultant, Urology, Miramichi Regional Hospital, New Brunswick, Canada." />
                <ExpItem text="Resident & Fellow, Urology, New York Medical College, USA." />
                <ExpItem text="Fellow Urology, Lincoln Medical Center, NY, USA." />
                <ExpItem text="Registrar Urology, Tan Tock Seng Hospital (NHG), Singapore." />
                <ExpItem text="Fellow & Scholar, Singapore Urological Association, Singapore." />
                <ExpItem text="SIU Fellow, All India Institute of Medical Sciences, New Delhi, India." />
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Memberships & Conferences */}
      <section className="py-8 lg:py-10 mb-10">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Memberships */}
            <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <Briefcase className="w-6 h-6 text-[#044c3c]" />
                <h3 className="text-xl font-bold text-slate-800">Professional Memberships</h3>
              </div>
              <ul className="space-y-3">
                <CheckItem text="Life Member of Bangladesh Association of Urological Surgeons." />
                <CheckItem text="Associate Member Singapore Urological Association." />
                <CheckItem text="Member SIU." />
                <CheckItem text="Member Urological Association of Asia." />
                <CheckItem text="International Member of the American Urological Association." />
              </ul>
            </div>

            {/* Conferences */}
            <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="w-6 h-6 text-amber-500" />
                <h3 className="text-xl font-bold text-slate-800">Conferences & Speaking</h3>
              </div>
              <ul className="space-y-3">
                <CheckItem text="Attended more than 100 international conferences and presented papers on many occasions." />
                <CheckItem text="Attended recently as a Faculty and Chairperson in ANDROCON 2024 (Andrological Conference of Urological Society of India)." />
              </ul>
            </div>

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

function EducationCard({ title, desc }: { title: string; desc: string }) {
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

function ExpItem({ text, active = false }: { text: string; active?: boolean }) {
  return (
    <li className="flex items-start gap-3">
      <div className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${active ? 'bg-amber-500' : 'bg-slate-300'}`}></div>
      <span className={`text-sm leading-relaxed ${active ? 'text-[#044c3c] font-bold' : 'text-slate-600'}`}>{text}</span>
    </li>
  );
}

function CheckItem({ text }: { text: string }) {
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
