import { useRouter } from "next/router";
import { useContext } from "react";
import { State } from "../../Context/context";
import DarkModeToggle from "./ToggleButton";

const SideMenu = () => {
  const router = useRouter();
  const { page, setPage, showRightMenu, setShowRightMenu } = useContext(State);
  return (
    <div
      className={`w-full md:w-full xl:w-full h-full bg-[#9A1A65] dark:bg-[#691243] mix-blend-multiply absolute top-[50%] ${
        !showRightMenu ? "right-[-100%]" : "right-0"
      } z-40 translate-y-[-50%] flex-col flex justify-start ease transform duration-500 transition-all`}
    >
      <div className="ml-[2%] w-full flex gap-4 flex-col mt-[100px] text-8xl font-kanit font-bold uppercase text-white">
        <p
          className={`my-2 cursor-pointer hover:text-[#380f27] hover:text-[6.5rem] hover:italic ${
            page === "agency" ? "text-purple-400" : "text-white"
          }`}
          onClick={() => {
            setPage("agency"), router.push("/Agency"), setShowRightMenu(false);
          }}
        >
          Agence
        </p>
        <p
          className={`my-2 cursor-pointer hover:text-[#380f27] hover:text-[6.5rem] hover:italic ${
            page === "services" ? "text-purple-400" : "text-white"
          }`}
          onClick={() => {
            setPage("services"),
              router.push("/Services"),
              setShowRightMenu(false);
          }}
        >
          Services
        </p>
        <p
          className={`my-2 cursor-pointer hover:text-[#380f27] hover:text-[6.5rem] hover:italic ${
            page === "events" ? "text-purple-400" : "text-white"
          }`}
          onClick={() => {
            setPage("events"), router.push("/Events"), setShowRightMenu(false);
          }}
        >
          Nos Success Story
        </p>
        </div>
        <div ></div>
        <div>
        <p
          className={`my-4 cursor-pointer hover:text-[#380f27] ${
            page === "achievements" ? "text-purple-400" : "text-white"
          }`}
          onClick={() => {
            setPage("achievements"),
              router.push("/Achievements"),
              setShowRightMenu(false);
          }}
        >
          Nos évenements
        </p>
        <p
          className={`my-4 cursor-pointer hover:text-[#380f27] ${
            page === "contact" ? "text-purple-400" : "text-white"
          }`}
          onClick={() => {
            setPage("contact"),
              router.push("/Contact"),
              setShowRightMenu(false);
          }}
        >
          Contact
        </p>
      </div>
      {/* <div className="absolute bottom-20 right-4">
        <DarkModeToggle />
      </div> */}
    </div>
  );
};

export default SideMenu;
