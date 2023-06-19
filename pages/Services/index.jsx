import { useEffect, useState } from "react";
import { useTransition, animated } from "react-spring";
import { useContext } from "react";
import { State } from "../../Context/context";
import Digital from "../../Components/pages/Services/Digital";
import Evenement from "../../Components/pages/Services/Evenement";
import Graphisme from "../../Components/pages/Services/Graphisme";
import Branding from "../../Components/pages/Services/Branding";
import Video from "../../Components/pages/Services/Video";
import styled from "styled-components";
export default function Events() {
  const { page, subPage, setSubPage } = useContext(State);
  const [animate, setAnimate] = useState(true);
  const Transition = useTransition(animate, {
    from: { left: "-100%", opacity: 0 },
    enter: { left: "0", opacity: 1 },
    leave: { left: "-100%", opacity: 0 },
  });

  return (
    <Content className="w-full h-full">
      {Transition(
        (style, item) =>
          item && (
            <animated.div
              style={style}
              className={`${
                page === "agence" ||
                page === "services" ||
                page === "events" ||
                page === "nosSuccessStory"
                  ? "top-[60px]"
                  : "top-0"
              } absolute  w-full h-full`}
            >
              <Digital subPage={subPage} />
              <Evenement subPage={subPage} />
              <Graphisme subPage={subPage} />
              <Branding subPage={subPage} />
              <Video subPage={subPage} />
            </animated.div>
          )
      )}
    </Content>
  );
};

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
