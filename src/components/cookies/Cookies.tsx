import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const Cookies = () => {
  const [bannerVisible, setBannerVisible] = useState(true);

  useEffect(() => {
    const cookieAccepted = localStorage.getItem("cookieAccepted");
    if (cookieAccepted === "true") {
      setBannerVisible(false);
    }
  }, []);

  const handleCookieAccepted = () => {
    localStorage.setItem("cookieAccepted", "true");
    setBannerVisible(false);
  };

  const handleCookieDecline = () => {
    setBannerVisible(false);
  };

  const cookie = (
    <div className="fixed bottom-0 left-5 mb-2 right-5 z-50 bg-base-primaryDark p-4 shadow-2xl">
      <div className="mx-auto grid gap-4 md:flex items-center justify-between">
        <div className="grid md:flex items-center">
          <img
            className="h-10 w-auto pl-6 pr-10 md:block hidden"
            src="/cookie.svg"
            alt="Logo"
          />
          <p className="max-w-[1300px] text-base-white text-sm_cookie_description md:text-cookie_description">
            <span className="font-bold">
              We use cookies in the delivery of our services.
            </span>
            To learn about the cookies we use and information about your
            preferences and opt-out choices, please click here. By using our
            platform you agree to use of cookies. For more information, please
            read our <a href="/Cookies" className="text-blue-600 font-semibold underline">Cookies Policy</a>
            <Link to={"Cookies"}/>
          </p>
        </div>
        <div className="flex justify-between space-x-6 font-bold">
          <button
            onClick={handleCookieDecline}
            className="bg-transparent text-base-white py-3 px-12 rounded-md outline outline-1 outline-white hover:bg-base-warning transition duration-1000"
          >
            Decline
          </button>
          <button
            onClick={handleCookieAccepted}
            className="bg-base-white text-base-black py-3 px-12 rounded-md"
          >
            Allow
          </button>
        </div>
      </div>
    </div>
  );

  return bannerVisible && cookie;
};
