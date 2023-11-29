import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
// import themeGetter from "@/utilities/helpers/themeGetter";

export const metadata: Metadata = {
  title: 'Dradha',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
    // const theme = themeGetter();


    return (
        <html lang="en">
            <body className={inter.className}>
                {children}
            </body>
        </html>
  )
}