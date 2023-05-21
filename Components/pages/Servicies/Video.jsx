import styled from "styled-components";

const Video = ({ subPage }) => {
  return (
    <Container
      className={`w-full h-full absolute top-0  ease transform duration-300 transition-all ${
        subPage === "video" ? "left-0 opacity-1" : "left-[-100%] opacity-0"
      }`}
    >
      <div className="container mx-auto">
        <div className="text-justify">
          AdVision supports you in your audiovisual projects and productions from
          design to distribution strategy. AdVision produces your corporate films,
          your seminar recordings, your video reports, your marketing buzz or
          viral video or your interviews and testimonials..
        </div>
        <div className="text-justify">
          Claiming creativity and originality, our achievements meet the needs of
          communication and information projects from the most conventional to the
          most offbeat. AdVision puts its know-how and its audiovisual production
          team at the disposal of your needs and desires to create a strong
          message that suits you!
        </div>
        <div>What we offer</div>
        <ul>
          <li>Institutional film – Corporate video</li>
          <li>Interview and Testimonial</li>
          <li>Webcast & Rich Media</li>
          <li>Advertising & Consulting</li>
        </ul>        
      </div>
    </Container>
  );
};

export default Video;
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
