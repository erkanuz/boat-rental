import React, { useState } from "react";

import { SocialIcons } from "./props";
import MobileMenu from "./MobileMenu";

import { NavLink } from "./props";
import { Link } from "react-router-dom";
import { useNavbarVisibility } from "../../hooks/useNavbarVisibility";
import { useScrollToSection } from "../../hooks/useScrollToSection";

interface NavbarProps {
  navLinks: NavLink[];
}

export const Navbar: React.FC<NavbarProps> = ({ navLinks }) => {

  const hidden = useNavbarVisibility();
  const [isVisible, setIsVisible] = useState<boolean>(true);
  useScrollToSection(); // Using the custom hook to handle scrolling to sections

  const handleLinkClick = () => {
    setIsVisible(true);
  };

  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <>
      <header className={`bg-base-white sticky top-0 z-30 transition-transform duration-500 ${hidden ? '-translate-y-full' : 'translate-y-0'}`}>
        <nav className="max-w-[1600px] mx-auto flex items-center justify-between h-28 px-4 sm:px-6 lg:px-0">

          {/* LOGO */}
          <div className="flex items-center space-x-2">
            <img className="h-10 w-auto" src="/logo.svg" alt="Logo" />
            <Link to="/" className="text-sm_header">
              Boatly
            </Link>
          </div>

          {/* LINKS */}
          <div className="hidden md:block">
            <ul className="flex items-center space-x-7 text-sm_paragraph">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <Link
                      to={link.links}
                      className="relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-base-black after:left-0 after:-bottom-2 after:transition-all after:duration-500 after:ease-in-out hover:after:w-full">{link.title}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>

          {/* SOCIALS */}
          <div className="hidden md:flex">
            {SocialIcons.map((icon, id) => (
              <Link
                to={icon.link}
                key={id}
                className={`flex items-center border p-2 mx-3 w-10 h-10 transform transition-all duration-700 rounded-full ${
                  hovered === id ? 'bg-base-social' : 'bg-base-white'
                }`}
                onMouseEnter={() => setHovered(id)}
                onMouseLeave={() => setHovered(null)}
              >
                <img src={icon.icon} alt="icon" />
              </Link>
            ))}
          </div>

          {/* MOBILE */}
            <div
              onClick={() => setIsVisible(!isVisible)}
              className=" w-10 h-10 bg-base-black border border-white rounded-full md:hidden flex items-center justify-center cursor-pointer"
              >
              <div className={`burger ${!isVisible ? 'burgerActive' : ''}`}></div>
            </div>
        </nav>
      </header>
      <MobileMenu visible={isVisible} handleLinkClick={handleLinkClick} />
    </>
  );
};