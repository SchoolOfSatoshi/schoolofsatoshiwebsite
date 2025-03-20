import Link from "next/link"
import { Bitcoin, Facebook, Github, Instagram, Linkedin, Twitter } from "lucide-react"
import { FC } from 'react'
import Image from 'next/image';

const Footer: FC = () => {
  return (
    <footer className="w-full border-t bg-background ">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-2">
            <Link href="/" className="flex items-center gap-2">
              {/* <Bitcoin className="h-6 w-6 text-orange-500" /> */}
              <Image src = "/assets/images/logo.png" alt= "logo" height={200} width={200}/>
            </Link>
            <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
              Empowering the next generation of Bitcoin innovators through world-class education.
            </p>
            {/* <div className="flex gap-4 mt-4">
              <Link href="#" className="text-gray-500 hover:text-orange-500">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-orange-500">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-orange-500">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-orange-500">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-orange-500">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
            </div> */}
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-gray-500 hover:text-orange-500 dark:text-gray-400">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-gray-500 hover:text-orange-500 dark:text-gray-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-sm text-gray-500 hover:text-orange-500 dark:text-gray-400">
                  Programs
                </Link>
              </li>
              <li>
                <Link href="/cohorts" className="text-sm text-gray-500 hover:text-orange-500 dark:text-gray-400">
                  Previous Cohorts
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-sm text-gray-500 hover:text-orange-500 dark:text-gray-400">
                  Team
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/blog" className="text-sm text-gray-500 hover:text-orange-500 dark:text-gray-400">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-sm text-gray-500 hover:text-orange-500 dark:text-gray-400">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-sm text-gray-500 hover:text-orange-500 dark:text-gray-400">
                  Learning Resources
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-sm text-gray-500 hover:text-orange-500 dark:text-gray-400">
                  Events
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4">Contact</h3>
            <ul className="space-y-2">
              {/* <li className="text-sm text-gray-500 dark:text-gray-400">123 Bitcoin Street</li>
              <li className="text-sm text-gray-500 dark:text-gray-400">San Francisco, CA 94103</li> */}
              <li className="text-sm text-gray-500 dark:text-gray-400">schoolofsatoshi016@gmail.com</li>
              {/* <li className="text-sm text-gray-500 dark:text-gray-400">+256 726489371</li> */}
            </ul>
            <p className=" py-5 font-bold text-xl ">Follow Us</p>
            <div className="flex gap-4 mt-4">
              <Link href="https://x.com/schoolOfSatoshi" className="text-gray-500 hover:text-orange-500">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-orange-500">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-orange-500">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-orange-500">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-orange-500">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center border-t pt-8 mt-8">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} School of Satoshi. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="/privacy" className="text-xs text-gray-500 hover:text-orange-500 dark:text-gray-400">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-gray-500 hover:text-orange-500 dark:text-gray-400">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-xs text-gray-500 hover:text-orange-500 dark:text-gray-400">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

