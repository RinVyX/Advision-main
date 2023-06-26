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

  const handleKeyDown = (e) => {
    console.log(e);
    if ((e.key = "ArrowRight")) {
      if (subPage === "Digital") {
        setSubPage("Evenement");
      }
      if (subPage === "Evenement") {
        setSubPage("Graphisme");
      }
      if (subPage === "Graphisme") {
        setSubPage("Branding");
      }
      if (subPage === "Branding") {
        setSubPage("Video");
      }
      if (subPage === "Video") {
        setSubPage("Digital");
      }
    }
    if ((e.key = "ArrowLeft")) {
      if (subPage === "Digital") {
        setSubPage("Video");
      }
      if (subPage === "Video") {
        setSubPage("Branding");
      }
      if (subPage === "Branding") {
        setSubPage("Graphisme");
      }
      if (subPage === "Graphisme") {
        setSubPage("Evenement");
      }
      if (subPage === "Evenement") {
        setSubPage("Digital");
      }
    }
  };

  return (
    <div
      className="w-full h-[calc(100%-60px)] absolute top-[60px]"
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
              <Digital subPage={subPage} />
              <Evenement subPage={subPage} />
              <Graphisme subPage={subPage} />
              <Branding subPage={subPage} />
              <Video subPage={subPage} />
            </animated.div>
          )
      )}
    </div>
  );
};

