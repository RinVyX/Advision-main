import Lottie from "lottie-react";
import styled from "styled-components";
import vision from "../../../Lottie/vision.json";
import React, { useState, useEffect } from 'react';

const Philosophy = ({ subPage }) => {
  /* const [firstTime, setFirstTime] = useState(true);

  useEffect(() => {
    if (firstTime) {
      const ids = ['1', '2', '3', '4'];
  
      ids.forEach(id => {
        const element = document.getElementById(id);
        if (id === '1') {
          element.style.display = 'block';
        } else {
          element.style.display = 'none';
        }
      });
  
      setFirstTime(false);
    }
  }, [firstTime]); */
  console.log("subpage: ",subPage);

  function switchNext() {
    const ids = ['1', '2', '3', '4'];
    // Find the currently displayed element
    const currentIndex = ids.findIndex(id => document.getElementById(id).style.display === 'block');
    // Hide the current element
    document.getElementById(ids[currentIndex]).style.display = 'none';
    // Calculate the index of the next element
    const nextIndex = (currentIndex + 1) % ids.length;

    // Show the next element
    document.getElementById(ids[nextIndex]).style.display = 'block';    
  }
  function switchPrevious() {
    const ids = ['1', '2', '3', '4'];
  
    // Find the currently displayed element
    const currentIndex = ids.findIndex(id => document.getElementById(id).style.display === 'block');
  
    // Hide the current element
    document.getElementById(ids[currentIndex]).style.display = 'none';
  
    // Calculate the index of the previous element
    const previousIndex = (currentIndex - 1 + ids.length) % ids.length;
  
    // Show the previous element
    document.getElementById(ids[previousIndex]).style.display = 'block';
  }

  

return (
  <Container
    className={`w-full h-full absolute dark:bg-gradient-to-t bg-gradient-to-t dark:from-[#AA076B]/30 from-[#AA076B]/80 dark:to-[#61045F]/30 to-[#61045F]/80 ${
      subPage === "philosophy" ? "left-0 opacity-1" : "left-[-100%] opacity-0"
    } font-kanit `}
  >
    <div className="grid grid-cols-12 h-full">
      <div className="col-start-2 col-end-12 flex items-center justify-center">
        <div id="1" className="text-[70px] text-center drop-shadow-[0_3px_3px_rgba(0,0,0,0.25)]" style={{display: "block"}}>          
          <span>Over time,</span>&nbsp;
          <span className="font-bold">an identity</span>&nbsp;
          <span>has been forged,</span>&nbsp;
          <br />
          <span className="font-bold">a culture</span>&nbsp;
          <span>and</span>&nbsp;
          <span className="font-bold">values</span>&nbsp; have naturally emerged.          
        </div>
        <div id="2" className="my-[10%] text-[40px] inline text-center drop-shadow-[0_3px_3px_rgba(0,0,0,0.25)]" style={{display: "none"}}>
          <span className="font-semibold block p-12">Happy together. Always curious and vibrant!</span>&nbsp;
          <span>Be happy. Ignite energy and desire both within and in daily relationships with </span>&nbsp;
          <span>our clients. Life is too short to worry! Creativity, collaboration, sharing, and</span>&nbsp;
          <span>mentoring infuse a fresh and invigorating spirit into this fundamentally human journey.</span>          
        </div>
        <div id="3" className="my-[5%] text-[40px] inline text-center drop-shadow-[0_3px_3px_rgba(0,0,0,0.25)]" style={{display: "none"}}>
            <span className="font-semibold block p-12">Committed, loyal, and sometimes cheeky!</span>
            <span>We have a commitment to delivering high-quality work, and we dedicate</span>&nbsp;
            <span>ourselves to our clients. Engaging with a client means offering attentive listening,</span>&nbsp;
            <span>our creativity, and technical expertise. But it also means daring to be bold, taking</span>&nbsp;
            <span>taken with mutual respect... With our clients, we work collaboratively. It's our</span>&nbsp;
            <span>trademark. It's also what allows us to forge long-lasting relationships and partnerships.</span>
        </div>
        <div id="4" className="my-[3%] text-[40px] inline text-center drop-shadow-[0_3px_3px_rgba(0,0,0,0.25)]" style={{display: "none"}}>
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
      <div className="m-24 cursor-pointer col-start-1 col-end-3 absolute bottom-0 left-0" id="previous" onClick={switchPrevious}>Previous</div>
      <div className="m-24 cursor-pointer col-end-7 col-span-2 absolute bottom-0 right-0" id="next" onClick={switchNext}>Next</div>
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
