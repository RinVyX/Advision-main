import styled from "styled-components";

const Seer = ({ subPage }) => {
  return (
    <Container
      className={`w-full  absolute ${
        subPage === "seer" ? "left-0" : "left-[-200%]"
      } flex ease transform duration-500 transition-all md:w-[95%] flex-col font-kanit mx-4 my-4`}
    >
      <div className="tracking-wider uppercase text-[26px] my-3 text-slate-50 dark:text-slate-200 font-light">
        SEER - 
        &nbsp;
        <a href="https://fr.seer-dz.com" className=" hover:italic hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-green-500 hover:to-red-600"> 
          SALON INTERNATIONAL de l’électricité et des énergies renouvelables 
        </a>
        &nbsp;
        -
      </div>
      <div className=" text-slate-900 dark:text-slate-300 text-justify w-[60%] tracking-wider">
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
      {/* <div className="flex-auto">
        <iframe src="https://embed.lottiefiles.com/animation/117720"></iframe>
      </div> */}
      <div className="w-full h-[140px] "></div>
    </Container>
  );
};

export default Seer;
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
