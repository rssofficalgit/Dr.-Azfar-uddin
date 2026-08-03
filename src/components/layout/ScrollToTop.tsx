import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If there is a hash in the URL (e.g. #video-gallery), scroll to that element
    if (hash) {
      // Small timeout to ensure the element is rendered before scrolling
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
      return;
    }
    
    // Otherwise, just scroll to the top of the page
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}
