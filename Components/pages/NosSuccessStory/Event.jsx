import styled from "styled-components";
import { useRouter } from "next/router";
import { useContext } from "react";
import { State } from "../../../Context/context";

const Event = ({ subPage }) => {
  const router = useRouter();
  const { page, setPage, setSubPage, showRightMenu, setShowRightMenu } = useContext(State);

  
  return (
    <Container
      className={`w-full absolute ${
        subPage === "event" ? "left-0 opacity-1" : "left-[-100%] opacity-0"
      } font-Kanit`}
    >

      <div className="container px-6 py-10 mx-auto ">
        <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">Portfolio of our events</h1>

        <p className="mt-4 text-center text-gray-500 dark:text-gray-300">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum quam voluptatibus
        </p>
        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
            <div className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group 
                            bg-[url('/images/Affiche-A3-.png')]">
                <div
                    className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                    <h2 className="mt-4 text-xl font-semibold text-white capitalize">SEER</h2>
                    <p className="mt-2 text-lg tracking-wider text-blue-400 uppercase ">Website</p>
                </div>
            </div>

            <div className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group
                            bg-[url('/images/Affiche-A4.png')]">
                <div
                    className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                    <h2 className="mt-4 text-xl font-semibold text-white capitalize">Block of Ui kit collections</h2>
                    <p className="mt-2 text-lg tracking-wider text-blue-400 uppercase ">Ui kit</p>
                </div>
            </div>

            <div className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group
                            bg-[url('/images/EIC-fiche_portrait_V5.jpg')]">
                <div
                    className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                    <h2 className="mt-4 text-xl font-semibold text-white capitalize">Ton’s of mobile mockup</h2>
                    <p className="mt-2 text-lg tracking-wider text-blue-400 uppercase "
                       onClick={() => {
                          setPage("events"),
                          setSubPage("eic"),
                          router.push("/Events"),
                          setShowRightMenu(false);
                        }}> Mockups</p>
                </div>
            </div>
        </div>
      </div>
      {/* <div className="grid grid-flow-col justify-stretch">
        <div className="gap-0 hover:scale-110">
          <a href="https://fr.seer-dz.com/"> <img src="/images/Affiche-A3-.png" alt="" className=" items-center"/> </a>
        </div>
        <div className="gap-0 hover:scale-110">
          <a href="https://n-iae.com"> <img src="/images/Affiche-A4.png" alt="" className=""/> </a>
        </div>
        <div className="gap-0 hover:scale-110">
          <a href="https://fr.seer-dz.com/eic-challenge/"> <img src="/images/EIC-fiche_portrait_V5.jpg" alt="" className=""/> </a>
        </div>
      </div> */}
    </Container>
  );
};

export default Event;
const Container = styled.div`
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #c084fc;
  }
`;
