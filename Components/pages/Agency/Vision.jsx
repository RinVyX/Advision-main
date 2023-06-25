import Lottie from "lottie-react";
import styled from "styled-components";
import communication from "../../../Lottie/communication.json";
const Vision = ({ subPage }) => {
  return (
    <Container
      className={`w-full h-full  absolute ${
        subPage === "vision" ? "left-0 opacity-1" : "left-[-100%] opacity-0"
      } flex flex-col justify-start ease transform duration-300 transition-all font-kanit`}
    >
      {/* <div className="w-[90%] mx-auto md:my-[100px] lg:w-[600px] lg:flex lg:justify-center lg:h-full lg:items-center my-[20px]">
        <Lottie animationData={vision} />
      </div> */}
      <div className="lg:h-full lg:items-start lg:flex-col w-[100%] lg:w-[50%] mx-[20px] lg:translate-y-14">
        <div className="text-base mt-2">
          As a business-to-business communication and advertising agency, our secret ingredient is delivering results! The rest of the recipe, we adapt based on each mandate. 
          At AdVision, we speak your language: increasing sales, brand awareness, employee loyalty... We leave out the unnecessary and focus on the essential: your objectives. 
          It's no wonder our clients recommend our services.
        </div>
        <div className="text-xl my-4">
          With us, there are no divas! It is easy and enjoyable to work with our team, we promise you that!
        </div>
          <div className="dark:text-gray-200 text-gray-800 text-xs lg:text-base">
            Human relationships and professional services, but without bureaucracy or extravagant fees. Above all, we build a relationship of trust. Our mantra is to imagine solutions 
            that make our clients win... and to actualize these solutions! Do you have any "mission impossible" marketing tasks to accomplish? Are your communication and advertising projects 
            urgent, complex, diverse, or large-scale? We live only for these kinds of challenges!
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
