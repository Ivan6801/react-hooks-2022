import { useState, useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);

  const handleClick = () => {
    setDarkMode(!darkMode);
    theme === "bg-light" ? setTheme("bg-dark") : setTheme("bg-light");
  }

  return (
    <div className="Header">
      <h1>React Hooks</h1>
      <button type="button" className="button-toggle" onClick={handleClick}>
        {darkMode ? "Dark Mode" : "Light Mode"}
      </button>
    </div>
  );
}

export default Header;