"use client"
import React, { useState } from "react";
import Button from "./Button";
import { IonIcon } from "@ionic/react";
import {
  closeOutline,
  menuOutline,
  addOutline,
  removeOutline,
  searchOutline,
} from "ionicons/icons";

interface Link {
  name: string;
  link: string;
  submenu?: { name: string; link: string }[];
}

const Navbar: React.FC = () => {
  const Links: Link[] = [
    {
      name: "HOME",
      link: "/",
      submenu: [
        { name: "Sub Home 1", link: "/subhome1" },
        { name: "Sub Home 2", link: "/subhome2" },
      ],
    },
    { name: "ABOUT US", link: "/about" },
    {
      name: "SERVICE",
      link: "/",
      submenu: [
        { name: "Sub Service 1", link: "/subservice1" },
        { name: "Sub Service 2", link: "/subservice2" },
      ],
    },
    { name: "PAGES", link: "/pages" },
    { name: "BLOG", link: "/blog" },
    { name: "CONTACT", link: "/contact" },
  ];

  const [open, setOpen] = useState(false);
  const [accordionOpen, setAccordionOpen] = useState<{ [key: number]: boolean }>(
    {}
  );

  const toggleAccordion = (index: number) => {
    setAccordionOpen((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800">
          InsoTrans
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <IonIcon
            icon={open ? closeOutline : menuOutline}
            style={{ color: "black" }}
          />
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-3 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 px-3 transition-all duration-500 ease-in ${
            open ? "top-10 " : "top-[-690px] "
          }`}
        >
          {Links.map((link, index) => (
            <li
              key={link.name}
              className="md:ml-5 text-lg md:my-0 my-5 sm:py-4 relative group border-none sm:border-b-secondary border-b-2"
            >
              <a
                href={link.link}
                className="relative text-secondary hover:text-primary duration-500 font-bold cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-primary before:origin-left before:h-[1px] before:w-0 hover:before:w-[30%] before:bottom-0 before:left-0 flex items-center justify-between"
                onClick={(e) => {
                  if (link.submenu && window.innerWidth <= 768) {
                    e.preventDefault();
                    toggleAccordion(index);
                  }
                }}
              >
                {link.name}
                {link.submenu && window.innerWidth <= 768 && (
                  <IonIcon
                    icon={accordionOpen[index] ? removeOutline : addOutline}
                    className="ml-2"
                  />
                )}
              </a>
              {link.submenu && (
                <ul
                  className={`lg:absolute md:relative sm:relative lg:w-32 sm:w-100% font-bold bg-white shadow-md  pt-4  ${
                    window.innerWidth > 768
                      ? "hidden group-hover:block"
                      : accordionOpen[index]
                      ? "block"
                      : "hidden"
                  }  sm:border-b-secondary border-b-2`}
                >
                  {link.submenu.map((sublink) => (
                    <li
                      key={sublink.name}
                      className="text-sm py-3 px-4 hover:bg-gray-100 w-100%  sm:border-b-secondary border-b-2"
                    >
                      <a
                        href={sublink.link}
                        className="block text-secondary hover:text-primary w-100% duration-500"
                      >
                        {sublink.name}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
          <div className="hidden lg:flex justify-around ml-3 gap-3">
            <div className="flex items-center gap-2">
              <IonIcon icon={searchOutline} style={{ color: "black" }} />
              <input
                type="text"
                placeholder="Search"
                className="border-b-2 border-b-gray-200 focus:outline-none w-24"
              />
            </div>
            <Button name="Track parcel" />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
