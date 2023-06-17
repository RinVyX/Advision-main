import { useEffect, useState } from "react";
import { useTransition, animated } from "react-spring";
import { useContext } from "react";
import { State } from "../../Context/context";
import Seer from "../../Components/pages/Events/Seer";
import Eic from "../../Components/pages/Events/Eic";
import Niae from "../../Components/pages/Events/Niae";
import styled from "styled-components";
import { motion } from "framer-motion";
export default function Events() {
  const { page, subPage, setSubPage } = useContext(State);
  const [animate, setAnimate] = useState(true);
  const Transition = useTransition(animate, {
    from: { left: "-100%", opacity: 0 },
    enter: { left: "0", opacity: 1 },
    leave: { left: "-100%", opacity: 0 },
  });
  return (
    <div className="w-full h-full bg-[#F7F7F7] dark:bg-[#1F1F21]">
      {Transition(
        (style, item) =>
          item && (
            <animated.div
              config={{ duration: 500 }}
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
              <PageWrapper>
                <Niae subPage={subPage} />
                <Seer subPage={subPage} />
                <Eic subPage={subPage} />
              </PageWrapper>
            </animated.div>
          )
      )}
    </div>
  );
}

const PageWrapper = styled.div`
  overflow: auto;
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #c084fc;
  }
  width: 100%;
  height: 100%;
`;
