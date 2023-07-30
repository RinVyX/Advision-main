import Lottie from "lottie-react";
import styled from "styled-components";
import vision from "../../../Lottie/vision.json";
import React, { useState, useEffect } from 'react';

const Philosophy = ({ subPage }) => {
  console.log("subpage: ",subPage);

  const fadeAnimationStyle = `
    @keyframes fade-in {
      from { opacity: 0; }
      to { opacity: 1; }
    }
  
    @keyframes fade-out {
      from { opacity: 1; }
      to { opacity: 0; }
    }
  `;

  function switchNext() {
    const ids = ['p1', 'p2', 'p3', 'p4'];
    const currentIndex = ids.findIndex(id => document.getElementById(id).style.display === 'block');
    const currentElement = document.getElementById(ids[currentIndex]);

    currentElement.style.animation = 'fade-out 0.5s forwards';

    setTimeout(() => {
      currentElement.style.display = 'none';

      const nextIndex = (currentIndex + 1) % ids.length;
      const nextElement = document.getElementById(ids[nextIndex]);

      nextElement.style.animation = 'fade-in 0.5s forwards';
      nextElement.style.display = 'block';
    }, 150); // Delay the display change to match the animation duration
  }

  function switchPrevious() {
    const ids = ['p1', 'p2', 'p3', 'p4'];
    const currentIndex = ids.findIndex(id => document.getElementById(id).style.display === 'block');
    const currentElement = document.getElementById(ids[currentIndex]);

    currentElement.style.animation = 'fade-out 0.5s forwards';

    setTimeout(() => {
      currentElement.style.display = 'none';

      const previousIndex = (currentIndex - 1 + ids.length) % ids.length;
      const previousElement = document.getElementById(ids[previousIndex]);

      previousElement.style.animation = 'fade-in 0.5s forwards';
      previousElement.style.display = 'block';
    }, 150); // Delay the display change to match the animation duration
  }

  return (
    <Container
      className={`w-full h-full absolute dark:bg-gradient-to-t bg-gradient-to-t dark:from-[#AA076B]/30 from-[#AA076B]/80 dark:to-[#61045F]/30 to-[#61045F]/80 ${
        subPage === "philosophy" ? "left-0 opacity-1" : "left-[-100%] opacity-0"
      } font-kanit text-slate-200 `}
    >
    <style>{fadeAnimationStyle}</style>
    <div className="grid grid-cols-12 h-full">
      <div className="col-start-2 col-end-12 flex items-center justify-center">
        <div id="p1" className={`xl:text-[70px] lg:text-[40px] md:text-[30px] text-[15px] max-md:-mt-[40%] -mt-20 text-center drop-shadow-[0_3px_3px_rgba(0,0,0,0.25)] 
                              ${subPage === 'philosophy' ? 'fade-transition active' : 'fade-transition'}`} 
                     style={{ display: 'block' }}>          
          <span>Over time,</span>&nbsp;
          <span className="font-bold">an identity</span>&nbsp;
          <span>has been forged,</span>&nbsp;
          <br />
          <span className="font-bold">a culture</span>&nbsp;
          <span>and</span>&nbsp;
          <span className="font-bold">values</span>&nbsp; have naturally emerged.          
        </div>
        <div id="p2" className={`xl:text-[40px] lg:text-[30px] md:text-[20px] text-[15px] max-md:-mt-[50%] -mt-20 inline text-center drop-shadow-[0_3px_3px_rgba(0,0,0,0.25)] 
                                ${subPage === 'philosophy' ? 'fade-transition active' : 'fade-transition'}`} 
                     style={{ display: 'none' }}>
          <span className="font-semibold block p-12">Happy together. Always curious and vibrant!</span>&nbsp;
          <span>
            Be happy. Ignite energy and desire both within and in daily relationships with 
            our clients. Life is too short to worry! Creativity, collaboration, sharing, and
            mentoring infuse a fresh and invigorating spirit into this fundamentally human journey.
          </span>          
        </div>
        <div id="p3" className={`xl:text-[40px] lg:text-[30px] md:text-[20px] text-[15px] max-md:-mt-[50%] -mt-20 inline text-center drop-shadow-[0_3px_3px_rgba(0,0,0,0.25)] 
                                 ${subPage === 'philosophy' ? 'fade-transition active' : 'fade-transition'}`} 
                     style={{ display: 'none' }}>
            <span className="font-semibold block p-12">Committed, loyal, and sometimes cheeky!</span>
            <span>
              We have a commitment to delivering high-quality work, and we dedicate
              ourselves to our clients. Engaging with a client means offering attentive listening,
              our creativity, and technical expertise. But it also means daring to be bold, taking
              taken with mutual respect... With our clients, we work collaboratively. It's our
              trademark. It's also what allows us to forge long-lasting relationships and partnerships.
            </span>
        </div>
        <div id="p4" className={`xl:text-[40px] lg:text-[30px] md:text-[20px] text-[15px] max-md:-mt-[50%] -mt-20 inline text-center drop-shadow-[0_3px_3px_rgba(0,0,0,0.25)] 
                              ${subPage === 'philosophy' ? 'fade-transition active' : 'fade-transition'}`} 
                     style={{ display: 'none' }}>
          <span className="font-semibold block p-12">Creative and responsible, visionary and technological.</span>
          <span>Today and tomorrow, AdVision wants to grow and expand. Supporting</span>&nbsp;
          <span>sustainable growth and embracing a collective project remain at the core of its</span>&nbsp;
          <span>challenges. In the face of constantly evolving technologies, AdVision Verte is</span>&nbsp;
          <span>always on the lookout to invent the communication methods of tomorrow.</span>&nbsp;
          <span>Having a competitive edge to better guide our clients is also what excites us and keeps us motivated!</span>
        </div>
      </div>
    </div>
    <div className="grid grid-cols-6 text-4xl">
      <div className="lg:m-24 m-14 cursor-pointer col-start-1 col-end-3 absolute bottom-0 left-0" id="previous" onClick={switchPrevious}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="lg:w-16 lg:h-16 w-10">
          <path strokeLinecap="round" strokeLinejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" />
        </svg>
      </div>
      <div className="lg:m-24 m-14 cursor-pointer col-end-7 col-span-2 absolute bottom-0 right-0" id="next" onClick={switchNext}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="lg:w-16 lg:h-16 w-10">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
        </svg>
      </div>
    </div>
    </Container>
  );
};

export default Philosophy;
const Container = styled.div`
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #c084fc;
  }
`;
