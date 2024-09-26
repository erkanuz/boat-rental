import { Link } from "react-router-dom";
import { data } from "./data";

export const Services = () => {
  return (
    <div id="services" className="mt-40 max-w-[1600px] mx-auto">
      <h2 className="text-center text-title font-semibold">Our Services</h2>

      <div className="my-20 p-4 grid grid-cols-1 md:grid-cols-2 gap-10">
        {data.map((card, index) => (
          <div key={index} className="p-2 rounded-2xl shadow-lg">
            <img
              src={card.image}
              alt={card.caption}
              className="w-full h-auto object-cover rounded-md"
              style={{ width: "100%", height: "288.11px" }}
            />

            <div className="p-4 max-w-xl text-sm_paragraph">
              <h2 className="text-card_title">{card.title}</h2>
              <p className="text-base-description my-4">{card.description}</p>
            </div>

            <div className="flex items-center p-4">
              <Link
                to={card.button_link}
                className="text-base-white text-button bg-base-primary hover:bg-base-primaryDark transition-all duration-700 ease-in-out md:px-9 px-6 md:py-4 py-2 rounded-md"
              >
                {card.button_text}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
