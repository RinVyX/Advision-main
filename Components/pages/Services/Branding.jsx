import styled from "styled-components";

const Branding = ({ subPage }) => {
  return (
    <Container
      className={`w-full h-full absolute top-0  ease transform duration-300 transition-all ${
        subPage === "branding" ? "left-0 opacity-1" : "left-[-100%] opacity-0"
      }`}
    >
      <div className="container mx-auto w-[70%] my-[5%] text-justify">
      Bienvenue dans notre agence de branding, où nous donnons vie à votre identité visuelle !
      <br />
      Le branding est bien plus qu'un simple logo. C'est l'essence même de votre entreprise, ce qui la distingue de ses concurrents et crée une connexion avec votre public cible.
      <br />

      Nous comprenons l'importance de forger une identité forte et cohérente pour votre marque. Grâce à notre expertise en branding, 
      nous travaillons en étroite collaboration avec vous pour créer une image de marque unique, mémorable et alignée sur vos valeurs et votre vision.
      <br />

      De la conception du logo et de la charte graphique à la définition de la stratégie de marque, nous mettons en œuvre notre créativité 
      et notre savoir-faire pour donner vie à votre marque de manière impactante.
      <br />

      Que vous soyez une start-up ambitieuse ou une entreprise établie souhaitant redynamiser votre image, nous sommes là pour vous accompagner à chaque étape du processus de branding.
      <br />

      Découvrez comment notre agence de branding peut vous aider à faire briller votre entreprise et à vous démarquer sur le marché. 
      Contactez-nous dès aujourd'hui pour une consultation personnalisée. Ensemble, nous ferons de votre marque une véritable force qui capte l'attention et suscite l'adhésion.
      </div>
    </Container>
  );
};

export default Branding;
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
