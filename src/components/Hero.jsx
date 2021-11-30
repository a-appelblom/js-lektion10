import { useContext } from "react";
import { LoggedIn } from "../App";

export default function Hero() {
  const { isLoggedIn } = useContext(LoggedIn);
  return (
    <section>
      {isLoggedIn ? (
        <div>
          <h1>IT är framtiden</h1>
          <p>Här hittar du Yh-utbildningar inom IT- och teknikområdet.</p>
          <button>Till utbildningar {">>"}</button>
        </div>
      ) : (
        <p>Logga in för att se mer</p>
      )}
    </section>
  );
}
