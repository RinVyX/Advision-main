import Lottie from "lottie-react";
import styled from "styled-components";
import buisness from "../../../Lottie/business.json";
const B2b = ({ subPage }) => {
  return (
    <Container
      className={`w-full  absolute ${
        subPage === "b2b" ? "left-0 opacity-1" : "left-[-100%] opacity-0"
      } flex justify-start items-center flex-col top-0
      ease transform duration-300 transition-all w-full h-full lg:flex-row-reverse lg:justify-center`}
    >
      {/* snall screens */}
      <div className=" lg:h-full lg:justify-center lg:items-start lg:m-[60px] lg:hidden my-10 w-[90%] h-full font-Signika">
        <GrayText>
          Because the challenges of B2B marketing are our raison d'être!
        </GrayText>
        <p className="w-full h-fill mb-4 font-light text-xs dark:text-gray-200 text-gray-500 md:hidden">
          At AdVision, we work to achieve your business objectives by
          implementing strategies adapted to your sector of activity!
          Acquisition of commercial contacts, business development or
          inter-company relations, we combine creativity and rationality to
          develop marketing projects that will have a real impact in your
          market. The ROI, we know that!
        </p>
        <h1 className="p-1 text-black dark:text-white">
          Our B2B marketing agency can help you:
        </h1>
        <ul className="font-Signika list-inside list-disc dark:text-gray-200 text-gray-500 my-4">
          <li className="text-sm lg-text-2xl ">Increase your notoriety</li>
          <li className="text-sm lg-text-xl ">Obtain competitive advantages</li>
          <li className="text-sm lg-text-xl ">
            Create impactful marketing communication tools
          </li>
          <li className="text-sm lg-text-xl ">
            Build and maintain your business relationships
          </li>
          <li className="text-sm lg-text-xl ">
            Generate your advertising campaigns
          </li>
          <li className="text-sm lg-text-xl ">Organize your business events</li>
        </ul>
        <Lottie animationData={buisness} className="lg:pb-32 my-10" />
        <p className="w-full h-fill  mt-10 mb-4 font-light text-xs dark:text-gray-200 text-gray-500 md:hidden">
          You will not find in our teams the traditional mentality of the
          marketing agency which thrives on mass media, creative prices... and
          exorbitant fees. At AdVision, not only are we accessible and friendly,
          but we work to understand and master your business challenges. We
          speak the same language as you, not the incomprehensible jargon of
          advertising!
        </p>
        <div className="w-[30px] h-[250px] md:hidden"></div>
      </div>
      {/* big screens +lg */}
      <div className="hidden lg:flex justify-center items-center w-[80%]">
        <div className="w-[600px] lg:w-[800px]">
          <Lottie animationData={buisness} />
        </div>
        <Text className=" lg:h-full lg:justify-center lg:items-start lg:m-[60px] ">
          <GrayText>
            Because the challenges of B2B marketing are our raison d'être!
          </GrayText>
          <ContentText>
            At AdVision, we work to achieve your business objectives by
            implementing strategies adapted to your sector of activity!
            Acquisition of commercial contacts, business development or
            inter-company relations, we combine creativity and rationality to
            develop marketing projects that will have a real impact in your
            market. The ROI, we know that!
          </ContentText>
          <h1 className="p-1 text-black dark:text-white">
            Our B2B marketing agency can help you:
          </h1>
          <ul className="font-Signika list-inside list-disc dark:text-gray-200 text-gray-500 my-4">
            <li className="text-sm lg-text-2xl ">Increase your notoriety</li>
            <li className="text-sm lg-text-xl ">
              Obtain competitive advantages
            </li>
            <li className="text-sm lg-text-xl ">
              Create impactful marketing communication tools
            </li>
            <li className="text-sm lg-text-xl ">
              Build and maintain your business relationships
            </li>
            <li className="text-sm lg-text-xl ">
              Generate your advertising campaigns
            </li>
            <li className="text-sm lg-text-xl ">
              Organize your business events
            </li>
          </ul>
          <ContentText className="mb-4">
            You will not find in our teams the traditional mentality of the
            marketing agency which thrives on mass media,
            <br /> creative prices... and exorbitant fees. At AdVision, not only
            are we accessible and friendly, but we work to understand and master
            your business challenges.
            <br /> We speak the same language as you, not the incomprehensible
            jargon of advertising!
          </ContentText>
        </Text>
      </div>
    </Container>
  );
};

export default B2b;
const GrayText = styled.p`
  color: #888a9b;
  font-size: 16px;
  margin-top: 10px;
  margin-bottom: 10px;
`;
const Heading = styled.p`
  color: black;
  font-size: 24px;
  padding-top: 4px;
  padding-bottom: 4px;
`;
const ContentText = styled.p`
  color: gray;
  font-size: 18px;
`;
const ListItem = styled.li`
  font-size: 18px;
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
const Text = styled.div`
  width: 90%;
  height: 100%;
  margin-top: 60px;
  margin-bottom: 60px;
`;
