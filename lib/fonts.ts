import localFont from "next/font/local"

export const inter = localFont({
  src: [
    {
      path: "../public/fonts/Gilroy-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-inter",
})

export const poppins = localFont({
  src: [
    {
      path: "../public/fonts/Gilroy-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-poppins",
})
