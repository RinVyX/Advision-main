import styled from "styled-components";

const Seer = ({ subPage }) => {
  return (
    <Content
      className={`w-full  absolute ${
        subPage === "seer" ? "left-0" : "left-[-200%]"
      } flex items-start ease transform duration-500 transition-all w-[95%] md:w-[95%] flex-col font-Signika mx-4 md:mx-10 my-4`}
    >      
      <div className="text-justify">
        SEER est le premier événement commercial international en Algérie, dédié simultanément aux industries de l’électricité et des énergies renouvelables.
        <br />
        Via une large gamme de produits et solutions exposés, le salon rassemble différents opérateurs (Fabricants d’équipements, distributeurs, bureaux d’études, 
        fournisseurs d’électricité, installateurs …), dans les domaines de l’électricité et des énergies renouvelables.
        <br />
        L’événement, étant orienté sur l’électricité en général, donne aussi une importance capitale aux énergies renouvelables qui sont d’actualité et occupent 
        l’attention ces dernière années, vue les enjeux importants pour la protection de l’environnement et la préservation de la planète.
        <br />
        Durant le salon, le choix est large et ouvert pour exposer tout type de produits et solutions
        utilisés dans les branches suivantes du secteur de l’électricité et des énergies renouvelables, tels que la production d'énergie, la distribution, la gestion de l'énergie, 
        l'éclairage, l'efficacité énergétique, les systèmes de stockage, les technologies solaires, éoliennes, hydrauliques et géothermiques, et bien d'autres encore.
        <br />
        Depuis sa première édition en 2018, le SEER a connu un succès croissant chaque année. Le salon a su attirer un nombre toujours plus élevé de participants, 
        provenant tant du secteur national qu'international. Grâce à son caractère international, le SEER offre aux exposants une occasion unique de présenter leurs produits 
        et solutions innovantes, de nouer des partenariats stratégiques et d'explorer de nouvelles opportunités commerciales.
        <br />
        Le succès grandissant du salon témoigne de l'importance croissante accordée aux industries de l'électricité et des énergies renouvelables en Algérie et dans le monde. 
        Cela reflète également la prise de conscience croissante des enjeux environnementaux et de la nécessité de transitionner vers des sources d'énergie propres et durables.
        <br />
        Chaque année, le SEER se positionne comme un événement incontournable pour les acteurs du secteur, offrant un espace privilégié pour le partage des connaissances, 
        les échanges professionnels et le développement de collaborations fructueuses. Avec son succès continu, le salon contribue activement à promouvoir l'innovation, 
        le développement économique et la transition énergétique en Algérie et au-delà.
      </div>
      <div >
        <iframe className="w-full aspect-video" src="https://www.youtube.com/embed/iUyw0sNMM94" 
                allow="accelerometer; autoplay; picture-in-picture" 
                allowfullscreen
                showinfo="0" >
        </iframe>
        <iframe className="w-full aspect-video" src="https://www.youtube.com/embed/f-cqonG2mPI" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
        </iframe>
        <iframe className="w-full aspect-video" src="https://www.youtube.com/embed/BVY47baM_n0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
        </iframe>
        <iframe className="w-full aspect-video" src="https://www.youtube.com/embed/ZzD5ifKrG_8" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
        </iframe>
      </div>
      <div className="w-full h-[140px] "></div>
    </Content>
  );
};

export default Seer;
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
