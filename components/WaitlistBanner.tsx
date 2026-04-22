"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Bitcoin, ArrowRight } from "lucide-react";
import Link from "next/link";

const STORAGE_KEY = "cohort7-banner-dismissed";

export default function WaitlistBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const dismissed = sessionStorage.getItem(STORAGE_KEY);
    if (!dismissed) setVisible(true);
  }, []);

  const dismiss = () => {
    sessionStorage.setItem(STORAGE_KEY, "true");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="w-full bg-primary text-primary-foreground overflow-hidden"
        >
          {/* Subtle glow blobs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -left-10 top-1/2 -translate-y-1/2 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute -right-10 top-1/2 -translate-y-1/2 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 py-2.5 flex items-center justify-between gap-4">
            {/* Icon + text */}
            <div className="flex items-center gap-2.5 min-w-0">
              <Bitcoin className="w-4 h-4 shrink-0 opacity-90 animate-float" />
              <p className="text-sm font-medium font-sans leading-snug">
                <span className="font-heading font-bold">Cohort 7</span>
                {" "}is coming —{" "}
                <span className="hidden sm:inline">join the waitlist and be first in line!</span>
                <span className="sm:hidden">join the waitlist!</span>
              </p>
            </div>

            {/* CTA + close */}
            <div className="flex items-center gap-2 shrink-0">
              <Link
                href="https://forms.gle/CoFNrhA4Pxugsa7v9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 bg-white text-primary text-xs font-bold px-3.5 py-1.5 rounded-full shadow hover:bg-white/90 hover:-translate-y-0.5 transition-all duration-200 whitespace-nowrap"
              >
                Join Waitlist
                <ArrowRight className="w-3 h-3" />
              </Link>

              <button
                onClick={dismiss}
                aria-label="Dismiss banner"
                className="p-1 rounded-full hover:bg-white/20 transition-colors duration-200"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
