import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#111110] text-white py-16 animate-fadeIn">
      <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-start md:items-center">
        {/* Logo & Title */}
        <div className="flex items-center mb-10 md:mb-0">
          <div className="flex items-center mr-4">
            {/* Placeholder for logo image */}
            <div className="w-24 h- bg-white rounded-full mr-6 flex-shrink-0">
              <Image 
                          src="/assets/images/logo.png" 
                          alt="School of Satoshi Logo" 
                          width={200} 
                          height={200} 
                        />
            </div>
            <span className="text-2xl font-bold tracking-wide">School of Satoshi</span>
          </div>
        </div>

        {/* Navigation and Contact Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full">
          {/* Links Section */}
          <div>
            <h4 className="font-semibold text-xl mb-4">Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Academy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="font-semibold text-xl mb-4">Contact</h4>
            <p className="text-gray-400 mb-2">
              School of Satoshi, Kampala, Uganda
            </p>
            <p className="text-gray-400">info@schoolofsatoshi.org</p>
          </div>

          {/* Social Section */}
          <div>
            <h4 className="font-semibold text-xl mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <Link href="#">
                <Link href="#" className="w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110">
                  <span className="sr-only">Facebook</span>
                  {/* You can insert an SVG icon for Facebook here */}
                  <svg
                    className="w-5 h-5 text-gray-400 hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12.07C22 6.48 17.52 2 12 2S2 6.48 2 12.07c0 5 3.66 9.13 8.44 9.93v-7.03h-2.54V12h2.54V9.84c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.45h-1.25c-1.23 0-1.61.76-1.61 1.54V12h2.74l-.44 2.97h-2.3v7.03C18.34 21.2 22 17.07 22 12.07z" />
                  </svg>
                </Link>
              </Link>
              <Link href="#">
                <Link href="#" className="w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110">
                  <span className="sr-only">Twitter</span>
                  {/* Insert Twitter SVG icon */}
                  <svg
                    className="w-5 h-5 text-gray-400 hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22.46 6c-.77.35-1.6.59-2.46.69a4.3 4.3 0 001.88-2.37 8.59 8.59 0 01-2.72 1.04 4.28 4.28 0 00-7.3 3.9A12.14 12.14 0 013 4.79a4.28 4.28 0 001.32 5.71 4.24 4.24 0 01-1.94-.54v.05a4.28 4.28 0 003.43 4.2 4.28 4.28 0 01-1.93.07 4.29 4.29 0 004 2.97A8.59 8.59 0 012 19.54a12.14 12.14 0 006.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19-.01-.39-.02-.58A8.66 8.66 0 0024 5.56a8.49 8.49 0 01-2.54.7z" />
                  </svg>
                </Link>
              </Link>
              <Link href="#">
                <Link href="#" className="w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110">
                  <span className="sr-only">LinkedIn</span>
                  {/* Insert LinkedIn SVG icon */}
                  <svg
                    className="w-5 h-5 text-gray-400 hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.25c-.97 0-1.75-.78-1.75-1.75s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.75-1.75 1.75zm13.5 11.25h-3v-5.5c0-1.32-.03-3-1.84-3-1.84 0-2.12 1.44-2.12 2.92v5.58h-3v-10h2.88v1.37h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v5.58z" />
                  </svg>
                </Link>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;









// import Link from 'next/link';
// import React from 'react';

// const Footer: React.FC = () => {
//   return (
//     <footer className="bg-[#111110] text-white py-16">
//       <div className="container mx-auto flex flex-col md:flex-row justify-between">
//         <div className="flex items-center mb-8 md:mb-0">
//           <div className="flex items-center mr-8">
//             <div className="w-16 h-16 bg-white rounded-full mr-4"></div>
//             <span className="font-semibold">School of Satoshi</span>
//           </div>
//         </div>
//         <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-16">
//           <div>
//             <h4 className="font-semibold mb-4 text-dark">Links</h4>
//             <ul className="space-y-2">
//               <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
//               <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
//               <li><a href="#" className="text-gray-400 hover:text-white">Academy</a></li>
//             </ul>
//           </div>
//           <div>
//             <h4 className="font-semibold mb-4 text-dark">Contact</h4>
//             <p className="text-gray-400 mb-2">School of Satoshi, Kampala, Uganda</p>
//             <p className="text-gray-400">info@schoolofsatoshi.org</p>
//           </div>
//           <div>
//             <h4 className="font-semibold mb-4 text-dark">Follow on</h4>
//             <div className="flex space-x-4">
//               <Link href="#" className="w-8 h-8 border border-gray-600 rounded-full flex items-center justify-center">
//                 <span className="sr-only">Facebook</span>
//               </Link>
//               <Link href="#" className="w-8 h-8 border border-gray-600 rounded-full flex items-center justify-center">
//                 <span className="sr-only">Twitter</span>
//               </Link>
//               <Link href="#" className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
//                 <span className="sr-only">LinkedIn</span>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

















