'use client'
import Image from "next/image";
import React from "react";
import {useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init({
         duration: 1500,
         once: false,
       })
  }, [])
  return (
    <>
    <div id="about" className="w-full ">
      <section
        
        className="h-auto flex flex-col w-full  font-sans mt-20" 
        dir="rtl"
      >

        <div className="w-[90%] md:w-[50%] h-auto bg-[#700124] border-4 border-t-0 border-[#700124] flex self-center justify-center pt-14 z-10 shadow-black shadow-lg">
          <div className="flex flex-col justify-center items-center">
            <h1 className="w-full text-white text-center font-sans text-5xl">מי אנחנו</h1>
          <h1 className="w-full text-center text-white font-sans text-5xl">ולמה לבחור בנו?</h1>
          <p className="mt-5 text-center w-full font-sans mb-14">היי, אנחנו נקראים נקסט-דיזיין. <br/>אנו מתמחים בבנייה ועיצוב אתרים באופן שמותאם לצרכי הלקוח. <br/> אנחנו כאן כדי לעזור לך ליצור אתר מרהיב ומותאם אישית שיכול לעזור לך להצליח בעולם הדיגיטלי.<br/><br/>
          <span className="font-bold">תכונות שעליהן אנו שמים דגש עיקרי:</span> </p>
        </div>
        </div>
      
        <div  className="flex flex-col md:flex-row w-full mt-5">
        <div className="w-full md:w-2/4 h-[300px] md:h-[400px] bg-white flex flexCenter">
        <Image src={"/about/Responsive.gif"} width={650} height={650} alt="" className=" md:w-[550px]"/>
        </div>
        <div data-aos="fade-up" className="w-full md:w-2/4 h-[300px] md:h-[400px] bg-[#700124] flex flexCenter z-10 flex-col gap-10  ">
          <div className="text-2xl xl:text-4xl 2xl:text-5xl font-sans">רספונסיביות</div>
          
          <p className="text-base xl:text-xl 2xl:text-2xl font-sans w-3/4 md:w-2/4">
        תכונה חשובה במוצרים שאנחנו מפתחים זה הפוקוס שלנו על רספונסיביות, כך שתוכל להיות בטוח שהמוצר שאנו מפתחים עבורך יעבוד בצורה מושלמת בכל סוגי המכשירים הקיימים בשוק בכל זמן ובכל מקום.
        </p>
        </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row w-full">
        <div data-aos="fade-up" className="w-full md:w-2/4 h-[300px] md:h-[400px] bg-[#700124] flex flexCenter z-10 flex-col gap-10">
          <div className="text-2xl xl:text-4xl 2xl:text-5xl font-sans">קידום אתרים אורגני 
          </div>
          <p className="text-base xl:text-xl 2xl:text-2xl font-sans w-3/4 md:w-2/4 ">
        הוא תהליך בו אנו משתמשים באסטרטגיות וכלים מתקדמים כדי להבטיח שאתר האינטרנט שלך יופיע בראש תוצאות החיפוש במנועי החיפוש המובילים כמו למשל, גוגל זהו אמצעי חדשני ויעיל להביא תנועת גולשים איכותית לאתר שלך ולספק לקוחות פוטנציאלים.     </p> 
        </div>
        <div className="w-full md:w-2/4 h-[300px] md:h-[400px] bg-white flex flexCenter">
          <Image src={"/about/SEO.gif"} width={600} height={600} alt="" className="w-[300px] md:w-[550px]"/>
          </div>
        </div>

        <div className="flex flex-col md:flex-row w-full">
        <div className="w-full md:w-2/4 h-[300px] md:h-[400px] bg-white flex flexCenter"><Image src={"/about/Resolution.gif"} width={500} height={600} alt="" className="w-[300px] md:w-[550px] lg:w-[500px]"/></div>
        <div data-aos="fade-up" className="w-full md:w-2/4 h-[300px] md:h-[400px] bg-[#700124] flex flexCenter z-10 flex-col gap-10">
          <div className="text-2xl xl:text-4xl 2xl:text-5xl font-sans">רזולוציה ואיכות</div><p className="text-base xl:text-xl 2xl:text-2xl font-sans w-3/4 md:w-2/4">

        רזולוציה ואיכות הם נגזרות ישירות מהרמה הגבוהה שבה אנחנו מתייחסים לפרטים באתר שלך אנחנו דואגים לכל פיקסל ולפרט כדי לוודא שהאתר שלך מוצג ברמה הגבוהה ביותר. </p>  
        </div>
       </div>

        <div className="flex flex-col-reverse md:flex-row w-full">
        <div data-aos="fade-up" className="w-full md:w-2/4 h-[300px] md:h-[400px] bg-[#700124] flex flexCenter z-10 flex-col gap-10">
          <div className="text-2xl xl:text-4xl 2xl:text-5xl font-sans">בק-אנד</div>
          <p className="text-base xl:text-xl 2xl:text-2xl font-sans w-3/4 md:w-2/4">
        הוא המערכת המוסתרת מאחורי האתר, וזה בידיוק התחום שבו אנחנו מתמחים ומתעסקים. השימור והפיתוח של מערכת בסיס הנתונים והלוגיקה שבה מאפשרים לנו ליצור אתרים יעילים וטכנולוגיים שמספקים ללקוחות שלך אמינות וביצועים מרביים.   </p> 
          </div>
        <div className="w-full md:w-2/4 h-[300px] md:h-[400px] bg-white flex flexCenter"><Image src={"/about/Developer.gif"} width={440} height={600} alt="" className="w-[300px] md:w-[550px] lg:w-[400px]"/></div>
        </div>

        <div className="flex flex-col md:flex-row w-full">
        <div className="w-full md:w-2/4 h-[300px] md:h-[400px] bg-white flex flexCenter"><Image src={"/about/Text.gif"} width={600} height={600} alt="" className="w-[300px] md:w-[550px] lg:w-[500px]"/></div>
        <div data-aos="fade-up" className="w-full md:w-2/4 h-[300px] md:h-[400px] bg-[#700124] flex flexCenter z-10 flex-col gap-10">
          <div className="text-2xl xl:text-4xl 2xl:text-5xl font-sans">תוכן וגופנים</div><p className="text-base xl:text-xl 2xl:text-2xl font-sans w-3/4 md:w-2/4">
        הטקסט שאנחנו יוצרים עבורך נבנה בקפידה ומקצועיות כדי לשמש את צרכיך באופן מיטבי. אנו מספקים טקסט ברמה גבוהה שמיועד להרשים ולהקל על המתבונן.</p>
        </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row w-full">
        <div data-aos="fade-up" className="w-full md:w-2/4 h-[300px] md:h-[400px] bg-[#700124] flex flexCenter z-10 flex-col gap-10">
          <div className="text-2xl xl:text-4xl 2xl:text-5xl font-sans">הדרכה ותמיכה</div><p className="text-base xl:text-xl 2xl:text-2xl font-sans w-3/4 md:w-2/4">
 אנחנו כאן לליווי והדרכה, מוכנים לשלב את הניסיון והמומחיות שלנו כדי להנחות אותך בכל הקשור לאתר האינטרנטי שניצור לך.</p></div>
        <div className="w-full md:w-2/4 h-[300px] md:h-[400px] bg-white flex flexCenter"><Image src={"/about/Guideness.gif"} width={550} height={600} alt="" className="w-[300px] md:w-[550px] lg:w-[500px]"/></div>
</div>
        <div className="flex flex-col md:flex-row w-full">
        <div className="w-full md:w-2/4 h-[300px] md:h-[400px] bg-white flex flexCenter"><Image src={"/about/Message.gif"} width={400} height={600} alt="" className="w-[300px] md:w-[550px] lg:w-[400px]"/></div>
        <div data-aos="fade-up" className="w-full md:w-2/4 h-[300px] md:h-[400px] bg-[#700124] flex flexCenter z-10 flex-col gap-10">
          <div className="text-2xl xl:text-4xl 2xl:text-5xl font-sans">המדיה ורשתות החברתיות</div>
          
          <p className="text-base xl:text-xl 2xl:text-2xl font-sans w-3/4 md:w-2/4">המדיה והחברה הן שני עולמות שמשפיעים זה על זה אנחנו כאן כדי לעזור לך לשדר את המסר הנכון וליצור את הפתרונות המתאימים לצרכי הציבור שלך.   </p>      </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row w-full">
        <div data-aos="fade-up" className="w-full md:w-2/4 h-[300px] md:h-[400px] bg-[#700124] flex flexCenter flex-col gap-10">
        <div className="text-2xl xl:text-4xl 2xl:text-5xl font-sans">ביקורות עלינו</div>
        <p className="text-base xl:text-xl 2xl:text-2xl font-sans w-3/4 md:w-2/4">
        יש לנו תהליך ייחודי של איסוף וניתוח ביקורות חיוביות ושליליות עלינו מלקוחותינו, כך אנו יודעים להתאים את עצמנו יותר למען הלקוח. 
           </p>   </div>
        <div className="w-full md:w-2/4 h-[300px] md:h-[400px] bg-white flex flexCenter">
          <Image src={"/about/Recommendation.gif"} width={450} height={500} alt="" className="w-[300px] md:w-[550px] lg:w-[450px]"/>
        </div>
              </div>
       
      </section>
    </div>
    </>
  );
};

export default About;
