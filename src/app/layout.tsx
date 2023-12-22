import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NextAuthProvider from '@/app/nextauthprovider'
const inter = Inter({ subsets: ['latin'] })
import themeGetter from "@/utilities/helpers/themeGetter";
import './globals.css'

export const metadata: Metadata = {
  title: 'Dradha',
  description: 'Dradha 2023.',
}

export default function RootLayout({
  children,
  Session
}: {
  children: React.ReactNode
  Session: any
}) {
    const theme = themeGetter();
    return (
        <html lang="en" className={theme}>
            <body className={inter.className}>
                <NextAuthProvider session={Session}>
                    {children}
                </NextAuthProvider>
            </body>
        </html>
  )
}