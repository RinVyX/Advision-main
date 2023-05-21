import styled from "styled-components";

const Video = ({ subPage }) => {
  return (
    <Container
      className={`w-full h-full absolute top-0  ease transform duration-300 transition-all ${
        subPage === "video" ? "left-0 opacity-1" : "left-[-100%] opacity-0"
      }`}
    >
      <div className="container mx-auto">
        At AdVision, we provide comprehensive support for your audiovisual projects and productions, taking you through the entire process from design to distribution strategy. Our expertise lies in producing a wide range of content, including corporate films, seminar recordings, video reports, marketing buzz or viral videos, as well as interviews and testimonials.

        We take pride in our commitment to creativity and originality, ensuring that our deliverables cater to communication and information projects, regardless of whether they are conventional or offbeat. Our team at AdVision possesses the necessary know-how and expertise in audiovisual production, enabling us to meet your specific needs and desires, creating a powerful message that truly represents you.
        <br />
        Here's a glimpse of what we offer:
        <br />
        1. Institutional Film - Corporate Video: We excel in crafting compelling institutional films and corporate videos that effectively convey your brand's message, values, and offerings, leaving a lasting impact on your audience.
        <br />
        2. Interview and Testimonial: Our team conducts interviews and testimonials that capture the essence of your brand, highlighting the experiences and perspectives of individuals associated with your organization, delivering authentic and engaging content.
        <br />
        3. Webcast & Rich Media: We offer webcast and rich media solutions, enabling you to deliver live or pre-recorded content to your target audience, facilitating seamless interaction and engagement.
        <br />
        4. Advertising & Consulting: Our agency provides advertising services and consulting expertise, helping you develop effective strategies to reach and engage your desired audience through audiovisual content, maximizing the impact of your campaigns.
        <br />
        At AdVision, we are dedicated to bringing your audiovisual projects to life, ensuring they align with your goals and resonate with your audience. Trust us to deliver high-quality content that captivates, informs, and leaves a lasting impression. Partner with us to unlock the potential of audiovisual storytelling for your brand.
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
