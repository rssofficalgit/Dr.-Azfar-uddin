import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Share2, Facebook, Twitter, Linkedin, Link2, Check } from 'lucide-react';
import { blogs } from '../data/blogs';
import { useEffect, useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';

export function BlogPostDetails() {
  const { language } = useLanguage();
  const [copied, setCopied] = useState(false);
  const { id } = useParams<{ id: string }>();
  const currentIndex = blogs.findIndex(b => b.id === id);
  const blog = blogs[currentIndex];
  const prevBlog = currentIndex > 0 ? blogs[currentIndex - 1] : null;
  const nextBlog = currentIndex < blogs.length - 1 ? blogs[currentIndex + 1] : null;

  // Scroll to top when loading a new blog post
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!blog) {
    return <Navigate to="/blog" replace />;
  }

  const shareOnFacebook = () => {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank', 'noopener,noreferrer');
  };

  const shareOnTwitter = () => {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(blog.title);
    window.open(`https://twitter.com/intent/tweet?url=${url}&text=${title}`, '_blank', 'noopener,noreferrer');
  };

  const shareOnLinkedin = () => {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank', 'noopener,noreferrer');
  };

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full bg-slate-50 min-h-screen pb-24">
      {/* Blog Hero Section */}
      <section className="w-full bg-[#044c3c] pt-28 lg:pt-36 pb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4 pointer-events-none"></div>
        
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl relative z-10">
          <Link to="/blog" className="inline-flex items-center gap-2 text-emerald-400 hover:text-amber-400 font-medium transition-colors mb-8 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            {language === 'bn' ? "সকল ব্লগে ফিরে যান" : "Back to all blogs"}
          </Link>
          
          <div className="flex items-center gap-3 mb-6 flex-wrap">
            <span className="bg-amber-400 text-[#044c3c] text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
              {blog.category}
            </span>
            <div className="flex items-center gap-4 text-emerald-100/80 text-sm font-medium">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                {blog.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {blog.readTime}
              </span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
            {blog.title}
          </h1>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="container mx-auto px-4 lg:px-8 max-w-4xl -mt-12 relative z-20">
        
        {/* Featured Image or Gradient Banner */}
        {blog.image ? (
          <div className="w-full rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/50 mb-12 bg-slate-100/50 flex justify-center p-2 sm:p-4">
            <img src={blog.image} alt={blog.title} className="max-w-full h-auto max-h-[600px] object-contain rounded-2xl" />
          </div>
        ) : (
          <div className={`w-full h-[300px] sm:h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/50 mb-12 flex items-center justify-center relative bg-gradient-to-br from-${blog.gradientFrom} to-${blog.gradientTo}`}>
            <svg className="w-32 h-32 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d={blog.iconPath} />
            </svg>
          </div>
        )}

        {/* Article Body */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100">
          
          <div className="prose prose-lg prose-slate max-w-none font-sans leading-relaxed text-slate-600">
            {/* If content exists, render it. Otherwise, render the excerpt as a placeholder. */}
            {blog.content ? (
              blog.content.split('\n\n').map((paragraph, idx) => (
                <p key={idx} className="mb-6">{paragraph}</p>
              ))
            ) : (
              <p className="text-xl leading-relaxed font-medium text-slate-700">{blog.excerpt}</p>
            )}
          </div>

          {/* Share Section */}
          <div className="mt-12 pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-6">
            <h4 className="text-slate-900 font-bold flex items-center gap-2">
              <Share2 className="w-5 h-5 text-[#044c3c]" />
              Share this article
            </h4>
            <div className="flex items-center gap-3 flex-wrap">
              <button 
                onClick={copyLink}
                className={`h-10 px-4 rounded-full flex items-center justify-center gap-2 text-xs font-bold transition-all duration-300 ${copied ? 'bg-emerald-500 text-white shadow-[0_4px_12px_rgba(16,185,129,0.2)]' : 'bg-slate-50 text-slate-500 hover:bg-[#044c3c] hover:text-white border border-slate-100'}`}
                aria-label="Copy article link"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 animate-in zoom-in duration-300" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Link2 className="w-4 h-4" />
                    <span>Copy Link</span>
                  </>
                )}
              </button>
              
              <div className="h-6 w-px bg-slate-200 mx-1 hidden xs:block"></div>

              <button 
                onClick={shareOnFacebook} 
                className="w-10 h-10 rounded-full bg-slate-50 hover:bg-[#1877F2] hover:text-white text-slate-400 flex items-center justify-center transition-colors border border-slate-100"
                aria-label="Share on Facebook"
              >
                <Facebook className="w-4 h-4" />
              </button>
              <button 
                onClick={shareOnTwitter} 
                className="w-10 h-10 rounded-full bg-slate-50 hover:bg-[#1DA1F2] hover:text-white text-slate-400 flex items-center justify-center transition-colors border border-slate-100"
                aria-label="Share on Twitter"
              >
                <Twitter className="w-4 h-4" />
              </button>
              <button 
                onClick={shareOnLinkedin} 
                className="w-10 h-10 rounded-full bg-slate-50 hover:bg-[#0A66C2] hover:text-white text-slate-400 flex items-center justify-center transition-colors border border-slate-100"
                aria-label="Share on LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Article Navigation */}
          <div className="mt-12 pt-8 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {prevBlog ? (
              <Link 
                to={`/blog/${prevBlog.id}`} 
                className="flex items-center gap-4 p-5 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-emerald-50/30 hover:border-emerald-200/50 hover:-translate-y-0.5 hover:shadow-md hover:shadow-emerald-900/5 transition-all duration-300 group text-left"
              >
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-slate-100 group-hover:bg-[#044c3c] group-hover:text-white transition-colors flex-shrink-0">
                  <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-slate-400 text-[10px] font-extrabold uppercase tracking-widest leading-none mb-1">
                    Previous Post
                  </span>
                  <span className="text-[#044c3c] font-bold text-sm line-clamp-1">
                    {prevBlog.title}
                  </span>
                </div>
              </Link>
            ) : (
              <div className="hidden sm:block"></div>
            )}
            
            {nextBlog ? (
              <Link 
                to={`/blog/${nextBlog.id}`} 
                className="flex items-center justify-between gap-4 p-5 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-emerald-50/30 hover:border-emerald-200/50 hover:-translate-y-0.5 hover:shadow-md hover:shadow-emerald-900/5 transition-all duration-300 group text-right"
              >
                <div className="flex flex-col min-w-0 flex-1">
                  <span className="text-slate-400 text-[10px] font-extrabold uppercase tracking-widest leading-none mb-1">
                    Next Post
                  </span>
                  <span className="text-[#044c3c] font-bold text-sm line-clamp-1">
                    {nextBlog.title}
                  </span>
                </div>
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-slate-100 group-hover:bg-[#044c3c] group-hover:text-white transition-colors flex-shrink-0">
                  <ArrowLeft className="w-4 h-4 rotate-180 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Link>
            ) : (
              <div className="hidden sm:block"></div>
            )}
          </div>

        </div>

      </section>

    </div>
  );
}
