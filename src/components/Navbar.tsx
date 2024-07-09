"use client";
import React, { useState, useEffect } from "react";
import { ButtonPrimary } from "./Button";
import { IonIcon } from "@ionic/react";
import { closeOutline, menuOutline, addOutline, removeOutline, searchOutline } from "ionicons/icons";

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
  const [accordionOpen, setAccordionOpen] = useState<{
    [key: number]: boolean;
  }>({});
  const [isClient, setIsClient] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleAccordion = (index: number) => {
    setAccordionOpen((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <div
      className={`navbar w-full left-0 z-[90]  bg-white transition-all duration-300 ${
        isScrolled ? "fixed top-0 bg-white shadow-md py-2" : "relative py-4"
      }`}
    >
      <div className="container flex items-center justify-between md:px-10 px-7 lg:max-w-[1320px] m-auto md:max-w-[950px] sm:flex">
        <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800 lg:mr-[20%] z-[100]">
          InsoTrans
        </div>
        <div onClick={() => setOpen(!open)} className="text-3xl cursor-pointer md:hidden z-[100]">
          <IonIcon icon={open ? closeOutline : menuOutline} style={{ color: "black" }} />
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-3 px-3 lg:px-0 mt-3 lg:mt-0 absolute md:static bg-white md:bg-transparent md:z-auto z-[80] left-1/2 transform -translate-x-1/2 md:transform-none lg:w-full w-[300px] m-auto md:w-auto transition-all duration-500 ease-in ${
            open ? "top-[60px]" : "top-[-690px] opacity-0 lg:opacity-100"
          } md:top-auto`}
        >
          {Links.map((link, index) => (
            <li key={link.name} className="md:ml-5 text-lg md:my-0 my-5 border-b-2 border-gray-200 lg:border-none relative group">
              <a
                href={link.link}
                className="text-secondary hover:text-primary duration-500 font-bold cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-primary before:origin-left before:h-[1px] before:w-0 hover:before:w-[30%] before:bottom-0 before:left-0 flex items-center justify-between"
                onClick={(e) => {
                  if (link.submenu && isClient && window.innerWidth <= 768) {
                    e.preventDefault();
                    toggleAccordion(index);
                  }
                }}
              >
                {link.name}
                {link.submenu && isClient && window.innerWidth <= 768 && (
                  <IonIcon icon={accordionOpen[index] ? removeOutline : addOutline} className="ml-2" />
                )}
              </a>
              {link.submenu && (
                <ul
                  className={`lg:absolute lg:mt-0 lg:bg-transparent lg:pt-9  lg:rounded-md md:relative sm:relative sm:w-full lg:w-[120px] font-bold bg-white pt-4 transition-all duration-500 ease-in ${
                    isClient && window.innerWidth > 768
                      ? "hidden group-hover:block"
                      : isClient && accordionOpen[index]
                      ? "block"
                      : "hidden"
                  } z-50`}
                >
                  {link.submenu.map((sublink) => (
                    <li key={sublink.name} className="text-sm py-3 lg:py-5 lg:px-3 px-4 lg:w-[120px] sm:px-0 lg:bg-white hover:bg-gray-100 transition-all duration-500 ease-in">
                      <a href={sublink.link} className="block text-secondary hover:text-primary duration-500">
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
                className="border-b-2 border-b-gray-200 focus:outline-none w-24 text-secondary"
              />
            </div>
            <ButtonPrimary name="Track parcel" />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
