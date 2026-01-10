import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const navLinks = [
  { name: "Home", href: "/", target: undefined },
  { name: "About", href: "/about", target: undefined },
  { name: "Programs", href: "/programs", target: undefined },
  { name: "Cohorts", href: "/cohorts", target: undefined },
  { name: "Team", href: "/team", target: undefined },
  { name: "Videos", href: "/videos", target: undefined },
  { name: "Contact", href: "/contact", target: undefined },
];
