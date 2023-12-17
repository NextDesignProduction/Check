'use client'
import Image from "next/image";
import React from "react";
import Link from "next/link";
import {motion} from "framer-motion"

const Welcome = () => {
  
  return (
    <>
        <main  id="main" className="flex justify-start h-[110vh] w-full flex-col mx-auto bg-gradient-to-b from-yellow-200/90 to-[#700124] backdrop-blur-3xl ">
        <div className="h-[100px] w-full"></div>
          <div className="flex justify-around h-auto md:h-[50%] flex-col w-full md:flex-row bg-white/10 backdrop-blur-md md:gap-10 shadow-lg shadow-black/10">
          <motion.div initial={{y:-300, opacity:0, scale:0}} transition={{delay:3.7, duration:0.5}} animate={{y:0, opacity:1, scale:1}} className="flexCenter ml-5 ">
            <Image src="/where_creativity.png" width={620} height={100} className="hidden md:flex" alt="אתר לבניית אתרים"/>
           
          
           </motion.div>
           <div className="w-[10%] h-[80%] md:h-[70%] self-center border-l border-r border-black text-center flexCenter flex ">
            <h1 className="hover:cursor-pointer text-[30px] hidden md:flex md:text-[30px] lg:text-[42px] 2xl:text-[54px] WelcomeH1 animate-pulse opacity-90 hover:scale-125 duration-300 transition-all">N<br/>E<br/>X<br/>T<br/></h1>
           </div>
           <div className="w-[full%] h-[80%] md:h-[70%] self-center md:hidden border-b border-t border-black text-center flexCenter flex ">
            <h1 className="hover:cursor-pointer hidden md:flex text-[30px] lg:hidden md:text-[30px] lg:text-[42px] 2xl:text-[54px] WelcomeH1 animate-pulse opacity-90 hover:scale-125 duration-300 transition-all">NEXT</h1>
           </div>
           <motion.div initial={{y:-300, opacity:0, scale:0}} transition={{delay:3.7, duration:0.5}} animate={{y:0, opacity:1, scale:1}} className="flexCenter">
             <Image
               src="/Devices.png"
               alt="welcome"
               width={1200}
               height={400}
               className="w-[90%] md:w-[620px] 2xl:w-[600px]"
             />
           </motion.div>

       </div>
       <div className="h-auto md:h-[28%] flex-col p-10 mt-4 flexCenter data gap-3">
        <motion.h1 initial={{y:40, opacity:0}} transition={{ duration:1, delay:4.3 }} animate={{y:0, opacity:1}} className="text-center text-xl md:text-2xl lg:text-3xl 2xl:text-5xl font-sans font-bold p-2 text-white ">נקסט דיזיין, בניית אתרים מותאמים לעסק שלך</motion.h1>
        <h2 className="w-[25%] loading-dots text-transparent whitespace-nowrap bg-white/40 mt-4 hidden xl:flex">בניית אתרים, עיצוב אתרים, בונה אתרים, אתר לעסק, בניית אתרים, בניית אתרים, בניית אתרים, אתר לעסק בזול, אתר לבניית אתרים, אתר, ,</h2>
        <motion.h2 initial={{y:40, opacity:0}} transition={{ duration:1, delay:4.6  }} animate={{y:0, opacity:1}} className="text-center text-base md:text-lg lg:text-xl 2xl:text-3xl font-sans md:font-serif p-2 ">בניית אתרים אישיים לעסקים עם עיצוב מותאם אישית, תהליך מקצועי, שירותי אחסון ותחזוקה</motion.h2>
        <motion.h3 initial={{y:40, opacity:0}} transition={{ duration:1, delay:4.8}} animate={{y:0, opacity:1}} className="text-center text-xl font-sans md:font-serif p-2">!וכמובן שהכל מותאם לכל המכשירים הדיגיטליים</motion.h3>
       <motion.div initial={{y:40, opacity:0}} transition={{ duration:1, delay:4.8}} animate={{y:0, opacity:1}}><Link href="#about" className="bg-transparent hover:scale-125 transition-all duration-700 md:hidden lg:flex">
            <Image src="/arrow.png" alt="ScrollArrow" width={50} height={50} className="animate-bounce hover:animate-none hidden md:flex"/>
          </Link>
          </motion.div>
        </div>
        <div className="w-full justify-center pt-10">
          <Link href={"#contact"} className="flex justify-center">
          <button className="flex lg:hidden p-4 text-lg border-[2px] border-white/50 hover:bg-white hover:text-[#700124] transition-all duration-300 ease-linear">צרו איתנו קשר</button>
          </Link>
          </div>

        </main>    
    </>
  );
};

export default Welcome;
