import { useRouter } from "next/router";
import { useContext } from "react";
import { State } from "../../Context/context";
import DarkModeToggle from "./ToggleButton";

const SideMenu = () => {
  const router = useRouter();
  const { page, setPage, showRightMenu, setShowRightMenu } = useContext(State);
  return (
    <div
      className={`w-full md:w-full xl:w-full h-full bg-[#9A1A65] dark:bg-[#691243] absolute top-[50%] ${
        !showRightMenu ? "right-[-100%]" : "right-0"
      } z-40 translate-y-[-50%] flex-col flex justify-start ease transform duration-500 transition-all`}
    >
      <div className="ml-[2%] w-full flex gap-4 flex-col mt-[100px] text-3xl md:text-6xl font-kanit font-bold uppercase text-white">
        <p
          className={`my-2 cursor-pointer hover:text-[#380f27] hover:text-[4rem] hover:italic ${
            page === "agency" ? "text-[#380f27] italic" : "text-white"
          }`}
          onClick={() => {
            setPage("agency"), router.push("/Agency"), setShowRightMenu(false);
          }}
        >
          Agency
        </p>
        <p
          className={`my-2 cursor-pointer hover:text-[#380f27] hover:text-[4rem] hover:italic ${
            page === "services" ? "text-[#380f27] italic" : "text-white"
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
          className={`my-2 cursor-pointer hover:text-[#380f27] hover:text-[4rem] hover:italic ${
            page === "ourSuccessStories" ? "text-[#380f27] italic" : "text-white"
          }`}
          onClick={() => {
            setPage("ourSuccessStories"), router.push("/OurSuccessStories"), setShowRightMenu(false);
          }}
        >
          Work
        </p>
      </div>
      <hr className="w-[50%] h-1 border-none bg-gradient-to-r from-[#380f27] to-transparent rounded-xl ml-[2%] mt-[2%]" ></hr>
      <div className="ml-[2%] mt-[1%] text-2xl">
        <p
          className={`my-4 cursor-pointer hover:text-[#380f27] hover:italic hover:text-[1.7rem] capitalize ${
            page === "events" ? "text-[#380f27] italic" : "text-white"
          }`}
          onClick={() => {
            setPage("events"),
              router.push("/Events"),
              setShowRightMenu(false);
          }}
        >
          Our events
        </p>
        <p
          className={`my-4 mt-[1%] cursor-pointer hover:text-[#380f27] hover:italic hover:text-[1.7rem] capitalize ${
            page === "contact" ? "text-[#380f27] italic" : "text-white"
          }`}
          onClick={() => {
            setPage("contact"),
              router.push("/Contact"),
              setShowRightMenu(false);
          }}
        >
          Contact us
        </p>
      </div>
      <div className="cols-2">
        <DarkModeToggle />
      </div>
    </div>
  );
};

export default SideMenu;
