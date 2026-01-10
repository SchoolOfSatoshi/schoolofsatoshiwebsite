import Link from "next/link"
import { FC } from 'react'
import Image from 'next/image';
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Mail, MapPin, ArrowRight, Twitter, Youtube } from "lucide-react";

const TikTok = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

const Footer: FC = () => {
  const socialLinks = [
    {
      icon: Twitter,
      label: "Twitter",
      url: "https://x.com/schoolOfSatoshii"
    },
    {
      icon: TikTok,
      label: "TikTok",
      url: "https://www.tiktok.com/@school_of_satoshi?_t=ZM-8y1h3Q4Hsd3&_r=1"
    },
    {
      icon: Youtube,
      label: "YouTube",
      url: "https://www.youtube.com/@SchoolofSatoshi"
    }
  ];

  return (
    <footer className="w-full bg-primary text-primary-foreground pt-8 sm:pt-10 md:pt-12 pb-6 border-t border-white/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-[1600px]">
        {/* Main Grid: Responsive columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 xl:gap-12 items-start mb-6 sm:mb-8">

          {/* 1. Brand & Socials */}
          <div className="space-y-4 md:col-span-2 lg:col-span-1">
            {/* Logo and Description - Stack on mobile, side-by-side on larger screens */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
              <Link href="/" className="shrink-0">
                <div className="relative h-16 w-16 sm:h-20 sm:w-20 bg-white rounded-lg p-2 hover:scale-105 transition-transform">
                  <Image
                    src="/assets/images/logo.png"
                    alt="School of Satoshi"
                    fill
                    className="object-contain"
                  />
                </div>
              </Link>
              <p className="text-primary-foreground/90 leading-relaxed text-sm sm:text-base lg:text-sm">
                Empowering the next generation of Bitcoin innovators through world-class education, mentorship, and practical hands-on experience.
              </p>
            </div>
            {/* Social Links */}
            <div className="flex gap-3 flex-wrap">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={index}
                    href={social.url}
                    target="_blank"
                    className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm shadow-sm hover:bg-white hover:text-primary hover:shadow-[0_0_15px_rgba(255,255,255,0.5)] hover:-translate-y-1 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* 2. Contact Info */}
          <div className="lg:pl-4 xl:pl-8">
            <h3 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-primary-foreground/90 text-sm">
                <div className="h-7 w-7 sm:h-8 sm:w-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0 text-white">
                  <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <span className="leading-relaxed">Kampala, Uganda<br />East Africa</span>
              </li>
              <li className="flex items-start sm:items-center gap-3 text-sm">
                <div className="h-7 w-7 sm:h-8 sm:w-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0 text-white">
                  <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <a href="mailto:schoolofsatoshi016@gmail.com" className="text-primary-foreground/90 hover:text-white transition-colors break-all leading-relaxed">
                  schoolofsatoshi016@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* 3. Newsletter */}
          <div className="md:col-span-2 lg:col-span-1">
            <h3 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4">Stay Updated</h3>
            <p className="text-sm text-primary-foreground/90 mb-3">
              Join our newsletter for updates, cohort news, and insights.
            </p>
            <div className="space-y-3 max-w-md lg:max-w-none">
              <div className="relative">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus-visible:ring-offset-0 focus-visible:ring-1 focus-visible:ring-white focus-visible:border-white h-10 sm:h-11 rounded-lg text-sm"
                />
              </div>
              <Button className="w-full bg-white hover:bg-white/90 text-primary font-bold h-10 sm:h-11 rounded-lg text-sm shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5">
                Subscribe <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-4 sm:pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-xs text-primary-foreground/70">
          <p className="text-center sm:text-left">&copy; {new Date().getFullYear()} School of Satoshi. All rights reserved.</p>
          <div className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-6 font-medium">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer