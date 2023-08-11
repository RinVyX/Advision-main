import { useEffect, useState } from "react";
import { useTransition, animated } from "react-spring";
import { useContext } from "react";
import { State } from "../../Context/context";
import styled from "styled-components";
import emailjs from '@emailjs/browser';

export default function Events() {
  const { page } = useContext(State);
  const [animate, setAnimate] = useState(true);
  const Transition = useTransition(animate, {
    from: { right: "-100%", opacity: 0 },
    enter: { right: "0", opacity: 1 },
    leave: { right: "-100%", opacity: 0 },
  });
  useEffect(() => {
    if (page === "contact") {
      setAnimate(true);
    } else {
      setAnimate(false);
    }
  }, [page]);

  const sendEmail = (e) => {
    e.preventDefault();

    /* emailjs.sendForm('service_i0j9asi', 'template_vx63a5n', e.target, '8v47NOKvNz6V_Sj9y'); */
    Email.send({
      SecureToken : 'fad7d214-1e60-4141-ac46-eb6bebc6e6e2',
      To : 'linaagg19@gmail.com',
      From : "dev@advision-dz.net",
      Subject : "This is the subject",
      Body : "And this is the body"
    }).then(
      message => alert(message)
    );
  }

  return (
    <Container className={`w-full h-full absolute`}>
    <div className="w-[100%] h-[100%] relative dark:text-gray-300">
      {Transition(
        (style, item) =>
          item && (
            <animated.div
              style={style}
              className="absolute w-[100%] h-full font-kanit"
            >
              <div className="mt-10">
                <div className="w-full justify-center items-center flex flex-col mb-4">
                  <p className="font-semibold my-4 text-4xl">
                    Contact
                  </p>
                </div>
                <form className=" justify-center items-center flex-col gap-4 flex" onSubmit={sendEmail}>
                <div className="min-w-[300px]">
                    <input
                      type="name"
                      id="name"
                      name="name"
                      className=" bg-gray-200 text-sm rounded-l block w-full p-2.5 lg:w-[400px]"
                      placeholder="Name"
                    />
                  </div>
                  <div className="min-w-[300px]">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className=" bg-gray-200 text-sm rounded-l block w-full p-2.5 lg:w-[400px]"
                      placeholder="Email"
                    />
                  </div>
                  <div className="min-w-[300px]">
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className=" bg-gray-200 text-sm rounded-l block w-full p-2.5 lg:w-[400px]"
                      placeholder="Subject"
                    />
                  </div>
                  <div className="min-w-[300px] sm:col-span-2">
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      className=" bg-gray-200  text-sm rounded-l block w-full p-2.5 lg:w-[400px]"
                      placeholder="Leave a comment..."
                    ></textarea>
                  </div>
                  <div className="flex justify-end items-center mt-2">
                    <button
                      type="submit"
                      className="py-2 hover:bg-[#34568B] hover:text-white hover:animate-pulse px-2 text-sm justify-items-end font-medium text-center border-2 rounded-md border-black dark:border-white dark:text-white text-slate-800">
                      Send message
                    </button>
                  </div>
                </form>
              </div>
            </animated.div>
          )
      )}
    </div>
    </Container>
  );
}
const Container = styled.div`
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #c084fc;
  }
`;