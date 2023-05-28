import Lottie from "lottie-react";
import styled from "styled-components";
import vision from "../../../Lottie/vision.json";
const Equipe = ({ subPage }) => {
  return (
    <Container
      className={`w-full h-full absolute ${
        subPage === "equipe" ? "left-0 opacity-1" : "left-[-100%] opacity-0"
      } flex justify-start items-center flex-col top-0
      ease transform duration-300 transition-all
      lg:justify-center my-auto lg:flex-row lg:gap-4 font-Signika`}
    >
      <div className="w-[90%] mx-auto md:my-[100px] lg:w-[600px] lg:flex lg:justify-center lg:h-full lg:items-center my-[20px]">
        <Lottie animationData={vision} />
      </div>
      <div className=" lg:h-full lg:flex lg:justify-center lg:items-start lg:flex-col w-[90%] lg:w-[100%] mx-[20px] lg:translate-y-14 font-Signika">
        <div className="text-base mt-2">
          Over time, over time, an identity has been forged, a culture and
          values have naturally imposed themselves.
        </div>
        <div className=" text-xl my-4">
          Happy together. Curious and Sparkling always!
        </div>
        <div className="dark:text-gray-200 text-gray-500 text-xs lg:text-base">
          Be happy. Stimulate energy and desire internally as well as in daily
          relations with our customers. Life is too short to worry! <br />
          Creativity, collaboration, sharing and transmission breathe a fresh
          and invigorating spirit into this above all human adventure.
        </div>
        <div className="dark:text-gray-200 text-gray-500 text-xs lg:text-base text-justify">
          Be happy. Stimulate energy and desire internally as well as in daily
          relations with our customers. Life is too short to worry! <br />
          Creativity, collaboration, sharing and transmission breathe a fresh
          and invigorating spirit into this above all human adventure.
        </div>
        <div className=" text-xl my-4">
          Committed, loyal and sometimes impertinent!
        </div>
        <div className="dark:text-gray-200 text-gray-500 text-xs lg:text-base text-justify">
          We have the requirement of a job well done, we are committed to our
          customers. Engaging with a client means providing attentive listening,
          our creativity and our technical skills. But it also means daring to
          be bold, having strong positions, refusing to compromise! Strong and
          affirmed positions taken in mutual respect… With our clients, we work
          in collaborative mode. It is our trademark. This is also what allows
          us to forge lasting relationships, lasting partnerships.
        </div>
        <div className=" text-xl my-4">
          Creative and responsible, visionary and technological
        </div>
        <div className="dark:text-gray-200 text-gray-500 text-xs lg:text-base">
          Today and tomorrow, AdVision wants to grow and grow. Sustaining
          sustainable growth, carrying a solidarity project remains at the heart
          of its challenges. Faced with constantly changing technologies,
          AdVision Verte is always on the alert to invent the means of
          communication of tomorrow. Always having a click in advance to better
          guide our customers is also what makes us vibrate!
        </div>
        <div className="w-[30px] h-[250px]"></div>
      </div>
    </Container>
  );
};

export default Equipe;
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
