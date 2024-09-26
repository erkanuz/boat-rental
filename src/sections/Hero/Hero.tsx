export const Hero = () => {
  return (
    <div id="hero">
      <div className="">
        <div className="relative w-full mx-auto h-[470px] overflow-hidden">
          <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/boat.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

          <div className="absolute inset-0 flex justify-center items-center">
            <div className="max-w-[1600px] px-6 w-full flex flex-col justify-start">
              <span className="text-paragraph text-base-primary pb-2">Welcome</span>
              <h1 className="sm:text-header text-sm_header">
                Rent the boat.
                <br />
                Own the moment.
              </h1>

              <div className="flex items-center gap-2 mt-4">
                <a
                  href="/#services"
                  className="px-10 py-3 bg-base-primary hover:bg-base-primaryDark transition-all duration-700 ease-in-out font-semibold text-base-white text-button rounded-md cursor-pointer"
                >
                  Rent a Boat
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
