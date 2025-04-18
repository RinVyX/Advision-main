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
              className="absolute w-[100%] font-kanit font-bold"
              onKeyDown={(e) => handleKeyDown(e)}
            >
              <SNav
                className={`w-full h-[120px] absolute md:grid md:grid-cols-5 backdrop-blur-sm
                  ${ page === "agency" ? "left-0" : "left-[-100%]" } 
                  ${ subPage === "philosophy" ? "bg-[#61045F]/80 dark:bg-[#61045F]/30" : 
                     subPage === "vision" ? "bg-[#F09819]/80 dark:bg-[#F09819]/30" : "bg-[#0AB462]/80 dark:bg-[#0AB462]/30" }
                  flex place-items-center text-xl md:text-3xl
                  max-md:flex-col`}
              >                
                <div
                  className={`cursor-pointer md:col-start-2 max-md:pt-2  ${
                    subPage === "philosophy"
                      ? "text-[#ff69c5] underline underline-offset-2"
                      : "text-slate-700/80 dark:text-slate-200/50 hover:text-[#ff53bd] underline underline-offset-2"
                  }`}
                  onClick={() => setSubPage("philosophy")}
                >
                  PHILOSOPHY
                </div>
                <div
                  className={`cursor-pointer max-md:py-1  ${
                    subPage === "vision"
                      ? "text-[#EDDE5D] underline underline-offset-2"
                      : "text-slate-700/80 dark:text-slate-200/50 hover:text-[#ebd939] underline underline-offset-2"
                  }`}
                  onClick={() => setSubPage("vision")}
                >
                  VISION
                </div>
                <div
                  className={`cursor-pointer ${
                    subPage === "value"
                      ? "text-[#24FE41] underline underline-offset-2"
                      : "text-slate-700/80 dark:text-slate-200/50 hover:text-[#2ecc43] underline underline-offset-2"
                  }`}
                  onClick={() => setSubPage("value")}
                >
                  VALUE
                </div>
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
