import Image from "next/image";
import styled from "styled-components";
import Lottie from "lottie-react";
import Engagement1 from "../../../Lottie/engagement1.json";
import Engagement2 from "../../../Lottie/engagement2.json";

const Engagement = ({ subPage }) => {
  return (
    <Container
      className={`w-full h-full  absolute ${
        subPage === "engagment" ? "left-0 opacity-1" : "left-[-100%] opacity-0"
      } flex justify-start items-center flex-col top-0
      ease transform duration-300 transition-all
        lg:flex-row-reverse lg:justify-center  mx-auto`}
    >
      <div className="flex justify-center items-center flex-col h-full my-8 w-[90%] lg:w-full lg:flex-row lg:gap-10 font-Signika">
        <Lottie
          animationData={Engagement1}
          className="w-[350px] lg:w-[600px] "
        />
        <ul className="font-Signika list-inside list-disc dark:text-gray-200 text-gray-500 my-4">
          <li className="text-sm lg:text-xl ">A step-by-step guide</li>
          <li className="text-sm lg:text-xl ">Use of best practices</li>
          <li className="text-sm lg:text-xl ">
            A review of projects to ensure the achievement of your objectives
          </li>
          <li className="text-sm lg:text-xl ">
            Fast, efficient and friendly feedback
          </li>
          <li className="text-sm lg:text-xl ">
            Quotes and estimates delivered without delay
          </li>
          <li className="text-sm lg:text-xl ">
            Your urgent requests processed within 24 hours
          </li>
          <li className="text-sm lg:text-xl ">
            A proactive attitude in project management
          </li>
          <li className="text-sm lg:text-xl ">
            A curiosity that pushes us to go further
          </li>
          <li className="text-sm lg:text-xl ">
            New ideas with a single goal: concrete results
          </li>
        </ul>
        <div className="w-[30px] h-[250px] md:hidden"></div>
      </div>
    </Container>
  );
};

export default Engagement;
const li = styled.li`
  font-size: 24px;
  color: gray;
`;
const List = styled.ul`
  list-style: circle;
  list-style-position: inside;
`;
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
