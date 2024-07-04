"use client";
import React, { useState } from "react";
import Button from "./Button";
import { IonIcon } from "@ionic/react";
import { logoIonic, closeOutline, menuOutline, addOutline, removeOutline } from "ionicons/icons";

const Navbar = () => {
  const Links = [
    { name: "HOME", link: "/", submenu: [{ name: "Sub Home 1", link: "/subhome1" }, { name: "Sub Home 2", link: "/subhome2" }] },
    { name: "ABOUT US", link: "/about" },
    { name: "SERVICE", link: "/", submenu: [{ name: "Sub Service 1", link: "/subservice1" }, { name: "Sub Service 2", link: "/subservice2" }] },
    { name: "PAGES", link: "/pages" },
    { name: "BLOG", link: "/blog" },
    { name: "CONTACT", link: "/contact" },
  ];

  const [open, setOpen] = useState(false);
  const [accordionOpen, setAccordionOpen] = useState({});

  const toggleAccordion = (index) => {
    setAccordionOpen(prevState => ({
      ...prevState,
      [index]: !prevState[index]
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
          <IonIcon icon={open ? closeOutline : menuOutline} style={{ color: 'black' }} />
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-490px] "
          }`}
        >
          {Links.map((link, index) => (
            <li key={link.name} className="md:ml-5 text-lg md:my-0 my-7 relative group">
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
                  <IonIcon icon={accordionOpen[index] ? removeOutline : addOutline} className="ml-2" />
                )}
              </a>
              {link.submenu && (
                <ul className={`relative max-w-fit font-bold bg-white shadow-md mt-2 pt-2 pl-4 ${window.innerWidth > 768 ? 'hidden group-hover:block' : accordionOpen[index] ? 'block' : 'hidden'}`}>
                  {link.submenu.map(sublink => (
                    <li key={sublink.name} className="text-sm py-2 px-4 hover:bg-gray-100">
                      <a href={sublink.link} className="block text-secondary hover:text-primary">{sublink.name}</a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
          <div className="lg:block md:hidden sm:hidden">
            <Button>Get Started</Button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
