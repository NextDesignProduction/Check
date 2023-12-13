'use client';
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useState } from 'react'
const Footer = () => {

  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e:any) => {
    e.preventDefault()
    console.log('Sending')
    let data = {
      email
    }
    console.log(data)
    
    fetch('/api/contactfooter', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((res) => {
      console.log('Response received')
      if (res.status === 200) {
        console.log('Response succeeded!')
        setSubmitted(true)
        setEmail('')
      }
    })
    const handleTouchEvent = (e:any) => {
      e.preventDefault()
      console.log('Sending')
      let data = {
        email
      }
      console.log(data)
      
      fetch('/api/contactfooter', {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }).then((res) => {
        console.log('Response received')
        if (res.status === 200) {
          console.log('Response succeeded!')
          setSubmitted(true)
          setEmail('')
        }
      })
    }
  }
  function handleTouchEvent(e: React.TouchEvent<HTMLButtonElement>) {
    throw new Error("Function not implemented.");
  }

  return (
    <footer dir="rtl" className="w-full h-auto bg-black flex flex-col">
      <div className="flex w-full h-auto flex-row justify-around p-4 md:p-0 md:pt-3 lg:">
        <div className="w-2/4 md:w-1/4 2xl:w-[30%] flex flex-col gap-8">
          <div className="flex flex-row"><h1 className="text-xl md:text-4xl"> נקסט דיזיין</h1>
            <Image src={"/footer/NextDesign_White_Footer.png"} width={70} height={70} alt="בניית אתר" />
          </div>
          <p className="text-sm md:text-base md:w-[70%]">הלקוח נמצא בלב המודל העסקי הייחודי שלנו,<br /> הכולל עיצוב.</p>
          <div className="flex flex-row">
            <div className="flex flex-row lg:flex-col xl:flex-row gap-2 lg:gap-4">
              <div className="flex flex-col gap-2 lg:gap-4 lg:flex-row">
                <Image src={"/footer/Payment Method/ApplePay.png"} width={50} height={50} alt="אתרים" />
                <Image src={"/footer/Payment Method/Bitpay.png"} width={50} height={50} alt="אתרים" />
                <Image src={"/footer/Payment Method/Discover.png"} width={50} height={50} alt="אתרים" /></div>
              <div className="flex flex-col gap-2 lg:gap-4 lg:flex-row">
                <Image src={"/footer/Payment Method/PayPal.png"} width={50} height={50} alt="אתרים" />
                <Image src={"/footer/Payment Method/GooglePay.png"} width={50} height={50} alt="אתרים" />
                <Image src={"/footer/Payment Method/Visa.png"} width={50} height={50} alt="אתרים" /></div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5 w-[20%]">
          <h2 className="text-base md:text-xl">לינקים</h2>
          <Link href={"#home"} className="text-white/50 hover:text-white transition-all text-sm md:text-lg duration-150 ease-linear ">דף הבית</Link>
          <Link href={"#about"} className="text-white/50 hover:text-white transition-all text-sm md:text-lg duration-150 ease-linear ">קצת עלינו</Link>
          <Link href={"#projects"} className="text-white/50 hover:text-white transition-all text-sm md:text-lg duration-150 ease-linear ">העיצובים שלנו</Link>
          <Link href={"#deals"} className="text-white/50 hover:text-white transition-all text-sm md:text-lg duration-150 ease-linear ">מסלולים</Link>
          <Link href={"#contact"} className="text-white/50 hover:text-white transition-all text-sm md:text-lg duration-150 ease-linear ">יצירת קשר</Link>
        </div>
        <div className="hidden lg:flex w-[5%] flex-col gap-5">
          <h2 className="text-base md:text-xl">משהו אחר</h2>
          <Link href={"#home"} className="text-white/50  hover:text-white transition-all text-sm md:text-lg duration-150 ease-linear  ">לשנות</Link>
          <Link href={"#about"} className="text-white/50 hover:text-white transition-all text-sm md:text-lg duration-150 ease-linear ">לשנות</Link>
          <Link href={"#projects"} className="text-white/50 hover:text-white transition-all text-sm md:text-lg duration-150 ease-linear ">לשנות</Link>
          <Link href={"#deals"} className="text-white/50 hover:text-white transition-all text-sm md:text-lg duration-150 ease-linear ">לשנות</Link>
          <Link href={"#contact"} className="text-white/50 hover:text-white transition-all text-sm md:text-lg duration-150 ease-linear ">לשנות</Link>
        </div>
        <form onSubmit={handleSubmit} className="w-1/4 md:w-2/5 hidden md:flex flex-col md:gap-4 xl:gap-6 2xl:gap-6 2xl:w-[30%]">
          <h2 className="text-md md:text-xl lg:self-center">התראות</h2>
          <p className="lg:w-[70%] xl:w-[45%] lg:self-center">תהיו הראשונים לדעת על הסביבות החדשניות שאנו עובדים איתם ועל היתרונות שלהם באופן מפורט!</p>
          <div className="flex flex-row gap-1 lg:self-center">
            <label htmlFor="email"></label>
            <input type="email" onChange={(e)=>{setEmail(e.target.value)}} id="email" name="email"  autoComplete="off" minLength={10} maxLength={40} required  className="border-b border-white bg-black placeholder:text-lg h-8" placeholder="אמייל:" >
            </input>
            <button type="submit" onClick={(e)=>{handleSubmit(e)}}><svg xmlns="http://www.w3.org/2000/svg" width="50" height="32" viewBox="0 0 50 32" fill="none">
                <path id='p' fillRule="evenodd" clipRule="evenodd" d="M49.7425 1.05662C49.9057 0.942955 50 0.775136 50 0.59825V0.59825C50 0.267845 49.6775 0 49.2796 0H1.11829C0.500675 0 0 0.415799 0 0.928713V0.928713C0 1.20481 0.147918 1.46659 0.403623 1.64303L23.8822 17.8439C24.3939 18.197 25.1363 18.1955 25.646 17.8405L49.7425 1.05662ZM2.2556 6.38799C1.35892 5.76925 0 6.29883 0 7.26701V30.8571C0 31.4883 0.616121 32 1.37615 32H48.6239C49.3839 32 50 31.4883 50 30.8571V6.80785C50 5.8372 48.635 5.30845 47.7395 5.93221L25.8024 21.2121L25.6557 21.3142C25.146 21.6692 24.4035 21.6707 23.8919 21.3176L23.7446 21.216L2.2556 6.38799Z" fill="#700124" />
              </svg></button>
          </div>
        </form>
      </div>
      <form onSubmit={handleSubmit} className="flex md:hidden justify-center">
        <div className="w-full p-6 ">
          <h2 className="text-lg md:text-xl">התראות</h2>
          <p className="text-sm">תהיו הראשונים לדעת על הסביבות החדשניות שאנו עובדים איתם ועל היתרונות שלהם באופן מפורט</p>
          <div className="flex flex-row gap-1">
            <label htmlFor="email"></label>
            <input type="email" onChange={(e)=>{setEmail(e.target.value)}} id="email" name="email" autoComplete="off" minLength={10} maxLength={40} className="border-b border-white bg-black placeholder:text-lg h-8 w-[80%]" placeholder="אמייל:"  required>
            </input>
        <button type="submit"
        onClick={(e)=>{handleSubmit(e)}}
        onTouchStart={(e)=>{{handleTouchEvent(e)}}}
          ><svg id='p' xmlns="http://www.w3.org/2000/svg" width="50" height="32" viewBox="0 0 50 32" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M49.7425 1.05662C49.9057 0.942955 50 0.775136 50 0.59825V0.59825C50 0.267845 49.6775 0 49.2796 0H1.11829C0.500675 0 0 0.415799 0 0.928713V0.928713C0 1.20481 0.147918 1.46659 0.403623 1.64303L23.8822 17.8439C24.3939 18.197 25.1363 18.1955 25.646 17.8405L49.7425 1.05662ZM2.2556 6.38799C1.35892 5.76925 0 6.29883 0 7.26701V30.8571C0 31.4883 0.616121 32 1.37615 32H48.6239C49.3839 32 50 31.4883 50 30.8571V6.80785C50 5.8372 48.635 5.30845 47.7395 5.93221L25.8024 21.2121L25.6557 21.3142C25.146 21.6692 24.4035 21.6707 23.8919 21.3176L23.7446 21.216L2.2556 6.38799Z" fill="#700124" />
          </svg></button>
          </div>
        </div>
      </form>
      <div className="w-full text-center">
        © כל הזכויות שמורות לנקסט דיזיין
      </div>

    </footer>
  );
};

export default Footer;
