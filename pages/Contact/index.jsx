import { useEffect, useState } from "react";
import { useTransition, animated } from "react-spring";
import { useContext } from "react";
import { State } from "../../Context/context";
import { CgCopy } from "react-icons/cg";
import { Html } from "@react-email/html";
import { Text } from "@react-email/text";
import { Section } from "@react-email/section";
import { Container } from "@react-email/container";

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
  return (
    <div className="w-[100%] h-[100%] relative dark:text-gray-300">
      {Transition(
        (style, item) =>
          item && (
            <animated.div
              style={style}
              className="absolute w-[100%] h-full font-kanit"
            >
             <Html>
              <Section style={main}>
                <Container style={container}>
                  <Text style={heading}>Hi there!</Text>
                  <Text style={paragraph}>Welcome to our app!</Text>
                </Container>
              </Section>
            </Html>
            </animated.div>
          )
      )}
    </div>
  );
}

// Styles for the email template
const main = {
  backgroundColor: "#ffffff",
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
  width: "580px",
};

const heading = {
  fontSize: "32px",
  lineHeight: "1.3",
  fontWeight: "700",
  color: "#484848",
};

const paragraph = {
  fontSize: "18px",
  lineHeight: "1.4",
  color: "#484848",
};