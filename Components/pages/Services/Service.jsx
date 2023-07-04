import styled from "styled-components";

const Service = ({ subPage }) => {
  return (
    <Container
      className={`w-full h-full absolute top-0  ease transform duration-300 transition-all ${
        subPage === "service" ? "left-0 opacity-1" : "left-[-100%] opacity-0"
      } font-kanit`}
    >
      <div className="container mx-auto text-justify ">
        <div className="text-2xl font-thin text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
          At AdVision, we share this “sweet” point of view!
        </div>
        {/* <creattie-embed
          src="https://d1k5j68ob7clqb.cloudfront.net/saved_colors/12848/HQEIydvb9rlXjoWn.json"
          delay="1"
          speed="100"
          frame_rate="24"
          stroke_width="22.5"
          trigger="loop"
          style="width:600px;background-color: ">
        </creattie-embed>
        <script src="https://creattie.com/js/embed.js?id=adfc0335539d5f5148f7" defer></script> */}

        <div className="mt-2 text-[20px] text-center text-gray-700 dark:text-gray-300">
          <div>
            To be known and recognized, it is necessary and essential to communicate constantly.
          </div>
          <div className="text-[16px] text-gray-800 dark:text-gray-400 text-center">
            It is by repeating the messages, by capturing the attention of your
            target regularly, by informing and reassuring your customers... that you
            will retain them and attract new ones.
          </div>
        </div>
        <div className="grid grid-cols-1 gap-2 my-8 xl:my-12 xl:gap-2 md:grid-cols-2 xl:grid-cols-3">
            <div className="overflow-hidden bg-cover bg-center rounded-lg h-96 group 
                            bg-[url('https://i.pinimg.com/originals/f8/aa/8d/f8aa8dd95ea6d42633b05c26761df6c4.jpg')]">
                <div
                    className="flex flex-col justify-center w-full h-full px-4 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                    <div className="text-lg md:text-xl xl:text-3xl text-blue-400 uppercase font-bold"
                        onClick={() => {}}> Logo Design </div>
                    <div className=" text-lg md:text-xl xl:text-xl font-thin text-white capitalize">
                    We understand that a logo is the face of your brand, and our talented team of designers will create a distinctive 
                    and memorable logo that embodies your brand's identity. We ensure that your logo represents your values, 
                    resonates with your target audience, and sets you apart from the competition.
                    </div>
                </div>
            </div>
            
            <div className="overflow-hidden bg-cover bg-center rounded-lg h-96 group
                            bg-[url('https://proofbranding.com/wp-content/uploads/2020/07/Brand_Identity_Cover-Image-1.jpg')]">
                <div
                    className="flex flex-col justify-center w-full h-full px-4 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                    <div className="text-lg md:text-xl xl:text-3xl text-blue-400 uppercase font-bold"
                        onClick={() => {}}> Brand Identity </div>
                    <div className=" text-lg md:text-xl xl:text-xl font-thin text-white capitalize">
                      Crafting a cohesive brand identity is crucial for establishing a strong market presence. 
                      Our graphic services include developing brand guidelines, selecting appropriate color schemes, 
                      typography, and visual elements that effectively communicate your brand's personality and values. We strive to create a consistent and memorable brand experience across all touchpoints.
                    </div>
                </div>
            </div>

            <div className="overflow-hidden bg-cover bg-center rounded-lg h-96 group
                            bg-[url('https://svhdiezain.be/wp-content/uploads/2021/03/Groot-formaat-scaled.jpeg')]">
                <div
                    className="flex flex-col justify-center w-full h-full px-4 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                    <div className="text-lg md:text-xl xl:text-3xl text-blue-400 uppercase font-bold"
                        onClick={() => {}}> Print Design </div>
                    <div className=" text-lg md:text-xl xl:text-xl font-thin text-white capitalize">
                      From business cards to brochures, our print design services breathe life into your marketing 
                      collateral. Our team combines captivating imagery, thoughtful layouts, and compelling copy to 
                      create stunning designs that leave a lasting impression. Whether it's designing flyers, posters, 
                      or packaging, we ensure that your print materials align with your brand and capture attention.
                    </div>
                </div>
            </div>
            <div className="overflow-hidden bg-cover bg-center rounded-lg h-96 group
                            bg-[url('https://cdni.iconscout.com/illustration/premium/thumb/infographic-4374981-3630941.png?f=webp')]">
                <div
                    className="flex flex-col justify-center w-full h-full px-4 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                    <div className="text-lg md:text-xl xl:text-3xl text-blue-400 uppercase font-bold"
                       onClick={() => {}}> Illustration and Infographics </div>
                    <div className="mb-4 text-lg md:text-xl xl:text-xl font-thin text-white capitalize">
                      Sometimes, words alone are not enough to convey complex information. Our skilled illustrators 
                      bring concepts to life through captivating illustrations and infographics. Whether 
                      it's explaining a process, simplifying data, or adding a touch of creativity to your content, 
                      our illustrations and infographics enhance understanding and captivate your audience.
                    </div>
                </div>
            </div>
            <div className="overflow-hidden bg-cover bg-center rounded-lg h-96 group
                            bg-[url('https://expertphotography.b-cdn.net/wp-content/uploads/2020/01/photo-retouching-services-online-retouching-experts.png')]">
                <div
                    className="flex flex-col justify-center w-full h-full px-4 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                    <div className="text-lg md:text-xl xl:text-3xl text-blue-400 uppercase font-bold"
                       onClick={() => {}}> Photo Editing and Retouching </div>
                    <div className="mb-4 text-lg md:text-xl xl:text-xl font-thin text-white capitalize">
                      Our graphic services also include professional photo editing and retouching. 
                      We have a keen eye for detail and use advanced techniques to enhance and optimize your images, 
                      ensuring they align with your brand aesthetic. From basic retouching to complex manipulations, 
                      we take your visuals to the next level.
                    </div>
                </div>
            </div>
            <div className="overflow-hidden bg-cover bg-center rounded-lg h-96 group
                            bg-[url('https://waterbearlearning.com/wp-content/uploads/2022/12/andrew-debell-digital-design001.jpg')]">
                <div
                    className="flex flex-col justify-center w-full h-full px-4 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                    <div className="text-lg md:text-xl xl:text-3xl text-blue-400 uppercase font-bold"
                       onClick={() => {}}> Digital Design </div>
                    <div className="mb-4 text-lg md:text-xl xl:text-xl font-thin text-white capitalize">
                      In the digital age, a strong online presence is vital. Our graphic services encompass web design, 
                      social media graphics, and digital advertising materials. Our designers excel in creating visually 
                      engaging websites that are user-friendly, responsive, and optimized for performance. 
                      We also specialize in crafting eye-catching social media graphics and digital ads that drive 
                      engagement and conversions.
                    </div>
                </div>
            </div>
            <div className="overflow-hidden bg-cover bg-center rounded-lg h-96 group
                            bg-[url('https://worldbranddesign.com/wp-content/uploads/2022/08/Mountains-Collection-Coffee-Mockup-0.jpg')]">
                <div
                    className="flex flex-col justify-center w-full h-full px-4 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                    <div className="text-lg md:text-xl xl:text-3xl text-blue-400 uppercase font-bold"
                       onClick={() => {}}> Packaging Design </div>
                    <div className="mb-4 text-lg md:text-xl xl:text-xl font-thin text-white capitalize">
                      The packaging is an essential aspect of product presentation and brand recognition. 
                      Our graphic design company offers comprehensive packaging design services, 
                      creating captivating and functional packaging solutions that reflect your brand identity 
                      while standing out on store shelves. We pay attention to every detail, from structural design 
                      to graphics, ensuring your products make a memorable impact.
                    </div>
                </div>
            </div>
            <div className="overflow-hidden bg-cover bg-center rounded-lg h-96 group
                            bg-[url('https://images.squarespace-cdn.com/content/v1/5497ab83e4b02e9f5e5cec35/1582071566912-Y602050K27QCI64641FH/motion+graphics+animation+nyc?format=1000w')]">
                <div
                    className="flex flex-col justify-center w-full h-full px-4 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                    <div className="text-lg md:text-xl xl:text-3xl text-blue-400 uppercase font-bold"
                       onClick={() => {}}> Motion Graphics and Animation </div>
                    <div className="mb-4 text-lg md:text-xl xl:text-xl font-thin text-white capitalize">
                      To add an extra layer of dynamism to your visual content, our graphic services include motion
                      graphics and animation. Our skilled animators can bring your ideas to life through engaging 
                      and visually stunning animations. Whether it's for explainer videos, presentations, 
                      or social media content, we create captivating motion graphics that make your brand message 
                      stand out.
                    </div>
                </div>
            </div>
            <div className="overflow-hidden bg-cover bg-center rounded-lg h-96 group
                            bg-[url('data:image/jpeg;base64,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')]">
                <div
                    className="flex flex-col justify-center w-full h-full px-4 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                    <div className="text-lg md:text-xl xl:text-3xl text-blue-400 uppercase font-bold"
                       onClick={() => {}}> User Interface (UI) Design </div>
                    <div className="mb-4 text-lg md:text-xl xl:text-xl font-thin text-white capitalize">
                      User experience plays a crucial role in the success of digital products. Our UI design services 
                      focus on creating intuitive and visually appealing interfaces that enhance user engagement and 
                      satisfaction. We ensure seamless navigation, clear hierarchy, and a visually pleasing design 
                      that aligns with your brand and keeps your users coming back for more.
                    </div>
                </div>
            </div>
            <div className="overflow-hidden bg-cover bg-center rounded-lg h-96 group
                            bg-[url('https://fjwp.s3.amazonaws.com/blog/wp-content/uploads/2021/06/24144753/consulting-jobs-1024x512-b-1-1.jpeg')]">
                <div
                    className="flex flex-col justify-center w-full h-full px-4 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                    <div className="text-lg md:text-xl xl:text-3xl text-blue-400 uppercase font-bold"
                       onClick={() => {}}> Consulting </div>
                    <div className="mb-4 text-lg md:text-xl xl:text-xl font-thin text-white capitalize">
                      Our consulting service provides expert guidance and tailored solutions to help businesses achieve
                      their goals. With industry expertise and strategic insights, we drive growth and success by 
                      optimizing operations and navigating market dynamics.
                    </div>
                </div>
            </div>
            <div className="overflow-hidden bg-cover bg-center rounded-lg h-96 group
                            bg-[url('https://www.agievent.com/public/uploads/0000/1/2022/06/26/event-organizer-in-jakarta.jpg')]">
                <div
                    className="flex flex-col justify-center w-full h-full px-4 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                    <div className="text-lg md:text-xl xl:text-3xl text-blue-400 uppercase font-bold"
                       onClick={() => {}}> Event </div>
                    <div className="mb-4 text-lg md:text-xl xl:text-xl font-thin text-white capitalize">
                      Event organizers are professionals who plan, coordinate, and execute events, ensuring flawless 
                      execution and memorable experiences. They work closely with clients, develop event concepts, 
                      manage budgets, coordinate vendors, and oversee operations to achieve event objectives.
                    </div>
                </div>
            </div>
            <div className="overflow-hidden bg-cover bg-center rounded-lg h-96 group
                            bg-[url('https://www.videoservice.pro/images/video-editing.jpg')]">
                <div
                    className="flex flex-col justify-center w-full h-full px-4 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                    <div className="text-lg md:text-xl xl:text-3xl text-blue-400 uppercase font-bold"
                       onClick={() => {}}> Video Production </div>
                    <div className="mb-4 text-lg md:text-xl xl:text-xl font-thin text-white capitalize">
                      Our video production services bring your ideas to life through captivating visual storytelling. 
                      From scriptwriting to post-production, we deliver high-quality videos that captivate your 
                      audience and drive engagement for your brand.
                    </div>
                </div>
            </div>
        </div>      
      {/* <div className="gap-8 columns-3">
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
      </div> */}
      </div>
    </Container>
  );
};

export default Service;
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
