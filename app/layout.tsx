import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Nav from "@/components/nav/nav"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Prime Shine Cleaning",
  description: "Professional Window Cleaning Services in Tupelo MS",
  keywords: [
    "window cleaning",
    "pressure washing",
    "tupelo ms",
    "residential cleaning",
    "commercial cleaning",
    "cleaning services",
    "tupelo ms cleaning",
    "tupelo ms window cleaning",
    "tupelo ms pressure washing",
    "tupelo ms residential cleaning",
    "tupelo ms commercial cleaning",
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          forcedTheme="light"
          disableTransitionOnChange
        >
          <Nav />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
