import { useEffect, useState, useRef } from 'react';
import { ShieldCheck, Users, BookOpen, Activity, Award } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';

function toBanglaDigits(num: number | string): string {
  const banglaNumerals = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
  return String(num).replace(/\d/g, (digit) => banglaNumerals[parseInt(digit, 10)]);
}

function AnimatedCounter({ target, suffix = '+', language }: { target: number; suffix?: string; language: string }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTimestamp: number | null = null;
    const duration = 2000; // 2 seconds smooth animation

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // Ease-out quad formula for smooth deceleration
      const easeOutProgress = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOutProgress * target));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    window.requestAnimationFrame(step);
  }, [isVisible, target]);

  const formattedNumber = count.toLocaleString('en-US');
  const displayValue = language === 'bn' ? toBanglaDigits(formattedNumber) : formattedNumber;

  return (
    <span ref={containerRef}>
      {displayValue}{suffix}
    </span>
  );
}

export function Stats() {
  const { t, language } = useLanguage();

  const stats = [
    {
      id: 1,
      icon: ShieldCheck,
      target: 26,
      suffix: "+",
      label: t.stats.experience
    },
    {
      id: 2,
      icon: Users,
      target: 100000,
      suffix: "+",
      label: t.stats.patients
    },
    {
      id: 3,
      icon: Activity,
      target: 5000,
      suffix: "+",
      label: t.stats.microsurgeries
    },
    {
      id: 4,
      icon: BookOpen,
      target: 15,
      suffix: "+",
      label: t.stats.journals
    },
    {
      id: 5,
      icon: Award,
      target: 100,
      suffix: "+",
      label: t.stats.conferences
    }
  ];

  return (
    <section className="relative z-20 px-4 lg:px-8 max-w-7xl mx-auto -mt-2 sm:-mt-4 lg:-mt-6 mb-4 lg:mb-6">
      <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 p-6 md:p-8 border border-slate-100">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-slate-100">
          {stats.map((stat, idx) => (
            <div key={stat.id} className={`flex items-center justify-center gap-3 sm:gap-4 p-2 ${idx > 0 ? 'md:pl-4' : ''}`}>
              <stat.icon className="w-8 h-8 sm:w-10 sm:h-10 text-[#044c3c] flex-shrink-0" strokeWidth={1.5} />
              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-extrabold text-[#044c3c] leading-none mb-1">
                  <AnimatedCounter target={stat.target} suffix={stat.suffix} language={language} />
                </span>
                <span className="text-xs sm:text-sm font-medium text-slate-500 leading-tight">{stat.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
