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
    <div className="relative w-screen h-screen overflow-hidden dark:text-white text-black">
      {/* top navigation */}
      <TopNav setSecondaryMenuTransition={setSecondaryMenuTransition} />
      {/* side Nave showRightMenu */}
      <SideMenu
        setSecondaryMenuTransition={setSecondaryMenuTransition}
        secondaryMenuTransition={secondaryMenuTransition}
      />
      {/* main */}
      <div
        className={` ${
          showRightMenu ? "md:w-[100%]" : "md:w-full"
        } h-[calc(100%-80px)] absolute w-full top-[80px] left-0  ease transform duration-500 transition-all`}
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
