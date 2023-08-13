import { useEffect, useState } from "react";
import { useTransition, animated } from "react-spring";
import { useContext } from "react";
import { State } from "../../Context/context";
import styled from "styled-components";
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
              <div>                
                
              </div>

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
                        <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium r
                                                        ounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Envoyer
                        </button>                      
                    </form>
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