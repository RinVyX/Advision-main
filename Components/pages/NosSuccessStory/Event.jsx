import styled from "styled-components";

const Event = ({ subPage }) => {
  return (
    <Content
      className={`w-full  absolute ${
        subPage === "event" ? "left-0" : "left-[-200%]"
      } flex justify-center items-start  ease transform duration-500 transition-all w-[95%] md:w-[95%] flex-col font-Signika mx-4 md:mx-10 my-4`}
    >
      <div className="w-full h-[140px] "></div>
    </Content>
  );
};

export default Event;
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
