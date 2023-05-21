import styled from "styled-components";

const Events = ({ subPage }) => {
  return (
    <Container
      className={`w-full h-full absolute top-0  ease transform duration-300 transition-all ${
        subPage === "events" ? "left-0 opacity-1" : "left-[-100%] opacity-0"
      }`}
    >
      <div className="container mx-auto">
        <div>Act, act, act and still act… to exist!</div>
        <div>
          Customers are more and more volatile: they adapt their behavior more and
          more quickly according to their economic situation and their values.
        </div>
        <div>
          Not easy, therefore, to capture them and attract their attention by
          remaining stuck in the starting blocks!
        </div>
        <div>
          Act constantly, show up, thank, renew, innovate, surprise... create the
          event!
        </div>
        <div>
          onstantly, show up, thank, renew, innovate, surprise... create the
          event!
        </div>
        <div>
          Events as a tool for growth and a vector of economic dynamics for your
          brand, take action!
        </div>
        <div>What we offer</div>
        <ul className="list-disc">
          <li>strategic study</li>
          <li>creation of corporate events</li>
          <li>location search, logistics</li>
          <li>event communication campaigns</li>
          <li>bespoke event production</li>
          <li>coordination of all service providers</li>
          <li>impact analysis</li>
          <li>creativity, innovation & emotions</li>
        </ul>
      </div>
    </Container>
  );
};

export default Events;
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
