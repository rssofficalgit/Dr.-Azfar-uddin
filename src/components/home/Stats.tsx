import { ShieldCheck, Users, BookOpen } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';

export function Stats() {
  const { t } = useLanguage();

  const stats = [
    {
      id: 1,
      icon: ShieldCheck,
      value: "26+",
      label: t.stats.experience
    },
    {
      id: 2,
      icon: Users,
      value: "70,000+",
      label: t.stats.patients
    },
    {
      id: 3,
      icon: BookOpen,
      value: "12+",
      label: t.stats.journals
    }
  ];

  return (
    <section className="relative z-20 px-4 lg:px-8 max-w-7xl mx-auto -mt-2 sm:-mt-4 lg:-mt-6 mb-4 lg:mb-6">
      <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 p-6 md:p-8 lg:p-10 border border-slate-100">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-slate-100">
          {stats.map((stat) => (
            <div key={stat.id} className="flex items-center justify-center gap-4 md:gap-6 pt-6 md:pt-0 first:pt-0">
              <stat.icon className="w-10 h-10 md:w-12 md:h-12 text-[#044c3c] flex-shrink-0" strokeWidth={1.5} />
              <div className="flex flex-col">
                <span className="text-3xl md:text-4xl font-extrabold text-[#044c3c]">{stat.value}</span>
                <span className="text-sm md:text-base font-medium text-slate-500 mt-0.5">{stat.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
