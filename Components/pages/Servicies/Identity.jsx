import styled from "styled-components";

const Identity = ({ subPage }) => {
  return (
    <Container
      className={`w-full h-full absolute top-0  ease transform duration-300 transition-all ${
        subPage === "identity" ? "left-0 opacity-1" : "left-[-100%] opacity-0"
      }`}
    >
      <div className="container mx-auto">
        <div>To make yourself known and be recognized, you have to exist.</div>
        <div>To exist, you have to be seen.</div>
        <div className="text-justify">
          To be seen, a brand must stand out and have its own identity: a name, a
          graphic charter, a positioning, values, ethics... To be strong, a brand
          identity must be powerful, coherent, rich and clear. And you, how do you
          want your brand to be perceived?
        </div>
        <div>What we offer</div>
        <ul>
          <li>study of positioning, values</li>
          <li>brand differentiation</li>
          <li>Name</li>
          <li>LogoType</li>
          <li>graphical charter</li>
          <li>signage</li>
        </ul>
      </div>
    </Container>
  );
};

export default Identity;
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
