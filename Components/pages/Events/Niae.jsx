import styled from "styled-components";

const Niae = ({ subPage }) => {
  return (
    <Content
      className={`w-full  absolute ${
        subPage === "niae" ? "left-0" : "left-[-200%]"
      } flex  ease transform duration-500 transition-all w-[95%] md:w-[95%] flex-col font-kanit mx-4 md:mx-10 my-4`}
    >
      <div className="tracking-wider uppercase text-[26px] my-3 text-slate-50 dark:text-slate-200 font-light">
        n-iae - 
        &nbsp;
        <a href="https://fr.seer-dz.com" className=" hover:italic hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-green-500 hover:to-green-900"> 
          numidian international agriculture exhibition
        </a>
        &nbsp;
        -
      </div>
      <div className=" text-slate-900 dark:text-slate-300 text-justify w-[60%] tracking-wider">
        L’organisation du Salon International de l’Agriculture à Constantine est le fruit d’une réflexion profonde et d’une volonté inébranlable de promouvoir 
        une agriculture moderne et performante. Ce salon n’est pas le fruit du hasard, mais plutôt le résultat d’une approche novatrice visant à mettre en lumière 
        les avancées et les opportunités offertes par le secteur agricole.
        <br />
        Aujourd’hui, le salon est en constante évolution, s’inscrivant dans une dynamique fonctionnelle axée sur la production de biens, de services, d’investissements 
        et de travaux universitaires. Grâce aux efforts considérables déployés ces dernières années par le secteur agricole, cette dynamique est guidée par un calendrier 
        d’actions rigoureusement planifié visant à propulser notre agriculture sur la voie de l’expansion économique, génératrice de progrès techniques et de productivité accrue, 
        reconnue à l’échelle internationale.
        <br />
        Ce salon a été initié et conçu par des professionnels engagés dans le but de stimuler notre agriculture et de la positionner sur les chemins de la performance 
        et de l’ouverture vers l’extérieur. Bien que son impact soit ressenti principalement dans la wilaya de Constantine, sa portée s’étend à travers de nombreuses 
        wilayas du nord et du sud du pays, en faisant ainsi un événement d’envergure nationale.
        <br />
        Les expositions mettent en avant la richesse de notre géographie agricole, avec sa biodiversité exceptionnelle et son zonage bien réparti. Les agriculteurs, 
        éleveurs, transformateurs, artisans, universitaires et start-ups innovantes se côtoient, créant un bouillonnement d’idées et d’opportunités.
      </div>
      <div className="w-full h-[140px] "></div>
    </Content>
  );
};

export default Niae;
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
