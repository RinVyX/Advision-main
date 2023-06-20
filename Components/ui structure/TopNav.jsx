import { useRouter } from "next/router";
import React from "react";
import { useContext } from "react";
import { State } from "../../Context/context";
import DarkModeToggle from "./ToggleButton";
const TopNav = () => {
  const router = useRouter();
  const { setPage, showRightMenu, setShowRightMenu } = useContext(State);
  const genericHamburgerLine = `h-[2px] my-[4px] rounded-full bg-black dark:bg-white transition ease transform duration-300`;
  return (
    <nav className="top-0 absolute left-0 w-full h-[80px] dark:bg-inherit flex justify-between items-center ">
      {/* logo */}
      <div
        className="w-[170px] flex justify-center items-center ml-1 md:ml-10"
        onClick={() => {
          {
            setPage("home"), router.push("/");
          }
        }}
      >
        <img
          src="/images/advisionwhitetahawour.png"
          alt="logo"
          className="cursor-pointer"
        />
      </div>
      {/* home contact burger */}
      <div className="h-full ml-10 flex justify-center items-center gap-2 md:gap-2 mr-[2px] md:mr-10 z-50">
        {/* <p
          onClick={() => {
            setPage("home"), router.push("/");
          }}
          className={`mx-4 font-Signika font-medium ${
            showRightMenu ? "opacity-0" : "opacity-1"
          }  cursor-pointer transition ease transform duration-300`}
        >
          Acceuil
        </p> */}
        <div
          className={`mx-4 font-Signika font-medium ${
            showRightMenu ? "opacity-0" : "opacity-1"
          } cursor-pointer transition ease transform duration-300`}
        >
          <DarkModeToggle />
        </div>
        <button
          className="flex flex-col h-12 w-12 justify-center items-center group"
          onClick={() => setShowRightMenu(!showRightMenu)}
        >
          <div
            className={`${genericHamburgerLine} w-8 ${
              showRightMenu
                ? "rotate-45 translate-y-[10px]  opacity-50 group-hover:opacity-100"
                : "opacity-50 group-hover:opacity-100"
            }`}
          />
          <div
            className={`${genericHamburgerLine} ${
              showRightMenu
                ? "opacity-0 w-8"
                : "opacity-50 group-hover:opacity-100 w-8"
            }`}
          />
          <div
            className={`${genericHamburgerLine} w-8 ${
              showRightMenu
                ? "-rotate-45 -translate-y-[10px] opacity-50 group-hover:opacity-100"
                : "opacity-50 group-hover:opacity-100 w-8"
            }`}
          />
        </button>
      </div>
    </nav>
  );
};

export default TopNav;
