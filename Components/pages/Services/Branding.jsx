import styled from "styled-components";

const Branding = ({ subPage }) => {
  return (
    <Container
      className={`w-full h-full absolute top-0  ease transform duration-300 transition-all ${
        subPage === "branding" ? "left-0 opacity-1" : "left-[-100%] opacity-0"
      }`}
    >
      <div className="container mx-auto">
        In order to make a name for yourself and gain recognition, it is essential to establish your presence. To truly exist, your brand needs to be visible. And for your brand to stand out and leave a lasting impression, it must have a distinctive identity encompassing a name, a graphic charter, a well-defined positioning, and a set of values and ethics. A strong brand identity is characterized by its power, coherence, richness, and clarity. So, how do you envision your brand being perceived?

        At our agency, we offer a range of services to help you shape and enhance your brand's identity. Here's what we provide:
        <br />
        1. Study of Positioning and Values: We conduct an in-depth analysis of your brand's positioning in the market and help you define the values that will differentiate you from your competitors, allowing you to create a unique brand proposition.
        <br />
        2. Brand Differentiation: We assist you in developing strategies to differentiate your brand and ensure it stands out in the minds of your target audience, establishing a strong and memorable presence.
        <br />
        3. Name: Our experts work with you to create a compelling and distinctive name for your brand that resonates with your audience and effectively represents your values and offerings.
        <br />
        4. LogoType: We craft visually appealing and impactful logos that serve as the face of your brand, capturing its essence and leaving a lasting impression.
        <br />
        5. Graphical Charter: Our team develops a comprehensive graphical charter that encompasses visual elements such as colors, typography, imagery, and design guidelines. This ensures consistency across all brand communications, reinforcing your brand's identity and recognition.
        <br />
        6. Signage: We create compelling signage solutions that effectively communicate your brand's identity and attract attention in physical spaces, maximizing your visibility and leaving a lasting impression on customers.
        <br />
        By availing our services, you can establish a powerful and distinctive brand identity that resonates with your target audience, sets you apart from the competition, and helps you achieve your goals. Let us help you create a brand that captivates and leaves a lasting impact.
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
