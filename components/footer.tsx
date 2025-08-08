import Link from "next/link"
import { FC } from 'react'
import Image from 'next/image'
import { SiTiktok } from "@icons-pack/react-simple-icons"

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
      icon: "tiktok", 
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
    <footer className="relative w-full">
      {/* Newsletter CTA (separate from main footer background) */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-20 overflow-hidden rounded-3xl bg-orange-500 shadow-xl -mb-10 md:-mb-16">
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 items-center gap-8 px-6 py-10 sm:px-10 md:py-12 lg:px-14">
            {/* Copy + Form */}
            <div className="max-w-xl">
              <p className="uppercase tracking-wider text-xs sm:text-sm text-orange-100/90">Subscribe to our</p>
              <h2 className="mt-1 text-2xl sm:text-3xl lg:text-4xl font-heading font-bold leading-tight text-white">
                Newsletter
              </h2>
              <p className="mt-3 text-white/90 text-sm sm:text-base">
                Get the latest updates on programs, cohorts, and community events.
              </p>
              <form className="mt-5 w-full max-w-lg">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full rounded-xl border-0 px-4 pr-32 py-3 text-sm text-gray-900 placeholder:text-gray-500 focus:outline-none"
                  />
                  <button
                    type="button"
                    className="absolute right-1 top-1 bottom-1 rounded-lg bg-gray-900 px-4 text-sm font-semibold text-white hover:bg-gray-800 transition-colors"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>

            {/* Right Illustration */}
            <div className="relative md:justify-self-end">
              <Image
                src="/images/newsletter-img.png"
                alt="Newsletter illustration"
                width={742}
                height={540}
                priority
                className="w-full max-w-[742px] h-auto object-contain md:ml-auto"
                />
              </div>
          </div>

          {/* Decorative gradient overlay */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-orange-400/30" />
        </div>
      </div>

      {/* Main Footer */}
      <div className="relative z-10 bg-[#170E2A] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 md:pt-24 pb-12">
        {/* Logo on top */}
        <Link href="/" className="flex items-center gap-3 w-fit">
          <div className="relative h-12 w-12 sm:h-14 sm:w-14">
            <Image src="/images/logo.png" alt="School of Satoshi logo" fill className="object-cover rounded-lg" />
          </div>
            </Link>

        {/* Divider below logo */}
        <div className="my-8 border-t border-white/10" />

        {/* Four columns */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* 1. Description */}
          <div>
            <p className="max-w-md text-sm leading-relaxed text-white/70">
              To build a financially sovereign ecosystem in Uganda through practical, community-based Bitcoin education rooted in self-custody
            </p>
          </div>

          {/* 2. Resources */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white/80">Resources</h3>
            <ul className="mt-4 space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/cohorts", label: "Previous Cohorts" },
                { href: "/team", label: "Team" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/70 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Resources */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white/80">Resources</h3>
            <ul className="mt-4 space-y-2">
              {[
                { href: "/programs", label: "Programs" },
                { href: "/videos", label: "Videos" },
                { href: "/privacy", label: "Privacy Policy" },
                { href: "/terms", label: "Terms of Service" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/70 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Contact Us */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white/80">Contact Us</h3>
            <ul className="mt-4 space-y-3 text-sm text-white/80">
              <li>
                <a href="mailto:schoolofsatoshi016@gmail.com" className="hover:text-white transition-colors">
                  schoolofsatoshi016@gmail.com
                </a>
              </li>
              <li>
                <span>Kampala, Uganda</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider below columns */}
        <div className="mt-10 border-t border-white/10" />

        {/* Social icons below */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <p className="text-sm text-white/85">Totally free content here 👉</p>
              {socialLinks.map((social, index) => (
                <Link 
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow us on ${social.label}`}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-orange-500 text-black hover:bg-orange-600 transition-colors"
                >
              {social.icon === 'tiktok' ? (
                <SiTiktok size={20} color="currentColor" />
              ) : (
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d={social.icon as string} />
                  </svg>
              )}
                </Link>
              ))}
            </div>
            
          {/* Divider and copyright */}
          <div className="mt-8 border-t border-white/10 pt-6">
            <p className="text-xs sm:text-sm text-white/60">&copy; {new Date().getFullYear()} School of Satoshi. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer