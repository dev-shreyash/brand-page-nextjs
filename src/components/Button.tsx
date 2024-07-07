"use client"

import React from 'react';
import { IonIcon } from "@ionic/react";
import {
   arrowForwardOutline,
   arrowBackOutline
} from "ionicons/icons";

interface ButtonProps {
  name: string;
  arrow?: 'left' | 'right' | 'none';
}

export const ButtonPrimary: React.FC<ButtonProps> = ({ name, arrow = 'none' }) => {
  const btnName = name || 'Button'; 

  return (
    <button className='bg-primary py-3 px-4 border-primary hover:border-secondary border-2 rounded-sm font-bold hover:bg-secondary transition-colors duration-500 flex items-center'>
      {arrow === 'left' && (
        <IonIcon
          icon={arrowBackOutline}
          style={{ color: "white", marginRight: '0.5rem' }}
        />
      )}
      {btnName}
      {arrow === 'right' && (
        <IonIcon
          icon={arrowForwardOutline}
          style={{ color: "white", marginLeft: '0.5rem' }}
        />
      )}
    </button>
  );
};

export const ButtonSecondary: React.FC<ButtonProps> = ({ name, arrow = 'none' }) => {
  const btnName = name || 'Button'; 

  return (
    <button className='bg-transparent border-primary border-2 py-3 px-4 rounded-sm font-bold hover:bg-primary transition-colors duration-500 flex items-center'>
      {arrow === 'left' && (
        <IonIcon
          icon={arrowBackOutline}
          style={{ color: "white", marginRight: '0.5rem' }}
        />
      )}
      {btnName}
      {arrow === 'right' && (
        <IonIcon
          icon={arrowForwardOutline}
          style={{ color: "white", marginLeft: '0.5rem' }}
        />
      )}
    </button>
  );
};
