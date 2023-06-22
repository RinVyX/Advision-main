import styled from "styled-components";
import { State } from "../../../Context/context";
import { useContext } from "react";

const Event = () => {
  const { page, setSubPage } = useContext(State);
  return (
    <Content
      className={`w-full  absolute ${
        subPage === "event" ? "left-0 opacity-1" : "left-[-100%] opacity-0"
      } font-Kanit`}
    >
      <div className="container px-6 py-10 mx-auto ">
        <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">Portfolio of our events</h1>

        <p className="mt-4 text-[20px] text-center text-gray-500 dark:text-gray-300">
          Thanks to all those who helped us, both near and far, our events were a great success.
        </p>
        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
            <div className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group 
                            bg-[url('/images/Affiche-A3-.png')]">
                <div
                    className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                    <h2 className="mt-4 text-xl font-semibold text-white capitalize">SEER</h2>
                    <p className="mt-2 text-lg tracking-wider text-blue-400 uppercase "
                       onClick={() => {
                          setPage("events"),
                          setSubPage("seer"),
                          router.push("/Events"),
                          setShowRightMenu(false);
                        }}> Website </p>
                </div>
            </div>

            <div className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group
                            bg-[url('/images/Affiche-A4.png')]">
                <div
                    className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                    <h2 className="mt-4 text-xl font-semibold text-white capitalize">N-IAE</h2>
                    <p className="mt-2 text-lg tracking-wider text-blue-400 uppercase "
                       onClick={() => {
                            setPage("events"),
                            setSubPage("niae"),
                            router.push("/Events"),
                            setShowRightMenu(false);
                          }}> Website </p>
                </div>
            </div>

            <div className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group
                            bg-[url('/images/EIC-fiche_portrait_V5.jpg')]">
                <div
                    className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                    <h2 className="mt-4 text-xl font-semibold text-white capitalize">EIC</h2>
                    <p className="mt-2 text-lg tracking-wider text-blue-400 uppercase "
                       onClick={() => {
                          setPage("events"),
                          setSubPage("eic"),
                          router.push("/Events"),
                          setShowRightMenu(false);
                        }}> Website </p>
                </div>
            </div>
        </div>
      </div>
    </Content>
  );
};

export default Event;
const Content = styled.div`
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #c084fc;
  }
`;
