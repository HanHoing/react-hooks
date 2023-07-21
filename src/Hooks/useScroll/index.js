import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";

const useScroll = () => {
  const [state, setState] = useState({ x: 0, y: 0 });

  const onScroll = () => {
    //console.log(window.scrollX, window.scrollY);
    setState({ x: window.scrollX, y: window.scrollY });
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  return state;
};

const App = () => {
  const { y } = useScroll();
  console.log(y);
  return (
    <div className="App" style={{ height: "1000vh" }}>
      <h1 style={{ position: "fixed", color: y > 100 ? "red" : "blue" }}>Hi</h1>
    </div>
  );
};

createRoot(document.getElementById("root")).render(<App />);