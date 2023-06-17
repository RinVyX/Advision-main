import styled from "styled-components";

const Event = ({ subPage }) => {
  return (
    <Content
      className={`w-full  absolute ${
        subPage === "event" ? "left-0" : "left-[-200%]"
      } flex justify-center items-start  ease transform duration-500 transition-all w-[100%] flex-col font-Signika my-4`}
    >
      <div className="grid grid-flow-col justify-stretch">
        <div className="gap-0 ">
          <a href="https://fr.seer-dz.com/"> <img src="/images/stand/berardi.jpg" alt="" className=""/> </a>
        </div>
        <div className="gap-0 ">
          <a href="https://n-iae.com"> <img src="/images/Contrat-de-participation-1_page-0001.jpg" alt="" className=""/> </a>
        </div>
        <div className="gap-0 ">
          <a href="https://fr.seer-dz.com/eic-challenge/"> <img src="/images/bg.png" alt="" className=""/> </a>
        </div>
      </div>
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
