'use client'
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { NavLinks } from "../constant";
const Navbar = () => {
  function hamburger() {
    const burger = document.querySelector('#burger');
    const menu = document.querySelector('#menu');
     burger?.addEventListener('click', () =>{
      menu?.classList.toggle('translate-x-full');
     }) 
     }
  
  return (
    <>
      <nav
        id="section1"
        className="w-[100%] nav h-[120vh] fixed m-0 top-0 inline-flex justify-around z-30 bg-white items-center border-b-[1px] border-black/50">
        <div className="w-[100%] md:w-[100%] 2xl:w-[90%] flex items-center md:gap-10 lg:gap-6">
          <div className="flex flex-auto  md:ml-20 lg:ml-8 xl:ml-10">
            <ul className="hidden md:flex flex-row w-auto cursor-pointer gap-4">
              <li className="hover-navbuttonWhats grayscale-0 hover:animate-bounce transition">
                <Link href="https://wa.me/0543503006"><Image
                  src="/icon/whatsapp.png"
                  width={50}
                  height={50}
                  alt="Whatsapp"
                  className=""
                /></Link>
              </li>
              <li className="hover-navbuttonFB grayscale-0 hover:animate-bounce transition">
              <Link href=""><Image src="/icon/facebook.png" width={50} height={50} alt="FB" className=""/></Link>
              </li>
              <li className="hover-navbuttonIG grayscale-0 hover:animate-bounce transition">
              <Link href=""><Image src="/icon/instagram.png" width={50} height={50} alt="IG" className=""  /></Link>
              </li>
              <li className="hover-navbuttonIG grayscale-0 hover:animate-bounce transition">
              <Link href="https://www.tiktok.com/@nextdesignwebs"><Image src="/icon/tiktok.png" width={40} height={40} alt="IG" className=""/></Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-auto md:flex lg:flex xl:flex NavLinkC">
            <span className="flex gap-12 lg:gap-6  2xl:gap-10 ">
              {NavLinks.map((link) => (
                <Link
                  className="hover-navbutton hidden md:hidden lg:flex text-right lg:text-[17px] xl:text-[18px] font-medium  2xl:text-[18px] font-sans"
                  scroll={true}
                  href={link.href}
                  key={link.key}
                >
                  {link.text}
                </Link>
              ))}
            </span>
          </div>
          <div className="flex justify-around items-center w-full md:w-auto">
          <div className="flex mr-6">
            <Link href="/">
              <Image
                className="hover:animate-bounce transition w-16 lg:w-[80px] 2xl:w-[90px] "
                src="/color_black.png"
                alt="Logo"
                width={130}
                height={100}
              />
            </Link>
          </div>
           
            <div className="md:hidden" > 
            <button onClick={hamburger} onTouchStart={hamburger} className="space-y-1" id='burger'>
              <div className="w-6 h-0.5 bg-black"></div>
              <div className="w-6 h-0.5 bg-black"></div>
              <div className="w-6 h-0.5 bg-black"></div>
            </button>
            <div className="translate-x-full bg-black/95 text-white text-right absolute flex flex-col right-0 top-[80px] h-screen w-3/4 p-10 text-2xl gap-10 transition-all duration-300" id="menu">
                <Link href={"#home"}>דף הבית</Link>
                <Link href={"#about"}>קצת עלינו</Link>
                <Link href={"#projects"}>העיצובים שלנו</Link>
                <Link href={"#deals"}>מסלולים</Link>
                <Link href={"#contact"}>יצירת קשר</Link>
            </div>
            </div>
          
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
