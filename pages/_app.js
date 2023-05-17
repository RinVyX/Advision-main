import Ui from "../Components/Ui";
import "../styles/globals.css";
import Context from "../Context/context";
import { ThemeProvider } from "next-themes";
function MyApp({ Component, pageProps }) {
  return (
    <Context>
      <Ui className="font-Signika" children={<Component {...pageProps} />} />
    </Context>
  );
}

export default MyApp;
