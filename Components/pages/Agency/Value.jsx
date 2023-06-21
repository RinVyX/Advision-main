import Lottie from "lottie-react";
import styled from "styled-components";
import vision from "../../../Lottie/vision.json";
const Value = ({ subPage }) => {
  return (
    <Container
      className={`w-full h-full absolute ${
        subPage === "value" ? "left-0 opacity-1" : "left-[-100%] opacity-0"
      } flex justify-start items-center flex-col top-0 pl-48
      ease transform duration-300 transition-all
      lg:justify-center my-auto lg:flex-row lg:gap-4 font-kanit`}
    >
      {/* <div className="w-[90%] mx-auto md:my-[100px] lg:w-[600px] lg:flex lg:justify-center lg:h-full lg:items-center my-[20px]">
        <Lottie animationData={vision} />
      </div> */}
      <div className=" lg:h-full lg:flex lg:justify-center lg:items-start lg:flex-col w-[80%] lg:w-[90%] mx-[20px] lg:translate-y-14">
        <div className="text-xl my-4">
        Chez nous, la créativité est notre moteur, nous croyons en la puissance des idées novatrices et originales pour créer des campagnes qui captivent notre public.
        </div>
        <div className="dark:text-gray-200 text-gray-500 text-xs lg:text-base text-justify">
        La collaboration est au cœur de notre approche, nous travaillons main dans la main avec nos clients et partenaires pour atteindre les meilleurs résultats.
        </div>
        <div className="dark:text-gray-200 text-gray-500 text-xs lg:text-base text-justify">
        L'intégrité guide chacune de nos actions, nous agissons toujours avec honnêteté et transparence.
        </div>
        <div className=" text-xl my-4">
        Nous sommes entièrement axés sur nos clients, leurs objectifs et leurs besoins sont notre priorité absolue.
        </div>
        <div className="dark:text-gray-200 text-gray-500 text-xs lg:text-base text-justify">
        L'excellence est notre norme, nous nous efforçons constamment d'atteindre les plus hauts standards de qualité.

        L'innovation est notre moteur de progrès, nous sommes constamment à l'affût des dernières tendances et technologies pour vous offrir les meilleures solutions.
        
        </div>
        <div className=" text-xl my-4">
        Chez nous, vous trouverez une équipe chaleureuse et accessible, prête à vous accompagner dans tous vos projets de communication.
        </div>
        <div className="dark:text-gray-200 text-gray-500 text-xs lg:text-base">
        Contactez-nous dès aujourd'hui pour découvrir comment notre agence peut vous aider à atteindre vos objectifs de communication. Nous sommes impatients de travailler avec vous !
        </div>
        <div className=" text-xl my-4">
        Bienvenue dans l'aventure avec notre agence !
        </div>
        <div className="w-[30px] h-[250px]"></div>
      </div>
    </Container>
  );
};

export default Value;
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
