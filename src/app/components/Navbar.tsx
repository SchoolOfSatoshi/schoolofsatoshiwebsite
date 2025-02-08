import React from 'react';
import Image from 'next/image';

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-4">
      <div className="flex items-center space-x-2">
        <div className="w-100 h-50 bg-school-dark rounded-full flex items-center justify-center">
          <Image 
            src="/assets/images/logo.png" 
            alt="School of Satoshi Logo" 
            width={200} 
            height={200} 
          />
        </div>
        {/* <span className="text-sm font-semibold uppercase">School of Satoshi</span> */}
      </div>
      
      <div className="flex items-center space-x-6">
        <a href="#" className="text-black font-medium">Home</a>
        <a href="#" className="text-school-gray">About</a>
        {/* <a href="#" className="text-school-gray">Academy</a> */}
        <a href="#" className="text-school-gray">Programs</a>
        
        <button className="bg-school-orange text-black px-6 py-2 rounded-lg">
          Donate
        </button>
      </div>
    </nav>
  );
};

export default Navbar;