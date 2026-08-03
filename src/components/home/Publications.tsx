import { FileText, ArrowRight } from 'lucide-react';

export function Publications() {
  const publications = [
    {
      title: "Advanced Microsurgical Techniques in Male Infertility",
      journal: "International Journal of Urology, 2023",
      description: "A comprehensive study on the outcomes of modern microsurgical approaches in treating complex cases of male infertility.",
      link: "#"
    },
    {
      title: "Efficacy of Laser Lithotripsy for Large Kidney Stones",
      journal: "Asian Journal of Surgery, 2022",
      description: "Analyzing the success rate and patient recovery times using advanced laser lithotripsy compared to traditional methods.",
      link: "#"
    },
    {
      title: "Reconstructive Urology: Challenges and Modern Solutions",
      journal: "Global Urology Forum, 2021",
      description: "A detailed review of complex reconstructive procedures and their long-term impact on patient quality of life.",
      link: "#"
    }
  ];

  return (
    <section className="py-8 lg:py-10 bg-white">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <h4 className="text-amber-500 font-bold text-xs sm:text-sm uppercase tracking-widest mb-3">
            Publications
          </h4>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#044c3c] mb-6">
            Journals & Research
          </h2>
          
          <div className="flex items-center justify-center gap-2">
            <div className="h-px w-12 bg-slate-200"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-[#044c3c]"></div>
            <div className="h-px w-12 bg-slate-200"></div>
          </div>
        </div>

        {/* Publications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {publications.map((pub, index) => (
            <div 
              key={index} 
              className="bg-white rounded-3xl p-8 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.06)] border border-slate-100 flex flex-col hover:-translate-y-1 transition-transform duration-300 group"
            >
              <div className="bg-amber-50 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-amber-600 group-hover:bg-amber-500 group-hover:text-white transition-colors duration-300">
                <FileText className="w-7 h-7" strokeWidth={1.5} />
              </div>
              
              <h3 className="font-extrabold text-[#044c3c] text-lg leading-tight mb-3">
                {pub.title}
              </h3>
              
              <h4 className="text-amber-600 font-semibold text-xs uppercase tracking-wide mb-4">
                {pub.journal}
              </h4>
              
              <p className="text-slate-500 text-sm leading-relaxed flex-1 mb-8">
                {pub.description}
              </p>
              
              <a 
                href={pub.link}
                className="inline-flex items-center gap-2 text-[#044c3c] font-bold text-sm group-hover:text-amber-500 transition-colors mt-auto"
              >
                <span>Read Full Paper</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-12 flex justify-center">
          <button className="border-2 border-[#044c3c] text-[#044c3c] hover:bg-[#044c3c]/5 transition-colors px-8 py-3.5 rounded-full font-semibold flex items-center gap-2 text-sm sm:text-base">
            <span>View All Publications</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
