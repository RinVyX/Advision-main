import Lottie from "lottie-react";
import styled from "styled-components";
import communication from "../../../Lottie/communication.json";
const Vision = ({ subPage }) => {
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
    const ids = ['v1', 'v2', 'v3', 'v4'];
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
    const ids = ['v1', 'v2', 'v3', 'v4'];
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
    className={`w-full h-full absolute dark:bg-gradient-to-t bg-gradient-to-t dark:from-[#EDDE5D]/30 from-[#EDDE5D]/80 dark:to-[#F09819]/30 to-[#F09819]/80 ${
      subPage === "vision" ? "left-0 opacity-1" : "left-[-100%] opacity-0"
    } font-kanit text-slate-800 dark:text-slate-200`}
  >
    <style>{fadeAnimationStyle}</style>
    <div className="grid grid-cols-12 h-full">
      <div className="col-start-2 col-end-12 flex items-center justify-center">
      <div id="v1" className={`xl:text-[50px] lg:text-[40px] md:text-[30px] text-[15px] max-md:-mt-[40%] -mt-20 text-center drop-shadow-[0_3px_3px_rgba(0,0,0,0.25)] 
                              ${subPage === 'vision' ? 'fade-transition active' : 'fade-transition'}`} 
                   style={{ display: 'block' }}>      
          <span className="font-bold">Unleashing Creativity :</span>&nbsp;
          <span>Redefining the Advertising Landscape</span>
        </div>
        <div id="v2" className={`lg:text-[30px] md:text-[20px] text-[15px] max-md:-mt-[50%] -mt-20 inline text-center drop-shadow-[0_3px_3px_rgba(0,0,0,0.25)] 
                                ${subPage === 'vision' ? 'fade-transition active' : 'fade-transition'}`} 
                     style={{ display: 'none' }}>
          <span className="font-bold">At Advision El Djazair</span>
          <span>, we envision a world where </span>
          <span className="font-bold">creativity</span>
          <span> knows no boundaries. Our vision is to </span>
          <span className="font-bold"> redefine </span>
          <span> the advertising landscape by delivering innovative and captivating campaigns that leave a lasting impact. We strive to be pioneers in the industry, </span>
          <span className="font-bold"> pushing the limits </span>
          <span> of imagination and storytelling to create experiences that inspire, engage, and </span>
          <span className="font-bold"> connect </span>
          <span> with audiences on a </span>
          <span className="font-bold"> profound level.</span>          
        </div>
        <div id="v3" className={`xl:text-[50px] lg:text-[40px] md:text-[30px] text-[15px] max-md:-mt-[40%] -mt-20 inline text-center drop-shadow-[0_3px_3px_rgba(0,0,0,0.25)] 
                                ${subPage === 'vision' ? 'fade-transition active' : 'fade-transition'}`} 
                     style={{ display: 'none' }}>
            <span className="font-bold">Partners in Success: </span>
            <span> Building Lasting Relationships and Driving Remarkable Results</span>
        </div>
        <div id="v4" className={`lg:text-[30px] md:text-[20px] text-[15px] max-md:-mt-[50%] -mt-20 inline text-center drop-shadow-[0_3px_3px_rgba(0,0,0,0.25)] 
                                ${subPage === 'vision' ? 'fade-transition active' : 'fade-transition'}`} 
                     style={{ display: 'none' }}>
          <span> Our vision is to be </span>
          <span className="font-bold"> trusted partners </span>
          <span> in our clients' journey to success, forging long-lasting relationships based on </span>
          <span className="font-bold"> trust, </span>
          <span> transparency, and </span>
          <span className="font-bold"> shared goals. </span>
          <span> Through collaborative efforts and aligning our visions, we strive to achieve </span>
          <span className="font-bold"> remarkable results. </span>
          <span> As a go-to advertising agency, we consistently deliver outstanding creativity, strategic thinking, and measurable impact, </span>
          <span className="font-bold"> making a difference </span>
          <span> in the industry and the businesses we serve.</span>
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

export default Vision;
const Container = styled.div`
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #c084fc;
  }
`;
