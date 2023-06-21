import Lottie from "lottie-react";
import styled from "styled-components";
import vision from "../../../Lottie/vision.json";

const Philosophy = ({ subPage }) => {
  return (
    <Container
      className={`w-full absolute ${
        subPage === "philosophy" ? "left-0" : "left-[-200%]"
      } flex ease transform duration-500 transition-all w-[95%] flex-col font-kanit mx-4 my-4`}
    >
      {/* <div className="w-[90%] mx-auto md:my-[100px] lg:w-[600px] lg:flex lg:justify-center lg:h-full lg:items-center my-[20px]">
        <Lottie animationData={vision} />
      </div> */}
      <div className="lg:h-full lg:items-start lg:flex-col w-[100%] lg:w-[50%] mx-[20px] lg:translate-y-14">
        <div className="text-base mt-2">
          Over time, an identity has been forged, a culture and values have naturally emerged.
        </div>
        <div className="text-xl my-4">
          Happy together. Always curious and vibrant!
        </div>
        <div className="dark:text-gray-200 text-gray-500 text-xs lg:text-base">
        Be happy. Ignite energy and desire both within and in daily relationships with our clients. Life is too short to worry!
        Creativity, collaboration, sharing, and mentoring infuse a fresh and invigorating spirit into this fundamentally human journey.
        </div>
        
        <div className="text-xl my-4">
          Committed, loyal, and sometimes cheeky!
        </div>
        <div className="dark:text-gray-200 text-gray-500 text-xs lg:text-base text-justify">
          We have a commitment to delivering high-quality work, and we dedicate ourselves to our clients. Engaging with a client means offering attentive listening, our creativity, 
          and technical expertise. But it also means daring to be bold, taking firm stances, and refusing to compromise! 
          Strong and assertive positions are taken with mutual respect... With our clients, we work collaboratively. It's our trademark. 
          It's also what allows us to forge long-lasting relationships and partnerships.
        </div>
        <div className="text-xl my-4">
          Creative and responsible, visionary and technological.
        </div>
        <div className="dark:text-gray-200 text-gray-500 text-xs lg:text-base">
        Today and tomorrow, AdVision wants to grow and expand. Supporting sustainable growth and embracing a collective project remain at the core of its challenges. 
        In the face of constantly evolving technologies, AdVision Verte is always on the lookout to invent the communication methods of tomorrow. 
        Having a competitive edge to better guide our clients is also what excites us and keeps us motivated!
        </div>
        <div className="w-[30px] h-[250px]"></div>
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
