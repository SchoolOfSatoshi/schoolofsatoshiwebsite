import Link from "next/link"
import { Bitcoin, Facebook, Github, Instagram, Linkedin, Twitter, X } from "lucide-react"
import { FC } from 'react'
import Image from 'next/image';

const Footer: FC = () => {
  // Social media links - replace with actual URLs
  const socialLinks = [
    { 
      icon: "M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497-3.753C20.18 7.773 21.692 5.25 22 4.009z", 
      label: "Twitter", 
      url: "https://x.com/schoolOfSatoshii" 
    },
    // { 
    //   icon: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z", 
    //   label: "LinkedIn", 
    //   url: "https://linkedin.com/company/schoolofsatoshi" 
    // },
    // { 
    //   icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z", 
    //   label: "Instagram", 
    //   url: "https://www.youtube.com/@SchoolofSatoshi" 
    // },
    { 
      icon: "M9 12a1 1 0 0 0 1 1h2.5L12 17l1-4h2.5a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H10a1 1 0 0 0-1 1v9z M6.5 12C6.5 8.41 9.41 5.5 13 5.5S19.5 8.41 19.5 12 16.59 18.5 13 18.5 6.5 15.59 6.5 12z M19.59 6.69A5.97 5.97 0 0 0 22 12c0 3.31-2.69 6-6 6v-6h4.59z", 
      label: "TikTok", 
      url: "https://www.tiktok.com/@school_of_satoshi?_t=ZM-8y1h3Q4Hsd3&_r=1" 
    },
    { 
      icon: "M23.498 6.186a2.78 2.78 0 0 0-1.96-1.96C19.68 3.84 12 3.84 12 3.84s-7.68 0-9.538.386a2.78 2.78 0 0 0-1.96 1.96C0 8.044 0 12 0 12s0 3.956.502 5.814a2.78 2.78 0 0 0 1.96 1.96C4.32 20.16 12 20.16 12 20.16s7.68 0 9.538-.386a2.78 2.78 0 0 0 1.96-1.96C24 15.956 24 12 24 12s0-3.956-.502-5.814zM9.6 15.6V8.4L15.6 12 9.6 15.6z", 
      label: "YouTube", 
      url: "https://www.youtube.com/@SchoolofSatoshi" 
    }
  ];

  return (
    <footer className="w-full border-t bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Logo and Description */}
          <div className="flex flex-col gap-3 sm:gap-4 col-span-1 md:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 w-fit">
              <div className="w-12 h-12 sm:w-16 sm:h-16 relative">
                <Image 
                  src="/assets/images/logo.png" 
                  alt="School of Satoshi logo" 
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
              <span className="text-lg sm:text-xl font-bold">School of Satoshi</span>
            </Link>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed max-w-md">
              To build a financially sovereign ecosystem in Uganda through practical, community-based Bitcoin education rooted in self-custody
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col">
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-gray-900 dark:text-gray-100">
              Quick Links
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                // { href: "/programs", label: "Programs" },
                { href: "/cohorts", label: "Previous Cohorts" },
                { href: "/team", label: "Team" },
                // { href: "/contact", label: "Contact" }
              ].map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-sm sm:text-base text-gray-600 hover:text-orange-500 dark:text-gray-400 dark:hover:text-orange-400 transition-colors duration-200 hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col">
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-gray-900 dark:text-gray-100">
              Contact
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-sm sm:text-base text-gray-600 dark:text-gray-400">📧</span>
                <a 
                  href="mailto:schoolofsatoshi016@gmail.com" 
                  className="text-sm sm:text-base text-gray-600 hover:text-orange-500 dark:text-gray-400 dark:hover:text-orange-400 transition-colors duration-200 hover:underline"
                >
                  schoolofsatoshi016@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sm sm:text-base text-gray-600 dark:text-gray-400">📍</span>
                <span className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                  Kampala, Uganda
                </span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="flex flex-col">
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-gray-900 dark:text-gray-100">
              Follow Us
            </h3>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              {socialLinks.map((social, index) => (
                <Link 
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow us on ${social.label}`}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-orange-500 hover:bg-orange-50 dark:hover:text-orange-400 dark:hover:bg-orange-900/20 transition-all duration-200 hover:scale-105 hover:shadow-md"
                >
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.icon} />
                  </svg>
                </Link>
              ))}
            </div>
            
            {/* Newsletter Signup */}
            <div className="mt-4 sm:mt-6">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                Stay updated with our latest news
              </p>
              <div className="flex flex-col xs:flex-row gap-2">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
                <button className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium rounded-md transition-colors duration-200 whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center border-t border-gray-200 dark:border-gray-700 pt-6 sm:pt-8 mt-8 sm:mt-10 gap-4 sm:gap-0">
          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 text-center sm:text-left">
            &copy; {new Date().getFullYear()} School of Satoshi. All rights reserved.
          </p>
          
          <div className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-6">
            {[
              { href: "/privacy", label: "Privacy Policy" },
              { href: "/terms", label: "Terms of Service" },
              { href: "/cookies", label: "Cookie Policy" }
            ].map((link) => (
              <Link 
                key={link.href}
                href={link.href} 
                className="text-xs sm:text-sm text-gray-500 hover:text-orange-500 dark:text-gray-400 dark:hover:text-orange-400 transition-colors duration-200 hover:underline"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer