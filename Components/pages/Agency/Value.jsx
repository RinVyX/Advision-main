import Lottie from "lottie-react";
import styled from "styled-components";
import vision from "../../../Lottie/vision.json";
const Value = ({ subPage }) => {
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
    const ids = ['va1', 'va2', 'va3'];
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
    const ids = ['va1', 'va2', 'va3'];
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
    className={`w-full h-full absolute dark:bg-gradient-to-t bg-gradient-to-t dark:from-[#24FE41]/30 from-[#24FE41]/80 dark:to-[#0AB462]/30 to-[#0AB462]/80 ${
      subPage === "value" ? "left-0 opacity-1" : "left-[-100%] opacity-0"
    } font-kanit text-slate-800 dark:text-slate-200`}
  >
    <style>{fadeAnimationStyle}</style>
    <div className="grid grid-cols-12 h-full">
      <div className="col-start-2 col-end-12 flex items-center justify-center">
      <div id="va1" className={`lg:text-[40px] md:text-[30px] text-[15px] max-md:-mt-[40%] -mt-20 text-center drop-shadow-[0_3px_3px_rgba(0,0,0,0.25)] 
                              ${subPage === 'value' ? 'fade-transition active' : 'fade-transition'}`} 
                    style={{ display: 'block' }}>        
          <span className="font-bold"> Unlocking Value </span>
          <span> Through Advertising and Consulting </span>
          <span className="font-bold"> Excellence </span>
        </div>
        <div id="va2" className={`lg:text-[30px] md:text-[20px] text-[15px] max-md:-mt-[50%] -mt-20 inline text-center drop-shadow-[0_3px_3px_rgba(0,0,0,0.25)] 
                                ${subPage === 'value' ? 'fade-transition active' : 'fade-transition'}`} 
                      style={{ display: 'none' }}>
          <span> Welcome to </span>
          <span className="font-bold"> Advision El Djazair, </span>
          <span> where we are committed to unlocking </span>
          <span className="font-bold"> exceptional value </span>
          <span> for our clients. With a focus on strategic advertising and insightful consulting, we drive tangible </span>
          <span className="font-bold"> results </span>
          <span> that propel businesses </span>
          <span className="font-bold"> forward. </span>
          <span> Our team combines extensive market knowledge with </span>
          <span className="font-bold"> innovative campaigns </span>
          <span> to help clients establish strong brand identities, connect with their target audience, and achieve </span>
          <span className="font-bold"> sustainable growth.</span>          
        </div>
        <div id="va3" className={`lg:text-[30px] md:text-[20px] text-[15px] max-md:-mt-[50%] -mt-20 inline text-center drop-shadow-[0_3px_3px_rgba(0,0,0,0.25)] 
                                ${subPage === 'value' ? 'fade-transition active' : 'fade-transition'}`} 
                      style={{ display: 'none' }}>
            <span>Through </span>
            <span className="font-bold"> personalized solutions </span>
            <span> 
              tailored to each client's unique needs, we empower businesses to maximize their potential and stay ahead in today's competitive landscape.
              By leveraging our expertise and industry insights, we deliver 
            </span>
            <span className="font-bold"> value-driven strategies </span>
            <span> 
              that generate measurable outcomes. Our unwavering dedication to client success ensures 
              that we not only help businesses thrive but also establish 
            </span>
            <span className="font-bold">long-lasting partnerships </span>
            <span> built on </span>
            <span className="font-bold"> trust </span>
            <span> and </span>
            <span className="font-bold"> results.</span>
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

export default Value;
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
