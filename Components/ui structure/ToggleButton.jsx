import { ClassNames } from "@emotion/react";
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
      className="p-2 rounded-md text-white"
      onClick={toggleDarkMode}
    >
      {darkModeEnabled ? <CiDark /> : <MdOutlineLightMode />}
    </button>

    
    /* <label className="relative inline-flex items-center cursor-pointer">
      <input type="checkbox" className="sr-only peer" onClick={toggleDarkMode}/>
      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#b81294d2] dark:peer-focus:ring-[#7e206a96] rounded-full peer dark:bg-gray-700 
      peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 
      after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#6e135b]"></div>
      
    </label>   */

      
  );
}

export default DarkModeToggle;
