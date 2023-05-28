import styled from "styled-components";
import Lottie from "lottie-react";
import consulting from "../../../Lottie/consulting.json";

const TeamBuilding = ({ subPage }) => {
  return (
    <Container
      className={`w-full h-full absolute top-0  ease transform duration-300 transition-all ${
        subPage === "teamBuilding" ? "left-0 opacity-1" : "left-[-100%] opacity-0"
      }`}
    >
      {/* <Lottie animationData={consulting} /> */}
      <div className="container mx-auto">
        At AdVision agency, we are committed to providing you with the tools and resources to turn your ambitions into reality. If you have a desire to grow and expand, we're here to assist you in intelligently communicating with your target audience, supported by our communication and strategy consulting expertise.

        If you're seeking an external and professional perspective on your brand and market, we offer a partnership based on trust, supported by a team of experienced professionals who are well-versed in communication techniques. Our aim is to bring a fresh, innovative, and original approach to your brand, providing solutions that will drive its development and establish a solid communication strategy.
        <br />
        Here's what we do for you:
        <br />
        1. Audit, Benchmarking, and Monitoring: We conduct comprehensive audits to evaluate your current communication efforts, benchmark your brand against competitors, and monitor industry trends to ensure your strategies remain effective and up-to-date.
        <br />
        2. Communication Strategy: Our team will work closely with you to develop a tailored communication strategy that aligns with your brand's objectives and resonates with your target audience.
        <br />
        3. Support & Advice: We provide ongoing support and guidance, serving as a trusted partner throughout the entire communication process, offering valuable insights and recommendations to help you achieve your goals.
        <br />
        4. Campaign Management: Our experts handle end-to-end campaign management, from concept development to execution, ensuring seamless implementation and effective results.
        <br />
        5. Positioning: We assist you in defining and refining your brand's positioning in the market, helping you stand out and connect with your desired audience.
        <br />
        6. Multimedia Advertising Concepts and Campaigns: Our creative team conceptualizes and executes multimedia advertising campaigns that engage and captivate your target audience across various channels and platforms.
        <br />
        7. Marketing Analysis: We conduct in-depth marketing analysis to identify opportunities and potential areas of growth, providing data-driven insights to inform your decision-making process.
        <br />
        8. Purchase of Spaces: Our agency handles the strategic purchasing of advertising spaces, maximizing your brand's visibility and reach to target audiences.
        <br />
        At AdVision agency, our mission is to empower you to achieve your goals by providing comprehensive communication and strategy services. Partner with us to unlock your brand's potential and embark on a successful growth journey.
      </div>
    </Container>
  );
};

export default TeamBuilding;

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
