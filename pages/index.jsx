import { useEffect, useState, useRef } from "react";
import { useTransition, animated } from "react-spring";
import { useContext } from "react";
import { State } from "../Context/context";
import { MouseParallax } from 'react-just-parallax';
import Image from "next/image";
export default function Home({}) {

  // parallax

  /* const target = useRef(null);
  const train = useParallax({
    speed: 500,
    targetElement: target.current,
  });

  const cloud = useParallax({
    speed: 200,
    targetElement: target.current,
  }); */


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
    // parallax    
    /*{ <div ref={target} style={{
      backgroundImage: "url('/images/para/Scene.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      width: '3000px'
    }} className="h-screen">
      <div className="fixed top-10 left-40">
        <Image src="/images/para/Sun.png" height={120} width={120} />
      </div>
      <div ref={train.ref} className="absolute"
        style={{
          top: '11vh',
          left: '30vw',
        }}
      >
        <Image src="/images/para/Train.png" height={350} width={700} />
      </div>
      <div ref={cloud.ref} className="absolute top-10">
        <Image src="/images/para/Cloud.png" height={200} width={1000} />
      </div>
    </div> }*/


   <div className="w-[100%] h-[100%]  bg-[#F7F7F7] dark:bg-[#1F1F21]">
      {Transition(
        (style, item) =>
          item && (
            <animated.div
              config={{ duration: 500 }}
              style={style}
              className="absolute w-full h-full justify-center items-center"
            >
              

              <div className="w-full h-[calc(100vh-100px)] justify-center items-center flex gap-10 flex-col">
                {/* <div className='wrapper'>
                  <MouseParallax enableOnTouchDevice >
                    <span className='ring'/>
                  </MouseParallax>
                </div> */}
                <div>
                  <MouseParallax enableOnTouchDevice >
                    <img src="/images/logo.png" className="w-[300px] h-[300px]" />  
                  </MouseParallax>
                </div>
                <div className="flex justify-center items-center flex-col gap-4 font-Kanit">
                  <h1 className="text-5xl text-center">AdVision</h1>
                  <div className="w-full flex justify-center items-center">
                    <h2 className="text-3xl text-[#BC227C] text-center">
                      a global vision for communication
                    </h2>
                  </div>
                </div>
              </div>
            </animated.div>
          )
      )}
    </div>
  );
}
