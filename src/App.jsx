import { useState, createContext } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Header from "./components/Layout/Header";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import { light, dark } from "./theme";

// export const CountContext = createContext();
export const LoggedIn = createContext();
export const Theme = createContext();

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [darkModeClass, setDarkModeClass] = useState(false);
  // const [count, setCount] = useState(0);
  return (
    <LoggedIn.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      <Theme.Provider value={{ theme: darkMode ? dark : light, setDarkMode }}>
        <div className={`App ${darkModeClass ? "Dark" : ""}`}>
          {/* <CountContext.Provider value={{ count, setCount }}> */}
          {/* <button
          onClick={() => {
            setCount((prev) => (prev += 1));
          }}
          >
          Increase me!!!
        </button> */}
          {/* </CountContext.Provider> */}
          <Header setDarkModeClass={setDarkModeClass} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signin" element={<SignIn />} />
          </Routes>
        </div>
      </Theme.Provider>
    </LoggedIn.Provider>
  );
}

export default App;
