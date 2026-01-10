"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./theme-togle";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add scroll effect for glass header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "glass h-20" : "bg-transparent h-24 border-transparent"
        }`}
    >
      <div className="container h-full flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative h-12 w-12 overflow-hidden rounded-full transition-transform duration-300 group-hover:scale-105">
            <Image src="/assets/images/logo.png" alt="logo" fill className="object-cover" />
          </div>
          <span className="text-xl font-bold tracking-tight hidden sm:block">
            School of <span className="text-gradient">Satoshi</span>
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {[
            { href: "/", label: "Home" },
            { href: "/about", label: "About Us" },
            { href: "/cohorts", label: "Cohorts" },
            { href: "/team", label: "Team" },
            { href: "/contact", label: "Contact" },
          ].map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium transition-colors hover:text-primary relative group">
              {link.label}
              <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex gap-3 items-center">
          <Link href="/apply">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white transition-all">Apply Now</Button>
          </Link>
          <Link href="https://geyser.fund/project/schoolofsatoshiuganda">
            <Button className="bg-primary hover:bg-orange-600 text-white shadow-lg shadow-orange-500/20">Donate</Button>
          </Link>
          <ThemeToggle />
        </div>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent className="w-full sm:max-w-md border-l border-white/10 glass bg-background/95 backdrop-blur-xl" side="right">
            <div className="flex flex-col h-full pt-10">
              <nav className="flex flex-col gap-6">
                {[
                  { href: "/", text: "Home" },
                  { href: "/about", text: "About Us" },
                  { href: "/cohorts", text: "Past Cohorts" },
                  { href: "/team", text: "Team" },
                  { href: "/contact", text: "Contact" },
                ].map((link, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      className="text-2xl font-bold tracking-tight hover:text-primary transition-colors block py-2 border-b border-white/5"
                      onClick={closeMenu}
                    >
                      {link.text}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <div className="flex flex-col gap-4 mt-auto mb-8">
                <Link href="/apply" onClick={closeMenu}>
                  <Button variant="outline" className="w-full h-12 text-lg">
                    Apply Now
                  </Button>
                </Link>
                <Link href="https://geyser.fund/project/schoolofsatoshiuganda" onClick={closeMenu}>
                  <Button className="w-full h-12 text-lg bg-primary hover:bg-orange-600">Donate</Button>
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}