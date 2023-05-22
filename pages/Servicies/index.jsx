import { useEffect, useState } from "react";
import { useTransition, animated } from "react-spring";
import { useContext } from "react";
import { State } from "../../Context/context";
import Consulting from "../../Components/pages/Servicies/Consulting";
import Digital from "../../Components/pages/Servicies/Digital";
import Events from "../../Components/pages/Servicies/Events";
import Graphics from "../../Components/pages/Servicies/Graphics";
import Identity from "../../Components/pages/Servicies/Identity";
import Video from "../../Components/pages/Servicies/Video";
import styled from "styled-components";
const index = () => {
  const { page, subPage, setSubPage } = useContext(State);
  const [animate, setAnimate] = useState(true);
  const Transition = useTransition(animate, {
    from: { left: "-100%", opacity: 0 },
    enter: { left: "0", opacity: 1 },
    leave: { left: "-100%", opacity: 0 },
  });

  return (
    <Content className="dark:bg-black">
      {Transition(
        (style, item) =>
          item && (
            <animated.div
              style={style}
              className={`${
                page === "agency" ||
                page === "servicies" ||
                page === "events" ||
                page === "achivments"
                  ? "top-[60px]"
                  : "top-0"
              } absolute  w-full h-full`}
            >
              <Consulting subPage={subPage} />
              <Digital subPage={subPage} />
              <Events subPage={subPage} />
              <Graphics subPage={subPage} />
              <Identity subPage={subPage} />
              <Video subPage={subPage} />
            </animated.div>
          )
      )}
    </Content>
  );
};

export default index;
const Content = styled.div`
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #c084fc;
  }
`;
