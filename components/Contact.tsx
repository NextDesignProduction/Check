"use client";
import Image from "next/image";
import React from "react";
import { useState } from 'react'
const Contact = () => {

const [name, setName] = useState('')
const [email, setEmail] = useState('')
const [pnumber, setPnumber] = useState('')
const [message, setMessage] = useState('')
const [submitted, setSubmitted] = useState(false)

const handleSubmit = (e:any) => {
  e.preventDefault()
  if(name != "" && email != "" && pnumber != "" && message != "")
  {
  console.log('Sending')
  let data = {
    name,
    email,
    pnumber,
    message
  }
  console.log(data)
  fetch('/api/contact', {
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
      setName('')
      setEmail('')
      setPnumber('')
      setMessage('')
    }
  })
}else{
  
  setName('You must fill this line to get us in contact')
}

const handleTouchEvent = (e: any) => {
  e.preventDefault();
  if(name != "" && email != "" && pnumber != "" && message != "")
  {
  console.log('Sending')
  let data = {
    name,
    email,
    pnumber,
    message
  }
  console.log(data)
  fetch('/api/contact', {
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
      setName('')
      setEmail('')
      setPnumber('')
      setMessage('')
    }
  })
}else{
  
  setName('You must fill this line to get us in contact')
}
}
}

  function handleTouchEvent(e: React.TouchEvent<HTMLButtonElement>) {
    throw new Error("Function not implemented.");
  }

  return (
    <section
      id="contact"
      className=" text-black h-auto w-full flex md:items-start bg-[#700124]"
      dir="rtl"
    >
      <div className="w-full h-full text-right justify-center flex p-10 md:items-start xl:mt-28 3xl:mt-28 md:mt-2 xl:mb-20">
        <div className="lg:w-[80%] xl:w-[60%] w-[100%] h-auto bg-white shadow-2xl shadow-black/80 lg:rounded-lg ">
          <div className="w-full h-full flex flex-col-reverse md:flex-row">
            <div className="relative w-full md:w-2/4 border-none md:border-l flexCenter flex-col md:mt-24 md:mb-24">
              <h1 className="2xl:ml-12 font-sans text-[#700124]">יצירת קשר</h1>
              <form
                onSubmit={handleSubmit}
                className="md:mt-5 flex-col w-2/4 flex justify-center items-center"
              >
                <ul>
                  <li className="pt-2 flex justify-center items-center">
                    <label htmlFor="name"></label>
                    <input
                      type="text"
                      onChange={(e)=>{setName(e.target.value)}}
                      minLength={2}
                      maxLength={150}
                      id="name"
                      name="name"
                      autoComplete="off"
                      placeholder="שם:"
                      className="bg-black/10 border text-black border-black/20 text-right w-[90%] lg:w-3/4 xl:w-full placeholder:text-black font-sans rounded-lg mt-4"
                      required
                    />
                  </li>
                  <li className="pt-2 flex justify-center items-center">
                    <label htmlFor="email"></label>
                    <input
                      type="email"
                      onChange={(e)=>{setEmail(e.target.value)}}
                      id="email"
                      name="email"
                      autoComplete="off"
                      placeholder="אימייל:"
                      className="bg-black/10 border text-black border-black/20 text-right w-[90%] lg:w-3/4 xl:w-full placeholder:text-black font-sans rounded-lg mt-4"
                      required
                    />
                  </li>
                  <li className="pt-2 flex justify-center items-center">
                    <label htmlFor="pnumber"></label>
                    <input
                      type="text"
                      onChange={(e)=>{setPnumber(e.target.value)}}
                      minLength={5}
                      id="pnumber"
                      name="pnumber"
                      autoComplete="off"
                      placeholder="מספר טלפון:"
                      className="bg-black/10 border text-black border-black/20 text-right w-[90%] lg:w-3/4 xl:w-full placeholder:text-black font-sans rounded-lg mt-4"
                      required
                    />
                  </li>
                </ul>
                <ul>
                  <label htmlFor="message"></label>
                  <li className="pt-2 flex justify-center items-center">
                    <textarea
                      rows={4}
                      onChange={(e)=>{setMessage(e.target.value)}}
                      minLength={10}
                      maxLength={500}
                      placeholder="ספר לנו על עסק שלך..."
                      className="w-[90%] bg-black/10 border text-black border-black/20 text-right  lg:w-3/4 xl:w-full pr-6 placeholder:text-black font-sans rounded-lg mt-4"
                      name="message"
                      id="message"
                    />
                  </li>
                </ul>
                <button
                  type="submit"
                  onClick={(e)=>{handleSubmit(e)}}
                  onTouchStart={(e)=>{handleTouchEvent(e)}}
                  className="rounded-3xl p-1 bg-[#700124] border-black/30 border w-[180px] h-[40px] font-sans font-bold mt-5 mb-5 hover:opacity-90 transition-all flex items-center gap-2 text-white justify-end"
                >
                  <p id="p">שלח</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                  >
                    <circle cx="15" cy="15" r="15" fill="white" />
                    <rect
                      x="6.00037"
                      y="14.4"
                      width="16.8"
                      height="1.5"
                      rx="0.75"
                      fill="#700124"
                    />
                    <rect
                      x="15.1461"
                      y="7.64433"
                      width="11.138"
                      height="1.5"
                      rx="0.75"
                      transform="rotate(41 15.1461 7.64433)"
                      fill="#700124"
                    />
                    <rect
                      x="14.1005"
                      y="21.4072"
                      width="11.138"
                      height="1.5"
                      rx="0.75"
                      transform="rotate(-41 14.1005 21.4072)"
                      fill="#700124"
                    />
                  </svg>
                </button>
              </form>
            </div>
            <div className="w-full md:w-2/4 bg-black/10 flex justify-center items-center">
              <Image
                src="/Contact/man2.png"
                width={250}
                height={250}
                alt="אתר לבניית אתרים"
                className="md:w-[230px] lg:w-[350px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
