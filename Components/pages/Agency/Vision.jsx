import Lottie from "lottie-react";
import styled from "styled-components";
import vision from "../../../Lottie/vision.json";
const Vision = ({ subPage }) => {
  return (
    <Container
      className={`w-full h-full absolute ${
        subPage === "vision" ? "left-0 opacity-1" : "left-[-100%] opacity-0"
      } flex justify-start items-center flex-col top-0  
      ease transform duration-300 transition-all lg:flex-row mb-20
       lg:justify-center`}
    >
      <div className="w-[90%] mx-auto md:my-[100px] lg:w-[600px] lg:flex lg:justify-center lg:h-full lg:items-center my-[20px]">
        <Lottie animationData={vision} />
      </div>
      <div className=" lg:h-full lg:flex lg:justify-center lg:items-start lg:flex-col w-[90%] lg:w-[100%] mx-[20px] lg:translate-y-14 font-Signika">
        <h3 className="text-base mt-2 ">
          Over time, over time, an identity has been forged, a culture and
          values have naturally imposed themselves.
        </h3>
        <h2 className=" text-xl my-4">
          Happy together. Curious and Sparkling always!
        </h2>
        <p className="dark:text-gray-200 text-gray-500 text-xs lg:text-base">
          Be happy. Stimulate energy and desire internally as well as in daily
          relations with our customers. Life is too short to worry! <br />
          Creativity, collaboration, sharing and transmission breathe a fresh
          and invigorating spirit into this above all human adventure.
        </p>
        <p className="dark:text-gray-200 text-gray-500 text-xs lg:text-base">
          Be happy. Stimulate energy and desire internally as well as in daily
          relations with our customers. Life is too short to worry! <br />
          Creativity, collaboration, sharing and transmission breathe a fresh
          and invigorating spirit into this above all human adventure.
        </p>
        <h2 className=" text-xl my-4">
          Committed, loyal and sometimes impertinent!
        </h2>
        <p className="dark:text-gray-200 text-gray-500 text-xs lg:text-base">
          We have the requirement of a job well done, we are committed to our
          customers. Engaging with a client means providing attentive listening,
          our creativity and our technical skills. But it also means daring to
          be bold, having strong positions, refusing to compromise! Strong and
          affirmed positions taken in mutual respect… With our clients, we work
          in collaborative mode. It is our trademark. This is also what allows
          us to forge lasting relationships, lasting partnerships.
        </p>
        <h2 className=" text-xl my-4">
          Creative and responsible, visionary and technological
        </h2>
        <p className="dark:text-gray-200 text-gray-500 text-xs lg:text-base">
          Today and tomorrow, AdVision wants to grow and grow. Sustaining
          sustainable growth, carrying a solidarity project remains at the heart
          of its challenges. Faced with constantly changing technologies,
          AdVision Verte is always on the alert to invent the means of
          communication of tomorrow. Always having a click in advance to better
          guide our customers is also what makes us vibrate!
        </p>
        <div className="w-[30px] h-[250px]"></div>
      </div>
    </Container>
  );
};

export default Vision;
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
