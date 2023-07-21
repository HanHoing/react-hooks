import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    const {
      target: { value }
    } = event;

    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(value);  //value가 조건에 만족해야 입력됨
    }

    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange };
};

const App = () => {
  const validatorFunction = (value) => value.length <= 10; //길이 10이하 입력가능
  const validatorFunction2 = (value) => !value.includes("@"); //@ 입력불가
	// true or false로 리턴되는 검증 함수

  const name = useInput("Mr.hoing", validatorFunction2);
  return (
    <div className="App">
      <h1>Hello</h1>
      <input placeholder="name" {...name} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);