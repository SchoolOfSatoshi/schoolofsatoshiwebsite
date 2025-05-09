"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Bitcoin, Menu, X } from "lucide-react";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./theme-togle";

// const SheetContent = React.forwardRef<
//   React.ElementRef<typeof SheetPrimitive.Content>,
//   React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>
// >(({ className, children, ...props }, ref) => (
//   <SheetPrimitive.Content
//     ref={ref}
//     className={className}
//     {...props}
//   >
//     {children}
//   </SheetPrimitive.Content>
// ));
// SheetContent.displayName = "SheetContent";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex  items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/assets/images/logo.jpg" alt="logo" height={10} width={140} />
        </Link>
        <nav className="hidden md:flex gap-6 p-10">
          <Link href="/" className="text-base font-medium transition-colors hover:text-orange-500">
            Home
          </Link>
          <Link href="/about" className="text-base font-medium transition-colors hover:text-orange-500">
            About Us
          </Link>
          <Link href="/cohorts" className="text-base font-medium transition-colors hover:text-orange-500">
            Past Cohorts
          </Link>
          <Link href="/team" className="text-base font-medium transition-colors hover:text-orange-500">
            Team
          </Link>
          <Link href="/contact" className="text-base font-medium transition-colors hover:text-orange-500">
            Contact Us
          </Link>
        </nav>
        <div className="hidden md:flex gap-4">
          <Link href="/apply">
            <Button variant="outline">Apply Now</Button>
          </Link>
          <Link href="/donate">
            <Button className="bg-orange-500 hover:bg-orange-600">Donate</Button>
          </Link>
          <ThemeToggle />

        </div>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent className="w-full" side="right">
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between border-b pb-4">
                <Link href="/" className="flex items-center gap-2" onClick={closeMenu}>
                  <Image src="/assets/images/logo.jpg" alt="logo" height={10} width={140} />
                  {/* <span className="font-bold">School of Satoshi</span> */}
                  <span>
                    School of <span className="gradient-text">Satoshi</span>
                  </span>
                </Link>
                <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                  <X className="h-5 w-5" />
                  <span className="sr-only">Close</span>
                </Button>
              </div>
              <nav className="flex flex-col gap-4 mt-8">
                {[
                  { href: "/", text: "Home" },
                  { href: "/about", text: "About Us" },
                  { href: "/cohorts", text: "Past Cohorts" },
                  { href: "/team", text: "Team" },
                  { href: "/contact", text: "Contact" },
                ].map((link, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      className="text-lg font-medium transition-colors hover:text-orange-500"
                      onClick={closeMenu}
                    >
                      {link.text}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <div className="flex flex-col gap-4 mt-auto mb-8">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <Link href="/apply" onClick={closeMenu}>
                    <Button variant="outline" className="w-full">
                      Apply Now
                    </Button>
                  </Link>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <Link href="/donate" onClick={closeMenu}>
                    <Button className="w-full bg-orange-500 hover:bg-orange-600">Donate</Button>
                  </Link>
                </motion.div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}







// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { Button } from "@/components/ui/button";
// import { Menu, X } from "lucide-react";
// import { cn } from "@/lib/utils";

// const Navbar: React.FC = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 20) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const navLinks = [
//     { name: "Home", path: "/" },
//     { name: "Courses", path: "/courses" },
//     { name: "About", path: "/about" },
//     { name: "Resources", path: "/resources" },
//     { name: "Blog", path: "/blog" },
//     { name: "Contact", path: "/contact" },
//   ];

//   return (
//     <nav
//       className={cn(
//         "fixed top-0 left-0 w-full z-50 transition-all duration-300 py-4",
//         scrolled 
//           ? "glass-effect shadow-md py-3" 
//           : "bg-transparent"
//       )}
//     >
//       <div className="container mx-auto px-4 flex items-center justify-between">
//         <Link 
//           to="/" 
//           className="flex items-center gap-2 font-bold text-xl"
//         >
//           <div className="relative w-8 h-8">
//             <svg 
//               viewBox="0 0 24 24" 
//               className="w-full h-full text-bitcoin-orange"
//             >
//               <circle cx="12" cy="12" r="11" fill="currentColor" />
//               <path 
//                 d="M15.75 10.5C15.75 8.75 14.38 7.38 12.63 7.38H8.25V14.63H12.63C14.38 14.63 15.75 13.25 15.75 11.5C15.75 10.5 15.75 10.5 15.75 10.5Z" 
//                 fill="white"
//               />
//               <path 
//                 d="M11.25 7.5V6H9.75V7.5H9V6H7.5V7.5H6V9H7.5V15H6V16.5H7.5V18H9V16.5H9.75V18H11.25V16.5C13.5 16.5 15 15 15 12.75C15 10.5 13.5 9 11.25 9C13.5 9 13.5 7.5 11.25 7.5ZM9 9H11.25C12 9 12 10.5 11.25 10.5H9V9ZM11.625 15H9V12H11.625C12.75 12 12.75 15 11.625 15Z" 
//                 fill="white"
//               />
//             </svg>
//           </div>
//           <span>
//             School of <span className="gradient-text">Satoshi</span>
//           </span>
//         </Link>

//         <div className="hidden md:flex items-center gap-6">
//           {navLinks.map((link) => (
//             <Link
//               key={link.name}
//               to={link.path}
//               className="text-foreground/80 hover:text-foreground font-medium transition-colors"
//             >
//               {link.name}
//             </Link>
//           ))}
//           <Button className="bitcoin-button">
//             Start Learning
//           </Button>
//         </div>

//         <button
//           className="md:hidden"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           {isOpen ? <X size={24} /> : <Menu size={24} />}
//         </button>

//         {/* Mobile menu */}
//         {isOpen && (
//           <div className="absolute top-full left-0 w-full bg-white dark:bg-gray-900 shadow-lg py-5 md:hidden border-t">
//             <div className="container mx-auto px-4 flex flex-col gap-4">
//               {navLinks.map((link) => (
//                 <Link
//                   key={link.name}
//                   to={link.path}
//                   className="text-foreground/80 hover:text-foreground font-medium transition-colors py-2"
//                   onClick={() => setIsOpen(false)}
//                 >
//                   {link.name}
//                 </Link>
//               ))}
//               <Button className="bitcoin-button mt-2 w-full">
//                 Start Learning
//               </Button>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;





// "use client"

// import Link from "next/link"
// import { useState } from "react"
// import { Button } from "@/components/ui/button"
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
// import { Bitcoin, Menu, X } from "lucide-react"
// import * as SheetPrimitive from "@radix-ui/react-dialog"
// import React from "react"
// import Image from "next/image"

// const SheetContent = React.forwardRef<
//   React.ElementRef<typeof SheetPrimitive.Content>,
//   React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>
// >(({ className, children, ...props }, ref) => (
//   <SheetPrimitive.Content
//     ref={ref}
//     className={className}
//     {...props}
//   >
//     {children}
//   </SheetPrimitive.Content>
// ))
// SheetContent.displayName = "SheetContent"

// export default function Header() {
//   const [isOpen, setIsOpen] = useState(false)

//   const closeMenu = () => setIsOpen(false)

//   return (
//     <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
//       <div className="container flex h-24 items-center justify-between">
//         <Link href="/" className="flex items-center gap-2">
//           {/* <Bitcoin className="h-6 w-6 text-orange-500" /> */}
//           <Image src = "/assets/images/logo.png" alt= "logo" height={120} width={140}/>
//           {/* <span className="font-bold text-xl">School of Satoshi</span> */}
//         </Link>
//         <nav className="hidden md:flex gap-6">
//           <Link href="/" className="text-sm font-medium transition-colors hover:text-orange-500">
//             Home
//           </Link>
//           <Link href="/about" className="text-sm font-medium transition-colors hover:text-orange-500">
//             About Us
//           </Link>
//           {/* <Link href="/programs" className="text-sm font-medium transition-colors hover:text-orange-500">
//             Programs
//           </Link> */}
//           <Link href="/cohorts" className="text-sm font-medium transition-colors hover:text-orange-500">
//             Past Cohorts
//           </Link>
//           <Link href="/team" className="text-sm font-medium transition-colors hover:text-orange-500">
//             Team
//           </Link>
//         </nav>
//         <div className="hidden md:flex gap-4">
//           <Link href="/apply">
//             <Button variant="outline">Apply Now</Button>
//           </Link>
//           <Link href="/donate">
//             <Button className="bg-orange-500 hover:bg-orange-600">Donate</Button>
//           </Link>
//         </div>
//         <Sheet open={isOpen} onOpenChange={setIsOpen}>
//           <SheetTrigger asChild className="md:hidden">
//             <Button variant="outline" size="icon">
//               <Menu className="h-5 w-5" />
//               <span className="sr-only">Toggle menu</span>
//             </Button>
//           </SheetTrigger>
//           <SheetContent className="w-full" side="right">
//             <div className="flex flex-col h-full">
//               <div className="flex items-center justify-between border-b pb-4">
//                 <Link href="/" className="flex items-center gap-2" onClick={closeMenu}>
//                   <Bitcoin className="h-6 w-6 text-orange-500" />
//                   <span className="font-bold">School of Satoshi</span>
//                 </Link>
//                 <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
//                   <X className="h-5 w-5" />
//                   <span className="sr-only">Close</span>
//                 </Button>
//               </div>
//               <nav className="flex flex-col gap-4 mt-8">
//                 <Link
//                   href="/"
//                   className="text-lg font-medium transition-colors hover:text-orange-500"
//                   onClick={closeMenu}
//                 >
//                   Home
//                 </Link>
//                 <Link
//                   href="/about"
//                   className="text-lg font-medium transition-colors hover:text-orange-500"
//                   onClick={closeMenu}
//                 >
//                   About Us
//                 </Link>
//                 <Link
//                   href="/programs"
//                   className="text-lg font-medium transition-colors hover:text-orange-500"
//                   onClick={closeMenu}
//                 >
//                   Programs
//                 </Link>
//                 <Link
//                   href="/cohorts"
//                   className="text-lg font-medium transition-colors hover:text-orange-500"
//                   onClick={closeMenu}
//                 >
//                   Previous Cohorts
//                 </Link>
//                 <Link
//                   href="/team"
//                   className="text-lg font-medium transition-colors hover:text-orange-500"
//                   onClick={closeMenu}
//                 >
//                   Team
//                 </Link>
//               </nav>
//               <div className="flex flex-col gap-4 mt-auto mb-8">
//                 <Link href="/contact" onClick={closeMenu}>
//                   <Button variant="outline" className="w-full">
//                     Contact
//                   </Button>
//                 </Link>
//                 <Link href="/apply" onClick={closeMenu}>
//                   <Button className="w-full bg-orange-500 hover:bg-orange-600">Apply Now</Button>
//                 </Link>
//               </div>
//             </div>
//           </SheetContent>
//         </Sheet>
//       </div>
//     </header>
//   )
// }

