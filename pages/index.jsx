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
    <div className="w-[100%] h-[100%] dark:bg-[#1f1f1f] select-none">
      {Transition(
        (style, item) =>
          item && (
            <animated.div
              config={{ duration: 500 }}
              style={style}
              className="absolute w-full h-full"
            >
              <div className="w-full h-[calc(100vh-100px)] m-[100px] my-[200px]">
                <div className="font-Kanit text-black bg-clip-text">
                  <div className="text-[106px] leading-[100px]">
                    <div className="inline-flex">
                      <span className="font-bold text-[#1f1f1f] 
                                       dark:bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] dark:from-rose-500 dark:to-fuchsia-800 dark:text-transparent dark:bg-clip-text">
                        We speak 
                      </span>
                      &nbsp;
                      <div className="font-light dark:text-gray-200"> your language, </div>
                    </div>
                    <div className="inline-flex tracking-wide"> 
                      <div className="font-bold italic text-[#1f1f1f]
                                     dark:bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] dark:from-rose-500 dark:to-fuchsia-800 dark:text-transparent dark:bg-clip-text"> 
                        wherever 
                      </div>
                     &nbsp;
                     <div className="font-light dark:text-gray-200"> you are. </div>                       
                    </div>
                  </div>
                  <div className="text-[55px] leading-[100px] inline-flex tracking-wide">
                    <div className="font-light dark:text-gray-200"> Unleashing the Power of </div>
                    &nbsp;
                    <div className="bg-gradient-to-r from-pink-700 to-pink-200 bg-[length:100%_4px] bg-no-repeat pb-[-5px] bg-bottom
                                    dark:bg-gradient-to-r dark:from-rose-500 dark:to-fuchsia-600 dark:bg-[length:100%_4px] dark:bg-no-repeat dark:pb-[-5px] dark:bg-bottom dark:text-gray-100"> 
                         Global Vision </div>
                    &nbsp;
                    <div className="font-light dark:text-gray-200"> in </div>
                    &nbsp;
                    <div className="bg-gradient-to-r from-pink-700 to-pink-200 bg-[length:100%_4px] bg-no-repeat pb-[-5px] bg-bottom
                                    dark:bg-gradient-to-r dark:from-rose-500 dark:to-fuchsia-600 dark:bg-[length:100%_4px] dark:bg-no-repeat dark:pb-[-5px] dark:bg-bottom dark:text-gray-100">
                         Communication. </div>                      
                  </div>
                </div>
              </div>
            </animated.div>
          )
      )}
    </div>
  );
}
