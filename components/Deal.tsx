"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";


const Deal = () => {
  function changeColor() {
    const color = document.querySelector('#textColor');



  }



  return (
    <section
      id="deals"
      className="text-black newFont flex h-[120vh] flex-col bg-white justify-start md:justify-start items-center w-full "
      dir="rtl"
    >
      <div className="w-3/4 md:w-[90%] md:p-2 xl:w-[60%] h-auto flex flex-col">
        <h1

          className="text-2xl md:text-4xl text-black font-sans mt-32 text-right">
          בחר את החבילה המתאימה לך
        </h1>
        <div className="flex-row flex gap-2 mt-5">
          <Image src='/deals/V.svg' alt="בניית אתרים" width={30} height={30} />
          <h2 className="text-lg md:text-2xl font-medium text-black/80 font-sans">בניית אתרים מעוצבים אישית</h2>
        </div>
        <div className="flex-row flex gap-2 mt-5">
          <Image src='/deals/V.svg' alt="בניית אתרים" width={30} height={30} />
          <h2 className="text-lg md:text-2xl text-black/80 font-medium font-sans">קידום אתרים אורגני במנועי החיפוש המובילים</h2>
        </div>
        <div className="flex-row flex gap-2 mt-5">
          <Image src='/deals/V.svg' alt="בניית אתרים" width={30} height={30} />
          <h2 className="text-lg md:text-2xl text-black/80 font-medium font-sans">התאמת האתר לכל הפלטפורמות</h2>
        </div>
        <div className="w-full h-full flex flex-row md:flex-row justify-center gap-2 md:gap-24 mt-10">

          {/* First rectangle div - NEHITA */}
          <div className="flex flex-col items-center text-center">
            <div>
              <button onClick={changeColor} id="textColor" className="bg-[#700124]/90 transition-all duration-700 cursor-pointer focus:bg-[#700124]  w-24 h-24 lg:w-36 lg:h-32 focus:rounded-xl">
                <p className="text-lg md:text-xl font-bold w-full h-full flexCenter flex-col text-black">דף <br />נחיתה</p>
                <div className="">
                    <div className="border-b border-black md:hidden pt-1"><p  className="transition-all duration-500 text-black w-full font-bold p-[1px]">מספר עמודים</p></div>
                  <p id="color1" className="transition-all duration-500 text-black w-full md:pt-4 " >1</p>
                    <div className="border-b border-black md:hidden"><p  className="transition-all duration-500 text-black w-full font-bold p-[1px]">מעצב מקצועי</p></div>

                  <p id="color1" className="transition-all duration-500 text-black w-full  md:pt-5 "  >כלול</p>
                    <div className="border-b border-black md:hidden pt-1"><p  className="transition-all duration-500 text-black w-full font-bold p-[1px]">קידום אורגני</p></div>

                  <p id="color1" className="transition-all duration-500 text-black w-full md:pt-5 "  >לא כלול</p>
                    <div className="border-b border-black md:hidden pt-1"><p  className="transition-all duration-500 text-black w-full font-bold p-[1px]">רפסונסיביות</p></div>

                  <p id="color1" className="transition-all duration-500 text-black w-full md:pt-4 "  >כלול</p>
                    <div className="border-b border-black md:hidden pt-1"><p  className="transition-all duration-500 text-black w-full font-bold p-[1px]">אבטחה</p></div>

                  <p id="color1" className="transition-all duration-500 text-black w-full md:pt-5 "  >ללא אבטחה</p>
                    <div className="border-b border-black md:hidden pt-1"><p  className="transition-all duration-500 text-black w-full font-bold p-[1px]">מחיר</p></div>

                  <p id="color1" className="transition-all duration-500 text-red-900 font-bold w-full text-lg md:pt-4"><span className="hidden">החל</span>  מ-700₪</p>
                </div>
              </button>

            </div>
          </div>
          {/* Second rectangle div - TADMIT */}
          <div className="flex flex-col items-center text-center">
            <div>
              <button onClick={changeColor} id="textColor" className="bg-[#700124]/90 transition-all duration-700 cursor-pointer focus:bg-[#700124]  w-24 h-24 lg:w-36 lg:h-32 focus:rounded-2xl">
                <p className="text-lg md:text-xl font-bold w-full h-full flexCenter flex-col text-black">אתר <br />תדמית</p>

                <div>
                    <div className="border-b border-black md:hidden pt-1"><p  className="transition-all duration-500 text-black w-full font-bold p-[1px]">מספר עמודים</p></div>
                  <p id="color1" className="transition-all duration-500 text-black w-full md:pt-4 ">4+</p>
                    <div className="border-b border-black md:hidden "><p className="transition-all duration-500 text-black w-full font-bold p-[1px]">מעצב מקצועי</p></div>

                  <p id="color1" className="transition-all duration-500 text-black w-full md:pt-5">כלול</p>
                    <div className="border-b border-black md:hidden pt-1"><p  className="transition-all duration-500 text-black w-full font-bold p-[1px]">קידום אורגני</p></div>

                  <p id="color1" className="transition-all duration-500 text-black w-full md:pt-5 ">כלול</p>
                    <div className="border-b border-black md:hidden  pt-1"><p className="transition-all duration-500 text-black w-full font-bold p-[1px]">רספונסיביות</p></div>

                  <p id="color1" className="transition-all duration-500 text-black w-full md:pt-4 ">כלול</p>
                    <div className="border-b border-black md:hidden pt-1 "><p  className="transition-all duration-500 text-black w-full font-bold p-[1px]">אבטחה</p></div>

                  <p id="color1" className="transition-all duration-500 text-black w-full md:pt-4" >מינימלי</p>
                    <div className="border-b border-black md:hidden pt-1 "><p  className="transition-all duration-500 text-black w-full font-bold p-[1px]">מחיר</p></div>

                  <p id="color1" className="transition-all duration-500 text-red-900 font-bold w-full  text-lg md:pt-5">מ-3000₪</p>
                </div>
              </button>
            </div>
          </div>
          {/* Third rectangle div - MEHIROT */}
          <div className="flex flex-col items-center text-center">
            <div>
              <button onClick={changeColor} id="textColor" className="bg-[#700124]/90 transition-all duration-700 cursor-pointer focus:bg-[#700124]  w-24 h-24 lg:w-36 lg:h-32 focus:rounded-2xl">
                <p className="text-lg md:text-xl font-bold w-full h-full flexCenter flex-col text-black">אתר <br />מכירות</p>

                <div className="">
                <div className="border-b border-black md:hidden pt-1"><p  className="transition-all duration-500 text-black w-full font-bold p-[1px]">מספר עמודים</p></div>
                  <p id="color1" className="transition-all duration-500 text-black w-full md:pt-4" >ללא הגבלה</p>
                  <div className="border-b border-black md:hidden"><p  className="transition-all duration-500 text-black w-full font-bold p-[1px] ">מעצב מקצועי</p></div>

                  <p id="color1" className="transition-all duration-500 text-black w-full md:pt-5"  >כלול</p>
                  <div className="border-b border-black md:hidden pt-1"><p  className="transition-all duration-500 text-black w-full font-bold p-[1px] ">קידום אורגני</p></div>

                  <p id="color1" className="transition-all duration-500 text-black w-full md:pt-5 " >כלול</p>
                  <div className="border-b border-black md:hidden pt-1"><p  className="transition-all duration-500 text-black w-full font-bold  p-[1px]">רספונסיביות</p></div>

                  <p id="color1" className="transition-all duration-500 text-black w-full md:pt-4 ">כלול</p>
                  <div className="border-b border-black md:hidden pt-1"><p className="transition-all duration-500 text-black w-full font-bold p-[1px] ">אבטחה</p></div>
                  <p id="color1" className="transition-all duration-500 text-black w-full md:pt-4"  >גבוהה מאוד</p>
                  <div className="border-b border-black md:hidden pt-1"><p className="transition-all duration-500 text-black w-full font-bold p-[1px] ">מחיר</p></div>

                  <p id="color1" className="transition-all duration-500 text-red-900 font-bold w-full  text-lg md:pt-5">מ-6000₪</p>
                </div>
              </button>
            </div>
          </div>

        </div>
        <div className="flex-row hidden md:flex">
          <div className="w-full flex flex-col">
            <div className="border-b border-black/40 w-[90%] pt-4"><p className="text-black font-semibold text-lg">מספר עמודים</p></div>
            <div className="border-b border-black/40 w-[90%]  pt-4"><p className="text-black font-semibold text-lg">מעצב מקצועי</p></div>
            <div className="border-b border-black/40 w-[90%]  pt-4"><p className="text-black font-semibold text-lg">קידום אורגני</p></div>
            <div className="border-b border-black/40 w-[90%]  pt-4"><p className="text-black font-semibold text-lg">רספונסיביות</p></div>
            <div className="border-b border-black/40 w-[90%]  pt-4"><p className="text-black font-semibold text-lg">אבטחה</p></div>
            <div className="border-b border-black/40 w-[90%]  pt-4"><p className="text-red-900 font-semibold text-lg">מחיר</p></div>

          </div>
        </div>

      </div>


    </section>
  );
};

export default Deal;
