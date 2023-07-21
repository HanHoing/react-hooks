import React, { useState, useEffect, useRef } from "react";
import { createRoot } from "react-dom/client";

const useNotification = (title, option) => {
  //window창에서 실행중인지 확인
  if (!("Notification" in window)) {
    return;
  }

  const fireNotif = () => {
    //granted: 알림표시 권한 부여됨
    if (Notification.permission !== "granted") {
      //권한X
	    //권한 요청
      Notification.requestPermission().then((permission) => {
        if (permission == "granted") {
          new Notification(title, option);
        } else {
          return;
        }
      });
    } else {
      //권한O
      new Notification(title, option);
    }
  };

  return fireNotif;
};

const App = () => {
  const triggerNotif = useNotification("Can I steal your pizza", {
    body: "noooo"
  });
  return (
    <div className="App">
      <button onClick={triggerNotif}>Hi</button>
    </div>
  );
};

createRoot(document.getElementById("root")).render(<App />);