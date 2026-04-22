// import type React from "react"
// import { Inter } from "next/font/google"
// import { ThemeProvider } from "@/components/theme-provider"
// import Header from "@/components/header"
// import Footer from "@/components/footer"
// import "./globals.css"

// const inter = Inter({ subsets: ["latin"] })

// export const metadata = {
//   title: "School of Satoshi - Bitcoin Education",
//   description:
//     "Empowering the next generation of Bitcoin innovators through world-class education and hands-on learning.",
//   //generator: 'v0.dev'
// }

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>
//         <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
//           <Header />
//           {children}
//           <Footer />
//         </ThemeProvider>
//       </body>
//     </html>
//   )
// }

import type React from "react"
import { inter, poppins } from "@/lib/fonts"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import WaitlistBanner from "@/components/WaitlistBanner"
import TopBarSpacer from "@/components/TopBarSpacer"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`} suppressHydrationWarning>
      <body className={`${inter.className} antialiased`} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {/* Fixed top bar: banner stacked above header */}
          <div id="top-bar" className="fixed top-0 left-0 right-0 z-50 flex flex-col">
            <WaitlistBanner />
            <Header />
          </div>
          {/* Spacer that matches the top bar height so content isn't hidden behind it */}
          <TopBarSpacer />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
