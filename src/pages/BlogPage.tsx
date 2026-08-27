import { useState } from 'react';
import { Link } from 'react-router-dom';
import { blogs } from '../data/blogs';
import { useLanguage } from '../hooks/useLanguage';

function VideoCard({ videoId, index }: { videoId: string; index: number; key?: number | string }) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="group flex flex-col gap-4">
      <div 
        className="w-full aspect-video rounded-2xl overflow-hidden shadow-sm border border-slate-100 bg-slate-900 relative group-hover:shadow-[0_20px_40px_-15px_rgba(4,76,60,0.2)] transition-all duration-500 group-hover:-translate-y-1 cursor-pointer"
        onClick={() => setIsLoaded(true)}
      >
        {!isLoaded ? (
          <>
            <img 
              src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`} 
              alt={`Medical Insight Video ${index + 1}`} 
              className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
              loading="lazy"
            />
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-transparent transition-colors duration-500">
              <div className="w-16 h-16 bg-rose-600/90 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-rose-600 transition-all duration-300 shadow-lg">
                <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </>
        ) : (
          <iframe 
            className="absolute inset-0 w-full h-full animate-in fade-in duration-700"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} 
            title={`Medical Video ${index + 1}`}
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

export function BlogPage() {
  const { t } = useLanguage();

  return (
    <div className="w-full bg-slate-50/50 min-h-screen">
      
      {/* Blog Page Hero */}
      <section className="relative bg-[#044c3c] overflow-hidden pt-16 lg:pt-24 pb-16 lg:pb-24">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4"></div>

        <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10 text-center">
          <h4 className="text-amber-400 font-extrabold text-xs sm:text-sm uppercase tracking-widest mb-4">
            {t.blogs.tag}
          </h4>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            {t.blogs.title}
          </h1>
          <p className="text-emerald-100/90 text-base lg:text-lg leading-relaxed max-w-2xl mx-auto">
            {t.blogs.subtitle}
          </p>
        </div>
      </section>

      {/* Main Content: Blog & Social Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {blogs.map((blog) => (
              <article key={blog.id} className="bg-white rounded-[2rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 group hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(4,76,60,0.15)] transition-all duration-500 flex flex-col">
                <div className={`h-56 w-full ${blog.image ? 'bg-slate-100' : `bg-gradient-to-br from-${blog.gradientFrom} to-${blog.gradientTo}`} relative overflow-hidden flex items-center justify-center`}>
                  {blog.image ? (
                    <img src={blog.image} alt={blog.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  ) : (
                    <svg className="w-16 h-16 text-white/50 group-hover:scale-110 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={blog.iconPath} />
                    </svg>
                  )}
                  <div className={`absolute top-4 left-4 ${blog.image ? 'bg-white/90 text-[#044c3c]' : `bg-white/90 text-${blog.gradientTo === '[#044c3c]' ? '[#044c3c]' : blog.gradientTo.split('-')[0] + '-600'}`} text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-sm shadow-sm`}>
                    {blog.category}
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center text-slate-400 text-sm font-medium mb-3 gap-4">
                    <span>{blog.date}</span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> 
                      {blog.readTime}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[#044c3c] mb-3 group-hover:text-amber-500 transition-colors leading-snug">
                    {blog.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-6 flex-1 text-sm">
                    {blog.excerpt}
                  </p>
                  <Link to={`/blog/${blog.id}`} className="inline-flex items-center gap-2 text-[#044c3c] font-bold hover:text-amber-500 transition-colors mt-auto text-sm">
                    {t.blogs.readMore}
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Video Gallery Section */}
      <section id="video-gallery" className="py-16 lg:py-24 bg-white relative">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h4 className="text-rose-500 font-bold text-xs sm:text-sm uppercase tracking-widest mb-3 flex items-center justify-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
              Video Gallery
            </h4>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#044c3c] mb-6">
              Watch & Learn
            </h2>
            <div className="flex items-center justify-center gap-2">
              <div className="h-px w-12 bg-slate-200"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-[#044c3c]"></div>
              <div className="h-px w-12 bg-slate-200"></div>
            </div>
            <p className="mt-6 text-slate-500">
              Explore our comprehensive library of medical insights, patient success stories, and expert discussions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {[
              "YK7WE-yvfcw", "_Pcr1bU3t2s", "Ac_IP5JUb7A", "bhUJlqE3aqU", "XIW6iTjPiXI",
              "wusFrrj-mmc", "xo43Pd2j1W4", "g6UABhiTW2E", "OBYDcWDkTIw", "2-FjGDSKhBA",
              "6J7tgaG-xrE", "iHfTe3KaoPA", "uXktRI9OGxs", "FLHxkjjcHBI", "ryrUrVioo70",
              "r7l2C7tegNc", "PHiY2aNQHR4", "ebs8ZD9yGs8", "qGLDONDhwxY", "VgGObhVLJ0Y",
              "OFilHSKfO9E", "xYGzzUVF3vc"
            ].map((videoId, index) => (
              <VideoCard key={index} videoId={videoId} index={index} />
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
