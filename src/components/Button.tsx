import React from 'react';

interface ButtonProps {
  name: string;
}

const Button: React.FC<ButtonProps> = ({ name }) => {
  const btnName = name || 'Button'; 
  return (
    <button className='bg-primary py-3 px-4 rounded-sm font-bold hover:bg-secondary transition-colors duration-500'>
      {btnName}
    </button>
  );
};

export default Button;
