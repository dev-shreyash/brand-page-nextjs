"use client"
import { useState } from 'react';

export default function Switch() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="flex items-center gap-4 justify-between">
      <h3 className="flex items-center gap-2 m-0 text-base relative">
        <input
          type="checkbox"
          id="switch"
          className="sr-only"
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
        />
        <label
          htmlFor="switch"
          className={`block w-16 h-8 bg-gray-200 rounded-full cursor-pointer relative transition-colors duration-300 ease-linear  border-gray-400 border-[1px] ${
            isChecked ? 'bg-primary' : ''
          }`}
        >
          <span
            className={`absolute top-[3px] left-1 w-6 h-6 bg-primary rounded-full transition-transform duration-300 ease-linear ${
              isChecked ? 'transform translate-x-8' : ''
            }`}
          ></span>
        </label>
      </h3>
    </div>
  );
}
