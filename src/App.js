import React, { useState } from "react";
import "./App.css";
import ThemeContext from "./context/ThemeContext";
import Header from "./components/Header";
import Characters from "./components/Characters";

function App() {
  const [theme, setTheme] = useState("bg-light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={"App " + theme}>
        <Header />
        <Characters />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
