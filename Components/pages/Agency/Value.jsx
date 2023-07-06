import Lottie from "lottie-react";
import styled from "styled-components";
import vision from "../../../Lottie/vision.json";
const Value = ({ subPage }) => {
  console.log("subpage: ",subPage);

  return (
    <Container
    className={`w-full h-full absolute dark:bg-gradient-to-t bg-gradient-to-t dark:from-[#24FE41]/30 from-[#24FE41]/80 dark:to-[#0AB462]/30 to-[#0AB462]/80 ${
      subPage === "value" ? "left-0 opacity-1" : "left-[-100%] opacity-0"
    } font-kanit `}
  >
    
    </Container>
  );
};

export default Value;
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
