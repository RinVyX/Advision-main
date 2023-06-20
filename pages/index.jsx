import React, { useEffect, useState, useRef } from "react";
import { useTransition, animated } from "react-spring";
import { useContext } from "react";
import { State } from "../Context/context";
import { MouseParallax } from 'react-just-parallax';
import { useParallax } from "react-scroll-parallax";
import Image from "next/image";
export default function Home({}) {

  // parallax
/*   const target = useRef(null);
  const train = useParallax({
    speed: 500,
    targetElement: target.current,
  });

  const cloud = useParallax({
    speed: 200,
    targetElement: target.current,
  });
 */

  const { page } = useContext(State);
  const [animate, setAnimate] = useState(true);
  const Transition = useTransition(animate, {
    from: { left: "-100%", opacity: 0 },
    enter: { left: "0", opacity: 1 },
    leave: { left: "-100%", opacity: 0 },
  });
  useEffect(() => {
    if (page === "home") {
      setAnimate(true);
    } else {
      setAnimate(false);
    }
  }, [page]);

  return (
    
    <div className="w-[100%] h-[100%] dark:bg-[#1f1f1f]">
      {Transition(
        (style, item) =>
          item && (
            <animated.div
              config={{ duration: 500 }}
              style={style}
              className=""
            >            

              {/* parallax */}
              {/* <div ref={target} style={{
                backgroundImage: "url('/para/Scene.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: '3000px'
              }} className="h-screen">
                
                <div className="fixed top-10 left-40">
                  <Image src="/para/Sun.png" height={120} width={120} />
                </div>
                <div ref={train.ref} className="absolute"
                style={{
                  top: '16vh',
                  left: '30vw',
                }}>
                  <Image src="/para/train.png" height={350} width={700} />
                </div>
                <div ref={cloud.ref} className="absolute top-10">
                  <Image  src="/para/Cloud.png" height={200} width={1000} />
                </div>
              </div> */}
              <div className="w-full h-[calc(100vh-100px)] m-[100px] my-[200px]">
                {/* <div className="item-center pl-5 pb-5">
                  <MouseParallax enableOnTouchDevice >
                    <img src="/images/logo.png" className="w-[300px] h-[300px] m-40 " />  
                    <div className="text-6xl text-center">AdVision El DJAZAIR</div>
                  </MouseParallax>
                </div> */}
                <div className="font-Kanit text-black bg-clip-text">
                  <div className="text-[106px] leading-[100px]">
                    <div className="inline-flex">
                      <span className="font-bold text-[#1f1f1f] dark:bg-gradient-to-r dark:from-pink-500 dark:to-violet-500 dark:text-transparent dark:bg-clip-text">We speak </span>
                      &nbsp;
                      <div className="font-light"> your language, </div>
                    </div>
                    <div className="inline-flex tracking-wide"> 
                     <div className="font-bold italic text-[#1f1f1f]"> wherever </div>
                     &nbsp;
                     <div className="font-light "> you are. </div>                       
                    </div>
                  </div>
                  <div className="text-[55px] leading-[100px] inline-flex tracking-wide">
                    <div className="font-light"> Unleashing the Power of </div>
                    &nbsp;
                    <div className=" text-[#a82a7e]"> Global Vision </div>
                    &nbsp;
                    <div className="font-light"> in </div>
                    &nbsp;
                    <div className=" text-[#a82a7e]"> Communication. </div>                      
                  </div>
                </div>
              </div>
            </animated.div>
          )
      )}
    </div>
  );
}
