import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import YouTube from "@u-wave/react-youtube";

const Stands = ({ subPage }) => {
  const [pause, setPause] = useState(false);
  const handlePlayerPause = useCallback((event) => {
    console.log("run");
    setPause(true);
  }, []);
  useEffect(() => {
    if (subPage !== "stands") {
      handlePlayerPause();
    }
  }, [subPage]);
  return (
    <Content
      className={`w-full  absolute ${
        subPage === "stands" ? "left-0" : "left-[-200%]"
      } flex justify-center items-start  ease transform duration-500 transition-all w-[95%] md:w-[95%] flex-col font-Signika mx-4 md:mx-10 my-4`}
    >
      <YouTube
        video="dRwHtx3fZDQ"
        width={640}
        height={480}
        controls={true}
        suggestedQuality="auto"
        // onPause={handlePlayerPause}
        paused={pause}
      />
      <button onClick={handlePlayerPause}>pause</button>
    </Content>
  );
};

export default Stands;
const GrayText = styled.p`
  color: #888a9b;
  font-size: 16px;
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
