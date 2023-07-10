import { useRouter } from "next/router";
import { useContext } from "react";
import { State } from "../../Context/context";
import DarkModeToggle from "./ToggleButton";

const SideMenu = () => {
  const router = useRouter();
  const { page, setPage, showRightMenu, setShowRightMenu } = useContext(State);
  return (
    <div
      className={`w-full h-full bg-[#9A1A65] dark:bg-[#691243] absolute top-[50%] ${
        !showRightMenu ? "right-[-100%]" : "right-0"
      } z-40 translate-y-[-50%] ease transform duration-500 transition-all`}
    >
      <div className="w-full flex gap-4 flex-col max-md:place-items-center max-md:justify-center mt-[100px] text-5xl md:text-7xl font-kanit font-bold uppercase text-white">
        <div
          className={`md:ml-[2%] my-2 cursor-pointer hover:text-[#380f27] md:hover:text-[4.7rem] hover:text-[3.125rem] hover:italic ${
            page === "agency" ? "text-[#380f27] italic" : "text-white"
          }`}
          onClick={() => {
            setPage("agency"),
            router.push("/Agency"),
            setShowRightMenu(false);
          }}
        >
          Agency
        </div>

        <hr className="md:w-[50%] w-[100%] max-md:place-item-center h-1 border-none bg-gradient-to-r md:from-[#380f27] md:to-transparent from-transparent via-[#380f27] to-transparent rounded-xl md:ml-[2%] mt-[2%]" ></hr>
        
        <div
          className={`md:ml-[2%] my-2 cursor-pointer hover:text-[#380f27] md:hover:text-[4.7rem] hover:text-[3.125rem] hover:italic ${
            page === "services" ? "text-[#380f27] italic" : "text-white"
          }`}
          onClick={() => {
            setPage("services"),
            router.push("/Services"),
            setShowRightMenu(false);
          }}
        >
          Services
        </div>

        <hr className="md:w-[50%] w-[100%] max-md:place-item-center h-1 border-none bg-gradient-to-r md:from-[#380f27] md:to-transparent from-transparent via-[#380f27] to-transparent rounded-xl md:ml-[2%] mt-[2%]" ></hr>
        
        <div
          className={`md:ml-[2%] my-2 cursor-pointer max-md:text-center hover:text-[#380f27] md:hover:text-[4.7rem] hover:text-[3.125rem] hover:italic ${
            page === "ourSuccessStories" ? "text-[#380f27] italic" : "text-white"
          }`}
          onClick={() => {
            setPage("ourSuccessStories"),
            router.push("/OurSuccessStories"),
            setShowRightMenu(false);
          }}
        >
          Our Success Stories
        </div>
      
        <hr className="md:w-[50%] w-[100%] max-md:place-item-center h-1 border-none bg-gradient-to-r md:from-[#380f27] md:to-transparent from-transparent via-[#380f27] to-transparent rounded-xl md:ml-[2%] mt-[2%]" ></hr>
      
        <div
          className={`md:ml-[2%] my-2 cursor-pointer hover:text-[#380f27] md:hover:text-[4.7rem] hover:text-[3.125rem] hover:italic ${
            page === "events" ? "text-[#380f27] italic" : "text-white"
          }`}
          onClick={() => {
            setPage("events"),
              router.push("/Events"),
              setShowRightMenu(false);
          }}
        >
          Our events
        </div>

        <hr className="md:w-[50%] w-[100%] max-md:place-item-center h-1 border-none bg-gradient-to-r md:from-[#380f27] md:to-transparent from-transparent via-[#380f27] to-transparent rounded-xl md:ml-[2%] mt-[2%]" ></hr>
        
        <div
          className={`md:ml-[2%] my-2 cursor-pointer hover:text-[#380f27] md:hover:text-[4.7rem] hover:text-[3.125rem] hover:italic ${
            page === "contact" ? "text-[#380f27] italic" : "text-white"
          }`}
          onClick={() => {
            setPage("contact"),
              router.push("/Contact"),
              setShowRightMenu(false);
          }}
        >
          Contact us
        </div>
      </div>
      {/* <div className="cols-2">
        <DarkModeToggle />
      </div> */}
    </div>
  );
};

export default SideMenu;
