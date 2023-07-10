import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useTransition, animated } from "react-spring";
import { useContext } from "react";
import { State } from "../../Context/context";
import Value from "../../Components/pages/Agency/Value";
import Vision from "../../Components/pages/Agency/Vision";
import Philosophy from "../../Components/pages/Agency/Philosophy";
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
      if (subPage === "value") {
        setSubPage("vision");
      }
      if (subPage === "vision") {
        setSubPage("philosophy");
      }
      if (subPage === "philosophy") {
        setSubPage("value");
      }
    }
    if ((e.key = "ArrowLeft")) {
      if (subPage === "value") {
        setSubPage("philosophy");
      }
      if (subPage === "philosophy") {
        setSubPage("vision");
      }
      if (subPage === "vision") {
        setSubPage("value");
      }
    }
  };
  
  return (
    <div
      className="w-full h-[calc(100%-120px)] absolute top-[120px] "
      onKeyDown={(e) => handleKeyDown(e)}
      tabIndex={0}
    >
      {Transition(
        (style, item) =>
          item && (
            <animated.div
              config={{ duration: 500 }}
              style={style}
              className={`left-0 absolute w-full h-full `}
            >
              <Value subPage={subPage} />
              <Vision subPage={subPage} />
              <Philosophy subPage={subPage} />
            </animated.div>
          )
      )}
    </div>
  );
}
