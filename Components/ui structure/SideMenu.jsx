import { useRouter } from "next/router";
import { useContext } from "react";
import { State } from "../../Context/context";
import DarkModeToggle from "./ToggleButton";

const SideMenu = () => {
  const router = useRouter();
  const { page, setPage, showRightMenu, setShowRightMenu } = useContext(State);
  return (
    <div
      id="backdoor"            
      className={`w-full md:w-full xl:w-full h-full bg-[#9A1A65] dark:bg-[#691243] absolute top-[50%] ${
        !showRightMenu ? "right-[-100%]" : "right-0"
      } z-40 translate-y-[-50%] flex-col flex justify-start transform transition-opacity ease-in duration-700 opacity-100`}
    >
      <div className="ml-[2%] w-full flex gap-4 flex-col mt-[100px] text-5xl md:text-8xl font-kanit font-bold uppercase text-slate-200 dark:text-slate-50">
        <p
          className={`my-2 cursor-pointer hover:text-[#380f27] hover:text-[6.125rem] hover:italic ${
            page === "agence" ? "text-[#41142e] italic dark:text-[#2b0a1d]" : "text-slate-100"
          }`}
          onClick={() => {
            setPage("agence"), router.push("/Agence"), setShowRightMenu(false);
          }}
        >
          Agence
        </p>
        <p
          className={`my-2 cursor-pointer hover:text-[#380f27] hover:text-[6.125rem] hover:italic ${
            page === "services" ? "text-[#41142e] dark:text-[#2b0a1d] italic" : "text-slate-100"
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
          className={`my-2 cursor-pointer hover:text-[#380f27] hover:text-[6.125rem] hover:italic ${
            page === "nosSuccessStory" ? "text-[#41142e] dark:text-[#2b0a1d] italic" : "text-slate-100"
          }`}
          onClick={() => {
            setPage("nosSuccessStory"), router.push("/NosSuccessStory"), setShowRightMenu(false);
          }}
        >
          Nos Success Story
        </p>
      </div>
      <hr className="w-[50%] h-1 border-none bg-gradient-to-r from-[#380f27] to-transparent rounded-xl ml-[2%] mt-[2%]" ></hr>
      <div className="ml-[2%] mt-[1%] text-7xl">
        <p
          className={`my-4 cursor-pointer hover:text-[#380f27] hover:italic hover:text-[4.7rem] capitalize ${
            page === "events" ? "text-[#41142e] dark:text-[#2b0a1d] italic" : "text-slate-100"
          }`}
          onClick={() => {
            setPage("events"),
              router.push("/Events"),
              setShowRightMenu(false);
          }}
        >
          Nos évenements
        </p>
        <p
          className={`my-4 mt-[1%] cursor-pointer hover:text-[#380f27] hover:italic hover:text-[4.7rem] capitalize ${
            page === "contact" ? "text-[#41142e] dark:text-[#2b0a1d] italic" : "text-slate-100"
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
