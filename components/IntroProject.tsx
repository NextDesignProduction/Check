"use client";
import React, { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const IntroProject = () => {

  function loadMore() {
    const shown = document.querySelector('#more');
      shown?.classList.remove("hidden");
      shown?.classList.add("flex");
  }
  useEffect(() => {
    AOS.init({
         duration: 1500,
         once: false,
       })
  }, [])

  return (
    <>
      <section
        id="projects"
        className="flex flex-col w-full h-auto flexCenter bg-[#700124] relative z-50"
        dir="rtl"
      >
        {/* First Div */}
        <div className="w-full h-[250px] md:h-[500px] flex">
          <Image className="grayscale-[73%] blur-[0px] md:blur-[1px]" src='/projects/project2.jpg' width={2500} height={500}   alt="חברה לבניית אתרים"/>
          <h1 className="w-full h-[150px] text-center self-center md:text-start md:h-[450px] text-6xl md:text-7xl absolute md:p-24 textshadow font-bold text-[#700124]">העיצובים המובילים שלנו</h1>
          </div>
          {/* End First Div */}
          {/* Second Div */}
          <div 
          className="hidden md:flex w-full justify-end absolute top-[250px]">
          <div data-aos="fade-right" className="flex flex-row w-[60%] lg:w-[80%] xl:w-[65%] h-[350px] justify-center gap-10 bg-[#700124] shadow-2xl shadow-black/70 rounded-r-xl">
          <div className="flex flex-col w-2/4 md:w-3/4 lg:w-2/4 p-10 md:gap-3 gap-5 lg:gap-5">
            <h2 className="flex text-5xl md:text-xl">הפרוייקטים שלנו מגובים על ידי מפתחי האינטרנט והתוכנה המובילים בשוק</h2>
            <p className="flex text-lg md:text-base text-[#FFFFFFB3] ">התחלנו את המסע שלנו עם חזון להעצים את כל<br/> העסקים עם טכנולוגיה חדשנית ופתרונות דיגיטליים,<br/> המועברים על ידי צוות מפתחי האינטרנט המנוסה ביותר.</p>
            <div className="flex flex-row gap-5 justify-center items-center">
           <Link href={"#about"}><button 
            
            className="p-2 text-lg bg-white border-[2px] text-[#700124] hover:bg-[#700124]  hover:text-white hover:border-2 hover:border-white/50 transition-all duration-300 ease-linear">תקראו עוד</button></Link>
            <Link href={"#contact"}><button 
            
            className="p-2 text-lg border-[2px] border-white/50 hover:bg-white hover:text-[#700124] transition-all duration-300 ease-linear">צרו איתנו קשר</button></Link>
            </div>
            </div>
          <div className="flex w-2/4 p-10 md:hidden lg:flex lg:w-1/3 xl:w-2/4"><Image src={"/projects/BACKEND.jpg"} className="rounded-3xl opacity-90" width={500}  height={500} alt="אתר לבניית אתרים"/></div>
          </div>
          </div>
          {/* End Second Div */}
      </section>
    </>
  );
};

export default IntroProject;
