import { useEffect, useState } from "react";
import { useTransition, animated } from "react-spring";
import { useContext } from "react";
import { State } from "../../Context/context";
import styled from "styled-components";
import { CgCopy } from "react-icons/cg";
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
  const [copys1, setCopys1] = useState(false);
  const [copys2, setCopys2] = useState(false);
  const [copys3, setCopys3] = useState(false);
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [comment, setComment] = useState("");
  const [success, setSuccess] = useState(false);
  const sendEmail = () => {
    axios
      .post("https://portfoliomailer.onrender.com", {
        email,
        subject,
        comment,
      })
      .then((res) => {
        console.log(res);
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
        }, 2000);
      })
      .catch((err) => {
        console.log(err);
      });
  };
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
                <form className=" justify-center items-center flex-col gap-4 flex">
                  <div className="min-w-[300px]">
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      id="email"
                      className=" bg-gray-200 text-sm rounded-l block w-full p-2.5 lg:w-[400px]"
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div className="min-w-[300px]">
                    <input
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      type="text"
                      id="subject"
                      className=" bg-gray-200 text-sm rounded-l block w-full p-2.5 lg:w-[400px]"
                      placeholder="Subject"
                      required
                    />
                  </div>
                  <div className="min-w-[300px] sm:col-span-2">
                    <textarea
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      id="message"
                      rows="5"
                      className=" bg-gray-200  text-sm rounded-l block w-full p-2.5 lg:w-[400px]"
                      placeholder="Leave a comment..."
                    ></textarea>
                  </div>
                  <div className="flex justify-end items-center mt-2">
                    <button
                      onClick={() => sendEmail()}
                      type="submit"
                      className="py-2 hover:bg-[#34568B] hover:text-white hover:animate-pulse px-2 text-sm justify-items-end font-medium text-center border-2 rounded-md border-black dark:border-white dark:text-white text-slate-800">
                      Send message
                    </button>
                  </div>
                  <div
                    className={`w-full flex justify-center items-center dark:text-white text-slate-800 my-1 ${
                      success ? "visible" : "invisible"
                    }`}
                  >
                    <p>Email Sent</p>
                  </div>
                </form>
              </div>
              <div className="flex justify-center items-center sm:gap-2 gap-1">
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
