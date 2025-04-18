import { useEffect, useState } from "react";
import { useTransition, animated } from "react-spring";
import { useContext } from "react";
import { State } from "../../Context/context";
import Event from "../../Components/pages/OurSuccessStories/Event";
import Graphics from "../../Components/pages/OurSuccessStories/Graphics";
import Digital from "../../Components/pages/OurSuccessStories/Digital";
import styled from "styled-components";

export default function Events() {
  const { page, subPage, setSubPage } = useContext(State);
  const [animate, setAnimate] = useState(false);
  const Transition = useTransition(animate, {
    from: { left: "-100%", opacity: 0 },
    enter: { left: "0", opacity: 1 },
    leave: { left: "-100%", opacity: 0 },
  });
  useEffect(() => {
    if (page === "ourSuccessStories") {
      setAnimate(true);
    } else {
      setAnimate(false);
    }
  }, [page]);
  return (
    <div className="w-full h-[calc(100%-60px)] absolute top-[60px]">
      {Transition(
        (style, item) =>
          item && (
            <animated.div
              config={{ duration: 500 }}
              style={style}
              className={` top-[0px] left-0 absolute w-full h-full `}
            >
            
              <Event subPage={subPage} />
              <Graphics subPage={subPage} />
              <Digital subPage={subPage} />
            
            </animated.div>
          )
      )}
    </div>
  );
}