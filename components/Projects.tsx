"use client"
import React, { useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import Link from 'next/link';


const Projects = () => {
  useEffect(() => {
    // Initialize AOS here if needed
    AOS.init();
  }, []);

  const handleNextClick = () => {
    const items = document.querySelectorAll('.items');
    const sliders = document.querySelector('.sliders');

    if (sliders && items.length > 0) {
      sliders.appendChild(items[0].cloneNode(true)); // Clone the first item
      sliders.removeChild(items[0]); // Remove the original first item
    }
  };

  return (
    <>
      <section
        id="projects"
        className="flex flex-col w-full h-[75vh] md:h-screen bg-[#700124] relative z-40"
      >
        <div className="containers">
          <div className="sliders">
            <div id="BarberPic" className="items">
              <div className="contents">
                <div className="names">המספרה של זאק</div>
                <div className="des">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, nemo!</div>
                <button>See more</button>
              </div>
            </div>
            <div id="Vizdek" className="items">
              <div className="contents">
                <div className="lg:names">דיגיי - Vizdek</div>
                <div className="des">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, nemo!</div>
                <button>See more</button>
              </div>
            </div>
            <div id="Furniture" className="items">
              <div className="contents">
                <div className="names">סלוניקו - ריהוט לבית</div>
                <div className="des">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, nemo!</div>
                <button>See more</button>
              </div>
            </div>
            <div id="AviVeg" className="items">
              <div className="contents">
                <div className="names">סלוניקו - ריהוט לבית</div>
                <div className="des">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, nemo!</div>
                <button>See more</button>
              </div>
            </div>
            <div id="Construction" className="items">
              <div className="contents">
                <div className="names">סלוניקו - ריהוט לבית</div>
                <div className="des">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, nemo!</div>
                <button>See more</button>
              </div>
            </div>
            {/* Add more items here */}
          </div>
          <div className="buttons1 w-full">
            <button onClick={handleNextClick} className="next"><Image src={"/Slicer.png"} width={200} height={150} alt='' className=''/></button>
          </div>
        </div>
        <div>

        </div>
      </section>
    </>
  );
};

export default Projects;
