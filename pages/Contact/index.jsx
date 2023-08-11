import { useEffect, useState } from "react";
import { useTransition, animated } from "react-spring";
import { useContext } from "react";
import { State } from "../../Context/context";
import { CgCopy } from "react-icons/cg";
import Formcontact from "../../Components/pages/Contact/Formcontact";
import styled from "styled-components";

export default function Events() {
  const { page, subPage, setSubPage } = useContext(State);
  const [animate, setAnimate] = useState(true);
  const Transition = useTransition(animate, {
    from: { right: "-100%", opacity: 0 },
    enter: { right: "0", opacity: 1 },
    leave: { right: "-100%", opacity: 0 },
  });

  return (
    <div 
      className="w-full h-[calc(100%-60px)] absolute top-[60px]" 
      tabIndex={0}
    >
      {Transition(
        (style, item) =>
          item && (
            <animated.div
              style={style}
              className="absolute w-[100%] h-full font-kanit"
            >
              <Formcontact subPage={subPage} />
              
            </animated.div>
          )
      )}
    </div>
  );
}

