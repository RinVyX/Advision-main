import Ui from "../Components/Ui";
import "../styles/globals.css";
import Context from "../Context/context";

import { ParallaxProvider } from 'react-scroll-parallax';

import { ThemeProvider } from "next-themes";
function MyApp({ Component, pageProps }) {
  return (
    <Context>
      <Ui className="font-Signika" children={<Component {...pageProps} />} />
      <Ui className="font-Kanit" children={<Component {...pageProps} />} />
      
    </Context>
  );
}

export default MyApp;
