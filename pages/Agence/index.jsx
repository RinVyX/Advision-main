import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useTransition, animated } from "react-spring";
import { useContext } from "react";
import { State } from "../../Context/context";
import Valeur from "../../Components/pages/Agence/Valeur";
import Vision from "../../Components/pages/Agence/Vision";
import Philosophie from "../../Components/pages/Agence/Philosophie";
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
      if (subPage === "valeur") {
        setSubPage("vision");
      }
      if (subPage === "vision") {
        setSubPage("philosophie");
      }
      if (subPage === "philosophie") {
        setSubPage("valeur");
      }
    }
    if ((e.key = "ArrowLeft")) {
      if (subPage === "valeur") {
        setSubPage("philosophie");
      }
      if (subPage === "philosophie") {
        setSubPage("vision");
      }
      if (subPage === "vision") {
        setSubPage("valeur");
      }
    }
  };
  return (
    <div
      className="w-full h-[calc(100%-60px)] absolute top-[60px] overflow-hidden text-black dark:text-white"
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
              <Valeur subPage={subPage} />
              <Vision subPage={subPage} />
              <Philosophie subPage={subPage} />              
            </animated.div>
          )
      )}
    </div>
  );
}
