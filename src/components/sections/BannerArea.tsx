"use client";
import React from "react";
import { ButtonPrimary, ButtonSecondary } from "../Button";

const BannerArea = () => {
  return (
    <div className="relative -z-10 bg-cover bg-center h-[800px] sm:h-[1300px] py-12 bg-[url('https://tf.insomniacafe.org/insotrans/assets/images/banner/banner-bg-1.jpg')] max-w-full">
      <div className="absolute inset-0 bg-gradient-to-r from-secondary-color to-black opacity-50 z-0"></div>
      <div className="relative z-10 container mx-auto flex justify-center items-center flex-col sm:flex-row">
        <div className="flex flex-col text-white space-y-6 mx-auto max-w-4xl">
          <div className="space-y-4">
            <span className="flex relative items-center gap-2 text-lg before:content-[''] before:inline-block  before:w-4 before:h-2 before:bg-primary before:rounded-full">
              InsoTrans Logistic & Transport
            </span>
            <h1 className="text-6xl sm:text-5xl font-bold">
              Global Logistics Expertise.
            </h1>
            <p>
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
        <div className="bg-white text-secondary p-8 w-full sm:w-96 rounded-md">
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
                  className="px-4 py-3 border border-gray-300 rounded-md w-full"
                />
              </div>
              <div className="flex flex-col space-y-2 w-full">
                <label className="text-base font-medium">To</label>
                <input
                  type="text"
                  placeholder="Select Destination..."
                  className="px-4 py-3 border border-gray-300 rounded-md w-full"
                />
              </div>
            </div>
            <div className="space-y-4 sm:space-y-0 sm:flex sm:space-x-4">
              <div className="flex flex-col space-y-2 w-full">
                <label className="text-base font-medium">Truckload</label>
                <input
                  type="text"
                  placeholder="Select..."
                  className="px-4 py-3 border border-gray-300 rounded-md w-full"
                />
              </div>
              <div className="flex flex-col space-y-2 w-full">
                <label className="text-base font-medium">Commodity</label>
                <input
                  type="text"
                  placeholder="Select..."
                  className="px-4 py-3 border border-gray-300 rounded-md w-full"
                />
              </div>
            </div>
            <div className="space-y-2">
              <h6 className="text-base font-medium">Dist. (Miles)</h6>
              <input
                type="range"
                min="0"
                max="500"
                defaultValue="250"
                className="w-full"
              />
            </div>
            <div className="flex items-center justify-between">
              <h3 className="text-base font-medium flex items-center space-x-2">
                <span>Refrigerated</span>
                <input type="checkbox" id="switch" className="hidden" />
                <label
                  htmlFor="switch"
                  className="relative w-10 h-5 bg-gray-300 rounded-full cursor-pointer"
                >
                  <span className="absolute left-1 top-1 w-3 h-3 bg-white rounded-full transition-transform duration-300"></span>
                </label>
              </h3>
              <span className="bg-primary text-white px-4 py-1 rounded-md">
                250
              </span>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-primary text-white rounded-md transition-colors duration-300 hover:bg-secondary-color"
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
