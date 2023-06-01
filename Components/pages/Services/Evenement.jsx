import styled from "styled-components";

const Evenement = ({ subPage }) => {
  return (
    <Container
      className={`w-full h-full absolute top-0  ease transform duration-300 transition-all ${
        subPage === "evenement" ? "left-0 opacity-1" : "left-[-100%] opacity-0"
      }`}
    >
      <div className="container mx-auto">
        In a world where customers are increasingly volatile, constantly adapting their behavior based on economic circumstances and values, it is crucial to take action and actively engage to establish your brand's existence. Simply waiting on the sidelines won't capture their attention or sustain their interest.

        At our agency, we understand the importance of continuous action, appreciation, renewal, innovation, and surprise to attract and retain customers. We believe in creating moments that make an impact, generating excitement and leaving a lasting impression. It's time to create the event!

        Events serve as powerful tools for brand growth and catalysts for economic dynamics. We offer a range of services to help you leverage events effectively. Here's what we provide:
        <br />
        1. Strategic Study: We conduct a comprehensive study to understand your brand, target audience, and objectives, enabling us to develop a strategic approach for your event initiatives.
        <br />
        2. Creation of Corporate Events: Our team specializes in crafting corporate events that align with your brand's identity and messaging, delivering a memorable experience to attendees.
        <br />
        3. Location Search and Logistics: We handle the intricate details of finding the perfect event location and managing logistics, ensuring smooth execution and a seamless experience for all participants.
        <br />
        4. Event Communication Campaigns: We design and execute targeted communication campaigns to generate excitement, drive attendance, and maximize the impact of your event.
        <br />
        5. Bespoke Event Production: From concept development to execution, we offer bespoke event production services, tailoring every aspect to suit your brand and create a unique experience.
        <br />
        6. Coordination of All Service Providers: We take care of coordinating all service providers involved in your event, ensuring seamless collaboration and flawless execution.
        <br />
        7. Impact Analysis: Our team evaluates the impact and effectiveness of your events, providing valuable insights and recommendations for future initiatives.
        <br />
        8. Creativity, Innovation & Emotions: We infuse creativity, innovation, and emotions into every aspect of your event, making it a truly memorable and engaging experience for attendees.
        <br />
        At our agency, we believe that taking action and creating unforgettable events is key to establishing your brand's presence and driving growth. Let us help you harness the power of events to captivate your audience, generate meaningful connections, and propel your brand forward.
      </div>
    </Container>
  );
};

export default Evenement;
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
