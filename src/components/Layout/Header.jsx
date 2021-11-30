import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { LoggedIn, Theme } from "../../App";

export default function Header({ setDarkModeClass }) {
  const { isLoggedIn, setIsLoggedIn } = useContext(LoggedIn);
  const { theme, setDarkMode } = useContext(Theme);
  useEffect(() => {
    console.log(isLoggedIn);
    console.log(theme);
  });

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "1rem",
        width: "100%",
      }}
    >
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <button onClick={() => setDarkMode((prev) => !prev)}>Toggle Theme</button>
      <button onClick={() => setDarkModeClass((prev) => !prev)}>
        Toggle Theme Class
      </button>
      <button onClick={() => setIsLoggedIn((prev) => !prev)}>
        {isLoggedIn ? "Log out" : "Log In"}
      </button>
    </nav>
  );
}
