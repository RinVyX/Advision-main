import { useEffect, useState } from "react";
import { useTransition, animated } from "react-spring";
import { useContext } from "react";
import { State } from "../../Context/context";
import Event from "../../Components/pages/Achievements/Event";
import Graphics from "../../Components/pages/Achievements/Graphics";
import Digital from "../../Components/pages/Achievements/Digital";
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
    if (page === "achievements") {
      setAnimate(true);
    } else {
      setAnimate(false);
    }
  }, [page]);
  return (
    <div className="w-full h-full bg-white dark:bg-black">
      {Transition(
        (style, item) =>
          item && (
            <animated.div
              config={{ duration: 500 }}
              style={style}
              className={`${
                page === "agency" ||
                page === "servicies" ||
                page === "events" ||
                page === "achievements"
                  ? "top-[60px]"
                  : "top-0"
              } absolute  w-full h-full`}
            >
              <PageWrapper>
                <Event subPage={subPage} />
                <Graphics subPage={subPage} />
                <Digital subPage={subPage} />
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
