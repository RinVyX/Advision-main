import styled from "styled-components";

const Digital = ({ subPage }) => {
  return (
    <Content
      className={`w-full h-full absolute top-0  ease transform duration-300 transition-all ${
        subPage === "digital" ? "left-0 opacity-1" : "left-[-100%] opacity-0"
      }`}
    >
      <div className="mx-auto text-justify p-8">
        Looking to explore alternative means of travel beyond the web? Look no further! While creating a website may seem like a simple task, many have already ventured into this domain. However, at AdVision agency, we go above and beyond by crafting and implementing a cutting-edge digital strategy for your brand that seamlessly aligns with your offline communication channels.

        Our team specializes in constructing user-friendly interfaces that effectively cater to your brand's target audience, ensuring optimal browsing comfort to foster customer loyalty. We also provide comprehensive assistance in "intelligent writing" techniques to generate compelling content that enhances your search engine optimization (SEO) efforts.

        But that's not all—we are committed to curating a memorable experience for your users, evoking emotions and creating lasting memories. Understanding that outcomes are paramount, we develop online marketing tools that enhance your website's performance and optimize your return on investment (ROI).
        <br />
        Here's a glimpse of what we offer:
        <br />
        1. Marketing & Digital Strategy: Our experts provide valuable advice and unwavering support to devise and execute a robust marketing and digital strategy tailored to your specific requirements.
        <br />
        2. Professional WPA Mobile App Creation: We excel in crafting professional and functional mobile applications, enabling you to extend your brand's reach and engage with your audience on the go.
        <br />
        3. Development & CMS: Our proficient team undertakes development projects and offers content management system (CMS) solutions to streamline your online presence and ensure smooth website management.
        <br />
        4. Graphic Design, Web Design & Responsive Design: We have skilled designers who can breathe life into your brand through visually captivating graphic designs, user-friendly web designs, and responsive design to provide a seamless experience across different devices.
        <br />
        5. E-Marketing, M-Marketing, and Contests: We leverage the power of e-marketing and mobile marketing (m-marketing) to amplify your brand's online visibility. Additionally, we organize engaging contests to foster audience participation and brand engagement.
        <br />
        6. Email Campaigns: Our experts specialize in crafting compelling email campaigns that effectively reach your target audience and drive desired actions, ensuring a high level of engagement.
        <br />
        7. Referencing and Visibility: We employ effective referencing techniques to enhance your website's visibility in search engine results, boosting your brand's online presence.
        <br />
        8. Social Media & Social Networks: Our team harnesses the potential of social media platforms and social networks to create meaningful connections between your brand and your audience, enabling you to engage and expand your customer base.
        <br />
        At AdVision agency, we are dedicated to helping your brand soar to new heights in the digital realm. Experience our comprehensive services and embark on an extraordinary digital journey today.
      </div>
    </Content>
  );
};

export default Digital;
const Content = styled.div`
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #c084fc;
  }
`;
