import { useRouter } from "next/router";
import { createContext, useEffect, useState } from "react";
export const State = createContext(null);

function Context({ children }) {
  const router = useRouter();
  function removeFirstLetter(str) {
    let newStr = str.slice(1); // remove first character
    return newStr.toLowerCase(); // convert to lower case and return
  }
  const [showRightMenu, setShowRightMenu] = useState(
    typeof window !== "undefined" && sessionStorage.getItem("showRightMenu")
      ? sessionStorage.getItem("showRightMenu")
      : false
  );
  useEffect(() => {
    sessionStorage.setItem("showRightMenu", showRightMenu);
  }, [showRightMenu]);
  // controlling page url and state
  const [page, setPage] = useState(
    typeof window !== "undefined" && sessionStorage.getItem("page")
      ? sessionStorage.getItem("page")
      : removeFirstLetter(router.pathname)
  );
  useEffect(() => {
    console.log("setting page to", page);
    if (page) {
      sessionStorage.setItem("page", page);
      console.log("page run");
    } else {
      setPage("home");
      sessionStorage.setItem("page", "home");
    }
  }, [page]);
  const [subPage, setSubPage] = useState(
    typeof window !== "undefined" && sessionStorage.getItem("setSubPage")
      ? sessionStorage.getItem("setSubPage")
      : page === "agency"
      ? "philosophie"
      : page === "services"
      ? "consulting"
      : page === "events"
      ? "seer"
      : page === "achievements"
      ? "events"
      : ""
  );
  useEffect(() => {
    sessionStorage.setItem("subPage", subPage);
  }, [subPage]);
  useEffect(() => {
    if (page === "agency") {
      setSubPage("philosophie");
    }
    if (page === "services") {
      setSubPage("consulting");
    }
    if (page === "events") {
      setSubPage("seer");
    }
    if (page === "achievements") {
      setSubPage("events");
    }
  }, [page]);
  return (
    <State.Provider
      value={{
        page,
        setPage,
        subPage,
        setSubPage,
        showRightMenu,
        setShowRightMenu,
      }}
    >
      {children}
    </State.Provider>
  );
}
export default Context;
