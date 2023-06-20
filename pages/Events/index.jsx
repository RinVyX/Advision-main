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
    <div className="w-full h-[calc(100%-60px)] absolute top-[60px] dark:bg-[#1f1f1f] ">
      {Transition(
        (style, item) =>
          item && (
            <animated.div
              config={{ duration: 500 }}
              style={style}
              className={` top-[0px] left-0 absolute w-full h-full `}
            >
            
              <Niae subPage={subPage} />
              <Seer subPage={subPage} />
              <Eic subPage={subPage} />
            
            </animated.div>
          )
      )}
    </div>
  );
}