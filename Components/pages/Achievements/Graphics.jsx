import styled from "styled-components";

const Graphics = ({ subPage }) => {
  return (
    <Content
      className={`w-full  absolute ${
        subPage === "graphics" ? "left-0" : "left-[-200%]"
      } font-Signika`}
    >
      <div className="body-font">
        <div className="px-5 py-24 mx-auto flex flex-wrap">
          <div className="flex w-full mb-20 flex-wrap">
            <div className="sm:text-3xl text-2xl font-medium title-font lg:w-1/3 lg:mb-0 mb-4">
              Master Cleanse Reliac Heirloom
            </div>
            <div className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table.
              Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom.
            </div>
          </div>
          <div className="flex flex-wrap md:-m-2 -m-1">
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-1/2">
                <img className="w-full object-cover h-full object-center block" src="/images/facebook.png"/>
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img className="w-full object-cover h-full object-center block" src="/images/facebook.png"/>
              </div>
              <div className="md:p-2 p-1 w-full">
                <img className="w-full h-full object-cover object-center block" src="/images/facebook.png"/>
              </div>
            </div>
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-full">
                <img className="w-full h-full object-cover object-center block" src="/images/facebook.png"/>
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img className="w-full object-cover h-full object-center block" src="/images/facebook.png"/>
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img className="w-full object-cover h-full object-center block" src="/images/facebook.png"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Content>
  );
};

export default Graphics;
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
const Content = styled.div`
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #c084fc;
  }
`;
