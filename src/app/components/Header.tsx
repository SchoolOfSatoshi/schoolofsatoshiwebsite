/* eslint-disable @typescript-eslint/no-unused-vars */
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="flex justify-center items-center py-4">
      <div className="flex items-center space-x-[269px]">
        <div className="flex items-center space-x-1">
          <div className="w-[81.96px] h-[81.96px]">
            <div className="w-[60px] h-[60px] bg-secondary rounded-full -rotate-30"></div>
          </div>
          <span className="text-textPrimary uppercase font-semibold text-sm">School of Satoshi</span>
        </div>
        
        <nav>
          <ul className="flex items-center space-x-[21px]">
            <li><Link href="#" className="text-textPrimary capitalize">Home</Link></li>
            <li><Link href="#" className="text-textSecondary capitalize">About</Link></li>
            <li><Link href="#" className="text-textSecondary capitalize">Academy</Link></li>
            <li><Link href="#" className="text-textSecondary capitalize">Contact</Link></li>
          </ul>
        </nav>
        
        <button className="bg-primary text-textPrimary px-[25px] py-3 rounded-lg">
          Join Now
        </button>
      </div>
    </header>
  )
}










// import Link from "next/link";

// export default function Header() {
//   return (
//     <header className="bg-blue-900 text-white py-6">
//       <div className="container mx-auto px-4 flex justify-between items-center">
//         <h1 className="text-3xl font-bold">School of Satoshi</h1>
//         <nav>
//           <ul className="flex space-x-6">
//             <li>
//               <Link href="/" className="hover:underline">
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link href="/about" className="hover:underline">
//                 About
//               </Link>
//             </li>
//             <li>
//               <Link href="/courses" className="hover:underline">
//                 Courses
//               </Link>
//             </li>
//             <li>
//               <Link href="/contact" className="hover:underline">
//                 Contact
//               </Link>
//             </li>
//           </ul>
//         </nav>
//       </div>
//     </header>
//   );
// }