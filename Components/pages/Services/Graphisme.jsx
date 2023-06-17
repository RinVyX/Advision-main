import styled from "styled-components";

const Graphisme = ({ subPage }) => {
  return (
    <Content
      className={`w-full h-full absolute top-0  ease transform duration-300 transition-all ${
        subPage === "graphisme" ? "left-0 opacity-1" : "left-[-100%] opacity-0"
      }`}
    >

      <div className="mx-auto pb-32 pt-12">
        <div>At AdVision, we share this “sweet” point of view!</div>
        <div>
          To be known and recognized, it is necessary and essential to communicate
          constantly.
        </div>
        <div className="text-justify">
          It is by repeating the messages, by capturing the attention of your
          target regularly, by informing and reassuring your customers... that you
          will retain them and attract new ones.
        </div>
        <div className="text-justify">
          <div>Logo Design:</div>
          We understand that a logo is the face of your brand, and our talented team of designers will create a distinctive and memorable logo that embodies your brand's identity. We ensure that your logo represents your values, resonates with your target audience, and sets you apart from the competition.
          
          <div>Brand Identity:</div>
          Crafting a cohesive brand identity is crucial for establishing a strong market presence. Our graphic services include developing brand guidelines, selecting appropriate color schemes, typography, and visual elements that effectively communicate your brand's personality and values. We strive to create a consistent and memorable brand experience across all touchpoints.
          
          <div>Print Design:</div>
          From business cards to brochures, our print design services breathe life into your marketing collateral. Our team combines captivating imagery, thoughtful layouts, and compelling copy to create stunning designs that leave a lasting impression. Whether it's designing flyers, posters, or packaging, we ensure that your print materials align with your brand and capture attention.
          
          <div>Digital Design:</div>
          In the digital age, a strong online presence is vital. Our graphic services encompass web design, social media graphics, and digital advertising materials. Our designers excel in creating visually engaging websites that are user-friendly, responsive, and optimized for performance. We also specialize in crafting eye-catching social media graphics and digital ads that drive engagement and conversions.
          
          <div>Illustration and Infographics:</div>
          Sometimes, words alone are not enough to convey complex information. Our skilled illustrators bring concepts to life through captivating illustrations and infographics. Whether it's explaining a process, simplifying data, or adding a touch of creativity to your content, our illustrations and infographics enhance understanding and captivate your audience.
          
          <div>Photo Editing and Retouching:</div>
          Our graphic services also include professional photo editing and retouching. We have a keen eye for detail and use advanced techniques to enhance and optimize your images, ensuring they align with your brand aesthetic. From basic retouching to complex manipulations, we take your visuals to the next level.
          
          <div>Packaging Design:</div>
          The packaging is an essential aspect of product presentation and brand recognition. Our graphic design company offers comprehensive packaging design services, creating captivating and functional packaging solutions that reflect your brand identity while standing out on store shelves. We pay attention to every detail, from structural design to graphics, ensuring your products make a memorable impact.
          
          <div>Motion Graphics and Animation:</div>
          To add an extra layer of dynamism to your visual content, our graphic services include motion graphics and animation. Our skilled animators can bring your ideas to life through engaging and visually stunning animations. Whether it's for explainer videos, presentations, or social media content, we create captivating motion graphics that make your brand message stand out.
          
          <div>User Interface (UI) Design:</div>
          User experience plays a crucial role in the success of digital products. Our UI design services focus on creating intuitive and visually appealing interfaces that enhance user engagement and satisfaction. We ensure seamless navigation, clear hierarchy, and a visually pleasing design that aligns with your brand and keeps your users coming back for more.

          With our comprehensive range of graphic services, we offer a holistic approach to visual communication. From creating your brand identity to designing print and digital materials, we bring your vision to life with creativity, expertise, and attention to detail. Our goal is to help your brand make a lasting impact and stand out in the competitive market.
        </div>
        <div>
          Studying and creating the most suitable communication solutions, these
          are the missions of our integrated graphic studio.
        </div>
        <div className="text-justify">
          Always keeping your communication strategy and your brand identity in
          mind, our creatives rack their brains (using coffee mugs!) to build
          inventive, attractive and impactful communication media.
        </div>
        <div>What we offer</div>
        <ul>
          <li>advertising concepts</li>
          <li>pads, folders</li>
          <li>catalogs, brochures</li>
          <li>packaging</li>
          <li>flyers, leaflets, posters</li>
          <li>advertisement</li>
          <li>booth cover</li>
        </ul>
      </div>
      <div className="gap-8 columns-3">
        <img className="w-full hover:delay-150" src="/images/stand/genepi.jpg" alt="" />
        <img className="w-full" src="/images/stand/genepi1.jpg" alt="" />
        <img className="w-full" src="/images/stand/genepi2.jpg" alt="" />
        <img className="w-full" src="/images/stand/genepi3.jpg" alt="" />
        <img className="w-full" src="/images/stand/samsung.jpg" alt="" />
        <img className="w-full" src="/images/stand/gica.jpg" alt="" />
        <img className="w-full" src="/images/stand/schneider.jpg" alt="" />
        <img className="w-full" src="/images/stand/schneider1.jpg" alt="" />
        <img className="w-full" src="/images/stand/schneider2.jpg" alt="" />
        <img className="w-full" src="/images/stand/GGlob.jpg" alt="" />
        <img className="w-full" src="/images/stand/berardi.jpg" alt="" />
        <img className="w-full" src="/images/stand/demlec.jpg" alt="" />
        <img className="w-full" src="/images/stand/energical.jpg" alt="" />
      </div>
    </Content>
  );
};

export default Graphisme;
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
