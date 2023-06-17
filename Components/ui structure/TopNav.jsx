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
    <nav className="top-0 absolute left-0 w-full h-[80px] bg-[#F7F7F7] dark:bg-[#1F1F21] flex justify-between items-center border-gray-400 dark:border-gray-100 dark:text-white text-black">
      {/* logo */}
      <div
        className="w-[80px] h-[80px] flex justify-center items-center ml-1 md:ml-10"
        onClick={() => {
          {
            setPage("home"), router.push("/");
          }
        }}
      >
        <img
          src="/images/logo.png"
          alt="logo"
          className="w-[62px] h-[62px] cursor-pointer"
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
        </p>
        <p
          onClick={() => {
            setPage("agence"), router.push("/Agence");
          }}
          className={`mx-4 font-Signika font-medium ${
            showRightMenu ? "opacity-0" : "opacity-1"
          } cursor-pointer transition ease transform duration-300`}
        >
          Nous connaître
        </p>
        <p
          onClick={() => {
            setPage("contact"), router.push("/Contact");
          }}
          className={`mx-4 font-Signika font-medium ${
            showRightMenu ? "opacity-0" : "opacity-1"
          } cursor-pointer transition ease transform duration-300`}
        >
          Contact
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
            className={`${genericHamburgerLine} w-6 ${
              showRightMenu
                ? "rotate-45 translate-y-[10px]  opacity-50 group-hover:opacity-100"
                : "opacity-50 group-hover:opacity-100"
            }`}
          />
          <div
            className={`${genericHamburgerLine} ${
              showRightMenu
                ? "opacity-0 w-6"
                : "opacity-50 group-hover:opacity-100 w-6"
            }`}
          />
          <div
            className={`${genericHamburgerLine} w-6 ${
              showRightMenu
                ? "-rotate-45 -translate-y-[10px] opacity-50 group-hover:opacity-100"
                : "opacity-50 group-hover:opacity-100 w-6"
            }`}
          />
        </button>
      </div>
    </nav>
  );
};

export default TopNav;
