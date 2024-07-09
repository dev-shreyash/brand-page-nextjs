"use client";
import React, { useState } from "react";
import { ButtonPrimary, ButtonSecondary } from "../Button";
import Switch from "../Switch";

const BannerArea = () => {
  const [sliderValue, setSliderValue] = useState(250);

  const handleSliderChange = (event:any) => {
    setSliderValue(event.target.value);
  };

  return (
    <div className="relative bg-cover bg-center min-h-screen sm:min-h-full py-12 bg-[url('https://tf.insomniacafe.org/insotrans/assets/images/banner/banner-bg-1.jpg')] max-w-full">      <div className="absolute inset-0 bg-gradient-to-r from-secondary to-black opacity-90 z-0"></div>
      <div className="relative z-10 px-6 sm:px-10 container mx-auto flex flex-col lg:flex-row justify-center items-center lg:space-x-6 space-y-6 lg:space-y-0 gap-6">
        <div className="flex-1 flex flex-col text-white space-y-6 mx-auto max-w-xl">
          <div className="space-y-4">
            <span className="flex items-center gap-2 text-lg before:content-[''] before:inline-block before:w-4 before:h-2 before:bg-primary before:rounded-full">
              InsoTrans Logistic & Transport
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
              Global Logistics Expertise.
            </h1>
            <p className="text-base sm:text-lg">
              Transportation is a vital aspect of modern life, shaping the way
              people and goods move from one place to another. Whether by road,
              rail, air, or sea, the efficiency and reliability of transport
              systems.
            </p>
          </div>
          <ul className="flex space-x-4">
            <li>
              <a className="btn btn-primary" href="about.html">
                <ButtonPrimary name="Learn more" arrow="right" />
              </a>
            </li>
            <li>
              <a className="btn btn-secondary" href="contact.html">
                <ButtonSecondary name="Contact Us" arrow="right" />
              </a>
            </li>
          </ul>
        </div>

        <div className="flex-1 flex flex-col bg-white text-secondary p-6 sm:p-8 rounded-md w-full max-w-lg">
          <div className="space-y-2">
            <h3 className="text-xl sm:text-2xl font-bold">Get a Quick Quote</h3>
            <p className="text-base">For Detailed quote use extended version</p>
          </div>

          <form className="space-y-4">
            <div className="space-y-4 sm:space-y-0 sm:flex sm:space-x-4">
              <div className="flex flex-col space-y-2 w-full">
                <label className="text-base font-medium">From</label>
                <input
                  type="text"
                  placeholder="Select Destination..."
                  className="px-4 py-3 border border-gray-300 rounded-md w-full outline-none"
                />
              </div>
              <div className="flex flex-col space-y-2 w-full">
                <label className="text-base font-medium">To</label>
                <input
                  type="text"
                  placeholder="Select Destination..."
                  className="px-4 py-3 border border-gray-300 rounded-md w-full outline-none"
                />
              </div>
            </div>
            <div className="space-y-4 sm:space-y-0 sm:flex sm:space-x-4">
              <div className="flex flex-col space-y-2 w-full">
                <label className="text-base font-medium">Truckload</label>
                <input
                  type="text"
                  placeholder="Select..."
                  className="px-4 py-3 border border-gray-300 rounded-md w-full outline-none"
                />
              </div>
              <div className="flex flex-col space-y-2 w-full">
                <label className="text-base font-medium">Commodity</label>
                <input
                  type="text"
                  placeholder="Select..."
                  className="px-4 py-3 border border-gray-300 rounded-md w-full outline-none"
                />
              </div>
            </div>
            <div className="space-y-2">
              <h6 className="text-base font-medium">Dist. (Miles)</h6>
              <div className="flex items-center space-x-4">
                <input
                  type="range"
                  min="0"
                  max="500"
                  value={sliderValue}
                  onChange={handleSliderChange}
                  className="flex-1 w-full h-2 bg-transparent rounded-lg outline-none opacity-70 transition-opacity duration-200 hover:opacity-100 appearance-none"
                />
                <span className="bg-primary text-white px-4 py-1 rounded-md">
                  {sliderValue}
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <h3 className="text-base font-medium flex items-center">
                <span className="mr-2">Refrigerated</span>
                <Switch />
              </h3>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-primary text-white rounded-md transition-colors duration-300 hover:bg-secondary"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BannerArea;
