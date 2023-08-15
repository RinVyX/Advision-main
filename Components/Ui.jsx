import { useState } from "react";
import SecondaryMenu from "./ui structure/SecondaryMenu";
import SideMenu from "./ui structure/SideMenu";
import TopNav from "./ui structure/TopNav";
import { useContext } from "react";
import { State } from "../Context/context";

const Ui = ({ children }) => {
  const { page, subPage, showRightMenu } = useContext(State);
  const [secondaryMenuTransition, setSecondaryMenuTransition] = useState(false);
  console.log("page", page, "subPage", subPage, "showMenu", showRightMenu);
  return (
    <div className=" bg-[url('/Videos/bgVideo2.svg')] bg-cover
                     relative w-screen h-screen overflow-hidden dark:text-white text-slate-800 dark:bg-[url('/images/abstract-3840x2160dark.png')]
                     select-none">
      {/* <div className="bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-pink-900 via-pink-200 to-white 
                    bg-opacity-50 relative w-screen h-screen overflow-hidden dark:text-white text-black dark:bg-[#1f1f1f]
                    select-none"> */}
      {/* <video loop autoPlay playsInline className="h-max w-max opacity-20">
        <source src="/Pattern.mp4" type="video/mp4" />
      </video> */}
      {/* top navigation */}
      <TopNav className="dark:bg-inherit" setSecondaryMenuTransition={setSecondaryMenuTransition} />
      {/* side Nave showRightMenu */}
      <SideMenu
        setSecondaryMenuTransition={setSecondaryMenuTransition}
        secondaryMenuTransition={secondaryMenuTransition}
      />
      {/* main */}
      <div
        className={` ${
          showRightMenu ? "md:w-[100%]" : "md:w-full"
        } h-[calc(100%-80px)] absolute w-full top-[80px] left-0 ease transform duration-500 transition-all`}
      >
        <SecondaryMenu
          secondaryMenuTransition={secondaryMenuTransition}
          setSecondaryMenuTransition={setSecondaryMenuTransition}
        />
        {children}
      </div>
    </div>
  );
};

export default Ui;
