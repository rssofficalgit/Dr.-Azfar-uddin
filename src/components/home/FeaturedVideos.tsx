import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Youtube } from 'lucide-react';

function HomeVideoCard({ videoId }: { videoId: string }) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="group">
      <div 
        className="w-full aspect-video rounded-[2rem] overflow-hidden shadow-lg border border-slate-100 bg-slate-900 relative group-hover:shadow-[0_24px_50px_-12px_rgba(225,29,72,0.25)] transition-all duration-500 group-hover:-translate-y-2 cursor-pointer"
        onClick={() => setIsLoaded(true)}
      >
        {!isLoaded ? (
          <>
            <img 
              src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`} 
              alt="Featured Medical Insight" 
              className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
              loading="lazy"
            />
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/10 transition-colors duration-500">
              <div className="w-20 h-20 bg-rose-600/95 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-rose-500 transition-all duration-300 shadow-2xl border-4 border-white/20">
                <svg className="w-10 h-10 text-white ml-1.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </>
        ) : (
          <iframe 
            className="absolute inset-0 w-full h-full animate-in fade-in duration-700"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen
          ></iframe>
        )}
      </div>
    </div>
  );
}

export function FeaturedVideos() {
  return (
    <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
      
      {/* Subtle Background Accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-rose-50/50 rounded-l-[100px] -z-10 hidden lg:block"></div>

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h4 className="text-rose-500 font-bold text-xs sm:text-sm uppercase tracking-widest mb-3 flex items-center gap-2">
              <Youtube className="w-5 h-5" />
              Featured Videos
            </h4>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#044c3c]">
              Watch & Learn
            </h2>
          </div>
          <Link 
            to="/blog#video-gallery" 
            className="hidden md:flex items-center gap-2 text-rose-500 font-bold hover:text-rose-600 transition-colors group"
          >
            Watch All Videos
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          
          <HomeVideoCard videoId="YK7WE-yvfcw" />
          <HomeVideoCard videoId="_Pcr1bU3t2s" />

        </div>

        <div className="mt-10 md:hidden flex justify-center">
          <Link 
            to="/blog#video-gallery" 
            className="bg-white border-2 border-rose-500 text-rose-500 px-6 py-3 rounded-full font-bold flex items-center gap-2 text-sm hover:bg-rose-50 transition-colors"
          >
            Watch All Videos
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
