import Lottie from "lottie-react";
import styled from "styled-components";
import vision from "../../../Lottie/vision.json";
const Philosophie = ({ subPage }) => {
  return (
    <Container
      className={`w-full absolute ${
        subPage === "philosophie" ? "left-0" : "left-[-200%]"
      } flex ease transform duration-500 transition-all w-[95%] md:w-[95%] flex-col font-kanit mx-4 md:mx-10 my-4`}
    >
      {/* <div className="w-[90%] mx-auto md:my-[100px] lg:w-[600px] lg:flex lg:justify-center lg:h-full lg:items-center my-[20px]">
        <Lottie animationData={vision} />
      </div> */}
      <div className=" lg:h-full lg:items-start lg:flex-col w-[90%] lg:w-[50%] mx-[20px] lg:translate-y-14 font-Signika">
        <div className="text-base mt-2">
          Au fil du temps, une identité s'est forgée, une culture et des valeurs se sont naturellement imposées.
        </div>
        <div className=" text-xl my-4">
          Heureux ensemble. Toujours curieux et éclatants !
        </div>
        <div className="dark:text-gray-200 text-gray-500 text-xs lg:text-base">
          Soyez heureux. Stimulez l'énergie et le désir à l'intérieur ainsi que dans les relations quotidiennes avec nos clients. La vie est trop courte pour s'inquiéter !
          La créativité, la collaboration, le partage et la transmission insufflent un esprit frais et revigorant dans cette aventure avant tout humaine.
        </div>
        
        <div className=" text-xl my-4">
          Engagés, loyaux et parfois impertinents !
        </div>
        <div className="dark:text-gray-200 text-gray-500 text-xs lg:text-base text-justify">
          Nous avons l'exigence d'un travail bien fait, nous nous engageons envers nos clients. S'engager avec un client signifie offrir une écoute attentive, 
          notre créativité et nos compétences techniques. Mais cela signifie aussi oser être audacieux, avoir des positions fermes, refuser de faire des compromis !
          Des positions fortes et affirmées prises dans le respect mutuel... Avec nos clients, nous travaillons en mode collaboratif. C'est notre marque de fabrique. 
          C'est aussi ce qui nous permet de forger des relations durables, des partenariats durables.
        </div>
        <div className=" text-xl my-4">
          Créatifs et responsables, visionnaires et technologiques.
        </div>
        <div className="dark:text-gray-200 text-gray-500 text-xs lg:text-base">
          Aujourd'hui et demain, AdVision veut grandir et se développer. Soutenir une croissance durable, porter un projet solidaire reste au cœur de ses défis. 
          Face aux technologies en constante évolution, AdVision Verte est toujours à l'affût pour inventer les moyens de communication de demain. 
          Avoir toujours une longueur d'avance pour mieux guider nos clients, c'est aussi ce qui nous fait vibrer !
        </div>
        <div className="w-[30px] h-[250px]"></div>
      </div>
    </Container>
  );
};

export default Philosophie;
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
