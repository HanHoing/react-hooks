import React, { useRef } from "react";
import { createRoot } from "react-dom/client";

const useFullscreen = (callback) => {
  const element = useRef();

	//전체화면 전환
  const triggerFull = () => {
    if (element.current) {
      element.current.requestFullscreen(); 
      if (callback && typeof callback === "function") {
        callback(true);
      }
    }
  };

  //전체화면 나가기
  const exitFullscreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
      if (callback && typeof callback === "function") {
        callback(false);
      }
    }
  };
  return { element, triggerFull, exitFullscreen };
};

const App = () => {
  const onFulls = (isFull) => {
    console.log(isFull ? "full screen" : "small screen");
    //전체화면이면 full screen , 전체화면 나가기 small screen
  };
  const { element, triggerFull, exitFullscreen } = useFullscreen(onFulls);

  return (
    <div className="App" style={{ height: "1000vh" }}>
      <div ref={element}>
        <img
          src="https://i.ibb.co/R6RwNxx/grape.jpg"
          alt="grape"
          width="250"
        ></img>
        <button onClick={exitFullscreen}>Exit FullScreen</button>
      </div>
      <button onClick={triggerFull}>Make FullScreen</button>
    </div>
  );
};

createRoot(document.getElementById("root")).render(<App />);