import styled from "styled-components";

const Eic = ({ subPage }) => {
  return (
    <Content
      className={`w-full  absolute ${
        subPage === "eic" ? "left-0" : "left-[-200%]"
      } flex justify-center items-start  ease transform duration-500 transition-all w-[95%] md:w-[95%] flex-col font-Signika mx-4 md:mx-10 my-4`}
    >
      <ContentText>
        Advision El Djzaïr a l’honneur d’ouvrir pour la deuxième fois le concours EIC, Energy Innovation Challenge.
        <br />
        Destiné aux jeunes entrepreneurs, et aux porteurs de projets novateurs dans le domaine des énergies.
        <br />
        Les candidats sélectionnes présenteront leurs projets devant un jury constitué de :
        <br />
        Professionnels dans le domaine des énergies. <br />
        Académiciens spécialistes dans la gestion de projet l’entreprenariat. <br />
        Par cet évènement Advision El Djzaïr vise à donner aux candidats et aux futurs entrepreneurs : <br />

        L’occasion de rencontrer des professionnels. <br />
        Des chefs d’entreprise. <br />
        Des investisseurs susceptibles de les accompagner dans leurs projets. <br />
        Et enfin
        <br />
        Les lauréats se verront attribuer des gratifications et des attestation de reconnaissance pour leurs travaux.
        <br />
        Le prix EIC, Energy Innovation Challenge sera attribué au meilleur projet.
      </ContentText>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/sfi4BwNeio8" 
              title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowfullscreen>
      </iframe>
      <div className="w-full h-[140px] "></div>
    </Content>
  );
};

export default Eic;
const GrayText = styled.p`
  color: #888a9b;
  font-size: 16px;
`;
const Heading = styled.p`
  color: black;
  font-size: 24px;
  padding-top: 4px;
  padding-bottom: 4px;
`;
const ContentText = styled.p`
  color: gray;
  font-size: 18px;
`;
const ListItem = styled.li`
  font-size: 18px;
  color: gray;
`;
const List = styled.ul`
  list-style: circle;
  list-style-position: inside;
`;
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
