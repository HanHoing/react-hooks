import React, { useState, useEffect, useRef } from "react";
import { createRoot } from "react-dom";

const useBeforeLeave = (onBefore) => {
  useEffect(() => {
    if (!onBefore || typeof onBefore !== "function") {
      return;
    }

    document.addEventListener("mouseleave", handle);
    return () => document.removeEventListener("mouseleave");
  }, []);

  const handle = (event) => {
    //onBefore();
    //mouse가 상단 창을 벗어나면 함수 실행
    const { clientY } = event;
    if (clientY <= 0) {
      onBefore();
    }
  };

};

const App = () => {
  const begForLife = () => console.log("leaving");
  useBeforeLeave(begForLife);

  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
};

createRoot(document.getElementById("root")).render(<App />);