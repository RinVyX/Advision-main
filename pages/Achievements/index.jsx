import { useEffect, useState } from "react";
import { useTransition, animated } from "react-spring";
import { useContext } from "react";
import { State } from "../../Context/context";
import Seer18 from "../../Components/pages/Achievements/Seer18";
import Seer19 from "../../Components/pages/Achievements/Seer19";
import Seer20 from "../../Components/pages/Achievements/Seer20";
import Seer21 from "../../Components/pages/Achievements/Seer21";
import Seer22 from "../../Components/pages/Achievements/Seer22";
import Seer23 from "../../Components/pages/Achievements/Seer23";
import Stands from "../../Components/pages/Achievements/Stands";
import Eva from "../../Components/pages/Achievements/Eva";
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
                <Seer18 subPage={subPage} />
                <Seer19 subPage={subPage} />
                <Seer20 subPage={subPage} />
                <Seer21 subPage={subPage} />
                <Seer22 subPage={subPage} />
                <Seer23 subPage={subPage} />
                <Eva subPage={subPage} />
                <Stands subPage={subPage} />
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
