import { useState, useEffect } from 'react';

/** Handle navbar visibility based on scroll position*/
export const useNavbarVisibility = (): boolean => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      // Hide navbar if scrolling down and past a certain point
      setHidden(prevScrollPos < currentScrollPos && currentScrollPos > 150);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return hidden;
};