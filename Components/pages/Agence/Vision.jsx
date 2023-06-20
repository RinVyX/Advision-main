import Lottie from "lottie-react";
import styled from "styled-components";
import communication from "../../../Lottie/communication.json";
import Pattern from "../../../Lottie/Pattern.json";
const Vision = ({ subPage }) => {
  return (
    <Container
      className={`w-full h-full  absolute ${
        subPage === "vision"
          ? "left-0 opacity-1"
          : "left-[-100%] opacity-0"
      } flex justify-start items-center flex-col top-0 pl-48
      ease transform duration-300 transition-all 
      lg:justify-center my-auto lg:flex-row lg:gap-4 font-Kanit`}
    >
      {/* mobile */}
      <div className="text-justify w-[90%] h-fill  mt-10 mb-4 font-light text-xs dark:text-gray-200 text-gray-500 md:hidden ">
        En tant qu'agence de communication et de publicité travaillant en "business to business", notre ingrédient secret est la réalisation de résultats ! 
        Le reste de la recette, nous l'adapté en fonction de chaque mandat. Chez AdVision, nous parlons votre langue : augmentation des ventes, notoriété de la marque, 
        fidélité des employés... Nous laissons de côté le superflu et nous concentrons sur l'essentiel : vos objectifs. Pas étonnant que nos clients recommandent nos services.
      </div>
      <div className="w-[90%] mb-4 font-medium text- md:hidden lg:hidden">
        Avec nous, pas de divas ! Il est facile et agréable de travailler avec notre équipe, nous vous le promettons !
      </div>     
      <div className="text-justify w-[90%] h-fill my-4 font-light text-xs dark:text-gray-200 text-gray-500 lg:hidden">
      Des relations humaines et des services professionnels, mais sans bureaucratie ni frais extravagants. Avant tout, nous construisons une relation de confiance. 
      Notre mantra est d'imaginer des solutions qui font gagner nos clients... et de concrétiser ces solutions ! Avez-vous des "missions de marketing impossibles" à accomplir ? 
      Vos projets de communication et de publicité sont-ils urgents, complexes, variés ou de grande envergure ? Nous ne vivons que pour ce genre de défis !
      </div>

      {/* lg screen */}
      <div className="lg:flex justify-center item-center w-[70%] h-full hidden flex-col font-Kanit">
      <div className="w-[90%] mb-4 max-w-lg md:w-[500px] lg:w-[700px]">
        {/* <Lottie animationData={Pattern} /> */}        
      </div>  
        <div className="text-justify w-[90%] h-fill  mt-10 mb-4 font-light text-base dark:text-gray-200 text-gray-500">
          En tant qu'agence de communication et de publicité travaillant en "business to business", notre ingrédient secret est la réalisation de résultats ! 
          Le reste de la recette, nous l'adapté en fonction de chaque mandat. Chez AdVision, nous parlons votre langue : augmentation des ventes, notoriété de la marque, 
          fidélité des employés... Nous laissons de côté le superflu et nous concentrons sur l'essentiel : vos objectifs. Pas étonnant que nos clients recommandent nos services.
        </div>
        <div className="w-[90%] mb-4 font-medium text-lg gap-4">
        Avec nous, pas de divas ! Il est facile et agréable de travailler avec notre équipe, nous vous le promettons !
        </div>
        <div className="text-justify w-[90%] mb-10 font-light text-base dark:text-gray-200 text-gray-500">
        Des relations humaines et des services professionnels, mais sans bureaucratie ni frais extravagants. Avant tout, nous construisons une relation de confiance. 
        Notre mantra est d'imaginer des solutions qui font gagner nos clients... et de concrétiser ces solutions ! Avez-vous des "missions de marketing impossibles" à accomplir ? 
        Vos projets de communication et de publicité sont-ils urgents, complexes, variés ou de grande envergure ? Nous ne vivons que pour ce genre de défis !
        </div>
      </div>
    </Container>
  );
};

export default Vision;

const Container = styled.div`
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #c084fc;
  }
`;
