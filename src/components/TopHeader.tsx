"use client";
import React, { useState, useEffect } from "react";
import { IonIcon } from "@ionic/react";
import {
  closeOutline,
  menuOutline,
  addOutline,
  removeOutline,
  searchOutline,
  timeOutline,
  locationOutline,
  logoFacebook,
  logoInstagram,
  logoTwitter,
  logoYoutube,
} from "ionicons/icons";
const TopHeader = () => {
  return (
    <div className="flex bg-secondary text-white w-full justify-center lg:py-4 sm:py-4 relative z-[99]">
     <div className="flex flex-col lg:flex-row lg:items-center lg:justify-center sm:flex-row sm:items-center lg:max-w-[1320px] px-10 lg:space-y-4 sm:space-y-0 sm:space-x-10 sm:py-2">
  <div className="flex flex-wrap items-center space-x-3 w-full sm:items-center">
    <div className="flex items-center space-x-2">
      <IonIcon icon={timeOutline} style={{ color: "white" }} />
      <p className="text-sm sm:text-base">
        Mon-Sat: 8 am - 5pm, Sunday: closed
      </p>
    </div>
    <div className="flex items-center space-x-2">
      <IonIcon icon={locationOutline} style={{ color: "white" }} />
      <p className="text-sm sm:text-base">
        South branch Road, Bombay India
      </p>
    </div>
  </div>

  <div className="flex items-center justify-center space-x-2 mt-0 sm:mt-0 ">
    <a href="#" className="group">
      <IonIcon
        icon={logoFacebook}
        className="text-white group-hover:text-primary"
      />
    </a>
    <a href="#" className="group">
      <IonIcon
        icon={logoInstagram}
        className="text-white group-hover:text-primary"
      />
    </a>
    <a href="#" className="group">
      <IonIcon
        icon={logoTwitter}
        className="text-white group-hover:text-primary"
      />
    </a>
    <a href="#" className="group">
      <IonIcon
        icon={logoYoutube}
        className="text-white group-hover:text-primary"
      />
    </a>
  </div>
</div>

    </div>
  );
};

export default TopHeader;
