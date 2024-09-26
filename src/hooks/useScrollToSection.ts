import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/** Custom hook for scrolling to a section based on the URL hash. */
export const useScrollToSection = () => {
  const location = useLocation();

  useEffect(() => {
    const handleScrollToSection = () => {
      const hash = location.hash;
      if (hash) {
        const section = document.querySelector(hash);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    handleScrollToSection(); // Scroll to section on initial render

    return () => {
      window.removeEventListener('scroll', handleScrollToSection);
    };
  }, [location]);
};