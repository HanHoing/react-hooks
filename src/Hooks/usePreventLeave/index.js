import ReactDOM from "react-dom";

const usePreventLeave = () => {
  const listener = (event) => {
    event.preventDefault();  //해당 이벤트에 실행하지 않도록 함
    event.returnValue = ""; //웹페이지에서 일어난 이벤트 정보 clear
  };

 //beforeunload 이벤트 : 실제 페이지를 떠날 것인지 묻는 확인 대화상자 표시
  const enablePrevent = () => window.addEventListener("beforeunload", listener);
  const disablePrevent = () =>
    window.removeEventListener("beforeunload", listener);

  return { enablePrevent, disablePrevent };
};

const App = () => {
  const { enablePrevent, disablePrevent } = usePreventLeave();

  return (
    <div className="App">
      <button onClick={enablePrevent}> Protect</button>
      <button onClick={disablePrevent}> Unprotect</button>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);