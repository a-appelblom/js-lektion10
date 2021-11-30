import { Link } from "react-router-dom";
import { useContext } from "react";
import { LoggedIn, Theme } from "../App";

export default function About() {
  const { isLoggedIn } = useContext(LoggedIn);
  const { theme } = useContext(Theme);
  return (
    <div style={theme}>
      <h1>About this page</h1>
      <p>We work to make this planet the best place it can be</p>
      {isLoggedIn ? (
        <div>
          <p>Du är inloggad och är redan en stor del av vårat arbete </p>
        </div>
      ) : (
        <div>
          <p>Du är utloggad eller inte en del av vårat arbete </p>
          <Link to="/signin">Gå med oss eller Logga in</Link>
        </div>
      )}
    </div>
  );
}
