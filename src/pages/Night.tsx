import React from "react";

import { Amenities } from "../data/data";
import { CountUp, FormNight, Frequently, Slider } from "../components";
import useScrollToTop from "../hooks/useScrollToTop";

const Night: React.FC = () => {
  useScrollToTop();
  return (
    <div className="mx-auto min-h-screen">
    <div className="flex items-center justify-center w-full">
      <div className="w-[1600px] px-4">
        {/*IMAGE*/}
        <div className="w-full h-[327px] relative">
          <img
            className="w-full h-full object-cover rounded-lg"
            src="https://images.pexels.com/photos/2407070/pexels-photo-2407070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <h2 className="text-[40px] text-base-white font-bold absolute bottom-0 px-4 md:px-[60px] 2xl:px-[143px]">
            Night Trips
          </h2>
        </div>

        {/*TEXT*/}
        <div className="flex items-center justify-around py-8 md:text-[18px] text-[13px]">
          <div>
            <p className="uppercase font-bold">boat style</p>
            <span>Party Boat</span>
          </div>

          <div>
            <p className="uppercase font-bold">capacity</p>
            <CountUp start={0} end={30} duration={2000} /> Guests
          </div>

          <div>
            <p className="uppercase font-bold">length</p>
            <CountUp start={0} end={76} duration={2000} /> ft
          </div>

          <div>
            <p className="uppercase font-bold">min. hours</p>
            <CountUp start={0} end={2} duration={1000} /> hours
          </div>
        </div>

        {/*SLIDER & FORM*/}
        <main className="flex justify-center">
            <div
                className="w-full 
                grid 
                xl:grid-cols-3 grid-cols-1
                place-items-center
                xl:place-items-end
                max-w-[1800px]
                gap-6"
            >
                <Slider />
                <div className="flex items-start justify-center h-full col-span-1">
                    {/*RESERVATION*/}
                    <div className="shadow-xl p-10 rounded-md text-sm_paragraph h-full">
                        <div className="mb-[56px]">
                            <h5 className="text-base-primaryDark text-title">
                                Make a reservation
                            </h5>
                            <p className="text-[#696969]">
                                We hire our boats every day of the week.
                            </p>
                        </div>
                        <FormNight />
                    </div>
                </div>
            </div>
        </main>

        {/*DESCRIPTION*/}
        <div className="my-24">
          <h3 className="font-semibold text-md_title mb-8">Description</h3>
          <p className="text-sm_paragraph md:text-md_paragraph">
            Cruise Miami's beautiful waters on this 45 foot Sea Ray Yacht!
            Fully equipped with kitchen, 2 bathrooms, 2 bedrooms, dining room,
            top of the line surround sound system, and state-of-the-art LED
            lights for those unforgettable night rides. Perfect for any
            occasion, whether it be a birthday party, bachelor/bachelorette
            party, anniversary, or just to cruise Miami's magical waterways,
            we are here to provide you with the best experience possible!
          </p>
        </div>

        {/*AMENITIES*/}
        <div className="my-32">
          <h3 className="font-semibold text-md_title mb-8">Amenities</h3>
          <div className="grid md:grid-cols-3 gap-3">
          {
            Amenities.map((item, i) => (
              <div key={i}
              className="flex items-center space-x-2">
                <item.icon size={24} 
                className="text-base-primary" />
                <p className="text-sm_paragraph md:text-md_paragraph">{item.text}</p>
              </div>
            ))
          }
          </div>
        </div>

        {/*COLLAPSE*/}
        <div className="my-40">
          <h3 className="font-semibold text-md_title mb-[70px]">Frequently asked questions</h3>

          <Frequently />
        </div>

      </div>
    </div>
  </div>
  )
}

export default Night