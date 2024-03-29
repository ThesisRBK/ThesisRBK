import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from './Components/Header'
import Footer from './Components/Footer'

import { DataProvider } from "./context"
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <DataProvider>
      <body className={inter.className}>
        <Header/>
        
        {children}
        
       <Footer/> 
        </body>
        </DataProvider>
    </html>
  )
}
