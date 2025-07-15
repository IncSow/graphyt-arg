import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import localFont from 'next/font/local'
import MobileBlocker from "@/components/MobileBlocker";

const terminalGrotesque = localFont({
  src: '../../fonts/terminal-grotesque.ttf', // adjust the path if needed
  variable: '--font-terminal-grotesque',
  display: 'swap',
})

export const metadata = {
  title: 'Your App',
  description: 'With Terminal Grotesque font',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={terminalGrotesque.variable}>
      
      <body>
        <MobileBlocker>
         {children}
        </MobileBlocker>

        </body>
    </html>
  )
}
