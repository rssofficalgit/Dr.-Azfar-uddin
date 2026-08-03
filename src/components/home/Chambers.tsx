import { MapPin, Phone, Clock } from 'lucide-react';

export function Chambers() {
  const chambers = [
    {
      title: "AZFAR UROLOGY, ANDROLOGY, MICROSURGERY & MALE INFERTILITY CENTER",
      address: "Room No: 456, Anwer Khan Modern Medical College, Road: 8, House: 17, Dhanmondi, Dhaka.",
      mapQuery: "Anwer Khan Modern Medical College, Dhaka",
      visitingHours: {
        days: "Saturday to Thursday",
        time: "9:00 AM - 2:00 PM",
        note: "(Friday Closed)"
      },
      phones: ["01754995671", "01892760031", "01731457460"]
    },
    {
      title: "AZFAR UROLOGY, ANDROLOGY, MICROSURGERY & MALE INFERTILITY CENTER",
      address: "Room No: 201, Central Hospital Ltd.",
      mapQuery: "Central Hospital Ltd, Green Road, Dhaka",
      visitingHours: {
        days: "Saturday to Thursday",
        time: "7:00 PM - 9:00 PM",
        note: "(Friday Closed)"
      },
      phones: ["01766316179", "01611885497", "01731457460"]
    },
    {
      title: "AZFAR UROLOGY, ANDROLOGY, MICROSURGERY & MALE INFERTILITY CENTER (OFFICE)",
      subtitle: "The only complete male infertility treatment center in Bangladesh",
      address: "House: 17/1, Road: 5, Dhanmondi, Dhaka-1205",
      mapQuery: "Road No. 5, Dhanmondi, Dhaka",
      phones: ["01758075656", "01731457460"]
    }
  ];

  return (
    <section className="py-12 lg:py-20 relative bg-slate-50/50 overflow-hidden">
      {/* Decorative Background Blobs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-3xl translate-y-1/2 translate-x-1/3"></div>

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h4 className="text-amber-500 font-bold text-xs sm:text-sm uppercase tracking-widest mb-3">
            Our Locations
          </h4>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#044c3c] mb-6">
            Visit Our Chambers
          </h2>
          
          <div className="flex items-center justify-center gap-2">
            <div className="h-px w-12 bg-slate-200"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-[#044c3c]"></div>
            <div className="h-px w-12 bg-slate-200"></div>
          </div>
        </div>

        {/* Chambers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 items-stretch">
          {chambers.map((chamber, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-[2rem] p-6 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.06)] border border-slate-100 flex flex-col h-full transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(4,76,60,0.15)] hover:border-emerald-100 relative overflow-hidden"
            >
              {/* Subtle accent line on top */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#044c3c] to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20"></div>

              {/* Google Maps Embed */}
              <div className="w-full h-48 rounded-xl overflow-hidden mb-6 relative group-hover:shadow-md transition-shadow duration-300">
                <iframe 
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(chamber.mapQuery)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                  width="100%" 
                  height="100%" 
                  style={{border:0}} 
                  allowFullScreen 
                  loading="lazy"
                  className="absolute inset-0 grayscale-[0.3] group-hover:grayscale-0 transition-all duration-500"
                ></iframe>
              </div>

              {/* Title Area */}
              <div className="px-2 mb-6 pb-6 border-b border-slate-100">
                <h3 className="font-extrabold text-[#044c3c] text-sm sm:text-base leading-snug tracking-wide">
                  {chamber.title}
                </h3>
                {chamber.subtitle && (
                  <p className="text-amber-600 font-semibold text-xs mt-3 bg-amber-50 inline-block px-3 py-1 rounded-full">
                    {chamber.subtitle}
                  </p>
                )}
              </div>

              {/* Content Area */}
              <div className="px-2 flex flex-col gap-6 flex-1">
                
                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="bg-emerald-50 w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#044c3c] group-hover:text-white transition-colors duration-300">
                    <MapPin className="w-6 h-6 text-[#044c3c] group-hover:text-white transition-colors" strokeWidth={2} />
                  </div>
                  <div className="pt-1">
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {chamber.address}
                    </p>
                  </div>
                </div>

                {/* Visiting Hours */}
                {chamber.visitingHours && (
                  <div className="flex items-start gap-4">
                    <div className="bg-amber-50 w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-amber-500 group-hover:text-white transition-colors duration-300">
                      <Clock className="w-6 h-6 text-amber-500 group-hover:text-white transition-colors" strokeWidth={2} />
                    </div>
                    <div className="pt-1">
                      <div className="text-slate-800 text-sm font-bold">{chamber.visitingHours.days}</div>
                      <div className="font-bold text-[#044c3c] text-sm">{chamber.visitingHours.time}</div>
                      <div className="text-rose-500 font-medium text-xs mt-0.5">{chamber.visitingHours.note}</div>
                    </div>
                  </div>
                )}
              </div>

              {/* Footer Area: Phones (Elegant & Clean) */}
              <div className="px-2 mt-auto pt-6 flex flex-col gap-4 border-t border-slate-50">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-500 transition-colors duration-300">
                    <Phone className="w-5 h-5 text-amber-500 group-hover:text-white transition-colors duration-300" strokeWidth={2} />
                  </div>
                  <div className="flex flex-col pt-0.5">
                    <div className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest mb-1">
                      Appointment Booking
                    </div>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                      {chamber.phones.map((phone, i) => (
                        <div key={i} className="flex items-center">
                          <a 
                            href={`tel:${phone.replace(/\s+/g, '')}`}
                            className="font-black text-[#044c3c] text-[15px] hover:text-amber-500 transition-colors tracking-tight"
                          >
                            {phone}
                          </a>
                          {i < chamber.phones.length - 1 && (
                            <span className="text-slate-200 mx-3 font-light">|</span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
