// import { useState } from "react";
// import Counter from "../components/Counter";
import { useContext } from "react";
import { Theme } from "../App";
import Hero from "../components/Hero";

export default function Home() {
  const { theme } = useContext(Theme);
  //   const [count, setCount] = useState(0);
  return (
    <div className="App">
      <div style={theme}>
        <Hero />
        {/* <Counter count={count} setCount={setCount} /> */}
        {/* <Counter /> */}
        {/* <h1>{count}</h1> */}
      </div>
    </div>
  );
}
