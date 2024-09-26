export const Footer = () => {
  return (
    <section id="footer" className="bg-base-footerBg text-base-white w-full">
      <div className="max-w-[1600px] sm:mx-auto mx-2 px-0 sm:px-6 lg:px-8 pt-16">
        <div className="flex flex-col sm:flex-row items-start justify-between gap-10 mx-2 md:my-10 my-0">
          <div className="grid gap-4">
            <div className="flex items-center space-x-2">
              <img className="h-10 w-auto" src="/logo.svg" alt="Logo" />
              <h3 className="font-bold">LOGO</h3>
            </div>
            <div className="max-w-[350px]">
              <p className="text-sm_paragraph">
                High level experience in web design and development knowledge,
                producing quality work.
              </p>
            </div>
          </div>

          <div className="sm:hidden block"></div>

          <div className="footer_col">
            <h2 className="font-semibold text-footer_title">Office Hours</h2>
            <ul className="text-sm_paragraph space-y-2.5 mt-7">
              <li>Monday - Friday 8.00 am - 5.00 pm</li>
              <li>Saturday 9.00 am - 1.00 pm</li>
              <li>Sunday Closed</li>
            </ul>
          </div>

          <div className="footer_col">
            <h2 className="font-semibold text-footer_title">Call us</h2>
            <ul className="text-sm_paragraph space-y-2.5 mt-7">
              <li>+359 123 123 123</li>
            </ul>
          </div>

          <div className="footer_col">
            <h2 className="font-semibold text-footer_title">Follow us</h2>
            <ul className="flex items-center space-x-4 mt-7">
              <li>
                <a
                  className="flex items-center justify-center bg-base-white hover:bg-base-social border p-1 transform transition-all duration-700 rounded-full"
                  href="https://www.facebook.com/"
                >
                  <img 
                    src="/icons/facebook.svg" 
                    alt="facebook" 
                    className="w-6 h-6" />
                </a>
              </li>
              <li>
                <a
                  className="flex items-center justify-center bg-base-white hover:bg-base-social border p-1 transform transition-all duration-700 rounded-full"
                  href="https://www.instagram.com/?hl=en"
                >
                  <img
                    src="/icons/instagram.svg"
                    alt="instagram"
                    className="w-6 h-6"
                  />
                </a>
              </li>
              <li>
                <a
                  className="flex items-center justify-center bg-base-white hover:bg-base-social border p-1 transform transition-all duration-700 rounded-full"
                  href="https://www.tiktok.com/"
                >
                  <img 
                    src="/icons/tiktok.svg"
                    alt="tiktok" 
                    className="w-6 h-6" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="grid place-items-center p-7 sm:mt-32 mt-0 gap-5">
        <span className="w-full h-0.5 bg-base-white"></span>

        <div className="flex items-center justify-between w-full md:text-[16px] text-[12px]">
          <p>&#169; {new Date().getFullYear()} All Rights Reserved</p>

          <div className="flex items-center space-x-5">
            <a href="">Privacy Policy</a>
            <a href="">Term of Use</a>
          </div>
        </div>
      </div>
    </section>
  );
};
