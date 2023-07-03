import styled from "styled-components";

const Branding = ({ subPage }) => {
  return (
    <Container
      className={`w-full h-full absolute top-0  ease transform duration-300 transition-all ${
        subPage === "branding" ? "left-0 opacity-1" : "left-[-100%] opacity-0"
      }`}
    >

      <div className="container mx-auto text-justify p-8">
        Welcome to our branding agency, where we bring your visual identity to life!
        <br />
        Branding is much more than just a logo. It is the very essence of your company, what sets it apart from its competitors, and creates a connection with your target audience.
        <br />
        We understand the importance of forging a strong and consistent identity for your brand. With our expertise in branding, we work closely with you to create a unique, memorable brand image that aligns with your values and vision.
        <br />
        From logo design and graphic guidelines to brand strategy definition, we bring our creativity and expertise to breathe life into your brand in a compelling way.
        <br />
        Whether you're an ambitious startup or an established company looking to revitalize your image, we're here to accompany you at every step of the branding process.
        <br />
        Discover how our branding agency can help make your business shine and stand out in the market. Contact us today for a personalized consultation. Together, we will turn your brand into a powerful force that captures attention and inspires loyalty.      
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
