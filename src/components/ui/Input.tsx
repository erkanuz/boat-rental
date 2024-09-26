import React, { useState, useEffect, useRef } from 'react';

import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { IoTimeOutline } from "react-icons/io5";

interface CustomSelectProps {
  options: string[]
  onChange: (value: string | undefined) => void;
}

export const CustomSelect: React.FC<CustomSelectProps> = ({ options, onChange }) => {

  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
    onChange(option)
  };

  return (
    <div className='relative' ref={dropdownRef}>
      <div
        className="bg-base-white rounded-md py-2 px-3 text-base-black cursor-pointer w-full flex items-center justify-between"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className='flex items-center space-x-2 '>
          {/* <IoTimeOutline size={24} /> */}
          <img 
          src="/icons/clock.svg" 
          alt="clock"
          className='w-5 h-5 object-cover' />
          <span className='pt-[2px]'>{selectedOption || 'Choose a time'}</span>
        </div>
        <img 
        src="/icons/drop.svg"
        alt="drop"
        className='-mr-0.5 h-5 w-5 object-cover' />
        {/* <MdOutlineKeyboardArrowDown size={24} /> */}
        {/* className={`transition-transform duration-300 transform ${isOpen ? 'rotate-180' : 'rotate-0'}`} */}
      </div>
      {isOpen && (
        <div className="absolute mt-1 w-full bg-base-white border border-gray-300 rounded-md shadow-lg z-10">
          {options.map((option, index) => (
            <div key={option}>
              <div
                className="py-2 px-4 cursor-pointer hover:bg-base-selectHover"
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </div>
              {index !== options.length - 1 && <hr className="border-gray-200" />}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

interface SelectProps {
  options: string[]
  onChange: (value: string | undefined) => void;
  value?: string | undefined;
}

export const CheckoutSelect: React.FC<SelectProps> = ({ options, onChange }) => {

  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
    onChange(option)
  };

  return (
    <div className='relative' ref={dropdownRef}>
      <div
        className="bg-base-white rounded-md px-3 py-4 text-base-black cursor-pointer w-full flex items-center justify-between"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className='flex items-center space-x-2 '>
          <IoTimeOutline size={24} />
          <span className='pt-[2px]'>{selectedOption || 'Choose a time'}</span>
        </div>
        <MdOutlineKeyboardArrowDown size={24} />
        {/* className={`transition-transform duration-300 transform ${isOpen ? 'rotate-180' : 'rotate-0'}`} */}
      </div>
      {isOpen && (
        <div className="absolute mt-1 w-full bg-base-white border border-gray-300 rounded-md shadow-lg z-10">
          {options.map((option, index) => (
            <div key={option}>
              <div
                className="py-2 px-4 cursor-pointer hover:bg-base-selectHover"
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </div>
              {index !== options.length - 1 && <hr className="border-gray-200" />}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export const SelectCountry: React.FC<SelectProps> = ({ options, onChange }) => {

  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [filter, setFilter] = useState('')
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleOptionClick = (option: string) => {
    setSelectedCountry(option);
    setIsOpen(false);
    onChange(option)
  };

  const filteredCountries = options.filter(option =>
    option.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className='relative' ref={dropdownRef}>
      <div
        className="bg-base-white rounded-md px-3 py-4 text-black cursor-pointer w-full flex items-center justify-between"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className='flex items-center space-x-2 '>
          <span className='pt-[2px]'>{selectedCountry || 'Choose a country'}</span>
        </div>
        <MdOutlineKeyboardArrowDown size={24} />
      </div>
      {isOpen && (
        <div className="absolute mt-1 w-full bg-base-white border border-gray-300 rounded-md shadow-lg z-10 max-h-80 overflow-y-scroll">
            <input
            type="text"
            placeholder="Type your country"
            className="py-2 px-4 border-b w-full sticky -top-1 text-base-white border-gray-300 focus:outline-none bg-base-social"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
          {filteredCountries .map((option, index) => (
            <div key={option}>
              <div
                className="py-2 px-4 cursor-pointer hover:bg-base-selectHover"
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </div>
              {index !== filteredCountries.length - 1 && <hr className="border-gray-300" />}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};