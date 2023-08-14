import { useEffect, useState } from "react";
import { useTransition, animated } from "react-spring";
import { useContext } from "react";
import { State } from "../../Context/context";
import styled from "styled-components";
import { CgCopy } from "react-icons/cg";
import emailjs from '@emailjs/browser';
import {useRef} from 'react';

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


  /* Mail Copy */
  const [copys1, setCopys1] = useState(false);
  const [copys2, setCopys2] = useState(false);
  const [copys3, setCopys3] = useState(false);
  const handleCopy = (copy) => {
    if (copy === "copy1") {
      navigator.clipboard.writeText("contact@advision-dz.net");
      setCopys1(true);
      setTimeout(() => {
        setCopys1(false);
      }, 1000);
    }
    if (copy === "copy2") {
      navigator.clipboard.writeText("recrutement@advision-dz.net");
      setCopys2(true);
      setTimeout(() => {
        setCopys2(false);
      }, 1000);
    }
    if (copy === "copy3") {
      navigator.clipboard.writeText("advision.contact@gmail.com");
      setCopys3(true);
      setTimeout(() => {
        setCopys3(false);
      }, 1000);
    }
  };


  const name = useRef(null);
  const email = useRef(null);
  const subject = useRef(null);
  const message = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    /* emailjs.sendForm('service_i0j9asi', 'template_vx63a5n', e.target, '8v47NOKvNz6V_Sj9y'); */
    Email.send({
      SecureToken : 'fad7d214-1e60-4141-ac46-eb6bebc6e6e2',
      To : "dev@advision-dz.net",
      From : "contact@advision-dz.net",
      Subject : subject.current.value,
      Body : `
      <div className="max-w-md text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
        <div className="">
            <div className="">Nom et Prénom :</div>
            <div className="">`+name.current.value+`</div>
        </div>
        <div className="">
            <div className="">Adresse Email :</div>
            <div className="">`+email.current.value+`</div>
        </div>
        <div className="">
            <div className="">Sujet :</div>
            <div className="">`+subject.current.value+`</div>
        </div>
        <div className="">
            <div className="">Message :</div>
            <div className="">`+message.current.value+`</div>
        </div>
      </div> 
      `
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
              className="w-[100%] h-full font-kanit"
            >

              <div className="mt-10 flex justify-center items-center">
                <div className=" w-full max-w-md p-4 bg-white/30 backdrop-blur-md rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800/40 dark:border-gray-700">
                    <form className="space-y-3" onSubmit={sendEmail}>
                        <div className="text-3xl font-medium text-gray-900 dark:text-white">Contact</div>
                        <div>
                            <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nom et prénom</label>
                            <input type="name" name="name" id="name" ref={name}
                                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                                              dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" 
                                  placeholder="" required/>
                        </div>
                        <div>
                            <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Adresse Mail</label>
                            <input type="email" name="email" id="email" ref={email}
                                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                                             dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" 
                                  placeholder="name@company.com" required/>
                        </div>
                        <div>
                            <label for="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Sujet</label>
                            <input type="subject" name="subject" id="subject" ref={subject}
                                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                                              dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" 
                                  placeholder="" required/>
                        </div>
                        <div>
                            <label for="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Message</label>
                            <textarea type="message" name="message" id="message" ref={message}
                                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                                              dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" 
                                  placeholder="Messagee ....." rows="5" required/>
                        </div>
                        <button type="submit" className="w-full text-white bg-[#900064] hover:bg-[#730050] focus:ring-4 focus:outline-none focus:ring-[#efcee6] font-medium r
                                                        ounded-lg text-sm px-5 py-2.5 text-center dark:bg-[#cb5dae] dark:hover:bg-[#900064] dark:focus:ring-[#730050]">
                            Envoyer
                        </button>                      
                    </form>

                    <div className="flex justify-center items-center sm:gap-2 gap-1 mt-3">
                    <p className="dark:text-white text-slate-800">
                      contact@advision-dz.net
                    </p>
                    <div className="w-[30px] h-[30px] relative">
                      <CgCopy
                        onClick={() => handleCopy("copy1")}
                        className="cursor-pointer"
                      />
                      <div
                        className={`${
                          copys1 ? "absolute" : "hidden"
                        } top-[-45px] left-[-75px] sm:left-[-10px] text-xs px-[5px] py-[4px] bg-gray-300 whitespace-nowrap rounded-md text`}
                      >
                        Email copied
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center items-center sm:gap-2 gap-1">
                    <p className="">
                      recrutement@advision-dz.net
                    </p>
                    <div className="w-[30px] h-[30px] relative">
                      <CgCopy
                        onClick={() => handleCopy("copy2")}
                        className="cursor-pointer"
                      />
                      <div
                        className={`${
                          copys2 ? "absolute" : "hidden"
                        } top-[-45px] left-[-75px] sm:left-[-10px] text-xs px-[5px] py-[4px] bg-gray-300 whitespace-nowrap rounded-md text`}
                      >
                        Email copied
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center items-center sm:gap-2 gap-1 mb-2">
                    <p className="">
                      advision.contact@gmail.com
                    </p>
                    <div className="w-[30px] h-[30px] relative">
                      <CgCopy
                        onClick={() => handleCopy("copy3")}
                        className="cursor-pointer"
                      />
                      <div
                        className={`${
                          copys3 ? "absolute" : "hidden"
                        } top-[-45px] left-[-75px] sm:left-[-10px] text-xs px-[5px] py-[4px] bg-gray-300 whitespace-nowrap rounded-md text`}
                      >
                        Email copied
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center items-center gap-4">
                    <a href="https://www.youtube.com/@advision6492/videos" target="_blank">
                      <FlipIcon icon="/images/youtube.png" color="#0a66c2" />
                    </a>
                    <a href="https://www.facebook.com/advisioneldjazair" target="_blank">
                      <FlipIcon icon="/images/facebook.png" color="#2481cc" />
                    </a>
                    <a href="https://www.linkedin.com/company/74389890/admin/" target="_blank">
                      <FlipIcon icon="/images/linkedin.png" color="#2481cc" />
                    </a>
                    <a href="https://www.instagram.com/advision.dz/" target="_blank">
                      <FlipIcon icon="/images/instagram.png"  />
                    </a>
                  </div>
                </div>
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

const FlipIcon = ({ icon }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div>
      <div
        className={`w-[55px] h-[55px] bg-gray-300 rounded-lg flex justify-center items-center relative overflow-hidden
        hover:bg-[#2c031cfb] transition delay-150 duration-350 ease-in-out cursor-pointer transform hover:scale-105 `}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div
          className={`w-full h-full flex justify-center items-center absolute top-0 ${
            hovered && "translate-y-[100%]"
          } transition delay-150 duration-350 ease-in-out cursor-pointer"
          `}
        >
          <img src={icon} alt="git" width="32px" height="32px" />
        </div>
        <div
          className={`w-full h-full flex justify-center items-center absolute top-[-100%] ${
            hovered && "translate-y-[100%]"
          } transition delay-150 duration-350 ease-in-out cursor-pointer`}
        >
          <img src={icon} alt="git" width="32px" height="32px" />
        </div>
      </div>
    </div>
  );
};
