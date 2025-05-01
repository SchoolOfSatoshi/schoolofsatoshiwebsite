// components/ThemeToggle.tsx


'use client'

import { useState, useEffect, useRef } from 'react'
import { useTheme } from 'next-themes'
import { Moon, Sun, Computer, ChevronDownIcon } from 'lucide-react'

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [open, setOpen] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    setMounted(true)

    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !(dropdownRef.current as any).contains(event.target)
      ) {
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  if (!mounted) return null

  const currentIcon = {
    light: <Sun className="h-5 w-5" />,
    dark: <Moon className="h-5 w-5" />,
    system: <Computer className="h-5 w-5" />,
  }

  const activeTheme = theme === 'system' ? resolvedTheme : theme

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 rounded-md border p-2 hover:bg-gray-100 dark:hover:bg-gray-700"
      >
        {currentIcon[theme as keyof typeof currentIcon] ||
          currentIcon.system}
        <ChevronDownIcon className="h-4 w-4" />
      </button>

      {open && (
        <div className="absolute right-0 z-10 mt-2 w-36 origin-top-right rounded-md bg-white dark:bg-gray-800 shadow-lg ring-1 ring-black/5">
          <div className="py-1">
            <button
              onClick={() => {
                setTheme('light')
                setOpen(false)
              }}
              className="flex items-center w-full px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <Sun className="h-4 w-4 mr-2" />
              Light
            </button>
            <button
              onClick={() => {
                setTheme('dark')
                setOpen(false)
              }}
              className="flex items-center w-full px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <Moon className="h-4 w-4 mr-2" />
              Dark
            </button>
            <button
              onClick={() => {
                setTheme('system')
                setOpen(false)
              }}
              className="flex items-center w-full px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <Computer className="h-4 w-4 mr-2" />
              System
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

