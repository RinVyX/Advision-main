import styled from "styled-components";

const Graphics = ({ subPage }) => {
  return (
    <Content
      className={`w-full  absolute ${
        subPage === "graphics" ? "left-0" : "left-[-200%]"
      } font-Kanit`}
    >
    </Content>
  );
};

export default Graphics;
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
