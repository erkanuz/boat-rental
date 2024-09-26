import React, { useEffect, useRef, useState } from "react";
import { sliderImages } from "../../data/data";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export const Slider: React.FC = () => {

  const [current, setCurrent] = useState(0);
  const thumbnailRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    setCurrent((prevIndex) =>
      prevIndex === sliderImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrent((prevIndex) =>
      prevIndex === 0 ? sliderImages.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    if (thumbnailRef.current) {
      const thumbnailWidth = thumbnailRef.current.scrollWidth / sliderImages.length;
      const scrollLeft = current * thumbnailWidth - thumbnailRef.current.offsetWidth / 2 + thumbnailWidth / 2;
      thumbnailRef.current.scrollTo({ left: scrollLeft, behavior: "smooth" });
    }
  }, [current]);

  return (
    <div className="h-full text-base-white col-span-2">
      <div className="relative w-full md:h-[463px] h-64">
        {sliderImages.map((image, i) => (
          <img
            key={i}
            src={image.img}
            className={`absolute w-full h-full transition-opacity duration-500 ${i === current ? "opacity-100" : "opacity-0"
              }`}
          />
        ))}
        <button
          onClick={prevSlide}
          className="absolute block p-3 m-0 top-0 bottom-0 hover:bg-base-swiperHover"
          style={{ left: 0 }}
        >
          <FaChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute block p-3 m-0 top-0 bottom-0 hover:bg-base-swiperHover"
          style={{ right: 0 }}
        >
          <FaChevronRight size={24} />
        </button>
      </div>

      <div className="relative flex items-center">
        <div
          className="w-full space-x-1 overflow-x-auto whitespace-nowrap scroll-smooth"
          ref={thumbnailRef}
        >
          {sliderImages.map((slide, i) => (
            <img
              key={i}
              src={slide.img}
              className={`md:w-[300px] w-[190px] md:h-[200px] h-[140px] inline-block mt-6 cursor-pointer ${i === current ? "" : "opacity-35"
                }`}
              onClick={() => setCurrent(i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
