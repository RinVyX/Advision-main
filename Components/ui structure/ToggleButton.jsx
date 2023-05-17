import { useState } from "react";
import { CiDark } from "react-icons/ci";
import { MdOutlineLightMode } from "react-icons/md";
function DarkModeToggle() {
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);

  function toggleDarkMode() {
    const html = document.querySelector("html");
    html.classList.toggle("dark");
    setDarkModeEnabled(!darkModeEnabled);
  }

  return (
    <button
      className="p-2 rounded-md bg-gray-300 dark:bg-gray-800 text-gray-800 dark:text-white"
      onClick={toggleDarkMode}
    >
      {darkModeEnabled ? <CiDark /> : <MdOutlineLightMode />}
    </button>
  );
}

export default DarkModeToggle;
