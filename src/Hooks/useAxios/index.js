//index.js
import React, { useState, useEffect, useRef } from "react";
import { createRoot } from "react-dom/client";
import useAxios from "./newAxios";

const App = () => {
  const { loading, data, error, refetch } = useAxios({
    url: "https://yts.mx/api/v2/list_movies.json"
  });
  console.log(
    `Loading:${loading}\nError:${error}\nData:${JSON.stringify(data)}`
  ); //stringify() : javascript값 JSON 변환

//논리적 and(&&)
// && : true일시 우항 실행,  || : false일시 우항 실행
  return (
    <div className="App">
      <h1>{data && data.status}</h1>
      <h2>{loading && "Loading"}</h2>
      <button onClick={refetch}>refetch</button>
    </div>
  );
};

createRoot(document.getElementById("root")).render(<App />);