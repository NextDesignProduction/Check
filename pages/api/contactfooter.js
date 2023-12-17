
export default function (req, res) {
  require('dotenv').config();
  const nodemailer = require('nodemailer');
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: process.env.NEXT_PUBLIC_G_NAME,
      pass: process.env.NEXT_PUBLIC_G_PW,
    },
  });
    const mailData = {
      
    from: 'nextdesignproduction@gmail.com',
    to: 'nextdesignproduction@gmail.com',
    subject: `שם הלקוח/הפונה: ${req.body.name}`,
    text: req.body.email + " | נשלח מ: " ,
    html: `<div>${req.body.email}</div><p>נשלח מ:
    רוצה לקבל התראות (אימייל פוטר), </p>`
    };

    const mailDataReply = {
    from: 'nextdesignproduction@gmail.com',
    to: `${req.body.email}`,
    subject: `שלום  אנו שמחים שיצרת עמנו`,
    text: "נקסט דיזיין" ,
    html: `.היי ${req.body.email}, תודה שפנית אלינו, 
    קיבלנו את בקשתך להתראות, נשלח לך בהקדם האפשרי
    
    .נקסט דיזיין`
    };
  

  transporter.sendMail(mailDataReply, function (err, info) {
    if (err) {
      console.error('Error sending reply email:', err);
      res.status(500).send('Error sending reply email');
    } else {
      console.log('Reply email sent:', info);
    }
  });

  transporter.sendMail(mailData, function (err, info) {
    if (err) {
      console.error('Error sending reply email:', err);
      res.status(500).send('Error sending reply email');
    } else {
      console.log('Reply email sent:', info);
    }
  });

  res.status(200).send('Emails sent successfully');
}
