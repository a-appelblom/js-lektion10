import { useContext } from "react";
import { CountContext } from "../App";

export default function CounterCard({ title, count, subtitle, setCount }) {
  // const { count: contextCount, setCount: setContextCount } =
  //   useContext(CountContext);
  return (
    <div>
      {/* <h3>{title}</h3>
      <p>{count}</p>
      <p>{subtitle}</p>
      <button onClick={() => setCount((prev) => (prev += 1))}>
        Change count {count}
      </button> */}
      {/* <p>{contextCount}</p>
      <button
        onClick={() => {
          setContextCount((prev) => (prev += 1));
        }}
      >
        Increase me!!!
      </button> */}
    </div>
  );
}
