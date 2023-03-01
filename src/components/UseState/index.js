import "./UseState.css";
import { useState } from "react";

const UseState = () => {
  const [theme, setTheme] = useState("light");
  const [count, setCount] = useState(window.localStorage.getItem("item") || 0);

  return (
    <div className={theme}>
      <h1>UseState Component</h1>
      {/*<button onClick={() => setTheme("dark")}>Dark</button>*/}
      {/*<button onClick={() => setTheme("light")}>Light</button>*/}
      <button
        onClick={() =>
          theme === "dark" ? setTheme("light") : setTheme("dark")
        }
      >
        Toggle Theme
      </button>
      <h1>{count}</h1>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increment
      </button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};

export default UseState;
