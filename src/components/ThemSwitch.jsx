import { useState, useEffect } from "react";
import { FaRegMoon } from "react-icons/fa";
import { GoSun } from "react-icons/go";

function ThemeSwitch() {
  const [theme, setTheme] = useState(false);

  const themeToggle = () => {
    setTheme((prevMode) => !prevMode);
  };

  useEffect(() => {
    const isDarkMode = localStorage.getItem('darkmode') === 'true';
    setTheme(isDarkMode);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme);
    localStorage.setItem('darkmode', theme);
  }, [theme]);

  return (
    <div className="z-10 px-4 text-2xl rounded-md cursor-pointer" onClick={themeToggle}>
      {theme ? <GoSun className="text-white" /> : <FaRegMoon className="text-black" />}
    </div>
  );
}

export default ThemeSwitch;