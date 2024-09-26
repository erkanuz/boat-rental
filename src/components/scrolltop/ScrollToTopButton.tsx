import React from "react";
import { GoArrowUp } from "react-icons/go";
import { useScrollVisible } from "../../hooks/useScrollVisible";

export const ScrollToTopButton: React.FC = () => {
  const customHeight = 500;
  const scrollVisible = useScrollVisible(customHeight);

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    };

    return (
      <div className={`fixed bottom-24 right-6 mb-2 z-10 transition-all duration-700 ease-in-out ${scrollVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'}`}>
        <button 
          aria-label="Scroll to top"
          onClick={scrollToTop}
          className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-1000 ease-in-out text-base-white bg-base-primaryDark hover:bg-base-primary border">
          <GoArrowUp size={22} />
        </button>
      </div>
    )
  }