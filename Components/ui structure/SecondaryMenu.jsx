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
      page === "servicies" ||
      page === "events" ||
      page === "achievements"
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
              className="absolute w-[100%] h-[60px] font-Signika font-light dark:bg-black"
              onKeyDown={(e) => handleKeyDown(e)}
            >
              <SNav
                className={`w-full h-[60px] absolute ${
                  page === "agency" ? "left-0" : "left-[-100%]"
                } flex justify-start items-center gap-6 pl-5 md:pl-10 ease transform duration-500 transition-all overflow-x-auto`}
              >
                <p
                  className={`cursor-pointer font-semibold mr-2 ${
                    subPage === "philosophy"
                      ? "text-purple-400"
                      : "text-black dark:text-white"
                  }`}
                  onClick={() => setSubPage("philosophy")}
                >
                  Philosophy
                </p>
                <p
                  className={`cursor-pointer font-semibold ${
                    subPage === "communication"
                      ? "text-purple-400"
                      : "text-black dark:text-white"
                  }`}
                  onClick={() => setSubPage("communication")}
                >
                  Communication
                </p>
                <p
                  className={`cursor-pointer font-semibold ${
                    subPage === "equipe"
                      ? "text-purple-400"
                      : "text-black dark:text-white"
                  }`}
                  onClick={() => setSubPage("equipe")}
                >
                  Team
                </p>
                <p
                  className={`cursor-pointer font-semibold mr-2 ${
                    subPage === "b2b"
                      ? "text-purple-400"
                      : "text-black dark:text-white"
                  }`}
                  onClick={() => setSubPage("b2b")}
                >
                  Marketing B2B
                </p>
                <p
                  className={`cursor-pointer font-semibold ${
                    subPage === "engagment"
                      ? "text-purple-400"
                      : "text-black dark:text-white"
                  }`}
                  onClick={() => setSubPage("engagment")}
                >
                  Engagement
                </p>
                <p
                  className={`cursor-pointer font-semibold ${
                    subPage === "apportDAffaire"
                      ? "text-purple-400"
                      : "text-black dark:text-white"
                  }`}
                  onClick={() => setSubPage("apportDAffaire")}
                >
                  Apport d'Affaires
                </p>
              </SNav>
              <SNav
                className={`w-full h-[60px] absolute ${
                  page === "servicies" ? "left-0" : "left-[-100%]"
                } flex justify-start items-center gap-6 pl-5 md:pl-10 ease transform duration-500 transition-all overflow-x-auto`}
              >
                <p
                  className={`cursor-pointer font-semibold ${
                    subPage === "consulting"
                      ? "text-purple-400"
                      : "text-black dark:text-white"
                  }`}
                  onClick={() => setSubPage("consulting")}
                >
                  Consulting
                </p>
                <p
                  className={`cursor-pointer font-semibold ${
                    subPage === "identity"
                      ? "text-purple-400"
                      : "text-black dark:text-white"
                  }`}
                  onClick={() => setSubPage("identity")}
                >
                  Identity
                </p>
                <p
                  className={`cursor-pointer font-semibold ${
                    subPage === "graphics"
                      ? "text-purple-400"
                      : "text-black dark:text-white"
                  }`}
                  onClick={() => setSubPage("graphics")}
                >
                  Graphics
                </p>
                <p
                  className={`cursor-pointer font-semibold ${
                    subPage === "digital"
                      ? "text-purple-400"
                      : "text-black dark:text-white"
                  }`}
                  onClick={() => setSubPage("digital")}
                >
                  Digital
                </p>
                <p
                  className={`cursor-pointer font-semibold ${
                    subPage === "video"
                      ? "text-purple-400"
                      : "text-black dark:text-white"
                  }`}
                  onClick={() => setSubPage("video")}
                >
                  Video
                </p>
                <p
                  className={`cursor-pointer font-semibold mr-4 ${
                    subPage === "events"
                      ? "text-purple-400"
                      : "text-black dark:text-white"
                  }`}
                  onClick={() => setSubPage("events")}
                >
                  Events
                </p>
                <p
                  className={`cursor-pointer font-semibold mr-4 ${
                    subPage === "teamBuilding"
                      ? "text-purple-400"
                      : "text-black dark:text-white"
                  }`}
                  onClick={() => setSubPage("teamBuilding")}
                >
                  Team Building
                </p>
                <p
                  className={`cursor-pointer font-semibold mr-4 ${
                    subPage === "advertisement"
                      ? "text-purple-400"
                      : "text-black dark:text-white"
                  }`}
                  onClick={() => setSubPage("advertisement")}
                >
                  Advertisement
                </p>               
                
              </SNav>
              <SNav
                className={`w-full h-[60px] absolute ${
                  page === "events" ? "left-0" : "left-[-100%]"
                } flex justify-start items-center  gap-6  ease pl-5 md:pl-10 transform duration-500 transition-all overflow-x-auto`}
              >
                <p
                  className={`cursor-pointer font-semibold ${
                    subPage === "event"
                      ? "text-purple-400"
                      : "text-black dark:text-white"
                  }`}
                  onClick={() => setSubPage("event")}
                >
                  Events
                </p>
                <p
                  className={`cursor-pointer font-semibold ${
                    subPage === "graphics"
                      ? "text-purple-400"
                      : "text-black dark:text-white"
                  }`}
                  onClick={() => setSubPage("graphics")}
                >
                  Graphics
                </p>
                <p
                  className={`cursor-pointer font-semibold ${
                    subPage === "digital"
                      ? "text-purple-400"
                      : "text-black dark:text-white"
                  }`}
                  onClick={() => setSubPage("digital")}
                >
                  Digital
                </p>
              </SNav>
              <SNav
                className={`w-full h-[60px] absolute ${
                  page === "achievements" ? "left-0" : "left-[-100%]"
                } flex justify-start items-center  gap-6  ease pl-5 md:pl-10 transform duration-500 transition-all overflow-x-auto whitespace-nowrap`}
              >
                <p
                  className={`cursor-pointer font-semibold ${
                    subPage === "event"
                      ? "text-purple-400"
                      : "text-black dark:text-white"
                  }`}
                  onClick={() => setSubPage("event")}
                >
                  Events
                </p>
                <p
                  className={`cursor-pointer font-semibold ${
                    subPage === "graphics"
                      ? "text-purple-400"
                      : "text-black dark:text-white"
                  }`}
                  onClick={() => setSubPage("graphics")}
                >
                  Graphics
                </p>
                <p
                  className={`cursor-pointer font-semibold ${
                    subPage === "digital"
                      ? "text-purple-400"
                      : "text-black dark:text-white"
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
