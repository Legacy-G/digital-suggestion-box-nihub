import React from 'react';
import logo from '@/assets/NIHUB.png';


const Logo = () => {
  return (
    <div className="flex items-center justify-center">
      <img
        src={logo}
        alt="NIHUB Logo"
        className="w-[7rem] h-auto object-contain"
      />
    </div>
  );
};

export default Logo;
