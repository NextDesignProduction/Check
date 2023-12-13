import nodemailer from 'nodemailer';
import { unstable_noStore as noStore } from 'next/cache';
export default function (req, res) {
  require('dotenv').config()
  noStore();
 const name = procces.env.NEXT_PUBLIC_G_NAME;
 const pw = procces.env.NEXT_PUBLIC_G_PW;

  const nodemailer = require('nodemailer')
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: name,
      pass: pw,
    },
    secure: true,
  })
  const mailData = {
    from: 'nextdesignproduction@gmail.com',
    to: 'nextdesignproduction@gmail.com',
    subject: `שם הלקוח/הפונה: ${req.body.name}`,
    text: req.body.message +  req.body.email + " | נשלח מ: " ,
    html: `<div>${req.body.message}</div><p>נשלח מ:
    ${req.body.email}, ${req.body.pnumber}</p>`
  }
  const mailDataReply = {
    from: 'nextdesignproduction@gmail.com',
    to: `${req.body.email}`,
    subject: `שלום ${req.body.name} אנו שמחים שיצרת עמנו קשר`,
    text: "נקסט דיזיין" ,
    html: `.היי ${req.body.name}, תודה שפנית אלינו, 
    קיבלנו את פנייתך, ניצור איתך קשר בהקדם האפשרי
    
    .נקסט דיזיין`
  }
  transporter.sendMail(mailDataReply, function (err, info) {
    if(err)
      console.log(err)
    else
      console.log(info)
  })
  transporter.sendMail(mailData, function (err, info) {
    if(err)
      console.log(err)
    else
      console.log(info)
  })
  res.status(200)
}