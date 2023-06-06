import Lottie from "lottie-react";
import styled from "styled-components";
/* import communication from "../../../Lottie/communication.json"; */
const Vision = ({ subPage }) => {
  return (
    <Container
      className={`w-full h-full  absolute ${
        subPage === "vision"
          ? "left-0 opacity-1"
          : "left-[-100%] opacity-0"
      } flex justify-start items-center flex-col top-0 pl-48
      ease transform duration-300 transition-all 
      lg:justify-center my-auto lg:flex-row lg:gap-4 font-Signika`}
    >
      {/* mobile */}
      <div className="text-justify w-[90%] h-fill  mt-10 mb-4 font-light text-xs dark:text-gray-200 text-gray-500 md:hidden ">
        As a communication and advertising agency working in "business to
        business", our secret ingredient is the achievement of results! The rest
        of the recipe, we adapt it according to each mandate. At AdVision, we
        speak your language: increase in sales, brand awareness, employee
        loyalty… We leave aside the superfluous and focus on the essentials:
        your objectives. No wonder our clients recommend our services.
      </div>
      <div className="w-[90%] mb-4 font-medium text- md:hidden lg:hidden">
        With us, no divas! It's easy and pleasant to work with our team, we
        promise!
      </div>
      {/* <div className="w-[90%] mb-4 max-w-lg md:w-[500px] lg:w-[700px]">
        <Lottie animationData={communication} />
      </div> */}
      <div className="text-justify w-[90%] h-fill  mt-10 mb-4 font-light text-xs dark:text-gray-200 text-gray-500 lg:hidden">
        As a communication and advertising agency working in "business to
        business", our secret ingredient is the achievement of results! The rest
        of the recipe, we adapt it according to each mandate. At AdVision, we
        speak your language: increase in sales, brand awareness, employee
        loyalty… We leave aside the superfluous and focus on the essentials:
        your objectives. No wonder our clients recommend our services.
      </div>
      <div className="w-[90%] font-medium lg:hidden">
        With us, no divas! It's easy and pleasant to work with our team, we
        promise!
      </div>
      <div className="text-justify w-[90%] h-fill my-4 font-light text-xs dark:text-gray-200 text-gray-500 lg:hidden">
        Human relations and professional services, but without red tape or
        extravagant fees. Above all, we build a relationship of trust. Our
        mantra is to imagine solutions that make our customers win… and to make
        these solutions concrete! Do you have “impossible marketing missions” to
        achieve? Are your communication and advertising projects urgent,
        complex, varied or large-scale? We only live for these kinds of
        challenges!
      </div>

      {/* lg screen */}
      <div className="lg:flex justify-center item-center w-[50%] h-full hidden flex-col font-Signika">
        <div className="text-justify w-[90%] h-fill  mt-10 mb-4 font-light text-base dark:text-gray-200 text-gray-500">
          As a communication and advertising agency working in "business to
          business", our secret ingredient is the achievement of results! The
          rest of the recipe, we adapt it according to each mandate. At
          AdVision, we speak your language: increase in sales, brand awareness,
          employee loyalty… We leave aside the superfluous and focus on the
          essentials: your objectives. No wonder our clients recommend our
          services.
        </div>
        <div className="w-[90%] mb-4 font-medium text-lg gap-4">
          With us, no divas! It's easy and pleasant to work with our team, we
          promise!
        </div>
        <div className="text-justify w-[90%] mb-10 font-light text-base dark:text-gray-200 text-gray-500">
          Human relations and professional services, but without red tape or
          extravagant fees. Above all, we build a relationship of trust. Our
          mantra is to imagine solutions that make our customers win… and to
          make these solutions concrete! Do you have “impossible marketing
          missions” to achieve? Are your communication and advertising projects
          urgent, complex, varied or large-scale? We only live for these kinds
          of challenges!
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
