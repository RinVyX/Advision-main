import { useRouter } from "next/router";
import { useContext } from "react";
import { State } from "../../Context/context";
import DarkModeToggle from "./ToggleButton";

const SideMenu = () => {
  const router = useRouter();
  const { page, setPage, showRightMenu, setShowRightMenu } = useContext(State);
  return (
    <div
      className={`w-[100%] md:w-[50%] xl:w-[25%] h-[100%] bg-[#9A1A65] dark:bg-[#691243] absolute top-[50%] ${
        !showRightMenu ? "right-[-100%]" : "right-0"
      } z-40 translate-y-[-50%] rounded-tl-3xl rounded-bl-3xl flex-col flex justify-start items-center ease transform duration-700 transition-all`}
    >
      <div className="w-full flex justify-center items-center gap-4 flex-col mt-[100px] text-2xl font-semibold font-Signika uppercase text-white">
        <p
          className={`my-4 cursor-pointer hover:text-[#691243] ${
            page === "agency" ? "text-purple-400" : "text-white"
          }`}
          onClick={() => {
            setPage("agency"), router.push("/Agency"), setShowRightMenu(false);
          }}
        >
          Agency
        </p>
        <p
          className={`my-4 cursor-pointer hover:text-black ${
            page === "servicies" ? "text-purple-400" : "text-white"
          }`}
          onClick={() => {
            setPage("servicies"),
              router.push("/Servicies"),
              setShowRightMenu(false);
          }}
        >
          Servicies
        </p>
        <p
          className={`my-4 cursor-pointer hover:text-black ${
            page === "events" ? "text-purple-400" : "text-white"
          }`}
          onClick={() => {
            setPage("events"), router.push("/Events"), setShowRightMenu(false);
          }}
        >
          Events
        </p>
        <p
          className={`my-4 cursor-pointer hover:text-black ${
            page === "achievements" ? "text-purple-400" : "text-white"
          }`}
          onClick={() => {
            setPage("achievements"),
              router.push("/Achievements"),
              setShowRightMenu(false);
          }}
        >
          Achievements
        </p>
        <p
          className={`my-4 cursor-pointer hover:text-black ${
            page === "contact" ? "text-purple-400" : "text-white"
          }`}
          onClick={() => {
            setPage("contact"),
              router.push("/Contact"),
              setShowRightMenu(false);
          }}
        >
          Start a project
        </p>
      </div>
      <div className="absolute bottom-20 right-4">
        <DarkModeToggle />
      </div>
    </div>
  );
};

export default SideMenu;
