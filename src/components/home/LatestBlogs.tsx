import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { blogs } from '../../data/blogs';
import { useLanguage } from '../../hooks/useLanguage';

export function LatestBlogs() {
  const { t } = useLanguage();

  return (
    <section className="py-16 lg:py-24 bg-slate-50/50">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h4 className="text-amber-500 font-bold text-xs sm:text-sm uppercase tracking-widest mb-3 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-amber-500"></span>
              {t.blogs.tag}
            </h4>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#044c3c]">
              {t.blogs.title}
            </h2>
          </div>
          <Link to="/blog" className="hidden md:flex items-center gap-2 text-[#044c3c] font-bold hover:text-amber-500 transition-colors group">
            {t.blogs.viewAll}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {blogs.slice(0, 3).map((blog) => (
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
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}

        </div>

        <div className="mt-10 md:hidden flex justify-center">
          <Link to="/blog" className="bg-white border-2 border-[#044c3c] text-[#044c3c] px-6 py-3 rounded-full font-bold flex items-center gap-2 text-sm">
            {t.blogs.viewAll}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
