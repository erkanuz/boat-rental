import { useState, useEffect } from 'react';

/** Scroll visibility based on custom height */
export const useScrollVisible = (customHeight: number): boolean => {
  const [scrollVisible, setScrollVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollVisible(window.scrollY > customHeight);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [customHeight]);

  return scrollVisible;
};