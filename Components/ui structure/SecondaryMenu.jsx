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
      page === "agence" ||
      page === "services" ||
      page === "events" ||
      page === "nosSuccessStory"
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
              className="absolute w-[100%] h-[60px] font-Kanit font-light"
              onKeyDown={(e) => handleKeyDown(e)}
            >
              <SNav
                className={`w-full h-[60px] absolute ${
                  page === "agence" ? "left-0" : "left-[-100%]"
                } flex justify-start items-center gap-6 pl-5 md:pl-10 ease transform duration-500 transition-all overflow-x-auto`}
              >
                <div
                  className={`cursor-pointer font-semibold mr-2 ${
                    subPage === "philosophie"
                      ? "text-purple-400 drop-shadow-[1px_3px_3px_rgba(0,0,0,0.25)] dark:drop-shadow-[1px_3px_3px_rgba(255,255,255,0.25)] "
                      : "text-[#1F1F21] dark:text-[#F7F7F7]"
                  }`}
                  onClick={() => setSubPage("philosophie")}
                >
                  Philosophie
                </div>
                <div
                  className={`cursor-pointer font-semibold ${
                    subPage === "vision"
                      ? "text-purple-400 drop-shadow-[1px_3px_3px_rgba(0,0,0,0.25)] dark:drop-shadow-[1px_3px_3px_rgba(255,255,255,0.25)]"
                      : "text-[#1F1F21] dark:text-[#F7F7F7]"
                  }`}
                  onClick={() => setSubPage("vision")}
                >
                  Vision
                </div>
                <div
                  className={`cursor-pointer font-semibold ${
                    subPage === "valeur"
                      ? "text-purple-400 drop-shadow-[1px_3px_3px_rgba(0,0,0,0.25)] dark:drop-shadow-[1px_3px_3px_rgba(255,255,255,0.25)]"
                      : "text-[#1F1F21] dark:text-[#F7F7F7]"
                  }`}
                  onClick={() => setSubPage("valeur")}
                >
                  Valeur
                </div>
              </SNav>
              <SNav
                className={`w-full h-[60px] absolute ${
                  page === "services" ? "left-0" : "left-[-100%]"
                } flex justify-start items-center gap-6 pl-5 md:pl-10 ease transform duration-500 transition-all overflow-x-auto`}
              >
                <p
                  className={`cursor-pointer font-semibold ${
                    subPage === "branding"
                      ? "text-purple-400 drop-shadow-[1px_3px_3px_rgba(0,0,0,0.25)] dark:drop-shadow-[1px_3px_3px_rgba(255,255,255,0.25)]"
                      : "text-[#1F1F21] dark:text-[#F7F7F7]"
                  }`}
                  onClick={() => setSubPage("branding")}
                >
                  Branding
                </p>
                <p
                  className={`cursor-pointer font-semibold ${
                    subPage === "graphisme"
                      ? "text-purple-400 drop-shadow-[1px_3px_3px_rgba(0,0,0,0.25)] dark:drop-shadow-[1px_3px_3px_rgba(255,255,255,0.25)]"
                      : "text-[#1F1F21] dark:text-[#F7F7F7]"
                  }`}
                  onClick={() => setSubPage("graphisme")}
                >
                  Graphisme
                </p>
                <p
                  className={`cursor-pointer font-semibold ${
                    subPage === "digital"
                      ? "text-purple-400 drop-shadow-[1px_3px_3px_rgba(0,0,0,0.25)] dark:drop-shadow-[1px_3px_3px_rgba(255,255,255,0.25)]"
                      : "text-[#1F1F21] dark:text-[#F7F7F7]"
                  }`}
                  onClick={() => setSubPage("digital")}
                >
                  Digital
                </p>
                <p
                  className={`cursor-pointer font-semibold ${
                    subPage === "video"
                      ? "text-purple-400 drop-shadow-[1px_3px_3px_rgba(0,0,0,0.25)] dark:drop-shadow-[1px_3px_3px_rgba(255,255,255,0.25)]"
                      : "text-[#1F1F21] dark:text-[#F7F7F7]"
                  }`}
                  onClick={() => setSubPage("video")}
                >
                  Video
                </p>
                <p
                  className={`cursor-pointer font-semibold mr-4 ${
                    subPage === "evenement"
                      ? "text-purple-400 drop-shadow-[1px_3px_3px_rgba(0,0,0,0.25)] dark:drop-shadow-[1px_3px_3px_rgba(255,255,255,0.25)]"
                      : "text-[#1F1F21] dark:text-[#F7F7F7]"
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
                  className={`cursor-pointer font-semibold ${
                    subPage === "niae"
                      ? "text-purple-400 drop-shadow-[1px_3px_3px_rgba(0,0,0,0.25)] dark:drop-shadow-[1px_3px_3px_rgba(255,255,255,0.25)]"
                      : "text-[#1F1F21] dark:text-[#F7F7F7]"
                  }`}
                  onClick={() => setSubPage("niae")}
                >
                  N-IAE
                </p>
                <p
                  className={`cursor-pointer font-semibold ${
                    subPage === "seer"
                      ? "text-purple-400 drop-shadow-[1px_3px_3px_rgba(0,0,0,0.25)] dark:drop-shadow-[1px_3px_3px_rgba(255,255,255,0.25)]"
                      : "text-[#1F1F21] dark:text-[#F7F7F7]"
                  }`}
                  onClick={() => setSubPage("seer")}
                >
                  SEER
                </p>
                <p
                  className={`cursor-pointer font-semibold ${
                    subPage === "eic"
                      ? "text-purple-400 drop-shadow-[1px_3px_3px_rgba(0,0,0,0.25)] dark:drop-shadow-[1px_3px_3px_rgba(255,255,255,0.25)]"
                      : "text-[#1F1F21] dark:text-[#F7F7F7]"
                  }`}
                  onClick={() => setSubPage("eic")}
                >
                  EIC
                </p>
              </SNav>
              <SNav
                className={`w-full h-[60px] absolute ${
                  page === "nosSuccessStory" ? "left-0" : "left-[-100%]"
                } flex justify-start items-center gap-6 ease pl-5 md:pl-10 transform duration-500 transition-all overflow-x-auto`}
              >
                <p
                  className={`cursor-pointer font-semibold ${
                    subPage === "event"
                      ? "text-purple-400 drop-shadow-[1px_3px_3px_rgba(0,0,0,0.25)] dark:drop-shadow-[1px_3px_3px_rgba(255,255,255,0.25)]"
                      : "text-[#1F1F21] dark:text-[#F7F7F7]"
                  }`}
                  onClick={() => setSubPage("event")}
                >
                  Nos evenements
                </p>
                <p
                  className={`cursor-pointer font-semibold ${
                    subPage === "graphics"
                      ? "text-purple-400 drop-shadow-[1px_3px_3px_rgba(0,0,0,0.25)] dark:drop-shadow-[1px_3px_3px_rgba(255,255,255,0.25)]"
                      : "text-[#1F1F21] dark:text-[#F7F7F7]"
                  }`}
                  onClick={() => setSubPage("graphics")}
                >
                  Graphisme
                </p>
                <p
                  className={`cursor-pointer font-semibold ${
                    subPage === "prestation"
                      ? "text-purple-400 drop-shadow-[1px_3px_3px_rgba(0,0,0,0.25)] dark:drop-shadow-[1px_3px_3px_rgba(255,255,255,0.25)]"
                      : "text-[#1F1F21] dark:text-[#F7F7F7]"
                  }`}
                  onClick={() => setSubPage("prestation")}
                >
                  Prestation
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
