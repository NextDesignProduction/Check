"use client"
import Navbar from '@/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Welcome from '@/components/Welcome'
import Projects from '@/components/Projects'
import Deal from '@/components/Deal'
import Footer from '@/components/Footer'
import Contact from '@/components/Contact'
import About from '@/components/About'
import Intro from '@/components/Intro'
import IntroProject from '@/components/IntroProject'
import Red from '@/components/Red'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'נקסט דיזיין - בניית אתרים',
  description: 'אתר לבניית אתרים',
  icons:{
    icon:"/color_black.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="he">
      <body id="home" className='BGIMAGE'>
        <div className='flex flexCenter'><Intro/></div>
        <div className='flex flexCenter'><Navbar /></div>
        <div className='flex flexCenter'><Welcome /></div>
        <div className='flex flexCenter bg-white'><About/></div>
        <div className='flex flexCenter'><IntroProject/></div>
        <div className='flexCenter hidden lg:flex'><Projects/></div>
        <div className='hidden md:flex'><Red/></div>
        <Deal/>
        {children}
        <Contact/>
        <Footer/>
      </body>
    </html>
  )
}
