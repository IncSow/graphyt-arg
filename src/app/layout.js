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

import localFont from "next/font/local";
import MobileBlocker from "@/components/MobileBlocker";
import { ModalProvider } from "@/components/ModalProvider";

const terminalGrotesque = localFont({
  src: "../../fonts/terminal-grotesque.ttf",
  variable: "--font-terminal-grotesque",
  display: "swap",
});

export const metadata = {
  title: "Graphy-t",
  description:
    'Tu savais que si tu réarrange les lettres de "Graphy-t", ça fait "grave autiste"?',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={terminalGrotesque.variable}>
      <body>
        <ModalProvider>
          <MobileBlocker>{children}</MobileBlocker>
        </ModalProvider>
      </body>
    </html>
  );
}
