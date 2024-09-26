import React from "react";
import { SocialIcons, NavLinks } from "./props";

interface Props {
  visible: boolean;
  handleLinkClick: () => void;
}

const ResponsiveMenu: React.FC<Props> = ({ visible, handleLinkClick }) => {
  return (
    <div
      className={`${
        visible ? "-right-[100%]" : "right-0"
      } h-screen w-full bg-base-black text-base-white fixed top-0 z-20 transition-all duration-500 p-24 pb-6 px-8`}
    >
      <div className="grid grid-cols-1 h-full place-items-center">
        <div className="list-none text-center mt-10 space-y-10">
          {NavLinks.map((item) => (
            <ul key={item.id}>
              <li>
                <a href={item.links}
                onClick={handleLinkClick}
                className="text-sm_paragraph">{item.title}</a>
              </li>
            </ul>
          ))}
        </div>
        <div className="md:hidden flex justify-center space-x-10">
          {SocialIcons.map((icon) => (
            <a
              href={icon.link}
              key={icon.id}
              className='inline-block bg-base-white rounded-full p-1.5'
              aria-label="social_icon"
            >
              <img src={icon.icon} alt="" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResponsiveMenu;
