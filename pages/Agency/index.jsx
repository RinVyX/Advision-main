import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useTransition, animated } from "react-spring";
import { useContext } from "react";
import { State } from "../../Context/context";
import Vision from "../../Components/pages/Agency/Vision";
import Engagement from "../../Components/pages/Agency/Engagement";
import Communication from "../../Components/pages/Agency/Communication";
import B2b from "../../Components/pages/Agency/B2b";
import styled from "styled-components";
export default function Events({ showMeni }) {
  const { page, subPage, setSubPage } = useContext(State);
  const [animate, setAnimate] = useState(true);
  const Transition = useTransition(animate, {
    from: { left: "-100%", opacity: 0 },
    enter: { left: "0", opacity: 1 },
    leave: { left: "-100%", opacity: 0 },
  });
  const handleKeyDown = (e) => {
    console.log(e);
    if ((e.key = "ArrowRight")) {
      if (subPage === "vision") {
        setSubPage("engagment");
      }
      if (subPage === "engagment") {
        setSubPage("communication");
      }
      if (subPage === "communication") {
        setSubPage("b2b");
      }
      if (subPage === "b2b") {
        setSubPage("vision");
      }
    }
    if ((e.key = "ArrowLeft")) {
      if (subPage === "engagment") {
        setSubPage("vision");
      }
      if (subPage === "communication") {
        setSubPage("engagment");
      }
      if (subPage === "b2b") {
        setSubPage("communication");
      }
      if (subPage === "vision") {
        setSubPage("b2b");
      }
    }
  };
  return (
    <div
      className="w-full h-[calc(100%-60px)] absolute bg-gray-50 top-[60px] overflow-hidden text-black dark:text-white dark:bg-black"
      onKeyDown={(e) => handleKeyDown(e)}
      tabIndex={0}
    >
      {Transition(
        (style, item) =>
          item && (
            <animated.div
              config={{ duration: 500 }}
              style={style}
              className={` top-[0px] left-0 absolute w-full h-full `}
            >
              <Vision subPage={subPage} />
              <Engagement subPage={subPage} />
              <Communication subPage={subPage} />
              <B2b subPage={subPage} />
            </animated.div>
          )
      )}
    </div>
  );
}
