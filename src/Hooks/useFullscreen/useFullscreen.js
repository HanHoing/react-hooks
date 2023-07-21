import useRef from "react";

export const useFullscreen = (callback) => {
  const element = useRef();

  const triggerFull = () => {
    if (element.current) {
      element.current.requestFullscreen(); 
      if (callback && typeof callback === "function") {
        callback(true);
      }
    }
  };

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
