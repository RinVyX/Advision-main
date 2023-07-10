import { useEffect, useState } from "react";
import { useTransition, animated } from "react-spring";
import { useContext } from "react";
import { State } from "../Context/context";

export default function Home({}) {
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
    <div className="w-[100%] h-[100%] select-none">
      {Transition(
        (style, item) =>
          item && (
            <animated.div
              config={{ duration: 500 }}
              style={style}
              className="absolute w-full h-full mx-[5%] my-[200px]"
              >
              <div className="w-full h-full ">
                <div className="font-Kanit text-black bg-clip-text">
                  <div className="min-[1600px]:text-[106px] min-[900px]:text-[90px] min-[800px]:text-[70px] text-[50px] md:leading-[100px]">
                    <div className="inline">
                      <span className="font-bold text-[#1f1f1f] 
                                       dark:bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] dark:from-rose-500 dark:to-fuchsia-800 
                                       dark:text-transparent dark:bg-clip-text">
                        We speak 
                      </span>
                      &nbsp;
                      <span className="font-light dark:text-gray-200"> your language, </span>
                    </div>
                    <div className="inline-ex tracking-wide"> 
                      <span className="font-bold italic text-[#1f1f1f]
                                     dark:bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] dark:from-rose-500 dark:to-fuchsia-800 
                                     dark:text-transparent dark:bg-clip-text"> 
                        wherever 
                      </span>
                     &nbsp;
                     <span className="font-light dark:text-gray-200"> you are. </span>                       
                    </div>
                  </div>
                  <div className="min-[1600px]:text-[55px] min-[900px]:text-[35px] min-[700px]:text-[25px] text-[20px] leading-[100px] inline">
                    <span className="font-light dark:text-gray-200"> Unleashing the Power of </span>
                    &nbsp;
                    <span className=" text-[#1f1f1f] 
                                    dark:bg-gradient-to-r dark:from-rose-500 dark:to-fuchsia-600 dark:bg-[length:100%_4px] 
                                    dark:bg-no-repeat dark:pb-[-5px] dark:bg-bottom dark:text-gray-100"> 
                         Global Vision </span>
                    &nbsp;
                    <span className="font-light dark:text-gray-200"> in </span>
                    &nbsp;
                    <span className=" text-[#1f1f1f] 
                                     dark:bg-gradient-to-r dark:from-rose-500 dark:to-fuchsia-600 dark:bg-[length:100%_4px] 
                                     dark:bg-no-repeat dark:pb-[-5px] dark:bg-bottom dark:text-gray-100">
                          Communication. </span>
                    
                  </div>
                </div>
              </div>
            </animated.div>
          )
      )}
    </div>
  );
}
