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
    <div className="w-[100%] h-[100%] dark:bg-black">
      {Transition(
        (style, item) =>
          item && (
            <animated.div
              config={{ duration: 500 }}
              style={style}
              className="absolute w-full h-full justify-center items-center"
            >
              <div className="w-full h-[calc(100vh-100px)] justify-center items-center flex gap-10 flex-col">
                <img src="/images/logo.png" className="w-[300px] h-[300px]" />
                <div className="flex justify-center items-center flex-col gap-4 font-Signika">
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
