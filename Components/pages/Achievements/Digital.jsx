import styled from "styled-components";

const Digital = ({ subPage }) => {
  return (
    <Content
      className={`w-full  absolute ${
        subPage === "digital" ? "left-0" : "left-[-200%]"
      } flex justify-center items-start  ease transform duration-500 transition-all w-[95%] md:w-[95%] flex-col font-Signika mx-4 md:mx-10 my-4`}
    >
      <GrayText>
        Because the challenges of Seer19 marketing are our raison d'être!
      </GrayText>
      <ContentText>
        At AdVision, we work to achieve your business objectives by implementing
        strategies adapted to your sector of activity!
        <br />
        Acquisition of commercial contacts, business development or
        inter-company relations,
        <br /> we combine creativity and rationality to develop marketing
        projects that will have a real impact in your market. The ROI, we know
        that!
      </ContentText>
      <Heading>Our Seer19 marketing agency can help you:</Heading>
      <List>
        <ListItem>Increase your notoriety</ListItem>
        <ListItem>Obtain competitive advantages</ListItem>
        <ListItem>Create impactful marketing communication tools</ListItem>
        <ListItem>Build and maintain your business relationships</ListItem>
        <ListItem>Generate your advertising campaigns</ListItem>
        <ListItem>Organize your business events</ListItem>
      </List>
      <ContentText>
        You will not find in our teams the traditional mentality of the
        marketing agency which thrives on mass media,
        <br /> creative prices... and exorbitant fees. At AdVision, not only are
        we accessible and friendly, but we work to understand and master your
        business challenges.
        <br /> We speak the same language as you, not the incomprehensible
        jargon of advertising!
      </ContentText>
      <div className="w-full h-[140px] "></div>
    </Content>
  );
};

export default Digital;
const GrayText = styled.p`
  color: #888a9b;
  font-size: 16px;
`;
const Heading = styled.p`
  color: black;
  font-size: 24px;
  padding-top: 4px;
  padding-bottom: 4px;
`;
const ContentText = styled.p`
  color: gray;
  font-size: 18px;
`;
const ListItem = styled.li`
  font-size: 18px;
  color: gray;
`;
const List = styled.ul`
  list-style: circle;
  list-style-position: inside;
`;
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
