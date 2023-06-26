import { useEffect } from "react";
import { useTransition, animated } from "react-spring";
import { useContext } from "react";
import { State } from "../../Context/context";
import styled from "styled-components";
const SecondaryMenu = ({
  secondaryMenuTransition,
  setSecondaryMenuTransition,
}) => {
  const { page, subPage, setSubPage } = useContext(State);
  const menuTransition = useTransition(secondaryMenuTransition, {
    from: { left: "-100%", opacity: 0 },
    enter: { left: "0", opacity: 1 },
    leave: { top: "-100%", opacity: 0 },
  });

  useEffect(() => {
    if (
      page === "agency" ||
      page === "services" ||
      page === "events" ||
      page === "ourSuccessStories"
    ) {
      setSecondaryMenuTransition(true);
    } else {
      setSecondaryMenuTransition(false);
    }
  }, [page]);
  const handleKeyDown = (e) => {
    console.log("Hello world");
  };
  return (
    <>
      {menuTransition(
        (style, item) =>
          item && (
            <animated.nav
              style={style}
              className="absolute w-[100%] h-[60px] font-kanit font-bold"
              onKeyDown={(e) => handleKeyDown(e)}
            >
              <SNav
                className={`w-full h-[60px] absolute ${
                  page === "agency" ? "left-0" : "left-[-100%]"
                } flex justify-start items-center gap-6 pl-5 md:pl-10 ease transform duration-500 transition-all overflow-x-auto`}
              >
                <div
                  className={`cursor-pointer mr-2 ${
                    subPage === "philosophy"
                      ? "text-purple-400"
                      : "text-slate-900 dark:text-white"
                  }`}
                  onClick={() => setSubPage("philosophy")}
                >
                  Philosophy
                </div>
                <div
                  className={`cursor-pointer ${
                    subPage === "vision"
                      ? "text-purple-400"
                      : "text-slate-900 dark:text-white"
                  }`}
                  onClick={() => setSubPage("vision")}
                >
                  Vision
                </div>
                <div
                  className={`cursor-pointer ${
                    subPage === "value"
                      ? "text-purple-400"
                      : "text-slate-900 dark:text-white"
                  }`}
                  onClick={() => setSubPage("value")}
                >
                  Value
                </div>
              </SNav>
              <SNav
                className={`w-full h-[60px] absolute ${
                  page === "services" ? "left-0" : "left-[-100%]"
                } flex justify-start items-center gap-6 pl-5 md:pl-10 ease transform duration-500 transition-all overflow-x-auto`}
              >
                <p
                  className={`cursor-pointer ${
                    subPage === "branding"
                      ? "text-purple-400"
                      : "text-slate-900 dark:text-white"
                  }`}
                  onClick={() => setSubPage("branding")}
                >
                  Branding
                </p>
                <p
                  className={`cursor-pointer ${
                    subPage === "graphisme"
                      ? "text-purple-400"
                      : "text-slate-900 dark:text-white"
                  }`}
                  onClick={() => setSubPage("graphisme")}
                >
                  Graphisme
                </p>
                <p
                  className={`cursor-pointer ${
                    subPage === "digital"
                      ? "text-purple-400"
                      : "text-slate-900 dark:text-white"
                  }`}
                  onClick={() => setSubPage("digital")}
                >
                  Digital
                </p>
                <p
                  className={`cursor-pointer ${
                    subPage === "video"
                      ? "text-purple-400"
                      : "text-slate-900 dark:text-white"
                  }`}
                  onClick={() => setSubPage("video")}
                >
                  Video
                </p>
                <p
                  className={`cursor-pointer mr-4 ${
                    subPage === "evenement"
                      ? "text-purple-400"
                      : "text-slate-900 dark:text-white"
                  }`}
                  onClick={() => setSubPage("evenement")}
                >
                  Evenement
                </p>                
              </SNav>
              <SNav
                className={`w-full h-[60px] absolute ${
                  page === "events" ? "left-0" : "left-[-100%]"
                } flex justify-start items-center  gap-6  ease pl-5 md:pl-10 transform duration-500 transition-all overflow-x-auto`}
              >
                <p
                  className={`cursor-pointer ${
                    subPage === "niae"
                      ? "text-purple-400"
                      : "text-slate-900 dark:text-white"
                  }`}
                  onClick={() => setSubPage("niae")}
                >
                  N-IAE
                </p>
                <p
                  className={`cursor-pointer ${
                    subPage === "seer"
                      ? "text-purple-400"
                      : "text-slate-900 dark:text-white"
                  }`}
                  onClick={() => setSubPage("seer")}
                >
                  SEER
                </p>
                <p
                  className={`cursor-pointer ${
                    subPage === "eic"
                      ? "text-purple-400"
                      : "text-slate-900 dark:text-white"
                  }`}
                  onClick={() => setSubPage("eic")}
                >
                  EIC
                </p>
              </SNav>
              <SNav
                className={`w-full h-[60px] absolute ${
                  page === "ourSuccessStories" ? "left-0" : "left-[-100%]"
                } flex justify-start items-center  gap-6  ease pl-5 md:pl-10 transform duration-500 transition-all overflow-x-auto whitespace-nowrap`}
              >
                <p
                  className={`cursor-pointer ${
                    subPage === "event"
                      ? "text-purple-400"
                      : "text-slate-900 dark:text-white"
                  }`}
                  onClick={() => setSubPage("event")}
                >
                  Events
                </p>
                <p
                  className={`cursor-pointer ${
                    subPage === "graphics"
                      ? "text-purple-400"
                      : "text-slate-900 dark:text-white"
                  }`}
                  onClick={() => setSubPage("graphics")}
                >
                  Graphics
                </p>
                <p
                  className={`cursor-pointer ${
                    subPage === "digital"
                      ? "text-purple-400"
                      : "text-slate-900 dark:text-white"
                  }`}
                  onClick={() => setSubPage("digital")}
                >
                  Digital
                </p>
              </SNav>
            </animated.nav>
          )
      )}
    </>
  );
};

export default SecondaryMenu;
const SNav = styled.nav`
  &::-webkit-scrollbar {
    height: 4px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: #c084fc;
  }
`;
