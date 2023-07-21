import useEffect from "react";

export const useBeforeLeave = (onBefore) => {
  useEffect(() => {
    if (!onBefore || typeof onBefore !== "function") {
      return;
    }

    document.addEventListener("mouseleave", handle);
    return () => document.removeEventListener("mouseleave");
  }, []);


  const handle = (event) => {
    const { clientY } = event;
    if (clientY <= 0) {
      onBefore();
    }
  };
};