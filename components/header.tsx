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
      <div className="container flex h-24 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/assets/images/logo.png" alt="logo" height={120} width={140} />
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-orange-500">
            Home
          </Link>
          <Link href="/about" className="text-sm font-medium transition-colors hover:text-orange-500">
            About Us
          </Link>
          <Link href="/cohorts" className="text-sm font-medium transition-colors hover:text-orange-500">
            Past Cohorts
          </Link>
          <Link href="/team" className="text-sm font-medium transition-colors hover:text-orange-500">
            Team
          </Link>
        </nav>
        <div className="hidden md:flex gap-4">
          <Link href="/apply">
            <Button variant="outline">Apply Now</Button>
          </Link>
          <Link href="/donate">
            <Button className="bg-orange-500 hover:bg-orange-600">Donate</Button>
          </Link>
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
                  <Bitcoin className="h-6 w-6 text-orange-500" />
                  <span className="font-bold">School of Satoshi</span>
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

