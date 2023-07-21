import React, { useEffect, useRef } from "react";
import { createRoot } from "react-dom/client";

const useFadeIn = (duration = 1, delay = 0) => {

  const element = useRef(null);
  
  useEffect(() => {
    if (typeof duration !== "number" || typeof delay !== "number") {
      return;
    }

    if (element.current) {
      const { current } = element;
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}`;
      current.style.opacity = 1;
    }
  }, []);

  return { ref: element, style: { opacity: 0 } };
};

const App = () => {
  const fadeInH1 = useFadeIn(3, 2);
  const fadeInP = useFadeIn(5, 2);
  return (
    <div className="App">
      <h1 {...fadeInH1}>Hello</h1>
      <p {...fadeInP}>lorem ipsum lalalalal</p>
    </div>
  );
};

createRoot(document.getElementById("root")).render(<App />);