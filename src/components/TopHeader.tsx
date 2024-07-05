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
    <div className="flex bg-secondary text-white w-full justify-center py-4">
      <div className="flex w-60% px-10 space-x-10">
        <div className="flex space-x-3 items-center w-full">
          <div className="flex items-center space-x-2">
            <IonIcon icon={timeOutline} style={{ color: "white" }} />
            <p> Mon-Sat: 8 am - 5pm, Sunday:closed</p>
          </div>
          <div className="flex items-center justify-around space-x-2">
            <IonIcon icon={locationOutline} style={{ color: "white" }} />
            <p> South branch Road, Bombay India</p>
          </div>
        </div>
        <div className="flex space-x-2">
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
