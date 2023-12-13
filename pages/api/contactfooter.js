import nodemailer from 'nodemailer';
import { unstable_noStore as noStore } from 'next/cache';
export default function (req, res) {
  require('dotenv').config()
  noStore();
  const name = "NextDesignProduction@gmail.com";
  const pw = "lykv zqrt szqz hmxr";

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
    text: req.body.email + " | נשלח מ: " ,
    html: `<div>${req.body.email}</div><p>נשלח מ:
    רוצה לקבל התראות (אימייל פוטר), </p>`
  }
  const mailDataReply = {
    from: 'nextdesignproduction@gmail.com',
    to: `${req.body.email}`,
    subject: `שלום  אנו שמחים שיצרת עמנו`,
    text: "נקסט דיזיין" ,
    html: `.היי ${req.body.email}, תודה שפנית אלינו, 
    קיבלנו את בקשתך להתראות, נשלח לך בהקדם האפשרי
    
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
