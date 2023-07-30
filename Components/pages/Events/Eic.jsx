import styled from "styled-components";

const Eic = ({ subPage }) => {
  return (
    <Container
      className={`w-full h-full absolute ${
        subPage === "eic" ? "left-0 opacity-1" : "left-[-100%] opacity-0"
      } flex ease transform duration-500 transition-all w-[97.3%] flex-col font-kanit mx-4 md:mx-10 my-4`}
    >
      <div className="tracking-wider uppercase text-[26px] my-3 text-green-700 dark:text-slate-200 font-light">
        EIC - 
        &nbsp;
        <a href="https://fr.seer-dz.com" className=" hover:italic hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-green-500 hover:to-green-800"> 
          Energy innovation challenge
        </a>
        &nbsp;
        -
      </div>
      <div className=" text-slate-900 dark:text-slate-300 text-justify md:w-[60%] w-[95%] tracking-wider">
        Advision El Djzaïr a l’honneur d’ouvrir pour la deuxième fois le concours EIC, Energy Innovation Challenge.
        &nbsp;
        Destiné aux jeunes entrepreneurs, et aux porteurs de projets novateurs dans le domaine des énergies.
        &nbsp;
        Les candidats sélectionnes présenteront leurs projets devant un jury constitué de :
        <br />
        Professionnels dans le domaine des énergies. <br />
        Académiciens spécialistes dans la gestion de projet l’entreprenariat. <br />
        Par cet évènement Advision El Djzaïr vise à donner aux candidats et aux futurs entrepreneurs : <br />

        L’occasion de rencontrer des professionnels. <br />
        Des chefs d’entreprise. <br />
        Des investisseurs susceptibles de les accompagner dans leurs projets. <br />
        Et enfin: 
        Les lauréats se verront attribuer des gratifications et des attestation de reconnaissance pour leurs travaux.
        
        Le prix EIC, Energy Innovation Challenge sera attribué au meilleur projet.
      </div>
      <div className="my-6">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/sfi4BwNeio8" 
                title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowfullscreen>
        </iframe>
      </div>
    </Container>
  );
};

export default Eic;
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
